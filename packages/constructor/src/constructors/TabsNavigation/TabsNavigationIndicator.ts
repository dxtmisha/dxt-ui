import { nextTick, onMounted, type ToRefs, watch } from 'vue'
import { executeFunctionRef, type ListSelectedList, type RefOrNormalOrFunction } from '@dxtmisha/functional'

import { TabsNavigationSelected } from './TabsNavigationSelected'

import type { TabsNavigationProps } from './props'

/**
 * Class for managing active tab selection changes, dynamic slide indicators, and transition animations.
 *
 * Класс для управления изменением активного выделения вкладок, динамическими слайд-индикаторами и анимациями переходов.
 */
export class TabsNavigationIndicator {
  /**
   * Constructor for initializing selection animation indicator tracker.
   *
   * Конструктор для инициализации отслеживания анимации индикатора выбора.
   * @param props input configuration properties / входные конфигурационные свойства
   * @param refs reactive references of properties / реактивные ссылки свойств
   * @param element main scrollable HTML element or getter function / главный прокручиваемый HTML-элемент или функция-геттер
   * @param classDesign design class token name / имя токена класса дизайна
   * @param className base class name of the component / базовое имя класса компонента
   * @param selected selection state manager instance / экземпляр менеджера состояния выделения
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly refs: ToRefs<TabsNavigationProps>,
    protected readonly element: RefOrNormalOrFunction<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly selected: TabsNavigationSelected
  ) {
    onMounted(() => {
      watch(
        this.selected.item,
        (newValue, oldValue) => this.go(newValue, oldValue)
      )

      requestAnimationFrame(() => {
        const element = this.getElement()

        if (element) {
          element.scrollLeft = this.getItem(this.selected.item.value)?.offsetLeft ?? 0
        }
      })
    })
  }

  /**
   * Triggers and animates the transition state when selection changes from one tab to another.
   *
   * Запускает и анимирует состояние перехода при изменении выделения с одной вкладки на другую.
   * @param newSelected index value of the newly selected tab / индексное значение новой выбранной вкладки
   * @param oldSelected index value of the previously selected tab / индексное значение предыдущей выбранной вкладки
   */
  readonly go = async (
    newSelected: ListSelectedList | undefined,
    oldSelected: ListSelectedList | undefined
  ) => {
    await nextTick()

    const newItem = this.getItem(newSelected)
    const oldItem = this.getItem(oldSelected)

    if (
      newItem
      && oldItem
    ) {
      const itemClassName = this.getItemClassName()
      const rectNew = newItem.getBoundingClientRect()
      const rectOld = oldItem.getBoundingClientRect()
      const left = rectOld.left - rectNew.left
      const leftVar = `${left}px ${left >= 0 ? '-' : '+'} var(--${itemClassName}-gap, 0px)`

      newItem.style.setProperty(`--${itemClassName}-sys-left`, leftVar)
      newItem.style.setProperty(`--${itemClassName}-sys-width`, rectOld.width + 'px')

      this.reset(newItem)
    }

    requestAnimationFrame(() => {
      this.selected.setActual(newSelected)
    })
  }

  /**
   * Resets temporary transition inline styles after transition finishes.
   *
   * Сбрасывает временные инлайновые стили перехода после завершения анимации.
   * @param item HTML element of the tab / HTML-элемент вкладки
   */
  readonly reset = (item: HTMLElement) => {
    setTimeout(() => {
      item.style.removeProperty(`--${this.className}-sys-left`)
      item.style.removeProperty(`--${this.className}-sys-width`)
    }, 384)
  }

  /**
   * Resolves and returns the container HTMLElement.
   *
   * Разрешает и возвращает HTMLElement контейнера.
   * @returns element or undefined / элемент или undefined
   */
  protected getElement(): HTMLElement | undefined {
    return executeFunctionRef(this.element)
  }

  /**
   * Returns the sub-class name suffix for the tab item component.
   *
   * Возвращает суффикс имени подкласса для компонента элемента вкладки.
   * @returns tab item class name suffix / суффикс имени класса вкладки
   */
  protected getItemClassName(): string {
    return `${this.className}Item`
  }

  /**
   * Queries and returns the specific tab element by its unique index value.
   *
   * Находит и возвращает конкретный элемент вкладки по его уникальному индексному значению.
   * @param selected selected tab value / значение выбранной вкладки
   * @returns tab HTMLElement or undefined / HTMLElement вкладки или undefined
   */
  protected getItem(selected?: ListSelectedList): HTMLElement | undefined {
    return this.getElement()?.querySelector<HTMLElement>(`[data-value="${selected ?? ''}"]`) || undefined
  }
}
