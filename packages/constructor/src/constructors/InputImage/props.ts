import type { CropAreaCoordinator } from '../CropArea'
import type { ImageCropPropsBasic, ImageCropPropsInclude } from '../ImageCrop'
import type { FieldLabelPropsBasic, FieldLabelPropsInclude } from '../FieldLabel'
import type { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage'
import type { FieldCounterPropsBasic } from '../FieldCounter'
import type { ProgressPropsBasic, ProgressPropsInclude } from '../Progress'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { EnabledProps } from '../../types/enabledTypes'
import type { FieldInputFileProps } from '../../types/fieldTypes'
import type { ModelProps } from '../../types/modelTypes'

import type { InputImageItem } from './basicTypes'

export type InputImagePropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Type describing basic properties / Тип, описывающий базовые свойства */
export type InputImagePropsBasic<
  ImageCrop extends ImageCropPropsBasic = ImageCropPropsBasic,
  FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic,
  FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic,
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic,
  Progress extends ProgressPropsBasic = ProgressPropsBasic
> = FieldLabelPropsInclude<FieldLabel, FieldCounter>
  & FieldMessagePropsInclude<FieldMessage, FieldCounter>
  & FieldInputFileProps<InputImageItem>
  & ProgressPropsInclude<Progress>
  & EnabledProps
  & ModelProps<InputImageItem>
  & SkeletonPropsInclude
  & ImageCropPropsInclude<ImageCrop>
  & {
    /** Initial or current crop coordinates [top, right, bottom, left] / Начальные или текущие координаты кадрирования [сверху, справа, снизу, слева] */
    crop?: CropAreaCoordinator

    /** Maximum image dimension (width or height) for resize scaling / Максимальный размер изображения (ширина или высота) для масштабирования */
    maxSize?: number
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
