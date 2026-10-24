import { effectScope, type EffectScope, getCurrentInstance, inject, provide } from 'vue'
import { isObjectNotArray, ServerStorage } from '@dxtmisha/functional-basic'

import { EffectScopeGlobal } from '../classes/ref/EffectScopeGlobal'

/** Singleton initialization strategies / Стратегии инициализации синглтона */
export enum ExecuteUseType {
  /** One instance per runtime, shared by all SSR requests / Один экземпляр на среду выполнения, общий для всех SSR-запросов */
  global = 'global',
  /** Shared via provide/inject in the component tree / Разделяется через provide/inject в дереве компонентов */
  provide = 'provide',
  /** A lazily created instance per storage context / Лениво создаваемый экземпляр на контекст хранилища */
  local = 'local'
}

/** Readonly container with singleton management methods / Контейнер только для чтения с методами управления синглтоном */
export type ExecuteUseReturn<R extends object | void>
  = Readonly<
    R
    & {
      /**
       * Returns the original shallowly frozen factory result without the management shell.
       *
       * Возвращает исходный поверхностно замороженный результат фабрики без управляющей оболочки.
       * @returns original factory result / исходный результат фабрики
       */
      init(): Readonly<R>
      /**
       * Removes the cached local instance or resets the process-wide global instance.
       * Global reset also stops the instance's effect scope; local reset leaves its effects active.
       * This method is absent for provided instances.
       *
       * Удаляет локальный экземпляр из кеша либо сбрасывает общий глобальный экземпляр процесса.
       * Глобальный сброс также останавливает область эффектов экземпляра; локальный оставляет эффекты активными.
       * У предоставляемых через provide экземпляров этот метод отсутствует.
       */
      destroyExecute?(): void
    }
  >

/** Sequence used to distinguish factories within the loaded module / Счётчик для различения фабрик в загруженном модуле */
let globalId: number = 1

/**
 * Allocates a unique factory key for storage and provide/inject.
 *
 * Выделяет уникальный ключ фабрики для хранилища и provide/inject.
 * @returns next factory key / следующий ключ фабрики
 */
const getId = () => `__execute_use::${globalId++}`

/** Global factory registry shared by every SSR request / Общий для всех SSR-запросов реестр глобальных фабрик */
const globalMethods: (() => unknown)[] = []

/**
 * Creates a managed singleton that encapsulates initialization logic and access mode.
 *
 * It supports three initialization strategies:
 * - `global`: A single instance per runtime, shared by all SSR requests in the server process.
 * - `provide`: Shared via provide/inject in the component tree (standard for Vue 3).
 * - `local`: A lazily created instance per ServerStorage context.
 *
 * Создает управляемый синглтон, который инкапсулирует логику инициализации и режим доступа.
 *
 * Поддерживает три стратегии инициализации:
 * - `global`: Единственный экземпляр на среду выполнения, общий для всех SSR-запросов серверного процесса.
 * - `provide`: Разделяется через provide/inject в дереве компонентов (стандарт для Vue 3).
 * - `local`: Лениво создаваемый экземпляр на контекст ServerStorage.
 *
 * @template R plain object container or void returned by the factory / обычный объект-контейнер или void, возвращаемый фабрикой
 * @template O argument types for the factory function / типы аргументов фабричной функции
 * @template RI instance type with management methods / тип экземпляра с методами управления
 *
 * @param callback initialization function / функция инициализации
 * @param type initialization strategy (defaults to provide) / стратегия инициализации (по умолчанию provide)
 *
 * @returns accessor that creates or reuses the readonly managed container / функция доступа, создающая или повторно использующая контейнер только для чтения с методами управления
 * @throws TypeError when an accessed factory returns a result other than a plain object or void / TypeError, если при обращении фабрика возвращает результат, отличный от обычного объекта или void
 *
 * @remarks
 * Use this function in the following cases:
 * - **API Services:** Always wrap API clients to ensure a single connection point and unified state.
 * - **Resource Optimization:** For functions where creating multiple instances is undesirable (e.g., heavy objects, event buses).
 * - **Shared State:** To share reactive state within a component tree using the `provide` strategy.
 * - **External SDKs:** Initializing third-party libraries (analytics, maps, charts) that should be singletons.
 *
 * Используйте эту функцию в следующих случаях:
 * - **API-сервисы:** Всегда оборачивайте API-клиенты для обеспечения единой точки подключения и унифицированного состояния.
 * - **Оптимизация ресурсов:** Для функций, где нежелательно создание множества экземпляров (например, тяжелые объекты, шины событий).
 * - **Общее состояние:** Для совместного использования реактивного состояния в дереве компонентов с помощью стратегии `provide`.
 * - **Внешние SDK:** Инициализация сторонних библиотек (аналитика, карты, графики), которые должны быть синглтонами.
 *
 * Global factories must not capture request-scoped services or store user-specific data during SSR.
 * Use the local strategy with an initialized ServerStorage request context for request-specific state.
 *
 * Глобальные фабрики не должны захватывать сервисы запроса или хранить пользовательские данные при SSR.
 * Для состояния конкретного запроса используйте local с инициализированным контекстом ServerStorage.
 *
 * Return a plain object container or void. Put class instances inside the container:
 * `() => ({ service: new Service() })`. Only the container is shallowly frozen.
 * Direct class instances are rejected because the management shell copies own enumerable properties.
 *
 * Возвращайте обычный объект-контейнер или void. Размещайте экземпляры классов внутри контейнера:
 * `() => ({ service: new Service() })`. Поверхностно замораживается только контейнер.
 * Прямой возврат экземпляра класса запрещён, поскольку управляющая оболочка копирует собственные перечислимые свойства.
 *
 * @example
 * import { ref } from 'vue'
 *
 * const useCounter = executeUseLocal((initialCount: number) => {
 *   const count = ref(initialCount)
 *   const increment = (): void => { count.value++ }
 *   return { count, increment }
 * })
 * const counter = useCounter(0)
 * counter.increment()
 *
 * @example
 * class Resource {
 *   constructor(readonly name: string) {}
 *   read(): string { return this.name }
 * }
 * const useResource = executeUseLocal((name: string) => ({ resource: new Resource(name) }))
 * useResource('shared').resource.read()
 */
