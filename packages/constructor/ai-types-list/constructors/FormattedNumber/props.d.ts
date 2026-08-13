// md5:7d8a67460a170ef51720a1bc38a1c217 true
import { NumberOrString } from '@dxtmisha/functional';
type FormattedNumberPropsToken = {};
export type FormattedNumberPropsBasic = {
    value?: NumberOrString;
    currency?: string;
    unit?: string;
    formatting?: boolean;
    language?: string;
};
export type FormattedNumberProps = FormattedNumberPropsBasic & FormattedNumberPropsToken;
/** Default properties for formatted number configuration. @keywords defaults, formatted number, configuration */
export declare const defaultsFormattedNumber: {
    formatting: boolean;
};
export {};