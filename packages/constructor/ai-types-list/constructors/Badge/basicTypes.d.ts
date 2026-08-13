// md5:cf71d32b9a37f21ce1fb59dbe56b5973 true
import { ConstrBind } from '@dxtmisha/functional';

/** Badge component configuration @keywords badge component include map */
export type BadgeComponentInclude = {
    badge?: object;
};

/** Props used to include and configure the Badge component @keywords badge props include configuration */
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = {
    badge?: string | number | ConstrBind<Badge>;
    badgeDot?: boolean;
    badgeAttrs?: ConstrBind<Badge>;
};