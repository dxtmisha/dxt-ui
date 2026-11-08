// md5:4bffbcbf9e0bbd5ba9a7f0c53475f25c true
import type { ConstrBind } from '@dxtmisha/functional';

/** Icon load event payload. @keywords icon, event, load */
export type IconEventLoad = {
    /** Whether the icon is active. */
    isActive: boolean;
    /** Bindings for the primary icon. */
    iconBind: ConstrBind<ImagePropsBasic> | undefined;
    /** Bindings for the active icon state. */
    iconActiveBind: ConstrBind<ImagePropsBasic> | undefined;
};

/** Supported icon input value types. @keywords icon, value */
export type IconValue<Icon extends IconPropsBasic = IconPropsBasic> = string | ConstrBind<Icon> | null;

/** Component definition with an icon element. @keywords icon, component */
export type IconComponentInclude = {
    /** Custom icon component. */
    icon?: object;
};

/** Basic icon property mixin. @keywords icon, props, lite */
export type IconLitePropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = {
    /** Icon descriptor or value. */
    icon?: IconValue<Icon>;
};

/** Full icon properties including states and transforms. @keywords icon, props */
export type IconPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconLitePropsInclude<Icon> & {
    /** Selection state of the icon. */
    selected?: boolean;
    /** Rotation state of the icon. */
    iconTurn?: boolean;
    /** Visibility state of the icon. */
    iconHide?: boolean;
    /** Directional state of the icon. */
    iconDir?: boolean;
    /** Palette styling state of the icon. */
    iconPalette?: boolean;
    /** Additional icon binding attributes. */
    iconAttrs?: ConstrBind<Icon>;
};

/** Properties for components with both primary and trailing icons. @keywords icon, trailing, props */
export type IconTrailingPropsInclude<Icon extends IconPropsBasic = IconPropsBasic> = IconPropsInclude<Icon> & {
    /** Trailing icon descriptor or value. */
    iconTrailing?: IconValue<Icon>;
    /** Trailing icon specific rotation. */
    iconTrailingTurnOnly?: boolean;
    /** Trailing icon specific direction. */
    iconTrailingDirOnly?: boolean;
    /** Trailing icon specific palette. */
    iconTrailingPalette?: boolean;
};