// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, ref, type App } from 'vue'

import { InputCodeDesign } from '../InputCodeDesign'
import type { InputCodeProps } from '../props'
import type { InputCodeClasses, InputCodeComponents, InputCodeExpose } from '../types'
import { InputCodeItemDesign } from '../../InputCodeItem/InputCodeItemDesign'
import type { InputCodeItemProps } from '../../InputCodeItem/props'
import type {
  InputCodeItemClasses,
  InputCodeItemComponents,
  InputCodeItemExpose
} from '../../InputCodeItem/types'

const InputCodeItemWrapper = defineComponent({
  inheritAttrs: false,
  props: {
    disabled: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    error: { type: Boolean, default: false },
    hide: { type: Boolean, default: false },
    isSkeleton: { type: Boolean, default: false },
    move: { type: Boolean, default: true },
    name: { type: String, default: undefined },
    index: { type: [Number, String], default: 0 },
    value: { type: [String, Number], default: '' },
    autocomplete: { type: String, default: 'one-time-code' },
    match: { type: [RegExp, String], default: '[0-9]' },
    inputMode: { type: String, default: 'numeric' },
    placeholder: { type: String, default: undefined },
    tabindex: { type: [Number, String], default: undefined },
    textSymbol: { type: String, default: undefined }
  },
  emits: ['focus', 'input', 'paste', 'backspace'],
  setup(props, { attrs, emit, expose }) {
    const design = new InputCodeItemDesign<
      InputCodeItemComponents,
      InputCodeItemExpose,
      InputCodeItemClasses,
      InputCodeItemProps
    >(
      'd1.inputCodeItem',
      props as Readonly<InputCodeItemProps>,
      {
        emits: emit as never,
        classes: computed(() => ({
          main: { 'd1-inputCodeItem': true },
          input: 'd1-inputCodeItem__input',
          sub: 'd1-inputCodeItem__sub'
        })),
        attrs
      } as never
    )

    expose(design.expose())
    return design.render()
  }
})

const FieldLabelStub = defineComponent({
  props: {
    label: { type: String, default: undefined },
    loading: { type: Boolean, default: false }
  },
  setup(props) {
    return () => h(
      'label',
      { 'class': 'd1-fieldLabel', 'data-loading': String(Boolean(props.loading)) },
      props.label
    )
  }
})

const FieldMessageStub = defineComponent({
  props: {
    helperMessage: { type: String, default: undefined },
    warningMessage: { type: String, default: undefined },
    validationMessage: { type: String, default: undefined },
    helperId: { type: String, default: undefined },
    warningId: { type: String, default: undefined },
    validationId: { type: String, default: undefined }
  },
  setup(props) {
    return () => h(
      'div',
      {
        class: 'd1-fieldMessage',
        id: props.validationId || props.helperId || props.warningId
      },
      props.validationMessage || props.warningMessage || props.helperMessage
    )
  }
})

