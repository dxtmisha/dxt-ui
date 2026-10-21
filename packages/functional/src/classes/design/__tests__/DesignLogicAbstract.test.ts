// @vitest-environment jsdom
import { afterEach, assert, describe, expect, expectTypeOf, it, vi } from 'vitest'
import { createApp, createSSRApp, effectScope, getCurrentInstance, getCurrentScope, h, onErrorCaptured, onMounted, onScopeDispose, ref, watch, type ComponentPublicInstance, type EffectScope, type Ref, type VNode } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { ErrorCenter } from '@dxtmisha/functional-basic'

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
   */
  constructor(constructors: TestConstructors = {}) {
    super({ label: 'test' }, ref<HTMLElement>(), new DesignName('d1.test'), undefined, undefined, undefined, {
      DependencyConstructor: TestDependency,
      CountConstructor: CountDependency,
      LifecycleConstructor: LifecycleDependency,
      EmptyLifecycleConstructor: EmptyLifecycleDependency,
      ...constructors
    })
  }

  /** Mount state exposed for observation in tests / Состояние монтирования для наблюдения в тестах */
  declare readonly isMounted: Ref<boolean>

  readonly value = ref(0)
}

/**
 * Logic fixture with dependency names matching Object prototype properties.
 *
 * Тестовый класс логики с именами зависимостей, совпадающими со свойствами прототипа Object.
 */
class PrototypeKeyLogic extends DesignLogicAbstract<
  HTMLElement,
  ConstrComponent,
  ConstrItem,
  ConstrItem,
  { label: string },
  Record<string, typeof LifecycleDependency | undefined>
