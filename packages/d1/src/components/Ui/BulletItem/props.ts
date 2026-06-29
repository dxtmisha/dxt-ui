import { type BulletItemPropsBasic, defaultsBulletItem } from '@dxtmisha/constructor/BulletItem'

export const propsValues = {
  // :values [!] System label / Системная метка
  size: ['sm', 'md', 'lg']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  size?: 'sm' | 'md' | 'lg'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type BulletItemProps = BulletItemPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsBulletItem,
  ...{
    // :default [!] System label / Системная метка
    size: 'md'
    // :default [!] System label / Системная метка
  }
}
