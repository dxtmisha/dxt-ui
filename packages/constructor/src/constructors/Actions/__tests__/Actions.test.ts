// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import {
  computed,
  createApp,
  defineComponent,
  h,
  nextTick,
  type PropType,
  reactive,
  ref
} from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { ActionsDesign } from '../ActionsDesign'
import { getAreaValue } from '../../../functions/getAreaValue'
import { setAreaValue } from '../../../functions/setAreaValue'
import type { ActionsProps } from '../props'
import type {
  ActionsClasses,
  ActionsComponents,
  ActionsExpose,
  ActionsSlots
} from '../types'

/** Active DOM and app cleanup callbacks / Колбэки очистки DOM и приложений */
const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

/** Mock Button component faithfully forwarding merged attrs and click handlers / Мок-компонент кнопки */
const ButtonMock = defineComponent({
  name: 'ButtonMock',
  inheritAttrs: false,
  props: {
    class: [String, Array, Object],
    disabled: Boolean,
    label: [String, Number],
    onClick: [Function, Array] as PropType<((event: MouseEvent) => void) | Array<(event: MouseEvent) => void>>,
    palette: String,
    size: String,
    style: [String, Object, Array],
    value: [String, Number]
  },
  setup(props, { attrs }) {
    const handleClick = (event: MouseEvent) => {
      if (Array.isArray(props.onClick)) {
        props.onClick.forEach(fn => fn?.(event))
      } else {
        props.onClick?.(event)
      }
    }

    return () => h(
      'button',
      {
        ...attrs,
        'class': props.class,
        'data-palette': props.palette,
        'data-size': props.size,
        'data-value': props.value,
        'disabled': props.disabled ? true : undefined,
        'onClick': handleClick,
        'style': props.style
      },
      props.label
    )
  }
})

/**
 * Mounts full ActionsDesign component into jsdom with reactive props and optional slots/attrs.
 *
 * Монтирует полный компонент ActionsDesign в jsdom с реактивными свойствами и опциональными слотами.
 */
function mountActionsComponent(options: {
  attrs?: Record<string, unknown>
  initialProps?: ActionsProps
  onClick?: (...args: any[]) => void
  onClickLite?: (...args: any[]) => void
  outerArea?: string
  slots?: ActionsSlots
} = {}) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  cleanups.push(() => host.remove())

  const props = reactive<ActionsProps>({ ...options.initialProps })
  const onClick = options.onClick ?? vi.fn()
  const onClickLite = options.onClickLite ?? vi.fn()

  const ActionsComponent = defineComponent({
    inheritAttrs: false,
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-actions': true,
          [`d1-actions--align--${props.align ?? 'right'}`]: true
        }
      }))
      const stylesToken = computed<ConstrStyles>(() => ({
        '--actions-gap': '8px'
      }))

      const design = new ActionsDesign<
        ActionsComponents,
        ActionsExpose,
        ActionsClasses,
        ActionsProps
      >(
        'd1.actions',
        props,
        {
          classes: classesToken,
          components: { button: ButtonMock },
          emits: (type: string, ...args: any[]) => {
            if (type === 'click') onClick(...args)
            if (type === 'clickLite') onClickLite(...args)
          },
          styles: stylesToken
        }
      )

      return design.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      if (options.outerArea !== undefined) {
        setAreaValue(ref(options.outerArea))
      }

      return () => h(ActionsComponent, options.attrs ?? {}, options.slots as any)
    }
  })

  const app = createApp(Wrapper)
  app.mount(host)
  cleanups.push(() => app.unmount())

  return { host, onClick, onClickLite, props }
}

