import {
  forEach,
  toArray,
  toCamelCase
} from '@dxtmisha/functional-basic'

/**
 * Stores the design component name and generates class names and CSS custom property names.
 * Normalizes the design and component segments and uses them for BEM naming.
 *
 * Хранит имя компонента дизайна и формирует имена классов и пользовательских CSS-свойств.
 * Нормализует сегменты дизайна и компонента и использует их для именования по БЭМ.
 */
export class DesignName {
  /** Component name split by levels / Название компонента, разбитое по уровням */
  protected readonly name: string[]

  /**
   * Creates a naming helper for a design component.
   *
   * Создает помощник для именования компонента дизайна.
   * @param name component name with the design prefix / имя компонента с префиксом дизайна
   */
  constructor(name: string) {
    this.name = this.initName(name)
  }

  /**
   * Getting the design name.
   *
   * Получение названия дизайна.
   * @returns design name / название дизайна
   */
  getDesign(): string {
    return String(this.name[0])
  }

  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @returns class name / название класса
   */
  getName(): string {
    return this.name.join('-')
  }

  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns status class name / название класса для статуса
   */
  getStatusClass(name: string | string[]): string {
    return `${this.getName()}--${toArray(name).join('--')}`
  }

  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns CSS custom property name / название CSS-переменной
   */
  getStyle(name: string | string[]): string {
    return `--${this.getName()}-sys-${toArray(name).join('-')}`
  }

  /**
   * Getting the class name of a sub-element.
   *
   * Получение названия класса подэлемента.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns sub-element class name / название класса подэлемента
   */
  getSubClass(name: string | string[]): string {
    return `${this.getName()}__${toArray(name).join('__')}`
  }

  /**
   * Getting component names as an array.
   *
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation / название компонента для преобразования
   * @returns component names by levels / названия компонента по уровням
   */
  private initName(name: string): string[] {
    return forEach(name.split('.', 2), item => toCamelCase(item))
  }
}
