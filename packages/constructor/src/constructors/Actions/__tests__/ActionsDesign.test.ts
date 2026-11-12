// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  reactive,
  type Ref
} from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { ActionsDesign } from '../ActionsDesign'
import type { ActionsProps, ActionsPropsBasic } from '../props'
import type {
  ActionsClasses,
  ActionsComponents,
  ActionsExpose
} from '../types'

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
    disabled: Boolean,
    palette: String,
    size: String,
    value: [String, Number],
    onClick: Function
  },
  setup(props, { attrs }) {
    return () => h(
      'button',
      {
        ...attrs,
        'class': props.class,
        'disabled': props.disabled ? 'true' : undefined,
        'data-palette': props.palette,
        'data-size': props.size,
        'data-value': props.value,
        'onClick': props.onClick
      },
      props.label
    )
  }
})

describe('ActionsDesign (Full Component DOM)', () => {
  it('should render root element in DOM, bind ref to elementHtml, and provide CSS subclasses', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    let elementHtmlRef!: Ref<HTMLElement | undefined>
    let designClasses!: Partial<ActionsClasses>

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({})

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-actions': true,
            'd1-actions--align--right': true
          }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({
          '--sys-gap': '12px'
        }))

        const design = new ActionsDesign<
          ActionsComponents,
          ActionsExpose,
          ActionsClasses,
          ActionsPropsBasic
        >(
          'd1.actions',
          props,
          {
            classes: classesToken,
            styles: stylesToken,
            components: {
              button: ButtonMock
            }
          }
        )

        const expose = design.expose()
        elementHtmlRef = (expose as any).elementHtml
        designClasses = (design as any).classes.value

        return design.render()
      }
    })

    const app = createApp(TestComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const rootElement = host.querySelector('.d1-actions')
    expect(rootElement).not.toBeNull()
    expect(rootElement?.tagName.toLowerCase()).toBe('div')
    expect(rootElement?.classList.contains('d1-actions--align--right')).toBe(true)
    expect(elementHtmlRef.value).toBe(rootElement)

    expect(designClasses.item).toBe('d1-actions__item')
    expect(designClasses.list).toBe('d1-actions__list')
    expect(designClasses.secondary).toBe('d1-actions__secondary')
    expect(designClasses.spacer).toBe('d1-actions__spacer')

    const spacer = host.querySelector('.d1-actions__spacer')
    expect(spacer).not.toBeNull()
  })

  it('should render primary list buttons with merged buttonAttrs and handle clicks', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const onActionsClick = vi.fn()
    const onActionsClickLite = vi.fn()

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({
          buttonAttrs: {
            size: 'md',
            palette: 'primary'
          },
          list: [
            { label: 'Save', value: 'save' },
            { label: 'Submit', value: 'submit', disabled: true }
          ]
        })

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            emits: (type: string, ...args: any[]) => {
              if (type === 'click') onActionsClick(...args)
              if (type === 'clickLite') onActionsClickLite(...args)
            },
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

    const primaryButtons = host.querySelectorAll('button')
    expect(primaryButtons.length).toBe(2)

    const firstButton = primaryButtons[0]
    expect(firstButton?.textContent).toBe('Save')
    expect(firstButton?.classList.contains('d1-actions__item')).toBe(true)
    expect(firstButton?.classList.contains('d1-actions__list')).toBe(true)
    expect(firstButton?.getAttribute('data-size')).toBe('md')
    expect(firstButton?.getAttribute('data-palette')).toBe('primary')

    const secondButton = primaryButtons[1]
    expect(secondButton?.textContent).toBe('Submit')
    expect(secondButton?.hasAttribute('disabled')).toBe(true)
    expect((secondButton as HTMLButtonElement).disabled).toBe(true)

    firstButton?.click()
    expect(onActionsClick).toHaveBeenCalledTimes(1)
    expect(onActionsClickLite).toHaveBeenCalledTimes(1)
  })

  it('should render secondary list buttons with merged buttonSecondaryAttrs and handle clicks', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const onActionsClick = vi.fn()
    const onActionsClickLite = vi.fn()

    const TestComponent = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({
          buttonSecondaryAttrs: {
            size: 'sm',
            palette: 'neutral'
          },
          listSecondary: [
            { label: 'Cancel', value: 'cancel' },
            { label: 'Reset', value: 'reset' }
          ]
        })

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            emits: (type: string, ...args: any[]) => {
              if (type === 'click') onActionsClick(...args)
              if (type === 'clickLite') onActionsClickLite(...args)
            },
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

    const secondaryButtons = host.querySelectorAll('button')
    expect(secondaryButtons.length).toBe(2)

    const cancelButton = secondaryButtons[0]
    expect(cancelButton?.textContent).toBe('Cancel')
    expect(cancelButton?.classList.contains('d1-actions__item')).toBe(true)
    expect(cancelButton?.classList.contains('d1-actions__secondary')).toBe(true)
    expect(cancelButton?.getAttribute('data-size')).toBe('sm')
    expect(cancelButton?.getAttribute('data-palette')).toBe('neutral')

    cancelButton?.click()
    expect(onActionsClick).toHaveBeenCalledTimes(1)
    expect(onActionsClickLite).toHaveBeenCalledTimes(1)
  })

  it('should render both primary, spacer, and secondary buttons simultaneously in correct layout order according to alignment', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    // 1. Right align (default): secondary buttons -> spacer -> primary buttons
    const TestComponentRight = defineComponent({
      setup() {
        const props = reactive<ActionsProps>({
          align: 'right',
          role: 'toolbar',
          ariaLabel: 'Dialog Actions',
          list: [{ label: 'Confirm' }],
          listSecondary: [{ label: 'Decline' }]
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-actions': true
          }
        }))

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            classes: classesToken,
            components: {
              button: ButtonMock
            }
          }
        )

        return design.render()
      }
    })

    const appRight = createApp(TestComponentRight)
    appRight.mount(host)
    cleanups.push(() => appRight.unmount())

    await nextTick()

    const rootActions = host.querySelector('.d1-actions')
    expect(rootActions?.getAttribute('role')).toBe('toolbar')
    expect(rootActions?.getAttribute('aria-label')).toBe('Dialog Actions')

    const rootChildren = Array.from(rootActions?.children ?? [])
    expect(rootChildren.length).toBe(3)

    // Layout sequence for right align: secondary buttons -> spacer -> primary buttons
    expect(rootChildren[0]?.textContent).toBe('Decline')
    expect(rootChildren[0]?.classList.contains('d1-actions__secondary')).toBe(true)

    expect(rootChildren[1]?.classList.contains('d1-actions__spacer')).toBe(true)

    expect(rootChildren[2]?.textContent).toBe('Confirm')
    expect(rootChildren[2]?.classList.contains('d1-actions__list')).toBe(true)

    appRight.unmount()
    host.innerHTML = ''

    // 2. Left align: primary buttons -> spacer -> secondary buttons
    const TestComponentLeft = defineComponent({
      setup() {
        const props = reactive<ActionsProps>({
          align: 'left',
          list: [{ label: 'Confirm' }],
          listSecondary: [{ label: 'Decline' }]
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-actions': true
          }
        }))

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            classes: classesToken,
            components: {
              button: ButtonMock
            }
          }
        )

        return design.render()
      }
    })

    const appLeft = createApp(TestComponentLeft)
    appLeft.mount(host)
    cleanups.push(() => appLeft.unmount())

    await nextTick()

    const leftChildren = Array.from(host.querySelector('.d1-actions')?.children ?? [])
    expect(leftChildren.length).toBe(3)

    // Layout sequence for left align: primary buttons -> spacer -> secondary buttons
    expect(leftChildren[0]?.textContent).toBe('Confirm')
    expect(leftChildren[0]?.classList.contains('d1-actions__list')).toBe(true)

    expect(leftChildren[1]?.classList.contains('d1-actions__spacer')).toBe(true)

    expect(leftChildren[2]?.textContent).toBe('Decline')
    expect(leftChildren[2]?.classList.contains('d1-actions__secondary')).toBe(true)
  })

  it('should render default and secondary slots together with button lists', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const ActionsWrapper = defineComponent({
      setup() {
        const props = reactive<ActionsPropsBasic>({
          list: [{ label: 'Primary Item' }],
          listSecondary: [{ label: 'Secondary Item' }]
        })

        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-actions': true
          }
        }))

        const design = new ActionsDesign(
          'd1.actions',
          props,
          {
            classes: classesToken,
            components: {
              button: ButtonMock
            }
          }
        )

        return design.render()
      }
    })

    const HostComponent = defineComponent({
      setup() {
        return () => h(ActionsWrapper, null, {
          default: () => [h('span', { class: 'custom-default-slot' }, 'Appended to primary')],
          secondary: () => [h('span', { class: 'custom-secondary-slot' }, 'Appended to secondary')]
        })
      }
    })

    const app = createApp(HostComponent)
    app.mount(host)
    cleanups.push(() => app.unmount())

    await nextTick()

    const root = host.querySelector('.d1-actions')
    expect(root).not.toBeNull()
    expect(root?.querySelector('.custom-default-slot')?.textContent).toBe('Appended to primary')
    expect(root?.querySelector('.custom-secondary-slot')?.textContent).toBe('Appended to secondary')

    const buttons = root?.querySelectorAll('button')
    expect(buttons?.length).toBe(2)
  })

  it('should reactively update DOM when list items are added, mutated, or cleared', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<ActionsPropsBasic>({
      list: [{ label: 'Initial Button' }]
    })

    const TestComponent = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
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

    let buttons = host.querySelectorAll('button')
    expect(buttons.length).toBe(1)
    expect(buttons[0]?.textContent).toBe('Initial Button')

    // Add another item
    props.list?.push({ label: 'Second Button' })
    await nextTick()

    buttons = host.querySelectorAll('button')
    expect(buttons.length).toBe(2)
    expect(buttons[1]?.textContent).toBe('Second Button')

    // Clear list
    props.list = undefined
    await nextTick()

    buttons = host.querySelectorAll('button')
    expect(buttons.length).toBe(0)
  })

  it('should mount with default area="actions" and trigger zero provide warnings', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    const props = reactive<ActionsPropsBasic>({
      area: 'actions',
      list: [{ label: 'Area Action' }]
    })

    const TestComponent = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
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
    expect(button?.textContent).toBe('Area Action')
  })

  it('should render role and aria-label attributes from item.aria with default and custom values', async () => {
    const host = document.createElement('div')
    document.body.appendChild(host)
    cleanups.push(() => host.remove())

    // 1. Default fallback to TextInclude.actions ('Actions')
    const defaultProps = reactive<ActionsPropsBasic>({})
    const DefaultComponent = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
          defaultProps,
          { components: { button: ButtonMock } }
        )
        return design.render()
      }
    })

    const app1 = createApp(DefaultComponent)
    app1.mount(host)
    await nextTick()

    let rootElement = host.querySelector('div')
    expect(rootElement?.getAttribute('aria-label')).toBe('Actions')
    expect(rootElement?.getAttribute('role')).toBeNull()

    app1.unmount()
    host.innerHTML = ''

    // 2. Custom role and ariaLabel
    const customProps = reactive<ActionsPropsBasic>({
      role: 'toolbar',
      ariaLabel: 'Custom Actions Toolbar'
    })
    const CustomComponent = defineComponent({
      setup() {
        const design = new ActionsDesign(
          'd1.actions',
          customProps,
          { components: { button: ButtonMock } }
        )
        return design.render()
      }
    })

    const app2 = createApp(CustomComponent)
    app2.mount(host)
    cleanups.push(() => app2.unmount())
    await nextTick()

    rootElement = host.querySelector('div')
    expect(rootElement?.getAttribute('role')).toBe('toolbar')
    expect(rootElement?.getAttribute('aria-label')).toBe('Custom Actions Toolbar')
  })
})
