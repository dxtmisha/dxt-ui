// md5:840593ad94f8edcb1c3779416e971c4a true
import type { ConstrBind, ListList } from '@dxtmisha/functional';

export type SelectValuePropsToken = {};

export type SelectValuePropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Chip extends ChipPropsBasic = ChipPropsBasic> = EnabledProps & ChipPropsInclude<Chip> & {
  /** Placeholder text */
  placeholder?: string;
  /** Current selected value */
  value?: ListList;
  /** Whether multiple selection is enabled */
  multiple?: boolean;
  /** Whether to show the icon */
  iconShow?: boolean;
  /** Additional attributes for the icon */
  iconAttrs?: ConstrBind<Icon>;
  /** Icon for cancellation */
  iconCancel?: IconValue<Icon>;
};

export type SelectValueProps = SelectValuePropsBasic & SelectValuePropsToken;

/** Default values for select value properties @keywords default, select, value */
export declare const defaultsSelectValue: {};