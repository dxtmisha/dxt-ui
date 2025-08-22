import { MotionTransformElement } from './MotionTransformElement'

import type { MotionTransformClassList } from './basicTypes'

/**
 * Helper class to access MotionTransform CSS classes by design.
 *
 * Вспомогательный класс для доступа к CSS-классам MotionTransform по дизайну.
 */
export class MotionTransformClassesInclude {
  /**
   * Constructor
   * @param design design name/ название дизайна
   */
  constructor(
    protected readonly design: string
  ) {}

  /**
   * Returns list of MotionTransform classes for the specified design.
   *
   * Возвращает список классов MotionTransform для указанного дизайна.
   */
  get(): MotionTransformClassList {
    return MotionTransformElement.getClassesListByDesign(this.design)
  }

  /**
   * Returns an object with MotionTransform classes under classesMotionTransform key.
   *
   * Возвращает объект с классами MotionTransform под ключом classesMotionTransform.
   */
  getObject() {
    return {
      classesMotionTransform: this.get()
    }
  }
}
