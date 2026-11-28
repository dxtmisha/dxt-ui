// ai-none

import type { Ref } from 'vue'

import { ControlAbstract } from '../../classes/ControlAbstract'
import type { CarouselPaginationSelected } from './CarouselPaginationSelected'
import type { CarouselPaginationProps } from './props'

/**
 * Class for managing focus state, keyboard navigation, and event bindings in carousel pagination.
 *
 * Класс для управления состоянием фокуса, клавиатурной навигацией и привязками событий в пагинации карусели.
 */
export class CarouselPaginationFocus extends ControlAbstract {
  /**
   * Checks whether keyboard control and focus navigation are enabled for the given pagination properties.
   *
   * Проверяет, включены ли клавиатурное управление и навигация фокуса для заданных свойств пагинации.
   * @param props input configuration properties / входные конфигурационные свойства
   * @returns true if pagination is focusable / true, если пагинация доступна для фокуса
   */
  static override is(props?: Readonly<CarouselPaginationProps>): boolean {
    return ControlAbstract.is(props)
      && props?.type !== 'fraction'
      && props?.type !== 'progressbar'
  }

  /**
   * Constructor for CarouselPaginationFocus.
   *
   * Конструктор для CarouselPaginationFocus.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param element main HTML element / главный HTML-элемент
   * @param selected getter returning slide selection manager instance / функция, возвращающая экземпляр менеджера выбора слайдов
   */
  constructor(
    protected override readonly props: Readonly<CarouselPaginationProps>,
    protected override readonly element: Ref<HTMLElement | undefined>,
    protected readonly selected: () => CarouselPaginationSelected
  ) {
    super(props, element)
  }

  /**
   * Checks whether the pagination is focusable.
   *
   * Проверяет, доступна ли пагинация для фокуса.
   * @returns true if pagination is focusable / true, если пагинация доступна для фокуса
   */
  protected override isFocusable(): boolean {
    return CarouselPaginationFocus.is(this.props)
  }

  /**
   * Returns the current active slide index.
   *
   * Возвращает текущий индекс активного слайда.
   * @returns current slide index / текущий индекс слайда
   */
  protected override getIndex(): number {
    return this.selected().item.value
  }

  /**
   * Returns maximum available slide count.
   *
   * Возвращает максимальное количество доступных слайдов.
   * @returns total slide count / общее количество слайдов
   */
  protected override getMax(): number {
    return this.selected().total.value
  }

  /**
   * Returns minimum slide index.
   *
   * Возвращает минимальный индекс слайда.
   * @returns minimum slide index / минимальный индекс слайда
   */
  protected override getMin(): number {
    return 1
  }

  /**
   * Returns DOM query selector for target slide index button.
   *
   * Возвращает селектор запроса DOM для кнопки целевого индекса слайда.
   * @param index slide index / индекс слайда
   * @returns DOM query selector / селектор запроса DOM
   */
  protected override getSelector(index: number): string {
    return `[data-index="${index}"]`
  }

  /**
   * Sets the active slide index.
   *
   * Устанавливает индекс активного слайда.
   * @param index target slide index / целевой индекс слайда
   */
  protected override setIndex(index: number): void {
    this.selected().set(index)
  }
}
