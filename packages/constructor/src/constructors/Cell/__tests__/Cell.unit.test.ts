// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { effectScope, reactive, ref } from 'vue'
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

describe('Cell (unit)', () => {
  const naming = new DesignName('d1.cell')

  it('should not eagerly instantiate optional conditional classes upon creation', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()
    const props: CellProps = reactive({})

    const cell = scope.run(() => new InspectableCell(props, element, naming))!

    expect(cell).toBeDefined()
    expect(cell.instantiatedItems.caption).toBeUndefined()
    expect(cell.instantiatedItems.description).toBeUndefined()
    expect(cell.instantiatedItems.icon).toBeUndefined()
    expect(cell.instantiatedItems.label).toBeUndefined()
    expect(cell.instantiatedItems.progress).toBeUndefined()
    expect(cell.instantiatedItems.ripple).toBeUndefined()
    expect(cell.instantiatedItems.skeleton).toBeUndefined()

    scope.stop()
  })

  it('should keep optional helpers lazy on mount and instantiate them on demand', () => {
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

    expect(cell.instantiatedItems.label).toBeUndefined()
    expect(cell.instantiatedItems.caption).toBeUndefined()
    expect(cell.instantiatedItems.description).toBeUndefined()
    expect(cell.instantiatedItems.icon).toBeUndefined()
    expect(cell.instantiatedItems.progress).toBeUndefined()
    expect(cell.instantiatedItems.skeleton).toBeUndefined()

    expect(cell.i('label')).toBeDefined()
    expect(cell.i('caption')).toBeDefined()
    expect(cell.i('description')).toBeDefined()
    expect(cell.i('icon')).toBeDefined()
    expect(cell.i('progress')).toBeDefined()
    expect(cell.i('skeleton')).toBeDefined()

    cell.triggerUnmounted()
    scope.stop()
  })

  it('should compute classes and classesSub accurately', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()

    scope.run(() => {
      const cellWithoutDescription = new InspectableCell(reactive({}), element, naming)
      expect(cellWithoutDescription.classes[naming.getStatusClass('description')]).toBe(false)

      const cellWithDescription = new InspectableCell(
        reactive({ description: 'With description' }),
        element,
        naming
      )
      expect(cellWithDescription.classes[naming.getStatusClass('description')]).toBe(true)

      const subClasses = cellWithDescription.classesSub
      expect(subClasses.label).toBe(naming.getSubClass('label'))
      expect(subClasses.description).toBe(naming.getSubClass('description'))
      expect(subClasses.caption).toBe(naming.getSubClass('caption'))
      expect(subClasses.trailing).toBe(naming.getSubClass('trailing'))
    })

    scope.stop()
  })

  it('should resolve tag priority: explicit tag > a (href/to) > div', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()

    scope.run(() => {
      expect(new InspectableCell(reactive({}), element, naming).tag).toBe('div')
      expect(new InspectableCell(reactive({ href: 'https://example.com' }), element, naming).tag).toBe('a')
      expect(new InspectableCell(reactive({ to: '/settings' }), element, naming).tag).toBe('a')
      expect(new InspectableCell(reactive({ tag: 'li', href: 'https://example.com' }), element, naming).tag).toBe('li')
    })

    scope.stop()
  })

  it('should resolve role and binds for static, dynamic, anchor, and custom role modes', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()

    scope.run(() => {
      const staticCell = new InspectableCell(reactive({ divider: true, value: 'item-1' }), element, naming)
      expect(staticCell.role).toBeUndefined()
      expect(staticCell.binds.role).toBeUndefined()
      expect(staticCell.binds.tabindex).toBeUndefined()
      expect(staticCell.binds['data-divider']).toBe('active')
      expect(staticCell.binds['data-value']).toBe('item-1')

      const dynamicCell = new InspectableCell(reactive({ dynamic: true }), element, naming)
      expect(dynamicCell.role).toBe('button')
      expect(dynamicCell.binds.role).toBe('button')
      expect(dynamicCell.binds.tabindex).toBe('0')

      const anchorCell = new InspectableCell(reactive({ href: '/profile', dynamic: true }), element, naming)
      expect(anchorCell.tag).toBe('a')
      expect(anchorCell.role).toBeUndefined()
      expect(anchorCell.binds.role).toBeUndefined()

      const customRoleCell = new InspectableCell(reactive({ role: 'listitem', dynamic: true }), element, naming)
      expect(customRoleCell.role).toBe('listitem')
      expect(customRoleCell.binds.role).toBe('listitem')
    })

    scope.stop()
  })

  it('should support dependency injection overrides and respect canCreate on skeleton', () => {
    const scope = effectScope()
    const element = ref<HTMLDivElement>()

    class MockEnabled {
      readonly isEnabled = true
      readonly isDisabledOrUndefined = undefined
    }

    scope.run(() => {
      const cell = new InspectableCell(
        reactive({}),
        element,
        naming,
        undefined,
        undefined,
        undefined,
        {
          enabled: MockEnabled as unknown as CellConstructors['enabled']
        }
      )

      expect(cell.i('enabled')).toBeInstanceOf(MockEnabled)
      expect(cell.callInstance('skeleton', item => item)).toBeUndefined()
      expect(cell.hasInstance('skeleton')).toBe(false)

      const cellWithSkeleton = new InspectableCell(reactive({ isSkeleton: true }), element, naming)
      expect(cellWithSkeleton.callInstance('skeleton', item => item)).toBeDefined()
      expect(cellWithSkeleton.hasInstance('skeleton')).toBe(true)
    })

    scope.stop()
  })
})
