import { type SegmentControlItemPropsBasic, defaultsSegmentControlItem } from '@dxtmisha/constructor/SegmentControlItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SegmentControlItemProps = SegmentControlItemPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSegmentControlItem,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
