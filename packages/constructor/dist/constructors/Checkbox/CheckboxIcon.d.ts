import { FieldValueInclude } from '../../classes/Field/FieldValueInclude';
import { IconValue } from '../Icon';
import { CheckboxProps } from './props';
import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Class for working with icons for checkbox.
 *
 * Класс для работы с иконками для checkbox.
 */
export declare class CheckboxIcon {
    protected readonly props: CheckboxProps;
    protected readonly value: FieldValueInclude<boolean>;
    /**
     * Constructor
     * @param props input data /<br>входные данные
     * @param value object for working with values /<br>объект для работы со значениями
     */
    constructor(props: CheckboxProps, value: FieldValueInclude<boolean>);
    /**
     * Returns data for the icon.
     *
     * Возвращает данные для иконки.
     */
    readonly item: ComputedRef<ConstrBind<ItemList>>;
    /**
     * Returns the name of the icon.
     *
     * Возвращает название иконки.
     */
    protected getIcon(): IconValue | undefined;
}
