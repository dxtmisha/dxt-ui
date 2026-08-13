// md5:bf03350c49542fcfd502ea19db2e3b0b true
import { NumberOrString } from '@dxtmisha/functional';
type FormattedUnitPropsToken = {};
export type FormattedUnitPropsBasic = {
    value?: NumberOrString;
    unit?: string;
    formatting?: boolean;
    language?: string;
};
export type FormattedUnitProps = FormattedUnitPropsBasic & FormattedUnitPropsToken;
/** Default value for property. @keywords default, formatted, unit */
export declare const defaultsFormattedUnit: {
    formatting: boolean;
};
export {};