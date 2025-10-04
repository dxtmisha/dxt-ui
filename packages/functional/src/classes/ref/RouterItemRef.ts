import type { RouteLocationRaw, Router } from 'vue-router'

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
}
