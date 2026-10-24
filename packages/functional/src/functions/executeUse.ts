import { effectScope, type EffectScope, getCurrentInstance, inject, provide } from 'vue'
import { ServerStorage } from '@dxtmisha/functional-basic'

import { EffectScopeGlobal } from '../classes/ref/EffectScopeGlobal'

/**
 * Types of initialization for a singleton/ Типы инициализации для синглтона
 */
export enum ExecuteUseType {
  /** One instance per runtime, shared by all SSR requests / Один экземпляр на среду выполнения, общий для всех SSR-запросов */
  global = 'global',
  /** Shared via provide/inject in the component tree/ Разделяется через provide/inject в дереве компонентов */
  provide = 'provide',
  /** A lazily created instance per storage context / Лениво создаваемый экземпляр на контекст хранилища */
  local = 'local'
}

/**
 * The object returned by the factory function/ Объект, возвращаемый фабричной функцией
 */
export type ExecuteUseReturn<R>
  = Readonly<
    R
    & {
      /**
       * Returns the raw instance without management methods/
       * Возвращает чистый экземпляр без методов управления
       */
      init(): Readonly<R>
      /**
       * Resets the cached instance (available for local and global)/
       * Сбрасывает закешированный экземпляр (доступно для local и global)
       */
      destroyExecute?(): void
    }
  >

let globalId: number = 1

/** The unique identifier of the component/ Уникальный идентификатор компонента */
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
 * @template R return type of the factory function / тип данных, возвращаемых фабрикой
 * @template O argument types for the factory function / типы аргументов фабричной функции
 * @template RI instance type with management methods / тип экземпляра с методами управления
 *
 * @param callback initialization function / функция инициализации
 * @param type initialization strategy (defaults to provide) / стратегия инициализации (по умолчанию provide)
 *
 * @returns {function} accessor function for the singleton / функция-аксессор для синглтона
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
 * @example
 * // 1. Request-scoped API singleton (SSR)/ Синглтон API в контексте запроса (SSR)
 * export const useUserApi = executeUseLocal(() => {
 *   return useApiGet('/api/user');
 * });
 *
 * @example
 * // 2. Shared Reactive State/ Общее реактивное состояние
 * export const useFeatureState = executeUseProvide(() => {
 *   // Reactive logic here/ Здесь может быть реактивная логика (reactive, ref)
 *   const items = [];
 *   const addItem = (item) => items.push(item);
 *   return { items, addItem };
 * });
 *
 * @example
 * // 3. Local Caching/ Локальное кеширование
 * export const useHeavyResource = executeUseLocal((config) => {
 *   return new HeavyResource(config);
 * });
 *
 * @example
 * // 4. Complex API Service (useApiManagementRef)/ Комплексный API-сервис (useApiManagementRef)
 * export const useUserManagement = executeUseLocal(() => {
 *   return useApiManagementRef(
 *     { path: '/api/users' },                 // GET setup
 *     { date: (v) => new Date(v).toLocaleString() }, // Formatters
 *     { columns: ['name', 'email'] },         // Search
 *     { path: '/api/users' },                 // POST (create)
 *     { path: (o) => `/api/users/${o.id}` },  // PUT (update)
 *     { path: (o) => `/api/users/${o.id}` }   // DELETE (remove)
 *   );
 * });
 *
 * // Usage in component/ Использование в компоненте:
 * // const { list, loading, sendPost, sendDelete } = useUserManagement();
 */
export function executeUse<
  R,
  O extends any[],
  RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>
>(
  callback: (...args: O) => R,
  type: ExecuteUseType = ExecuteUseType.provide
): ((...args: O) => RI) | (() => RI) {
  /** The unique identifier of the component/ Уникальный идентификатор компонента */
  const id: string = getId()
  /** Process-wide singleton owned by this factory / Общий для процесса синглтон этой фабрики */
  let globalItem: RI | undefined
  /** Detached effects owned by the global singleton / Отсоединённая область эффектов глобального синглтона */
  let globalScope: EffectScope | undefined

  /**
   * Performs the base initialization of the object and wraps it in a management shell.
   *
   * Выполняет базовую инициализацию объекта и оборачивает его в управляющую оболочку.
   * @param args Arguments for the initializer/ Аргументы для инициализатора
   */
  const initCallback = (args: O): RI => {
    const newItem = Object.freeze(callback(...args))

    return {
      ...newItem,
      init(): Readonly<R> {
        return newItem
      }
    } as RI
  }

  /**
   * Initializes the object and provides it to the component tree.
   *
   * Инициализирует объект и предоставляет его в дерево компонентов.
   * @param args Arguments for the initializer/ Аргументы для инициализатора
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
   * @param args Arguments for the initializer/ Аргументы для инициализатора
   */
  const initItem = (args: O): RI => {
    const newItem = initCallback(args)

    const item = Object.freeze({
      ...newItem,
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
   * @param args Arguments for the initializer / Аргументы для инициализатора
   * @returns Global singleton instance / Экземпляр глобального синглтона
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
   * @param args Arguments for the initializer/ Аргументы для инициализатора
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
 * See {@link executeUse} for more details.
 *
 * Подробнее см. {@link executeUse}.
 * Do not store user-specific state or capture request-scoped dependencies during SSR.
 * Не храните пользовательское состояние и не захватывайте зависимости конкретного запроса при SSR.
 *
 * @param callback Initialization function/ Функция инициализации
 * @returns accessor for the shared singleton / функция доступа к общему синглтону
 */
export function executeUseGlobal<R>(callback: () => R): () => ExecuteUseReturn<R> {
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
 * @param callback Initialization function/ Функция инициализации
 */
export function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R) {
  return executeUse(callback, ExecuteUseType.provide)
}

/**
 * Creates a local singleton.
 *
 * Создает локальный синглтон.
 *
 * @remarks
 * Best for internal state preservation within a closure.
 * See {@link executeUse} for more details.
 *
 * Лучше всего подходит для сохранения внутреннего состояния внутри замыкания.
 * Подробнее см. {@link executeUse}.
 *
 * @param callback Initialization function/ Функция инициализации
 */
export function executeUseLocal<R, O extends any[]>(callback: (...args: O) => R) {
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
