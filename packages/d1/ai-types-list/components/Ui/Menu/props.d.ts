// md5:924a6564a1717941edaf8ec74664702c true
import { MenuPropsBasic } from '@dxtmisha/constructor/Menu';
export declare const propsValues: {
    barsAdaptive: string[];
};
export type PropsToken = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways' | 'showSm' | 'showMd' | 'showLg' | 'showXl' | 'show2xl';
};
/** Menu component properties combining base menu and token options @keywords menu properties props */
export type MenuProps = MenuPropsBasic<ListProps, ListItemProps, BarsProps, WindowProps> & PropsToken;
export declare const defaults: object;