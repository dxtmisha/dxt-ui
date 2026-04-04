import { ConstrBind } from '@dxtmisha/functional';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { IconLitePropsInclude, IconPropsBasic, IconValue } from '../Icon';
import { CellPropsBasic } from '../Cell';
import { MotionTransformPropsBasic, MotionTransformPropsInclude } from '../MotionTransform';
import { ModelPropsOpen } from '../../types/modelTypes';
export type AccordionPropsToken = {
    divider?: boolean;
};
export type AccordionPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Cell extends CellPropsBasic = CellPropsBasic, MotionTransform extends MotionTransformPropsBasic = MotionTransformPropsBasic> = LabelProps & DescriptionProps & IconLitePropsInclude<Icon> & MotionTransformPropsInclude<MotionTransform> & ModelPropsOpen & {
    /** Additional attributes for the header cell component/ Дополнительные атрибуты для компонента ячейки заголовка */
    cellAttrs?: ConstrBind<Cell>;
    /** Icon for the dropdown indicator/ Иконка для индикатора раскрывающегося списка */
    iconArrowDown?: IconValue<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type AccordionProps = AccordionPropsBasic & AccordionPropsToken;
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
