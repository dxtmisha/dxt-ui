// md5:7d8a67460a170ef51720a1bc38a1c217
import { NumberOrString } from '@dxtmisha/functional';
type FormattedNumberPropsToken = {};
export type FormattedNumberPropsBasic = {
    /** Value to format / Значение для форматирования */
    value?: NumberOrString;
    /** Currency code for formatting / Код валюты для форматирования */
    currency?: string;
    /** Unit of measurement / Единица измерения */
    unit?: string;
    /** Whether to format the value / Требуется ли форматировать значение */
    formatting?: boolean;
    /** Language for formatting / Язык для форматирования */
    language?: string;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type FormattedNumberProps = FormattedNumberPropsBasic & FormattedNumberPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFormattedNumber: {
    formatting: boolean;
};
export {};
