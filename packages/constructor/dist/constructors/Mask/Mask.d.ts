import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { MaskType } from './MaskType';
import { MaskBuffer } from './MaskBuffer';
import { MaskFocus } from './MaskFocus';
import { MaskCharacterLength } from './MaskCharacterLength';
import { MaskRubberItem } from './MaskRubberItem';
import { MaskRubberTransition } from './MaskRubberTransition';
import { MaskDate } from './MaskDate';
import { MaskFormat } from './MaskFormat';
import { MaskSpecial } from './MaskSpecial';
import { MaskMatch } from './MaskMatch';
import { MaskPattern } from './MaskPattern';
import { MaskRight } from './MaskRight';
import { MaskRubber } from './MaskRubber';
import { MaskItem } from './MaskItem';
import { MaskSelection } from './MaskSelection';
import { MaskCharacter } from './MaskCharacter';
import { MaskValueBasic } from './MaskValueBasic';
import { MaskValue } from './MaskValue';
import { MaskValidation } from './MaskValidation';
import { MaskView } from './MaskView';
import { MaskEmit } from './MaskEmit';
import { MaskData } from './MaskData';
import { MaskEvent } from './MaskEvent';
import { MaskElementInput } from './basicTypes';
import { MaskComponents, MaskEmits, MaskSlots } from './types';
import { MaskProps } from './props';
/**
 * Class for working with input masking.
 *
 * Класс для работы с маской ввода.
 */
