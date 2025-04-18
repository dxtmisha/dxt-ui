// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for processing media queries.
 *
 * Класс для обработки медиа-запросов.
 */
export class StylesToMedia extends StylesToAbstract {
  protected treatment(): string[] {
    return [
      ...this.addEmptyString(),
      `@media screen and ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