describe('Actions (Component Integration)', () => {
  it('should render full component with ARIA, merged attrs, primary/secondary buttons, and alignment order', async () => {
    const { host, props } = mountActionsComponent({
      attrs: {
        'class': 'external-actions',
        'data-testid': 'actions-bar',
        'style': { marginTop: '4px' }
      },
      initialProps: {
        align: 'right',
        buttonAttrs: { palette: 'primary', size: 'md' },
        buttonSecondaryAttrs: { palette: 'secondary', size: 'sm' },
        list: [{ label: 'Save', value: 'save' }],
        listSecondary: [{ label: 'Cancel', value: 'cancel' }],
        role: 'toolbar',
        textActions: 'Dialog Actions'
      }
    })

    await nextTick()

    const root = host.querySelector('.d1-actions') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('external-actions')).toBe(true)
    expect(root.getAttribute('data-testid')).toBe('actions-bar')
    expect(root.getAttribute('role')).toBe('toolbar')
    expect(root.getAttribute('aria-label')).toBe('Dialog Actions')
    expect(root.style.marginTop).toBe('4px')

    // For align: 'right', order is: secondary -> spacer -> primary
    const childrenRight = Array.from(root.children)
    expect(childrenRight.map(el => el.className)).toEqual([
      'd1-actions__item d1-actions__secondary',
      'd1-actions__spacer',
      'd1-actions__item d1-actions__list'
    ])
    expect(childrenRight[0]?.textContent).toBe('Cancel')
    expect(childrenRight[2]?.textContent).toBe('Save')

    // Switch alignment dynamically to 'left' -> primary -> spacer -> secondary
    props.align = 'left'
    await nextTick()

    const childrenLeft = Array.from(root.children)
    expect(childrenLeft.map(el => el.className)).toEqual([
      'd1-actions__item d1-actions__list',
      'd1-actions__spacer',
      'd1-actions__item d1-actions__secondary'
    ])
  })

  it('should compose onClick handlers via mergeProps without overwriting custom callbacks', async () => {
    const sharedButtonClick = vi.fn()
    const itemClick = vi.fn()

    const { host, onClick, onClickLite } = mountActionsComponent({
      initialProps: {
        buttonAttrs: {
          onClick: sharedButtonClick
        },
        list: [
          {
            label: 'Confirm',
            value: 'confirm',
            onClick: itemClick
          }
        ]
      }
    })

    await nextTick()

    const button = host.querySelector('button')
    button?.click()

    expect(sharedButtonClick).toHaveBeenCalledTimes(1)
    expect(itemClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClickLite).toHaveBeenCalledTimes(1)
  })

  it('should propagate reactive area value through slots via AreaInclude and getAreaValue', async () => {
    const seenArea = ref<string | undefined>()

    const SlotObserver = defineComponent({
      setup() {
        return () => {
          const area = getAreaValue()
          seenArea.value = area
          return h('span', { class: 'slot-area' }, area ?? 'none')
        }
      }
    })

    const { host, props } = mountActionsComponent({
      outerArea: 'page-header',
      slots: {
        default: () => [h(SlotObserver)]
      }
    })

    await nextTick()
    expect(seenArea.value).toBe('page-header')
    expect(host.querySelector('.slot-area')?.textContent).toBe('page-header')

    props.area = 'actions-zone'
    await nextTick()
    expect(seenArea.value).toBe('actions-zone')
    expect(host.querySelector('.slot-area')?.textContent).toBe('actions-zone')

    props.area = undefined
    await nextTick()
    expect(seenArea.value).toBe('page-header')
    expect(host.querySelector('.slot-area')?.textContent).toBe('page-header')
  })

  it('should handle empty list arrays without rendering buttons while still rendering slots when provided', async () => {
    const { host, props } = mountActionsComponent({
      initialProps: {
        list: [],
        listSecondary: []
      },
      slots: {
        secondary: () => [h('span', { class: 'extra-secondary' }, 'Extra')]
      }
    })

    await nextTick()
    expect(host.querySelectorAll('button')).toHaveLength(0)
    expect(host.querySelector('.extra-secondary')?.textContent).toBe('Extra')

    props.list = [{ label: 'Dynamic Save' }]
    await nextTick()
    expect(host.querySelectorAll('button')).toHaveLength(1)
    expect(host.querySelector('button')?.textContent).toBe('Dynamic Save')
  })
})
