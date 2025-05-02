import { type SkeletonPropsBasic, defaultsSkeleton } from '@dxt-ui/constructor/Skeleton'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

interface PropsToken {
  // :type [!] System label / Системная метка
  active?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties.<br>
 * Тип, описывающий входящие свойства.
 */
export interface SkeletonProps extends SkeletonPropsBasic, PropsToken {
}

/**
 * Default value for property.<br>
 * Значение по умолчанию для свойства.
 */
export const defaults: object = {
  ...defaultsSkeleton,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
