import { inject, provide } from 'vue'
import { getElementId, random } from '@dxtmisha/functional-basic'

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

/** The unique identifier of the component/ Уникальный идентификатор компонента */
const getId = () => `__execute_use${globalCode}::${getElementId()}`

/** The unique code/ Уникальный код */
const globalCode = random(100000, 999999)

/** The global callbacks/ Глобальные callback */
const globalMethods: (() => any)[] = []

/**
 * Creates a managed singleton that encapsulates initialization logic and access mode.
 *
 * Создает управляемый синглтон, который инкапсулирует логику инициализации и режим доступа.
 * @param callback Initialization function/ Функция инициализации
 * @param type Initialization type/ Тип инициализации
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
      item = initItem(args)
    }

    return item as RI
  }

  if (type === ExecuteUseType.global) {
    globalMethods.push(method)
  }

  return method
}

/**
 * Creates a global singleton.
 *
 * Создает глобальный синглтон.
 * @param callback Initialization function/ Функция инициализации
 */
export function executeUseGlobal<R>(callback: () => R) {
  return executeUse(callback, ExecuteUseType.global)
}

/**
 * Creates a component-scoped singleton.
 *
 * Создает компонентный синглтон.
 * @param callback Initialization function/ Функция инициализации
 */
export function executeUseProvide<R, O extends any[]>(callback: (...args: O) => R) {
  return executeUse(callback, ExecuteUseType.provide)
}

/**
 * Creates a local singleton.
 *
 * Создает локальный синглтон.
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
  globalMethods.forEach(method => method())
  globalMethods.length = 0
}
