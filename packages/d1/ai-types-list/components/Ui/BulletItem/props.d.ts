// md5:6da5c93e7a6183e46b31790cadfbdae4 true
import { BulletItemPropsBasic } from '@dxtmisha/constructor/BulletItem';
/** Default property values for size and palette @keywords props values size palette */
export declare const propsValues: {
    size: string[];
    palette: string[];
};
export type PropsToken = {
    size?: 'sm' | 'md' | 'lg';
    palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white';
};
/** Bullet item component properties @keywords bullet item props token */
export type BulletItemProps = BulletItemPropsBasic & PropsToken;
/** Default object values for bullet item @keywords defaults object */
export declare const defaults: object;