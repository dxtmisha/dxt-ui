// md5:8ed5c1ee01d93829adcdfc8ed8593586 true
import { type AvatarPropsBasic } from '@dxtmisha/constructor/Avatar';

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

/** Avatar component properties combining base avatar, image, badge, and token styles. @keywords avatar, props */
export type AvatarProps = AvatarPropsBasic<ImageProps, BadgeProps> & PropsToken;

/** Default property values for the Avatar component. @keywords avatar, defaults */
export declare const defaults: object;