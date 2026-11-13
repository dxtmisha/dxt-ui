// md5:5ee31046c800812611e5c8790496973a true
import type { ConstrBind } from '@dxtmisha/functional';
export type ProgressComponentInclude = {
    progress?: object;
};
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
    loading?: boolean | ConstrBind<Progress>;
};