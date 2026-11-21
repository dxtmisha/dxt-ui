// ai-none

import { type Ref, watch } from 'vue'
import { EventItem, type DesignName } from '@dxtmisha/functional'
import { FrameAbstract } from '../../classes/FrameAbstract'

/**
 * Class for managing dynamic margins and padding of the input field based on accessory elements (prefix, suffix, space).
 * It calculates values reactively and sets CSS custom variables on the field element.
 *
 * Класс управления динамическими отступами для элемента ввода на основе вспомогательных элементов (префикс, суффикс, разделители).
 * Вычисляет значения реактивно и устанавливает пользовательские переменные CSS на элементе поля.
 */
export class FieldSize extends FrameAbstract {
  /** Offset value from the left / Значение смещения слева */
  protected left: number = 0

  /** Offset value from the right / Значение смещения справа */
  protected right: number = 0

  /** Title offset position value / Значение позиции смещения заголовка */
  protected title: number = 0

  /** Window resize listener event / Событие слушателя изменения размеров окна */
  protected event?: EventItem<Window, Event>

  /** Watcher stop handle / Функция остановки наблюдателя */
  protected stopWatch?: () => void

  /**
   * Constructor for initializing FieldSize.
   *
   * Конструктор для инициализации FieldSize.
   * @param element main HTML element / главный HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   */
  constructor(
    protected readonly element: Ref<HTMLLabelElement | undefined>,
    protected readonly naming: DesignName
  ) {
    super()
  }

  /** Callback after component mounting / Обработчик после монтирования компонента */
  override readonly onMounted = (): void => {
    this.stopWatch?.()
    this.event?.stop()

    this.stopWatch = watch(this.element, () => this.update())
    this.event = new EventItem(window, 'resize', () => this.update()).start()
    this.update()
  }

  /** Callback after component unmounting / Обработчик после демонтирования компонента */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
    this.event?.stop()
    this.event = undefined
    this.stopFrame()
  }

  /**
   * Updates field margins.
   *
   * Обновление отступов поля.
   * @param limit recursion limit to prevent infinite loops / лимит рекурсии для предотвращения бесконечных циклов
   */
  readonly update = (limit: number = 128): void => {
    if (limit <= 0) {
      return
    }

    this.startFrame(() => {
      const elementSpace = this.getElementSpace()
      const elementPrefix = this.getElementPrefix()

      if (elementSpace) {
        this.left = elementSpace.offsetLeft
        this.right = (elementSpace.parentElement?.offsetWidth ?? 0) - this.left - elementSpace.offsetWidth
      }

      this.title = elementPrefix?.offsetLeft ?? elementSpace?.offsetLeft ?? 0

      if (this.left <= 0) {
        this.update(limit - 1)
      } else {
        this.make()
      }
    })
  }

  /**
   * Returns the space separator element.
   *
   * Возвращает элемент-разделитель (пробел).
   * @returns space DOM element / элемент DOM разделителя
   */
  protected getElementSpace(): HTMLDivElement | undefined {
    return this.element.value?.querySelector(`.${this.naming.getSubClass('body', 'scoreboard', 'space')}`) ?? undefined
  }

  /**
   * Returns the prefix element.
   *
   * Возвращает элемент с префиксом.
   * @returns prefix DOM element / элемент DOM префикса
   */
  protected getElementPrefix(): HTMLDivElement | undefined {
    return this.element.value?.querySelector(`.${this.naming.getSubClass('prefix')}`) ?? undefined
  }

  /**
   * Updates CSS custom properties for input field margins and triggers show animation state.
   *
   * Обновляет пользовательские свойства CSS для отступов поля ввода и запускает анимацию показа.
   */
  protected make(): void {
    const element = this.element.value

    if (element) {
      element.style.setProperty(this.naming.getStyle('left'), `${this.left}px`)
      element.style.setProperty(this.naming.getStyle('right'), `${this.right}px`)
      element.style.setProperty(this.naming.getStyle('title'), `${this.title}px`)

      if (!element.classList.contains(this.naming.getStatusClass('show'))) {
        this.startFrame(() => {
          element.classList.add(this.naming.getStatusClass('show'))
        })
      }
    }
  }
}
