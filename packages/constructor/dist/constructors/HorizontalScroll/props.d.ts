type HorizontalScrollPropsToken = {
    align?: 'left' | 'center' | 'end';
};
export type HorizontalScrollPropsBasic = {
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
    align: string;
    tag: string;
};
export {};
