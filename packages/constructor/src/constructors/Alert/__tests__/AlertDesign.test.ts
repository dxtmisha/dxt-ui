// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, type Ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { AlertDesign } from '../AlertDesign'
import type { AlertProps } from '../props'
import type { AlertClasses, AlertComponents, AlertExpose } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

describe('AlertDesign', () => {
  it('should initialize all expected subclass names in initClasses and bind elementHtml ref', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    let designClasses!: Partial<AlertClasses>
    let elementHtmlRef!: Ref<HTMLDivElement | undefined>

    const Component = defineComponent({
      setup() {
        const props: AlertProps = reactive({
          role: 'alert',
          label: 'Design Alert'
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-alert': true }
        }))

        const design = new AlertDesign<
          AlertComponents,
          AlertExpose,
          AlertClasses,
          AlertProps
        >('d1.alert', props, { classes: classesToken })

        designClasses = (design as any).initClasses()
        elementHtmlRef = (design.expose() as any).elementHtml
        return design.render()
      }
    })

    const app = createApp(Component)
    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const root = container.querySelector('.d1-alert')
    expect(root).not.toBeNull()
    expect(elementHtmlRef.value).toBe(root)

    expect(designClasses.icon).toBe('d1-alert__icon')
    expect(designClasses.trailing).toBe('d1-alert__trailing')
    expect(designClasses.context).toBe('d1-alert__context')
    expect(designClasses.label).toBe('d1-alert__label')
    expect(designClasses.description).toBe('d1-alert__description')
    expect(designClasses.body).toBe('d1-alert__body')
    expect(designClasses.button).toBe('d1-alert__button')
    expect(designClasses.buttonClose).toBe('d1-alert__buttonClose')
    expect(designClasses.links).toBe('d1-alert__links')
    expect(designClasses.linksItem).toBe('d1-alert__links__item')
    expect(designClasses.actions).toBe('d1-alert__actions')
  })

  it('should merge external attrs class, style, and onTransitionend via mergeProps', async () => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    cleanups.push(() => container.remove())

    const externalTransition = vi.fn()

    const Component = defineComponent({
      inheritAttrs: false,
      setup() {
        const props: AlertProps = reactive({
          role: 'status',
          label: 'Merged Alert'
        })
        const classesToken = computed<ConstrClasses>(() => ({
          main: { 'd1-alert': true }
        }))

        const design = new AlertDesign<
          AlertComponents,
          AlertExpose,
          AlertClasses,
          AlertProps
        >('d1.alert', props, { classes: classesToken })

        return design.render()
      }
    })

    const app = createApp({
      render() {
        return h(Component, {
          'class': 'external-alert-class',
          'data-testid': 'merged-alert',
          'style': { marginBottom: '12px' },
          'onTransitionend': externalTransition
        })
      }
    })

    app.mount(container)
    cleanups.push(() => app.unmount())
    await nextTick()

    const root = container.querySelector('.d1-alert') as HTMLDivElement
    expect(root.classList.contains('external-alert-class')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('merged-alert')
    expect(root.getAttribute('role')).toBe('status')
    expect(root.style.marginBottom).toBe('12px')

    root.dispatchEvent(new TransitionEvent('transitionend', { propertyName: 'opacity' }))
    expect(externalTransition).toHaveBeenCalledTimes(1)
  })
})
