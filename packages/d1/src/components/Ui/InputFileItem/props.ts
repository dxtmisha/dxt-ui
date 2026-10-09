import { type InputFileItemPropsBasic, defaultsInputFileItem } from '@dxtmisha/constructor/InputFileItem'
import type { ButtonProps } from '../Button'
import type { ImageProps } from '../Image'
import type { ImageCropProps } from '../ImageCrop'
import type { ProgressProps } from '../Progress'

export const propsValues = {
  // :values [!] System label / Системная метка
  appearance: ['list', 'compact', 'tile'],
  status: ['uploading', 'uploaded', 'error', 'idle'],
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  focus?: boolean
  selected?: boolean
  disabled?: boolean
  readonly?: boolean
  appearance?: 'list' | 'compact' | 'tile'
  status?: 'uploading' | 'uploaded' | 'error' | 'idle'
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type InputFileItemProps = InputFileItemPropsBasic<
  ButtonProps,
  ImageProps,
  ProgressProps,
  ImageCropProps
> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsInputFileItem,
  iconCrop: 'crop',
  iconDelete: 'delete',
  iconRetry: 'refresh',
  iconSuccess: 'check_circle',
  iconError: 'cancel',
  iconWarning: 'error',
  ...{
    // :default [!] System label / Системная метка
    appearance: 'list',
    status: 'idle'
    // :default [!] System label / Системная метка
  }
}
