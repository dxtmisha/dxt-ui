// md5:e66e580730150ce6541c4960f3019984 true
import { type BulletItemPropsBasic } from '@dxtmisha/constructor/BulletItem';

export declare const propsValues: {
    size: string[];
    palette: string[];
};

type PropsToken = {
    size?: 'sm' | 'md' | 'lg';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};

/** Bullet item component properties. @keywords bullet, item, props */
export type BulletItemProps = BulletItemPropsBasic & PropsToken;

export declare const defaults: object;