// md5:08b50b53e64221fbce4f3d886350b62e
import { DescriptionProps } from '../../types/descriptionTypes';
type TextDescriptionPropsToken = {};
export type TextDescriptionPropsBasic = DescriptionProps & {
    /** html tag for wrapping the description/html тег для оборачивания описания */
    tag?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type TextDescriptionProps = TextDescriptionPropsBasic & TextDescriptionPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsTextDescription: {
    tag: string;
};
export {};
