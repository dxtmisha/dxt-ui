/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createApp, defineComponent, getCurrentScope, h, type App, type EffectScope } from 'vue'
import {
  ExecuteUseType,
  type ExecuteUseReturn
} from '../executeUse'

/** Fresh factory module used by the current test / Новый модуль фабрик для текущего теста */
let factories: typeof import('../executeUse')
/** Storage belonging to the current factory module / Хранилище текущего модуля фабрик */
let storage: typeof import('@dxtmisha/functional-basic').ServerStorage

/**
 * Stateful service whose prototype requires the original private-field receiver.
 *
 * Сервис с состоянием, методам прототипа которого нужен исходный экземпляр с приватным полем.
 */
class Service {
  /** Internal mutable state / Внутреннее изменяемое состояние */
  #value = 0

  /**
   * Reads the current state through an accessor.
   *
   * Читает текущее состояние через аксессор.
   * @returns current state / текущее состояние
   */
  get value(): number {
    return this.#value
  }

  /**
   * Reads the current state through a prototype method.
   *
   * Читает текущее состояние через метод прототипа.
   * @returns current state / текущее состояние
   */
  read(): number {
    return this.#value
  }

  /**
   * Changes the state and returns the original service for chaining.
   *
   * Изменяет состояние и возвращает исходный сервис для цепочки вызовов.
   * @param value next state / следующее состояние
   * @returns original service / исходный сервис
   */
  setValue(value: number): this {
    this.#value = value
    return this
  }
}

/** Plain container declared through an interface / Обычный контейнер, объявленный через интерфейс */
export interface ServiceContainer {
  /** Original service instance / Исходный экземпляр сервиса */
  readonly service: Service
}

/** Mounted applications / Смонтированные приложения */
const applications: App[] = []
/** Effect scopes created by the factories / Области эффектов, созданные фабриками */
const scopes = /* #__PURE__ */ new Set<EffectScope>()

/**
 * Runs an assertion inside a real component setup without suppressing Vue warnings.
 *
 * Выполняет проверку внутри setup настоящего компонента без подавления предупреждений Vue.
 * @param assertion component assertion / проверка в компоненте
 */
function withinComponent(assertion: () => void): void {
  const application = createApp(defineComponent({
    setup(): () => null {
      assertion()
      return () => null
    }
  }))

  applications.push(application)
  application.mount(document.createElement('div'))
}

/**
 * Captures the current effect scope for deterministic cleanup.
 *
 * Сохраняет текущую область эффектов для детерминированной очистки.
 */
function captureScope(): void {
  const scope = getCurrentScope()

  if (scope) {
    scopes.add(scope)
  }
}

beforeEach(async () => {
  vi.resetModules()
  storage = (await import('@dxtmisha/functional-basic')).ServerStorage
  factories = await import('../executeUse')
  storage.init(() => undefined)
  storage.reset()
  vi.spyOn(console, 'warn')
})

afterEach(() => {
  try {
    applications.forEach(application => application.unmount())
    scopes.forEach(scope => scope.stop())
    expect(console.warn).not.toHaveBeenCalled()
  } finally {
    applications.length = 0
    scopes.clear()
    storage.reset()
    vi.restoreAllMocks()
  }
})

