import { ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ConstrClass } from '@dxtmisha/functional';
import { ConstrClassObject } from '@dxtmisha/functional';
import { ConstrEmit } from '@dxtmisha/functional';
import { ConstrOptions } from '@dxtmisha/functional';
import { ConstrStyles } from '@dxtmisha/functional';
import { Datetime } from '@dxtmisha/functional';
import { DesignComp } from '@dxtmisha/functional';
import { DesignConstructorAbstract } from '@dxtmisha/functional';
import { GeoDate } from '@dxtmisha/functional';
import { GeoIntl } from '@dxtmisha/functional';
import { ListRecord } from '@dxtmisha/functional';
import { NumberOrString } from '@dxtmisha/functional';
import { Ref } from 'vue';
import { ToRefs } from 'vue';
import { VNode } from 'vue';

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export declare const defaultsMask: {
    visible: boolean;
    special: string;
    match: RegExp;
    type: string;
    groupSave: boolean;
    view: string;
};

/**
 * All possible field properties combined/
 * Все возможные свойства поля в одном интерфейсе
 */
declare interface FieldAllProps<Value = any> extends FieldInputProps<Value>, FieldInputFileProps<Value>, FieldInputCheckProps<Value>, FieldTextareaProps<Value>, FieldSelectProps<Value> {
}

/**
 * Input arrow controls (for type="number")/
 * Управление стрелками ввода (для type="number")
 */
declare interface FieldArrowProps {
    /** Arrow type/ Тип стрелок */
    arrow?: 'auto' | 'carousel' | 'stepper' | 'none';
    /** Step size for input arrows (type="number" only)/ Шаг для стрелок ввода (только для type="number") */
    arrowStep?: NumberOrString;
    /** Arrow alignment/ Выравнивание стрелок */
    arrowAlign?: 'center' | 'right' | 'left';
}

/**
 * Basic HTML input attributes without value-length specifics/
 * Базовые HTML атрибуты инпута без ограничений длины и multiple
 */
declare interface FieldBasicProps<Value = any> extends Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> {
    /** Input type/ Тип инпута */
    type?: 'text' | 'search' | 'number' | 'number-format' | 'currency' | 'email' | 'password' | 'datetime' | 'date' | 'year-month' | 'time' | 'hour-minute' | 'tel' | 'url' | 'checkbox' | 'radio';
    /** Input name attribute/ Атрибут name */
    name?: string;
    /** Input id attribute/ Атрибут id */
    id?: string | number;
    /** Required flag/ Обязательное поле */
    required?: boolean;
    /** Readonly state/ Режим только для чтения */
    readonly?: boolean;
    /** Disabled state/ Состояние отключения */
    disabled?: boolean;
    /** Autofocus flag/ Автофокус при загрузке */
    autofocus?: boolean;
    /** Tab index order/ Порядок табуляции */
    tabindex?: number;
    /** Form id this input belongs to/ ID формы, к которой относится инпут */
    form?: string;
    /** Validation error text or map of texts/ Текст ошибки валидации или карта текстов */
    validationCode?: FieldValidityCode;
    /**
     * Standard validation message (overrides default)/
     * Стандартное сообщение валидации (перекрывает дефолтное)
     */
    validationMessage?: string;
    /** Match config to compare with another field/ Конфигурация сравнения со вторым полем */
    match?: FieldMatch;
    /** Additional attributes for the input element/ Дополнительные атрибуты для элемента инпута */
    inputAttrs?: Record<string, any>;
}

/** Base data for validation check/ Базовые данные проверки */
declare type FieldCheckMain = {
    /** Group key/ Ключ группы */
    group?: string;
    /** Related input element/ Связанный элемент ввода */
    input?: FieldElementDom;
    /** Pattern used/ Используемый шаблон */
    pattern?: FieldPatternItemOrFunction;
};

/**
 * Class for processing standard error text
 *
 * Класс для обработки стандартного текста ошибки
 */
declare class FieldCodeInclude {
    protected readonly props: FieldAllProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: FieldAllProps);
    /**
     * Returns error text
     *
     * Возвращает текст ошибки
     * @param state object with validity state/ объект с данными валидности
     */
    get(state?: ValidityState): string | undefined;
    /**
     * Returns error key (first matched)
     *
     * Возвращает ключ ошибки (первый найденный)
     * @param state object with validity state/ объект с данными валидности
     */
    protected getIndex(state: ValidityState): keyof ValidityState | undefined;
}

/** Base input or textarea element/ Базовый элемент input или textarea */
declare type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;

/**
 * The class creates hidden input and runs native validation for pattern
 *
 * Класс создаёт скрытый input и выполняет нативную валидацию по паттерну
 */
declare class FieldInputCheckInclude<Value = any> {
    readonly pattern: FieldPatternItemOrFunction;
    readonly group: string;
    protected readonly code?: FieldCodeInclude | undefined;
    /** Hidden input element for native validation/ Скрытый input для нативной валидации */
    readonly input: HTMLInputElement | undefined;
    /**
     * Constructor
     * @param pattern property for verification/ свойство для проверки
     * @param group group name/ название группы
     * @param code object for error codes/ объект для работы с кодами ошибок
     */
    constructor(pattern: FieldPatternItemOrFunction, group?: string, code?: FieldCodeInclude | undefined);
    /**
     * Runs validation and returns result
     *
     * Выполняет проверку и возвращает результат
     */
    check(value: Value): FieldValidationItem;
    /**
     * Runs validation by input and returns result
     *
     * Выполняет проверку по инпуту и возвращает результат
     * @param input input element/ элемент инпута
     */
    checkByInput(input: FieldElementDom): FieldValidationItem;
    /**
     * Returns attributes for internal input
     *
     * Возвращает атрибуты для внутреннего инпута
     */
    protected getAttributes(): FieldPatternElement;
    /**
     * Returns the default group name
     *
     * Возвращает название группы по умолчанию
     */
    static getGroupDefault(): string;
}

declare type FieldInputCheckListInclude = Record<string, FieldInputCheckInclude>;

/**
 * Props for checkbox & radio inputs (excluding type field)/
 * Свойства для инпутов checkbox и radio (без поля type)
 */
declare interface FieldInputCheckProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldUxProps {
    /** Checked state/ Состояние выбора */
    checked?: boolean;
    /** Indeterminate visual state (checkbox only)/ Промежуточное визуальное состояние (только для checkbox) */
    indeterminate?: boolean;
}

/**
 * Props for file input elements (type="file")/
 * Свойства для инпутов выбора файлов (type="file")
 */
declare interface FieldInputFileProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLengthProps, FieldUxProps {
    /** Multiple files selection flag/ Флаг выбора нескольких файлов */
    multiple?: boolean;
    /** Accept file types list (MIME, extensions)/ Список допустимых типов (MIME, расширения) */
    accept?: string;
    /** Capture mode for media input (mobile)/ Режим захвата для медиа (мобильные устройства) */
    capture?: string | boolean;
}

/**
 * Composite props for standard textual / numeric inputs/
 * Составные свойства стандартных текстовых / числовых инпутов
 */
declare interface FieldInputProps<Value = any> extends FieldBasicProps<Value>, FieldStepProps, FieldArrowProps, FieldLengthProps, FieldPatternProps, FieldUxProps {
    /** Datalist id reference/ Ссылка на datalist */
    list?: string;
    iconVisibility?: string;
    iconVisibilityOff?: string;
}

/**
 * Text length constraints (characters, items)/
 * Ограничения длины текста (символы, элементы)
 */
declare interface FieldLengthProps {
    /** Minimum length/ Минимальная длина */
    minlength?: NumberOrString;
    /** Maximum length/ Максимальная длина */
    maxlength?: NumberOrString;
}

/** Single mask fragment meta/ Один фрагмент маски с мета‑данными */
declare type FieldMaskItem = {
    /** Group key/ Ключ группы */
    group: string;
    /** Accumulated value/ Накопленное значение */
    value: string;
    /** Max length for fragment/ Максимальная длина фрагмента */
    maxLength: number;
    /** Fragment filled flag/ Фрагмент заполнен */
    full: boolean;
    /** Caret end flag/ Флаг конца ввода */
    end: boolean;
    /** Characters extracted from value (value split into array)/ Символы извлечённые из value (value разделено на массив символов) */
    chars: string[];
};

