// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for outputting a rule block with an unmodified full selector string (e.g. animation frame steps).
 *
 * Класс для вывода блока правила с полной строкой селектора без изменений (например, шаги анимационных кадров).
 */
export class StylesToClassFull extends StylesToAbstract {
  /**
   * Generates rule block with the full selector name.
   *
   * Генерирует блок правила с полным именем селектора.
   * @returns array of SCSS rule lines / массив строк правил SCSS
   */
  protected treatment(): string[] {
    return [
      ...this.addEmptyString(),
      `${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
