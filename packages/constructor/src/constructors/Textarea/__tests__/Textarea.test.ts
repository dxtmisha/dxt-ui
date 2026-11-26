// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, provide, reactive } from 'vue'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { FieldDesign } from '../../Field/FieldDesign'
import { defaultsField, type FieldProps } from '../../Field/props'
import type { FieldClasses, FieldComponents, FieldExpose } from '../../Field/types'

import { FORM_NAME_ELEMENT, type FormElementRegistration } from '../../Form/basicTypes'

import { TextareaAutosizeDesign } from '../../TextareaAutosize/TextareaAutosizeDesign'
import { defaultsTextareaAutosize, type TextareaAutosizeProps } from '../../TextareaAutosize/props'
import type {
  TextareaAutosizeClasses,
  TextareaAutosizeComponents,
  TextareaAutosizeExpose
} from '../../TextareaAutosize/types'

import { Textarea } from '../Textarea'
import { TextareaDesign } from '../TextareaDesign'
import { defaultsTextarea, type TextareaProps } from '../props'
import type {
  TextareaClasses,
  TextareaComponents,
  TextareaEmits,
  TextareaExpose,
  TextareaSlots
} from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract instance checks for integration assertions.
 *
 * Подкласс для интеграционных проверок ленивого создания зависимостей DesignLogicAbstract.
 */
class InspectableTextarea extends Textarea {}

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
    iconActive: [String, Object],
    active: Boolean,
    disabled: Boolean,
    ariaLabel: String
  },
  setup(componentProps, { attrs }) {
    return () => h('button', {
      'type': 'button',
      'disabled': componentProps.disabled,
      'class': 'mock-icon',
      ...attrs,
      'aria-label': componentProps.ariaLabel
    }, String(componentProps.icon ?? ''))
  }
})

const MockFieldLabel = defineComponent({
  name: 'MockFieldLabel',
  props: {
    label: [String, Number],
    for: String
  },
  setup(componentProps, { slots }) {
    return () => h('label', {
      class: 'mock-field-label',
      for: componentProps.for
    }, slots.label ? slots.label() : String(componentProps.label ?? ''))
  }
})

const MockFieldMessage = defineComponent({
  name: 'MockFieldMessage',
  props: {
    helperMessage: String,
    helperId: String,
    validationMessage: String,
    validationId: String,
    counter: Number,
    counterShow: Boolean,
    maxlength: [String, Number]
  },
  setup(componentProps) {
    return () => {
      const children = []

      if (componentProps.validationMessage || componentProps.helperMessage) {
        children.push(h('div', {
          class: 'mock-field-message',
          id: componentProps.validationMessage ? componentProps.validationId : componentProps.helperId
        }, componentProps.validationMessage || componentProps.helperMessage))
      }

      if (componentProps.counterShow) {
        children.push(h('div', {
          class: 'mock-field-counter'
        }, `${componentProps.counter ?? 0}/${componentProps.maxlength ?? ''}`))
      }

      return children.length > 0 ? h('div', { class: 'mock-field-footer' }, children) : null
    }
  }
})

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean
  },
  setup(componentProps) {
    return () => componentProps.visible
      ? h('span', { class: 'mock-progress' }, 'loading')
      : null
  }
})

const RealField = defineComponent({
  name: 'RealField',
  inheritAttrs: false,
  props: Object.keys(defaultsField).concat([
    'label',
    'prefix',
    'suffix',
    'caption',
    'helperMessage',
    'validationMessage',
    'required',
    'readonly',
    'disabled',
    'loading',
    'forceShowMessage',
    'cancel',
    'cancelShow',
    'counterShow',
    'counter',
    'maxlength',
    'icon',
    'iconTurn',
    'iconHide',
    'iconDir',
    'iconPalette',
    'iconTrailing',
    'iconTrailingTurnOnly',
    'iconTrailingDirOnly',
    'iconTrailingPalette',
    'iconAttrs',
    'align',
    'arrowCarousel',
    'arrowStepper',
    'arrowAlign',
    'disabledPrevious',
    'disabledNext',
    'isValue',
    'value',
    'isSkeleton',
    'fieldLabelAttrs',
    'fieldMessageAttrs',
    'fieldCounterAttrs',
    'id',
    'classic',
    'outlined',
    'filled',
    'tonal',
    'basic',
    'boxed',
    'counterTop',
    'iconArrowLeft',
    'iconArrowRight',
    'iconPlus',
    'iconMinus',
    'iconClose',
    'detail'
  ]),
  emits: ['click', 'clickLite', 'keydown'],
  setup(componentProps, { emit, expose }) {
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-field': true,
        'd1-field--isValue': Boolean((componentProps as Readonly<FieldProps>).isValue)
      }
    }))

    const design = new FieldDesign<
      FieldComponents,
      FieldExpose,
      FieldClasses,
      FieldProps
    >(
      'd1.field',
      componentProps as Readonly<FieldProps>,
      {
        emits: emit as (...args: unknown[]) => void,
        classes: classesToken,
        components: {
          icon: MockIcon,
          fieldLabel: MockFieldLabel,
          fieldMessage: MockFieldMessage,
          progress: MockProgress
        }
      }
    )

    expose(design.expose())
    return design.render()
  }
})

