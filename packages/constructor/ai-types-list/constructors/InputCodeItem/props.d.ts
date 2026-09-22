// md5:77a58646f99a6720ac3a81bde5e7230c true
import type { NumberOrString } from '@dxtmisha/functional';

type InputCodeItemPropsToken = {
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hide?: boolean;
};

export type InputCodeItemPropsBasic = TextSymbolPropsInclude & SkeletonPropsInclude & {
  /** Focus movement enabled */
  move?: boolean;
  /** Input name */
  name?: string;
  /** Item index */
  index?: NumberOrString;
  /** Autocomplete mode */
  autocomplete?: string;
  /** RegExp for input verification */
  match?: RegExp;
  /** Mode of virtual keyboard */
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
  /** Placeholder text */
  placeholder?: string;
  /** Tab index for keyboard navigation */
  tabindex?: number | string;
};

export type InputCodeItemProps = InputCodeItemPropsBasic & InputCodeItemPropsToken;

/** Default property values for input code item @keywords defaults, input-code-item */
export declare const defaultsInputCodeItem: {
  autocomplete: string;
  move: boolean;
  name: string;
  match: RegExp;
  inputMode: string;
  placeholder: string;
};