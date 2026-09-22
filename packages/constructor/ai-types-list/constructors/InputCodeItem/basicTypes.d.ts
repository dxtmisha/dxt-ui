// md5:04ed221bf9653068cedc59a24632bf47 true
import type { ConstrBind } from '@dxtmisha/functional';

export type InputCodeItemElement = HTMLElement | Element | null | undefined;

export type InputCodeItemComponentInclude = {
  inputCodeItem?: object;
};

/** Inclusion props for configuring the InputCodeItem component @keywords input-code, props, include */
export type InputCodeItemPropsInclude<InputCodeItem extends InputCodeItemPropsBasic = InputCodeItemPropsBasic> = SkeletonPropsInclude & {
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Whether to hide the input */
  hide?: boolean;
  /** Input field name */
  name?: string;
  /** Autocomplete mode */
  autocomplete?: InputCodeItemPropsBasic['autocomplete'];
  /** Validation regex pattern */
  match?: InputCodeItemPropsBasic['match'];
  /** Virtual keyboard input mode */
  inputMode?: InputCodeItemPropsBasic['inputMode'];
  /** Input placeholder text */
  placeholder?: string;
  /** Additional attributes for InputCodeItem */
  itemAttrs?: ConstrBind<InputCodeItem>;
};