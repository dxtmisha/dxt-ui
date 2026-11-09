import { CookieStorage, isFunction } from '@dxtmisha/functional-basic'
import { getInject } from '@dxtmisha/functional'

import { getContextValue } from './getContextValue'
import { useHeaders } from '../composables/useHeaders'

import { NITRO_APP_COOKIE } from '../types/nitroAppTypes'

/** Header name for setting cookies / Имя заголовка для установки cookie */
const SET_COOKIE_HEADER = 'Set-Cookie'

/**
 * Checks whether the cookie entry matches the given key prefix.
 *
 * Проверяет, соответствует ли элемент cookie заданному префиксу ключа.
 * @param item cookie string / строка cookie
 * @param prefix encoded key prefix with "=" / закодированный префикс ключа со знаком "="
 * @returns true if cookie matches / true, если cookie совпадает
 */
function isMatchingCookie(item: string, prefix: string): boolean {
  return item.trimStart().startsWith(prefix)
}

/**
 * Writes or updates a cookie in response headers.
 *
 * Записывает или обновляет cookie в заголовках ответа.
 * @param headers Headers instance / Экземпляр Headers
 * @param key Cookie key / Ключ cookie
 * @param cookie Full cookie string (key=value; options) / Полная строка cookie (key=value; опции)
 */
export function setResponseCookie(
  headers: Headers,
  key: string,
  cookie: string
): void {
  if (isFunction(headers.getSetCookie)) {
    const prefix = `${encodeURIComponent(key)}=`
    const existing = headers.getSetCookie()
    const matchIndex = existing.findIndex(item => isMatchingCookie(item, prefix))

    if (matchIndex !== -1) {
      headers.delete(SET_COOKIE_HEADER)

      for (let index = 0; index < existing.length; index++) {
        if (index === matchIndex) {
          headers.append(SET_COOKIE_HEADER, cookie)
        } else if (!isMatchingCookie(existing[index], prefix)) {
          headers.append(SET_COOKIE_HEADER, existing[index])
        }
      }

      return
    }
  }

  if (isFunction(headers.append)) {
    headers.append(SET_COOKIE_HEADER, cookie)
  } else {
    headers.set(SET_COOKIE_HEADER, cookie)
  }
}

/**
 * Initialize cookie storage.
 *
 * Инициализация хранилища cookie.
 */
export function uiCookieStorage(): void {
  /**
   * Get cookie from event storage.
   *
   * Получить cookie из хранилища события.
   * @returns Cookie value or empty string if undefined / Значение cookie или пустая строка, если undefined
   */
  const getListenerRaw = (): string => {
    return getInject<string>(NITRO_APP_COOKIE)
      ?? getContextValue<string>('cookie')
      ?? ''
  }

  /**
   * Set cookie in response headers.
   *
   * Установить cookie в заголовки ответа.
   * @param key Cookie key / Ключ cookie
   * @param _value Cookie value / Значение cookie
   * @param cookie Full cookie string (key=value; options) / Полная строка cookie (key=value; опции)
   */
  const setListener = (
    key: string,
    _value: string,
    cookie: string
  ): void => {
    const headers = useHeaders()

    if (headers) {
      setResponseCookie(headers, key, cookie)
    }
  }

  CookieStorage.init(undefined, getListenerRaw, setListener)
}
