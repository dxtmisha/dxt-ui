import { inject, provide, onUnmounted } from 'vue'
import { getElementId } from './getElementId'
import { random } from './random'

const global: (() => any)[] = []
const globalCode = random(100000, 999999)

/**
 * Returns a function for use during the initialization of control methods.
 *
 * Возвращает функцию для использования при инициализации методов управления.
 * @param callback function or any value/ функция или любое значение
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 * @param isGlobal is the object global?/ является ли объект глобальным?
 * @param isProvide execution as a component inheritance/ выполнение как наследие компонента
 */
export function executeUse<R, O extends any[]>(
  callback: (...args: O) => R,
  unmounted: boolean = true,
  isGlobal: boolean = false,
  isProvide: boolean = true
): ((...args: O) => R) | (() => R) {
  let item: R | undefined
  const id: string = `__execute_use${globalCode}::${getElementId()}`

  const method = (...args: O) => {
    if (
      !isGlobal
      && isProvide
    ) {
      const itemInject = inject<R | undefined>(id, undefined)

      if (itemInject) {
        return itemInject
      } else {
        let itemProvide: R | undefined = Object.freeze(callback(...args))

        provide(id, itemProvide)

        if (unmounted) {
          onUnmounted(() => {
            itemProvide = undefined
          })
        }

        return itemProvide
      }
    } else if (!item) {
      item = Object.freeze(callback(...args))

      if (unmounted) {
        onUnmounted(() => {
          item = undefined
        })
      }
    }

    return item
  }

  if (isGlobal) {
    global.push(method)
  }

  return method
}

export function executeUseGlobalInit() {
  global.forEach(method => method())
}
