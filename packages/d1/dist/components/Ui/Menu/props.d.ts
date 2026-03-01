import { MenuPropsBasic } from '@dxtmisha/constructor/Menu';
import { ListProps } from '../List';
import { ListItemProps } from '../ListItem';
import { BarsProps } from '../Bars';
import { WindowProps } from '../Window';
export declare const propsValues: {
    barsAdaptive: string[];
};
export type PropsToken = {
    hideList?: boolean;
    barsAdaptive?: 'showAlways' | 'showSm' | 'showMd' | 'showLg' | 'showXl' | 'show2xl';
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type MenuProps = MenuPropsBasic<ListProps, ListItemProps, BarsProps, WindowProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
