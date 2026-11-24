// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, h, reactive } from 'vue'

import { Area } from '../Area'
import { AreaDesign } from '../AreaDesign'
import type { AreaPropsBasic } from '../props'
import type { AreaClasses, AreaComponents, AreaExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('AreaDesign (isolated class)', () => {
  it('should render matched named slot and fall back to default slot', () => {
    const props = reactive<AreaPropsBasic>({ areaDefault: 'header' })

    const Inner = defineComponent({
      setup() {
        const design = new AreaDesign<AreaComponents, AreaExpose, AreaClasses, AreaPropsBasic>(
          'd1.area',
          props
        )

        expect(design.expose()).toHaveProperty('elementHtml')
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          header: () => [h('section', { class: 'slot-header' }, 'Header Slot')],
          default: () => [h('div', { class: 'slot-default' }, 'Default Slot')]
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(host.querySelector('.slot-header')?.textContent).toBe('Header Slot')
    expect(host.querySelector('.slot-default')).toBeNull()
  })

  it('should ignore Object.prototype keys like toString and fall back to default slot', () => {
    const props = reactive<AreaPropsBasic>({ areaDefault: 'toString' })

    const Inner = defineComponent({
      setup() {
        const design = new AreaDesign<AreaComponents, AreaExpose, AreaClasses, AreaPropsBasic>(
          'd1.area',
          props
        )

        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          default: () => [h('span', { class: 'safe-default' }, 'Safe Default')]
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(host.querySelector('.safe-default')?.textContent).toBe('Safe Default')
  })

  it('should support custom ItemConstructor dependency injection and render nothing when no slots match', () => {
    const customSpy = vi.fn()

    class CustomArea extends Area {
      override get area(): string | undefined {
        customSpy()
        return 'missing'
      }
    }

    const Wrapper = defineComponent({
      setup() {
        const design = new AreaDesign<AreaComponents, AreaExpose, AreaClasses, AreaPropsBasic>(
          'd1.area',
          reactive<AreaPropsBasic>({}),
          {},
          CustomArea
        )

        return design.render()
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(customSpy).toHaveBeenCalled()
    expect(host.innerHTML).toBe('<!---->')
  })
})
