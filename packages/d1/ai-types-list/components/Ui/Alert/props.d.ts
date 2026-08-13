// md5:bdd9670fd171950deba4f87e675ee7ce true
import { AlertPropsBasic } from '@dxtmisha/constructor/Alert';
/** Available property values and palettes. @keywords propsValues, palette */
export declare const propsValues: {
    palette: string[];
};
type PropsToken = {
    itemCenter?: boolean;
    primary?: boolean;
    secondary?: boolean;
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Component properties combining base alert props and design tokens. @keywords AlertProps, PropsToken */
export type AlertProps = AlertPropsBasic<IconProps, AlertLinkProps, ActionsProps, ButtonProps> & PropsToken;
/** Default configuration object for alert properties. @keywords defaults, config */
export declare const defaults: object;