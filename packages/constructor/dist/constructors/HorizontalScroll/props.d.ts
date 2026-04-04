type HorizontalScrollPropsToken = {
    flush?: boolean;
    align?: 'block' | 'center' | 'left' | 'right';
};
export type HorizontalScrollPropsBasic = {
    /** Styles/ Стили */
    /** Whether the scroll area is flush with the edges/ Прилегает ли область прокрутки к краям */
    flush?: boolean;
    /** Options/ Опции */
    /** HTML tag for the scroll element/ HTML-тег для элемента прокрутки */
    tag?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type HorizontalScrollProps = HorizontalScrollPropsBasic & HorizontalScrollPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsHorizontalScroll: {
    flush: boolean;
    align: string;
    tag: string;
};
export {};