/** Masks data split by groups/ Данные маски, разделённые на группы */
declare type FieldMasks = Record<string, FieldMaskItem>;

/** Match definition (string | element | object)/ Описание совпадения (строка | элемент | объект) */
declare type FieldMatch = string | HTMLInputElement | FieldMatchItem;

/** Match config object/ Объект конфигурации совпадения */
declare type FieldMatchItem = {
    /** Target name or element/ Имя цели или элемент */
    name?: string | HTMLInputElement;
    /** Custom validation message/ Кастомное сообщение ошибки */
    validationMessage?: string;
};

/** Partial input element for pattern/ Частичный элемент для pattern */
declare type FieldPatternElement = Partial<HTMLInputElement>;

/** Pattern string or element/ Строка шаблона или элемент */
declare type FieldPatternItem = string | FieldPatternElement;

/** Pattern or factory function/ Шаблон или функция‑генератор */
declare type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem);

/** Named pattern list/ Список именованных шаблонов */
declare type FieldPatternList = Record<string, FieldPatternItemOrFunction>;

/**
 * Validation pattern attribute/
 * Атрибут паттерна валидации
 */
declare interface FieldPatternProps {
    /** Validation pattern (regexp)/ Паттерн валидации (рег. выражение) */
    pattern?: string;
}

/**
 * Props for select elements (single & multiple)/
 * Свойства для select элементов (одиночный и множественный выбор)
 */
declare interface FieldSelectProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, Omit<FieldStepProps, 'min' | 'step'>, FieldArrowProps, FieldUxProps {
    option?: ListRecord;
    /** Multiple selection mode/ Режим множественного выбора */
    multiple?: boolean;
}

/**
 * Numeric stepping and range constraints/
 * Ограничения шага и диапазона числовых значений
 */
declare interface FieldStepProps {
    /** Step size for numeric inputs/ Шаг для числовых инпутов */
    step?: NumberOrString;
    /** Minimum value/ Минимальное значение */
    min?: NumberOrString;
    /** Maximum value/ Максимальное значение */
    max?: NumberOrString;
}

/**
 * Props for textarea elements with sizing & wrapping/
 * Свойства для textarea с поддержкой размеров и переноса
 */
declare interface FieldTextareaProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLengthProps, FieldUxProps {
    /** Number of visible text lines/ Количество видимых строк */
    rows?: NumberOrString;
    /** Number of visible columns/ Количество видимых колонок */
    cols?: NumberOrString;
    /** Text wrapping mode/ Режим переноса текста */
    wrap?: 'soft' | 'hard' | 'off' | string;
    /** Automatic field sizing mode (CSS field-sizing)/ Режим автоизменения размера (CSS field-sizing) */
    fieldSizing?: 'content' | 'fixed' | string;
}

/**
 * UX input control attributes/
 * Атрибуты управления UX вводом
 */
declare interface FieldUxProps {
    /** Autocomplete hint/ Подсказка автозаполнения */
    autocomplete?: string;
    /** Auto capitalization mode/ Режим авто-капитализации */
    autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
    /** Input mode hint (virtual keyboard)/ Подсказка режима ввода (виртуальная клавиатура) */
    inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    /** Enter key hint/ Подсказка для клавиши Enter */
    enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
    /** Spellcheck flag/ Проверка орфографии */
    spellcheck?: boolean | 'true' | 'false';
    /** Autocorrect mode (iOS/Safari)/ Режим автокоррекции (iOS/Safari) */
    autocorrect?: 'on' | 'off' | string;
}

/** Single validation result/ Результат одной проверки */
declare type FieldValidationItem<Value = any> = FieldCheckMain & {
    /** Custom type marker/ Произвольный тип */
    type?: string;
    /** Pass status/ Статус успешности */
    status?: boolean;
    /** Required flag/ Флаг обязательности */
    required?: boolean;
    /** Full value flag/ Флаг полноты значения */
    isFull?: boolean;
    /** Message text/ Текст сообщения */
    validationMessage?: string;
    /** Native validity state/ Нативное состояние валидности */
    validity?: ValidityState;
    /** Custom validity message (overrides native)/ Кастомное сообщение валидности (перекрывает нативное) */
    validityMessage?: string;
    /** Original value/ Исходное значение */
    value: Value;
    /** Raw input value/ Введённое значение */
    valueInput?: Value;
    /** Extra details/ Дополнительные данные */
    detail?: Record<string, any>;
};

/** Global validation message or map/ Глобальное сообщение или карта сообщений */
declare type FieldValidityCode = string | FieldValidityCodeItem;

/** Map validity flags to custom messages/ Отображение флагов валидности в кастомные сообщения */
declare type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};

/**
 * Properties that describe the value and its handling/
 * Свойства, описывающие значение и работу с ним
 *
 * Used by the ValueInclude class to read/write value and constraints/
 * Используется классом ValueInclude для чтения/записи значения и ограничений
 */
declare interface FieldValueProps<Value = any> extends ModelProps<Value> {
    /** Placeholder text shown when value is empty/ Текст подсказки при пустом значении */
    placeholder?: string;
    /** Multiple selection/value mode/ Режим множественного значения/выбора */
    multiple?: boolean;
    /** Maximum allowed length for value/ Максимальная допустимая длина значения */
    maxlength?: NumberOrString;
    /** Controlled value (without v-model)/ Контролируемое значение (без v-model) */
    value?: Value;
    /** Additional event details/ Дополнительные детали события */
    detail?: Record<string, any> | undefined;
}

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

export declare const MASK_CHAR_DELETE = "~";

export declare const MASK_VIEW_DEFAULT = "_";

/**
 * Class for temporary storage of entered symbols to keep input position during fast typing.
 *
 * Класс для временного хранения вводимых символов, чтобы не терять позицию ввода при быстром наборе.
 */
declare class MaskBuffer {
    /** Stored characters/ Сохранённые символы */
    protected chars: string[];
    /** Flag: buffering started/ Флаг: буферизация запущена */
    protected start: boolean;
    /**
     * Checks if buffer has records.
     *
     * Проверяет, есть ли записи в буфере.
     */
    is(): boolean;
    /**
     * Returns list of all buffered chars.
     *
     * Возвращает список всех символов в буфере.
     */
    get(): string[];
    /**
     * Adds new symbol to buffer.
     *
     * Добавляет новый символ в буфер.
     * @param key symbol to add / символ для добавления
     */
    add(key: string): this;
    /**
     * Handles fast input: if buffering active — adds symbol, else starts buffering.
     *
     * Обрабатывает быстрый ввод: если буфер активен — добавляет символ, иначе запускает буферизацию.
     * @param key symbol to process / символ для обработки
     * @returns true if processing should continue outside buffer / true если ввод продолжается вне буфера
     */
    go(key: string): boolean;
    /**
     * Starts buffering.
     *
     * Запускает буферизацию.
     */
    goStart(): this;
    /**
     * Resets all data (chars + start flag).
     *
     * Сбрасывает все данные (символы и флаг запуска).
     */
    reset(): this;
    /**
     * Clears stored characters only.
     *
     * Очищает только сохранённые символы.
     */
    resetChars(): this;
}

/**
 * Class for working with and storing input characters.
 *
 * Класс для работы и хранения вводимых символов.
 */
