// md5:7c0b7b133524dfc4f09b5177bc70dc51 true
import { type MenuPropsBasic } from '@dxtmisha/constructor/Menu';

/** Menu property option values. @keywords menu, propsValues, adaptive */
export declare const propsValues: {
    barsAdaptive: string[];
};
type PropsToken = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways' | 'showSm' | 'showMd' | 'showLg' | 'showXl' | 'show2xl';
};
/** Menu component incoming properties. @keywords menu, properties, props */
export type MenuProps = MenuPropsBasic<ListProps, ListItemProps, BarsProps, WindowProps> & PropsToken;
/** Default property values for Menu component. @keywords menu, defaults */
export declare const defaults: object;