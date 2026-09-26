import type { ConstrBind } from '@dxtmisha/functional'
import type { InputFileItemPropsBasic } from './props'

/** Appearance modes for InputFileItem / Режимы отображения InputFileItem */
export type InputFileItemAppearance = 'list' | 'compact' | 'tile'

/** Status types for InputFileItem / Типы статуса InputFileItem */
export type InputFileItemStatusType = 'uploading' | 'uploaded' | 'error' | 'idle'

/** Interface for describing a file item data structure / Интерфейс структуры данных элемента файла */
export type InputFileItemData = {
  /** Unique item identifier / Уникальный идентификатор элемента */
  id?: string | number
  /** File name / Имя файла */
  name?: string
  /** File size in bytes / Размер файла в байтах */
  size?: number | string
  /** Image or thumbnail source URL / URL источника изображения или миниатюры */
  url?: string
  /** Alternative source URL / Альтернативный URL источника */
  src?: string
  /** Raw File instance / Исходный экземпляр файла */
  file?: File
  /** Item status / Статус элемента */
  status?: InputFileItemStatusType
  /** Loading state / Состояние загрузки */
  loading?: boolean
  /** Error state or message / Состояние или текст ошибки */
  error?: boolean | string
  /** Success state or message / Состояние или текст успеха */
  success?: boolean | string
  /** Progress value (0-100) / Значение прогресса (0-100) */
  progress?: number | string
  /** Additional raw data / Дополнительные сырые данные */
  raw?: any
}

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
  delete: [file?: File | InputFileItemData]
  /** Retry event / Событие повтора */
  retry: [file?: File | InputFileItemData]
}

/** Props for embedding InputFileItem attributes inside another component / Свойства для встраивания атрибутов InputFileItem в другой компонент */
export type InputFileItemPropsInclude<
  Item extends InputFileItemPropsBasic = InputFileItemPropsBasic
> = {
  /** Bound attributes passed directly to InputFileItem / Атрибуты, передаваемые напрямую в InputFileItem */
  inputFileItemAttrs?: ConstrBind<Item>
}
