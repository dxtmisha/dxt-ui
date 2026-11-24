import type { BulletItemPropsBasic, BulletItemPropsInclude } from '../BulletItem'
import type { SkeletonPropsInclude } from '../Skeleton'

/** Token properties generated from properties.json / Токен-свойства, сгенерированные из properties.json */
export type BulletPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Base properties for Bullet component / Базовые свойства для компонента Bullet */
export type BulletPropsBasic<
  BulletItem extends BulletItemPropsBasic = BulletItemPropsBasic
> = BulletItemPropsInclude<BulletItem>
  & SkeletonPropsInclude
  & {
    /** Raw HTML list markup (`<li>...</li>`) rendered with sanitized attributes and BulletItem classes / HTML-разметка списка (`<li>...</li>`) с санитизацией и классами BulletItem */
    html?: string
  }

/**
 * Type describing incoming properties /
 * Тип, описывающий входящие свойства
 */
export type BulletProps = BulletPropsBasic & BulletPropsToken

/**
 * Default value for property /
 * Значение по умолчанию для свойства
 */
export const defaultsBullet: BulletProps = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
