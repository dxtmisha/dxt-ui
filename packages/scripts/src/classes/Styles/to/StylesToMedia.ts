// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for generating CSS `@media` screen responsive queries.
 *
 * Класс для генерации адаптивных CSS-медиазапросов `@media` для экранов.
 */
export class StylesToMedia extends StylesToAbstract {
  /**
   * Generates `@media screen and ...` declaration wrapping responsive styles.
   *
   * Генерирует объявление `@media screen and ...`, оборачивающее адаптивные стили.
   * @returns array of SCSS media query lines / массив строк медиазапроса SCSS
   */
  protected treatment(): string[] {
    return [
      ...this.addEmptyString(),
      `@media screen and ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