> {
  /** Argument factories for prototype property names / Фабрики аргументов для имен свойств прототипа */
  protected readonly constructorItems = {
    constructor: { parameters: (): [] => [] },
    toString: { parameters: (): [] => [] },
    hasOwnProperty: { parameters: (): [] => [] },
    ['__proto__']: { parameters: (): [] => [] }
  }

  /**
   * Registers constructors with arbitrary dependency names.
   *
   * Регистрирует конструкторы с произвольными именами зависимостей.
   * @param constructors dependency constructors / конструкторы зависимостей
   */
  constructor(constructors: Record<string, typeof LifecycleDependency | undefined> = {}) {
    super({ label: 'test' }, ref<HTMLElement>(), new DesignName('d1.test'), undefined, undefined, undefined, constructors)
  }
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
export interface MountedTestLogic {
  /** Component logic / Логика компонента */
  readonly logic: TestLogic
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
function mountLogic(
  createLogic: () => TestLogic,
  onError?: (error: unknown, instance: ComponentPublicInstance | null, info: string) => void
): MountedTestLogic {
  let logic: TestLogic | undefined
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

  it.each(['constructor', 'toString', 'hasOwnProperty', '__proto__'])('creates and caches a dependency named %s', (name) => {
    const scope = createScope()
    const logic = scope.run(() => new PrototypeKeyLogic({ [name]: LifecycleDependency }))
    assert(logic)

    const dependency = logic.getInstance(name)
    expectTypeOf(dependency).toEqualTypeOf<LifecycleDependency>()
    expect(dependency).toBeInstanceOf(LifecycleDependency)
    expect(logic.getInstance(name)).toBe(dependency)
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

  it.each([
    ['onMounted', false],
    ['onMounted', true],
    ['onUnmounted', false],
    ['onUnmounted', true]
  ] as const)('continues %s dependency callbacks when logic failure is %s', (name, failsLogic) => {
    const events: string[] = []
    const receivedErrors: unknown[] = []
    const failure = new Error(`${name} failed`)
    const logicFailure = new Error(`${name} logic failed`)
    const reportError = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {
      events.push('reported')
    })

    /**
     * Dependency with a failing lifecycle callback.
     *
     * Зависимость с обработчиком жизненного цикла, выбрасывающим ошибку.
     */
    class FailingLifecycle extends LifecycleDependency {
      /**
       * Configures the selected callback to fail.
       *
       * Настраивает выбранный обработчик на выбрасывание ошибки.
       */
      constructor() {
        super()
        this[name].mockImplementation(() => {
          events.push('failed')
          throw failure
        })
      }
    }

    /**
     * Dependency whose callback must run after another callback fails.
     *
     * Зависимость, обработчик которой должен выполниться после ошибки другого обработчика.
     */
    class LaterLifecycle extends EmptyLifecycleDependency {
      /** Mount callback / Обработчик монтирования */
      override readonly onMounted = vi.fn()
      /** Unmount callback / Обработчик демонтирования */
      override readonly onUnmounted = vi.fn()

      /**
       * Records execution of the selected callback.
       *
       * Записывает выполнение выбранного обработчика.
       */
      constructor() {
        super()
        this[name].mockImplementation(() => {
          events.push('later')
        })
      }
    }

    /**
     * Logic whose lifecycle callback can fail after its dependency callbacks.
     *
     * Логика, обработчик жизненного цикла которой может завершиться ошибкой после обработчиков зависимостей.
     */
    class FailingLogic extends TestLogic {
      /** Mount callback that can fail / Обработчик монтирования, который может выбросить ошибку */
      protected override readonly onMounted = (): void => {
        if (name === 'onMounted') {
          events.push('logic')
          if (failsLogic) {
            throw logicFailure
          }
        }
      }

      /** Unmount callback that can fail / Обработчик демонтирования, который может выбросить ошибку */
      protected override readonly onUnmounted = (): void => {
        if (name === 'onUnmounted') {
          events.push('logic')
          if (failsLogic) {
            throw logicFailure
          }
        }
      }
    }

    const { logic, unmount } = mountLogic(() => {
      const logic = new FailingLogic({ LifecycleConstructor: FailingLifecycle, EmptyLifecycleConstructor: LaterLifecycle })
      logic.getInstance('LifecycleConstructor')
      logic.getInstance('EmptyLifecycleConstructor')
      return logic
    }, (error) => {
      receivedErrors.push(error)
      events.push('vue')
    })

    if (name === 'onUnmounted') {
      expect(reportError).not.toHaveBeenCalled()
      unmount()
    }

    expect(events).toEqual(['failed', 'later', 'reported', 'vue'])
    expect(logic.getInstance('EmptyLifecycleConstructor')?.[name]).toHaveBeenCalledTimes(1)
    expect(receivedErrors).toHaveLength(1)
    const aggregate = reportError.mock.calls[0]?.[0].details
    assert(aggregate instanceof AggregateError)
    expect(aggregate.errors).toEqual([failure])
    expect(receivedErrors[0]).toBe(aggregate)
    expect(reportError).toHaveBeenCalledExactlyOnceWith({ group: 'design', code: name, details: aggregate })
  })

  it.each([
    ['dependency', 'onMounted'],
    ['logic', 'onMounted'],
    ['dependency', 'onUnmounted'],
    ['logic', 'onUnmounted']
  ] as const)('reports synchronous %s errors during %s through Vue', (owner, name) => {
    const failure = new Error(`${owner} ${name} failed`)
    const reportError = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
    const onError = vi.fn<(error: unknown, instance: ComponentPublicInstance | null, info: string) => void>()
    let component: ComponentPublicInstance | null | undefined

    /**
     * Dependency throwing during the selected lifecycle phase.
     *
     * Зависимость, выбрасывающая ошибку на выбранном этапе жизненного цикла.
     */
    class FailingDependency extends LifecycleDependency {
      /** Optional mount failure / Необязательная ошибка монтирования */
      override readonly onMounted = vi.fn(() => {
        if (owner === 'dependency' && name === 'onMounted') {
          throw failure
        }
      })

      /** Optional unmount failure / Необязательная ошибка демонтирования */
      override readonly onUnmounted = vi.fn(() => {
        if (owner === 'dependency' && name === 'onUnmounted') {
          throw failure
        }
      })
    }

    /**
     * Logic throwing during the selected lifecycle phase.
     *
     * Логика, выбрасывающая ошибку на выбранном этапе жизненного цикла.
     */
    class FailingLogic extends TestLogic {
      /** Optional mount failure / Необязательная ошибка монтирования */
      protected override readonly onMounted = (): void => {
        if (owner === 'logic' && name === 'onMounted') {
          throw failure
        }
      }

      /** Optional unmount failure / Необязательная ошибка демонтирования */
      protected override readonly onUnmounted = (): void => {
        if (owner === 'logic' && name === 'onUnmounted') {
          throw failure
        }
      }
    }

    const { logic, unmount } = mountLogic(() => {
      component = getCurrentInstance()?.proxy
      const logic = new FailingLogic({ LifecycleConstructor: FailingDependency })
      logic.getInstance('LifecycleConstructor')
      return logic
    }, onError)

    if (name === 'onUnmounted') {
      unmount()
    }

    expect(onError).toHaveBeenCalledTimes(1)
    const reported = onError.mock.calls[0]?.[0]
    if (owner === 'dependency') {
      assert(reported instanceof AggregateError)
      expect(reported.errors).toEqual([failure])
      expect(reportError).toHaveBeenCalledExactlyOnceWith({ group: 'design', code: name, details: reported })
    } else {
      expect(reported).toBe(failure)
      expect(reportError).not.toHaveBeenCalled()
    }
    expect(onError).toHaveBeenCalledExactlyOnceWith(reported, component, name === 'onMounted' ? 'mounted hook' : 'unmounted hook')
    expect(logic.getInstance('LifecycleConstructor')?.[name]).toHaveBeenCalledTimes(1)
  })

  it('throws a late mount failure to the caller while preserving its scope and cached instance', () => {
    const failure = new Error('late mount failed')
    const reportError = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
    const onError = vi.fn<(error: unknown) => void>()
    let ownerScope: EffectScope | undefined

    /**
     * Lazy dependency with a synchronous mount failure.
     *
     * Ленивая зависимость с синхронной ошибкой монтирования.
     */
    class LateDependency extends LifecycleDependency {
      /** Failing mount callback recording its scope / Обработчик монтирования, записывающий область и выбрасывающий ошибку */
      override readonly onMounted = vi.fn(() => {
        this.mountedScope = getCurrentScope()
        throw failure
      })
    }

    const { logic } = mountLogic(() => {
      ownerScope = createScope()
      const logic = ownerScope.run(() => new TestLogic({ LifecycleConstructor: LateDependency }))
      assert(logic)
      return logic
    }, onError)

    expect(getCurrentInstance()).toBeNull()
    expect(() => logic.getInstance('LifecycleConstructor')).toThrow(AggregateError)
    expect(getCurrentScope()).toBeUndefined()
    const reported = reportError.mock.calls[0]?.[0].details
    assert(reported instanceof AggregateError)
    expect(reported.errors).toEqual([failure])
    expect(reportError).toHaveBeenCalledExactlyOnceWith({ group: 'design', code: 'onMounted', details: reported })
    expect(onError).not.toHaveBeenCalled()

    const dependency = logic.getInstance('LifecycleConstructor')
    assert(dependency)
    expect(dependency.mountedScope).toBe(ownerScope)
    expect(logic.getInstance('LifecycleConstructor')).toBe(dependency)
    expect(dependency.onMounted).toHaveBeenCalledTimes(1)
  })

  it('ignores values returned by callbacks typed as void', () => {
    const events: string[] = []
    const reportError = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
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
    expect(reportError).not.toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()
  })

  it('forwards synchronous lifecycle errors through parent errorCaptured hooks', () => {
    const failure = new Error('captured synchronous failure')
    const reportError = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
    const onError = vi.fn<(error: unknown) => void>()
    const captured = vi.fn<(error: unknown, instance: ComponentPublicInstance | null, info: string) => boolean>(() => false)

    /**
     * Dependency whose mount failure is handled by its owner component's parent.
     *
     * Зависимость, ошибка монтирования которой обрабатывается родителем компонента-владельца.
     */
    class CapturedDependency extends LifecycleDependency {
      /** Failing mount callback / Обработчик монтирования с ошибкой */
      override readonly onMounted = vi.fn(() => {
        throw failure
      })
    }

    const child = {
      setup(): () => null {
        new TestLogic({ LifecycleConstructor: CapturedDependency }).getInstance('LifecycleConstructor')
        return () => null
      }
    }
    const application = createApp({
      setup(): () => VNode {
        onErrorCaptured(captured)
        return () => h(child)
      }
    })
    application.config.errorHandler = onError
    application.mount(document.createElement('div'))
    unmountCallbacks.push(() => application.unmount())

    const reported = captured.mock.calls[0]?.[0]
    assert(reported instanceof AggregateError)
    expect(reported.errors).toEqual([failure])
    expect(reportError).toHaveBeenCalledExactlyOnceWith({ group: 'design', code: 'onMounted', details: reported })
    expect(captured).toHaveBeenCalledExactlyOnceWith(reported, expect.any(Object), 'mounted hook')
    expect(onError).not.toHaveBeenCalled()
  })

  it.each(['onMounted', 'onUnmounted'] as const)('collects all synchronous dependency failures during %s', (name) => {
    const firstFailure = new Error('first dependency failed')
    const secondFailure = new Error('second dependency failed')
    const reportError = vi.spyOn(ErrorCenter, 'on').mockImplementation(() => {})
    const onError = vi.fn<(error: unknown) => void>()

    /**
     * Dependency with the first lifecycle failure.
     *
     * Зависимость с первой ошибкой жизненного цикла.
     */
    class FirstDependency extends LifecycleDependency {
      /**
       * Configures the selected callback to fail.
       *
       * Настраивает выбранный обработчик на выбрасывание ошибки.
       */
      constructor() {
        super()
        this[name].mockImplementation(() => {
          throw firstFailure
        })
      }
    }

    /**
     * Dependency whose failure must also be included in the aggregate.
     *
     * Зависимость, ошибка которой также должна попасть в общую ошибку.
     */
    class SecondDependency extends LifecycleDependency {
      /**
       * Configures the selected callback to fail after the first dependency.
       *
       * Настраивает выбранный обработчик на ошибку после первой зависимости.
       */
      constructor() {
        super()
        this[name].mockImplementation(() => {
          throw secondFailure
        })
      }
    }

    const { unmount } = mountLogic(() => {
      const logic = new TestLogic({ LifecycleConstructor: FirstDependency, EmptyLifecycleConstructor: SecondDependency })
      logic.getInstance('LifecycleConstructor')
      logic.getInstance('EmptyLifecycleConstructor')
      return logic
    }, onError)
    if (name === 'onUnmounted') {
      unmount()
    }

    const aggregate = onError.mock.calls[0]?.[0]
    assert(aggregate instanceof AggregateError)
    expect(aggregate.errors).toEqual([firstFailure, secondFailure])
    expect(reportError).toHaveBeenCalledExactlyOnceWith({ group: 'design', code: name, details: aggregate })
    expect(onError).toHaveBeenCalledExactlyOnceWith(aggregate, expect.any(Object), name === 'onMounted' ? 'mounted hook' : 'unmounted hook')
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

    const custom = logic.getInstance('custom')
    expect(custom).toBeInstanceOf(CustomDependency)
    expect(custom.tag).toBe('custom-tag')

    scope.stop()
  })
})
