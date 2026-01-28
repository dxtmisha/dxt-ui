import { ListPropsBasic } from '@dxtmisha/constructor/List';
import { IconProps } from '../Icon';
import { ListItemProps } from '../ListItem';
export declare const propsValues: {
    axis: string[];
};
export type PropsToken = {
    axis?: 'x' | 'y';
    divider?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ListProps = ListPropsBasic<IconProps, ListItemProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