export function executeUse<
  R extends object | void,
  O extends unknown[],
  RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>
>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): ((...args: O) => RI) | (() => RI) {
  /** Factory key used by the selected storage strategy / Ключ фабрики для выбранной стратегии хранения */
  const id: string = getId()
  /** Process-wide singleton owned by this factory / Общий для процесса синглтон этой фабрики */
  let globalItem: RI | undefined
  /** Detached effects owned by the global singleton / Отсоединённая область эффектов глобального синглтона */
  let globalScope: EffectScope | undefined

  /**
   * Performs the base initialization of the object and wraps it in a management shell.
   *
   * Выполняет базовую инициализацию объекта и оборачивает его в управляющую оболочку.
   * @param args arguments used for the first initialization / аргументы первого вызова инициализатора
   * @returns management shell exposing the frozen result's enumerable properties / управляющая оболочка с перечислимыми свойствами замороженного результата
   * @throws TypeError when the factory result is neither a plain object nor void / TypeError, если результат фабрики не является обычным объектом или void
   */
  const initCallback = (args: O): RI => {
    const newItem = callback(...args)

    if (newItem !== undefined) {
      const prototype: unknown = isObjectNotArray(newItem) ? Object.getPrototypeOf(newItem) : undefined

      if (prototype !== Object.prototype && prototype !== null) {
        throw new TypeError('executeUse: return a plain object container or void; wrap class instances as { service: instance }.')
      }
    }

    Object.freeze(newItem)

    return {
      ...newItem,
      /**
       * Retrieves the original frozen factory result.
       *
       * Получает исходный замороженный результат фабрики.
       * @returns original factory result without added management methods / исходный результат фабрики без добавленных методов управления
       */
      init(): Readonly<R> {
        return newItem
      }
    } as RI
  }

  /**
   * Initializes the object and provides it to the component tree.
   *
   * Инициализирует объект и предоставляет его в дерево компонентов.
   * @param args arguments used to initialize the component-owned instance / аргументы инициализации экземпляра компонента-владельца
   * @returns frozen container provided to the component subtree / замороженный контейнер, предоставленный поддереву компонента
   */
  const initProvide = (args: O): RI => {
    const newItem = Object.freeze(initCallback(args))
    provide(id, newItem)
    return newItem
  }

  /**
   * Initializes the object with the ability to reset.
   *
   * Инициализирует объект с возможностью сброса.
   * @param args arguments used for initialization / аргументы инициализации
   * @returns frozen container with raw-result access and cache reset methods / замороженный контейнер с методами доступа к исходному результату и сброса кеша
   */
  const initItem = (args: O): RI => {
    const newItem = initCallback(args)

    const item = Object.freeze({
      ...newItem,
      /**
       * Removes the local cache entry or clears this global instance and stops its effects.
       * A stale global instance cannot reset its replacement.
       *
       * Удаляет локальную запись кеша либо сбрасывает этот глобальный экземпляр и останавливает его эффекты.
       * Устаревший глобальный экземпляр не может сбросить созданную ему замену.
       */
      destroyExecute(): void {
        if (type === ExecuteUseType.global) {
          if (globalItem === item) {
            const scope = globalScope
            globalItem = undefined
            globalScope = undefined
            scope?.stop()
          }
        } else {
          ServerStorage.remove(id)
        }
      }
    })

    return item
  }

  /**
   * Initializes the global singleton within a detached effect scope.
   *
   * Инициализирует глобальный синглтон внутри отсоединённой области эффектов.
   * @param args arguments used when the global instance is absent / аргументы, используемые при отсутствии глобального экземпляра
   * @returns process-wide managed singleton / управляемый синглтон всего процесса
   */
  const initGlobal = (args: O): RI => {
    if (!globalItem) {
      const scope = effectScope(true)

      try {
        globalItem = scope.run<RI>(() => initItem(args)) as RI
        globalScope = scope
      } finally {
        if (!globalItem) {
          scope.stop()
        }
      }
    }

    return globalItem
  }

  /**
   * Managed access method to the singleton instance.
   *
   * Управляемый метод доступа к экземпляру синглтона.
   * @param args initializer arguments, ignored when reusing an existing instance / аргументы инициализатора, игнорируемые при повторном использовании экземпляра
   * @returns existing or newly initialized container for the selected strategy / существующий или созданный контейнер выбранной стратегии
   */
  const method = (...args: O): RI => {
    if (type === ExecuteUseType.provide) {
      const itemInject = inject<RI | undefined>(id, undefined)

      if (itemInject) {
        return itemInject
      }

      const instance = getCurrentInstance()
      const itemProvide = (
        instance as unknown as { provides?: Record<string, RI | undefined> } | null
      )?.provides?.[id]

      if (itemProvide) {
        return itemProvide
      }

      return initProvide(args)
    }

    if (type === ExecuteUseType.global) {
      return initGlobal(args)
    }

    return ServerStorage.get<RI>(id, () => {
      return EffectScopeGlobal.run<RI>(() => initItem(args)) as RI
    })
  }

  if (type === ExecuteUseType.global) {
    globalMethods.push(method)
  }

  return method
}

