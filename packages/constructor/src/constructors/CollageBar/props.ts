import type { ConstrBind } from '@dxtmisha/functional'

import type { ButtonPropsBasic, ButtonPropsInclude } from '../Button'
import type { IconPropsBasic, IconValue } from '../Icon'

import type { DescriptionProps } from '../../types/descriptionTypes'
import type { LabelProps } from '../../types/labelTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

type CollageBarPropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  position?: 'top' | 'bottom' | 'static'
  // :type [!] System label / Системная метка
}

export type CollageBarPropsBasic<
  Icon extends IconPropsBasic = IconPropsBasic,
  Button extends ButtonPropsBasic = ButtonPropsBasic
> = LabelProps
  & DescriptionProps
  & ButtonPropsInclude<Button>
  & EventClickProps
  & {
    /** Button configuration or text / Конфигурация или текст кнопки */
    button?: string | number | ConstrBind<Button>

    /** Selected state / Выбранное состояние */
    selected?: boolean

    /** HTML tag for the container / HTML-тег для контейнера */
    tag?: string

    /** Icon for the button / Иконка для кнопки */
    icon?: IconValue<Icon>
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CollageBarProps = CollageBarPropsBasic & CollageBarPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCollageBar = {
  tag: 'figcaption',
  ...{
    // :default [!] System label / Системная метка
    position: 'static'
    // :default [!] System label / Системная метка
  }
}
