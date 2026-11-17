/**
 * Interface for describing which components need to be connected for ListItem work/
 * Интерфейс для описания, какие компоненты надо подключить для работы ListItem
 */
export type ListItemComponentInclude = {
  /** List item component configuration/ Конфигурация компонента элемента списка */
  listItem?: object
}

/**
 * Interface for including lazy rendering properties of ListItem/
 * Интерфейс для включения свойств ленивого рендеринга ListItem
 */
export type ListItemLazyPropsInclude = {
  /** Lazy rendering of item contents/ Ленивый рендеринг содержимого элемента */
  lazy?: boolean
  /** Root margin for lazy visibility observer/ Отступ области наблюдения ленивого рендеринга */
  lazyMargin?: string
  /** Whether to cache measured element height when hidden by lazy rendering / Сохранять ли измеренную высоту элемента при скрытии ленивым рендерингом */
  lazyCacheHeight?: boolean
}
