import { nextTick, type Ref, type ToRefs, watch } from 'vue'
import type { ListSelectedList } from '@dxtmisha/functional'

import { TabsNavigationSelected } from './TabsNavigationSelected'

import type { TabsNavigationProps } from './props'

/**
 * Class for managing selection changes and its animation.
 *
 * Класс для управления изменением выделения и его анимацией.
 */
export class TabsNavigationIndicator {
  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element main element/ главный элемент
   * @param className class name/ название класса
   * @param selected selection value object/ объект значения выделения
   */
  constructor(
    protected readonly props: TabsNavigationProps,
    protected readonly refs: ToRefs<TabsNavigationProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly className: string,
    protected readonly selected: TabsNavigationSelected
  ) {
    if (refs.selected) {
      watch(refs.selected, (newValue, oldValue) => this.go(newValue, oldValue))
    }

    nextTick().then(
      () => requestAnimationFrame(
        () => {
          if (element.value) {
            element.value.scrollLeft = this.getItem(this.selected.item.value)?.offsetLeft ?? 0
          }
        }
      )
    )
  }

  /**
   * Changes the selection state.
   *
   * Изменяет состояние выделения.
   * @param newSelected new selection/ новое выделение
   * @param oldSelected old selection/ старое выделение
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
      const rectNew = newItem.getBoundingClientRect()
      const rectOld = oldItem.getBoundingClientRect()
      const left = rectOld.left - rectNew.left
      const leftVar = `${left}px ${left >= 0 ? '-' : '+'} var(--${this.className}-gap, 0px)`

      newItem.style.setProperty(`--${this.className}-sys-left`, leftVar)
      newItem.style.setProperty(`--${this.className}-sys-width`, rectOld.width + 'px')

      // this.reset(newItem)
    }

    requestAnimationFrame(() => this.selected.set(newSelected))
  }

  /**
   * Resets the given styles.
   *
   * Сбрасывает данные стили.
   * @param item element/ элемент
   */
  readonly reset = (item: HTMLElement) => {
    setTimeout(() => {
      item.style.removeProperty(`--${this.className}-sys-left`)
      item.style.removeProperty(`--${this.className}-sys-width`)
    }, 384)
  }

  /**
   * Returns the selected element.
   *
   * Возвращает выделенный элемент.
   * @param selected selection number/ номер выделения
   */
  protected getItem(selected?: ListSelectedList): HTMLElement | undefined {
    return this.element.value?.querySelector<HTMLElement>(`[data-value="${selected ?? ''}"]`) || undefined
  }
}
