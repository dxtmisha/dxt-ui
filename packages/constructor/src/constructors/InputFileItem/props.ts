import type { ButtonPropsBasic, ButtonPropsInclude } from '../Button'
import type { CaptionProps } from '../../types/captionTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { IconPropsBasic, IconPropsInclude } from '../Icon'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { LabelProps } from '../../types/labelTypes'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { RipplePropsInclude } from '../Ripple'
import type { SkeletonPropsInclude } from '../Skeleton'
import type {
  TextCancelPropsInclude,
  TextDeletePropsInclude,
  TextErrorPropsInclude,
  TextLoadingFilePropsInclude,
  TextLoadingPropsInclude,
  TextRetryPropsInclude,
  TextUploadSuccessPropsInclude
} from '../../types/textTypes'
import type { InputFileItemData, InputFileItemStatusType } from './basicTypes'

type InputFileItemPropsToken = {
  // :type [!] System label / Системная метка
  appearance?: 'list' | 'compact' | 'tile'
  checkered?: boolean
  selected?: boolean
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

export type InputFileItemPropsBasic<
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = ButtonPropsInclude<Button>
  & CaptionProps
  & EnabledProps
  & IconPropsInclude<Icon>
  & ImagePropsInclude<Image>
  & LabelProps
  & ProgressPropsInclude<Progress>
  & RipplePropsInclude
  & SkeletonPropsInclude
  & TextCancelPropsInclude
  & TextDeletePropsInclude
  & TextErrorPropsInclude
  & TextLoadingFilePropsInclude
  & TextLoadingPropsInclude
  & TextRetryPropsInclude
  & TextUploadSuccessPropsInclude
  & {
    /** File instance / Экземпляр файла */
    file?: File

    /** File data item / Объект данных файла */
    item?: InputFileItemData

    /** File name / Имя файла */
    name?: string

    /** File size in bytes or pre-formatted string / Размер файла в байтах или готовая строка */
    size?: number | string

    /** Image or thumbnail source URL / URL источника изображения или миниатюры */
    src?: string

    /** Thumbnail URL or flag / URL миниатюры или флаг отображения */
    thumbnail?: boolean | string

    /** Enable checkered pattern for transparent PNG / Включить шахматный фон для прозрачного PNG */
    checkered?: boolean

    /** Selected state / Состояние выбора */
    selected?: boolean

    /** Current upload or processing status / Текущий статус загрузки или обработки */
    status?: InputFileItemStatusType

    /** Loading state flag / Флаг состояния загрузки */
    loading?: boolean

    /** Current progress value (0-100) / Текущее значение прогресса (0-100) */
    progress?: number | string

    /** Error state or error message / Состояние ошибки или текст ошибки */
    error?: boolean | string

    /** Success state or message / Состояние успеха или сообщение */
    success?: boolean | string

    /** Message for loading state / Сообщение для состояния загрузки */
    messageLoading?: string

    /** Message for success state / Сообщение для состояния успеха */
    messageSuccess?: string

    /** Message for error state / Сообщение для состояния ошибки */
    messageError?: string

    /** Icon for delete button / Иконка для кнопки удаления */
    iconDelete?: string

    /** Icon for retry button / Иконка для кнопки повтора */
    iconRetry?: string

    /** Icon for success status / Иконка для успешного статуса */
    iconSuccess?: string

    /** Icon for error status / Иконка для статуса ошибки */
    iconError?: string

    /** Fallback icon for non-image file / Резервная иконка для не-изображения */
    iconFile?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputFileItemProps = InputFileItemPropsBasic & InputFileItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputFileItem = {
  iconDelete: 'delete',
  iconRetry: 'refresh',
  iconSuccess: 'check_circle',
  iconError: 'cancel',
  iconFile: 'description',
  ...{
    // :default [!] System label / Системная метка
    appearance: 'list'
    // :default [!] System label / Системная метка
  }
}
