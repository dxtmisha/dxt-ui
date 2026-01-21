import { ConstrBind } from '@dxtmisha/functional';
import { BadgePropsBasic } from './props';
export type BadgeComponentInclude = {
    badge?: object;
};
export type BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> = {
    badge?: string | number | ConstrBind<Badge>;
    badgeDot?: boolean;
};
