// md5:314691c53f050e6e4a3339d721b1cbc4 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Components required for Header integration. @keywords header, component, include */
export type HeaderComponentInclude = {
  /** Header component. */
  header?: object;
};

/** Inclusion props for Header configuration. @keywords header, props, include */
export type HeaderPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & {
  /** HTML tag for the header section. */
  tagHeader?: string;
  /** Attributes for Header. */
  headerAttrs?: ConstrBind<Header>;
};

/** Slots configuration for Header component. @keywords header, slots, include */
export interface HeaderSlotsInclude extends LabelAlternativeSlots, CaptionSlots {
  /** Slot for trailing content. */
  trailing?(props: any): any;
}