// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h } from 'vue'
import type { ConstrClasses, ConstrEmit } from '@dxtmisha/functional'

import { ButtonDesign } from '../../Button/ButtonDesign'
import type { ButtonProps, ButtonPropsBasic } from '../../Button/props'
import type { ButtonClasses, ButtonComponents, ButtonEmits, ButtonExpose } from '../../Button/types'
import { ButtonGroup } from '../ButtonGroup'
import { ButtonGroupDesign } from '../ButtonGroupDesign'
import { defaultsButtonGroup, type ButtonGroupProps, type ButtonGroupPropsBasic } from '../props'
import type { ButtonGroupClasses, ButtonGroupComponents, ButtonGroupEmits, ButtonGroupExpose, ButtonGroupSlots } from '../types'

const cleanups: Array<() => void> = []

afterEach(() => {
  cleanups.splice(0).reverse().forEach(cleanup => cleanup())
  vi.restoreAllMocks()
})

const MockButton = defineComponent({
  name: 'MockButton',
  props: {
    label: [String, Number],
    value: [String, Number, Boolean, Object],
    disabled: Boolean,
    readonly: Boolean,
    isSkeleton: Boolean
  },
  emits: ['click', 'clickLite'],
  setup(props, { emit }) {
    const classes = computed<ConstrClasses>(() => ({
      main: {
        'd1-button': true,
        'd1-button--disabled': Boolean(props.disabled)
      }
    }))
    const design = new ButtonDesign<
      ButtonComponents,
      ButtonExpose,
      ButtonClasses,
      ButtonPropsBasic
    >(
      'd1.button',
      props as ButtonProps,
      {
        emits: emit as ConstrEmit<ButtonEmits>,
        classes
      }
    )
    return design.render()
  }
})

function mountButtonGroupDesign(
  props: ButtonGroupProps = {},
  slots?: ButtonGroupSlots,
  attrs: Record<string, unknown> = {},
  emits?: ConstrEmit<ButtonGroupEmits>,
  ItemConstructor: typeof ButtonGroup = ButtonGroup
) {
  let exposed!: ButtonGroupExpose & { elementHtml?: unknown }

  const Inner = defineComponent({
    setup() {
      const mergedProps = { ...defaultsButtonGroup, ...props }
      const classes = computed<ConstrClasses>(() => ({
        main: {
          'd1-buttonGroup': true,
          [`d1-buttonGroup--orientation--${mergedProps.orientation}`]: Boolean(mergedProps.orientation),
          'd1-buttonGroup--wrap': Boolean(mergedProps.wrap)
        }
      }))
      const design = new ButtonGroupDesign<
        ButtonGroupComponents,
        ButtonGroupExpose,
        ButtonGroupClasses,
        ButtonGroupPropsBasic
      >(
        'd1.buttonGroup',
        mergedProps,
        {
          emits,
          classes,
          components: {
            button: MockButton
          }
        },
        ItemConstructor
      )
      exposed = design.expose() as ButtonGroupExpose & { elementHtml?: unknown }
      return design.render()
    }
  })

  const Host = defineComponent({
    setup() {
      return () => h(Inner, attrs, slots as Record<string, () => unknown>)
    }
  })

  const container = document.createElement('div')
  document.body.appendChild(container)
  const app = createApp(Host)
  app.mount(container)

  cleanups.push(() => {
    app.unmount()
    container.remove()
  })

  return {
    container,
    getExposed: () => exposed
  }
}

describe('ButtonGroupDesign', () => {
  it('should render semantic role="group" container, bind elementHtml ref, forward buttonAttrs/isSkeleton, and emit click events with value 0', () => {
    const emitSpy = vi.fn()
    const { container, getExposed } = mountButtonGroupDesign(
      {
        ariaLabel: 'Text alignment',
        isSkeleton: true,
        buttonAttrs: {
          'data-shared': 'group-btn'
        },
        list: [
          { label: 'Zero Option', value: 0 },
          { label: 'Disabled Option', value: 'blocked', disabled: true }
        ]
      },
      {
        default: () => [h('button', { class: 'slot-custom-btn', type: 'button' }, 'Slot Action')]
      },
      {
        'class': 'external-group-class',
        'style': { gap: '8px' },
        'data-testid': 'group-root'
      },
      emitSpy as unknown as ConstrEmit<ButtonGroupEmits>
    )

    const root = container.querySelector('[data-testid="group-root"]') as HTMLDivElement
    expect(root).not.toBeNull()
    expect(root.getAttribute('role')).toBe('group')
    expect(root.getAttribute('aria-label')).toBe('Text alignment')
    expect(root.classList.contains('d1-buttonGroup')).toBe(true)
    expect(root.classList.contains('external-group-class')).toBe(true)
    expect(root.style.gap).toBe('8px')

    const elementRef = getExposed().elementHtml as { value?: HTMLElement } | undefined
    expect(elementRef?.value).toBe(root)

    const buttons = root.querySelectorAll('button')
    expect(buttons).toHaveLength(3)
    expect(buttons[0]?.classList.contains('d1-buttonGroup__item')).toBe(true)
    expect(buttons[0]?.getAttribute('data-shared')).toBe('group-btn')
    expect(buttons[0]?.classList.contains('d1-skeleton__background')).toBe(true)
    expect(buttons[2]?.classList.contains('slot-custom-btn')).toBe(true)

    buttons[0]?.click()
    expect(emitSpy).toHaveBeenCalledWith(
      'click',
      expect.any(MouseEvent),
      expect.objectContaining({ value: 0 })
    )
    expect(emitSpy).toHaveBeenCalledWith(
      'clickLite',
      expect.objectContaining({ value: 0 })
    )

    emitSpy.mockClear()
    buttons[1]?.click()
    expect(emitSpy).not.toHaveBeenCalled()
  })

  it('should not overwrite buttonAttrs with undefined item keys and should support ItemConstructor DI', () => {
    const diSpy = vi.fn()
    class CustomButtonGroup extends ButtonGroup {
      constructor(...args: ConstructorParameters<typeof ButtonGroup>) {
        super(...args)
        diSpy()
      }
    }

    const { container } = mountButtonGroupDesign(
      {
        buttonAttrs: {
          disabled: true
        },
        list: [
          { label: 'Keep Shared Disabled', disabled: undefined }
        ]
      },
      undefined,
      {},
      undefined,
      CustomButtonGroup
    )

    expect(diSpy).toHaveBeenCalledTimes(1)
    const button = container.querySelector('button')
    expect(button?.hasAttribute('disabled')).toBe(true)
  })
})
