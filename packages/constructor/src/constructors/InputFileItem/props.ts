import type { ButtonPropsBasic, ButtonPropsInclude } from '../Button'
import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { EnabledProps } from '../../types/enabledTypes'
import type { FieldFileValue } from '../../types/fieldTypes'
import type {
  TextDeletePropsInclude,
  TextErrorPropsInclude,
  TextLoadingFilePropsInclude,
  TextRetryPropsInclude,
  TextUploadSuccessPropsInclude
} from '../../types/textTypes'

type InputFileItemPropsToken = {
  // :type [!] System label / Системная метка
  appearance?: 'list' | 'compact' | 'tile'
  status?: 'uploading' | 'uploaded' | 'error' | 'idle'
  selected?: boolean
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

export type InputFileItemPropsBasic<
  Button extends ButtonPropsBasic = ButtonPropsBasic,
  Image extends ImagePropsBasic = ImagePropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = EnabledProps
  & ImagePropsInclude<Image>
  & ProgressPropsInclude<Progress>
  & ButtonPropsInclude<Button>
  & SkeletonPropsInclude
  & TextDeletePropsInclude
  & TextErrorPropsInclude
  & TextLoadingFilePropsInclude
  & TextRetryPropsInclude
  & TextUploadSuccessPropsInclude
  & {
    /** Selected state / Состояние выбора */
    selected?: boolean

    /** File data value / Значение данных файла */
    value?: FieldFileValue

    /** File instance / Экземпляр файла */
    file?: File

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
  iconDelete: 'delete',
  iconRetry: 'refresh',
  iconSuccess: 'check_circle',
  iconError: 'cancel',
  ...{
    // :default [!] System label / Системная метка
    appearance: 'list',
    status: 'idle'
    // :default [!] System label / Системная метка
  }
}
