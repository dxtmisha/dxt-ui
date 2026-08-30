// md5:e1bd294449e91e385045575467c0f5ee true
import type { NumberOrString } from '@dxtmisha/functional';

type FormattedNumberPropsToken = {};

export type FormattedNumberPropsBasic = {
    /** Value to format. */
    value?: NumberOrString;
    /** Currency code for formatting. */
    currency?: string;
    /** Unit of measurement. */
    unit?: string;
    /** Whether to format the value. */
    formatting?: boolean;
    /** Language for formatting. */
    language?: string;
};

/** Properties for the formatted number component. @keywords formatted number, props */
export type FormattedNumberProps = FormattedNumberPropsBasic & FormattedNumberPropsToken;

/** Default property values for formatted number. @keywords defaults, formatted number */
export declare const defaultsFormattedNumber: {
    formatting: boolean;
};