import { ConstrBind } from '@dxtmisha/functional';
import { BadgePropsBasic } from './props';
export type BadgeComponentInclude = {
    badge?: object;
};
export interface BadgePropsInclude<Badge extends BadgePropsBasic = BadgePropsBasic> {
    badge?: string | number | ConstrBind<Badge>;
    badgeDot?: boolean;
}
