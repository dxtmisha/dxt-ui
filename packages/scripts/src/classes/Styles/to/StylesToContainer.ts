// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for generating CSS container queries.
 *
 * Класс для генерации CSS container queries.
 */
export class StylesToContainer extends StylesToAbstract {
  /**
   * Processes the container query and wraps content in @container rule.
   *
   * Обрабатывает container query и оборачивает содержимое в правило @container.
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
