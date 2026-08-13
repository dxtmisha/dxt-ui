// md5:e1c3fb91512194be8a24bbc80b1c8bd3 true
import { ConstrBind } from '@dxtmisha/functional';

/** Progress component configuration @keywords ProgressComponentInclude progress component configuration */
export type ProgressComponentInclude = {
    progress?: object;
};

/** Progress properties inclusion interface @keywords ProgressPropsInclude loading progress properties */
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
    loading?: boolean | ConstrBind<Progress>;
};