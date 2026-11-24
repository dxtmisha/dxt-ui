// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Bleed } from '../Bleed'
import { BleedDesign } from '../BleedDesign'
import type { BleedPropsBasic } from '../props'
import type { BleedClasses, BleedComponents, BleedExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('BleedDesign (isolated class)', () => {
  it('should render root tag, merge attrs/classes/styles, and expose elementHtml', () => {
    const props = reactive<BleedPropsBasic>({ tag: 'section' })
    const onClick = vi.fn()
    let exposed: BleedExpose & { elementHtml?: { value?: HTMLDivElement } } = {}

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-bleed': true }
        }))
        const design = new BleedDesign<BleedComponents, BleedExpose, BleedClasses, BleedPropsBasic>(
          'd1.bleed',
          props,
          { classes }
        )

        exposed = design.expose() as BleedExpose & { elementHtml?: { value?: HTMLDivElement } }
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, {
          'class': 'extra-bleed',
          'style': { padding: '4px' },
          'data-testid': 'bleed-root',
          onClick
        }, {
          default: () => [h('p', 'Inner Content')]
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    const root = host.querySelector('[data-testid="bleed-root"]') as HTMLElement
    expect(root.tagName).toBe('SECTION')
    expect(root.classList.contains('d1-bleed')).toBe(true)
    expect(root.classList.contains('extra-bleed')).toBe(true)
    expect(root.style.padding).toBe('4px')
    expect(root.textContent).toBe('Inner Content')
    expect(exposed.elementHtml?.value).toBe(root)

    root.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should support custom ItemConstructor dependency injection', () => {
    class CustomBleed extends Bleed {
      override get tag(): string {
        return 'aside'
      }
    }

    const Inner = defineComponent({
      setup() {
        const design = new BleedDesign<BleedComponents, BleedExpose, BleedClasses, BleedPropsBasic>(
          'd1.bleed',
          reactive<BleedPropsBasic>({}),
          {},
          CustomBleed
        )

        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          default: () => [h('span', 'Injected')]
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(host.firstElementChild?.tagName).toBe('ASIDE')
    expect(host.textContent).toBe('Injected')
  })
})
