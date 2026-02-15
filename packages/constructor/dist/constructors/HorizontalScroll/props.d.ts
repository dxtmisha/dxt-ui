type HorizontalScrollPropsToken = {
    flush?: boolean;
    align?: 'block' | 'center' | 'left' | 'right';
};
export type HorizontalScrollPropsBasic = {
    flush?: boolean;
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
