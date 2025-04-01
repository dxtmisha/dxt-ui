// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for creating animation.
 *
 * Класс для создания анимации.
 */
export class StylesToAnimate extends StylesToAbstract {
  protected treatment(): string[] {
    return [
      ...this.addEmptyString(),
      `@keyframes ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
