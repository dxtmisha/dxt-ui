import { inject, provide, onUnmounted } from 'vue'
import { getElementId, random } from '@dxtmisha/functional-basic'

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
export function executeUse<
  R,
  O extends any[],
  RI extends Readonly<Readonly<R> & { init(): Readonly<R> }>
>(
  callback: (...args: O) => R,
  unmounted: boolean = true,
  isGlobal: boolean = false,
  isProvide: boolean = true
): ((...args: O) => RI) | (() => RI) {
  let item: RI | undefined
  const id: string = `__execute_use${globalCode}::${getElementId()}`

  const initCallback = (args: O): RI => {
    const item = Object.freeze(callback(...args))

    return Object.freeze({
      ...item,
      init(): Readonly<R> {
        return item
      }
    }) as RI
  }

  const method = (...args: O) => {
    if (
      !isGlobal
      && isProvide
    ) {
      const itemInject = inject<RI | undefined>(id, undefined)

      if (itemInject) {
        return itemInject
      } else {
        let itemProvide: RI | undefined = initCallback(args)

        provide(id, itemProvide)

        if (unmounted) {
          onUnmounted(() => {
            itemProvide = undefined
          })
        }

        return itemProvide
      }
    } else if (!item) {
      item = initCallback(args)

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
