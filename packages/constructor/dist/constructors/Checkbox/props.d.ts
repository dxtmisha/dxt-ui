import { ConstrBind } from '@dxtmisha/functional';
import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { FieldInputCheckProps } from '../../types/fieldTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { ModelProps } from '../../types/modelTypes';
import { ImagePropsBasic } from '../Image';
import { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
type CheckboxPropsToken = {
    block?: boolean;
    adaptive?: 'rightAlways';
    container?: boolean;
    required?: boolean;
    itemCenter?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type CheckboxPropsBasic<Image extends ImagePropsBasic = ImagePropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps<boolean> & SkeletonPropsInclude & {
    /** Icon/ Иконка */
    /** Icon for the checked state/ Иконка для отмеченного состояния */
    iconCheckbox?: string | ConstrBind<Image> | null;
    /** Icon for the indeterminate state/ Иконка для неопределенного состояния */
    iconIndeterminate?: string | ConstrBind<Image> | null;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CheckboxProps = CheckboxPropsBasic & CheckboxPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsCheckbox: {
    block: boolean;
    itemCenter: boolean;
    valueVariantHide: string;
};
export {};
