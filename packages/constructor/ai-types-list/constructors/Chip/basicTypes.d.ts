// md5:c7febdb8c9a2cb236c60249d89604bd4 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Component map for including the Chip component. @keywords chip, component, include */
export type ChipComponentInclude = {
    /** Chip component configuration. */
    chip?: object;
};

/** Props used to include and configure the Chip component. @keywords chip, props, include, attributes */
export type ChipPropsInclude<Chip extends ChipPropsBasic = ChipPropsBasic> = {
    /** Additional attributes for the Chip component. */
    chipAttrs?: ConstrBind<Chip>;
};