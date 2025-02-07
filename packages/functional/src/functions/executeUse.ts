import { onUnmounted } from 'vue'

const global: (() => any)[] = []

/**
 * Returns a function for use during the initialization of control methods.
 *
 * Возвращает функцию для использования при инициализации методов управления.
 * @param callback function or any value/ функция или любое значение
 * @param unmounted delete data from the cache/ удалить ли данные из кеша
 * @param isGlobal is the object global?/ является ли объект глобальным?
 */
export function executeUse<R>(
  callback: () => R,
  unmounted: boolean = true,
  isGlobal: boolean = false
): () => R {
  let item: R | undefined
  const method = () => {
    if (!item) {
      item = callback()

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
