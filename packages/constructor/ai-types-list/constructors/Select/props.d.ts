// md5:55fb3a43628249e327d0be51cb9296c7
import { IconPropsBasic, IconValue } from '../Icon';
import { FieldPropsBasic, FieldPropsInclude } from '../Field';
import { FieldLabelPropsBasic } from '../FieldLabel';
import { FieldMessagePropsBasic } from '../FieldMessage';
import { FieldCounterPropsBasic } from '../FieldCounter';
import { ProgressPropsBasic } from '../Progress';
import { MenuPropsBasic, MenuPropsInclude } from '../Menu';
import { FieldSelectProps } from '../../types/fieldTypes';
export type SelectPropsToken = {};
export type SelectPropsBasic<Icon extends IconPropsBasic = IconPropsBasic, Field extends FieldPropsBasic = FieldPropsBasic, FieldLabel extends FieldLabelPropsBasic = FieldLabelPropsBasic, FieldMessage extends FieldMessagePropsBasic = FieldMessagePropsBasic, FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic, Progress extends ProgressPropsBasic = ProgressPropsBasic, Menu extends MenuPropsBasic = MenuPropsBasic> = FieldPropsInclude<Icon, Field, FieldLabel, FieldMessage, FieldCounter, Progress> & FieldSelectProps & MenuPropsInclude<Menu> & {
    /** Whether the value is editable/ Редактируемое ли значение */
    editValue?: boolean;
    /** Whether to hide the list/ Скрывать ли список */
    hideList?: boolean;
    /** Whether to show the search input/ Показывать ли поле поиска */
    showSearch?: boolean;
    /** Whether to enabled filtering mode/ Включен ли режим фильтрации */
    filterMode?: boolean;
    /** Icon for the down arrow/ Иконка для стрелки вниз */
    iconArrowDown?: IconValue<Icon>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type SelectProps = SelectPropsBasic & SelectPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsSelect: {};
