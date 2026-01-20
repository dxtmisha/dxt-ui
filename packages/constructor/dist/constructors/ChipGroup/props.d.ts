import { ConstrBind, ListSelectedList } from '@dxtmisha/functional';
import { ChipPropsBasic } from '../Chip';
import { ChipGroupData } from './basicTypes';
import { ModelPropsSelected } from '../../types/modelTypes';
export type ChipGroupPropsToken = {};
export type ChipGroupPropsBasic<Chip extends ChipPropsBasic = ChipPropsBasic> = ModelPropsSelected<ListSelectedList> & {
    readonly?: boolean;
    selected?: ListSelectedList;
    list?: ChipGroupData;
    iconWhenSelected?: boolean;
    keyLabel?: string;
    keyValue?: string;
    chipAttrs?: ConstrBind<Chip>;
};
/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type ChipGroupProps = ChipGroupPropsBasic & ChipGroupPropsToken;
/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsChipGroup: {
    readonly: boolean;
};
