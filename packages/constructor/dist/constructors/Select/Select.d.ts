import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { FieldElementInclude } from '../../classes/field/FieldElementInclude';
import { FieldChangeInclude } from '../../classes/field/FieldChangeInclude';
import { FieldValueInclude } from '../../classes/field/FieldValueInclude';
import { FieldCodeInclude } from '../../classes/field/FieldCodeInclude';
import { FieldValidationInclude } from '../../classes/field/FieldValidationInclude';
import { FieldAttributesInclude } from '../../classes/field/FieldAttributesInclude';
import { FieldEventInclude } from '../../classes/field/FieldEventInclude';
import { MenuInclude } from '../Menu';
import { FieldInclude } from '../Field/FieldInclude';
import { SelectInput } from './SelectInput';
import { SelectFilter } from './SelectFilter';
import { SelectComponents, SelectEmits, SelectSlots } from './types';
import { SelectProps } from './props';
import { IconValue } from '../Icon';
/**
 * Select
 */
export declare class Select {
    protected readonly props: SelectProps;
    protected readonly refs: ToRefs<SelectProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<SelectComponents, SelectProps> | undefined;
    protected readonly slots?: SelectSlots | undefined;
    protected readonly emits?: ConstrEmit<SelectEmits> | undefined;
    readonly attributes: FieldAttributesInclude;
    readonly elementItem: FieldElementInclude;
    readonly change: FieldChangeInclude;
    readonly value: FieldValueInclude;
    readonly code: FieldCodeInclude;
    readonly validation: FieldValidationInclude;
    readonly event: FieldEventInclude;
    readonly field: FieldInclude;
    readonly menu: MenuInclude;
    readonly input: SelectInput;
    readonly filter: SelectFilter;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     */
    constructor(props: SelectProps, refs: ToRefs<SelectProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<SelectComponents, SelectProps> | undefined, slots?: SelectSlots | undefined, emits?: ConstrEmit<SelectEmits> | undefined);
    /** Checks whether there are slots for context areas/ Проверяет, есть ли слоты для контекстных областей */
    protected readonly isSlot: ComputedRef<boolean>;
    /** Computes the trailing icon value/ Вычисляет значение иконки трейлинга */
    protected readonly iconTrailing: ComputedRef<IconValue | undefined>;
    /** Handles click on option in slot/ Обрабатывает клик по опции в слоте */
    protected readonly onClick: (value?: string) => void;
    /**
     * Checks whether arrow is set.
     *
     * Проверяет, установлена ли стрелка.
     */
    protected isArrow(): boolean;
}
