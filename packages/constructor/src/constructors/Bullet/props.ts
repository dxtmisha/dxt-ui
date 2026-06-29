import type { BulletItemPropsInclude } from '../BulletItem'

type BulletPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type BulletPropsBasic = BulletItemPropsInclude & {
  html?: string
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BulletProps = BulletPropsBasic & BulletPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBullet = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
