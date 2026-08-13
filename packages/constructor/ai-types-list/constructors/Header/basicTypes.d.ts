// md5:b5ba7216534dde139f5954c964a85891 true
import { ConstrBind } from '@dxtmisha/functional';

export type HeaderComponentInclude = {
    header?: object;
};

export type HeaderPropsInclude<Icon extends IconPropsBasic = IconPropsBasic, Header extends HeaderPropsBasic = HeaderPropsBasic> = LabelProps & CaptionProps & IconPropsInclude<Icon> & {
    tagHeader?: string;
    headerAttrs?: ConstrBind<Header>;
};

export interface HeaderSlotsInclude extends LabelAlternativeSlots, CaptionSlots {
    trailing?(props: any): any;
}