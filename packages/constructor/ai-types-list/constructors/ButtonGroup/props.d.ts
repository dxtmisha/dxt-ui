// md5:99b7e0180f08d8e3375c057095ef6bc8
import { ConstrBind } from '@dxtmisha/functional';
import { ButtonPropsBasic } from '../Button';
import { AreaPropsInclude } from '../../types/areaTypes';
type ButtonGroupPropsToken = {
    orientation?: 'horizontal' | 'vertical';
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
