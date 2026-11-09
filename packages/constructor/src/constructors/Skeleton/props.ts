/** Skeleton design token properties / Свойства дизайн-токенов Skeleton */
export type SkeletonPropsToken = {
  // :type [!] System label / Системная метка
  // :type [!] System label / Системная метка
}

/** Basic properties of the Skeleton component / Базовые свойства компонента Skeleton */
export type SkeletonPropsBasic = {
  /** Activates the skeleton mode / Активирует режим скелетона */
  active?: boolean
  /** Delay before showing / Задержка перед показом */
  delay?: number | string
  /** Delay before hiding / Задержка перед скрытием */
  delayHide?: number | string
  /** Makes content invisible upon activation / Делает контент невидимым при активации */
  invisible?: boolean
}

/** Type describing incoming properties / Тип, описывающий входящие свойства */
export type SkeletonProps = SkeletonPropsBasic & SkeletonPropsToken

/** Default value for property / Значение по умолчанию для свойства */
export const defaultsSkeleton = {
  delay: 0,
  delayHide: 0,
  invisible: true,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
