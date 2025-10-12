import { type AccordionPropsBasic, defaultsAccordion } from '@dxtmisha/constructor/Accordion'
import type { IconProps } from '../Icon'
import type { CellProps } from '../Cell'
import type { MotionTransformProps } from '../MotionTransform'

export const propsValues = {
  // :values [!] System label / Системная метка
  padding: ['sm', 'md', 'lg', 'ySm', 'yMd', 'yLg', 'none']
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  divider?: boolean
  padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none'
  paddingByIndent?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export interface AccordionProps extends AccordionPropsBasic<IconProps, CellProps, MotionTransformProps>, PropsToken {
}

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsAccordion,
  iconArrowDown: 'keyboard_arrow_down',
  ...{
    // :default [!] System label / Системная метка
    divider: true,
    padding: 'yMd',
    paddingByIndent: true
    // :default [!] System label / Системная метка
  }
}
