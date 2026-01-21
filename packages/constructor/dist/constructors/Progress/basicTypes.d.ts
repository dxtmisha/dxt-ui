import { ConstrBind } from '@dxtmisha/functional';
import { ProgressPropsBasic } from './props';
export type ProgressComponentInclude = {
    progress?: object;
};
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
    loading?: boolean | ConstrBind<Progress>;
};
