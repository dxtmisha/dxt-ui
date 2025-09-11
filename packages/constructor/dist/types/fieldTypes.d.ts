import { NumberOrString } from '@dxt-ui/functional';
import { ModelProps } from './modelTypes';
export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement;
export type FieldElementInput = FieldElementDom | HTMLElement | Record<string, any> | undefined;
export type FieldValidityCodeItem = {
    [K in keyof ValidityState]?: string;
};
export type FieldValidityCode = string | FieldValidityCodeItem;
export type FieldPatternElement = Partial<HTMLInputElement>;
export type FieldPatternItem = string | FieldPatternElement;
export type FieldPatternItemOrFunction = FieldPatternItem | ((item: any) => FieldPatternItem);
export type FieldPatternList = Record<string, FieldPatternItemOrFunction>;
export type FieldMatchItem = {
    name?: string | HTMLInputElement;
    validationMessage?: string;
};
export type FieldMatch = string | HTMLInputElement | FieldMatchItem;
export type FieldCheckMain = {
    group: string;
    input?: FieldElementDom;
    pattern?: FieldPatternItemOrFunction;
};
export type FieldCheckItem<Value = any> = FieldCheckMain & {
    check(value: Value): FieldValidationItem<Value>;
};
export type FieldCheckList = Record<string, FieldCheckItem>;
export type FieldValidationItem<Value = any> = FieldCheckMain & {
    type?: string;
    status?: boolean;
    required?: boolean;
    isFull?: boolean;
    validationMessage?: string;
    validity?: ValidityState;
    value: Value;
    valueInput?: Value;
    detail?: Record<string, any>;
};
/**
 * Properties that describe the value and its handling/
 * Свойства, описывающие значение и работу с ним
 *
 * Used by the ValueInclude class to read/write value and constraints/
 * Используется классом ValueInclude для чтения/записи значения и ограничений
 */
export interface FieldValueProps<Value = any> extends ModelProps<Value> {
    /** Placeholder text shown when value is empty/ Текст подсказки при пустом значении */
    placeholder?: string;
    /** Multiple selection/value mode/ Режим множественного значения/выбора */
    multiple?: boolean;
    /** Maximum allowed length for value/ Максимальная допустимая длина значения */
    maxlength?: NumberOrString;
    /** Controlled value (without v-model)/ Контролируемое значение (без v-model) */
    value?: Value;
}
/**
 * Basic HTML input attributes without value-length specifics/
 * Базовые HTML атрибуты инпута без ограничений длины и multiple
 */
export interface FieldBasicProps<Value = any> extends Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> {
    /** Input type/ Тип инпута */
    type?: string;
    /** Input name attribute/ Атрибут name */
    name?: string;
    /** Input id attribute/ Атрибут id */
    id?: string;
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
    match?: FieldMatch;
    /** Additional attributes for the input element/ Дополнительные атрибуты для элемента инпута */
    inputAttrs?: Record<string, any>;
}
/**
 * Numeric stepping and range constraints/
 * Ограничения шага и диапазона числовых значений
 */
export interface FieldStepProps {
    /** Step size for numeric inputs/ Шаг для числовых инпутов */
    step?: NumberOrString;
    /** Minimum value/ Минимальное значение */
    min?: NumberOrString;
    /** Maximum value/ Максимальное значение */
    max?: NumberOrString;
}
/**
 * Text length constraints (characters, items)/
 * Ограничения длины текста (символы, элементы)
 */
export interface FieldLength {
    /** Minimum length/ Минимальная длина */
    minlength?: NumberOrString;
    /** Maximum length/ Максимальная длина */
    maxlength?: NumberOrString;
}
/**
 * UX input control attributes/
 * Атрибуты управления UX вводом
 */
export interface FieldUxProps {
    /** Autocomplete hint/ Подсказка автозаполнения */
    autocomplete?: string;
    /** Auto capitalization mode/ Режим авто-капитализации */
    autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string;
    /** Input mode hint (virtual keyboard)/ Подсказка режима ввода (виртуальная клавиатура) */
    inputmode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string;
    /** Enter key hint/ Подсказка для клавиши Enter */
    enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string;
    /** Spellcheck flag/ Проверка орфографии */
    spellcheck?: boolean | 'true' | 'false';
    /** Autocorrect mode (iOS/Safari)/ Режим автокоррекции (iOS/Safari) */
    autocorrect?: 'on' | 'off' | string;
}
/**
 * Composite props for standard textual / numeric inputs/
 * Составные свойства стандартных текстовых / числовых инпутов
 */
export interface FieldInputProps<Value = any> extends FieldBasicProps<Value>, FieldStepProps, FieldLength, FieldUxProps {
    /** Validation pattern (regexp)/ Паттерн валидации (рег. выражение) */
    pattern?: string;
    /** Datalist id reference/ Ссылка на datalist */
    list?: string;
}
/**
 * Props for file input elements (type="file")/
 * Свойства для инпутов выбора файлов (type="file")
 */
export interface FieldInputFileProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLength, FieldUxProps {
    /** Multiple files selection flag/ Флаг выбора нескольких файлов */
    multiple?: boolean;
    /** Accept file types list (MIME, extensions)/ Список допустимых типов (MIME, расширения) */
    accept?: string;
    /** Capture mode for media input (mobile)/ Режим захвата для медиа (мобильные устройства) */
    capture?: string | boolean;
    /** Show number input arrows (type="number" only)/ Показать стрелки числового ввода (только для type="number") */
    arrow?: string;
}
/**
 * Props for checkbox & radio inputs (excluding type field)/
 * Свойства для инпутов checkbox и radio (без поля type)
 */
export interface FieldInputCheckProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldUxProps {
    /** Checked state/ Состояние выбора */
    checked?: boolean;
    /** Indeterminate visual state (checkbox only)/ Промежуточное визуальное состояние (только для checkbox) */
    indeterminate?: boolean;
}
/**
 * Props for textarea elements with sizing & wrapping/
 * Свойства для textarea с поддержкой размеров и переноса
 */
export interface FieldTextareaProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'>, FieldLength, FieldUxProps {
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
 * Props for select elements (single & multiple)/
 * Свойства для select элементов (одиночный и множественный выбор)
 */
export interface FieldSelectProps<Value = any> extends Omit<FieldBasicProps<Value>, 'type'> {
    /** Multiple selection mode/ Режим множественного выбора */
    multiple?: boolean;
}
/**
 * All possible field properties combined/
 * Все возможные свойства поля в одном интерфейсе
 */
export interface FieldAllProps<Value = any> extends FieldInputProps<Value>, FieldInputFileProps<Value>, FieldInputCheckProps<Value>, FieldTextareaProps<Value>, FieldSelectProps<Value> {
}
