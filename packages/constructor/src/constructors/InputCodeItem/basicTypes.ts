import type { ConstrBind } from '@dxtmisha/functional'
import type { InputCodeItemPropsBasic } from './props'

/** Type for the InputCodeItem element / Тип для элемента InputCodeItem */
export type InputCodeItemElement = HTMLElement | Element | null | undefined

/**
 * Component map for including the InputCodeItem component.
 *
 * Карта компонентов для подключения компонента InputCodeItem.
 */
export type InputCodeItemComponentInclude = {
  /** InputCodeItem component configuration / Конфигурация компонента элемента ввода кода */
  inputCodeItem?: object
}

/**
 * Props used to include and configure the InputCodeItem component.
 *
 * Свойства для подключения и настройки компонента InputCodeItem.
 */
export type InputCodeItemPropsInclude<
  InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic
> = {
  /** Whether the component is disabled / Отключен ли компонент */
  disabled?: boolean

  /** Input name / Название поля ввода */
  name?: string

  /** Regex pattern for input validation / Регулярное выражение для проверки ввода */
  match?: InputCodeItemPropsBasic['match']
  /** Input mode pattern / Режим ввода */
  inputMode?: InputCodeItemPropsBasic['inputMode']
  /** Input placeholder / Плейсхолдер ввода */
  placeholder?: string
  /** Additional attributes for InputCodeItem component / Дополнительные атрибуты для компонента InputCodeItem */
  itemAttrs?: ConstrBind<InputCodeItem>
}
