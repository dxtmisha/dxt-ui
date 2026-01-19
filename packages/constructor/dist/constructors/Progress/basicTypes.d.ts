import { ConstrBind } from '@dxtmisha/functional';
import { ProgressPropsBasic } from './props';
export type ProgressComponentInclude = {
    progress?: object;
};
export interface ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> {
    loading?: boolean | ConstrBind<Progress>;
}