declare class MaskCharacter {
    protected readonly props: MaskProps;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly special: MaskSpecial;
    protected readonly mask: MaskItem;
    protected readonly selection: MaskSelection;
    /** Entered characters list/ Список введённых символов */
    readonly item: Ref<string[], string[]>;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
     * @param characterLength object for managing input length/ объект управления длиной ввода
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param mask object for managing masks/ объект управления маской
     * @param selection object for managing cursor position/ объект для управления положением курсора
     */
    constructor(props: MaskProps, rubberItem: MaskRubberItem, characterLength: MaskCharacterLength, special: MaskSpecial, mask: MaskItem, selection: MaskSelection);
    /**
     * Checks if the value is filled.
     *
     * Проверяет, заполнено ли значение.
     */
    is(): boolean;
    /**
     * Checks if the selected character was previously deleted.
     *
     * Проверяет, является ли выделенный символ ранее удалённым.
     */
    isCharDelete(): boolean;
    /**
     * Getting the selected mask character.
     *
     * Получение выбранного символа маски.
     */
    getFocus(): string;
    /**
     * Getting the mask character by the key number of the nearest special character.
     *
     * Получение символа маски по номеру ключа ближайшего специального символа.
     */
    getImmediate(): string;
    /**
     * Getting the next mask character.
     *
     * Получение следующего символа маски.
     */
    getNext(): string;
    /**
     * Adding 1 entered character at its selection location.
     *
     * Добавление 1 введённого символа по месту его выделения.
     * @param char entered character/ введённый символ
     */
    add(char: string): this;
    /**
     * Deleting 1 entered character at its selection location.
     *
     * Удаление 1 введённого символа по месту его выделения.
     */
    pop(): this;
    /**
     * Resets the values to the initial values.
     *
     * Сбрасывает значения до начальных.
     */
    reset(): this;
    /**
     * Shifts by 1 value depending on the direction of selection change.
     *
     * Сдвигает на 1 значение в зависимости от направления изменения выделения.
     * @param status shift status/ статус сдвига
     */
    shift(status?: number): this;
    /**
     * Checks if there is another group of special characters ahead.
     *
     * Проверяет, есть ли впереди другая группа специальных символов.
     */
    protected isSpecialNextAnother(): boolean;
    /**
     * Updates the length of entered characters.
     *
     * Обновляет длину введённых символов.
     */
    protected updateLength(): this;
}

/**
 * Class for storing the length of entered characters.
 *
 * Класс для хранения длины введённых символов.
 */
declare class MaskCharacterLength {
    /** Current length value/ Текущее значение длины */
    protected length: Ref<number, number>;
    /**
     * Checks if there is at least one entered character.
     *
     * Проверяет, есть ли хотя бы один введённый символ.
     */
    is(): boolean;
    /**
     * Returns current length.
     *
     * Возвращает текущую длину.
     */
    get(): number;
    /**
     * Sets new length value.
     *
     * Устанавливает новое значение длины.
     * @param length new length value / новое значение длины
     */
    set(length: number): this;
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export declare type MaskClasses = {
    main: ConstrClass;
    input: string;
    character: string;
    characterItem: string;
};

export declare type MaskComponentInclude = {
    mask?: object;
};

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export declare type MaskComponents = {};

/**
 * Class for working with input behavior (data entering flow)
 *
 * Класс для работы с поведением при вводе данных
 */
declare class MaskData {
    protected readonly type: MaskType;
    protected readonly buffer: MaskBuffer;
    protected readonly focus: MaskFocus;
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly date: MaskDate;
    protected readonly special: MaskSpecial;
    protected readonly match: MaskMatch;
    protected readonly rubber: MaskRubber;
    protected readonly mask: MaskItem;
    protected readonly selection: MaskSelection;
    protected readonly character: MaskCharacter;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly value: MaskValue;
    protected readonly emit: MaskEmit;
    protected readonly element: Ref<MaskElementInput>;
    /**
     * Constructor
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param buffer object for managing cached input data/ объект управления кешированными вводимыми данными
     * @param focus object for handling input field focus/ объект для работы с фокусом поля ввода
     * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
     * @param date object for working with date types/ объект для работы с типом даты
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param match object for managing the input character match logic/ объект для управления совпадением символов ввода
     * @param rubber object for working with rubber types/ объект для работы с резиновыми типами
     * @param mask object for managing masks/ объект управления маской
     * @param selection object for managing caret position/ объект для управления положением курсора
     * @param character object for managing entered characters/ объект для управления введёнными символами
     * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
     * @param value object for working with transformed value/ объект для работы с преобразованным значением
     * @param emit object for handling callback events/ объект для работы с событиями
     * @param element input element ref/ ссылка на элемент ввода
     */
    constructor(type: MaskType, buffer: MaskBuffer, focus: MaskFocus, rubberTransition: MaskRubberTransition, date: MaskDate, special: MaskSpecial, match: MaskMatch, rubber: MaskRubber, mask: MaskItem, selection: MaskSelection, character: MaskCharacter, valueBasic: MaskValueBasic, value: MaskValue, emit: MaskEmit, element: Ref<MaskElementInput>);
    /**
     * Adds new characters entered by user
     *
     * Добавляет новые символы, вводимые пользователем
     * @param selection selected key index/ индекс выделенного ключа
     * @param chars list of characters (string or array)/ список вводимых символов
     * @param focus is element focused/ элемент в фокусе ли
     * @returns was value updated/ было ли обновлено значение
     */
    add(selection: number, chars: string | string[], focus?: boolean): boolean;
    /**
     * Removes (deletes) selected input characters
     *
     * Удаляет выделенные символы ввода
     * @param start start selection index/ индекс начала выделения
     * @param end end selection index/ индекс конца выделения
     * @param focus is element focused/ элемент в фокусе ли
     */
    pop(start: number, end?: number, focus?: boolean): this;
    /**
     * Resets all values or applies provided value
     *
     * Сбрасывает все значения или применяет переданное
     * @param value new raw value to apply/ новое значение для применения
     */
    reset(value?: string): this;
    /**
     * Removes redundant characters for paste operation
     *
     * Удаляет лишние символы при вставке
     * @param chars characters to insert/ вставляемые символы
     */
    extra(chars: string[]): string[];
    /**
     * Restores caret (selection) position
     *
     * Восстанавливает позицию курсора (выделения)
     * @param updateBuffer update from buffer first/ сначала обновить из буфера
     */
    goSelection(updateBuffer?: boolean): this;
    /**
     * Processes buffered data if present and emits events
     *
     * Обрабатывает данные из буфера (если есть) и вызывает события
     * @returns was buffer consumed/ был ли использован буфер
     */
    protected goBuffer(): boolean;
}

/**
 * Class for working with date/time masks (date, datetime, time etc.).
 *
 * Класс для работы с масками даты/времени (date, datetime, time и т.п.).
 */
declare class MaskDate {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     */
    constructor(props: MaskProps, type: MaskType);
    /** Mask template for current date type / Шаблон маски для текущего типа даты */
    readonly mask: ComputedRef<string[]>;
    /**
     * Returns base Datetime helper for given value (or default stub).
     *
     * Возвращает базовый помощник Datetime для значения (или дефолтный шаблон).
     * @param date filled date string/ заполненная строка даты
     */
    getDatetime(date?: string): Datetime;
    /**
     * Returns localized formatted date/time value.
     *
     * Возвращает локализованное форматированное значение даты/времени.
     * @param date filled date string/ заполненная строка даты
     */
    getValue(date?: string): string;
    /**
     * Returns standardized (ISO-like) date/time value or empty if invalid.
     *
     * Возвращает стандартизированное (похоже на ISO) значение или пустую строку при невалидности.
     * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
     */
    getValueStandard(date: FieldMasks): string;
    /**
     * Returns full raw date/time string assembled from groups (or empty if invalid).
     *
     * Возвращает полную «сырую» строку даты/времени, собранную из групп (или пусто если невалидно).
     * @param date masks data grouped by parts/ данные масок, сгруппированные по частям
     */
    getValueStandardFull(date: FieldMasks): string;
    /**
     * Returns validation patterns object for date/time parts.
     *
     * Возвращает объект паттернов валидации для частей даты/времени.
     */
    getPattern(): FieldPatternList;
    /** Returns list of date-only group symbols/ Возвращает список символов для даты */
    getSpecialDate(): string[];
    /** Returns list of full date-time group symbols/ Возвращает список символов для даты и времени */
    getSpecialFull(): string[];
    /**
     * Returns display symbol for group.
     *
     * Возвращает отображаемый символ для группы.
     * @param groupName group name/ название группы
     */
    getView(groupName: string): string | undefined;
}

/**
 * MaskDesign
 */
export declare class MaskDesign<COMP extends MaskComponents, EXPOSE extends MaskExpose, CLASSES extends MaskClasses, P extends MaskPropsBasic> extends DesignConstructorAbstract<HTMLInputElement, COMP, MaskEmits, EXPOSE, MaskSlots, CLASSES, P> {
    protected readonly item: Mask;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, MaskEmits, P>);
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode;
    /**
     * Element for storing the final data.
     *
     * Элемент для хранения конечных данных.
     */
    protected renderData: () => VNode[];
    /**
     * Rendering method for input.
     *
     * Метод рендеринга для ввода.
     */
    protected renderInput: () => VNode[];
    /**
     * Rendering method for displaying the mask and the input data.
     *
     * Метод рендеринга для вывода маски и вводимых данных.
     */
    protected renderView: () => VNode[];
}

