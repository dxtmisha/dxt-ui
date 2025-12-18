import { ConstrBind } from '@dxtmisha/functional';
import { IconPropsBasic, IconValue } from '../Icon';
import { ButtonPropsBasic } from '../Button';
import { SkeletonPropsInclude } from '../Skeleton';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { TextClosePropsInclude } from '../../types/textTypes';
interface BarsPropsToken {
    action?: boolean;
}
export interface BarsPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Button extends ButtonPropsBasic = ButtonPropsBasic> extends LabelProps, DescriptionProps, SkeletonPropsInclude, TextClosePropsInclude {
    'backButton'?: ConstrBind<Button>;
    'backHide'?: boolean;
    'backActionHide'?: boolean;
    'bars'?: ConstrBind<Button>[];
    'actionLabel'?: LabelProps['label'];
    'actionDescription'?: DescriptionProps['description'];
    'actionBars'?: ConstrBind<Button>[];
    'buttonAttrs'?: ConstrBind<Button>;
    'iconBack'?: IconValue<Icon>;
    'iconClose'?: IconValue<Icon>;
    'modelAction'?: boolean;
    'onUpdate:action'?: (value: boolean) => void;
    'onUpdate:modelAction'?: (value: boolean) => void;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface BarsProps extends BarsPropsBasic, BarsPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsBars: {};
export {};
