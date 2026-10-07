// md5:93d3040f40796d4def517fda2da49d5a true
import type { ConstrBind } from '@dxtmisha/functional';
export type InputFileItemAppearanceType = 'list' | 'compact' | 'tile';
export type InputFileItemStatusType = 'uploading' | 'uploaded' | 'error' | 'idle';
export type InputFileItemComponentInclude = {
    inputFileItem?: object;
};
export type InputFileItemPropsInclude<Item extends InputFileItemPropsBasic = InputFileItemPropsBasic> = {
    inputFileItemAttrs?: ConstrBind<Item>;
};