export declare type MaskElementInput = HTMLInputElement | undefined;

/**
 * Class for event invocation
 *
 * Класс для вызова событий
 */
declare class MaskEmit {
    protected readonly validation: MaskValidation;
    protected readonly emits?: ConstrEmit<MaskEmits> | undefined;
    /** Current event type key/ Текущий ключ типа события */
    protected type?: string & keyof MaskEmits;
    /** Native event object/ Объект нативного события */
    protected event?: Event;
    /**
     * Constructor
     * @param validation object for working with validation/ объект для работы с валидацией
     * @param emits emit function (Design system bridge)/ функция вызова события
     */
    constructor(validation: MaskValidation, emits?: ConstrEmit<MaskEmits> | undefined);
    /**
     * Checks whether extra data (validation) should be generated for current event
     *
     * Проверяет, нужно ли генерировать дополнительные данные (валидацию) для текущего события
     */
    isValue(): boolean;
    /**
     * Initializes event handling and emits event with optional validation payload
     *
     * Инициализирует обработку и вызывает событие с опциональной валидацией
     */
    go(): this;
    /**
     * Sets both event type and native event object
     *
     * Устанавливает одновременно тип события и объект события
     * @param type event name/ название события
     * @param event event object/ объект события
     */
    set<E extends Event>(type: string & keyof MaskEmits, event: E): this;
    /**
     * Sets event type
     *
     * Устанавливает тип события
     * @param type event name/ название события
     */
    setType(type: string & keyof MaskEmits): this;
    /**
     * Sets native event object
     *
     * Устанавливает объект события
     * @param event event object/ объект события
     */
    setEvent<E extends Event>(event: E): this;
    /**
     * Resets all internal state (type + event)
     *
     * Сбрасывает всё внутреннее состояние (тип и событие)
     */
    reset(): this;
    /**
     * Resets stored event type
     *
     * Сбрасывает сохранённый тип события
     */
    resetType(): this;
    /**
     * Resets stored native event
     *
     * Сбрасывает сохранённый объект события
     */
    resetEvent(): this;
}

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export declare type MaskEmits = {
    focus: [event: FocusEvent];
    blur: [event: FocusEvent];
    keydown: [event: KeyboardEvent];
    keyup: [event: KeyboardEvent];
    beforeinput: [event: InputEvent];
    input: [
    event: InputEvent,
    value: FieldValidationItem
    ];
    inputLite: [value: FieldValidationItem];
    change: [
    event: InputEvent,
    value: FieldValidationItem
    ];
    changeLite: [value: FieldValidationItem];
    paste: [event: ClipboardEvent];
    reset: [event: Event];
};

/**
 * Class for working with events.
 *
 * Класс для работы с событиями.
 */
declare class MaskEvent {
    protected readonly buffer: MaskBuffer;
    protected readonly focus: MaskFocus;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly right: MaskRight;
    protected readonly selection: MaskSelection;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly emit: MaskEmit;
    protected readonly data: MaskData;
    /** Change flag/ Флаг изменения */
    protected change: boolean;
    /** Unidentified selection data/ Данные неопознанного выделения */
    protected unidentified?: MaskEventSelection;
    /**
     * Constructor
     * @param buffer object for managing cached input data/ объект управления кешированными вводимыми данными
     * @param focus object for handling input field focus/ объект для работы с фокусировкой поля ввода
     * @param characterLength object for managing input length/ объект управления длиной ввода
     * @param right object for right alignment/ объект для выравнивания направо
     * @param selection object for managing cursor position/ объект для управления положением курсора
     * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
     * @param emit object for handling callback events/ объект для работы с обратными событиями
     * @param data object for managing input/ объект для управления вводом
     */
    constructor(buffer: MaskBuffer, focus: MaskFocus, characterLength: MaskCharacterLength, right: MaskRight, selection: MaskSelection, valueBasic: MaskValueBasic, emit: MaskEmit, data: MaskData);
    /**
     * Capture of the event in focus.
     *
     * Перехват события при получении фокуса.
     * @param event event object/ объект события
     */
    readonly onFocus: (event: FocusEvent) => void;
    /**
     * Capture of the event when focus is lost.
     *
     * Перехват события при потере фокуса.
     * @param event event object/ объект события
     */
    readonly onBlur: (event: FocusEvent) => void;
    /**
     * Intercepting key press to get a character.
     *
     * Перехват нажатия клавиши для получения символа.
     * @param event invoked event/ вызываемое событие
     */
    readonly onKeydown: (event: KeyboardEvent) => void;
    /**
     * Intercept key release to check arrow presses.
     *
     * Перехват отпускания клавиши для проверки нажатия стрелок.
     * @param event invoked event/ вызываемое событие
     */
    readonly onKeyup: (event: KeyboardEvent) => void;
    /**
     * Intercepting the event before data modification.
     *
     * Перехват события перед изменением данных.
     * @param event invoked event/ вызываемое событие
     */
    readonly onBeforeinput: (event: InputEvent) => void;
    /**
     * Intercepting the event during data modification.
     *
     * Перехват события при изменении данных.
     * @param event invoked event/ вызываемое событие
     */
    readonly onInput: (event: InputEvent) => void;
    /**
     * Intercept paste event for inserting data from clipboard.
     *
     * Перехват события вставки данных из буфера обмена.
     * @param event invoked event/ вызываемое событие
     */
    readonly onPaste: (event: ClipboardEvent) => void;
    /**
     * Intercept change event (autocomplete support).
     *
     * Перехват события изменения (поддержка автозаполнения).
     * @param event invoked event/ вызываемое событие
     */
    readonly onChange: (event: Event) => void;
    /**
     * Intercept click to adjust selection if needed.
     *
     * Перехват клика для корректировки выделения при необходимости.
     * @param event invoked event/ вызываемое событие
     */
    readonly onClick: (event: MouseEvent) => void;
    /**
     * Was a meta button pressed.
     *
     * Была ли нажата мета-кнопка.
     * @param event invoked event/ вызываемое событие
     */
    protected isMetaKey(event: KeyboardEvent): boolean;
    /**
     * Was a cut operation performed.
     *
     * Была ли выполнена операция вырезания.
     * @param event invoked event/ вызываемое событие
     */
    protected isCut(event: KeyboardEvent): boolean;
    /**
     * Checks key value in the event.
     *
     * Проверяет значение key в событии.
     * @param event invoked event/ вызываемое событие
     */
    protected isKey(event: KeyboardEvent): boolean;
    /**
     * Was there a selection.
     *
     * Было ли выделение.
     * @param info selection data/ данные выделения
     */
    protected isSelection(info: MaskEventSelection): boolean;
    /**
     * Getting data about selection on the event element.
     *
     * Получение данных о выделении у элемента события.
     * @param event invoked event/ вызываемое событие
     */
    protected getSelectionInfo(event: Event): MaskEventSelection;
    /**
     * Preparing to send an event.
     *
     * Подготовка для отправки события.
     * @param event invoked event/ вызываемое событие
     */
    protected makeChange(event: Event): void;
    /**
     * Changes cursor position if alignment is right.
     *
     * Изменяет позицию курсора, если выравнивание справа.
     * @param event invoked event/ вызываемое событие
     */
    protected makeToEnd(event: Event): void;
    /**
     * Check selection from the start (before special chars).
     *
     * Проверка выделения спереди (перед спецсимволами).
     * @param event invoked event/ вызываемое событие
     */
    protected makeToStart(event: Event): void;
}

