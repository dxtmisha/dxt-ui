import type { Ref } from 'vue'
import { getElementId } from '@dxtmisha/functional'

import type { CropAreaClassesList } from './basicTypes'

/**
 * Class managing CropArea CSS classes, unique instance identifier, and DOM queries.
 *
 * Класс, управляющий классами CSS компонента CropArea, уникальным идентификатором экземпляра и DOM-запросами.
 */
export class CropAreaClassesData {
  /** Map of component classes / Карта классов компонента */
  readonly list: CropAreaClassesList

  /** Unique identifier of the component instance / Уникальный идентификатор экземпляра компонента */
  protected readonly idItem = `crop-area--${getElementId()}`

  /**
   * Constructor.
   *
   * Конструктор.
   * @param element wrapper element reference / ссылка на элемент обертки
   * @param classDesign design class prefix / префикс класса дизайна
   * @param className main component class name / имя класса основного компонента
   */
  constructor(
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string
  ) {
    this.list = CropAreaClassesData.getClassesList(classDesign)
  }

  /**
   * Returns the unique component identifier.
   *
   * Возвращает уникальный идентификатор компонента.
   * @returns unique identifier / уникальный идентификатор
   */
  get id(): string {
    return this.idItem
  }

  /**
   * Returns the component class name.
   *
   * Возвращает имя класса компонента.
   * @returns component class name / имя класса компонента
   */
  get name(): string {
    return this.className
  }

  /**
   * Returns the wrapper DOM element.
   *
   * Возвращает DOM-элемент обертки.
   * @returns wrapper DOM element or undefined / DOM-элемент обертки или undefined
   */
  get elementItem(): HTMLElement | undefined {
    return this.element.value
  }

  /**
   * Returns the bounding rectangle of the wrapper element.
   *
   * Возвращает ограничивающий прямоугольник элемента обертки.
   * @returns bounding rectangle or undefined / ограничивающий прямоугольник или undefined
   */
  get rect(): DOMRect | undefined {
    return this.element.value?.getBoundingClientRect()
  }

  /**
   * Toggle block selection CSS class on document body.
   *
   * Переключает класс CSS блокировки выделения текста на body документа.
   * @param status activation status / статус активации
   */
  setBlockSelection(status = false): void {
    if (status) {
      document.body.classList.add(this.list.blockSelection)
    } else {
      document.body.classList.remove(this.list.blockSelection)
    }
  }

  /**
   * Calculates component classes list by design prefix.
   *
   * Вычисляет список классов компонента по префиксу дизайна.
   * @param classDesign design class prefix / префикс класса дизайна
   * @returns classes list / список классов
   */
  static getClassesList(classDesign: string): CropAreaClassesList {
    const className = `${classDesign}-cropArea`

    return {
      blockSelection: `${className}__blockSelection`,
      active: `${className}__active`,
      move: `${className}__move`
    }
  }
}
