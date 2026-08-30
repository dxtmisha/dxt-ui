// md5:f0960464112f4b577589ccfb036dd3ad true
import { type AlertPropsBasic } from '@dxtmisha/constructor/Alert';

export declare const propsValues: {
  palette: string[];
};
type PropsToken = {
  itemCenter?: boolean;
  primary?: boolean;
  secondary?: boolean;
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Alert component properties. @keywords alert, props */
export type AlertProps = AlertPropsBasic<IconProps, AlertLinkProps, ActionsProps, ButtonProps> & PropsToken;
/** Default property values for the Alert component. @keywords alert, defaults */
export declare const defaults: object;