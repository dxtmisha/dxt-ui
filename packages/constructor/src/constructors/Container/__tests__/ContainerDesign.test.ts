// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Container } from '../Container'
import { ContainerDesign } from '../ContainerDesign'
import type { ContainerPropsBasic } from '../props'
import type { ContainerClasses, ContainerComponents, ContainerExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('ContainerDesign (isolated class)', () => {
  it('should render root div, bind ref to elementHtml, and project default slot children', () => {
    const props = reactive<ContainerPropsBasic>({ area: 'container' })
    let exposed: { elementHtml: { value?: HTMLDivElement } } | undefined

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-container': true }
        }))
        const styles = computed<ConstrStyles>(() => ({
          paddingInline: '16px'
        }))

        const design = new ContainerDesign<
          ContainerComponents,
          ContainerExpose,
          ContainerClasses,
          ContainerPropsBasic
        >(
          'd1.container',
          props,
          { classes, styles }
        )

        exposed = design.expose() as { elementHtml: { value?: HTMLDivElement } }
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, { id: 'box', class: 'extra', style: { marginTop: '8px' } }, {
          default: () => [
            h('p', { class: 'slot-child' }, 'Slot Content')
          ]
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    const div = host.querySelector('#box') as HTMLDivElement | null

    expect(div).not.toBeNull()
    expect(div?.tagName).toBe('DIV')
    expect(div?.classList.contains('d1-container')).toBe(true)
    expect(div?.classList.contains('extra')).toBe(true)
    expect(div?.style.paddingInline).toBe('16px')
    expect(div?.style.marginTop).toBe('8px')
    expect(div?.querySelector('.slot-child')?.textContent).toBe('Slot Content')
    expect(exposed?.elementHtml.value).toBe(div)
  })

  it('should render an empty div when no default slot is provided', () => {
    const Wrapper = defineComponent({
      setup() {
        const design = new ContainerDesign<
          ContainerComponents,
          ContainerExpose,
          ContainerClasses,
          ContainerPropsBasic
        >(
          'd1.container',
          reactive<ContainerPropsBasic>({})
        )

        return design.render()
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(host.innerHTML).toBe('<div class=""></div>')
  })

  it('should support custom ItemConstructor dependency injection with expected arguments', () => {
    const constructorSpy = vi.fn()

    class CustomContainer extends Container {
      constructor(...args: ConstructorParameters<typeof Container>) {
        super(...args)
        constructorSpy(...args)
      }
    }

    const props = reactive<ContainerPropsBasic>({ area: 'injected' })

    const Wrapper = defineComponent({
      setup() {
        const design = new ContainerDesign<
          ContainerComponents,
          ContainerExpose,
          ContainerClasses,
          ContainerPropsBasic
        >(
          'd1.container',
          props,
          {},
          CustomContainer
        )

        return design.render()
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(constructorSpy).toHaveBeenCalledTimes(1)
    const [passedProps, passedElement, passedNaming] = constructorSpy.mock.calls[0]
    expect(passedProps).toBe(props)
    expect(passedElement.value).toBeInstanceOf(HTMLDivElement)
    expect(passedNaming.getName()).toBe('d1-container')
  })

  it('should reactively update classes, styles, and slot content on re-render', async () => {
    const showSecondary = ref(false)
    const isCentered = ref(true)

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-container': true,
            'd1-container--align--center': isCentered.value
          }
        }))

        const design = new ContainerDesign<
          ContainerComponents,
          ContainerExpose,
          ContainerClasses,
          ContainerPropsBasic
        >(
          'd1.container',
          reactive<ContainerPropsBasic>({}),
          { classes }
        )

        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          default: () => showSecondary.value
            ? [h('span', 'Updated')]
            : [h('span', 'Initial')]
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    const div = host.querySelector('.d1-container') as HTMLDivElement

    expect(div.classList.contains('d1-container--align--center')).toBe(true)
    expect(div.textContent).toBe('Initial')

    isCentered.value = false
    showSecondary.value = true
    await nextTick()

    expect(div.classList.contains('d1-container--align--center')).toBe(false)
    expect(div.textContent).toBe('Updated')
  })
})
