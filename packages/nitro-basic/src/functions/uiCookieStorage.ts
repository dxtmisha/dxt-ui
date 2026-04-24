import { getCookie, type H3Event, setCookie } from 'h3'
import { type CookieOptions, CookieStorage, isObjectNotArray } from '@dxtmisha/functional-basic'

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

  CookieStorage.init(getListener, setListener)
}
