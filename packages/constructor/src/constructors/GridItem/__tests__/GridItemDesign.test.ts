// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { GridItem } from '../GridItem'
import { GridItemDesign } from '../GridItemDesign'
import type { GridItemPropsBasic } from '../props'
import type { GridItemClasses, GridItemComponents, GridItemExpose } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('GridItemDesign (isolated class)', () => {
  it('should render root div, bind ref to elementHtml, merge attrs/classes/styles, and project default slot', () => {
    const props = reactive<GridItemPropsBasic>({})
    const onClick = vi.fn()
    let exposed: { elementHtml: { value?: HTMLDivElement } } | undefined

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-gridItem': true,
            'd1-gridItem--base--4': true
          }
        }))
        const styles = computed<ConstrStyles>(() => ({
          gridRow: 'span 2'
        }))

        const design = new GridItemDesign<
          GridItemComponents,
          GridItemExpose,
          GridItemClasses,
          GridItemPropsBasic
        >(
          'd1.gridItem',
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
            id: 'grid-cell',
            class: 'extra-cell',
            style: { marginTop: '8px' },
            onClick
          },
          {
            default: () => [
              h('p', { class: 'slot-child' }, 'Cell Content')
            ]
          }
        )
      }
    })

    const host = document.createElement('div')
    const app = createApp(Wrapper)
    app.mount(host)
    cleanups.push(() => app.unmount())

    const div = host.querySelector('#grid-cell') as HTMLDivElement | null

    expect(div).not.toBeNull()
    expect(div?.tagName).toBe('DIV')
    expect(div?.classList.contains('d1-gridItem')).toBe(true)
    expect(div?.classList.contains('d1-gridItem--base--4')).toBe(true)
    expect(div?.classList.contains('extra-cell')).toBe(true)
    expect(div?.style.gridRow).toBe('span 2')
    expect(div?.style.marginTop).toBe('8px')
    expect(div?.querySelector('.slot-child')?.textContent).toBe('Cell Content')
    expect(exposed?.elementHtml.value).toBe(div)

    div?.click()
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should render an empty div when no default slot is provided', () => {
    const Wrapper = defineComponent({
      setup() {
        const design = new GridItemDesign<
          GridItemComponents,
          GridItemExpose,
          GridItemClasses,
          GridItemPropsBasic
        >(
          'd1.gridItem',
          reactive<GridItemPropsBasic>({})
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

    class CustomGridItem extends GridItem {
      constructor(...args: ConstructorParameters<typeof GridItem>) {
        super(...args)
        constructorSpy(...args)
      }
    }

    const props = reactive<GridItemPropsBasic>({})

    const Wrapper = defineComponent({
      setup() {
        const design = new GridItemDesign<
          GridItemComponents,
          GridItemExpose,
          GridItemClasses,
          GridItemPropsBasic
        >(
          'd1.gridItem',
          props,
          {},
          CustomGridItem
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
    expect(passedNaming.getName()).toBe('d1-gridItem')
  })

  it('should reactively update classes, styles, and slot content on re-render', async () => {
    const showSecondary = ref(false)
    const isCentered = ref(true)
    const minHeight = ref('120px')

    const Inner = defineComponent({
      setup() {
        const classes = computed<ConstrClasses>(() => ({
          main: {
            'd1-gridItem': true,
            'd1-gridItem--align--center': isCentered.value
          }
        }))
        const styles = computed<ConstrStyles>(() => ({
          minHeight: minHeight.value
        }))

        const design = new GridItemDesign<
          GridItemComponents,
          GridItemExpose,
          GridItemClasses,
          GridItemPropsBasic
        >(
          'd1.gridItem',
          reactive<GridItemPropsBasic>({}),
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

    const div = host.querySelector('.d1-gridItem') as HTMLDivElement

    expect(div.classList.contains('d1-gridItem--align--center')).toBe(true)
    expect(div.style.minHeight).toBe('120px')
    expect(div.textContent).toBe('Initial Cell')

    isCentered.value = false
    minHeight.value = '240px'
    showSecondary.value = true
    await nextTick()

    expect(div.classList.contains('d1-gridItem--align--center')).toBe(false)
    expect(div.style.minHeight).toBe('240px')
    expect(div.textContent).toBe('Updated Cell')
  })
})
