// md5:1d9540747a830cdd100fa95961203ffb true
import { type CollageBarPropsBasic } from '@dxtmisha/constructor/CollageBar';

export declare const propsValues: {
    position: string[];
};
type PropsToken = {
    selected?: boolean;
    position?: 'top' | 'bottom' | 'static';
};
/** Properties for the CollageBar component. @keywords collagebar, props */
export type CollageBarProps = CollageBarPropsBasic<IconProps, ButtonProps> & PropsToken;
/** Default property values for the CollageBar component. @keywords collagebar, defaults */
export declare const defaults: object;