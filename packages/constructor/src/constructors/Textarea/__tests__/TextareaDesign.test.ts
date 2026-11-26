// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, createSSRApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import { renderToString } from 'vue/server-renderer'
import type { ConstrClasses, ConstrStyles } from '@dxtmisha/functional'

import { Textarea } from '../Textarea'
import { TextareaDesign } from '../TextareaDesign'
import { defaultsTextarea, type TextareaProps } from '../props'
import type {
  TextareaClasses,
  TextareaComponents,
  TextareaExpose,
  TextareaSlots
} from '../types'

const MockField = defineComponent({
  name: 'MockField',
  inheritAttrs: false,
  props: {
    validationMessage: String,
    maxlength: [String, Number]
  },
  setup(componentProps, { attrs, slots }) {
    return () => h(
      'div',
      {
        'class': ['mock-field', attrs.class],
        'style': attrs.style,
        'data-validation': componentProps.validationMessage ?? '',
        'data-testid': attrs['data-testid']
      },
      [
        slots.label?.(),
        slots.leading?.(),
        slots.default?.({
          id: 'textarea-field-1',
          className: 'd1-field__body__input',
          classHidden: 'd1-field__body__hidden',
          classForFocus: 'd1-field__body__focus',
          binds: {
            'id': 'textarea-field-1',
            'class': 'd1-field__body__input',
            'data-input': 'textarea-field-1'
          }
        }),
        slots.trailing?.()
      ]
    )
  }
})

const MockTextareaAutosize = defineComponent({
  name: 'MockTextareaAutosize',
  inheritAttrs: false,
  props: {
    autosize: Boolean,
    value: String,
    height: String,
    inputAttrs: Object
  },
  emits: ['input'],
  setup(componentProps, { attrs, emit, expose }) {
    const textareaRef = ref<HTMLTextAreaElement>()
    expose({
      elementHtml: textareaRef,
      getValue: () => componentProps.value ?? ''
    })

    return () => h('textarea', {
      ...attrs,
      ...(componentProps.inputAttrs as Record<string, unknown>),
      'ref': textareaRef,
      'class': ['mock-textarea-autosize', attrs.class, (componentProps.inputAttrs as Record<string, unknown>)?.class],
      'data-autosize': String(Boolean(componentProps.autosize)),
      'data-height': componentProps.height ?? '',
      'value': componentProps.value ?? '',
      'onInput': (event: InputEvent) => emit('input', event)
    })
  }
})