/**
 * Creates a runtime-wide singleton shared by all SSR requests in the server process.
 *
 * Создаёт синглтон среды выполнения, общий для всех SSR-запросов серверного процесса.
 *
 * @remarks
 * See {@link executeUse} for container requirements and initialization behavior.
 * Do not store user-specific state or capture request-scoped dependencies during SSR.
 *
 * Требования к контейнеру и порядок инициализации описаны в {@link executeUse}.
 * Не храните пользовательское состояние и не захватывайте зависимости конкретного запроса при SSR.
 *
 * @template R factory result type / тип результата фабрики
 * @param callback argument-free factory returning a plain object container or void / фабрика без аргументов, возвращающая обычный объект-контейнер или void
 * @returns accessor for the shared singleton / функция доступа к общему синглтону
 */
export function executeUseGlobal<R extends object | void>(callback: () => R): () => ExecuteUseReturn<R> {
  return executeUse(callback, ExecuteUseType.global)
}

/**
 * Creates a component-scoped singleton.
 *
 * Создает компонентный синглтон.
 *
 * @remarks
 * Best for sharing state within a component sub-tree.
 * See {@link executeUse} for more details.
 *
 * Лучше всего подходит для совместного использования состояния внутри поддерева компонентов.
 * Подробнее см. {@link executeUse}.
 *
 * @template R factory result type / тип результата фабрики
 * @template O initializer argument types / типы аргументов инициализатора
 * @param callback factory executed by the first component that creates the provided instance / фабрика, выполняемая первым компонентом, создающим предоставляемый экземпляр
 * @returns accessor sharing the container with the owner component and its descendants / функция доступа к общему контейнеру компонента-владельца и его потомков
 */
export function executeUseProvide<R extends object | void, O extends unknown[]>(
  callback: (...args: O) => R
): (...args: O) => ExecuteUseReturn<R> {
  return executeUse(callback, ExecuteUseType.provide)
}

/**
 * Creates a lazy singleton in the current ServerStorage context.
 * Its effects run in EffectScopeGlobal and survive disposal of the caller's scope.
 *
 * Создаёт ленивый синглтон в текущем контексте ServerStorage.
 * Его эффекты работают в EffectScopeGlobal и переживают уничтожение области вызывающего кода.
 *
 * @remarks
 * Browser calls reuse the cached instance. SSR isolation requires an initialized request context.
 * See {@link executeUse} for container requirements.
 *
 * В браузере вызовы используют закешированный экземпляр. Для изоляции SSR нужен инициализированный контекст запроса.
 * Требования к контейнеру описаны в {@link executeUse}.
 *
 * @template R factory result type / тип результата фабрики
 * @template O initializer argument types / типы аргументов инициализатора
 * @param callback factory returning a plain object container or void / фабрика, возвращающая обычный объект-контейнер или void
 * @returns accessor creating or reusing the container in the current storage context / функция доступа, создающая или повторно использующая контейнер в текущем контексте хранилища
 */
export function executeUseLocal<R extends object | void, O extends unknown[]>(
  callback: (...args: O) => R
): (...args: O) => ExecuteUseReturn<R> {
  return executeUse(callback, ExecuteUseType.local)
}

/**
 * Initializes every registered global singleton without clearing the shared registry.
 * Repeated calls reuse existing instances and initialize factories registered later.
 *
 * Инициализирует все зарегистрированные глобальные синглтоны, сохраняя общий реестр.
 * Повторные вызовы используют готовые экземпляры и инициализируют фабрики, добавленные позднее.
 */
export function executeUseGlobalInit(): void {
  globalMethods.forEach(method => method())
}
