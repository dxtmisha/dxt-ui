import { describe, expect, expectTypeOf, it } from 'vitest'
import { DesignLifecycleAbstract } from '../DesignLifecycleAbstract'

/**
 * Concrete lifecycle dependency with instance-owned state.
 *
 * Конкретная зависимость жизненного цикла с собственным состоянием.
 */
class LifecycleDependency extends DesignLifecycleAbstract {
  /** Callback history / История вызовов */
  readonly history: string[] = []
  /** Mount callback / Обработчик монтирования */
  override readonly onMounted = (): void => { this.history.push('mounted') }
  /** Unmount callback / Обработчик демонтирования */
  override readonly onUnmounted = (): void => { this.history.push('unmounted') }
}

/**
 * Dependency leaving both optional callbacks unimplemented.
 *
 * Зависимость без реализаций обоих необязательных обработчиков.
 */
class EmptyDependency extends DesignLifecycleAbstract {}

describe('DesignLifecycleAbstract', () => {
  it('allows dependencies to omit both synchronous callbacks', () => {
    const dependency = new EmptyDependency()
    expect(dependency).toBeInstanceOf(DesignLifecycleAbstract)
    expect(dependency.onMounted).toBeUndefined()
    expect(dependency.onUnmounted).toBeUndefined()
    expectTypeOf<DesignLifecycleAbstract['onMounted']>().toEqualTypeOf<(() => void) | undefined>()
    expectTypeOf<DesignLifecycleAbstract['onUnmounted']>().toEqualTypeOf<(() => void) | undefined>()
  })

  it('keeps initialization lazy and invokes callbacks with their instance state', () => {
    const dependency = new LifecycleDependency()
    expect(dependency.history).toEqual([])
    dependency.onMounted()
    dependency.onUnmounted()
    expect(dependency.history).toEqual(['mounted', 'unmounted'])
  })

  it('keeps callback state isolated between dependencies', () => {
    const first = new LifecycleDependency()
    const second = new LifecycleDependency()
    first.onMounted()
    expect(first.history).toEqual(['mounted'])
    expect(second.history).toEqual([])
    second.onUnmounted()
    expect(second.history).toEqual(['unmounted'])
    expect(first.history).toEqual(['mounted'])
  })
})
