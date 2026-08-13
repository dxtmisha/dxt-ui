// md5:1dce36bc0778178c80d820c6070ac157 true
import { MaskPropsBasic } from '@dxtmisha/constructor/Mask';
/** Property values for alignment and direction @keywords propsValues align dir */
export declare const propsValues: {
    align: string[];
    dir: string[];
};
type PropsToken = {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
};
/** Component mask properties combining basic and token props @keywords MaskProps MaskPropsBasic PropsToken */
export type MaskProps = MaskPropsBasic & PropsToken;
/** Default values for mask properties @keywords defaults object */
export declare const defaults: object;