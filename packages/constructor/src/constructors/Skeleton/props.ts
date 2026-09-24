export type SkeletonPropsToken = {
  // :type [!] System label / Системная метка
  active?: boolean
  // :type [!] System label / Системная метка
}

export type SkeletonPropsBasic = {
  /** Delay before showing / Задержка перед показом */
  delay?: number | string
  /** Delay before hiding / Задержка перед скрытием */
  delayHide?: number | string
  /** Makes content invisible upon activation / Делает контент невидимым при активации */
  invisible?: boolean
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
  delay: 0,
  delayHide: 0,
  invisible: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
