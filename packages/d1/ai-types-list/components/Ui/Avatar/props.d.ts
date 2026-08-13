// md5:b92ce427d0fc4210780706df3cb17490 true
import { AvatarPropsBasic } from '@dxtmisha/constructor/Avatar';
/** Component property values for size and palette @keywords props, values, size, palette */
export declare const propsValues: {
    size: string[];
    palette: string[];
};
type PropsToken = {
    focus?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    primary?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
export type AvatarProps = AvatarPropsBasic<ImageProps, BadgeProps> & PropsToken;
/** Default property values @keywords defaults, object */
export declare const defaults: object;
export {};