describe.each(Object.values(ExecuteUseType))('executeUse: %s container contract', (type) => {
  it('preserves nested class identity, private fields, accessors and prototype methods', () => {
    const service = new Service()
    const container = { service }
    const initialize = vi.fn(() => {
      captureScope()
      return container
    })
    const useService = factories.executeUse(initialize, type)

    withinComponent(() => {
      const managed = useService()

      expect(useService()).toBe(managed)
      expect(managed.service).toBe(service)
      expect(managed.service).toBeInstanceOf(Service)
      expect(managed.init()).toBe(container)
      expect(managed.init().service).toBe(service)
      expect(Object.isFrozen(managed)).toBe(true)
      expect(Object.isFrozen(container)).toBe(true)
      expect(Object.isFrozen(service)).toBe(false)
      expect(managed.service.setValue(3)).toBe(service)
      expect(managed.service.read()).toBe(3)
      expect(managed.service.value).toBe(3)
      expect(managed.init().service.read()).toBe(3)
      expect(initialize).toHaveBeenCalledTimes(1)
    })
  })

  it('rejects direct class results instead of silently dropping prototype methods', () => {
    const useService = factories.executeUse(() => new Service(), type)

    withinComponent(() => {
      expect(() => useService()).toThrow('wrap class instances as { service: instance }')
    })
  })

  it('accepts a plain container whose return type is declared through an interface', () => {
    const service = new Service()
    const initialize = (): ServiceContainer => {
      captureScope()
      return { service }
    }
    const useService = factories.executeUse(initialize, type)

    withinComponent(() => {
      const managed: ExecuteUseReturn<ServiceContainer> = useService()

      expect(managed.service).toBe(service)
      expect(managed.init().service.setValue(5).read()).toBe(5)
      expect(useService()).toBe(managed)
    })
  })

  it('accepts side-effect-only factories returning void', () => {
    const initialize = vi.fn(() => {
      captureScope()
    })
    const useService = factories.executeUse(initialize, type)

    withinComponent(() => {
      const managed = useService()

      expect(managed.init()).toBeUndefined()
      expect(useService()).toBe(managed)
      expect(initialize).toHaveBeenCalledTimes(1)
    })
  })

  it('accepts an already frozen container without changing the nested service', () => {
    const service = new Service()
    const container = Object.freeze({ service })
    const useService = factories.executeUse(() => {
      captureScope()
      return container
    }, type)

    withinComponent(() => {
      const managed = useService()

      expect(managed.init()).toBe(container)
      expect(managed.service.setValue(7).read()).toBe(7)
      expect(managed.service).toBe(service)
    })
  })

  it('accepts a plain container with no prototype', () => {
    const container: Record<string, unknown> = { service: new Service() }
    Object.setPrototypeOf(container, null)
    const useService = factories.executeUse(() => {
      captureScope()
      return container
    }, type)

    withinComponent(() => {
      expect(useService().service).toBe(container.service)
      expect(useService().init()).toBe(container)
    })
  })
})

describe('executeUse: container lifecycle', () => {
  it.each([ExecuteUseType.local, ExecuteUseType.global])('recreates the nested service after a %s reset', (type) => {
    const useService = factories.executeUse(() => {
      captureScope()
      return { service: new Service() }
    }, type)
    const first = useService()
    first.service.setValue(4)
    first.destroyExecute?.()
    const second = useService()

    expect(second).not.toBe(first)
    expect(second.service).not.toBe(first.service)
    expect(second.service.read()).toBe(0)
    expect(first.service.read()).toBe(4)
  })

  it('shares the original nested service between its provider and a child', () => {
    const useService = factories.executeUseProvide(() => ({ service: new Service() }))
    const received: ExecuteUseReturn<{ service: Service }>[] = []
    const child = defineComponent({
      setup(): () => null {
        received.push(useService())
        return () => null
      }
    })
    const application = createApp(defineComponent({
      setup(): () => ReturnType<typeof h> {
        const managed = useService()
        received.push(managed)
        managed.service.setValue(9)
        return () => h(child)
      }
    }))

    applications.push(application)
    application.mount(document.createElement('div'))

    expect(received).toHaveLength(2)
    expect(received[1]).toBe(received[0])
    expect(received[1]?.service.read()).toBe(9)
  })

  it('rejects direct class results when the convenience factories initialize', () => {
    const useGlobal = factories.executeUseGlobal(() => new Service())
    const useLocal = factories.executeUseLocal(() => new Service())
    const useProvide = factories.executeUseProvide(() => new Service())

    withinComponent(() => {
      expect(() => useGlobal()).toThrow(TypeError)
      expect(() => useLocal()).toThrow(TypeError)
      expect(() => useProvide()).toThrow(TypeError)
    })
  })

  it('preserves interface types through the convenience factories and a generic wrapper', () => {
    const initialize = (): ServiceContainer => {
      captureScope()
      return { service: new Service() }
    }

    /**
     * Wraps a factory without requiring an index signature on its result.
     *
     * Оборачивает фабрику, не требуя индексной сигнатуры у её результата.
     * @param create factory returning an object / фабрика, возвращающая объект
     * @returns accessor with the original result type / функция доступа с исходным типом результата
     */
    function createSingleton<State extends object>(create: () => State): () => ExecuteUseReturn<State> {
      return factories.executeUseLocal(create)
    }

    const accessors: (() => ExecuteUseReturn<ServiceContainer>)[] = [
      factories.executeUseGlobal(initialize),
      factories.executeUseLocal(initialize),
      factories.executeUseProvide(initialize),
      createSingleton(initialize)
    ]

    withinComponent(() => {
      accessors.forEach((accessor) => {
        const managed = accessor()

        expect(managed.service).toBeInstanceOf(Service)
        expect(managed.service.setValue(6).read()).toBe(6)
        expect(accessor()).toBe(managed)
      })
    })
  })
})
