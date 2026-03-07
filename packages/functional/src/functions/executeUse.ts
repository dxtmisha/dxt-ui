import { inject, provide } from 'vue'
import { getElementId, random } from '@dxtmisha/functional-basic'

export enum ExecuteUseType {
  global = 'global',
  provide = 'provide',
  local = 'local'
}

export type ExecuteUseReturn<R>
  = Readonly<
    R
    & {
      init(): Readonly<R>
    }
  >

/** The unique identifier of the component/ Уникальный идентификатор компонента */
const getId = () => `__execute_use${globalCode}::${getElementId()}`

/** The unique code/ Уникальный код */
const globalCode = random(100000, 999999)

/** The global callbacks/ Глобальные callback */
let globalMethods: (() => any)[] = []

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

  const initCallback = (args: O): RI => {
    const newItem = Object.freeze(callback(...args))

    return Object.freeze({
      ...newItem,
      init(): Readonly<R> {
        return newItem
      }
    }) as RI
  }

  const initProvide = (args: O): RI => {
    const newItem = initCallback(args)
    provide(id, newItem)
    return newItem
  }

  const method = (...args: O): RI => {
    if (type === 'provide') {
      const itemInject = inject<RI | undefined>(id, undefined)

      if (itemInject) {
        return itemInject
      } else {
        return initProvide(args)
      }
    } else if (!item) {
      item = initCallback(args)
    }

    return item as RI
  }

  if (type === 'global') {
    globalMethods.push(method)
  }

  return method
}

/**
 * Initializes all global callbacks.
 *
 * Инициализирует все глобальные callback.
 */
export function executeUseGlobalInit() {
  globalMethods.forEach(method => method())
  globalMethods = []
}
