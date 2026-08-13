// md5:4ef09bbcedbc251fc67c0d20e2a0ca4c true
import { SnackbarItemPropsBasic } from '@dxtmisha/constructor/SnackbarItem';
/** Default color palette values @keywords propsValues, palette */
export declare const propsValues: {
    palette: string[];
};
type PropsToken = {
    success?: boolean;
    error?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Snackbar item component properties @keywords SnackbarItemProps, props */
export type SnackbarItemProps = SnackbarItemPropsBasic<IconProps, ButtonProps, ActionsProps> & PropsToken;
/** Default property values @keywords defaults, config */
export declare const defaults: object;
export {};