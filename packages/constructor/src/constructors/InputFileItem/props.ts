import type { ButtonPropsBasic, ButtonPropsInclude } from '../Button'
import type { IconPropsBasic, IconPropsInclude } from '../Icon'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { CaptionProps } from '../../types/captionTypes'
import type { EnabledProps } from '../../types/enabledTypes'
import type { FieldFileValue } from '../../types/fieldTypes'
import type { LabelProps } from '../../types/labelTypes'
import type {
  TextCancelPropsInclude,
  TextDeletePropsInclude,
  TextErrorPropsInclude,
  TextLoadingFilePropsInclude,
  TextLoadingPropsInclude,
  TextRetryPropsInclude,
  TextUploadSuccessPropsInclude
} from '../../types/textTypes'
import type { InputFileItemStatusType } from './basicTypes'

type InputFileItemPropsToken = {
  // :type [!] System label / Системная метка
  appearance?: 'list' | 'compact' | 'tile'
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
> = IconPropsInclude<Icon>
  & LabelProps
  & CaptionProps
  & EnabledProps
  & ImagePropsInclude<Image>
  & ProgressPropsInclude<Progress>
  & ButtonPropsInclude<Button>
  & SkeletonPropsInclude
  & TextCancelPropsInclude
  & TextDeletePropsInclude
  & TextErrorPropsInclude
  & TextLoadingFilePropsInclude
  & TextLoadingPropsInclude
  & TextRetryPropsInclude
  & TextUploadSuccessPropsInclude
  & {
    /** Current upload or processing status / Текущий статус загрузки или обработки */
    status?: InputFileItemStatusType

    /** Selected state / Состояние выбора */
    selected?: boolean

    /** File data value / Значение данных файла */
    value?: FieldFileValue

    /** File instance / Экземпляр файла */
    file?: File

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
  icon: 'description',
  iconDelete: 'delete',
  iconRetry: 'refresh',
  iconSuccess: 'check_circle',
  iconError: 'cancel',
  ...{
    // :default [!] System label / Системная метка
    appearance: 'list'
    // :default [!] System label / Системная метка
  }
}
