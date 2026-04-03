import type { ConstrBind } from '@dxtmisha/functional'
import type { SnackbarItemPropsBasic } from './props'

/**
 * Interface describing the set of components required for the SnackbarItem include.
 *
 * Интерфейс, описывающий набор компонентов, необходимых для подключения элемента снекбара.
 */
export type SnackbarItemComponentInclude = {
  /** SnackbarItem component configuration/ Конфигурация компонента элемента снекбара */
  snackbarItem?: object
}

/**
 * Type describing properties for embedding a SnackbarItem component inside another component.
 * Allows passing additional bound attributes to the snackbar item via `snackbarItemAttrs`.
 *
 * Тип, описывающий свойства для встраивания компонента SnackbarItem внутри другого компонента.
 * Позволяет передавать дополнительные привязанные атрибуты элементу снекбара через `snackbarItemAttrs`.
 *
 * @template SnackbarItemProps - The snackbar item props type used for typed attribute binding /
 *   Тип пропсов элемента снекбара, используемый для типизированной привязки атрибутов
 */
export type SnackbarItemPropsInclude<
  SnackbarItemProps extends SnackbarItemPropsBasic = SnackbarItemPropsBasic
> = {
  /**
   * Bound attributes passed directly to the snackbar item component /
   * Привязанные атрибуты, передаваемые напрямую в компонент элемента снекбара
   */
  snackbarItemAttrs?: ConstrBind<SnackbarItemProps>
}
