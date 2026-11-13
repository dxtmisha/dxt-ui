// @vitest-environment jsdom
import { afterEach, assert, describe, expect, expectTypeOf, it, vi } from 'vitest'
import {
  createApp,
  createSSRApp,
  effectScope,
  getCurrentScope,
  nextTick,
  onMounted,
  onScopeDispose,
  reactive,
  ref,
  watch,
  type ComponentPublicInstance,
  type EffectScope,
  type Ref
} from 'vue'
import { renderToString } from 'vue/server-renderer'

import { DesignLogicAbstract } from '../DesignLogicAbstract'
import { DesignLifecycleAbstract } from '../DesignLifecycleAbstract'
import { DesignName } from '../DesignName'
import type { ConstrComponent, ConstrConstructors, ConstrItem } from '../../../types/constructorTypes'

/**
 * Dependency with reactive effects owned by its construction scope.
 *
 * Зависимость с реактивными эффектами, принадлежащими области ее создания.
 */
class TestDependency {
  readonly scope = getCurrentScope()
  readonly onChange = vi.fn()
  readonly onDispose = vi.fn()

  /**
   * Registers reactive effects for the dependency.
   *
   * Регистрирует реактивные эффекты зависимости.
   * @param label dependency label / метка зависимости
   * @param value watched value / отслеживаемое значение
   */
  constructor(readonly label: string, readonly value: Ref<number>) {
    watch(value, this.onChange, { flush: 'sync' })
    onScopeDispose(this.onDispose)
  }
}

/**
 * Dependency with a different constructor signature.
 *
 * Зависимость с другой сигнатурой конструктора.
 */
class CountDependency {
  /** Unrelated mount callback / Несвязанный обработчик монтирования */
  readonly onMounted = vi.fn()
  /** Unrelated unmount callback / Несвязанный обработчик демонтирования */
  readonly onUnmounted = vi.fn()

  /**
   * Stores the initial count.
   *
   * Сохраняет начальное количество.
   * @param count initial count / начальное количество
   */
  constructor(readonly count: number) {
  }
}

/**
 * Dependency implementing lifecycle callbacks.
 *
 * Зависимость, реализующая обработчики жизненного цикла.
 */
class LifecycleDependency extends DesignLifecycleAbstract {
  /** Effect scope during mounting / Область реактивности при монтировании */
  mountedScope?: EffectScope

  /** Mount callback recording its effect scope / Обработчик монтирования, сохраняющий область реактивности */
  override readonly onMounted = vi.fn<() => void>(() => {
    this.mountedScope = getCurrentScope()
  })

  /** Unmount callback / Обработчик демонтирования */
  override readonly onUnmounted = vi.fn<() => void>()
}

/**
 * Dependency leaving optional lifecycle callbacks undefined.
 *
 * Зависимость без реализаций необязательных обработчиков жизненного цикла.
 */
class EmptyLifecycleDependency extends DesignLifecycleAbstract {}

/** Dependency constructor overrides / Переопределения конструкторов зависимостей */
export interface TestConstructors {
  DependencyConstructor?: typeof TestDependency
  CountConstructor?: typeof CountDependency
  /** Dependency with lifecycle callbacks / Зависимость с обработчиками жизненного цикла */
  LifecycleConstructor?: typeof LifecycleDependency
  /** Dependency with undefined lifecycle callbacks / Зависимость без обработчиков жизненного цикла */
  EmptyLifecycleConstructor?: typeof EmptyLifecycleDependency
}

/**
 * Logic fixture with lazily evaluated dependency arguments.
 *
 * Тестовый класс логики с ленивым вычислением аргументов зависимостей.
 */
class TestLogic extends DesignLogicAbstract<
  HTMLElement,
  ConstrComponent,
  ConstrItem,
  ConstrItem,
  { label: string },
  TestConstructors
