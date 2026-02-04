import { type AccordionPropsBasic, defaultsAccordion } from '@dxtmisha/constructor/Accordion'
import type { IconProps } from '../Icon'
import type { CellProps } from '../Cell'
import type { MotionTransformProps } from '../MotionTransform'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  divider?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type AccordionProps = AccordionPropsBasic<IconProps, CellProps, MotionTransformProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsAccordion,
  iconArrowDown: 'keyboard_arrow_down',
  ...{
    // :default [!] System label / Системная метка
    divider: true
    // :default [!] System label / Системная метка
  }
}
