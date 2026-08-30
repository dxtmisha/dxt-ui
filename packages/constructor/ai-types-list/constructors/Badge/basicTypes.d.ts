// md5:44b8aef37ac43281571e6b8f7add9210 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Component map for including the Badge component. @keywords badge, component, include */
export type BadgeComponentInclude = {
    /** Badge component configuration. */
    badge?: object;
};

/** Props for including and configuring the Badge component. @keywords badge, props, include */
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = {
    /** Badge value or properties. */
    badge?: string | number | ConstrBind<Badge>;
    /** Whether to show only a dot. */
    badgeDot?: boolean;
    /** Additional attributes for Badge component. */
    badgeAttrs?: ConstrBind<Badge>;
};