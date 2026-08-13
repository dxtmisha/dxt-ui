// md5:92aef72a431d2de02bcbcc6352e831f0 true
import { BadgePropsBasic } from '@dxtmisha/constructor/Badge';
/** @keywords propsValues, badge, values */
export declare const propsValues: {
    overlap: string[];
    vertical: string[];
    horizontal: string[];
    size: string[];
    palette: string[];
};
type PropsToken = {
    selected?: boolean;
    hide?: boolean;
    dot?: boolean;
    overlap?: 'rectangular' | 'circular' | 'static';
    vertical?: 'top' | 'center' | 'bottom';
    horizontal?: 'right' | 'center' | 'left';
    primary?: boolean;
    secondary?: boolean;
    outline?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'none';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** @keywords BadgeProps, properties, token */
export type BadgeProps = BadgePropsBasic<IconProps> & PropsToken;
/** @keywords defaults, object */
export declare const defaults: object;
export {};