import { ActionsPropsBasic } from '@dxtmisha/constructor/Actions';
import { ButtonProps } from '../Button';
export declare const propsValues: {
    align: string[];
    flexible: string[];
    padding: string[];
};
export type PropsToken = {
    align?: 'none' | 'center' | 'left' | 'right' | 'block' | 'auto';
    flexible?: 'adaptiveSm' | 'adaptiveMd' | 'adaptiveLg' | 'adaptiveXl' | 'adaptive2xl' | 'containerSm' | 'containerMd' | 'containerLg' | 'containerXl' | 'container2xl';
    padding?: 'sm' | 'md' | 'lg' | 'ySm' | 'yMd' | 'yLg' | 'none';
    paddingByIndent?: boolean;
};
/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type ActionsProps = ActionsPropsBasic<ButtonProps> & PropsToken;
/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export declare const defaults: object;
