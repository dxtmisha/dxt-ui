// @vitest-environment jsdom
import './testWarnings'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
import { DesignComponents, DesignName } from '@dxtmisha/functional'

import { LabelInclude } from '../../../classes/LabelInclude'
import { FieldCounterInclude } from '../../FieldCounter'
import { ProgressInclude } from '../../Progress'
import { SkeletonInclude } from '../../Skeleton'
import { FieldLabel, type FieldLabelConstructors } from '../FieldLabel'
import type { FieldLabelProps } from '../props'
import type { FieldLabelComponents, FieldLabelSlots } from '../types'

/**
 * Inspectable subclass exposing DesignLogicAbstract protected members for unit testing.
 *
 * Подкласс для доступа к защищённым членам DesignLogicAbstract в модульных тестах.
 */
class InspectableFieldLabel extends FieldLabel {
  /**
   * Returns currently instantiated sub-constructors.
   *
   * Возвращает созданные на текущий момент подконструкторы.
   * @returns map of instantiated sub-constructors / карта созданных подконструкторов
   */
  get instantiatedItems(): Partial<Record<keyof FieldLabelConstructors, unknown>> {
    return this.instances
  }
}

/**
 * Creates a FieldLabel instance inside an effectScope for isolated unit testing.
 *
 * Создаёт экземпляр FieldLabel внутри effectScope для изолированного модульного тестирования.
 * @param properties component properties / свойства компонента
 * @param slots component slots / слоты компонента
 * @param components registered sub-components / зарегистрированные субкомпоненты
 * @param constructors dependency overrides / переопределения зависимостей
 * @returns field label instance, reactive props, and cleanup callback / экземпляр FieldLabel, реактивные свойства и функция очистки
 */
function createFieldLabel(
  properties: FieldLabelProps = {},
  slots?: FieldLabelSlots,
  components?: DesignComponents<FieldLabelComponents, FieldLabelProps>,
  constructors?: Partial<FieldLabelConstructors>
) {
  const scope = effectScope()
  const props = reactive<FieldLabelProps>({ ...properties })
  const element = ref<HTMLLabelElement | undefined>()
  const naming = new DesignName('d1.fieldLabel')

  let instance!: InspectableFieldLabel

  scope.run(() => {
    instance = new InspectableFieldLabel(
      props,
      element,
      naming,
      components,
      slots,
      undefined,
      constructors
    )
  })

  return {
    instance,
    props,
    stop: () => scope.stop()
  }
}

describe('FieldLabel (unit)', () => {
  const cleanups: Array<() => void> = []

  afterEach(() => {
    cleanups.splice(0).reverse().forEach(stop => stop())
    vi.restoreAllMocks()
  })

  describe('Lazy instantiation and canCreate guards', () => {
    it('should keep all subordinate helpers uninstantiated when optional props and slots are absent', () => {
      const { instance, stop } = createFieldLabel({})
      cleanups.push(stop)

      expect(instance.hasInstance('fieldCounter')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('progress')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)

      expect(instance.classes).toEqual({})
      expect(instance.callInstance('label', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('progress', item => item.render(), [])).toEqual([])
      expect(instance.callInstance('fieldCounter', item => item.render(), [])).toEqual([])

      expect(instance.hasInstance('fieldCounter')).toBe(false)
      expect(instance.hasInstance('label')).toBe(false)
      expect(instance.hasInstance('progress')).toBe(false)
      expect(instance.hasInstance('skeleton')).toBe(false)
    })

    it('should instantiate each subordinate helper strictly on demand when its condition becomes active', () => {
      const { instance, props, stop } = createFieldLabel({})
      cleanups.push(stop)

      props.label = 'Phone'
      const labelNodes = instance.callInstance('label', item => item.render(), [])
      expect(labelNodes).toHaveLength(1)
      expect(instance.hasInstance('label')).toBe(true)
      expect(instance.instantiatedItems.label).toBeInstanceOf(LabelInclude)
      expect(instance.hasInstance('skeleton')).toBe(false)
      expect(instance.hasInstance('progress')).toBe(false)
      expect(instance.hasInstance('fieldCounter')).toBe(false)

      props.isSkeleton = true
      expect(instance.classes).toEqual({
        'd1-skeleton__textVariant': true
      })
      expect(instance.hasInstance('skeleton')).toBe(true)
      expect(instance.instantiatedItems.skeleton).toBeInstanceOf(SkeletonInclude)

      const skeletonNodes = instance.callInstance('label', item => item.render(), [])
      expect(skeletonNodes[0].props?.class).toBe('d1-fieldLabel__label d1-skeleton__textVariant')

      props.loading = true
      instance.callInstance('progress', item => item.render(), [])
      expect(instance.hasInstance('progress')).toBe(true)
      expect(instance.instantiatedItems.progress).toBeInstanceOf(ProgressInclude)

      props.counterShow = true
      props.counter = 5
      instance.callInstance('fieldCounter', item => item.render(), [])
      expect(instance.hasInstance('fieldCounter')).toBe(true)
      expect(instance.instantiatedItems.fieldCounter).toBeInstanceOf(FieldCounterInclude)
    })

    it('should instantiate label via alternative label slot even without label prop', () => {
      const { instance, stop } = createFieldLabel(
        {},
        { label: () => 'Slot label' }
      )
      cleanups.push(stop)

      const nodes = instance.callInstance('label', item => item.render(), [])
      expect(nodes).toHaveLength(1)
      expect(instance.hasInstance('label')).toBe(true)
      expect(nodes[0].props?.class).toContain('d1-fieldLabel__label')
    })
  })

  describe('Dependency injection and sub-constructor configuration', () => {
    it('should support dependency injection overrides via constructors parameter', () => {
      class CustomSkeletonInclude extends SkeletonInclude {
        override get classes() {
          return { 'custom-skeleton-class': true }
        }
      }

      class CustomLabelInclude extends LabelInclude {
        override get id(): string {
          return 'injected-label-id'
        }
      }

      const { instance, stop } = createFieldLabel(
        {
          label: 'Custom',
          isSkeleton: true
        },
        undefined,
        undefined,
        {
          label: CustomLabelInclude,
          skeleton: CustomSkeletonInclude
        }
      )
      cleanups.push(stop)

      expect(instance.classes).toEqual({ 'custom-skeleton-class': true })
      const nodes = instance.callInstance('label', item => item.render(), [])
      expect(nodes[0].props?.id).toBe('injected-label-id')
      expect(nodes[0].props?.class).toBe('d1-fieldLabel__label custom-skeleton-class')
    })

    it('should configure ProgressInclude with circular, static, and dense defaults', () => {
      const { instance, stop } = createFieldLabel({
        loading: true
      })
      cleanups.push(stop)

      const progress = instance.i('progress')
      expect(progress.binds.value).toMatchObject({
        circular: true,
        position: 'static',
        dense: true,
        visible: true
      })
    })
  })
})
