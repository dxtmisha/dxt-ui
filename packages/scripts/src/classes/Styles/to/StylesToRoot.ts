// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for generating SCSS `@at-root` root-level style rules.
 *
 * Класс для генерации правил стилей корневого уровня SCSS `@at-root`.
 */
export class StylesToRoot extends StylesToAbstract {
  /**
   * Generates `@at-root` declaration wrapping root-level styles.
   *
   * Генерирует объявление `@at-root`, оборачивающее стили корневого уровня.
   * @returns array of SCSS at-root rule lines / массив строк правил SCSS at-root
   */
  protected treatment(): string[] {
    return [
      ...this.addEmptyString(),
      `@at-root ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
