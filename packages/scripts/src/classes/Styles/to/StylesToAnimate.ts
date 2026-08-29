// export:none

import { StylesToAbstract } from './StylesToAbstract'

/**
 * Class for generating CSS `@keyframes` animation blocks.
 *
 * Класс для генерации блоков анимации CSS `@keyframes`.
 */
export class StylesToAnimate extends StylesToAbstract {
  /**
   * Generates `@keyframes` declaration wrapping the animation keyframe steps.
   *
   * Генерирует объявление `@keyframes`, оборачивающее шаги анимации.
   * @returns array of SCSS keyframe rule lines / массив строк правил SCSS keyframe
   */
  protected treatment(): string[] {
    return [
      ...this.addEmptyString(),
      `@keyframes ${this.getName()} {`,
      ...this.content(),
      '}'
    ]
  }
}
