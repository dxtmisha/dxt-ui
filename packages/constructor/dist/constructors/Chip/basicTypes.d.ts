import { ConstrBind } from '@dxtmisha/functional';
import { ChipPropsBasic } from './props';
export type ChipComponentInclude = {
    chip?: object;
};
export interface ChipPropsInclude<Chip extends ChipPropsBasic = ChipPropsBasic> {
    chipAttrs?: ConstrBind<Chip>;
}
