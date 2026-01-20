import { type SkeletonPropsBasic, defaultsSkeleton } from '@dxtmisha/constructor/Skeleton'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

export type PropsToken = {
  // :type [!] System label / Системная метка
  active?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type SkeletonProps = SkeletonPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsSkeleton,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
