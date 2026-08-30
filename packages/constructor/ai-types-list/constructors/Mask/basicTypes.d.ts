// md5:522d0d6386bdeada6cee01624ad86c8f true
import type { ConstrBind, GeoDate } from '@dxtmisha/functional';
export type MaskTypeItem = GeoDate | 'text' | 'number' | 'number-format' | 'currency';
export type MaskElementInput = HTMLInputElement | undefined;
export type MaskMatchItem = RegExp | string;
export type MaskFractionItem = string | boolean | number;
/** Configuration options for special mask item formatting and validation @keywords mask special item config */
export type MaskSpecialItem = {
  defaultValue?: string;
  rubber?: boolean;
  transitionChar?: string | string[];
  minLength?: number;
  maxLength?: number;
  match?: MaskMatchItem;
  pattern?: FieldPatternItemOrFunction;
  view?: string;
};
/** Resolved metadata for a special mask character @keywords mask special info metadata */
export type MaskSpecialInfo = {
  index: number;
  key: number;
  char: string;
};
export type MaskSpecialList = Record<string, MaskSpecialItem>;
export type MaskSpecialProp = string | string[] | MaskSpecialList;
/** Display properties for an individual mask character @keywords mask view item */
export type MaskViewItem = {
  className: string;
  value: string;
};
export type MaskViewList = MaskViewItem[];
export type MaskList = string | string[];
export type MaskEventData = FieldValidationItem;
/** Selection range state within a masked input element @keywords mask selection range */
export type MaskEventSelection = {
  target: HTMLInputElement;
  start: number;
  end: number;
  length: number;
};
export type MaskComponentInclude = {
  mask?: object;
};
/** Component props for configuring input masking behavior @keywords mask props include configuration */
export type MaskPropsInclude<Mask extends MaskPropsBasic = MaskPropsBasic> = ModelProps & {
  name?: string;
  value?: string;
  mask?: string | ConstrBind<Mask>;
  maskVisible?: boolean;
  maskNone?: boolean;
  currency?: string;
  currencyHide?: boolean;
  fraction?: MaskFractionItem;
  maskAttrs?: ConstrBind<Mask>;
};
/** Special control character used to delete mask items @keywords mask delete char */
export declare const MASK_CHAR_DELETE = "~";
/** Default placeholder character for mask view display @keywords mask view default placeholder */
export declare const MASK_VIEW_DEFAULT = "_";