describe('InputCode (Integration)', () => {
  const mountedApps: Array<{ app: App, container: HTMLElement }> = []

  afterEach(() => {
    while (mountedApps.length > 0) {
      const entry = mountedApps.pop()
      entry?.app.unmount()
      entry?.container.remove()
    }
    vi.restoreAllMocks()
  })

  const mountInputCode = (
    props: InputCodeProps = {},
    attrs: Record<string, unknown> = {}
  ) => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    const exposedRef = ref<InputCodeExpose | undefined>()
    const emitted: Record<string, unknown[][]> = {}
    const recordEmit = (name: string, ...args: unknown[]) => {
      if (!emitted[name]) {
        emitted[name] = []
      }
      emitted[name].push(args)
    }

    const Component = defineComponent({
      inheritAttrs: false,
      props: {
        length: { type: Number, default: 4 },
        value: { type: String, default: undefined },
        modelValue: { type: String, default: undefined },
        label: { type: String, default: undefined },
        helperMessage: { type: String, default: undefined },
        warningMessage: { type: String, default: undefined },
        validationMessage: { type: String, default: undefined },
        validation: { type: Boolean, default: false },
        success: { type: Boolean, default: false },
        loading: { type: Boolean, default: false },
        disabled: { type: Boolean, default: false },
        hide: { type: Boolean, default: false },
        isSkeleton: { type: Boolean, default: false },
        match: { type: [RegExp, String], default: '[0-9]' },
        name: { type: String, default: undefined }
      },
      emits: ['update:value', 'update:modelValue', 'input'],
      setup(componentProps, { expose }) {
        const design = new InputCodeDesign<
          InputCodeComponents,
          InputCodeExpose,
          InputCodeClasses,
          InputCodeProps
        >(
          'd1.inputCode',
          componentProps as Readonly<InputCodeProps>,
          {
            emits: recordEmit as never,
            classes: computed(() => ({
              main: {
                'd1-inputCode': true,
                'd1-inputCode--validation': Boolean(componentProps.validation)
              },
              context: 'd1-inputCode__context'
            })),
            components: {
              inputCodeItem: InputCodeItemWrapper as never,
              fieldLabel: FieldLabelStub as never,
              fieldMessage: FieldMessageStub as never
            }
          }
        )

        expose(design.expose())
        return design.render()
      }
    })

    const app = createApp({
      render: () => h(Component as never, { ...props, ...attrs, ref: exposedRef })
    })

    app.mount(container)
    mountedApps.push({ app, container })

    return {
      container,
      rootElement: container.firstElementChild as HTMLElement,
      exposed: exposedRef,
      emitted
    }
  }

  it('should render group container with default 4 items, label, and field message ARIA binding', async () => {
    const { rootElement } = mountInputCode(
      {
        label: 'PIN code',
        helperMessage: 'Enter 4 digits',
        validationMessage: 'Wrong PIN'
      },
      {
        id: 'custom-code',
        class: 'extra-code-class'
      }
    )

    await nextTick()

    expect(rootElement.getAttribute('role')).toBe('group')
    expect(rootElement.getAttribute('id')).toBe('custom-code')
    expect(rootElement.classList.contains('d1-inputCode')).toBe(true)
    expect(rootElement.classList.contains('extra-code-class')).toBe(true)
    expect(rootElement.getAttribute('aria-describedby')).toBeTruthy()

    expect(rootElement.querySelector('.d1-fieldLabel')?.textContent).toBe('PIN code')
    expect(rootElement.querySelector('.d1-fieldMessage')?.textContent).toBe('Wrong PIN')

    const inputs = rootElement.querySelectorAll('.d1-inputCodeItem input')
    expect(inputs.length).toBe(4)
    expect(inputs[0]?.getAttribute('aria-invalid')).toBe('true')
  })

  it('should support custom length, typing across cells, and exposed set/reset/focus methods', async () => {
    const { rootElement, exposed, emitted } = mountInputCode({
      length: 6,
      value: '12'
    })

    await nextTick()

    const inputs = rootElement.querySelectorAll<HTMLInputElement>('.d1-inputCodeItem input')
    expect(inputs.length).toBe(6)
    expect(inputs[0]?.value).toBe('1')
    expect(inputs[1]?.value).toBe('2')
    expect(exposed.value?.getValue()).toBe('12')

    exposed.value?.set('987654')
    await nextTick()
    expect(Array.from(inputs).map(input => input.value)).toEqual(['9', '8', '7', '6', '5', '4'])

    exposed.value?.reset()
    await nextTick()
    expect(exposed.value?.getValue()).toBe('')
    expect(Array.from(inputs).map(input => input.value)).toEqual(['', '', '', '', '', ''])

    inputs[0]!.value = '4'
    inputs[0]!.dispatchEvent(new Event('input'))
    await nextTick()
    expect(exposed.value?.getValue()).toBe('4')
    expect(emitted['update:modelValue']?.at(-1)).toEqual(['4'])
    expect(emitted.input?.at(-1)).toEqual(['4'])

    exposed.value?.reset()
    await nextTick()
    expect(exposed.value?.getValue()).toBe('')

    const firstFocusSpy = vi.spyOn(inputs[0]!, 'focus')
    exposed.value?.focus()
    expect(firstFocusSpy).toHaveBeenCalledTimes(1)
  })
})