> {
  readonly onArguments = vi.fn()
  /** Lifecycle argument factory calls / Вызовы фабрики аргументов зависимости с жизненным циклом */
  readonly onLifecycleArguments = vi.fn()

  protected readonly constructorItems = {
    DependencyConstructor: {
      parameters: (): ConstructorParameters<typeof TestDependency> => {
        this.onArguments(getCurrentScope())
        return [this.props.label, this.value]
      }
    },
    CountConstructor: {
      parameters: (): ConstructorParameters<typeof CountDependency> => [this.value.value]
    },
    LifecycleConstructor: {
      parameters: (): [] => {
        this.onLifecycleArguments(getCurrentScope())
        return []
      }
    },
    EmptyLifecycleConstructor: {
      parameters: (): [] => []
    }
  }

  /**
   * Registers default dependency constructors and their overrides.
   *
   * Регистрирует стандартные конструкторы зависимостей и их переопределения.
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   * @param hasLifecycle whether to register lifecycle hooks / регистрировать ли хуки жизненного цикла
   */
  constructor(constructors: TestConstructors = {}, hasLifecycle: boolean = true) {
    super(
      { label: 'test' },
      ref<HTMLElement>(),
      new DesignName('d1.test'),
      undefined,
      undefined,
      undefined,
      {
        DependencyConstructor: TestDependency,
        CountConstructor: CountDependency,
        LifecycleConstructor: LifecycleDependency,
        EmptyLifecycleConstructor: EmptyLifecycleDependency,
        ...constructors
      },
      hasLifecycle
    )
  }

  /** Mount state exposed for observation in tests / Состояние монтирования для наблюдения в тестах */
  declare readonly isMounted: Ref<boolean>

  readonly value = ref(0)
}

const scopes: EffectScope[] = []
const unmountCallbacks: (() => void)[] = []

afterEach(() => {
  unmountCallbacks.forEach(unmount => unmount())
  unmountCallbacks.length = 0
  scopes.forEach(scope => scope.stop())
  scopes.length = 0
  vi.restoreAllMocks()
})

/**
 * Creates an effect scope that is stopped after each test.
 *
 * Создает область реактивности, останавливаемую после каждого теста.
 * @returns test effect scope / тестовая область реактивности
 */
function createScope(): EffectScope {
  const scope = effectScope()
  scopes.push(scope)
  return scope
}

/** Mounted logic fixture / Тестовый экземпляр логики смонтированного компонента */
export interface MountedTestLogic<T = TestLogic> {
  /** Component logic / Логика компонента */
  readonly logic: T
  /** Owner component cleanup / Демонтирование компонента */
  readonly unmount: () => void
}

/**
 * Creates logic during component setup and mounts its owner component.
 *
 * Создает логику во время setup и монтирует ее компонент.
 * @param createLogic logic factory / фабрика логики
 * @param onError component error handler / обработчик ошибок компонента
 * @returns mounted logic and cleanup callback / смонтированная логика и функция очистки
 */
function mountLogic<T = TestLogic>(
  createLogic: () => T,
  onError?: (error: unknown, instance: ComponentPublicInstance | null, info: string) => void
): MountedTestLogic<T> {
  let logic: T | undefined
  let isMounted = false
  const application = createApp({
    setup(): () => null {
      logic = createLogic()
      return () => null
    }
  })
  if (onError) {
    application.config.errorHandler = onError
  }
  const unmount = (): void => {
    if (isMounted) {
      application.unmount()
      isMounted = false
    }
  }
  unmountCallbacks.push(unmount)
  application.mount(document.createElement('div'))
  isMounted = true
  assert(logic)
  return { logic, unmount }
}

