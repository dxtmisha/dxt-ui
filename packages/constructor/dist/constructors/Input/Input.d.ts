import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { FieldChangeInclude } from '../../classes/Field/FieldChangeInclude';
import { FieldVisibilityInclude } from '../../classes/Field/FieldVisibilityInclude';
import { FieldTypeInclude } from '../../classes/Field/FieldTypeInclude';
import { FieldPatternInclude } from '../../classes/Field/FieldPatternInclude';
import { FieldAttributesInclude } from '../../classes/Field/FieldAttributesInclude';
import { FieldElementInclude } from '../../classes/Field/FieldElementInclude';
import { FieldValueInclude } from '../../classes/Field/FieldValueInclude';
import { FieldArrowInclude } from '../../classes/Field/FieldArrowInclude';
import { InputPassword } from './InputPassword';
import { FieldMatchInclude } from '../../classes/Field/FieldMatchInclude';
import { FieldInputModeInclude } from '../../classes/Field/FieldInputModeInclude';
import { FieldCodeInclude } from '../../classes/Field/FieldCodeInclude';
import { FieldValidationInclude } from '../../classes/Field/FieldValidationInclude';
import { FieldEventInclude } from '../../classes/Field/FieldEventInclude';
import { TextInclude } from '../../classes/TextInclude';
import { FieldInclude } from '../Field/FieldInclude';
import { MaskInclude } from '../Mask/MaskInclude';
import { FieldElementInput } from '../../types/fieldTypes';
import { InputComponents, InputEmits, InputSlots } from './types';
import { InputProps } from './props';
/**
 * Input
 */
export declare class Input {
    protected readonly props: InputProps;
    protected readonly refs: ToRefs<InputProps>;
    protected readonly element: Ref<FieldElementInput>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<InputComponents, InputProps> | undefined;
    protected readonly slots?: InputSlots | undefined;
    protected readonly emits?: ConstrEmit<InputEmits> | undefined;
    readonly text: TextInclude;
    readonly visibility: FieldVisibilityInclude;
    readonly type: FieldTypeInclude;
    readonly pattern: FieldPatternInclude;
    readonly inputMode: FieldInputModeInclude;
    readonly attributes: FieldAttributesInclude;
    readonly elementItem: FieldElementInclude;
    readonly change: FieldChangeInclude;
    readonly value: FieldValueInclude;
    readonly arrow: FieldArrowInclude;
    readonly password: InputPassword;
    readonly match: FieldMatchInclude;
    readonly code: FieldCodeInclude;
    readonly validation: FieldValidationInclude;
    readonly event: FieldEventInclude;
    readonly field: FieldInclude;
    readonly mask: MaskInclude;
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
     * @param FieldChangeIncludeConstructor class for working with field change/ класс для работы с изменением поля
     * @param FieldVisibilityIncludeConstructor class for working with field visibility/ класс для работы с видимостью поля
     * @param FieldTypeIncludeConstructor class for working with field type/ класс для работы с типом поля
     * @param FieldPatternIncludeConstructor class for working with field pattern/ класс для работы с шаблоном поля
     * @param FieldInputModeIncludeConstructor class for working with field input mode/ класс для работы с режимом ввода поля
     * @param FieldAttributesIncludeConstructor class for working with field attributes/ класс для работы с атрибутами поля
     * @param FieldElementIncludeConstructor class for working with field element/ класс для работы с элементом поля
     * @param FieldValueIncludeConstructor class for working with field value/ класс для работы со значением поля
     * @param FieldArrowIncludeConstructor class for working with field arrow/ класс для работы со стрелкой поля
     * @param InputPasswordConstructor class for working with input password/ класс для работы с паролем ввода
     * @param FieldMatchIncludeConstructor class for working with field match/ класс для работы с совпадением поля
     * @param FieldCodeIncludeConstructor class for working with field code/ класс для работы с кодом поля
     * @param FieldValidationIncludeConstructor class for working with field validation/ класс для работы с валидацией поля
     * @param FieldEventIncludeConstructor class for working with field event/ класс для работы с событием поля
     * @param FieldIncludeConstructor class for working with field/ класс для работы с полем
     * @param MaskIncludeConstructor class for working with mask/ класс для работы с маской
     * @param TextIncludeConstructor class for working with text/ класс для работы с текстом
     */
    constructor(props: InputProps, refs: ToRefs<InputProps>, element: Ref<FieldElementInput>, classDesign: string, className: string, components?: DesignComp<InputComponents, InputProps> | undefined, slots?: InputSlots | undefined, emits?: ConstrEmit<InputEmits> | undefined, FieldChangeIncludeConstructor?: typeof FieldChangeInclude, FieldVisibilityIncludeConstructor?: typeof FieldVisibilityInclude, FieldTypeIncludeConstructor?: typeof FieldTypeInclude, FieldPatternIncludeConstructor?: typeof FieldPatternInclude, FieldInputModeIncludeConstructor?: typeof FieldInputModeInclude, FieldAttributesIncludeConstructor?: typeof FieldAttributesInclude, FieldElementIncludeConstructor?: typeof FieldElementInclude, FieldValueIncludeConstructor?: typeof FieldValueInclude, FieldArrowIncludeConstructor?: typeof FieldArrowInclude, InputPasswordConstructor?: typeof InputPassword, FieldMatchIncludeConstructor?: typeof FieldMatchInclude, FieldCodeIncludeConstructor?: typeof FieldCodeInclude, FieldValidationIncludeConstructor?: typeof FieldValidationInclude, FieldEventIncludeConstructor?: typeof FieldEventInclude, FieldIncludeConstructor?: typeof FieldInclude, MaskIncludeConstructor?: typeof MaskInclude, TextIncludeConstructor?: typeof TextInclude);
}
