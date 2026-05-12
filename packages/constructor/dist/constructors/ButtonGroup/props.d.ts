import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from '../Button';
import { AreaPropsInclude } from '../../types/areaTypes';
type ButtonGroupPropsToken = {
    orientation?: string | 'horizontal' | 'vertical';
    wrap?: boolean;
};
export type ButtonGroupPropsBasic<Button extends ButtonPropsBasic = ButtonPropsBasic> = AreaPropsInclude & {
    /** Primary list of button configurations/ Основной список конфигураций кнопок */
    list?: ConstrBind<Button>[];
    /** Shared attributes for buttons/ Общие атрибуты для кнопок */
    buttonAttrs?: ConstrBind<Button>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ButtonGroupProps = ButtonGroupPropsBasic & ButtonGroupPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsButtonGroup: {
    orientation: string;
    area: string;
};
export {};
