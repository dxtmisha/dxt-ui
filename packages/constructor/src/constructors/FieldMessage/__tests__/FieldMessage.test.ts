// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldMessageDesign } from '../FieldMessageDesign'
import { defaultsFieldMessage, type FieldMessageProps } from '../props'
import type {
  FieldMessageClasses,
  FieldMessageComponents,
  FieldMessageExpose
} from '../types'

const mountedCleanups: Array<() => void> = []

afterEach(() => {
  mountedCleanups.splice(0).reverse().forEach(unmount => unmount())
})

const MockFieldCounter = defineComponent({
  name: 'MockFieldCounter',
  props: {
    id: String,
    counter: [String, Number],
    maxlength: [String, Number],
    template: String
  },
  setup(componentProps) {
    return () => h('span', {
      id: componentProps.id,
      class: 'mock-field-counter'
    }, `${componentProps.counter ?? 0}/${componentProps.maxlength ?? ''}`)
  }
})

/**
 * Mounts FieldMessageDesign in jsdom with a mock FieldCounter component.
 *
 * Монтирует FieldMessageDesign в jsdom с мок-компонентом FieldCounter.
 * @param initialProps initial component properties / начальные свойства компонента
 * @returns reactive props and container element / реактивные свойства и контейнер
 */
async function mountFieldMessage(initialProps: FieldMessageProps = {}) {
  const props = reactive<FieldMessageProps>({
    ...(defaultsFieldMessage as FieldMessageProps),
    ...initialProps
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-fieldMessage': true
        }
      }))

      const design = new FieldMessageDesign<
        FieldMessageComponents,
        FieldMessageExpose,
        FieldMessageClasses,
        FieldMessageProps
      >('d1.fieldMessage', props, {
        classes: classesToken,
        components: {
          fieldCounter: MockFieldCounter
        }
      })

      return design.render()
    }
  })

  const container = document.createElement('div')
  const app = createApp(Component)
  app.mount(container)
  mountedCleanups.push(() => app.unmount())
  await nextTick()

  return { container, props }
}

describe('FieldMessage component integration', () => {
  it('should integrate helper message, validation message, skeleton, and counter reactively', async () => {
    const { container, props } = await mountFieldMessage({
      helperMessage: 'Use digits only',
      helperId: 'phone-helper',
      counterShow: false
    })

    const root = container.querySelector('.d1-fieldMessage')
    expect(root).not.toBeNull()
    expect(root?.classList.contains('d1-fieldMessage--validation')).toBe(false)
    expect(root?.querySelector('.d1-fieldMessage__info')?.getAttribute('id')).toBe('phone-helper')
    expect(root?.querySelector('.d1-fieldMessage__info')?.textContent).toBe('Use digits only')
    expect(root?.querySelector('.d1-fieldMessage__error')).toBeNull()
    expect(root?.querySelector('.mock-field-counter')).toBeNull()

    props.validationMessage = 'Invalid phone'
    props.validationId = 'phone-error'
    props.counterShow = true
    props.counter = 0
    props.maxlength = 12
    props.counterId = 'phone-counter'
    props.isSkeleton = true
    await nextTick()

    expect(root?.classList.contains('d1-fieldMessage--validation')).toBe(true)
    expect(root?.querySelector('.d1-fieldMessage__info')?.classList.contains('d1-skeleton__textVariant')).toBe(true)

    const errorElement = root?.querySelector('.d1-fieldMessage__error')
    expect(errorElement?.getAttribute('id')).toBe('phone-error')
    expect(errorElement?.getAttribute('role')).toBe('alert')
    expect(errorElement?.textContent).toBe('Invalid phone')

    const counterElement = root?.querySelector('.mock-field-counter')
    expect(counterElement?.getAttribute('id')).toBe('phone-counter')
    expect(counterElement?.textContent).toBe('0/12')
  })

  it('should hide message when disabled unless forceShow is enabled and unmount when cleared', async () => {
    const { container, props } = await mountFieldMessage({
      helperMessage: 'Hint',
      disabled: true,
      forceShow: false
    })

    expect(container.querySelector('.d1-fieldMessage')).toBeNull()

    props.forceShow = true
    await nextTick()
    expect(container.querySelector('.d1-fieldMessage__info')?.textContent).toBe('Hint')

    props.helperMessage = ''
    await nextTick()
    expect(container.querySelector('.d1-fieldMessage')).toBeNull()
  })

  it('should render warning message with warning class and hide it when validation error takes precedence', async () => {
    const { container, props } = await mountFieldMessage({
      helperMessage: 'Hint',
      warningMessage: 'Confirm legacy phone',
      warningId: 'phone-warning'
    })

    const root = container.querySelector('.d1-fieldMessage')
    expect(root).not.toBeNull()
    expect(root?.classList.contains('d1-fieldMessage--warning')).toBe(true)
    expect(root?.classList.contains('d1-fieldMessage--validation')).toBe(false)

    const warningElement = root?.querySelector('.d1-fieldMessage__warning')
    expect(warningElement?.getAttribute('id')).toBe('phone-warning')
    expect(warningElement?.getAttribute('role')).toBeNull()
    expect(warningElement?.textContent).toBe('Confirm legacy phone')

    props.validationMessage = 'Phone is required'
    await nextTick()

    expect(root?.classList.contains('d1-fieldMessage--warning')).toBe(false)
    expect(root?.classList.contains('d1-fieldMessage--validation')).toBe(true)
    expect(root?.querySelector('.d1-fieldMessage__warning')).toBeNull()
    expect(root?.querySelector('.d1-fieldMessage__error')?.textContent).toBe('Phone is required')
  })
})