export declare type MaskEventData = FieldValidationItem;

export declare type MaskEventSelection = {
    target: HTMLInputElement;
    start: number;
    end: number;
    length: number;
};

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export declare interface MaskExpose {
    valueBasic: ComputedRef<string>;
    value: ComputedRef<string>;
    setValue(value: string): boolean;
    clear(): boolean;
}

/**
 * Class for storing element focus state.
 *
 * Класс для хранения состояния фокуса элемента.
 */
declare class MaskFocus {
    protected readonly buffer: MaskBuffer;
    /** Focus state flag/ Флаг состояния фокуса */
    protected value: boolean;
    /**
     * Constructor
     * @param buffer buffer helper object/ объект помощник буфера
     */
    constructor(buffer: MaskBuffer);
    /**
     * Returns current focus state.
     *
     * Возвращает текущее состояние фокуса.
     */
    is(): boolean;
    /**
     * Sets focus state to active and resets buffer.
     *
     * Устанавливает состояние фокуса активным и сбрасывает буфер.
     */
    in(): void;
    /**
     * Removes focus state and resets buffer.
     *
     * Снимает состояние фокуса и сбрасывает буфер.
     */
    out(): void;
}

/**
 * Class for working with formatted number / currency masks.
 *
 * Класс для работы с форматированными масками числа / валюты.
 */
declare class MaskFormat {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     * @param rubberItem rubber groups helper/ объект помощник резиновых групп
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem);
    /** Special symbols configuration (groups) for numeric input / Конфигурация специальных символов (группы) для числового ввода */
    readonly special: MaskSpecialProp;
    /** Rubber mask instructions (dynamic length per group) / Инструкции резиновой маски (динамическая длина по группам) */
    readonly rubber: ComputedRef<MaskSpecialList>;
    /** Base view symbol per group / Базовый отображаемый символ для группы */
    readonly view: ComputedRef<string>;
    /** Fraction digits count / Количество знаков после запятой */
    readonly fraction: ComputedRef<number>;
    /** Returns mask characters for current numeric type / Возвращает символы маски для текущего числового типа */
    readonly mask: ComputedRef<string[]>;
    /**
     * Is fraction part rubber (dynamic)?
     *
     * Является ли дробная часть резиновой (динамичной)?
     */
    isFractionRubber(): boolean;
    /**
     * Returns standardized raw numeric value (integer or integer.fraction).
     *
     * Возвращает стандартизированное «сырое» числовое значение (целое или целое.дробь).
     * @param value masks data object/ объект масок
     */
    getValueStandard(value: FieldMasks): string;
    /** Returns base number mask string.
     *
     * Возвращает строку маски числа.
     */
    getNumber(): string;
    /**
     * Returns formatted number mask string.
     *
     * Возвращает форматированную строку числа.
     */
    getNumberFormat(): string;
    /**
     * Returns currency mask string with appended currency symbol.
     *
     * Возвращает строку маски валюты с добавленным символом валюты.
     */
    getCurrency(): string;
    /**
     * Returns list of delimiter characters for switching to fraction part.
     *
     * Возвращает список символов-разделителей для перехода к дробной части.
     */
    getDecimal(): string[];
    /**
     * Returns list of special group keys.
     *
     * Возвращает список ключей групп специальных символов.
     */
    getSpecial(): string[];
    /**
     * Returns GeoIntl helper instance.
     *
     * Возвращает экземпляр помощника GeoIntl.
     */
    protected getIntl(): GeoIntl;
    /**
     * Builds base numeric pattern string (with optional fraction & currency).
     *
     * Формирует базовую строку числового паттерна (с необязательной дробью и валютой).
     */
    protected getNumberForString(): string;
    /**
     * Converts digit markers (9/3) to group symbols (n/f).
     *
     * Преобразует цифровые маркеры (9/3) в групповые символы (n/f).
     */
    protected toSpecial(mask: string): string[];
}

export declare type MaskFractionItem = string | boolean | number;

/**
 * Class for working with a mask.
 *
 * Класс для работы с маской.
 */
declare class MaskItem {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly characterLength: MaskCharacterLength;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly special: MaskSpecial;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
     * @param characterLength object for managing input length/ объект управления длиной ввода
     * @param date object for working with date types/ объект для работы с типом даты
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     * @param special object for working with special characters/ объект для работы со специальными символами
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem, characterLength: MaskCharacterLength, date: MaskDate, format: MaskFormat, special: MaskSpecial);
    /**
     * Returns the current mask.
     *
     * Возвращает текущую маску.
     */
    readonly item: ComputedRef<string[]>;
    /**
     * Returns an array with information about the location of all special characters.
     *
     * Возвращает массив с информацией о расположении всех специальных символов.
     */
    readonly info: ComputedRef<MaskSpecialInfo[]>;
    /**
     * Returns the length of the mask or the maximum length of masks if there are several.
     *
     * Возвращает длину маски или максимальную длину масок, если их несколько.
     */
    readonly maxLength: ComputedRef<number>;
    /**
     * Returns the mask symbol by its index.
     *
     * Возвращает символ маски по его индексу.
     * @param index index of the symbol's location/ индекс расположения символа
     */
    get(index: number): string;
    /**
     * Returns the location number for replacement by its input symbol.
     *
     * Возвращает номер нахождения для замены по его символу ввода.
     * @param char input symbol/ символ ввода
     * @param selection minimum index for search/ минимальный индекс для поиска
     */
    getByChar(char: string, selection?: number): number;
    /**
     * Returns the length of the active mask.
     *
     * Возвращает длину активной маски.
     */
    getLength(): number;
    /**
     * Returns the length of only special characters.
     *
     * Возвращает длину только из специальных символов.
     */
    getLengthBySpecial(): number;
    /**
     * Returns how many special characters were highlighted.
     *
     * Возвращает, сколько специальных символов было выделено.
     * @param start start of selection/ начало выделения
     * @param end end of selection/ конец выделения
     */
    getQuantity(start: number, end: number): number;
    /**
     * Returns the active mask.
     *
     * Возвращает активную маску.
     */
    protected readonly maskActive: ComputedRef<string>;
    /**
     * Returns the number of special characters in the current mask.
     *
     * Возвращает количество специальных символов в текущей маске.
     */
    protected readonly basic: ComputedRef<string[]>;
    /**
     * Returns a list of masks.
     *
     * Возвращает список масок.
     */
    protected getMask(): MaskList;
    /**
     * Returns the number of special characters in the current mask.
     *
     * Возвращает количество специальных символов в текущей маске.
     * @param mask selected mask/ выбранная маска
     */
    protected getSpecialLength(mask: string): number;
}

export declare type MaskList = string | string[];

/**
 * Class for checking an incoming character.
 *
 * Класс для проверки входящего символа.
 */
declare class MaskMatch {
    protected readonly props: MaskProps;
    protected readonly special: MaskSpecial;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param special special symbols helper/ объект помощник специальных символов
     */
    constructor(props: MaskProps, special: MaskSpecial);
    /**
     * Checks whether the character matches allowed pattern(s).
     *
     * Проверяет, соответствует ли символ разрешённому шаблону.
     * @param char character to check/ символ для проверки
     * @param groupName optional group name/ необязательное имя группы
     */
    is(char: string, groupName?: string): boolean;
    /**
     * Returns match definition (regexp or string) for group or global.
     *
     * Возвращает правило проверки (regexp или строка) для группы или глобально.
     * @param groupName group name/ имя группы
     */
    get(groupName?: string): MaskMatchItem;
    /**
     * Filters text returning only allowed characters (any group).
     *
     * Фильтрует текст, возвращая только допустимые символы (любая группа).
     * @param text source text/ исходный текст
     */
    filter(text: string): string[];
}