export declare class Mask {
    protected readonly props: MaskProps;
    protected readonly refs: ToRefs<MaskProps>;
    protected readonly element: Ref<MaskElementInput>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<MaskComponents, MaskProps> | undefined;
    protected readonly slots?: MaskSlots | undefined;
    protected readonly emits?: ConstrEmit<MaskEmits> | undefined;
    /** Type helper/ Объект для работы с типом */
    readonly type: MaskType;
    /** Buffer helper/ Объект для буферизации ввода */
    readonly buffer: MaskBuffer;
    /** Focus helper/ Объект для работы с фокусом */
    readonly focus: MaskFocus;
    /** Entered characters length helper/ Объект длины введённых символов */
    readonly characterLength: MaskCharacterLength;
    /** Rubber groups length helper/ Объект длины резиновых групп */
    readonly rubberItem: MaskRubberItem;
    /** Rubber transition symbol helper/ Объект символа перехода резины */
    readonly rubberTransition: MaskRubberTransition;
    /** Date/time mask helper/ Объект для работы с датой/временем */
    readonly date: MaskDate;
    /** Number/currency format mask helper/ Объект форматирования числа/валюты */
    readonly format: MaskFormat;
    /** Special symbols/groups helper/ Объект для спецсимволов и групп */
    readonly special: MaskSpecial;
    /** Match helper/ Объект проверки символов */
    readonly match: MaskMatch;
    /** Pattern helper/ Объект паттернов валидации */
    readonly pattern: MaskPattern;
    /** Alignment helper/ Объект выравнивания */
    readonly right: MaskRight;
    /** Rubber groups helper/ Объект для работы с резиновыми группами */
    readonly rubber: MaskRubber;
    /** Mask item helper/ Объект для работы с маской */
    readonly item: MaskItem;
    /** Selection helper/ Объект для работы с выделением */
    readonly selection: MaskSelection;
    /** Characters helper/ Объект для работы с введёнными символами */
    readonly character: MaskCharacter;
    /** Basic value helper/ Объект для работы с базовыми значениями */
    readonly valueBasic: MaskValueBasic;
    /** Value helper/ Объект для работы с итоговым значением */
    readonly value: MaskValue;
    /** Validation helper/ Объект для работы с валидацией */
    readonly validation: MaskValidation;
    /** View helper/ Объект для работы с отображением */
    readonly view: MaskView;
    /** Emit helper/ Объект для работы с событиями */
    readonly emit: MaskEmit;
    /** Data helper/ Объект для работы с вводом */
    readonly data: MaskData;
    /** Event helper/ Объект для работы с DOM-событиями */
    readonly event: MaskEvent;
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
     * @param constructors.MaskBufferConstructor class for working with mask buffer/ класс для работы с буфером маски
     * @param constructors.MaskCharacterConstructor class for working with mask character/ класс для работы с символом маски
     * @param constructors.MaskCharacterLengthConstructor class for working with mask character length/ класс для работы с длиной символов маски
     * @param constructors.MaskDataConstructor class for working with mask data/ класс для работы с данными маски
     * @param constructors.MaskDateConstructor class for working with mask date/ класс для работы с датой маски
     * @param constructors.MaskEmitConstructor class for working with mask emit/ класс для работы с событиями маски
     * @param constructors.MaskEventConstructor class for working with mask event/ класс для работы с событием маски
     * @param constructors.MaskFocusConstructor class for working with mask focus/ класс для работы с фокусом маски
     * @param constructors.MaskFormatConstructor class for working with mask format/ класс для работы с форматом маски
     * @param constructors.MaskItemConstructor class for working with mask item/ класс для работы с элементом маски
     * @param constructors.MaskMatchConstructor class for working with mask match/ класс для работы с совпадением маски
     * @param constructors.MaskPatternConstructor class for working with mask pattern/ класс для работы с шаблоном маски
     * @param constructors.MaskRightConstructor class for working with mask right/ класс для работы с выравниванием справа маски
     * @param constructors.MaskRubberConstructor class for working with mask rubber/ класс для работы с резиной маски
     * @param constructors.MaskRubberItemConstructor class for working with mask rubber item/ класс для работы с резиновым элементом маски
     * @param constructors.MaskRubberTransitionConstructor class for working with mask rubber transition/ класс для работы с переходом резины маски
     * @param constructors.MaskSelectionConstructor class for working with mask selection/ класс для работы с выделением маски
     * @param constructors.MaskSpecialConstructor class for working with mask special/ класс для работы со специальными символами маски
     * @param constructors.MaskTypeConstructor class for working with mask type/ класс для работы с типом маски
     * @param constructors.MaskValidationConstructor class for working with mask validation/ класс для работы с валидацией маски
     * @param constructors.MaskValueBasicConstructor class for working with mask value basic/ класс для работы с базовым значением маски
     * @param constructors.MaskValueConstructor class for working with mask value/ класс для работы со значением маски
     * @param constructors.MaskViewConstructor class for working with mask view/ класс для работы с отображением маски
     */
    constructor(props: MaskProps, refs: ToRefs<MaskProps>, element: Ref<MaskElementInput>, classDesign: string, className: string, components?: DesignComp<MaskComponents, MaskProps> | undefined, slots?: MaskSlots | undefined, emits?: ConstrEmit<MaskEmits> | undefined, constructors?: {
        MaskBufferConstructor?: typeof MaskBuffer;
        MaskCharacterConstructor?: typeof MaskCharacter;
        MaskCharacterLengthConstructor?: typeof MaskCharacterLength;
        MaskDataConstructor?: typeof MaskData;
        MaskDateConstructor?: typeof MaskDate;
        MaskEmitConstructor?: typeof MaskEmit;
        MaskEventConstructor?: typeof MaskEvent;
        MaskFocusConstructor?: typeof MaskFocus;
        MaskFormatConstructor?: typeof MaskFormat;
        MaskItemConstructor?: typeof MaskItem;
        MaskMatchConstructor?: typeof MaskMatch;
        MaskPatternConstructor?: typeof MaskPattern;
        MaskRightConstructor?: typeof MaskRight;
        MaskRubberConstructor?: typeof MaskRubber;
        MaskRubberItemConstructor?: typeof MaskRubberItem;
        MaskRubberTransitionConstructor?: typeof MaskRubberTransition;
        MaskSelectionConstructor?: typeof MaskSelection;
        MaskSpecialConstructor?: typeof MaskSpecial;
        MaskTypeConstructor?: typeof MaskType;
        MaskValidationConstructor?: typeof MaskValidation;
        MaskValueBasicConstructor?: typeof MaskValueBasic;
        MaskValueConstructor?: typeof MaskValue;
        MaskViewConstructor?: typeof MaskView;
    });
    /** Receiving basic standard values/ Получение базовых стандартных значений */
    readonly basic: ComputedRef<string>;
    /** Values for CSS class/ Значения для CSS-класса */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Sets new value and reinitializes mask.
     *
     * Устанавливает новое значение и переинициализирует маску.
     * @param value new value/ новое значение
     */
    readonly set: (value: string) => boolean;
    /**
     * Resets all values or updates to the new one.
     *
     * Сбрасывает все значения или обновляется до нового.
     * @param value new values/ новые значения
     */
    reset(value?: string | number): boolean;
    /**
     * Clears value to default and focuses input.
     *
     * Очищает значение до значения по умолчанию и фокусирует поле ввода.
     */
    readonly clear: () => void;
}
