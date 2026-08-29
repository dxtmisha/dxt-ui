// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for wrapping nested styles in a CSS class or subclass selector rule.
 *
 * Класс для оборачивания вложенных стилей в правило CSS-класса или селектора подкласса.
 */
export class StylesToClass extends StylesToAbstract {
  /**
   * Generates class selector block if nested child content is present.
   *
   * Генерирует блок селектора класса, если присутствует вложенное дочернее содержимое.
   * @returns array of SCSS class rule lines / массив строк правил SCSS-класса
   */
  protected treatment(): string[] {
    const content = this.content()

    if (content.length > 0) {
      return [
        ...this.addEmptyString(),
        `${this.getName()} {`,
        ...this.content(),
        '}'
      ]
    }

    return []
  }
}
