import type { LocationQueryRaw, RouteLocationRaw, RouteParamsRawGeneric, Router } from 'vue-router'
import { isObjectNotArray, isString, ServerStorage } from '@dxtmisha/functional-basic'

import type { ConstrHrefProps } from '../../types/constructorTypes'

/** Server storage key / Ключ серверного хранилища */
const ROUTER_ITEM_REF_KEY = '__ui:router-item-ref__'

/**
 * Static facade for an installed Vue Router instance stored through `ServerStorage`. It resolves named routes to href properties and dispatches navigation.
 *
 * Статический фасад установленного Vue Router, сохранённого через `ServerStorage`. Разрешает именованные маршруты в свойства href и запускает навигацию.
 */
export class RouterItemRef {
  /**
   * Returns the registered router; it may be absent at runtime.
   *
   * Возвращает зарегистрированный роутер; фактически он может отсутствовать.
   * @returns Registered router, or undefined when none is installed. / Зарегистрированный роутер либо undefined при его отсутствии.
   */
  static get() {
    return ServerStorage.get<Router>(ROUTER_ITEM_REF_KEY)
  }

  /**
   * Resolves a named location to `router.resolve(...).href`, or returns `undefined` without a router.
   *
   * Разрешает именованное местоположение в `router.resolve(...).href`; без роутера возвращает `undefined`.
   * @param name Registered route name. / Имя зарегистрированного маршрута.
   * @param params Named-route parameters. / Параметры именованного маршрута.
   * @param query Route query parameters. / Параметры строки запроса маршрута.
   * @param hash Route fragment including its leading #. / Фрагмент маршрута с начальным #.
   * @returns Requested string, or undefined when unavailable. / Запрошенная строка либо undefined при отсутствии.
   */
  static getLink(
    name: string,
    params?: RouteParamsRawGeneric,
    query?: LocationQueryRaw,
    hash?: string
  ): string | undefined {
    return this.get()?.resolve({ name, params, query, hash }).href
  }

  /**
   * Returns `{ href }` for a nonempty resolved link, otherwise `{}`.
   *
   * Возвращает `{ href }` для непустой разрешённой ссылки, иначе `{}`.
   * @param name Registered route name. / Имя зарегистрированного маршрута.
   * @param params Named-route parameters. / Параметры именованного маршрута.
   * @param query Route query parameters. / Параметры строки запроса маршрута.
   * @param hash Route fragment including its leading #. / Фрагмент маршрута с начальным #.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  static getHref(
    name?: string,
    params?: RouteParamsRawGeneric,
    query?: LocationQueryRaw,
    hash?: string
  ): ConstrHrefProps {
    if (name) {
      const href = this.getLink(name, params, query, hash)

      if (href) {
        return { href }
      }
    }

    return {}
  }

  /**
   * Starts router navigation when a router is registered.
   *
   * Запускает навигацию при наличии зарегистрированного роутера.
   * @param to Raw route location. / Необработанное местоположение маршрута.
   * @returns No return value. / Нет возвращаемого значения.
   */
  static push(to: string | RouteLocationRaw) {
    const router = this.get()

    if (router) {
      router.push(to).then()
    }
  }

  /**
   * Stores or replaces the router in the current context.
   *
   * Сохраняет или заменяет роутер текущего контекста.
   * @param router Vue Router instance to register. / Регистрируемый экземпляр Vue Router.
   * @returns No return value. / Нет возвращаемого значения.
   */
  static set(router: Router) {
    ServerStorage.set<Router>(ROUTER_ITEM_REF_KEY, () => router)
  }

  /**
   * Registers the router only if no router has been stored.
   *
   * Регистрирует роутер только при отсутствии сохранённого.
   * @param router Vue Router instance to register. / Регистрируемый экземпляр Vue Router.
   * @returns No return value. / Нет возвращаемого значения.
   */
  static setOneTime(router: Router) {
    if (!this.get()) {
      this.set(router)
    }
  }

  /**
   * Converts a named raw location to href props, retaining params, query and hash.
   *
   * Преобразует именованное местоположение в href-свойства, сохраняя параметры, query и hash.
   * @param to Raw route location. / Необработанное местоположение маршрута.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  static rawToHref(
    to?: string | RouteLocationRaw
  ): ConstrHrefProps {
    if (
      isObjectNotArray(to)
      && 'name' in to
      && isString(to?.name)
    ) {
      return this.getHref(to.name, to.params, to.query, to.hash)
    }

    return {}
  }
}
