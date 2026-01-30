import type { RouteLocationRaw, Router } from 'vue-router'
import type { ConstrHrefProps } from '../../types/constructorTypes.ts'
import { isObjectNotArray, isString } from '@dxtmisha/functional-basic'

/**
 * Router management class.
 *
 * Класс управления роутером.
 */
export class RouterItemRef {
  protected static router?: Router

  /**
   * Get router instance.
   *
   * Получить экземпляр роутера.
   */
  static get() {
    return this.router
  }

  /**
   * Returns the link by name.
   *
   * Возвращает ссылку по имени.
   * @param name route name/ имя маршрута
   * @param params route parameters/ параметры маршрута
   * @param query route query/ запрос маршрута
   */
  static getLink(
    name: string,
    params?: any,
    query?: any
  ): string | undefined {
    return this.router?.resolve({ name, params, query }).href
  }

  /**
   * Returns the link property by name.
   *
   * Возвращает свойство ссылки по имени.
   * @param name route name/ имя маршрута
   * @param params route parameters/ параметры маршрута
   * @param query route query/ запрос маршрута
   */
  static getHref(
    name?: string,
    params?: any,
    query?: any
  ): ConstrHrefProps {
    if (name) {
      const href = this.getLink(name, params, query)

      if (href) {
        return { href }
      }
    }

    return {}
  }

  /**
   * Site path change.
   *
   * Изменение пути сайта.
   * @param to new path/ новый путь
   */
  static push(to: string | RouteLocationRaw) {
    if (this.router) {
      this.router.push(to).then()
    }
  }

  /**
   * Set router instance.
   *
   * Установить экземпляр роутера.
   * @param router router instance/ экземпляр роутера
   */
  static set(router: Router) {
    this.router = router
  }

  /**
   * Set router instance only once.
   *
   * Установить экземпляр роутера только один раз.
   * @param router router instance/ экземпляр роутера
   */
  static setOneTime(router: Router) {
    if (!this.router) {
      this.set(router)
    }
  }

  /**
   * Converts the raw route location to href properties.
   *
   * Преобразует необработанное местоположение маршрута в свойства href.
   * @param to raw route location/ необработанное местоположение маршрута
   */
  static rawToHref(
    to?: string | RouteLocationRaw
  ): ConstrHrefProps {
    if (
      isObjectNotArray(to)
      && 'name' in to
      && isString(to?.name)
    ) {
      return this.getHref(to.name)
    }

    return {}
  }
}
