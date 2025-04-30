interface SkeletonPropsToken {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

export interface SkeletonPropsBasic {
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface SkeletonProps extends SkeletonPropsBasic, SkeletonPropsToken {
}

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
