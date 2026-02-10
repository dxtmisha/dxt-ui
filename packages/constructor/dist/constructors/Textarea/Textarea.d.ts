import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude';
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude';
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude';
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude';
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude';
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude';
import { FieldInclude } from '../Field/FieldInclude';
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude';
import { TextareaComponents, TextareaEmits, TextareaSlots } from './types';
import { TextareaProps } from './props';
/**
 * Textarea
 */
export declare class Textarea {
    protected readonly props: TextareaProps;
    protected readonly refs: ToRefs<TextareaProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<TextareaComponents, TextareaProps> | undefined;
    protected readonly slots?: TextareaSlots | undefined;
    protected readonly emits?: ConstrEmit<TextareaEmits> | undefined;
    readonly attributes: FieldAttributesInclude;
    readonly elementItem: FieldElementInclude;
    readonly change: FieldChangeInclude;
    readonly value: FieldValueInclude;
    readonly code: FieldCodeInclude;
    readonly validation: FieldValidationInclude;
    readonly event: FieldEventInclude;
    readonly field: FieldInclude;
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
     * @param constructors object with classes/ объект с классами
     * @param constructors.FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
     * @param constructors.FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
     * @param constructors.FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
     * @param constructors.FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
     * @param constructors.FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
     * @param constructors.FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
     * @param constructors.FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
     * @param constructors.FieldIncludeConstructor class for working with field/ класс для работы с полем
     */
    constructor(props: TextareaProps, refs: ToRefs<TextareaProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<TextareaComponents, TextareaProps> | undefined, slots?: TextareaSlots | undefined, emits?: ConstrEmit<TextareaEmits> | undefined, constructors?: {
        FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude;
        FieldChangeIncludeConstructor?: typeof FieldChangeInclude;
        FieldCodeIncludeConstructor?: typeof FieldCodeInclude;
        FieldElementIncludeConstructor?: typeof FieldElementInclude;
        FieldEventIncludeConstructor?: typeof FieldEventInclude;
        FieldIncludeConstructor?: typeof FieldInclude;
        FieldValidationIncludeConstructor?: typeof FieldValidationInclude;
        FieldValueIncludeConstructor?: typeof FieldValueInclude;
    });
}
