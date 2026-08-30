// md5:227c73ae0ca46000768ebe1c99374bb0 true
import type { ConstrBind, ConstrItem } from '@dxtmisha/functional';

/** Icon load event payload. @keywords icon, event, load */
export type IconEventLoad = {
    isActive: boolean;
    iconBind: ConstrItem | undefined;
    iconActiveBind: ConstrItem | undefined;
};

/** Value definition for an icon, supporting string identifiers or property bindings. @keywords icon, value, bind */
export type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | null;

/** Inclusion contract for an icon component instance. @keywords icon, component */
export type IconComponentInclude = {
    icon?: object;
};

/** Basic icon property definitions. @keywords icon, lite, props */
export type IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = {
    icon?: IconValue<Icon>;
};

/** Comprehensive icon properties including state, orientation, and binding configurations. @keywords icon, props, turn, hide, dir, palette */
export type IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconLitePropsInclude<Icon> & {
    selected?: boolean;
    iconTurn?: boolean;
    iconHide?: boolean;
    iconDir?: boolean;
    iconPalette?: boolean;
    iconAttrs?: ConstrBind<Icon>;
};

/** Trailing icon properties extending standard icon configuration. @keywords icon, trailing, turn, dir, palette */
export type IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & {
    iconTrailing?: IconValue<Icon>;
    iconTrailingTurnOnly?: boolean;
    iconTrailingDirOnly?: boolean;
    iconTrailingPalette?: boolean;
};