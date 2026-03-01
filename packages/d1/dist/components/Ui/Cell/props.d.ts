import { CellPropsBasic } from '@dxtmisha/constructor/Cell';
import { IconProps } from '../Icon';
import { ProgressProps } from '../Progress';
export declare const propsValues: {
    dividerLabel: string[];
    padding: string[];
};
export type PropsToken = {
    focus?: boolean;
    selected?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    dynamic?: boolean;
    dynamicHover?: boolean;
    divider?: boolean;
    dividerLabel?: 'always' | 'none' | 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl' | 'containerSm' | 'containerMd' | 'containerLg' | 'containerXl' | 'container2xl';
    iconTop?: boolean;
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CellProps = CellPropsBasic<IconProps, ProgressProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
