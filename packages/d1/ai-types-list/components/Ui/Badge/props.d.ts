// md5:789574f79de152eab8eaf3d7cae63406 true
import { type BadgePropsBasic } from '@dxtmisha/constructor/Badge';

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

/** Incoming properties for the Badge component. @keywords badge, props, token */
export type BadgeProps = BadgePropsBasic<IconProps> & PropsToken;

export declare const defaults: object;