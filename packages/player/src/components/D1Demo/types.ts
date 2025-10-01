/**
 * События, испускаемые компонентом D1Demo.
 */
export type D1DemoEmits = {
  /**
   * Событие клика по области, отображающей сумму x и y.
   */
  click: []
}

/**
 * Слоты, доступные для компонента D1Demo.
 */
export interface D1DemoSlots {
  /**
   * Слот для размещения контента перед значениями x и y.
   */
  top? (props: any): any
  /**
   * Слот по умолчанию для размещения основного контента.
   */
  default? (props: any): any
}

/**
 * Свойства (пропсы) компонента D1Demo.
 */
export interface D1DemoProps {
  /**
   * Строковое значение для первой переменной X.
   */
  x?: string
  /**
   * Строковое значение для второй переменной Y.
   */
  y?: string
}

/**
 * Значения по умолчанию для пропсов компонента D1Demo.
 */
export const D1DemoDefaults: D1DemoProps = {
  // value: 'value'
}
