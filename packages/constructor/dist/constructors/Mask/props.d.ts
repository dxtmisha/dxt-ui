import { FieldPatternItemOrFunction } from '../../types/fieldTypes';
import { MaskFractionItem, MaskList, MaskMatchItem, MaskSpecialProp, MaskTypeItem } from './basicTypes';
interface MaskPropsToken {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
}
export interface MaskPropsBasic {
    name?: string;
    value?: string | number;
    valueDefault?: string | number;
    currency?: string;
    currencyHide?: boolean;
    fullOnly?: boolean;
    mask?: MaskList;
    special?: MaskSpecialProp;
    match?: MaskMatchItem;
    groupSave?: boolean;
    pattern?: FieldPatternItemOrFunction;
    check?: FieldPatternItemOrFunction;
    fraction?: MaskFractionItem;
    type?: MaskTypeItem;
    view?: string;
    inputAttrs?: Partial<HTMLInputElement>;
    language?: string;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface MaskProps extends MaskPropsBasic, MaskPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMask: {
    visible: boolean;
    special: string;
    match: RegExp;
    type: string;
    groupSave: boolean;
    view: string;
};
export {};
