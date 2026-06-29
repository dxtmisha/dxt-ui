import type { DescriptionProps } from '../../types/descriptionTypes'

type BulletItemPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export type BulletItemPropsBasic = DescriptionProps & {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type BulletItemProps = BulletItemPropsBasic & BulletItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsBulletItem = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
