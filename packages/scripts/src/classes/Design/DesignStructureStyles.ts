// export:none

import { StylesProperties } from '../Styles/StylesProperties'
import { DesignStructureItemAbstract } from './DesignStructureItemAbstract'

/**
 * Engine for compiling component-specific styles from design system tokens.
 * It coordinates the transformation of structural metadata into CSS-in-JS style rules using the global theme environment.
 *
 * Движок для компиляции специфичных для компонента стилей из токенов дизайн-системы.
 * Координирует преобразование структурных метаданных в правила стилей CSS-in-JS с использованием глобального тематического окружения.
 */
export class DesignStructureStyles extends DesignStructureItemAbstract<string[]> {
  protected data: string[]

  /**
   * Constructor for DesignStructureStyles.
   *
   * Конструктор для DesignStructureStyles.
   * @param component component name for which styles are being compiled / имя компонента, для которого компилируются стили
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