export declare type MaskMatchItem = RegExp | string;

/**
 * Class for producing validation pattern data per mask group.
 *
 * Класс для получения данных паттернов валидации по группам маски.
 */
declare class MaskPattern {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly special: MaskSpecial;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     * @param date date mask helper/ объект помощник маски даты
     * @param special special symbols helper/ объект помощник специальных символов
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, special: MaskSpecial);
    /** Validation input objects by group / Объекты проверки по названию группы */
    readonly item: ComputedRef<FieldInputCheckListInclude>;
    /** Patterns list by group / Список паттернов по группам */
    readonly list: ComputedRef<FieldPatternList>;
    /**
     * Checks if there is a global check pattern.
     *
     * Проверяет, есть ли глобальный паттерн проверки.
     */
    isCheck(): boolean;
    /**
     * Returns validation input object by group.
     *
     * Возвращает объект проверки по названию группы.
     * @param groupName group name (default: check)/ имя группы (по умолчанию: check)
     */
    getInput(groupName?: string): FieldInputCheckInclude | undefined;
    /**
     * Builds base patterns object depending on mask type.
     *
     * Формирует базовый объект паттернов в зависимости от типа маски.
     */
    protected getByType(): FieldPatternList;
    /**
     * Returns pattern definition for group or global pattern.
     *
     * Возвращает определение паттерна для группы или глобальный паттерн.
     * @param groupName group name/ имя группы
     */
    protected getPattern(groupName?: string): FieldPatternItemOrFunction | undefined;
}

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export declare interface MaskProps extends MaskPropsBasic, MaskPropsToken {
}

export declare interface MaskPropsBasic {
    name?: string;
    value?: string | number;
    valueDefault?: string | number;
    currency?: string;
    currencyHide?: boolean;
    fullOnly?: boolean;
    mask?: MaskList;
    special?: MaskSpecialProp;
    match?: MaskMatchItem;
    groupSave?: boolean;
    pattern?: FieldPatternItemOrFunction;
    check?: FieldPatternItemOrFunction;
    fraction?: MaskFractionItem;
    type?: MaskTypeItem;
    view?: string;
    inputAttrs?: Partial<HTMLInputElement>;
    language?: string;
}

export declare type MaskPropsInclude<Mask extends MaskPropsBasic = MaskPropsBasic> = {
    name?: string;
    mask?: string | ConstrBind<Mask>;
    maskVisible?: boolean;
    maskNone?: boolean;
    currency?: string;
    currencyHide?: boolean;
    fraction?: MaskFractionItem;
    maskAttrs?: ConstrBind<Mask>;
};

declare interface MaskPropsToken {
    visible?: boolean;
    visiblePartly?: boolean;
    align?: 'center' | 'left' | 'right';
    dir?: 'ltr' | 'rtl';
}

/**
 * Class for handling alignment of masked value (direction & numeric rules).
 *
 * Класс для управления выравниванием маски (направление и числовые правила).
 */
declare class MaskRight {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     */
    constructor(props: MaskProps, type: MaskType);
    /**
     * Returns whether the content should visually end-align (numeric, rtl, currency).
     *
     * Возвращает, нужно ли визуально выравнивать по концу (числа, rtl, валюта).
     */
    isEnd(): boolean;
    /**
     * Checks if alignment is right (explicit right or end alignment).
     *
     * Проверяет, что выравнивание справа (явно right или конечное).
     */
    isRight(): boolean;
}

/**
 * Class for working with the rubber type.
 *
 * Класс для работы с резиновым типом.
 */
declare class MaskRubber {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly rubberItem: MaskRubberItem;
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly special: MaskSpecial;
    protected readonly match: MaskMatch;
    protected readonly format: MaskFormat;
    /**
     * Constructor
     * @param props base data/ базовые данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param rubberItem object for working with rubber elements/ объект для работы с резиновыми элементами
     * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param match object for managing the input character/ объект для управления символом ввода
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     */
    constructor(props: MaskProps, type: MaskType, rubberItem: MaskRubberItem, rubberTransition: MaskRubberTransition, special: MaskSpecial, match: MaskMatch, format: MaskFormat);
    /**
     * Checks if the symbol is a transition.
     *
     * Проверяет, является ли символ перехода.
     * @param char checkable symbol/ проверяемый символ
     */
    isTransition(char: string): boolean;
    /**
     * Getting properties for the rubber group.
     *
     * Получение свойства для резиновой группы.
     * @param groupName group name/ название группы
     */
    get(groupName: string): MaskSpecialItem | undefined;
    /**
     * Updates the group of rubber symbols if all conditions are met and returns true.
     *
     * Обновляет группу резиновых символов, если все условия подходят, и возвращает true.
     * @param data values for verification/ значения для проверки
     * @param groupName group name/ название группы
     * @param char symbol for checking/ символ для проверки
     */
    update(data: FieldMasks, groupName: string, char: string): boolean;
    /**
     * Reduces the length of the entered symbol by its group.
     *
     * Уменьшает длину вводимого символа по его группе.
     * @param groupName group name/ название группы
     */
    pop(groupName: string): boolean;
    /**
     * Resets all states of all groups to the initial one.
     *
     * Сбрасывает все состояния всех групп до начального.
     */
    reset(): this;
    /** List of rubber groups/ Список резиновых групп */
    protected readonly list: ComputedRef<MaskSpecialList>;
    /** List of transition symbols/ Список символов перехода */
    protected readonly transition: ComputedRef<string[]>;
}

/**
 * Class for storing counts of entered characters for elastic ("rubber") groups.
 *
 * Класс для хранения количества введённых символов для «резиновых» групп.
 */
declare class MaskRubberItem {
    /** Map: group name -> entered length/ Карта: имя группы -> введённая длина */
    protected readonly item: Ref<Record<string, number>, Record<string, number>>;
    /**
     * Checks whether group has a non‑zero stored length.
     *
     * Проверяет, есть ли у группы ненулевая длина.
     * @param groupName group name / название группы
     */
    is(groupName: string): boolean;
    /**
     * Returns stored length for group (0 if none).
     *
     * Возвращает сохранённую длину группы (0 если нет).
     * @param groupName group name / название группы
     */
    getByIndex(groupName: string): number;
    /**
     * Increments stored length for group by 1.
     *
     * Увеличивает сохранённую длину группы на 1.
     * @param groupName group name / название группы
     */
    add(groupName: string): this;
    /**
     * Decreases stored length for group by 1 (if > 0).
     *
     * Уменьшает сохранённую длину группы на 1 (если > 0).
     * @param groupName group name / название группы
     * @returns true if decreased / true если уменьшено
     */
    pop(groupName: string): boolean;
    /**
     * Resets all stored lengths.
     *
     * Сбрасывает все сохранённые длины.
     */
    reset(): this;
    /**
     * Expands mask by duplicating matched group placeholders according to stored lengths.
     *
     * Расширяет маску, дублируя плейсхолдеры групп по сохранённым длинам.
     * @param mask original mask / исходная маска
     */
    expandMask(mask: string): string;
}

/**
 * Class for storing and working with the transition symbol for the active group.
 *
 * Класс для хранения и работы с символом перехода для активной группы.
 */
declare class MaskRubberTransition {
    /** Transition symbol value/ Значение символа перехода */
    readonly item: Ref<string, string>;
    /**
     * Checks if a transition symbol is set.
     *
     * Проверяет, установлен ли символ перехода.
     */
    is(): boolean;
    /**
     * Checks if provided char equals current transition symbol.
     *
     * Проверяет, совпадает ли символ с текущим символом перехода.
     * @param char candidate char / проверяемый символ
     */
    isChar(char: string): boolean;
    /**
     * Sets new transition symbol.
     *
     * Устанавливает новый символ перехода.
     * @param char transition symbol / символ перехода
     */
    set(char: string): this;
    /**
     * Resets transition symbol to empty.
     *
     * Сбрасывает символ перехода в пустой.
     */
    reset(): this;
}

