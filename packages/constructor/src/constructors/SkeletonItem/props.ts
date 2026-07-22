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
  /** Tag name for the skeleton element / Имя тега для элемента скелета */
  tag?: string | any
  /** Properties for the HTML element / Свойства для HTML-элемента */
  props?: Record<string, any>
  /** Static text content to render instead of random text / Статическое текстовое содержимое для рендеринга вместо случайного текста */
  label?: string | number
  /** Expected length or range of lengths for the random text / Ожидаемая длина или диапазон длин для случайного текста */
  length?: string | number | [number, number]
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
