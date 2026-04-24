import { type H3Event, setCookie } from 'h3'
import { type CookieOptions, CookieStorage, isObjectNotArray } from '@dxtmisha/functional-basic'

import { getInject } from './getInject'
import { NITRO_API_HEADERS, NITRO_APP_COOKIE } from '../types/nitroAppTypes'

/**
 * Initialize cookie storage.
 *
 * Инициализация хранилища cookie.
 * @param event H3 event / Событие H3
 * @param ageDefault Default cookie age in seconds / Срок жизни cookie по умолчанию в секундах
 * @param sameSiteDefault Default SameSite attribute / Атрибут SameSite по умолчанию
 */
export function uiCookieStorage(
  event: H3Event,
  ageDefault: number = 7 * 24 * 60 * 60,
  sameSiteDefault: 'strict' | 'lax' = 'strict'
): void {
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
   * @param key Cookie key / Ключ cookie
   * @param value Cookie value / Значение cookie
   * @param options Cookie options / Параметры cookie
   */
  const setListener = (
    key: string,
    value: string,
    options?: CookieOptions
  ): void => {
    const headers = getInject<Headers>(NITRO_API_HEADERS)

    if (headers) {
      const cookieValue: string = `${key}=${encodeURIComponent(value)}`
      const cookieHeaderOptions: Record<string, string> = {
        maxAge: (options?.age ?? ageDefault).toString(),
        sameSite: (options?.sameSite ?? sameSiteDefault).toString(),
        Path: (cookieArguments?.path ?? '/').toString()
      }

      headers.set(
        'Set-Cookie',
        `${key}=${value}; ${Object.entries(cookieHeaderOptions).map(([k, v]) => `${k}=${v}`).join('; ')}`)
    }

    const cookieOptions: Record<string, string | number | boolean | undefined> = {
      maxAge: options?.age ?? ageDefault,
      sameSite: options?.sameSite ?? sameSiteDefault
    }

    if (
      options?.arguments
      && isObjectNotArray(options?.arguments)
    ) {
      Object.assign(cookieOptions, options?.arguments)
    }

    setCookie(
      event,
      key,
      value,
      cookieOptions
    )
  }

  CookieStorage.init(undefined, getListenerRaw, setListener)
}