/**
 * Class for working with the character input location.
 *
 * Класс для работы с местом ввода символа.
 */
declare class MaskSelection {
    protected readonly special: MaskSpecial;
    protected readonly mask: MaskItem;
    /** Selection value/ Значение выделения */
    protected value: number;
    /** Immediate selection value/ Значение непосредственного выделения */
    protected immediate: number;
    /** Shift flag/ Флаг сдвига */
    protected shift: boolean;
    /**
     * Constructor
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param mask object for managing masks/ объект управления маской
     */
    constructor(special: MaskSpecial, mask: MaskItem);
    /**
     * Getting the selection key number.
     *
     * Получение номера ключа выделения.
     */
    get(): number;
    /**
     * Returns the selection number for the first element that is a special symbol.
     *
     * Возвращает номер выделения для первого элемента, являющегося специальным символом.
     */
    getFirst(): number;
    /**
     * Getting the current key of the selected character.
     *
     * Получение текущего ключа выделенного символа.
     */
    getFocus(): number;
    /**
     * Getting the next key of the selected character.
     *
     * Получение следующего ключа выделенного символа.
     */
    getNext(): number;
    /**
     * Getting the previous key of the selected symbol.
     *
     * Получение предыдущего ключа выделенного символа.
     */
    getPrevious(): number;
    /**
     * Getting the key number of the nearest special character.
     *
     * Получение номера ключа ближайшего специального символа.
     */
    getImmediate(): number;
    /**
     * Getting the number of the key shifted to the left direction.
     *
     * Получение номера ключа, сдвинутого в левом направлении.
     */
    getShift(): number;
    /**
     * Changing the selection key number.
     *
     * Изменение номера ключа выделения.
     * @param selection selection number/ номер выделения
     */
    set(selection: number): this;
    /**
     * Changes the selection key number according to the mask structure.
     *
     * Изменяет номер ключа выделения по структуре маски.
     * @param selection selection number/ номер выделения
     * @param focus is the element in focus/ элемент в фокусе ли
     */
    setByMask(selection: number, focus?: boolean): this;
    /**
     * Changing the selection key for the nearest special character.
     *
     * Изменение ключа выделения для ближайшего специального символа.
     * @param immediate selection key number/ номер ключа выделения
     */
    setImmediate(immediate: number): this;
    /**
     * Turning shift on or off.
     *
     * Включение или отключение сдвига.
     * @param shift value for shift/ значение для сдвига
     */
    setShift(shift: boolean): this;
    /**
     * Resets the selection key for the nearest special character to the selection location.
     *
     * Сбрасывает ключ выделения для ближайшего специального символа до места выделения.
     */
    resetImmediate(): this;
    /**
     * Move the selection location back by 1 step.
     *
     * Передвигаем место выделения назад на 1 шаг.
     */
    goBack(): this;
    /**
     * Move the selection location forward by 1 step.
     *
     * Передвигаем место выделения вперед на 1 шаг.
     */
    goNext(): this;
    /**
     * Getting the key number at the selection location.
     *
     * Получение номера ключа по месту выделения.
     * @param selection selection location/ место выделения
     */
    protected getCharacter(selection: number): number;
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export declare interface MaskSlots {
}

/**
 * Class for working with groups defined by special symbols.
 *
 * Класс для работы с группами, определёнными специальными символами.
 */
declare class MaskSpecial {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type mask type helper/ объект помощник типа маски
     * @param date date mask helper/ объект помощник маски даты
     * @param format numeric/currency mask helper/ объект помощник числовых масок
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, format: MaskFormat);
    /**
     * Returns list of special symbols.
     *
     * Возвращает список специальных символов.
     */
    readonly item: ComputedRef<string[]>;
    /**
     * Returns map of only rubber-enabled groups.
     *
     * Возвращает карту только резиновых групп.
     */
    readonly rubberList: ComputedRef<MaskSpecialList>;
    /**
     * Checks if symbol is special.
     *
     * Проверяет, является ли символ специальным.
     * @param char symbol to check/ символ для проверки
     */
    isSpecial(char: string): boolean;
    /**
     * Checks if group has default value.
     *
     * Проверяет, имеет ли группа значение по умолчанию.
     * @param groupName group name/ название группы
     */
    isDefault(groupName: string): boolean;
    /**
     * Returns default value for group.
     *
     * Возвращает значение по умолчанию для группы.
     * @param groupName group name/ название группы
     */
    getDefault(groupName: string): MaskMatchItem | undefined;
    /**
     * Returns matcher (regexp/string) for group.
     *
     * Возвращает выражение для проверки группы.
     * @param groupName group name/ название группы
     */
    getMatch(groupName: string): MaskMatchItem | undefined;
    /**
     * Returns pattern definition for group.
     *
     * Возвращает pattern для группы.
     * @param groupName group name/ название группы
     */
    getPattern(groupName: string): FieldPatternItemOrFunction | undefined;
    /**
     * Returns view (display character) for group.
     *
     * Возвращает отображаемый символ для группы.
     * @param groupName group name/ название группы
     */
    getView(groupName: string): string | undefined;
    /**
     * Returns special property (original definition).
     *
     * Возвращает свойство special (оригинальное определение).
     */
    protected readonly special: ComputedRef<MaskSpecialProp>;
    /**
     * Returns special group item data by name.
     *
     * Возвращает данные группы special по имени.
     * @param groupName group name/ название группы
     */
    protected getSpecialItem(groupName: string): MaskSpecialItem | undefined;
}

export declare type MaskSpecialInfo = {
    index: number;
    key: number;
    char: string;
};

export declare type MaskSpecialItem = {
    defaultValue?: string;
    rubber?: boolean;
    transitionChar?: string | string[];
    minLength?: number;
    maxLength?: number;
    match?: MaskMatchItem;
    pattern?: FieldPatternItemOrFunction;
    view?: string;
};

export declare type MaskSpecialList = Record<string, MaskSpecialItem>;

export declare type MaskSpecialProp = string | string[] | MaskSpecialList;

/**
 * Class for defining the mask type.
 *
 * Класс для определения типа маски.
 */
declare class MaskType {
    protected readonly props: MaskProps;
    /**
     * Constructor
     * @param props input data/ входные данные
     */
    constructor(props: MaskProps);
    /** Current mask type (default: text)/ Текущий тип маски (по умолчанию: text) */
    readonly item: ComputedRef<MaskTypeItem>;
    /**
     * Is the mask simple number type.
     *
     * Является ли маска простым числовым типом (number).
     */
    isNumber(): boolean;
    /**
     * Is the mask formatted number type (number-format).
     *
     * Является ли маска типом форматированного числа (number-format).
     */
    isNumberFormat(): boolean;
    /**
     * Is the mask currency type.
     *
     * Является ли маска валютным типом (currency).
     */
    isCurrency(): boolean;
    /**
     * Is the mask one of numeric related types (number | number-format | currency).
     *
     * Является ли маска одним из числовых типов (number | number-format | currency).
     */
    isCurrencyOrNumber(): boolean;
    /**
     * Is the mask one of the time input types.
     *
     * Является ли маска одним из типов для ввода времени.
     */
    isTime(): boolean;
    /**
     * Is the mask one of the date (or time) input types.
     *
     * Является ли маска одним из типов для ввода даты (или времени).
     */
    isDate(): boolean;
    /**
     * Returns GeoDate-compatible mask type (fallback: date).
     *
     * Возвращает тип маски совместимый с GeoDate (если нет — date).
     */
    getByDate(): GeoDate;
}

export declare type MaskTypeItem = GeoDate | 'text' | 'number' | 'number-format' | 'currency';

/**
 * Class for working with the validity of entered data.
 *
 * Класс для работы с валидностью введённых данных.
 */
