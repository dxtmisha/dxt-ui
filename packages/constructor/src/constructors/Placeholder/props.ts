import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { ActionsPropsBasic, ActionsPropsInclude } from '../Actions'
import type { DescriptionProps } from '../../types/descriptionTypes'
import type { LabelProps } from '../../types/labelTypes'

type PlaceholderPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type PlaceholderPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic,
  Actions extends ActionsPropsBasic = ActionsPropsBasic
> = ImagePropsInclude<Image>
  & LabelProps
  & DescriptionProps
  & ActionsPropsInclude<Actions>

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type PlaceholderProps = PlaceholderPropsBasic & PlaceholderPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsPlaceholder = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
