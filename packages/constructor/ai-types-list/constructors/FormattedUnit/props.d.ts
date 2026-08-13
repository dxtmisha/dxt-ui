// md5:bf03350c49542fcfd502ea19db2e3b0b
import { NumberOrString } from '@dxtmisha/functional';
type FormattedUnitPropsToken = {};
export type FormattedUnitPropsBasic = {
    /** Value to format / Значение для форматирования */
    value?: NumberOrString;
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
export type FormattedUnitProps = FormattedUnitPropsBasic & FormattedUnitPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsFormattedUnit: {
    formatting: boolean;
};
export {};
