import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { FieldChangeInclude } from '../../classes/field/FieldChangeInclude';
import { FieldVisibilityInclude } from '../../classes/field/FieldVisibilityInclude';
import { FieldTypeInclude } from '../../classes/field/FieldTypeInclude';
import { FieldPatternInclude } from '../../classes/field/FieldPatternInclude';
import { FieldAttributesInclude } from '../../classes/field/FieldAttributesInclude';
import { FieldElementInclude } from '../../classes/field/FieldElementInclude';
import { FieldValueInclude } from '../../classes/field/FieldValueInclude';
import { FieldArrowInclude } from '../../classes/field/FieldArrowInclude';
import { InputPassword } from './InputPassword';
import { FieldMatchInclude } from '../../classes/field/FieldMatchInclude';
import { FieldInputModeInclude } from '../../classes/field/FieldInputModeInclude';
import { FieldCodeInclude } from '../../classes/field/FieldCodeInclude';
import { FieldValidationInclude } from '../../classes/field/FieldValidationInclude';
import { FieldEventInclude } from '../../classes/field/FieldEventInclude';
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
     */
    constructor(props: InputProps, refs: ToRefs<InputProps>, element: Ref<FieldElementInput>, classDesign: string, className: string, components?: DesignComp<InputComponents, InputProps> | undefined, slots?: InputSlots | undefined, emits?: ConstrEmit<InputEmits> | undefined);
}
