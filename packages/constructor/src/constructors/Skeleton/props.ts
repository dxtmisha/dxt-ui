export type SkeletonPropsToken = {
  // :type [!] System label / Системная метка
  active?: boolean
  // :type [!] System label / Системная метка
}

export type SkeletonPropsBasic = {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SkeletonProps = SkeletonPropsBasic & SkeletonPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSkeleton = {
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
