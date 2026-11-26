// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { Snackbar } from '../Snackbar'
import { SnackbarDesign } from '../SnackbarDesign'
import type { SnackbarProps } from '../props'
import type { SnackbarClasses, SnackbarComponents, SnackbarExpose } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const SnackbarItemMock = defineComponent({
  name: 'SnackbarItemMock',
  props: {
    label: String,
    value: String
  },
  emits: ['close'],
  setup(props, { emit }) {
    return () => h(
      'div',
      {
        'class': 'mock-snackbar-item',
        'data-item-value': props.value,
        'onClick': () => emit('close', props.value)
      },
      props.label ?? ''
    )
  }
})

describe('SnackbarDesign', () => {
  it('should initialize subclass names in initClasses, empty initStyles, and lazy initExpose', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<SnackbarClasses>
    let designStyles!: Record<string, unknown>
    let exposed!: SnackbarExpose & { elementHtml: Ref<HTMLDivElement | undefined> }

    const Component = defineComponent({
      setup() {
        const props = reactive<SnackbarProps>({})
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-snackbar': true }
        }))

        const design = new SnackbarDesign<
          SnackbarComponents,
          SnackbarExpose,
          SnackbarClasses,
          SnackbarProps
        >('d1.snackbar', props, {
          classes: classesToken,
          components: { snackbarItem: SnackbarItemMock }
        })

        designClasses = (design as unknown as { initClasses: () => Partial<SnackbarClasses> }).initClasses()
        designStyles = (design as unknown as { initStyles: () => Record<string, unknown> }).initStyles()
        exposed = design.expose() as SnackbarExpose & { elementHtml: Ref<HTMLDivElement | undefined> }

        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect(designStyles).toEqual({})
    expect(designClasses.item).toBe('d1-snackbar__item')
    expect(designClasses.space).toBe('d1-snackbar__space')
    expect(designClasses.priority).toBe('d1-snackbar__priority')

    // Empty initially: nothing teleported to document.body
    expect(exposed.isItem()).toBe(false)
    expect(document.body.querySelector('.d1-snackbar')).toBeNull()

    // Add item -> container teleports and binds elementHtml ref
    exposed.add({ value: 'design-1', delay: -1, data: { label: 'Hello' } })
    await nextTick()

    const teleportedRoot = document.body.querySelector('.d1-snackbar')
    expect(teleportedRoot).not.toBeNull()
    expect(exposed.elementHtml.value).toBe(teleportedRoot)
  })

  it('should merge external attrs class, style, data attributes, and mouse listeners via mergeProps', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalMouseenter = vi.fn()
    let exposed!: SnackbarExpose

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<SnackbarProps>({ textNotifications: 'Alerts' })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-snackbar': true }
        }))

        const design = new SnackbarDesign<
          SnackbarComponents,
          SnackbarExpose,
          SnackbarClasses,
          SnackbarProps
        >('d1.snackbar', props, {
          classes: classesToken,
          components: { snackbarItem: SnackbarItemMock }
        })

        exposed = design.expose()
        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          'class': 'external-snackbar-class',
          'data-testid': 'merged-snackbar',
          'style': { zIndex: '20000' },
          'onMouseenter': externalMouseenter
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    exposed.add({ value: 'merged-1', delay: -1, data: { label: 'Merged' } })
    await nextTick()

    const root = document.body.querySelector('.d1-snackbar') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('external-snackbar-class')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('merged-snackbar')
    expect(root.getAttribute('role')).toBe('region')
    expect(root.getAttribute('aria-label')).toBe('Alerts')
    expect(root.style.zIndex).toBe('20000')

    root.dispatchEvent(new MouseEvent('mouseenter'))
    expect(externalMouseenter).toHaveBeenCalledTimes(1)
  })

  it('should expose public renderData, renderItem, and renderSpace, render custom components via toRaw, and support custom ItemConstructor', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    class CustomSnackbar extends Snackbar {}
    let designInstance!: SnackbarDesign<
      SnackbarComponents,
      SnackbarExpose,
      SnackbarClasses,
      SnackbarProps
    >
    let exposed!: SnackbarExpose

    const FunctionalToast = (props: { label?: string }) => h('span', { class: 'functional-toast' }, props.label)
    const ObjectToast = defineComponent({
      props: { label: String },
      setup(props) {
        return () => h('strong', { class: 'object-toast' }, props.label)
      }
    })

    const Component = defineComponent({
      setup() {
        const props = reactive<SnackbarProps>({})

        designInstance = new SnackbarDesign(
          'd1.snackbar',
          props,
          undefined,
          CustomSnackbar
        )

        exposed = designInstance.expose()
        return designInstance.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    expect((designInstance as unknown as { item: Snackbar }).item).toBeInstanceOf(CustomSnackbar)
    expect(designInstance.renderData()).toEqual([])
    expect(designInstance.renderSpace()).toEqual([])
    // When no snackbarItem component is connected and no custom component is given, renderItem returns undefined safely
    expect(designInstance.renderItem({ value: 'no-comp' })).toBeUndefined()

    exposed.add({ value: 'fn-1', delay: -1, component: FunctionalToast, data: { label: 'Fn Label' } })
    exposed.add({ value: 'obj-1', delay: -1, highPriority: true, component: ObjectToast, data: { label: 'Obj Label' } })
    await nextTick()

    expect(designInstance.renderData()).toHaveLength(2)
    expect(designInstance.renderSpace()).toHaveLength(1)
    expect(document.body.querySelector('.functional-toast')?.textContent).toBe('Fn Label')
    expect(document.body.querySelector('.object-toast')?.textContent).toBe('Obj Label')
    expect(document.body.querySelector('aside.d1-snackbar__priority')).not.toBeNull()
    expect(document.body.querySelector('.d1-snackbar__space')).not.toBeNull()
  })
})
