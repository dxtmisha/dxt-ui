// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { createApp, defineComponent, h, mergeProps, nextTick, reactive, type Ref } from 'vue'

import { BarsDesign } from '../BarsDesign'
import type { BarsProps } from '../props'
import type { BarsClasses, BarsComponents, BarsExpose } from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
})

/** Mock Button component for testing / Мок-компонент кнопки для тестирования */
const ButtonMock = defineComponent({
  name: 'ButtonMock',
  inheritAttrs: false,
  props: {
    label: [String, Number],
    class: [String, Array, Object],
    selected: Boolean,
    value: [String, Number],
    onClick: Function
  },
  setup(props, { attrs }) {
    return () => h(
      'button',
      mergeProps(
        attrs,
        {
          'class': props.class,
          'data-selected': props.selected ? 'true' : undefined,
          'data-value': props.value,
          'onClick': props.onClick
        }
      ),
      props.label
    )
  }
})

describe('BarsDesign', () => {
  it('should initialize and render component with correct default root structure and merged attrs', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLElement | undefined>

    const TestComponent = defineComponent({
      inheritAttrs: false,
      setup() {
        const props = reactive<BarsProps>({
          label: 'Main Title',
          description: 'Main Description'
        })

        const design = new BarsDesign<BarsComponents, BarsExpose, BarsClasses, BarsProps>(
          'd1.bars',
          props
        )

        const expose = design.expose()
        elementHtmlRef = (expose as unknown as { elementHtml: Ref<HTMLElement | undefined> }).elementHtml

        return design.render()
      }
    })

    const app = createApp({
      render: () => h(TestComponent, { 'class': 'custom-bars', 'data-testid': 'bars-root' })
    })
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.firstElementChild as HTMLElement
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('div')
    expect(rootElement?.classList.contains('custom-bars')).toBe(true)
    expect(rootElement?.dataset.testid).toBe('bars-root')
    expect(elementHtmlRef.value).toBe(rootElement)

    const labelElement = host.querySelector('.d1-bars__label')
    expect(labelElement?.textContent).toContain('Main Title')

    const descElement = host.querySelector('.d1-bars__description')
    expect(descElement?.textContent).toContain('Main Description')
  })

  it('should render back button when not hidden and handle missing components gracefully', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<BarsProps>({
          backButton: { label: 'Back' }
        })

        const design = new BarsDesign<BarsComponents, BarsExpose, BarsClasses, BarsProps>(
          'd1.bars',
          props,
          {
            components: {
              button: ButtonMock
            }
          }
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const button = host.querySelector('button')
    expect(button).not.toBeNull()
    expect(button?.textContent).toBe('Back')
  })

  it('should hide back button when backHide is true in normal mode or backActionHide is true in action mode', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<BarsProps>({
      backHide: true,
      backActionHide: true,
      action: false,
      backButton: { label: 'Back' }
    })

    const TestComponent = defineComponent({
      setup() {
        const design = new BarsDesign<BarsComponents, BarsExpose, BarsClasses, BarsProps>(
          'd1.bars',
          props,
          {
            components: {
              button: ButtonMock
            }
          }
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()
    expect(host.querySelector('button')).toBeNull()

    props.action = true
    await nextTick()
    expect(host.querySelector('button')).toBeNull()

    props.backActionHide = false
    await nextTick()
    expect(host.querySelector('button')).not.toBeNull()
  })

  it('should render bars list when action mode is inactive', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<BarsProps>({
          action: false,
          bars: [{ value: 'action-1', label: 'Action 1' }]
        })

        const design = new BarsDesign<BarsComponents, BarsExpose, BarsClasses, BarsProps>(
          'd1.bars',
          props,
          {
            components: {
              button: ButtonMock
            }
          }
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const buttons = host.querySelectorAll('button')
    expect(buttons.length).toBeGreaterThanOrEqual(1)
    const actionButton = host.querySelector('button[data-value="action-1"]')
    expect(actionButton).not.toBeNull()
    expect(actionButton?.textContent).toBe('Action 1')
  })

  it('should render actionBars list and toggle classes when action mode is active', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<BarsProps>({
      action: true,
      bars: [{ value: 'regular', label: 'Regular' }],
      actionBars: [{ value: 'delete', label: 'Delete' }]
    })

    const TestComponent = defineComponent({
      setup() {
        const design = new BarsDesign<BarsComponents, BarsExpose, BarsClasses, BarsProps>(
          'd1.bars',
          props,
          {
            components: {
              button: ButtonMock
            }
          }
        )

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const regularButton = host.querySelector('button[data-value="regular"]')
    expect(regularButton).toBeNull()

    const deleteButton = host.querySelector('button[data-value="delete"]')
    expect(deleteButton).not.toBeNull()
    expect(deleteButton?.textContent).toBe('Delete')

    const rootElement = host.firstElementChild as HTMLElement
    expect(rootElement?.classList.contains('d1-bars--action')).toBe(true)
  })
})
