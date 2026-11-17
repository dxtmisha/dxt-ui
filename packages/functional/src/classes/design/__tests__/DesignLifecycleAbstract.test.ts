import { effectScope, type EffectScope } from 'vue'
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
  /** Last effect scope passed to callbacks / Последняя область эффектов, переданная в обработчики */
  lastScope?: EffectScope

  /** Mount callback / Обработчик монтирования */
  override readonly onMounted = (scope?: EffectScope): void => {
    this.history.push('mounted')
    this.lastScope = scope
  }

  /** Unmount callback / Обработчик демонтирования */
  override readonly onUnmounted = (scope?: EffectScope): void => {
    this.history.push('unmounted')
    this.lastScope = scope
  }
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
    expectTypeOf<DesignLifecycleAbstract['onMounted']>().toEqualTypeOf<((scope?: EffectScope) => void) | undefined>()
    expectTypeOf<DesignLifecycleAbstract['onUnmounted']>().toEqualTypeOf<((scope?: EffectScope) => void) | undefined>()
  })

  it('keeps initialization lazy and invokes callbacks with their instance state', () => {
    const dependency = new LifecycleDependency()
    const scope = effectScope()
    expect(dependency.history).toEqual([])
    dependency.onMounted(scope)
    expect(dependency.lastScope).toBe(scope)
    dependency.onUnmounted(scope)
    expect(dependency.lastScope).toBe(scope)
    expect(dependency.history).toEqual(['mounted', 'unmounted'])
    scope.stop()
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

  it('distinguishes real instances from duck-typed plain objects via instanceof', () => {
    const plainObject = {
      onMounted: () => {},
      onUnmounted: () => {}
    }
    expect(plainObject instanceof DesignLifecycleAbstract).toBe(false)
  })
})
