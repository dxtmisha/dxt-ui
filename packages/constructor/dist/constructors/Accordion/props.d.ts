import { ConstrBind } from '@dxtmisha/functional';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { IconLitePropsInclude, IconPropsBasic, IconValue } from '../Icon';
import { CellPropsBasic } from '../Cell';
import { MotionTransformPropsBasic, MotionTransformPropsInclude } from '../MotionTransform';
interface AccordionPropsToken {
    divider?: boolean;
}
export interface AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> extends LabelProps, DescriptionProps, IconLitePropsInclude<Icon>, MotionTransformPropsInclude<MotionTransform> {
    'cellAttrs'?: ConstrBind<Cell>;
    'iconArrowDown'?: IconValue<Icon>;
    'modelOpen'?: boolean;
    'onUpdate:open'?: (value: boolean) => void;
    'onUpdate:modelOpen'?: (value: boolean) => void;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface AccordionProps extends AccordionPropsBasic, AccordionPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsAccordion: {
    divider: boolean;
    clickOpen: boolean;
    autoClose: boolean;
};
export {};
