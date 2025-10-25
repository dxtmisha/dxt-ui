// export:none

import { StylesProperties } from '../Styles/StylesProperties'
import { DesignStructureItemAbstract } from './DesignStructureItemAbstract'

/**
 * Class for processing styles from tokens for the component.
 *
 * Класс для обработки стилей из токенов для компонента.
 */
export class DesignStructureStyles extends DesignStructureItemAbstract<string[]> {
  protected data: string[]

  /**
   * Constructor
   * @param component component name/ название компонента
   */
  constructor(
    component: string
  ) {
    super(component)
    this.data = this.make()
  }

  /**
   * Performing transformation.
   *
   * Выполнение преобразования.
   */
  make(): string[] {
    if (this.items) {
      return [
        '& {',
        ...(new StylesProperties('  ', this.items)).make(),
        '}'
      ]
    }

    return []
  }
}
