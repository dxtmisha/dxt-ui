// md5:7e29258368ad50271bfeda514132aec0 true
import type { NumberOrString } from '@dxtmisha/functional';

type InputCodeItemPropsToken = {
  disabled?: boolean;
  success?: boolean;
  error?: boolean;
  hide?: boolean;
};

export type InputCodeItemPropsBasic = TextSymbolPropsInclude & SkeletonPropsInclude & {
  /** Focus movement enabled @keywords focus, navigation */
  move?: boolean;
  /** Input name */
  name?: string;
  /** Item index */
  index?: NumberOrString;
  /** RegExp for input verification @keywords regex, validation */
  match?: RegExp;
  /** Virtual keyboard mode @keywords inputMode, keyboard */
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
  /** Placeholder text */
  placeholder?: string;
  /** Tab index for keyboard navigation */
  tabindex?: number | string;
};

/** Properties for code item input @keywords input-code, item, props */
export type InputCodeItemProps = InputCodeItemPropsBasic & InputCodeItemPropsToken;

/** Default property values for input code item @keywords defaults */
export declare const defaultsInputCodeItem: {
  move: boolean;
  name: string;
  match: RegExp;
  inputMode: string;
  placeholder: string;
};