// md5:004100a7003ce881facb714377b11acf true
import type { ConstrBind } from '@dxtmisha/functional';

/** Progress component inclusion configuration. @keywords progress, component, include */
export type ProgressComponentInclude = {
    /** Progress component configuration. */
    progress?: object;
};

/** Progress and loading property inclusion contract. @keywords progress, props, loading, include */
export type ProgressPropsInclude<Progress extends ProgressPropsBasic = ProgressPropsBasic> = {
    /** Loading state flag or progress configuration binding. */
    loading?: boolean | ConstrBind<Progress>;
};