// export:none

import { StylesTool } from '../StylesTool'
import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for generating CSS pseudo-element rule blocks (`::before`, `::after`, etc.) with default content initialization.
 *
 * Класс для генерации блоков правил псевдоэлементов CSS (`::before`, `::after` и т.д.) с инициализацией content по умолчанию.
 */
export class StylesToVirtual extends StylesToAbstract {
  /** List of pseudo-elements that require a default content property / Список псевдоэлементов, требующих свойство content по умолчанию */
  protected contentType = [
    'after',
    'before'
  ]

  /**
   * Generates pseudo-element rule block with automatic `content: ' ';` declaration for before/after.
   *
   * Генерирует блок правила псевдоэлемента с автоматическим объявлением `content: ' ';` для before/after.
   * @returns array of SCSS pseudo-element rule lines / массив строк правил SCSS-псевдоэлемента
   */
  protected treatment(): string[] {
    const name = this.getName()
    const data = [
      ...this.addEmptyString(),
      `&::${name} {`
    ]

    if (this.contentType.indexOf(name) !== -1) {
      data.push(`${StylesTool.getSpace()}content: ' ';`)
    }

    data.push(...this.content())
    data.push('}')

    return data
  }
}
