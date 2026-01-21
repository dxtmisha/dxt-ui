import { ConstrBind, ConstrItem } from '@dxtmisha/functional';
import { IconPropsBasic } from './props';
export type IconEventLoad = {
    isActive: boolean;
    iconBind: ConstrItem | undefined;
    iconActiveBind: ConstrItem | undefined;
};
export type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | null;
export type IconComponentInclude = {
    icon?: object;
};
export type IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = {
    icon?: IconValue<Icon>;
};
export type IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconLitePropsInclude<Icon> & {
    selected?: boolean;
    iconTurn?: boolean;
    iconHide?: boolean;
    iconDir?: boolean;
    iconPalette?: boolean;
    iconAttrs?: ConstrBind<Icon>;
};
export type IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & {
    iconTrailing?: IconValue<Icon>;
    iconTrailingTurnOnly?: boolean;
    iconTrailingDirOnly?: boolean;
    iconTrailingPalette?: boolean;
};
