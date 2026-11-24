import type { SkeletonPropsInclude } from '../Skeleton'
import type { DescriptionProps } from '../../types/descriptionTypes'

/** Token properties generated from properties.json / Токен-свойства, сгенерированные из properties.json */
export type BulletItemPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Base properties for BulletItem component / Базовые свойства для компонента BulletItem */
export type BulletItemPropsBasic = DescriptionProps & SkeletonPropsInclude

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type BulletItemProps = BulletItemPropsBasic & BulletItemPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsBulletItem: BulletItemProps = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
