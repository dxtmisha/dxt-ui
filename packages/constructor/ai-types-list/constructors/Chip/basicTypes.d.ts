// md5:374114a64a6f77462985b4380631ea8a true
import { ConstrBind } from '@dxtmisha/functional';

export type ChipComponentInclude = {
    chip?: object;
};

export type ChipPropsInclude<Chip extends ChipPropsBasic = ChipPropsBasic> = {
    chipAttrs?: ConstrBind<Chip>;
};