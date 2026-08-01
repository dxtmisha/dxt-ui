import { MotionFlipElement } from './MotionFlipElement'
import { MotionFlipItem } from './MotionFlipItem'

/**
 * Class for managing the collection of FLIP item elements.
 * Creates, initializes, and updates all child MotionFlipItem instances.
 *
 * Класс для управления коллекцией элементов FLIP.
 * Создаёт, инициализирует и обновляет все дочерние экземпляры MotionFlipItem.
 */
export class MotionFlipItems {
  /** List of FLIP item instances / Список экземпляров элементов FLIP */
  protected items: MotionFlipItem[] = []

  /**
   * Constructor
   * @param elementManager main element manager instance / главный экземпляр менеджера элемента
   */
  constructor(
    protected readonly elementManager: MotionFlipElement
  ) { }

  /**
   * Resets all child item elements.
   *
   * Сбрасывает все дочерние элементы.
   */
  reset(): void {
    this.items.forEach(item => item.reset())
  }

  /**
   * Resets FLIP item element class when transform transition completes.
   *
   * Сбрасывает класс FLIP-элемента при завершении трансформационного перехода.
   * @param event transition event / событие перехода
   * @returns true if an item transition matched and finished / true, если переход элемента совпал и завершился
   */
  resetItem(event: TransitionEvent): boolean {
    if (event.propertyName === 'transform') {
      return Boolean(
        this.find(
          (event.target as HTMLElement)?.parentElement
        )?.reset()
      )
    }

    return false
  }

  /**
   * Updates positions and sizes for all child item elements.
   *
   * Обновляет положения и размеры для всех дочерних элементов.
   */
  update(): void {
    this.items.forEach(item => item.update())
  }

  /**
   * Initializes and creates all child item elements with their original sizes.
   *
   * Инициализирует и создаёт все дочерние элементы с их исходными размерами.
   */
  init(): void {
    const element = this.elementManager.getElement()

    if (element) {
      const children = Array.from(element.children) as HTMLElement[]

      this.items = children.map(childElement => (
        new MotionFlipItem(childElement, this.elementManager).initOriginalSize()
      ))
    } else {
      this.items = []
    }
  }

  /**
   * Initializes and caches original sizes for all existing child item elements.
   *
   * Инициализирует и кэширует исходные размеры для всех существующих дочерних элементов.
   */
  initOriginalSize(): void {
    this.items.forEach(item => item.initOriginalSize())
  }

  /**
   * Finds a MotionFlipItem instance by target HTML element.
   *
   * Находит экземпляр MotionFlipItem по целевому HTML-элементу.
   * @param element target HTML element / целевой HTML-элемент
   * @returns item instance or undefined / экземпляр элемента или undefined
   */
  protected find(element?: HTMLElement | null): MotionFlipItem | undefined {
    return this.items.find(item => item.isElement(element))
  }
}
