// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldDesign } from '../FieldDesign'
import { defaultsField, type FieldProps } from '../props'
import type {
  FieldClasses,
  FieldComponents,
  FieldEmits,
  FieldExpose,
  FieldSlots
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
  vi.restoreAllMocks()
})

const MockIcon = defineComponent({
  name: 'MockIcon',
  props: {
    icon: [String, Object],
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
    for: String,
    counter: [String, Number],
    maxlength: [String, Number]
  },
  setup(componentProps) {
    return () => h('label', {
      class: 'mock-field-label',
      for: componentProps.for
    }, String(componentProps.label ?? ''))
  }
})

const MockFieldMessage = defineComponent({
  name: 'MockFieldMessage',
  props: {
    helperMessage: String,
    helperId: String,
    warningMessage: String,
    warningId: String,
    validationMessage: String,
    validationId: String
  },
  setup(componentProps) {
    return () => {
      if (!componentProps.helperMessage && !componentProps.warningMessage && !componentProps.validationMessage) {
        return null
      }

      const id = componentProps.validationMessage
        ? componentProps.validationId
        : componentProps.warningMessage
          ? componentProps.warningId
          : componentProps.helperId

      return h('div', {
        class: 'mock-field-message',
        id
      }, componentProps.validationMessage || componentProps.warningMessage || componentProps.helperMessage)
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

/**
 * Mounts full Field component integration setup in jsdom.
 *
 * Монтирует полную интеграцию компонента Field в jsdom.
 * @param initialProps initial field properties / начальные свойства поля
 * @param slots slot implementations / реализации слотов
 * @returns container, reactive props, click events log, and unmount callback / контейнер, реактивные свойства, журнал кликов и функция размонтирования
 */
async function mountField(
  initialProps: FieldProps = {},
  slots: FieldSlots = {}
) {
  const props = reactive<FieldProps>({
    ...(defaultsField as FieldProps),
    ...initialProps
  })
  const emittedClicks: Array<unknown[]> = []

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-field': true,
          'd1-field--classic': props.classic && !props.outlined,
          'd1-field--outlined': props.outlined
        }
      }))

      const design = new FieldDesign<
        FieldComponents,
        FieldExpose,
        FieldClasses,
        FieldProps
      >('d1.field', props, {
        emits: ((event: keyof FieldEmits, ...args: unknown[]) => {
          if (event === 'click') {
            emittedClicks.push(args)
          }
        }) as unknown as (event: keyof FieldEmits, ...args: unknown[]) => void,
        classes: classesToken,
        components: {
          icon: MockIcon,
          fieldLabel: MockFieldLabel,
          fieldMessage: MockFieldMessage,
          progress: MockProgress
        }
      })

      return design.render()
    }
  })

  const Wrapper = defineComponent({
    setup() {
      return () => h(Component, {}, slots as Record<string, () => unknown>)
    }
  })

  const container = document.createElement('div')
  const app = createApp(Wrapper)
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return {
    container,
    props,
    emittedClicks,
    unmount: () => app.unmount()
  }
}

describe('Field component integration', () => {
  it('should render default slot control bindings, reactively toggle validation, and project slots', async () => {
    const { container, props } = await mountField(
      {
        classic: true,
        id: 'full-name',
        label: 'Full Name',
        prefix: 'Mr.',
        prefixId: 'mr-prefix',
        helperMessage: 'Enter your name',
        helperId: 'name-helper'
      },
      {
        default: control => h('input', { ...control.binds, 'type': 'text', 'data-length': '1' })
      }
    )

    const root = container.firstElementChild as HTMLElement
    const input = root.querySelector('input') as HTMLInputElement
    expect(input).not.toBeNull()
    expect(input.id).toBe('full-name')
    expect(input.getAttribute('aria-describedby')).toBe('mr-prefix name-helper')
    expect(input.getAttribute('aria-invalid')).toBeNull()

    props.validationMessage = 'Name is required'
    props.validationId = 'name-error'
    props.suffix = 'OK'
    props.suffixId = 'ok-suffix'
    await nextTick()

    expect(root.classList.contains('d1-field--validation')).toBe(true)
    expect(root.classList.contains('d1-field--suffix')).toBe(true)
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(input.getAttribute('aria-describedby')).toBe('mr-prefix ok-suffix name-helper name-error')
  })

  it('should emit click events with data-event-type and block clicks when disabled or loading', async () => {
    const { container, props, emittedClicks } = await mountField(
      {
        classic: true,
        cancel: 'always',
        iconClose: 'close'
      },
      {
        default: control => h('input', { ...control.binds, type: 'text' })
      }
    )

    const cancelButton = container.querySelector('[data-event-type="cancel"]') as HTMLButtonElement
    expect(cancelButton).not.toBeNull()

    cancelButton.click()
    expect(emittedClicks).toHaveLength(1)
    expect((emittedClicks[0]?.[1] as { type: string }).type).toBe('cancel')

    props.loading = true
    await nextTick()
    expect(container.querySelector('.mock-progress')).not.toBeNull()
    cancelButton.click()
    expect(emittedClicks).toHaveLength(1)

    props.loading = false
    props.disabled = true
    await nextTick()
    expect(container.querySelector('[data-event-type="cancel"]')).toBeNull()
  })

  it('should apply warning class and describedby without setting aria-invalid until validationMessage is present', async () => {
    const { container, props } = await mountField(
      {
        classic: true,
        id: 'warn-field',
        warning: true,
        warningMessage: 'Verify phone number',
        warningId: 'warn-msg'
      },
      {
        default: control => h('input', { ...control.binds, type: 'text' })
      }
    )

    const root = container.firstElementChild as HTMLElement
    const input = root.querySelector('input') as HTMLInputElement
    expect(root.classList.contains('d1-field--warning')).toBe(true)
    expect(root.classList.contains('d1-field--validation')).toBe(false)
    expect(input.getAttribute('aria-invalid')).toBeNull()
    expect(input.getAttribute('aria-describedby')).toBe('warn-msg')
    expect(root.querySelector('.mock-field-message')?.textContent).toBe('Verify phone number')
    expect(root.querySelector('.mock-field-message')?.id).toBe('warn-msg')

    props.validationMessage = 'Invalid phone'
    props.validationId = 'err-msg'
    await nextTick()
    expect(root.classList.contains('d1-field--warning')).toBe(false)
    expect(root.classList.contains('d1-field--validation')).toBe(true)
    expect(input.getAttribute('aria-invalid')).toBe('true')
    expect(root.querySelector('.mock-field-message')?.textContent).toBe('Invalid phone')
    expect(root.querySelector('.mock-field-message')?.id).toBe('err-msg')
  })

  it('should clean up window resize listeners when unmounted', async () => {
    const addSpy = vi.spyOn(window, 'addEventListener')
    const removeSpy = vi.spyOn(window, 'removeEventListener')

    const { unmount } = await mountField({ classic: true })

    expect(addSpy).toHaveBeenCalledWith('resize', expect.any(Function), undefined)
    unmount()
    expect(removeSpy).toHaveBeenCalledWith('resize', expect.any(Function), undefined)
  })
})
