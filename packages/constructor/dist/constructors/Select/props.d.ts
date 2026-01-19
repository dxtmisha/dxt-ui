import { ConstrBind } from '@dxtmisha/functional';
import { IconPropsBasic, IconValue } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { InputPropsBasic } from '../Input';
import { ProgressPropsBasic } from '../Progress';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { FieldSelectProps } from '../../types/fieldTypes';
interface SelectPropsToken {
}
export interface SelectPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Input extends InputPropsBasic = InputPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> extends FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress>, FieldSelectProps, MenuPropsInclude<Menu> {
    editValue?: boolean;
    hideList?: boolean;
    showSearch?: boolean;
    filterMode?: boolean;
    iconArrowDown?: IconValue<Icon>;
    iconSearch?: IconValue<Icon>;
    inputSearchAttrs?: ConstrBind<Input>;
}
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export interface SelectProps extends SelectPropsBasic, SelectPropsToken {
}
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSelect: {};
export {};