declare class MaskValidation {
    protected readonly pattern: MaskPattern;
    protected readonly value: MaskValue;
    /**
     * Constructor
     * @param pattern object for working with input data validation/ объект для работы с проверкой введённых данных
     * @param value object for working with entered data/ объект для работы с введёнными данными
     */
    constructor(pattern: MaskPattern, value: MaskValue);
    /** Validation error info or undefined/ Информация об ошибке или undefined */
    readonly item: ComputedRef<FieldValidationItem>;
    /**
     * Checks if the current group has an error.
     *
     * Проверяет, есть ли ошибка у текущей группы.
     * @param groupName group name/ название группы
     */
    isError(groupName: string): boolean;
    /**
     * Checks the correctness of filling in the values.
     *
     * Проверяет корректность заполнения значений.
     */
    checkValidity(): boolean;
    /**
     * Getting global check data.
     *
     * Получение данных глобальной проверки.
     */
    protected getValidationCheck(): FieldValidationItem;
}

/**
 * Class for transforming the entered data into the final result.
 *
 * Класс для преобразования введенных данных в конечный результат.
 */
declare class MaskValue {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly mask: MaskItem;
    protected readonly special: MaskSpecial;
    protected readonly valueBasic: MaskValueBasic;
    protected infoCache?: FieldMasks;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param date object for working with date types/ объект для работы с типом даты
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     * @param mask object for managing masks/ объект управления маской
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, format: MaskFormat, mask: MaskItem, special: MaskSpecial, valueBasic: MaskValueBasic);
    /**
     * Receiving a list with information about standard values/
     * Получение списка с информацией о стандартных значениях
     */
    readonly info: ComputedRef<FieldMasks>;
    /** Final value (shortcut)/ Финальное значение (ярлык) */
    readonly item: ComputedRef<string>;
    /** Checks if the mask is fully filled/ Проверяет, полностью ли заполнена маска */
    readonly isFull: ComputedRef<boolean>;
    /** Checks if the mask is fully filled by length/ Проверяет, полностью ли заполнена маска по длине */
    readonly isEnd: ComputedRef<boolean>;
    /**
     * Returns old values.
     *
     * Возвращает старые значения.
     */
    getValueCache(): string;
    /**
     * Getting full information for global verification.
     *
     * Получение полной информации для глобальной проверки.
     */
    getForCheck(): FieldMaskItem;
    /**
     * Getting information for a specific group.
     *
     * Получение информации для конкретной группы.
     * @param groupName group name/ название группы
     */
    getInfoItem(groupName: string): FieldMaskItem | undefined;
    /** Returns the final form of the value/ Возвращает финальный вид значения */
    protected readonly valueFinal: ComputedRef<string>;
    /**
     * Checks if there is a value by the key number in the basic values.
     *
     * Проверяет, есть ли значение по номеру ключа в базовых значениях.
     * @param index key number/ номер ключа
     */
    protected isStandard(index: number): boolean;
    /**
     * Returns values based on the specified data information structure.
     *
     * Возвращает значения по указанной структуре информации о данных.
     * @param info data information/ информация о данных
     */
    protected getValue(info: FieldMasks): string;
    /**
     * Adding a new character to the list divided by groups if it is not there and returning the property of the given group.
     *
     * Добавление нового символа в список, разделенный по группам, если его там нет, и возвращение свойства данной группы.
     * @param data data for verification/ данные для проверки
     * @param groupName group name/ название группы
     */
    protected add(data: FieldMasks, groupName: string): FieldMaskItem;
}

/**
 * Class for getting basic input values.
 *
 * Класс для получения базовых вводимых значений.
 */
declare class MaskValueBasic {
    protected readonly rubberTransition: MaskRubberTransition;
    protected readonly mask: MaskItem;
    protected readonly special: MaskSpecial;
    protected readonly character: MaskCharacter;
    /**
     * Constructor
     * @param rubberTransition object for managing the transition character/ объект для управления символом перехода
     * @param mask object for managing masks/ объект управления маской
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param character object for managing entered character/ объект для управления введённым символом
     */
    constructor(rubberTransition: MaskRubberTransition, mask: MaskItem, special: MaskSpecial, character: MaskCharacter);
    /**
     * Receiving basic standard values.
     *
     * Получение базовых стандартных значений.
     */
    readonly item: ComputedRef<string>;
    /**
     * Checks if the values are filled in.
     *
     * Проверяет, заполнены ли значения.
     */
    is(): boolean;
    /**
     * Getting the character from the basic standard values by its key number.
     *
     * Получение символа из базовых стандартных значений по его номеру ключа.
     * @param index key number/ номер ключа
     */
    getChar(index: number): string | undefined;
    /**
     * Getting the length of basic standard values.
     *
     * Получение длины базовых стандартных значений.
     */
    getLength(): number;
}

/**
 * Class for working with data to output to the screen.
 *
 * Класс для работы с данными для вывода на экран.
 */
declare class MaskView {
    protected readonly props: MaskProps;
    protected readonly type: MaskType;
    protected readonly date: MaskDate;
    protected readonly format: MaskFormat;
    protected readonly special: MaskSpecial;
    protected readonly rubber: MaskRubber;
    protected readonly mask: MaskItem;
    protected readonly valueBasic: MaskValueBasic;
    protected readonly validation: MaskValidation;
    /** Class name prefix for item/ Класс для элемента */
    protected classNameItem: string;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param type object for working with the mask type/ объект для работы с типом маски
     * @param date object for working with date types/ объект для работы с типом даты
     * @param format object for managing numeric mask types/ объект для управления числовыми типами масок
     * @param special object for working with special characters/ объект для работы со специальными символами
     * @param rubber object for working with rubber types/ объект для работы с резиновыми типами
     * @param mask object for managing masks/ объект управления маской
     * @param valueBasic object for working with base values/ объект для работы с базовыми значениями
     * @param validation object for working with validation/ объект для работы с валидацией
     * @param className define class names for each symbol/ определить название класса для каждого символа
     */
    constructor(props: MaskProps, type: MaskType, date: MaskDate, format: MaskFormat, special: MaskSpecial, rubber: MaskRubber, mask: MaskItem, valueBasic: MaskValueBasic, validation: MaskValidation, className: string);
    /** View items list/ Список данных для отображения */
    readonly item: ComputedRef<MaskViewList>;
    /** Input value with special view characters/ Значение ввода со спецсимволами отображения */
    readonly input: ComputedRef<string>;
    /**
     * Checks if the value is filled in.
     *
     * Проверяет, заполнено ли значение.
     * @param value checked value/ проверяемое значение
     */
    protected isValue(value?: string): value is string;
    /**
     * Returns the status by mask symbol and its position.
     *
     * Возвращает статус по символу маски и месту его расположения.
     * @param char mask symbol/ символ маски
     * @param value entered value for this position/ введённое значение для позиции
     */
    protected getStatus(char: string, value?: string): string;
    /**
     * Returns symbol for rendering: real value or placeholder.
     *
     * Возвращает символ для отображения: реальное значение или плейсхолдер.
     * @param char mask symbol/ символ маски
     * @param value entered value for position/ введённое значение позиции
     */
    protected getValue(char: string, value?: string): string;
    /**
     * Returns display version of special mask symbol (placeholder).
     *
     * Возвращает отображаемую версию специального символа маски (плейсхолдер).
     * @param char mask symbol/ символ маски
     */
    protected getSpecialToView(char: string): string;
    /**
     * Returns special character for view by its group name.
     *
     * Возвращает специальный символ для отображения по имени группы.
     * @param groupName group name/ имя группы
     */
    protected getViewChar(groupName: string): string | undefined;
}

export declare type MaskViewItem = {
    className: string;
    value: string;
};

export declare type MaskViewList = MaskViewItem[];

/**
 * Props for model value used with v-model/
 * Свойства для значения модели, используемого с v-model
 */
declare interface ModelProps<Value = string> {
    /** Model value prop/ Свойство значения модели */
    'modelValue'?: Value;
    /** Update value handler/ Обработчик обновления значения */
    'onUpdate:value'?: (value: Value) => void;
    /** Update model value handler/ Обработчик обновления значения модели */
    'onUpdate:modelValue'?: (value: Value) => void;
}

export { }
