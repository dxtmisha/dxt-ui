// md5:cc63e186d28be89792c5fd182ecc57f5 true
import type { NumberOrString } from '@dxtmisha/functional';

type FormattedUnitPropsToken = {};

export type FormattedUnitPropsBasic = {
  /** Value to format. */
  value?: NumberOrString;
  /** Unit of measurement. */
  unit?: string;
  /** Whether to format the value. */
  formatting?: boolean;
  /** Language for formatting. */
  language?: string;
};

/** Formatted unit component properties. @keywords formatted-unit, props */
export type FormattedUnitProps = FormattedUnitPropsBasic & FormattedUnitPropsToken;

/** Default values for formatted unit component. @keywords defaults, formatted-unit */
export declare const defaultsFormattedUnit: {
  formatting: boolean;
};