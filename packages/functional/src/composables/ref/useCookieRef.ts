import {
  type Ref,
  watch
} from 'vue'
import { Cookie, type CookieOptions } from '@dxtmisha/functional-basic'

import { useBroadcastValueRef } from './useBroadcastValueRef'

/**
 * Creates a reactive variable to manage cookies.
 *
 * Создает реактивную переменную для управления cookie.
 * @param name cookie name/ название cookie
 * @param defaultValue value or function to change data/ значение или функция для изменения данных
 * @param options additional parameters/ дополнительные параметры
 */
export function useCookieRef<T>(
  name: string,
  defaultValue?: T | string | (() => (T | string)),
  options?: CookieOptions
): Ref<T | string | undefined> {
  if (name in items) {
    return items[name] as Ref<T | string | undefined>
  }

  const cookie = new Cookie<T>(name)
  const item = useBroadcastValueRef(
    `__cookie:${name}`,
    cookie.get(defaultValue, options)
  )

  watch(item, (value) => {
    cookie.set(value as T, options)
  })

  items[name] = item
  return item as Ref<T>
}

const items: Record<string, Ref<any>> = {}
