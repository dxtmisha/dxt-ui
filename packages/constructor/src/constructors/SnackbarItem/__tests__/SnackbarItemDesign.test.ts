// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { SnackbarItem } from '../SnackbarItem'
import { SnackbarItemDesign } from '../SnackbarItemDesign'
import type { SnackbarItemProps } from '../props'
import type { SnackbarItemClasses, SnackbarItemComponents, SnackbarItemExpose } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('SnackbarItemDesign', () => {
  it('should initialize all expected subclass names in initClasses, empty initStyles/initExpose, and bind elementHtml ref', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<SnackbarItemClasses>
    let designStyles!: Record<string, unknown>
    let elementHtmlRef!: Ref<HTMLDivElement | undefined>

    const Component = defineComponent({
      setup() {
        const props: SnackbarItemProps = reactive({
          label: 'Design SnackbarItem'
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-snackbarItem': true }
        }))

        const design = new SnackbarItemDesign<
          SnackbarItemComponents,
          SnackbarItemExpose,
          SnackbarItemClasses,
          SnackbarItemProps
        >('d1.snackbarItem', props, { classes: classesToken })

        designClasses = (design as any).initClasses()
        designStyles = (design as any).initStyles()
        elementHtmlRef = (design.expose() as any).elementHtml
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const root = container.querySelector('.d1-snackbarItem')
    expect(root).not.toBeNull()
    expect(elementHtmlRef.value).toBe(root)
    expect(designStyles).toEqual({})

    expect(designClasses.tool).toBe('d1-snackbarItem__tool')
    expect(designClasses.icon).toBe('d1-snackbarItem__icon')
    expect(designClasses.trailing).toBe('d1-snackbarItem__trailing')
    expect(designClasses.context).toBe('d1-snackbarItem__context')
    expect(designClasses.label).toBe('d1-snackbarItem__label')
    expect(designClasses.description).toBe('d1-snackbarItem__description')
    expect(designClasses.body).toBe('d1-snackbarItem__body')
    expect(designClasses.button).toBe('d1-snackbarItem__button')
    expect(designClasses.close).toBe('d1-snackbarItem__close')
    expect(designClasses.actions).toBe('d1-snackbarItem__actions')
  })

  it('should merge external attrs class, style, data attributes, and event listeners via mergeProps', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalClick = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props: SnackbarItemProps = reactive({
          success: true,
          label: 'Merged SnackbarItem'
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-snackbarItem': true }
        }))

        const design = new SnackbarItemDesign<
          SnackbarItemComponents,
          SnackbarItemExpose,
          SnackbarItemClasses,
          SnackbarItemProps
        >('d1.snackbarItem', props, { classes: classesToken })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          'class': 'external-snackbar-class',
          'data-testid': 'merged-snackbar',
          'style': { marginTop: '8px' },
          'onClick': externalClick
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const root = container.querySelector('.d1-snackbarItem') as HTMLDivElement
    expect(root.classList.contains('external-snackbar-class')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('merged-snackbar')
    expect(root.getAttribute('role')).toBe('status')
    expect(root.getAttribute('aria-live')).toBe('polite')
    expect(root.getAttribute('aria-atomic')).toBe('true')
    expect(root.style.marginTop).toBe('8px')

    root.click()
    expect(externalClick).toHaveBeenCalledTimes(1)
  })

  it('should expose public renderMain, renderContext, and renderBody methods and support custom ItemConstructor', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    class CustomSnackbarItem extends SnackbarItem {}
    let designInstance!: SnackbarItemDesign<
      SnackbarItemComponents,
      SnackbarItemExpose,
      SnackbarItemClasses,
      SnackbarItemProps
    >

    const InnerComponent = defineComponent({
      props: { text: String },
      setup(props) {
        return () => h('em', props.text)
      }
    })

    const Component = defineComponent({
      setup() {
        const props: SnackbarItemProps = reactive({
          html: '<span>Raw</span>',
          component: InnerComponent,
          componentProps: { text: 'Inner' }
        })

        designInstance = new SnackbarItemDesign(
          'd1.snackbarItem',
          props,
          undefined,
          CustomSnackbarItem
        )

        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect((designInstance as any).item).toBeInstanceOf(CustomSnackbarItem)
    expect(designInstance.renderMain()).toHaveLength(1)
    expect(designInstance.renderContext()).toHaveLength(1)
    expect(designInstance.renderBody()).toHaveLength(2)
  })
})
