import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude';
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude';
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude';
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude';
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude';
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude';
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude';
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
     * @param FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
     * @param FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
     * @param FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
     * @param FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
     * @param FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
     * @param FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
     * @param FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
     * @param FieldIncludeConstructor class for working with field/ класс для работы с полем
     * @param MenuIncludeConstructor class for working with menu/ класс для работы с меню
     * @param SelectInputConstructor class for working with select input/ класс для работы с вводом выбора
     * @param SelectFilterConstructor class for working with select filter/ класс для работы с фильтром выбора
     */
    constructor(props: SelectProps, refs: ToRefs<SelectProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<SelectComponents, SelectProps> | undefined, slots?: SelectSlots | undefined, emits?: ConstrEmit<SelectEmits> | undefined, FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude, FieldChangeIncludeConstructor?: typeof FieldChangeInclude, FieldElementIncludeConstructor?: typeof FieldElementInclude, FieldValueIncludeConstructor?: typeof FieldValueInclude, FieldCodeIncludeConstructor?: typeof FieldCodeInclude, FieldValidationIncludeConstructor?: typeof FieldValidationInclude, FieldEventIncludeConstructor?: typeof FieldEventInclude, FieldIncludeConstructor?: typeof FieldInclude, MenuIncludeConstructor?: typeof MenuInclude, SelectInputConstructor?: typeof SelectInput, SelectFilterConstructor?: typeof SelectFilter);
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
