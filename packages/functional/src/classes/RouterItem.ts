import type { RouteLocationRaw, Router } from 'vue-router'

/**
 * Router management class.
 *
 * Класс управления роутером.
 */
export class RouterItem {
  protected static router?: Router

  static get() {
    return this.router
  }

  /**
   * Site path change.<br>
   * Изменение пути сайта.
   * @param to new path/ новый путь
   */
  static push(to: string | RouteLocationRaw) {
    if (this.router) {
      this.router.push(to).then()
    }
  }

  static set(router: Router) {
    this.router = router
  }

  static setOneTime(router: Router) {
    if (!this.router) {
      this.set(router)
    }
  }
}
