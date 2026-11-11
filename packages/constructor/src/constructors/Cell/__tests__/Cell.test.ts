// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { effectScope, nextTick, reactive, ref } from 'vue'
import { DesignName } from '@dxtmisha/functional'

import { Cell, type CellConstructors } from '../Cell'
import type { CellProps } from '../props'

/**
 * Inspectable subclass of Cell exposing internal lazy-instantiated instances and lifecycle triggers.
 *
 * Проверяемый подкласс Cell, предоставляющий доступ к внутренним лениво созданным экземплярам и триггерам жизненного цикла.
 */
class InspectableCell extends Cell {
  /**
   * Returns internal instances map for lazy-evaluation verification.
   *
   * Возвращает внутреннюю карту экземпляров для проверки ленивой инициализации.
   * @returns instantiated constructors map / карта созданных экземпляров конструкторов
   */
  get instantiatedItems(): Partial<Record<keyof CellConstructors, unknown>> {
    return this.instances
  }

  /**
   * Exposes isDescription for testing.
   *
   * Предоставляет isDescription для тестирования.
   * @returns check result / результат проверки
   */
  public override isDescription(): boolean {
    return super.isDescription()
  }

  /**
   * Exposes getSkeleton for testing.
   *
   * Предоставляет getSkeleton для тестирования.
   * @returns skeleton instance or undefined / экземпляр скелетона или undefined
   */
  public override getSkeleton() {
    return super.getSkeleton()
  }

  /**
   * Simulates component mount lifecycle.
   *
   * Симулирует жизненный цикл монтирования компонента.
   */
  triggerMounted(): void {
    this.isMounted.value = true
    this.callLifecycle('onMounted')
    this.initConditions()
  }

  /**
   * Simulates component unmount lifecycle.
   *
   * Симулирует жизненный цикл размонтирования компонента.
   */
  triggerUnmounted(): void {
    this.isMounted.value = false
    this.callLifecycle('onUnmounted')
  }
}

describe('Cell', () => {
  const naming = new DesignName('d1.cell')

  describe('Standard functional requirements (Happy path)', () => {
    it('should not eagerly instantiate optional conditional classes upon creation', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({})

      const cell = scope.run(() => new InspectableCell(props, element, naming))!

      expect(cell).toBeDefined()
      // Conditional instances must remain undefined when props are not set
      expect(cell.instantiatedItems.caption).toBeUndefined()
      expect(cell.instantiatedItems.description).toBeUndefined()
      expect(cell.instantiatedItems.icon).toBeUndefined()
      expect(cell.instantiatedItems.label).toBeUndefined()
      expect(cell.instantiatedItems.progress).toBeUndefined()
      expect(cell.instantiatedItems.ripple).toBeUndefined()
      expect(cell.instantiatedItems.skeleton).toBeUndefined()

      scope.stop()
    })

    it('should activate conditional items when props are set and mounted', async () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({
        label: 'Cell Title',
        caption: 'Subtitle',
        description: 'Details text',
        icon: 'star',
        loading: true,
        isSkeleton: true
      })

      const cell = scope.run(() => new InspectableCell(props, element, naming))!
      cell.triggerMounted()
      await nextTick()

      expect(cell.instantiatedItems.label).toBeDefined()
      expect(cell.instantiatedItems.caption).toBeDefined()
      expect(cell.instantiatedItems.description).toBeDefined()
      expect(cell.instantiatedItems.icon).toBeDefined()
      expect(cell.instantiatedItems.progress).toBeDefined()
      expect(cell.instantiatedItems.skeleton).toBeDefined()

      scope.stop()
    })

    it('should compute standard classes and status classes', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({
        description: 'With description'
      })

      scope.run(() => {
        const cell = new InspectableCell(props, element, naming)
        const classes = cell.classes

        expect(classes[naming.getStatusClass('description')]).toBe(true)
      })

      scope.stop()
    })

    it('should return subclasses dictionary from classesSub', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({})

      scope.run(() => {
        const cell = new InspectableCell(props, element, naming)
        const sub = cell.classesSub

        expect(sub.label).toBe(naming.getSubClass('label'))
        expect(sub.description).toBe(naming.getSubClass('description'))
        expect(sub.caption).toBe(naming.getSubClass('caption'))
        expect(sub.trailing).toBe(naming.getSubClass('trailing'))
      })

      scope.stop()
    })

    it('should resolve role to "button" when dynamic is set and role is omitted', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({ dynamic: true })

      scope.run(() => {
        const cell = new InspectableCell(props, element, naming)
        expect(cell.role).toBe('button')
        expect(cell.binds.role).toBe('button')
        expect(cell.binds.tabindex).toBe('0')
      })

      scope.stop()
    })

    it('should preserve explicit custom role when provided', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({ role: 'listitem', dynamic: true })

      scope.run(() => {
        const cell = new InspectableCell(props, element, naming)
        expect(cell.role).toBe('listitem')
        expect(cell.binds.role).toBe('listitem')
      })

      scope.stop()
    })

    it('should set data-divider attribute when divider prop is active', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({ divider: true, value: 'item-1' })

      scope.run(() => {
        const cell = new InspectableCell(props, element, naming)
        expect(cell.binds['data-divider']).toBe('active')
        expect(cell.binds['data-value']).toBe('item-1')
      })

      scope.stop()
    })

    it('should support dependency injection overrides', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()
      const props: CellProps = reactive({})

      class MockEnabled {
        readonly isEnabled = true
        readonly isDisabledOrUndefined = undefined
      }

      scope.run(() => {
        const cell = new InspectableCell(
          props,
          element,
          naming,
          undefined,
          undefined,
          undefined,
          {
            enabled: MockEnabled as any
          }
        )

        expect(cell.i('enabled')).toBeInstanceOf(MockEnabled)
      })

      scope.stop()
    })

    it('should return skeleton instance or undefined via getSkeleton', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const cellWithoutSkeleton = new InspectableCell(reactive({}), element, naming)
        expect(cellWithoutSkeleton.getSkeleton()).toBeUndefined()

        const cellWithSkeleton = new InspectableCell(reactive({ isSkeleton: true }), element, naming)
        expect(cellWithSkeleton.getSkeleton()).toBeDefined()
      })

      scope.stop()
    })

    it('should evaluate isDescription method correctly', () => {
      const scope = effectScope()
      const element = ref<HTMLDivElement>()

      scope.run(() => {
        const cellWithoutDesc = new InspectableCell(reactive({}), element, naming)
        expect(cellWithoutDesc.isDescription()).toBe(false)

        const cellWithDesc = new InspectableCell(
          reactive({ description: 'Description text' }),
          element,
          naming
        )
        expect(cellWithDesc.isDescription()).toBe(true)
      })

      scope.stop()
    })
  })
})
