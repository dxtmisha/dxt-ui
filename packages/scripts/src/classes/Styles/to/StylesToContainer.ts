// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for generating CSS `@container` container queries.
 *
 * Класс для генерации CSS-запросов контейнера `@container`.
 */
export class StylesToContainer extends StylesToAbstract {
  /**
   * Processes the container query and wraps content in `@container` rule.
   *
   * Обрабатывает container query и оборачивает содержимое в правило `@container`.
   * @returns array of SCSS container query lines / массив строк CSS container query
   */
  protected treatment(): string[] {
    return [
      ...this.addEmptyString(),
      `@container ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