describe('TextareaDesign', () => {
  const mountedCleanups: Array<() => void> = []
  let warnSpy: ReturnType<typeof vi.spyOn>
  let errorSpy: ReturnType<typeof vi.spyOn>

  beforeEach(() => {
    warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
    expect(warnSpy).not.toHaveBeenCalled()
    expect(errorSpy).not.toHaveBeenCalled()
    vi.restoreAllMocks()
  })

  /**
   * Mounts TextareaDesign inside a test Vue application.
   *
   * Монтирует TextareaDesign внутри тестового приложения Vue.
   * @param initialProps initial component properties / начальные свойства компонента
   * @param options mount configuration options / параметры монтирования
   * @returns container, reactive props, design instance, and exposed API / контейнер, реактивные свойства, экземпляр дизайна и экспонированный API
   */
  async function mountTextareaDesign(
    initialProps: TextareaProps = {},
    options: {
      extraAttrs?: Record<string, unknown>
      slots?: TextareaSlots
      withAutosize?: boolean
      styles?: ConstrStyles
      ItemConstructor?: typeof Textarea
    } = {}
  ) {
    const {
      extraAttrs = {},
      slots = {},
      withAutosize = true,
      styles = {},
      ItemConstructor
    } = options

    const props = reactive<TextareaProps>({
      ...(defaultsTextarea as TextareaProps),
      ...initialProps
    })
    let exposed!: TextareaExpose & { elementHtml?: { value?: HTMLElement } }
    let designInstance!: TextareaDesign<
      TextareaComponents,
      TextareaExpose,
      TextareaClasses,
      TextareaProps
    >

    const Inner = defineComponent({
      inheritAttrs: false,
      setup(_componentProps, { expose }) {
        const classesToken = computed<ConstrClasses>(() => ({
          main: {
            'd1-textarea': true
          }
        }))
        const stylesToken = computed<ConstrStyles>(() => styles)

        designInstance = new TextareaDesign<
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
            components: withAutosize
              ? {
                  field: MockField,
                  textareaAutosize: MockTextareaAutosize
                }
              : {
                  field: MockField
                }
          },
          ItemConstructor
        )

        exposed = designInstance.expose()
        expose(exposed)
        return designInstance.render()
      }
    })

    const Host = defineComponent({
      setup() {
        return () => h(Inner, extraAttrs, slots as Record<string, () => unknown>)
      }
    })

    const container = document.createElement('div')
    document.body.appendChild(container)
    const app = createApp(Host)
    app.mount(container)
    mountedCleanups.push(() => {
      app.unmount()
      container.remove()
    })
    await nextTick()

    return {
      container,
      props,
      designInstance,
      exposed
    }
  }

  it('should render Field with merged fallthrough attrs, class, style, slots, and TextareaAutosize', async () => {
    const { container, designInstance } = await mountTextareaDesign(
      {
        autosize: true,
        placeholder: 'Write bio',
        rows: 3,
        textareaAttrs: {
          height: 'md'
        } as Record<string, unknown>,
        inputAttrs: {
          class: 'extra-input-class'
        }
      },
      {
        extraAttrs: {
          'class': 'external-root-class',
          'style': 'margin-top: 12px;',
          'data-testid': 'textarea-root'
        },
        styles: {
          paddingBottom: '4px'
        },
        slots: {
          label: () => h('span', { class: 'slot-label' }, 'Bio'),
          leading: () => h('span', { class: 'slot-leading' }, 'L'),
          trailing: () => h('span', { class: 'slot-trailing' }, 'R')
        }
      }
    )

    expect(typeof designInstance.renderInput).toBe('function')

    const root = container.querySelector('[data-testid="textarea-root"]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-textarea')).toBe(true)
    expect(root.classList.contains('external-root-class')).toBe(true)
    expect(root.style.marginTop).toBe('12px')
    expect(root.style.paddingBottom).toBe('4px')

    expect(container.querySelector('.slot-label')?.textContent).toBe('Bio')
    expect(container.querySelector('.slot-leading')?.textContent).toBe('L')
    expect(container.querySelector('.slot-trailing')?.textContent).toBe('R')

    const textarea = container.querySelector('textarea.mock-textarea-autosize') as HTMLTextAreaElement
    expect(textarea).not.toBeNull()
    expect(textarea.getAttribute('id')).toBe('textarea-field-1')
    expect(textarea.getAttribute('data-autosize')).toBe('true')
    expect(textarea.getAttribute('data-height')).toBe('md')
    expect(textarea.getAttribute('placeholder')).toBe('Write bio')
    expect(textarea.getAttribute('rows')).toBe('3')
    expect(textarea.classList.contains('d1-field__body__input')).toBe(true)
    expect(textarea.classList.contains('extra-input-class')).toBe(true)
  })

  it('should render native textarea fallback with ref binding when textareaAutosize component is omitted', async () => {
    const { container, exposed } = await mountTextareaDesign(
      {
        modelValue: 'Fallback value',
        rows: 4,
        cols: 30,
        wrap: 'off',
        textareaAttrs: {
          class: 'ta-cls',
          autosize: true,
          inputAttrs: {
            'data-inner': 'yes'
          }
        }
      },
      {
        withAutosize: false
      }
    )

    const textarea = container.querySelector('textarea') as HTMLTextAreaElement
    expect(textarea).not.toBeNull()
    expect(textarea.classList.contains('mock-textarea-autosize')).toBe(false)
    expect(textarea.classList.contains('ta-cls')).toBe(true)
    expect(textarea.classList.contains('d1-field__body__input')).toBe(true)
    expect(textarea.value).toBe('Fallback value')
    expect(textarea.getAttribute('rows')).toBe('4')
    expect(textarea.getAttribute('cols')).toBe('30')
    expect(textarea.getAttribute('wrap')).toBe('off')
    expect(textarea.getAttribute('data-inner')).toBe('yes')
    expect(textarea.hasAttribute('autosize')).toBe(false)
    expect(textarea.hasAttribute('inputattrs')).toBe(false)
    expect(exposed.elementHtml?.value).toBe(textarea)
  })

  it('should expose value and validation API and support custom ItemConstructor DI', async () => {
    /** Custom Textarea orchestrator subclass for DI verification / Пользовательский оркестратор Textarea для проверки DI */
    class CustomTextarea extends Textarea {
      override get bindsInput() {
        return {
          ...super.bindsInput,
          'data-custom-item': 'injected'
        }
      }
    }

    const { container, exposed } = await mountTextareaDesign(
      {
        required: true,
        validationMessage: 'Field is required'
      },
      {
        ItemConstructor: CustomTextarea
      }
    )

    expect(container.querySelector('textarea')?.getAttribute('data-custom-item')).toBe('injected')
    expect(container.querySelector('.mock-field')?.getAttribute('data-validation')).toBe('Field is required')
    expect(exposed.isChanged()).toBe(false)
    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('Field is required')

    exposed.setValue('New text')
    await nextTick()
    expect(exposed.getValue()).toBe('New text')

    exposed.clear()
    await nextTick()
    expect(exposed.getValue()).toBeUndefined()
  })

  it('should hydrate SSR markup cleanly without mismatch warnings', async () => {
    const component = defineComponent({
      setup() {
        const props = reactive<TextareaProps>({
          ...(defaultsTextarea as TextareaProps),
          modelValue: 'Hydrated content',
          placeholder: 'Enter text',
          rows: 3
        })

        const design = new TextareaDesign<
          TextareaComponents,
          TextareaExpose,
          TextareaClasses,
          TextareaProps
        >(
          'd1.textarea',
          props,
          {
            classes: computed<ConstrClasses>(() => ({
              main: { 'd1-textarea': true }
            })),
            components: {
              field: MockField,
              textareaAutosize: MockTextareaAutosize
            }
          }
        )

        return design.render()
      }
    })

    const root = defineComponent({
      setup: () => () => h(component)
    })

    const html = await renderToString(createSSRApp(root))
    const host = document.createElement('div')
    host.innerHTML = html
    document.body.appendChild(host)

    const existingTextarea = host.querySelector<HTMLTextAreaElement>('textarea.mock-textarea-autosize')
    const app = createSSRApp(root)

    try {
      expect(existingTextarea?.value).toBe('Hydrated content')
      app.mount(host)
      await nextTick()
      expect(host.querySelector('textarea.mock-textarea-autosize')).toBe(existingTextarea)
    } finally {
      app.unmount()
      host.remove()
    }
  })
})