describe('DesignLogicAbstract', () => {
  it('accepts only string dependency keys in constructor maps and instance lookup', () => {
    expectTypeOf<keyof ConstrConstructors<Record<PropertyKey, typeof LifecycleDependency>>>().toEqualTypeOf<string>()
    expectTypeOf<Parameters<DesignLogicAbstract<
      HTMLElement,
      ConstrComponent,
      ConstrItem,
      ConstrItem,
      ConstrItem,
      Record<PropertyKey, typeof LifecycleDependency>
    >['getInstance']>[0]>().toEqualTypeOf<string>()
  })

  it('supports default generic type parameters for minimal subclasses', () => {
    class MinimalLogic extends DesignLogicAbstract {
      protected readonly constructorItems = {}

      constructor() {
        super({}, ref<Element>(), new DesignName('d1.minimal'))
      }
    }

    const scope = createScope()
    const logic = scope.run(() => new MinimalLogic())
    assert(logic)
    expect(logic.isMounted.value).toBe(false)
  })

  it('evaluates arguments on first access and caches instances separately by name', () => {
    const scope = createScope()
    const logic = scope.run(() => new TestLogic())
    assert(logic)

    expect(logic.onArguments).not.toHaveBeenCalled()
    logic.value.value = 3

    const dependency = logic.getInstance('DependencyConstructor')
    const count = logic.getInstance('CountConstructor')
    expectTypeOf(dependency).toEqualTypeOf<TestDependency>()
    expectTypeOf(count).toEqualTypeOf<CountDependency>()
    expect(dependency).toBeInstanceOf(TestDependency)
    expect(dependency.label).toBe('test')
    expect(dependency.value).toBe(logic.value)
    expect(count.count).toBe(3)
    expect(logic.getInstance('DependencyConstructor')).toBe(dependency)
    expect(logic.i('DependencyConstructor')).toBe(dependency)
    expect(logic.getInstance('CountConstructor')).toBe(count)
    expect(logic.i('CountConstructor')).toBe(count)
    expect(logic.onArguments).toHaveBeenCalledTimes(1)
  })

  it('creates dependencies in the captured scope and disposes their effects with it', () => {
    const ownerScope = createScope()
    const otherScope = createScope()
    const logic = ownerScope.run(() => new TestLogic())
    assert(logic)

    const dependency = otherScope.run(() => logic.getInstance('DependencyConstructor'))
    assert(dependency)
    expect(dependency.scope).toBe(ownerScope)
    expect(logic.onArguments).toHaveBeenCalledWith(ownerScope)

    otherScope.stop()
    logic.value.value++
    expect(dependency.onChange).toHaveBeenCalledTimes(1)
    expect(dependency.onDispose).not.toHaveBeenCalled()

    ownerScope.stop()
    logic.value.value++
    expect(dependency.onChange).toHaveBeenCalledTimes(1)
    expect(dependency.onDispose).toHaveBeenCalledTimes(1)
    expect(logic.getInstance('DependencyConstructor')).toBe(dependency)
  })

  it('uses an overridden dependency constructor', () => {
    class CustomDependency extends TestDependency {}

    const scope = createScope()
    const logic = scope.run(() => new TestLogic({ DependencyConstructor: CustomDependency }))
    assert(logic)

    expect(logic.getInstance('DependencyConstructor')).toBeInstanceOf(CustomDependency)
  })

  it('does not evaluate arguments for an unavailable constructor', () => {
    const scope = createScope()
    const logic = scope.run(() => new TestLogic({ DependencyConstructor: undefined }))
    assert(logic)

    expect(logic.getInstance('DependencyConstructor')).toBeUndefined()
    expect(logic.onArguments).not.toHaveBeenCalled()
  })

  it('does not create dependencies without a captured scope', () => {
    const logic = new TestLogic()

    expect(logic.getInstance('DependencyConstructor')).toBeUndefined()
    expect(logic.onArguments).not.toHaveBeenCalled()
  })

  it('does not create dependencies after the captured scope is stopped', () => {
    const scope = createScope()
    const logic = scope.run(() => new TestLogic())
    assert(logic)
    scope.stop()

    expect(logic.getInstance('DependencyConstructor')).toBeUndefined()
    expect(logic.onArguments).not.toHaveBeenCalled()
  })

  it('invokes lifecycle callbacks only for lifecycle helper instances', () => {
    const { logic, unmount } = mountLogic(() => {
      const logic = new TestLogic()
      const dependency = logic.getInstance('LifecycleConstructor')
      assert(dependency)
      expect(dependency.onMounted).not.toHaveBeenCalled()
      logic.getInstance('EmptyLifecycleConstructor')
      logic.getInstance('CountConstructor')
      return logic
    })
    const dependency = logic.getInstance('LifecycleConstructor')
    const count = logic.getInstance('CountConstructor')
    assert(dependency)
    assert(count)

    expect(dependency.onMounted).toHaveBeenCalledTimes(1)
    expect(dependency.onMounted.mock.contexts[0]).toBe(dependency)
    expect(dependency.onUnmounted).not.toHaveBeenCalled()
    expect(count.onMounted).not.toHaveBeenCalled()

    unmount()
    expect(dependency.onUnmounted).toHaveBeenCalledTimes(1)
    expect(dependency.onUnmounted.mock.contexts[0]).toBe(dependency)
    expect(count.onUnmounted).not.toHaveBeenCalled()
  })

  it('does not register component lifecycle hooks when hasLifecycle is false', () => {
    class DisabledLifecycleLogic extends TestLogic {
      readonly onLogicMounted = vi.fn()
      readonly onLogicUnmounted = vi.fn()

      protected override readonly onMounted = this.onLogicMounted
      protected override readonly onUnmounted = this.onLogicUnmounted

      constructor() {
        super({}, false)
      }
    }

    const { logic, unmount } = mountLogic(() => {
      const instance = new DisabledLifecycleLogic()
      instance.getInstance('LifecycleConstructor')
      return instance
    })

    const dependency = logic.getInstance('LifecycleConstructor')
    assert(dependency)

    expect(logic.isMounted.value).toBe(false)
    expect(dependency.onMounted).not.toHaveBeenCalled()
    expect(logic.onLogicMounted).not.toHaveBeenCalled()

    unmount()
    expect(dependency.onUnmounted).not.toHaveBeenCalled()
    expect(logic.onLogicUnmounted).not.toHaveBeenCalled()
  })

  it('immediately mounts dependencies first requested after component mounting', () => {
    const { logic, unmount } = mountLogic(() => new TestLogic())
    const dependency = logic.getInstance('LifecycleConstructor')
    assert(dependency)

    expect(dependency.onMounted).toHaveBeenCalledTimes(1)
    expect(dependency.mountedScope).toBe(logic.onLifecycleArguments.mock.calls[0]?.[0])
    expect(logic.getInstance('LifecycleConstructor')).toBe(dependency)
    expect(dependency.onMounted).toHaveBeenCalledTimes(1)

    unmount()
    expect(dependency.onUnmounted).toHaveBeenCalledTimes(1)
  })

  it('mounts dependencies created by an earlier component mount hook exactly once', () => {
    let logic: TestLogic | undefined
    const fixture = mountLogic(() => {
      onMounted(() => logic?.getInstance('LifecycleConstructor'))
      logic = new TestLogic()
      return logic
    })
    const dependency = fixture.logic.getInstance('LifecycleConstructor')
    assert(dependency)

    expect(dependency.onMounted).toHaveBeenCalledTimes(1)
    fixture.unmount()
    expect(dependency.onUnmounted).toHaveBeenCalledTimes(1)
  })

  it('keeps unused lifecycle dependencies lazy during mounting and unmounting', () => {
    const { logic, unmount } = mountLogic(() => new TestLogic())

    expect(logic.onLifecycleArguments).not.toHaveBeenCalled()
    unmount()
    expect(logic.onLifecycleArguments).not.toHaveBeenCalled()
  })

  it('keeps the reactive mounted flag true after unmounting', () => {
    const observerScope = createScope()
    const changes: boolean[] = []
    const { logic, unmount } = mountLogic(() => {
      const logic = new TestLogic()
      expect(logic.isMounted.value).toBe(false)
      observerScope.run(() => watch(logic.isMounted, value => changes.push(value), { flush: 'sync' }))
      return logic
    })

    expect(logic.isMounted.value).toBe(true)
    expect(changes).toEqual([true])

    unmount()
    expect(logic.isMounted.value).toBe(true)
    expect(changes).toEqual([true])
  })

  it('mounts a dependency created by a synchronous mount-state watcher exactly once', () => {
    const { logic, unmount } = mountLogic(() => {
      const logic = new TestLogic()
      watch(logic.isMounted, (mounted) => {
        if (mounted) {
          logic.getInstance('LifecycleConstructor')
        }
      }, { flush: 'sync' })
      return logic
    })
    const dependency = logic.getInstance('LifecycleConstructor')
    assert(dependency)

    expect(dependency.onMounted).toHaveBeenCalledTimes(1)
    unmount()
    expect(dependency.onUnmounted).toHaveBeenCalledTimes(1)
  })

  it('isolates cached instances and reactive effects between logic owners', () => {
    const firstScope = createScope()
    const secondScope = createScope()
    const first = firstScope.run(() => new TestLogic())
    const second = secondScope.run(() => new TestLogic())
    assert(first)
    assert(second)
    const firstDependency = first.getInstance('DependencyConstructor')
    const secondDependency = second.getInstance('DependencyConstructor')
    assert(firstDependency)
    assert(secondDependency)

    expect(firstDependency).not.toBe(secondDependency)
    first.value.value++
    expect(firstDependency.onChange).toHaveBeenCalledTimes(1)
    expect(secondDependency.onChange).not.toHaveBeenCalled()

    firstScope.stop()
    second.value.value++
    expect(secondDependency.onChange).toHaveBeenCalledTimes(1)
    expect(secondDependency.onDispose).not.toHaveBeenCalled()
  })

  it('retries creation after a constructor throws without caching the failed attempt', () => {
    let attempts = 0
    const failure = new Error('constructor failed')

    /**
     * Dependency whose first construction fails.
     *
     * Зависимость, первое создание которой завершается ошибкой.
     */
    class RetryingDependency extends CountDependency {
      /**
       * Creates the dependency or throws on its first attempt.
       *
       * Создает зависимость или выбрасывает ошибку при первой попытке.
       * @param count initial count / начальное количество
       */
      constructor(count: number) {
        super(count)
        attempts++
        if (attempts === 1) {
          throw failure
        }
      }
    }

    const scope = createScope()
    const logic = scope.run(() => new TestLogic({ CountConstructor: RetryingDependency }))
    assert(logic)

    expect(() => logic.getInstance('CountConstructor')).toThrow(failure)
    expect(getCurrentScope()).toBeUndefined()
    const dependency = logic.getInstance('CountConstructor')
    expect(dependency).toBeInstanceOf(RetryingDependency)
    expect(logic.getInstance('CountConstructor')).toBe(dependency)
    expect(attempts).toBe(2)
  })

  it('isolates server-rendered logic instances and leaves client lifecycle callbacks inactive', async () => {
    const logics: TestLogic[] = []

    await Promise.all([0, 1].map(() => renderToString(createSSRApp({
      setup(): () => null {
        const logic = new TestLogic()
        logics.push(logic)
        logic.getInstance('LifecycleConstructor')
        return () => null
      }
    }))))

    const [first, second] = logics
    assert(first)
    assert(second)
    const firstDependency = first.getInstance('LifecycleConstructor')
    const secondDependency = second.getInstance('LifecycleConstructor')
    assert(firstDependency)
    assert(secondDependency)

    expect(firstDependency).not.toBe(secondDependency)
    expect(first.isMounted).not.toBe(second.isMounted)
    expect(first.isMounted.value).toBe(false)
    expect(second.isMounted.value).toBe(false)
    expect(firstDependency.onMounted).not.toHaveBeenCalled()
    expect(secondDependency.onMounted).not.toHaveBeenCalled()
    expect(firstDependency.onUnmounted).not.toHaveBeenCalled()
    expect(secondDependency.onUnmounted).not.toHaveBeenCalled()
  })

  it('ignores values returned by callbacks typed as void', () => {
    const events: string[] = []
    const onError = vi.fn<(error: unknown) => void>()

    /**
     * Dependency whose void callbacks return ordinary objects at runtime.
     *
     * Зависимость, обработчики void которой возвращают обычные объекты во время выполнения.
     */
    class ValueDependency extends LifecycleDependency {
      /** Ignored mount result / Игнорируемый результат монтирования */
      override readonly onMounted = vi.fn<() => void>(() => ({}))
      /** Ignored unmount result / Игнорируемый результат демонтирования */
      override readonly onUnmounted = vi.fn<() => void>(() => ({}))
    }

    /**
     * Logic whose void callbacks return array lengths at runtime.
     *
     * Логика, обработчики void которой возвращают длину массива во время выполнения.
     */
    class ValueLogic extends TestLogic {
      /** Mount callback returning an ignored array length / Обработчик монтирования, возвращающий игнорируемую длину массива */
      protected override readonly onMounted: () => void = () => events.push('mounted')
      /** Unmount callback returning an ignored array length / Обработчик демонтирования, возвращающий игнорируемую длину массива */
      protected override readonly onUnmounted: () => void = () => events.push('unmounted')
    }

    const { logic, unmount } = mountLogic(() => {
      const logic = new ValueLogic({ LifecycleConstructor: ValueDependency })
      logic.getInstance('LifecycleConstructor')
      return logic
    }, onError)
    expect(events).toEqual(['mounted'])
    unmount()
    expect(events).toEqual(['mounted', 'unmounted'])
    expect(logic.getInstance('LifecycleConstructor')?.onMounted).toHaveBeenCalledTimes(1)
    expect(logic.getInstance('LifecycleConstructor')?.onUnmounted).toHaveBeenCalledTimes(1)
    expect(onError).not.toHaveBeenCalled()
  })

  it('owns initial mount effects in the captured nested scope', () => {
    const value = ref(0)
    const changed = vi.fn()
    let ownerScope: EffectScope | undefined

    /**
     * Dependency creating a watcher when mounted.
     *
     * Зависимость, создающая наблюдатель при монтировании.
     */
    class ScopedLifecycle extends LifecycleDependency {
      /** Mount callback creating a scoped watcher / Обработчик монтирования, создающий наблюдатель в области */
      override readonly onMounted = vi.fn(() => {
        watch(value, changed, { flush: 'sync' })
        this.mountedScope = getCurrentScope()
      })
    }

    const { logic, unmount } = mountLogic(() => {
      ownerScope = createScope()
      const logic = ownerScope.run(() => new TestLogic({ LifecycleConstructor: ScopedLifecycle }))
      assert(logic)
      logic.getInstance('LifecycleConstructor')
      return logic
    })
    assert(ownerScope)
    const dependency = logic.getInstance('LifecycleConstructor')
    assert(dependency)

    expect(dependency.mountedScope).toBe(ownerScope)
    value.value++
    expect(changed).toHaveBeenCalledTimes(1)

    ownerScope.stop()
    value.value++
    expect(changed).toHaveBeenCalledTimes(1)
    unmount()
    expect(dependency.onUnmounted).toHaveBeenCalledTimes(1)
  })

  it('skips initial mount callbacks for a scope stopped before component mounting', () => {
    const { logic, unmount } = mountLogic(() => {
      const ownerScope = createScope()
      const logic = ownerScope.run(() => new TestLogic())
      assert(logic)
      logic.getInstance('LifecycleConstructor')
      ownerScope.stop()
      return logic
    })
    const dependency = logic.getInstance('LifecycleConstructor')
    assert(dependency)

    expect(dependency.onMounted).not.toHaveBeenCalled()
    unmount()
    expect(dependency.onUnmounted).toHaveBeenCalledTimes(1)
  })

  it('invokes own lifecycle methods after dependencies with their owner context', () => {
    const events: string[] = []
    const contexts: unknown[] = []
    const states: boolean[] = []
    let ownerScope: EffectScope | undefined
    let mountScope: EffectScope | undefined

    /**
     * Dependency recording lifecycle callback order.
     *
     * Зависимость, записывающая порядок обработчиков жизненного цикла.
     */
    class TrackingDependency extends LifecycleDependency {
      /** Mount callback / Обработчик монтирования */
      override readonly onMounted = vi.fn(() => {
        events.push('dependency-mounted')
        this.mountedScope = getCurrentScope()
      })

      /** Unmount callback / Обработчик демонтирования */
      override readonly onUnmounted = vi.fn(() => {
        events.push('dependency-unmounted')
      })
    }

    /**
     * Logic recording its own lifecycle methods.
     *
     * Логика, записывающая вызовы собственных методов жизненного цикла.
     */
    class TrackingLogic extends TestLogic {
      /** Mount callback recording context and state / Обработчик монтирования, записывающий контекст и состояние */
      protected override readonly onMounted = (): void => {
        events.push('logic-mounted')
        contexts.push(this)
        states.push(this.isMounted.value)
        mountScope = getCurrentScope()
      }

      /** Unmount callback recording context and state / Обработчик демонтирования, записывающий контекст и состояние */
      protected override readonly onUnmounted = (): void => {
        events.push('logic-unmounted')
        contexts.push(this)
        states.push(this.isMounted.value)
      }
    }

    const { logic, unmount } = mountLogic(() => {
      ownerScope = createScope()
      const logic = ownerScope.run(() => new TrackingLogic({ LifecycleConstructor: TrackingDependency }))
      assert(logic)
      logic.getInstance('LifecycleConstructor')
      return logic
    })
    assert(ownerScope)

    expect(events).toEqual(['dependency-mounted', 'logic-mounted'])
    expect(contexts).toEqual([logic])
    expect(states).toEqual([true])
    expect(mountScope).toBe(ownerScope)
    logic.getInstance('CountConstructor')
    expect(events).toEqual(['dependency-mounted', 'logic-mounted'])

    ownerScope.stop()
    unmount()
    expect(events).toEqual(['dependency-mounted', 'logic-mounted', 'dependency-unmounted', 'logic-unmounted'])
    expect(contexts).toEqual([logic, logic])
    expect(states).toEqual([true, true])
  })

  it('resolves dependency constructors from constructor overrides or constructorItems via getConstructor', () => {
    class CustomDependency {
      constructor(readonly tag: string) {}
    }

    interface DefaultTestConstructors {
      first?: typeof TestDependency
      second?: typeof CountDependency
      custom?: typeof CustomDependency
    }

    class DefaultTestLogic extends DesignLogicAbstract<
      HTMLElement,
      ConstrComponent,
      ConstrItem,
      ConstrItem,
      ConstrItem,
      DefaultTestConstructors
    > {
      protected readonly constructorItems = {
        first: {
          item: TestDependency,
          parameters: (): [string, Ref<number>] => ['default-first', ref(1)]
        },
        second: {
          item: CountDependency,
          parameters: (): [number] => [42]
        },
        custom: {
          parameters: (): [string] => ['custom-tag']
        }
      }

      constructor(constructors?: DefaultTestConstructors) {
        super({}, ref<HTMLElement>(), new DesignName('d1.default-test'), undefined, undefined, undefined, constructors)
      }
    }

    const scope = effectScope()
    const logic = scope.run(() => new DefaultTestLogic({ second: undefined, custom: CustomDependency }))
    assert(logic)

    const first = logic.getInstance('first')
    expect(first).toBeInstanceOf(TestDependency)
    expect(first.label).toBe('default-first')

    const second = logic.getInstance('second')
    expect(second).toBeInstanceOf(CountDependency)
    expect(second.count).toBe(42)

    const custom = logic.getInstance('custom')
    expect(custom).toBeInstanceOf(CustomDependency)
    expect(custom.tag).toBe('custom-tag')

    scope.stop()
  })

  it('automatically instantiates dependencies with satisfied conditions on mount using consolidated watcher', () => {
    interface ConditionalTestConstructors {
      single?: typeof CountDependency
      multiple?: typeof TestDependency
      inactive?: typeof CountDependency
    }

    class ConditionalTestLogic extends DesignLogicAbstract<
      HTMLElement,
      ConstrComponent,
      ConstrItem,
      ConstrItem,
      { enabledSingle: boolean, condA: boolean, condB: boolean },
      ConditionalTestConstructors
    > {
      protected readonly constructorItems = {
        single: {
          item: CountDependency,
          conditions: () => this.props.enabledSingle,
          parameters: (): [number] => [1]
        },
        multiple: {
          item: TestDependency,
          conditions: () => this.props.condA && this.props.condB,
          parameters: (): [string, Ref<number>] => ['multi', ref(2)]
        },
        inactive: {
          item: CountDependency,
          conditions: () => false,
          parameters: (): [number] => [3]
        }
      }

      constructor(props: { enabledSingle: boolean, condA: boolean, condB: boolean }) {
        super(props, ref<HTMLElement>(), new DesignName('d1.conditional-test'), undefined, undefined, undefined, {
          single: CountDependency,
          multiple: TestDependency,
          inactive: CountDependency
        })
      }

      get instantiatedItems(): Partial<Record<keyof ConditionalTestConstructors, unknown>> {
        return this.instances
      }
    }

    const props = reactive({ enabledSingle: true, condA: true, condB: true })
    const { logic, unmount } = mountLogic(() => new ConditionalTestLogic(props))

    expect(logic.instantiatedItems.single).toBeInstanceOf(CountDependency)
    expect(logic.instantiatedItems.multiple).toBeInstanceOf(TestDependency)
    expect(logic.instantiatedItems.inactive).toBeUndefined()

    unmount()
  })

  it('dynamically instantiates dependencies when their conditions become satisfied after mount', async () => {
    interface DynamicTestConstructors {
      single?: typeof CountDependency
      multi?: typeof CountDependency
    }

    class DynamicTestLogic extends DesignLogicAbstract<
      HTMLElement,
      ConstrComponent,
      ConstrItem,
      ConstrItem,
      { flag: boolean, a: boolean, b: boolean },
      DynamicTestConstructors
    > {
      protected readonly constructorItems = {
        single: {
          item: CountDependency,
          conditions: () => this.props.flag,
          parameters: (): [number] => [10]
        },
        multi: {
          item: CountDependency,
          conditions: () => this.props.a && this.props.b,
          parameters: (): [number] => [20]
        }
      }

      constructor(props: { flag: boolean, a: boolean, b: boolean }) {
        super(props, ref<HTMLElement>(), new DesignName('d1.dynamic-test'), undefined, undefined, undefined, {
          single: CountDependency,
          multi: CountDependency
        })
      }

      get instantiatedItems(): Partial<Record<keyof DynamicTestConstructors, unknown>> {
        return this.instances
      }
    }

    const props = reactive({ flag: false, a: false, b: false })
    const { logic, unmount } = mountLogic(() => new DynamicTestLogic(props))

    expect(logic.instantiatedItems.single).toBeUndefined()
    expect(logic.instantiatedItems.multi).toBeUndefined()

    props.flag = true
    await nextTick()
    expect(logic.instantiatedItems.single).toBeInstanceOf(CountDependency)
    expect(logic.instantiatedItems.multi).toBeUndefined()

    props.a = true
    await nextTick()
    expect(logic.instantiatedItems.multi).toBeUndefined()

    props.b = true
    await nextTick()
    expect(logic.instantiatedItems.multi).toBeInstanceOf(CountDependency)

    unmount()
  })

  it('checks whether a dependency instance has been created via hasInstance without triggering instantiation', () => {
    const scope = createScope()
    const logic = scope.run(() => new TestLogic({}, false))

    assert(logic)
    expect(logic.hasInstance('DependencyConstructor')).toBe(false)
    expect(logic.hasInstance('CountConstructor')).toBe(false)
    expect(logic.hasInstance('toString' as keyof TestConstructors & string)).toBe(false)
    expect(logic.onArguments).not.toHaveBeenCalled()

    logic.getInstance('DependencyConstructor')

    expect(logic.hasInstance('DependencyConstructor')).toBe(true)
    expect(logic.hasInstance('CountConstructor')).toBe(false)
  })

  it('executes callback in callInstance based on instance presence and canCreate guard', () => {
    interface CallInstanceConstructors {
      withoutGuard?: typeof CountDependency
      guarded?: typeof CountDependency
      booleanFalse?: typeof CountDependency
      booleanTrue?: typeof CountDependency
    }

    const canCreateGuarded = vi.fn(() => false)

    class CallInstanceLogic extends DesignLogicAbstract<
      HTMLElement,
      ConstrComponent,
      ConstrItem,
      ConstrItem,
      { label: string },
      CallInstanceConstructors
    > {
      protected readonly constructorItems = {
        withoutGuard: {
          item: CountDependency,
          parameters: (): [number] => [5]
        },
        guarded: {
          item: CountDependency,
          canCreate: canCreateGuarded,
          parameters: (): [number] => [9]
        },
        booleanFalse: {
          item: CountDependency,
          canCreate: false,
          parameters: (): [number] => [11]
        },
        booleanTrue: {
          item: CountDependency,
          canCreate: true,
          parameters: (): [number] => [12]
        }
      }

      constructor() {
        super(
          { label: 'test' },
          ref<HTMLElement>(),
          new DesignName('d1.call-instance-test'),
          undefined,
          undefined,
          undefined,
          {
            withoutGuard: CountDependency,
            guarded: CountDependency,
            booleanFalse: CountDependency,
            booleanTrue: CountDependency
          },
          false
        )
      }
    }

    const scope = createScope()
    const logic = scope.run(() => new CallInstanceLogic())
    assert(logic)

    const withoutGuardResult = logic.callInstance('withoutGuard', instance => instance.count)
    expect(withoutGuardResult).toBe(5)
    expect(logic.hasInstance('withoutGuard')).toBe(true)

    const blockedCallback = vi.fn((instance: CountDependency) => instance.count)
    expect(logic.callInstance('guarded', blockedCallback)).toBeUndefined()
    expect(canCreateGuarded).toHaveBeenCalledTimes(1)
    expect(blockedCallback).not.toHaveBeenCalled()
    expect(logic.hasInstance('guarded')).toBe(false)

    expect(logic.callInstance('booleanFalse', blockedCallback)).toBeUndefined()
    expect(blockedCallback).not.toHaveBeenCalled()
    expect(logic.hasInstance('booleanFalse')).toBe(false)

    const fallbackList: number[] = logic.callInstance('booleanFalse', instance => [instance.count], [])
    expect(fallbackList).toEqual([])
    expectTypeOf(fallbackList).toEqualTypeOf<number[]>()

    const defaultFactory = vi.fn(() => 'fallback')
    const fallbackString = logic.callInstance('booleanFalse', instance => instance.count, defaultFactory)
    expect(fallbackString).toBe('fallback')
    expect(defaultFactory).toHaveBeenCalledTimes(1)
    expectTypeOf(fallbackString).toEqualTypeOf<number | string>()

    const unusedDefaultFactory = vi.fn(() => 0)
    const directTrue = logic.callInstance('booleanTrue', instance => instance.count, unusedDefaultFactory)
    expect(directTrue).toBe(12)
    expect(unusedDefaultFactory).not.toHaveBeenCalled()
    expect(logic.hasInstance('booleanTrue')).toBe(true)
    expectTypeOf(directTrue).toEqualTypeOf<number>()

    canCreateGuarded.mockReturnValue(true)
    const allowedResult = logic.callInstance('guarded', instance => instance.count * 2)
    expect(allowedResult).toBe(18)
    expect(canCreateGuarded).toHaveBeenCalledTimes(2)
    expect(logic.hasInstance('guarded')).toBe(true)

    canCreateGuarded.mockReturnValue(false)
    const existingResult = logic.callInstance('guarded', instance => instance.count + 1)
    expect(existingResult).toBe(10)
    expect(canCreateGuarded).toHaveBeenCalledTimes(2)
  })
})
