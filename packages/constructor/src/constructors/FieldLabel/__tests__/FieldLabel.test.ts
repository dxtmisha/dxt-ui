// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it } from 'vitest'
import { computed, createApp, defineComponent, h, nextTick, reactive } from 'vue'
import type { ConstrClasses } from '@dxtmisha/functional'

import { FieldLabelDesign } from '../FieldLabelDesign'
import { defaultsFieldLabel, type FieldLabelProps } from '../props'
import type {
  FieldLabelClasses,
  FieldLabelComponents,
  FieldLabelExpose
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

const MockProgress = defineComponent({
  name: 'MockProgress',
  props: {
    visible: Boolean,
    circular: Boolean,
    position: String,
    dense: Boolean
  },
  setup(componentProps) {
    return () => h('span', {
      'class': 'mock-progress',
      'data-visible': String(Boolean(componentProps.visible)),
      'data-circular': String(Boolean(componentProps.circular)),
      'data-position': componentProps.position ?? '',
      'data-dense': String(Boolean(componentProps.dense))
    })
  }
})

/**
 * Mounts FieldLabelDesign in jsdom with mock FieldCounter and Progress components.
 *
 * Монтирует FieldLabelDesign в jsdom с мок-компонентами FieldCounter и Progress.
 * @param initialProps initial component properties / начальные свойства компонента
 * @returns reactive props and container element / реактивные свойства и контейнер
 */
async function mountFieldLabel(initialProps: FieldLabelProps = {}) {
  const props = reactive<FieldLabelProps>({
    ...(defaultsFieldLabel as FieldLabelProps),
    ...initialProps
  })

  const Component = defineComponent({
    setup() {
      const classesToken = computed<ConstrClasses>(() => ({
        main: {
          'd1-fieldLabel': true
        }
      }))

      const design = new FieldLabelDesign<
        FieldLabelComponents,
        FieldLabelExpose,
        FieldLabelClasses,
        FieldLabelProps
      >('d1.fieldLabel', props, {
        classes: classesToken,
        components: {
          fieldCounter: MockFieldCounter,
          progress: MockProgress
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

describe('FieldLabel component integration', () => {
  it('should integrate label, required indicator, progress loader, counter, and skeleton classes reactively', async () => {
    const { container, props } = await mountFieldLabel({
      for: 'user-phone',
      label: 'Phone',
      labelId: 'user-phone-label',
      required: true,
      loading: false,
      counterShow: false
    })

    const labelElement = container.querySelector('label.d1-fieldLabel')
    expect(labelElement).not.toBeNull()
    expect(labelElement?.getAttribute('for')).toBe('user-phone')
    expect(labelElement?.querySelector('.d1-fieldLabel__label')?.getAttribute('id')).toBe('user-phone-label')
    expect(labelElement?.querySelector('.d1-fieldLabel__required')?.getAttribute('aria-hidden')).toBe('true')
    expect(container.querySelector('.mock-progress')).toBeNull()
    expect(container.querySelector('.mock-field-counter')).toBeNull()

    props.loading = true
    props.counterShow = true
    props.counter = 4
    props.maxlength = 12
    props.counterId = 'user-phone-counter'
    props.isSkeleton = true
    await nextTick()

    expect(labelElement?.classList.contains('d1-skeleton__textVariant')).toBe(true)

    const progress = container.querySelector('.mock-progress')
    expect(progress?.getAttribute('data-visible')).toBe('true')
    expect(progress?.getAttribute('data-circular')).toBe('true')
    expect(progress?.getAttribute('data-position')).toBe('static')
    expect(progress?.getAttribute('data-dense')).toBe('true')

    const counter = container.querySelector('.mock-field-counter')
    expect(counter?.getAttribute('id')).toBe('user-phone-counter')
    expect(counter?.textContent).toBe('4/12')

    props.loading = false
    await nextTick()

    expect(container.querySelector('.mock-progress')?.getAttribute('data-visible')).toBe('false')
  })

  it('should render with counter or loading alone and unmount label when all active parts clear', async () => {
    const { container, props } = await mountFieldLabel({
      counterShow: true,
      counter: 0,
      maxlength: 10
    })

    expect(container.querySelector('label.d1-fieldLabel')).not.toBeNull()
    expect(container.querySelector('.d1-fieldLabel__label')).toBeNull()
    expect(container.querySelector('.mock-field-counter')?.textContent).toBe('0/10')

    props.counterShow = false
    await nextTick()

    expect(container.querySelector('label')).toBeNull()
  })
})
