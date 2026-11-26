import type { Component } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

/**
 * Type describing style tokens.
 *
 * Тип, описывающий токены стиля.
 */
type SkeletonItemPropsToken = {
  // :type [!] System label / Системная метка
  text?: boolean
  textVariant?: boolean
  background?: boolean
  backgroundVariant?: boolean
  border?: boolean
  borderVariant?: boolean
  // :type [!] System label / Системная метка
}

/**
 * Interface representing incoming properties of the basic component.
 *
 * Интерфейс, представляющий входящие свойства базового компонента.
 */
export type SkeletonItemPropsBasic = {
  /** Tag name or component for the skeleton element / Имя тега или компонент для элемента скелетона */
  tag?: string | Component
  /** Attributes for the HTML element / Атрибуты для HTML-элемента */
  itemAttrs?: ConstrBind
  /** Static text content to render instead of random text / Статическое текстовое содержимое для рендеринга вместо случайного текста */
  label?: string | number
  /** Expected length or range of lengths for the random text / Ожидаемая длина или диапазон длин для случайного текста */
  length?: string | number | readonly [number, number]
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SkeletonItemProps = SkeletonItemPropsBasic & SkeletonItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsSkeletonItem = {
  tag: 'div',
  length: 3,
  ...{
    // :default [!] System label / Системная метка
    // :default [!] System label / Системная метка
  }
}
