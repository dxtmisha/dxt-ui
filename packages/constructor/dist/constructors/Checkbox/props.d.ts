import { LabelProps } from '../../types/labelTypes';
import { DescriptionProps } from '../../types/descriptionTypes';
import { FieldInputCheckProps } from '../../types/fieldTypes';
import { EnabledProps } from '../../types/enabledTypes';
import { ModelProps } from '../../types/modelTypes';
import { IconPropsBasic, IconValue } from '../Icon';
import { FieldMessagePropsBasic, FieldMessagePropsInclude } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic, ProgressPropsInclude } from '../Progress';
import { SkeletonPropsInclude } from '../Skeleton';
type CheckboxPropsToken = {
    required?: boolean;
    block?: boolean;
    itemCenter?: boolean;
    right?: boolean;
    focus?: boolean;
    disabled?: boolean;
};
export type CheckboxPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic> = LabelProps & DescriptionProps & FieldMessagePropsInclude<FieldMessage, FieldCounter> & FieldInputCheckProps & ProgressPropsInclude<Progress> & EnabledProps & ModelProps & SkeletonPropsInclude & {
    iconCheckbox?: IconValue<Icon>;
    iconIndeterminate?: IconValue<Icon>;
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
    itemCenter: boolean;
    valueVariantHide: string;
};
export {};
