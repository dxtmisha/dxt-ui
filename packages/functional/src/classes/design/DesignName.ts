import {
  forEach,
  toCamelCase
} from '@dxtmisha/functional-basic'

/**
 * BEM naming helper for design components. The constructor splits `design.component` at the first two segments, normalizes each segment, and caches the design and component class names.
 *
 * Помощник именования компонентов по БЭМ. Конструктор берёт первые два сегмента `design.component`, нормализует их и сохраняет названия дизайна и класса компонента.
 */
export class DesignName {
  /** Component name split by levels / Название компонента, разбитое по уровням */
  protected readonly name: string[]
  /** Cached component class name / Кэшированное название класса компонента */
  protected readonly className: string
  /** Cached design name / Кэшированное название дизайна */
  protected readonly designName: string

  /**
   * Initializes DesignName with the supplied configuration.
   *
   * Инициализирует DesignName с переданными настройками.
   * @param name Design-prefixed component name, such as d1.button. / Имя компонента с префиксом дизайна, например d1.button.
   */
  constructor(name: string) {
    this.name = this.initName(name)
    this.className = this.name.join('-')
    this.designName = String(this.name[0])
  }

  /**
   * Returns the first normalized name segment.
   *
   * Возвращает первый нормализованный сегмент имени.
   * @returns Requested name or identifier. / Запрошенное имя либо идентификатор.
   */
  getDesign(): string {
    return this.designName
  }

  /**
   * Returns the normalized component class name.
   *
   * Возвращает нормализованное имя класса компонента.
   * @returns Requested name or identifier. / Запрошенное имя либо идентификатор.
   */
  getName(): string {
    return this.className
  }

  /**
   * Joins modifier segments using `--` after the component name.
   *
   * Объединяет сегменты модификатора через `--` после имени компонента.
   * @param names Name segments, joined in the supplied order. / Сегменты имени в порядке передачи.
   * @returns Requested name or identifier. / Запрошенное имя либо идентификатор.
   */
  getStatusClass(...names: (string | number | undefined)[]): string {
    return `${this.getName()}--${names.flat().join('--')}`
  }

  /**
   * Builds a CSS custom property name with the `--` prefix and `-sys-` namespace.
   *
   * Формирует имя CSS-переменной с префиксом `--` и пространством имён `-sys-`.
   * @param names Name segments, joined in the supplied order. / Сегменты имени в порядке передачи.
   * @returns Requested name or identifier. / Запрошенное имя либо идентификатор.
   */
  getStyle(...names: (string | number | undefined)[]): string {
    return `--${this.getName()}-sys-${names.flat().join('-')}`
  }

  /**
   * Joins element segments using `__` after the component name.
   *
   * Объединяет сегменты элемента через `__` после имени компонента.
   * @param names Name segments, joined in the supplied order. / Сегменты имени в порядке передачи.
   * @returns Requested name or identifier. / Запрошенное имя либо идентификатор.
   */
  getSubClass(...names: (string | number | undefined)[]): string {
    return `${this.getName()}__${names.flat().join('__')}`
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
