import { WindowClasses } from './WindowClasses'

import type { WindowClassesList } from './basicTypes'

/**
 * Helper class to access window CSS classes by design.
 *
 * Вспомогательный класс для доступа к CSS-классам окна по дизайну.
 */
export class WindowClassesInclude {
  /**
   * Constructor
   * @param design design name/ название дизайна
   */
  constructor(
    protected readonly design: string
  ) {
  }

  /**
   * Returns list of window classes for the specified design.
   *
   * Возвращает список классов окна для указанного дизайна.
   */
  get(): WindowClassesList {
    return WindowClasses.getClassesListByDesign(this.design)
  }

  /**
   * Returns an object with window classes under classesWindow key.
   *
   * Возвращает объект с классами окна под ключом classesWindow.
   */
  getObject() {
    return {
      classesWindow: this.get()
    }
  }
}
