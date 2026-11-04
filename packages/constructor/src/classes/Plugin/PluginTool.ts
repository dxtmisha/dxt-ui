/**
 * Utility class with static helpers for identifying file types and build modes in the Vite plugin.
 *
 * Утилитарный класс со статическими методами для определения типов файлов и режимов сборки в плагине Vite.
 */
export class PluginTool {
  /**
   * Checks if the id is a Style user’s file.
   *
   * Проверяет, является ли id файлом стилей пользователя.
   * @param id file identification / идентификация файла
   * @returns true if file is a user style file / true, если файл является пользовательским файлом стилей
   */
  static isCss(id: string): boolean {
    return this.isSrc(id) && /\.(css|sass|scss)/.test(id)
  }

  /**
   * Checks if it is development mode.
   *
   * Проверяет, является ли режим разработкой.
   * @param mode current mode / текущий режим
   * @returns true if mode is development / true, если режим — разработка
   */
  static isDev(mode: string): boolean {
    return mode === 'development'
  }

  /**
   * Checks if the id is a JS/TS user’s file.
   *
   * Проверяет, является ли id файлом JS/TS пользователя.
   * @param id file identification / идентификация файла
   * @returns true if file is a user JS/TS file / true, если файл является пользовательским JS/TS файлом
   */
  static isJs(id: string): boolean {
    return this.isSrc(id) && /\.ts|js|tsx/.test(id)
  }

  /**
   * Checks if the id is a user’s source file outside node_modules.
   *
   * Проверяет, является ли id исходным файлом пользователя вне node_modules.
   * @param id file identification / идентификация файла
   * @returns true if file is in src and not in node_modules / true, если файл находится в src и не в node_modules
   */
  static isSrc(id: string): boolean {
    return /\/src\//i.test(id)
      && !/\/node_modules\//i.test(id)
  }

  /**
   * Checks if the id is a Vue user’s file.
   *
   * Проверяет, является ли id файлом Vue пользователя.
   * @param id file identification / идентификация файла
   * @returns true if file is a user Vue component / true, если файл является пользовательским компонентом Vue
   */
  static isVue(id: string): boolean {
    return this.isSrc(id) && /\.vue$/.test(id)
  }
}
