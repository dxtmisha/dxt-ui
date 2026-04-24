import { inject, provide } from 'vue'
import { isDomRuntime, random, ServerStorage } from '@dxtmisha/functional-basic'

import { EffectScopeGlobal } from '../classes/ref/EffectScopeGlobal'

/**
 * Types of initialization for a singleton/ Типы инициализации для синглтона
 */
export enum ExecuteUseType {
  /** A single instance for the entire application/ Единственный экземпляр на всё приложение */
  global = 'global',
  /** Shared via provide/inject in the component tree/ Разделяется через provide/inject в дереве компонентов */
  provide = 'provide',
  /** A single instance within the closure/ Единственный экземпляр в замыкании */
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

/** The unique code/ Уникальный код */
const globalCode = random(100000, 999999)

/** The unique identifier of the component/ Уникальный идентификатор компонента */
const getId = () => `__execute_use${globalCode}::${globalId++}`

/** The global callbacks/ Глобальные callback */
const getGlobalMethods = () => ServerStorage.get<(() => any)[]>('__ui:execute-use-global__', () => [])

/**
 * Creates a managed singleton that encapsulates initialization logic and access mode.
 *
 * It supports three initialization strategies:
 * - `global`: A single instance for the entire application.
 * - `provide`: Shared via provide/inject in the component tree (standard for Vue 3).
 * - `local`: A single instance within the closure of the returned function.
 *
 * Создает управляемый синглтон, который инкапсулирует логику инициализации и режим доступа.
 *
 * Поддерживает три стратегии инициализации:
 * - `global`: Единственный экземпляр на всё приложение.
 * - `provide`: Разделяется через provide/inject в дереве компонентов (стандарт для Vue 3).
 * - `local`: Единственный экземпляр в замыкании возвращаемой функции.
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
 * @example
 * // 1. Global API singleton (useApiGet)/ Глобальный синглтон API (useApiGet)
 * export const useUserApi = executeUseGlobal(() => {
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
 * export const useUserManagement = executeUseGlobal(() => {
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

  /** The current item/ Текущий элемент */
  let item: RI | undefined

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

    return Object.freeze({
      ...newItem,
      destroyExecute() {
        item = undefined
      }
    })
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
      } else {
        return initProvide(args)
      }
    } else if (!item) {
      if (type === ExecuteUseType.local) {
        EffectScopeGlobal.run(() => {
          item = initItem(args)
        })
      } else {
        item = initItem(args)
      }
    }

    return item as RI
  }

  if (
    isDomRuntime()
    && type === ExecuteUseType.global
  ) {
    getGlobalMethods().push(method)
  }

  return method
}

/**
 * Creates a global singleton.
 *
 * Создает глобальный синглтон.
 *
 * @remarks
 * See {@link executeUse} for more details.
 *
 * Подробнее см. {@link executeUse}.
 *
 * @param callback Initialization function/ Функция инициализации
 */
export function executeUseGlobal<R>(callback: () => R) {
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
 * Initializes all global callbacks.
 *
 * Инициализирует все глобальные callback.
 */
export function executeUseGlobalInit() {
  if (!isDomRuntime()) {
    return
  }

  const globalMethods = getGlobalMethods()

  globalMethods.forEach(method => method())
  globalMethods.length = 0
}
