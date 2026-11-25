// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Grid } from '../Grid'
import { GridDesign } from '../GridDesign'
import type { GridPropsBasic } from '../props'
import type { GridClasses, GridComponents, GridExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('GridDesign (isolated class)', () => {
  it('should render root div, bind ref to elementHtml, merge attrs/classes/styles, and project default slot', () => {
    const props = reactive<GridPropsBasic>({})
    const clickSpy = vi.fn()
    let exposed: { elementHtml: { value?: HTMLDivElement } } | undefined

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: { 'd1-grid': true }
        }))
        const styles = computed<ConstrStyles>(() => ({
          '--d1-grid-columns': '12'
        }))

        const design = new GridDesign<
          GridComponents,
          GridExpose,
          GridClasses,
          GridPropsBasic
        >(
          'd1.grid',
          props,
          { classes, styles }
        )

        exposed = design.expose() as { elementHtml: { value?: HTMLDivElement } }
        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(
          Inner,
          {
            id: 'grid-box',
            class: 'extra-grid',
            style: { gap: '16px' },
            onClick: clickSpy
          },
          {
            default: () => [
              h('div', { class: 'grid-cell' }, 'Cell Content')
            ]
          }
        )
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    const div = host.querySelector('#grid-box') as HTMLDivElement | null

    expect(div).not.toBeNull()
    expect(div?.tagName).toBe('DIV')
    expect(div?.classList.contains('d1-grid')).toBe(true)
    expect(div?.classList.contains('extra-grid')).toBe(true)
    expect(div?.style.getPropertyValue('--d1-grid-columns')).toBe('12')
    expect(div?.style.gap).toBe('16px')
    expect(div?.querySelector('.grid-cell')?.textContent).toBe('Cell Content')
    expect(exposed?.elementHtml.value).toBe(div)

    div?.click()
    expect(clickSpy).toHaveBeenCalledTimes(1)
  })

  it('should render an empty div and bind elementHtml when no default slot is provided', () => {
    let exposed: { elementHtml: { value?: HTMLDivElement } } | undefined

    const Wrapper = defineComponent({
      setup() {
        const design = new GridDesign<
          GridComponents,
          GridExpose,
          GridClasses,
          GridPropsBasic
        >(
          'd1.grid',
          reactive<GridPropsBasic>({})
        )

        exposed = design.expose() as { elementHtml: { value?: HTMLDivElement } }
        return design.render()
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    expect(host.innerHTML).toBe('<div class=""></div>')
    expect(exposed?.elementHtml.value).toBeInstanceOf(HTMLDivElement)
  })

  it('should support custom ItemConstructor dependency injection with expected arguments', () => {
    const constructorSpy = vi.fn()

    class CustomGrid extends Grid {
      constructor(...args: ConstructorParameters<typeof Grid>) {
        super(...args)
        constructorSpy(...args)
      }
    }

    const props = reactive<GridPropsBasic>({})

    const Wrapper = defineComponent({
      setup() {
        const design = new GridDesign<
          GridComponents,
          GridExpose,
          GridClasses,
          GridPropsBasic
        >(
          'd1.grid',
          props,
          {},
          CustomGrid
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
    expect(passedNaming.getName()).toBe('d1-grid')
  })

  it('should reactively update classes, styles, and slot content on re-render', async () => {
    const showSecondary = ref(false)
    const isCentered = ref(true)
    const columns = ref('12')

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-grid': true,
            'd1-grid--align--center': isCentered.value
          }
        }))
        const styles = computed<ConstrStyles>(() => ({
          '--d1-grid-columns': columns.value
        }))

        const design = new GridDesign<
          GridComponents,
          GridExpose,
          GridClasses,
          GridPropsBasic
        >(
          'd1.grid',
          reactive<GridPropsBasic>({}),
          { classes, styles }
        )

        return design.render()
      }
    })

    const Wrapper = defineComponent({
      setup() {
        return () => h(Inner, null, {
          default: () => showSecondary.value
            ? [h('span', 'Updated Cell')]
            : [h('span', 'Initial Cell')]
        })
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    const div = host.querySelector('.d1-grid') as HTMLDivElement

    expect(div.classList.contains('d1-grid--align--center')).toBe(true)
    expect(div.style.getPropertyValue('--d1-grid-columns')).toBe('12')
    expect(div.textContent).toBe('Initial Cell')

    isCentered.value = false
    columns.value = '6'
    showSecondary.value = true
    await nextTick()

    expect(div.classList.contains('d1-grid--align--center')).toBe(false)
    expect(div.style.getPropertyValue('--d1-grid-columns')).toBe('6')
    expect(div.textContent).toBe('Updated Cell')
  })
})
