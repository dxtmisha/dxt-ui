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
     */
    constructor(props: MaskProps, refs: ToRefs<MaskProps>, element: Ref<MaskElementInput>, classDesign: string, className: string, components?: DesignComp<MaskComponents, MaskProps> | undefined, slots?: MaskSlots | undefined, emits?: ConstrEmit<MaskEmits> | undefined);
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
