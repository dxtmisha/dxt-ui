import { type CollagePropsBasic, defaultsCollage } from '@dxtmisha/constructor/Collage'

import type { CollageItemProps } from '../CollageItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  columns: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  appearance: ['standard', 'quilted', 'woven', 'masonryHorizontal', 'masonryVertical']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  appearance?: 'standard' | 'quilted' | 'woven' | 'masonryHorizontal' | 'masonryVertical'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CollageProps = CollagePropsBasic<CollageItemProps> & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCollage,
  ...{
    // :default [!] System label / Системная метка
    columns: '4',
    appearance: 'standard'
    // :default [!] System label / Системная метка
  }
}
