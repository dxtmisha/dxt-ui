import type { ConstrBind } from '@dxtmisha/functional'
import type { FieldFileValue } from '../../types/fieldTypes'
import type { InputFileItemPropsBasic } from './props'

/** Appearance modes for InputFileItem / Режимы отображения InputFileItem */
export type InputFileItemAppearance = 'list' | 'compact' | 'tile'

/** Status types for InputFileItem / Типы статуса InputFileItem */
export type InputFileItemStatusType = 'uploading' | 'uploaded' | 'error' | 'idle'

/** Dependency registration type for parent components / Тип регистрации зависимости для родительских компонентов */
export type InputFileItemComponentInclude = {
  /** InputFileItem component configuration / Конфигурация компонента InputFileItem */
  inputFileItem?: object
}

/** Available component events for Include / Доступные события компонента для Include */
export type InputFileItemEmitsInclude = {
  /** Click event / Событие клика */
  click: [event: MouseEvent]
  /** Delete event / Событие удаления */
  delete: [file?: File | FieldFileValue]
  /** Retry event / Событие повтора */
  retry: [file?: File | FieldFileValue]
}

/** Props for embedding InputFileItem attributes inside another component / Свойства для встраивания атрибутов InputFileItem в другой компонент */
export type InputFileItemPropsInclude<
  Item extends InputFileItemPropsBasic = InputFileItemPropsBasic
> = {
  /** Bound attributes passed directly to InputFileItem / Атрибуты, передаваемые напрямую в InputFileItem */
  inputFileItemAttrs?: ConstrBind<Item>
}
