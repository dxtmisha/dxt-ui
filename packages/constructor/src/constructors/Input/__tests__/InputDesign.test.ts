// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive, ref } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { InputDesign } from '../InputDesign'
import { defaultsInput, type InputProps } from '../props'
import type {
  InputClasses,
  InputComponents,
  InputExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockField = defineComponent({
  name: 'MockField',
  inheritAttrs: false,
  props: {
    validationMessage: String,
    iconTrailing: [String, Object],
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
      slots.default?.({
        id: 'field-1',
        className: 'd1-field__body__input',
        classHidden: 'd1-field__body__hidden',
        classForFocus: 'd1-field__body__focus',
        binds: {
          'id': 'field-1',
          'class': 'd1-field__body__input',
          'data-input': 'field-1'
        }
      })
    )
  }
})

const MockMask = defineComponent({
  name: 'MockMask',
  props: {
    value: [String, Number],
    modelValue: [String, Number],
    align: String,
    inputAttrs: Object
  },
  setup(componentProps, { expose }) {
    const inputRef = ref<HTMLInputElement>()
    const clearSpy = vi.fn()
    expose({
      input: inputRef,
      clear: clearSpy
    })

    return () => h('div', { 'class': 'mock-mask', 'data-align': componentProps.align }, [
      h('input', {
        ref: inputRef,
        ...(componentProps.inputAttrs as Record<string, unknown>),
        class: ['mock-mask__input', (componentProps.inputAttrs as Record<string, unknown>)?.class],
        value: componentProps.value ?? componentProps.modelValue ?? ''
      })
    ])
  }
})

/**
 * Mounts InputDesign inside a test Vue app.
 *
 * Монтирует InputDesign внутри тестового приложения Vue.
 * @param initialProps initial component properties / начальные свойства компонента
 * @param extraAttrs external HTML attributes / внешние HTML-атрибуты
 * @returns container, reactive props, and exposed API / контейнер, реактивные свойства и экспонированный API
 */
async function mountInputDesign(
  initialProps: InputProps = {},
  extraAttrs: Record<string, unknown> = {}
) {
  const props = reactive<InputProps>({
    ...(defaultsInput as InputProps),
    ...initialProps
  })
  let exposed!: InputExpose

  const Inner = defineComponent({
    inheritAttrs: false,
    setup(_props, { expose }) {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-input': true
        }
      }))

      const design = new InputDesign<
        InputComponents,
        InputExpose,
        InputClasses,
        InputProps
      >(
        'd1.input',
        props,
        {
          classes: classesToken,
          components: {
            field: MockField,
            mask: MockMask
          }
        }
      )

      exposed = design.expose()
      expose(exposed)
      return design.render()
    }
  })

  const Host = defineComponent({
    setup() {
      return () => h(Inner, extraAttrs)
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
    exposed
  }
}

describe('InputDesign', () => {
  it('should render field slot with merged external attrs, class, and style without overwriting', async () => {
    const { container } = await mountInputDesign(
      {
        placeholder: 'Enter name',
        inputAttrs: {
          class: 'extra-input-class'
        }
      },
      {
        'class': 'external-root-class',
        'style': 'margin-top: 8px;',
        'data-testid': 'input-root'
      }
    )

    const root = container.querySelector('[data-testid="input-root"]') as HTMLElement
    expect(root).not.toBeNull()
    expect(root.classList.contains('d1-input')).toBe(true)
    expect(root.classList.contains('external-root-class')).toBe(true)
    expect(root.style.marginTop).toBe('8px')

    const input = container.querySelector('input') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.classList.contains('d1-field__body__input')).toBe(true)
    expect(input.classList.contains('extra-input-class')).toBe(true)
    expect(input.placeholder).toBe('Enter name')
  })

  it('should switch between native input and Mask component based on mask props', async () => {
    const { container, props } = await mountInputDesign({
      type: 'text',
      mask: '###-###',
      align: 'center'
    })

    expect(container.querySelector('.mock-mask')).not.toBeNull()
    expect(container.querySelector('.mock-mask')?.getAttribute('data-align')).toBe('center')
    expect(container.querySelector('.mock-mask__input')?.getAttribute('id')).toBe('field-1')

    props.maskNone = true
    await nextTick()

    expect(container.querySelector('.mock-mask')).toBeNull()
    expect(container.querySelector('input.d1-field__body__input')).not.toBeNull()
  })

  it('should expose value and validation methods cleanly', async () => {
    const { container, exposed } = await mountInputDesign({
      required: true,
      validationMessage: 'Required field'
    })

    expect(exposed.isChanged()).toBe(false)
    expect(exposed.checkValidity()).toBe(false)
    expect(exposed.getValidationMessage()).toBe('Required field')
    expect(container.querySelector('.mock-field')?.getAttribute('data-validation')).toBe('Required field')

    const input = container.querySelector('input') as HTMLInputElement
    input.dispatchEvent(new FocusEvent('blur'))
    await nextTick()
    expect(exposed.isChanged()).toBe(true)

    exposed.setValue('valid text')
    await nextTick()
    expect(exposed.getValue()).toBe('valid text')

    exposed.clear()
    await nextTick()
    expect(exposed.getValue()).toBeUndefined()
  })
})
