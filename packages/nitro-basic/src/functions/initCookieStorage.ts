import { getCookie, type H3Event, setCookie } from 'h3'
import { type CookieOptions, CookieStorage } from '@dxtmisha/functional-basic'

import type { NitroAppBasicConfig } from '../types/nitroAppTypes'
import { useEvent } from 'nitropack/runtime'

/**
 * Initialize cookie storage.
 *
 * Инициализация хранилища cookie.
 * @param config Cookie configuration / Конфигурация cookie
 */
export function initCookieStorage(
  event: H3Event,
  config?: NitroAppBasicConfig['cookie']
): void {
  const cookieConfig = config ?? {}

  /**
   * Get cookie from request headers.
   *
   * Получить cookie из заголовков запроса.
   * @param key Cookie key / Ключ cookie
   * @returns Cookie value or undefined / Значение cookie или undefined
   */
  const getListener = (key: string): string | undefined => {
    return getCookie(event, key)
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
    setCookie(
      event,
      key,
      value,
      {
        maxAge: options?.age ?? (7 * 24 * 60 * 60),
        sameSite: options?.sameSite ?? 'strict',
      }
      options?.age ?? cookieConfig?.age ?? (7 * 24 * 60 * 60),
      options?.sameSite ?? cookieConfig?.sameSite ?? 'strict',
      ...(options?.arguments ?? [])
    )
  }

  CookieStorage.init(getListener, setListener)
}
