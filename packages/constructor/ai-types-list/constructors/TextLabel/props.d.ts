// md5:dea8a2e16aaa6e37761f90c131b9497b
import { LabelProps } from '../../types/labelTypes';
type TextLabelPropsToken = {};
export type TextLabelPropsBasic = LabelProps & {
    /** html tag for wrapping the text/html тег для оборачивания текста */
    tag?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TextLabelProps = TextLabelPropsBasic & TextLabelPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTextLabel: {
    tag: string;
};
export {};
