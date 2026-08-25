import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'
import type { CropAreaCoordinator } from '../CropArea'
import type { DropzonePropsBasic, DropzonePropsInclude } from '../Dropzone'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { IconPropsBasic } from '../Icon'
import type { ImageCropPropsBasic, ImageCropPropsInclude } from '../ImageCrop'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { EnabledProps } from '../../types/enabledTypes'
import type { FieldInputFileProps } from '../../types/fieldTypes'
import type { ModelProps } from '../../types/modelTypes'
import type { TextCancelPropsInclude, TextClosePropsInclude } from '../../types/textTypes'

import type { InputImageItem } from './basicTypes'

export type InputImagePropsToken = {
  // :type [!] System label / Системная метка
  disabled?: boolean
  readonly?: boolean
  // :type [!] System label / Системная метка
}

/** Type describing basic properties / Тип, описывающий базовые свойства */
export type InputImagePropsBasic<
  Actions extends ActionsPropsBasic = ActionsPropsBasic,
  Dropzone extends DropzonePropsBasic = DropzonePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  Icon extends IconPropsBasic = IconPropsBasic,
  ImageCrop extends ImageCropPropsBasic = ImageCropPropsBasic
> = ActionsPropsInclude<Actions>
  & DropzonePropsInclude<Icon, Dropzone>
  & EnabledProps
  & FieldInputFileProps<InputImageItem>
  & FieldLabelPropsInclude<FieldLabel, FieldCounter>
  & FieldMessagePropsInclude<FieldMessage, FieldCounter>
  & ImageCropPropsInclude<ImageCrop>
  & ModelProps<InputImageItem>
  & SkeletonPropsInclude
  & TextCancelPropsInclude
  & TextClosePropsInclude
  & {
    /** Initial or current crop coordinates [top, right, bottom, left] / Начальные или текущие координаты кадрирования [сверху, справа, снизу, слева] */
    crop?: CropAreaCoordinator

    /** Maximum image dimension (width or height) for resize scaling / Максимальный размер изображения (ширина или высота) для масштабирования */
    maxSize?: number

    /** Upload button icon / Иконка кнопки загрузки */
    iconUpload?: string

    /** Close button icon / Иконка кнопки закрытия */
    iconClose?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type InputImageProps = InputImagePropsBasic & InputImagePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsInputImage = {
  accept: 'image/*',
  maxSize: 1280,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
