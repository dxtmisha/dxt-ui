import { shallowRef, type ShallowRef } from 'vue'
import type { ConstrStyles } from '@dxtmisha/functional'

import type { ListItemProps } from './props'

/**
 * Class managing cached height preservation for hidden lazy ListItem elements.
 * Stores the last measured element height when leaving the viewport and exposes placeholder styles to prevent layout shift.
 *
 * Класс управления кэшированной высотой скрытых ленивых элементов ListItem.
 * Сохраняет последнюю измеренную высоту элемента при выходе из области видимости и возвращает стили-заглушки для предотвращения скачков верстки.
 */
export class ListItemLazyHeight {
  /**
   * Determines whether lazy height caching is enabled for ListItem.
   *
   * Определяет, включено ли кэширование высоты при ленивом рендеринге ListItem.
   * @param props input properties / входные свойства
   * @returns true if height caching is active / true, если кэширование высоты активно
   */
  static is(props?: Readonly<ListItemProps>): boolean {
    return Boolean(props?.lazy) && props?.lazyCacheHeight !== false
  }

  /** Cached rendered height preserved when item leaves viewport / Кэшированная высота элемента, сохраняемая при выходе за экран */
  protected readonly cachedHeight: ShallowRef<string | undefined> = shallowRef<string | undefined>(undefined)

  /**
   * Constructor
   *
   * Конструктор
   * @param props input properties / входные свойства
   */
  constructor(
    protected readonly props: Readonly<ListItemProps>
  ) {
  }

  /**
   * Returns inline styles preserving measured item height while hidden.
   *
   * Возвращает inline-стили, сохраняющие измеренную высоту элемента в скрытом состоянии.
   * @returns styles object / объект стилей
   */
  get styles(): ConstrStyles {
    if (
      ListItemLazyHeight.is(this.props)
      && this.cachedHeight.value
    ) {
      return {
        containIntrinsicHeight: this.cachedHeight.value
      }
    }

    return {}
  }

  /**
   * Caches the measured element height from an observer entry when available.
   *
   * Кэширует измеренную высоту элемента из записи наблюдателя при её наличии.
   * @param entry intersection observer entry / запись наблюдателя пересечений
   */
  set(entry?: IntersectionObserverEntry): void {
    if (!ListItemLazyHeight.is(this.props)) {
      this.reset()
      return
    }

    const height = entry?.boundingClientRect?.height

    if (
      height
      && height > 0
    ) {
      this.cachedHeight.value = `${height}px`
    }
  }

  /**
   * Clears the cached height value.
   *
   * Сбрасывает кэшированное значение высоты.
   */
  reset(): void {
    this.cachedHeight.value = undefined
  }
}
