type GridItemPropsToken = {
    base?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
};
export type GridItemPropsBasic = {};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type GridItemProps = GridItemPropsBasic & GridItemPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsGridItem: {
    base: string;
};
export {};
