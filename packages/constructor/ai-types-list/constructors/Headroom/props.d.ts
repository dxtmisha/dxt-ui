// md5:2dc27c4b45a6a5741150ab878c592a96
import { HeadroomPropsInclude } from '../../types/headroomTypes';
/**
 * Type describing token properties.
 *
 * Тип, описывающий токен-свойства.
 */
type HeadroomPropsToken = {
    disappears?: boolean;
};
/**
 * Type describing basic properties.
 *
 * Тип, описывающий базовые свойства.
 */
export type HeadroomPropsBasic = HeadroomPropsInclude & {
    /** HTML tag for the element / HTML-тег для элемента */
    tag?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type HeadroomProps = HeadroomPropsBasic & HeadroomPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsHeadroom: {
    tag: string;
    transform: number;
};
export {};
