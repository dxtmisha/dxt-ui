import { CookieStorage } from '@dxtmisha/functional-basic'
import { getInject } from '@dxtmisha/functional'

import { useHeaders } from '../composables/useHeaders'
import { NITRO_APP_COOKIE } from '../types/nitroAppTypes'

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
    return getInject<string>(NITRO_APP_COOKIE) ?? ''
  }

  /**
   * Set cookie in response headers.
   *
   * Установить cookie в заголовки ответа.
   * @param _key Cookie key / Ключ cookie
   * @param _value Cookie value / Значение cookie
   * @param cookie Full cookie string (key=value; options) / Полная строка cookie (key=value; опции)
   */
  const setListener = (
    _key: string,
    _value: string,
    cookie: string
  ): void => {
    const headers = useHeaders()

    if (headers) {
      headers.set('Set-Cookie', cookie)
    }
  }

  CookieStorage.init(undefined, getListenerRaw, setListener)
}