const RealTextareaAutosize = defineComponent({
  name: 'RealTextareaAutosize',
  inheritAttrs: false,
  props: Object.keys(defaultsTextareaAutosize).concat([
    'value',
    'inputAttrs',
    'height'
  ]),
  emits: ['input'],
  setup(componentProps, { emit, expose }) {
    const typedProps = componentProps as Readonly<TextareaAutosizeProps & { height?: string }>
    const classesToken = computed<ConstrClasses>(() => ({
      main: {
        'd1-textareaAutosize': true,
        'd1-textareaAutosize--autosize': Boolean(typedProps.autosize),
        ...(typedProps.height ? { [`d1-textareaAutosize--height--${typedProps.height}`]: true } : {})
      }
    }))

    const design = new TextareaAutosizeDesign<
      TextareaAutosizeComponents,
      TextareaAutosizeExpose,
      TextareaAutosizeClasses,
      TextareaAutosizeProps
    >(
      'd1.textareaAutosize',
      typedProps,
      {
        emits: emit as (...args: unknown[]) => void,
        classes: classesToken
      }
    )

    expose(design.expose())
    return design.render()
  }
})

describe('Textarea (Integration)', () => {
  const mountedCleanups: Array<() => void> = []
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>
  let getComputedStyleSpy: ReturnType<typeof vi.spyOn>
  let nextFrameId: number
  let scheduledFrames: Map<number, FrameRequestCallback>

  /**
   * Flushes queued animation frames deterministically.
   *
   * Детерминированно выполняет все кадры анимации в очереди.
   */
  function flushFrames(): void {
    const entries = [...scheduledFrames.entries()]
    scheduledFrames.clear()

    for (const [, callback] of entries) {
      callback(0)
    }
  }

  /**
   * Mounts full Textarea integration (TextareaDesign + Textarea + RealField + RealTextareaAutosize) in jsdom.
   *
   * Монтирует полную интеграцию Textarea (TextareaDesign + Textarea + RealField + RealTextareaAutosize) в jsdom.
   * @param initialProps initial textarea properties / начальные свойства textarea
   * @param options optional slots, formContext, fallback flag, and attrs / необязательные слоты, контекст формы, режим fallback и атрибуты
   * @returns mounted harness handles / вспомогательные ссылки смонтированного компонента
   */
  async function mountTextarea(
    initialProps: TextareaProps = {},
    options: {
      slots?: TextareaSlots
      formContext?: FormElementRegistration
      withAutosizeComponent?: boolean
      attrs?: Record<string, unknown>
    } = {}
  ) {
    const {
      slots = {},
      formContext,
      withAutosizeComponent = true,
      attrs = {}
    } = options

    const props = reactive<TextareaProps>({
      ...(defaultsTextarea as TextareaProps),
      ...initialProps
    })
    const emittedEvents: Array<{ type: string, args: unknown[] }> = []
    let exposed!: TextareaExpose & { elementHtml?: { value?: HTMLElement } }
    let logic!: InspectableTextarea

    const Inner = defineComponent({
      inheritAttrs: false,
      setup(_componentProps, { expose }) {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-textarea': true
          }
        }))
        const stylesToken = computed<ConstrStyles>(() => ({}))

        const design = new TextareaDesign<
          TextareaComponents,
          TextareaExpose,
          TextareaClasses,
          TextareaProps
        >(
          'd1.textarea',
          props,
          {
            classes: classesToken,
            styles: stylesToken,
            emits: (type: keyof TextareaEmits, ...args: unknown[]) => {
              emittedEvents.push({ type: String(type), args })
              if (type === 'update:modelValue') {
                props.modelValue = args[0] as string | undefined
              }
            },
            components: withAutosizeComponent
              ? {
                  field: RealField,
                  textareaAutosize: RealTextareaAutosize
                }
              : {
                  field: RealField
                }
          },
          InspectableTextarea
        )

        logic = (design as unknown as { item: InspectableTextarea }).item
        exposed = design.expose()
        expose(exposed)
        return design.render()
      }
    })

    const Host = defineComponent({
      setup() {
        if (formContext) {
          provide(FORM_NAME_ELEMENT, formContext)
        }
        return () => h(Inner, attrs, slots as Record<string, () => unknown>)
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)

    const cleanup = () => {
      app.unmount()
      container.remove()
    }
    mountedCleanups.push(cleanup)

    await nextTick()

    const textarea = container.querySelector('textarea') as HTMLTextAreaElement
    const clone = container.querySelector('.d1-textareaAutosize__clone') as HTMLDivElement | null

    if (textarea) {
      Object.defineProperty(textarea, 'offsetWidth', {
        configurable: true,
        value: 300
      })
    }

    if (clone) {
      Object.defineProperty(clone, 'offsetHeight', {
        configurable: true,
        value: 84
      })
    }

    return {
      container,
      props,
      emittedEvents,
      exposed,
      logic,
      textarea,
      clone,
      cleanup
    }
  }

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    nextFrameId = 1
    scheduledFrames = new Map()

    vi.stubGlobal('requestAnimationFrame', (callback: FrameRequestCallback): number => {
      const id = nextFrameId++
      scheduledFrames.set(id, callback)
      return id
    })
    vi.stubGlobal('cancelAnimationFrame', (frameId: number) => {
      scheduledFrames.delete(frameId)
    })

    getComputedStyleSpy = vi.spyOn(window, 'getComputedStyle').mockImplementation(() => ({
      paddingTop: '8px',
      paddingRight: '12px',
      paddingBottom: '8px',
      paddingLeft: '12px',
      getPropertyValue: (property: string) => {
        if (property === '--sys-field-sizing-none') {
          return '"--YES--"'
        }

        return ''
      }
    } as unknown as CSSStyleDeclaration))
  })

  afterEach(() => {
    mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  describe('Full integration with Field and TextareaAutosize', () => {
    it('should render TextareaAutosize inside Field, handle v-model, autosize measurement, events, and cancel clear', async () => {
      const { container, props, emittedEvents, textarea, clone, exposed } = await mountTextarea({
        label: 'Description',
        placeholder: 'Write notes',
        cancel: 'auto',
        counterShow: true,
        maxlength: 100,
        rows: 4,
        cols: 40,
        wrap: 'soft',
        modelValue: 'Line 1'
      })

      expect(textarea).not.toBeNull()
      expect(clone).not.toBeNull()
      expect(textarea.hasAttribute('type')).toBe(false)
      expect(textarea.value).toBe('Line 1')
      expect(textarea.getAttribute('placeholder')).toBe('Write notes')
      expect(textarea.getAttribute('rows')).toBe('4')
      expect(textarea.getAttribute('cols')).toBe('40')
      expect(textarea.getAttribute('wrap')).toBe('soft')
      expect(textarea.getAttribute('maxlength')).toBe('100')
      expect(textarea.classList.contains('d1-textareaAutosize--autosize')).toBe(true)
      expect(container.querySelector('.mock-field-counter')?.textContent).toBe('6/100')

      // Initial autosize rAF measurement
      flushFrames()
      flushFrames()
      expect(textarea.style.height).toBe('84px')

      // User typing
      Object.defineProperty(clone!, 'offsetHeight', {
        configurable: true,
        value: 140
      })
      textarea.value = 'Line 1\nLine 2'
      textarea.dispatchEvent(new Event('input', { bubbles: true }))
      await nextTick()
      flushFrames()

      expect(props.modelValue).toBe('Line 1\nLine 2')
      expect(exposed.getValue()).toBe('Line 1\nLine 2')
      expect(emittedEvents.some(item => item.type === 'input')).toBe(true)
      expect(emittedEvents.some(item => item.type === 'inputLite')).toBe(true)
      expect(textarea.style.height).toBe('140px')
      expect(container.querySelector('.mock-field-counter')?.textContent).toBe('13/100')

      // Change, focus, and blur events
      textarea.dispatchEvent(new FocusEvent('focus'))
      textarea.dispatchEvent(new Event('change', { bubbles: true }))
      textarea.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(emittedEvents.some(item => item.type === 'focus')).toBe(true)
      expect(emittedEvents.some(item => item.type === 'change')).toBe(true)
      expect(emittedEvents.some(item => item.type === 'changeLite')).toBe(true)
      expect(emittedEvents.some(item => item.type === 'blur')).toBe(true)

      // Clear via Field cancel button
      const cancelButton = container.querySelector('[data-event-type="cancel"]') as HTMLButtonElement
      expect(cancelButton).not.toBeNull()
      cancelButton.click()
      await nextTick()
      flushFrames()

      expect(props.modelValue).toBeUndefined()
      expect(exposed.getValue()).toBeUndefined()
      expect(textarea.value).toBe('')
    })

    it('should forward textareaAttrs props like height to TextareaAutosize and merge classes cleanly', async () => {
      const { textarea } = await mountTextarea({
        textareaAttrs: {
          'height': 'lg',
          'class': 'custom-autosize-class',
          'data-custom': 'yes'
        } as Record<string, unknown>,
        inputAttrs: {
          class: 'custom-input-class'
        }
      })

      expect(textarea.classList.contains('d1-textareaAutosize--height--lg')).toBe(true)
      expect(textarea.classList.contains('custom-autosize-class')).toBe(true)
      expect(textarea.classList.contains('custom-input-class')).toBe(true)
      expect(textarea.getAttribute('data-custom')).toBe('yes')
    })

    it('should handle falsy string "0" as a filled value without collapsing Field label', async () => {
      const { container, textarea } = await mountTextarea({
        label: 'Score note',
        modelValue: '0'
      })

      const field = container.querySelector('.d1-field') as HTMLElement
      expect(textarea.value).toBe('0')
      expect(field.classList.contains('d1-field--isValue')).toBe(true)
    })

    it('should synchronize external modelValue updates and maxlength attribute with TextareaAutosize and Field counter', async () => {
      const { container, props, textarea, exposed } = await mountTextarea({
        maxlength: 20,
        counterShow: true,
        modelValue: 'Start'
      })

      expect(textarea.getAttribute('maxlength')).toBe('20')
      expect(container.querySelector('.mock-field-counter')?.textContent).toBe('5/20')

      props.modelValue = 'Updated externally'
      await nextTick()
      flushFrames()

      expect(exposed.getValue()).toBe('Updated externally')
      expect(textarea.value).toBe('Updated externally')
      expect(container.querySelector('.mock-field-counter')?.textContent).toBe('18/20')
    })

    it('should ignore edits when disabled or readonly while allowing focus/blur only when readonly', async () => {
      const { textarea: disabledTextarea, emittedEvents: disabledEvents } = await mountTextarea({
        disabled: true,
        modelValue: 'locked'
      })

      expect(disabledTextarea.disabled).toBe(true)
      disabledTextarea.value = 'hacked'
      disabledTextarea.dispatchEvent(new Event('input', { bubbles: true }))
      disabledTextarea.dispatchEvent(new FocusEvent('focus'))
      disabledTextarea.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(disabledEvents.filter(item => item.type === 'input')).toEqual([])
      expect(disabledEvents.filter(item => item.type === 'focus')).toEqual([])
      expect(disabledEvents.filter(item => item.type === 'blur')).toEqual([])

      const { textarea: readonlyTextarea, emittedEvents: readonlyEvents, exposed: readonlyExposed } = await mountTextarea({
        readonly: true,
        required: true
      })

      expect(readonlyTextarea.readOnly).toBe(true)
      readonlyTextarea.value = 'attempt'
      readonlyTextarea.dispatchEvent(new Event('input', { bubbles: true }))
      readonlyTextarea.dispatchEvent(new FocusEvent('focus'))
      readonlyTextarea.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(readonlyEvents.filter(item => item.type === 'input')).toEqual([])
      expect(readonlyEvents.some(item => item.type === 'focus')).toBe(true)
      expect(readonlyEvents.some(item => item.type === 'blur')).toBe(true)
      expect(readonlyExposed.isChanged()).toBe(false)
    })
  })

  describe('Fallback native textarea mode without TextareaAutosize', () => {
    it('should render native textarea with ref binding, events, and v-model updates', async () => {
      const { container, props, textarea, exposed, emittedEvents } = await mountTextarea(
        {
          modelValue: 'Fallback text',
          rows: 5,
          wrap: 'hard',
          textareaAttrs: {
            'class': 'fallback-extra',
            'data-mode': 'native'
          } as Record<string, unknown>
        },
        {
          withAutosizeComponent: false
        }
      )

      expect(container.querySelector('.d1-textareaAutosize__clone')).toBeNull()
      expect(textarea).not.toBeNull()
      expect(textarea.value).toBe('Fallback text')
      expect(textarea.getAttribute('rows')).toBe('5')
      expect(textarea.getAttribute('wrap')).toBe('hard')
      expect(textarea.classList.contains('fallback-extra')).toBe(true)
      expect(textarea.getAttribute('data-mode')).toBe('native')
      expect(textarea.hasAttribute('autosize')).toBe(false)
      expect(textarea.hasAttribute('inputattrs')).toBe(false)
      expect(exposed.elementHtml?.value).toBe(textarea)

      textarea.value = 'Edited fallback'
      textarea.dispatchEvent(new Event('input', { bubbles: true }))
      await nextTick()

      expect(props.modelValue).toBe('Edited fallback')
      expect(emittedEvents.some(item => item.type === 'input')).toBe(true)
    })
  })

  describe('Validation, Form context, slots, security, and cleanup', () => {
    it('should validate required constraint after blur and display validationMessage', async () => {
      const { container, textarea, exposed } = await mountTextarea({
        required: true,
        validationCode: {
          valueMissing: 'Please enter a comment'
        }
      })

      expect(exposed.isChanged()).toBe(false)
      expect(exposed.checkValidity()).toBe(false)
      expect(container.querySelector('.mock-field-message')).toBeNull()

      textarea.dispatchEvent(new FocusEvent('blur'))
      await nextTick()

      expect(exposed.isChanged()).toBe(true)
      expect(exposed.getValidationMessage()).toBe('Please enter a comment')
      expect(container.querySelector('.mock-field-message')?.textContent).toBe('Please enter a comment')

      exposed.setValue('Valid comment')
      await nextTick()

      expect(exposed.checkValidity()).toBe(true)
      expect(exposed.getValidationMessage()).toBe('')
    })

    it('should register, update, and cleanly unregister in parent Form context when name is set', async () => {
      const registerSpy = vi.fn()
      const updateDataSpy = vi.fn()
      const unregisterSpy = vi.fn()

      const { textarea, logic, cleanup } = await mountTextarea(
        {
          name: 'bio',
          modelValue: 'Initial bio'
        },
        {
          formContext: {
            getValue: () => undefined,
            register: registerSpy,
            updateData: updateDataSpy,
            unregister: unregisterSpy
          }
        }
      )

      expect(logic.hasInstance('form')).toBe(true)
      expect(registerSpy).toHaveBeenCalledTimes(1)
      expect(registerSpy).toHaveBeenCalledWith(expect.objectContaining({
        name: 'bio'
      }))

      textarea.value = 'Updated bio'
      textarea.dispatchEvent(new Event('input', { bubbles: true }))
      await nextTick()

      expect(updateDataSpy).toHaveBeenCalled()

      cleanup()
      expect(unregisterSpy).toHaveBeenCalledTimes(1)
    })

    it('should project Field slots (leading, trailing, prefix, suffix, caption) cleanly', async () => {
      const { container } = await mountTextarea(
        {
          label: 'Notes'
        },
        {
          slots: {
            leading: () => h('span', { class: 'slot-leading' }, 'L'),
            trailing: () => h('span', { class: 'slot-trailing' }, 'R'),
            prefix: () => h('span', { class: 'slot-prefix' }, 'P'),
            suffix: () => h('span', { class: 'slot-suffix' }, 'S'),
            caption: () => h('span', { class: 'slot-caption' }, 'C')
          }
        }
      )

      expect(container.querySelector('.slot-leading')?.textContent).toBe('L')
      expect(container.querySelector('.slot-trailing')?.textContent).toBe('R')
      expect(container.querySelector('.slot-prefix')?.textContent).toBe('P')
      expect(container.querySelector('.slot-suffix')?.textContent).toBe('S')
      expect(container.querySelector('.slot-caption')?.textContent).toBe('C')
    })

    it('should treat XSS payloads and multilingual Unicode text as plain text without HTML injection', async () => {
      const payload = '<script>alert(1)</script><img src=x onerror=alert(1)> — Tiếng Việt Nguyễn — Привет 🚀'
      const { textarea, clone, exposed } = await mountTextarea({
        modelValue: payload
      })

      flushFrames()
      flushFrames()

      expect(exposed.getValue()).toBe(payload)
      expect(textarea.value).toBe(payload)
      expect(clone?.querySelector('script')).toBeNull()
      expect(clone?.querySelector('img')).toBeNull()
      expect(getComputedStyleSpy).toHaveBeenCalled()
    })
  })
})
