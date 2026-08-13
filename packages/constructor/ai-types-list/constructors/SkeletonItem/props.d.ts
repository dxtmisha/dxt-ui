// md5:6e21e23b52a9142889738a8739ad4f77
/**
 * Type describing style tokens.
 *
 * Тип, описывающий токены стиля.
 */
type SkeletonItemPropsToken = {
    text?: boolean;
    textVariant?: boolean;
    background?: boolean;
    backgroundVariant?: boolean;
    border?: boolean;
    borderVariant?: boolean;
};
/**
 * Interface representing incoming properties of the basic component.
 *
 * Интерфейс, представляющий входящие свойства базового компонента.
 */
export type SkeletonItemPropsBasic = {
    /** Tag name for the skeleton element / Имя тега для элемента скелета */
    tag?: string | any;
    /** Attributes for the HTML element / Атрибуты для HTML-элемента */
    itemAttrs?: Record<string, any>;
    /** Static text content to render instead of random text / Статическое текстовое содержимое для рендеринга вместо случайного текста */
    label?: string | number;
    /** Expected length or range of lengths for the random text / Ожидаемая длина или диапазон длин для случайного текста */
    length?: string | number | [number, number];
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SkeletonItemProps = SkeletonItemPropsBasic & SkeletonItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSkeletonItem: {
    tag: string;
    length: number;
};
export {};
