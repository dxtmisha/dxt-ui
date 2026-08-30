// md5:0bca588349b629debc4809dabd27efb7 true
import { type SnackbarItemPropsBasic } from '@dxtmisha/constructor/SnackbarItem';

export declare const propsValues: {
  palette: string[];
};

type PropsToken = {
  success?: boolean;
  error?: boolean;
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

/** Snackbar item component properties. @keywords snackbar, item, notification, props */
export type SnackbarItemProps = SnackbarItemPropsBasic<IconProps, ButtonProps, ActionsProps> & PropsToken;

export declare const defaults: object;