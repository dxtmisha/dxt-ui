import type { ComputedRef, ShallowRef } from 'vue'
import type { ListRecord, NumberOrString, NumberOrStringOrBoolean } from '@dxtmisha/functional'
import type { ModelEmits, ModelProps } from './modelTypes'

/** Supported field types/ Поддерживаемые типы полей */
export type FieldType
  = 'text'
    | 'search'
    | 'number'
    | 'number-format'
    | 'currency'
    | 'email'
    | 'password'
    | 'datetime'
    | 'date'
    | 'year-month'
    | 'time'
    | 'hour-minute'
    | 'tel'
    | 'url'
    | 'checkbox'
    | 'radio'

/** Base input or textarea element/ Базовый элемент input или textarea */
export type FieldElementDom = HTMLInputElement | HTMLTextAreaElement
/** Any supported field element (native, wrapper, record)/ Любой поддерживаемый элемент поля (нативный, обёртка, объект) */
export type FieldElementInput = FieldElementDom
  | HTMLElement
  | Record<string, any>
  | undefined

/** Map validity flags to custom messages/ Отображение флагов валидности в кастомные сообщения */
export type FieldValidityCodeItem = {
  [K in keyof ValidityState]?: string
}
/** Global validation message or map/ Глобальное сообщение или карта сообщений */
export type FieldValidityCode = string | FieldValidityCodeItem

/** Single mask fragment meta/ Один фрагмент маски с мета‑данными */
export type FieldMaskItem = {
  /** Group key/ Ключ группы */
  group: string
  /** Accumulated value/ Накопленное значение */
  value: string
  /** Max length for fragment/ Максимальная длина фрагмента */
  maxLength: number
  /** Fragment filled flag/ Фрагмент заполнен */
  full: boolean
  /** Caret end flag/ Флаг конца ввода */
  end: boolean
  /** Characters extracted from value (value split into array)/ Символы извлечённые из value (value разделено на массив символов) */
  chars: string[]
}
/** Masks data split by groups/ Данные маски, разделённые на группы */
export type FieldMasks = Record<string, FieldMaskItem>

/** Partial input element for pattern/ Частичный элемент для pattern */
export type FieldPatternElement = Partial<HTMLInputElement>
/** Pattern string or element/ Строка шаблона или элемент */
export type FieldPatternItem = string | FieldPatternElement
/** Pattern or factory function/ Шаблон или функция‑генератор */
export type FieldPatternItemOrFunction = FieldPatternItem | ((item: FieldMasks) => FieldPatternItem)
/** Named pattern list/ Список именованных шаблонов */
export type FieldPatternList = Record<string, FieldPatternItemOrFunction>

/** Match config object/ Объект конфигурации совпадения */
export type FieldMatchItem = {
  /** Target name or element/ Имя цели или элемент */
  name?: string | HTMLInputElement
  /** Custom validation message/ Кастомное сообщение ошибки */
  validationMessage?: string
}
/** Match definition (string | element | object)/ Описание совпадения (строка | элемент | объект) */
export type FieldMatch = string | HTMLInputElement | FieldMatchItem

/** Base data for validation check/ Базовые данные проверки */
export type FieldCheckMain = {
  /** Group key/ Ключ группы */
  group?: string
  /** Related input element/ Связанный элемент ввода */
  input?: FieldElementDom
  /** Pattern used/ Используемый шаблон */
  pattern?: FieldPatternItemOrFunction
}
/** Check item interface/ Элемент проверки */
export type FieldCheckItem<Value = any>
  = FieldCheckMain
    & {
      /** Run validation for value/ Выполнить проверку значения */
      check(value: Value): FieldValidationItem<Value>
    }
/** Map of check items/ Карта элементов проверки */
export type FieldCheckList = Record<string, FieldCheckItem>

/** Single validation result/ Результат одной проверки */
export type FieldValidationItem<Value = any>
  = FieldCheckMain
    & {
      /** Custom type marker/ Произвольный тип */
      type?: string
      /** Pass status/ Статус успешности */
      status?: boolean
      /** Required flag/ Флаг обязательности */
      required?: boolean
      /** Full value flag/ Флаг полноты значения */
      isFull?: boolean
      /** Message text/ Текст сообщения */
      validationMessage?: string
      /** Native validity state/ Нативное состояние валидности */
      validity?: ValidityState
      /** Custom validity message (overrides native)/ Кастомное сообщение валидности (перекрывает нативное) */
      validityMessage?: string
      /** Original value/ Исходное значение */
      value: Value
      /** Raw input value/ Введённое значение */
      valueInput?: Value
      /** Extra details/ Дополнительные данные */
      detail?: Record<string, any>
    }

/**
 * Emitted events for field components/
 * Эмитируемые события для компонентов поля
 */
export type FieldBasicEmits<T = string>
  = ModelEmits
    & {
      /**
       * Emitted on input events (every change while typing)/
       * Эмит при вводе (каждое изменение): [event, value]
       */
      input: [event: InputEvent | Event, value: FieldValidationItem<T>]
      /**
       * Lightweight input emit without DOM event/
       * Лёгкий эмит ввода без DOM-события: [value]
       */
      inputLite: [value: FieldValidationItem<T>]
      /**
       * Emitted when value is committed (blur/confirm)/
       * Эмит при подтверждении значения (blur/confirm): [event, value]
       */
      change: [event: InputEvent | Event, value: FieldValidationItem<T>]
      /**
       * Lightweight change emit without DOM event/
       * Лёгкий эмит подтверждения без события: [value]
       */
      changeLite: [value: FieldValidationItem<T>]
    }

export type FieldBasicExpose<T = string> = {
  value: ShallowRef<T | undefined>

  checkValidity: () => boolean
  validationMessage: ComputedRef<string>
}

/**
 * Properties that describe the value and its handling/
 * Свойства, описывающие значение и работу с ним
 *
 * Used by the ValueInclude class to read/write value and constraints/
 * Используется классом ValueInclude для чтения/записи значения и ограничений
 */
export type FieldValueProps<Value = any> = ModelProps<Value> & {
  /** Placeholder text shown when value is empty/ Текст подсказки при пустом значении */
  placeholder?: string
  /** Multiple selection/value mode/ Режим множественного значения/выбора */
  multiple?: boolean
  /** Maximum allowed length for value/ Максимальная допустимая длина значения */
  maxlength?: NumberOrString
  /** Controlled value (without v-model)/ Контролируемое значение (без v-model) */
  value?: Value
  /** Additional event details/ Дополнительные детали события */
  detail?: Record<string, any> | undefined
}

/**
 * Basic HTML input attributes without value-length specifics/
 * Базовые HTML атрибуты инпута без ограничений длины и multiple
 */
export type FieldBasicProps<Value = any>
  = Omit<FieldValueProps<Value>, 'multiple' | 'maxlength'> & {
    /** Input type/ Тип инпута */
    type?: 'text'
      | 'search'
      | 'number'
      | 'number-format'
      | 'currency'
      | 'email'
      | 'password'
      | 'datetime'
      | 'date'
      | 'year-month'
      | 'time'
      | 'hour-minute'
      | 'tel'
      | 'url'
      | 'checkbox'
      | 'radio'

    /** Input name attribute/ Атрибут name */
    name?: string
    /** Input id attribute/ Атрибут id */
    id?: string | number

    /** Required flag/ Обязательное поле */
    required?: boolean
    /** Readonly state/ Режим только для чтения */
    readonly?: boolean
    /** Disabled state/ Состояние отключения */
    disabled?: boolean

    /** Autofocus flag/ Автофокус при загрузке */
    autofocus?: boolean
    /** Tab index order/ Порядок табуляции */
    tabindex?: number

    /** Form id this input belongs to/ ID формы, к которой относится инпут */
    form?: string

    /** Validation error text or map of texts/ Текст ошибки валидации или карта текстов */
    validationCode?: FieldValidityCode
    /**
     * Standard validation message (overrides default)/
     * Стандартное сообщение валидации (перекрывает дефолтное)
     */
    validationMessage?: string

    /** Match config to compare with another field/ Конфигурация сравнения со вторым полем */
    match?: FieldMatch

    /** Additional attributes for the input element/ Дополнительные атрибуты для элемента инпута */
    inputAttrs?: Record<string, any>
  }

/**
 * Numeric stepping and range constraints/
 * Ограничения шага и диапазона числовых значений
 */
export type FieldStepProps = {
  /** Step size for numeric inputs/ Шаг для числовых инпутов */
  step?: NumberOrString
  /** Minimum value/ Минимальное значение */
  min?: NumberOrString
  /** Maximum value/ Максимальное значение */
  max?: NumberOrString
}

/**
 * Input arrow controls (for type="number")/
 * Управление стрелками ввода (для type="number")
 */
export type FieldArrowProps = {
  /** Arrow type/ Тип стрелок */
  arrow?: 'auto' | 'carousel' | 'stepper' | 'none'
  /** Step size for input arrows (type="number" only)/ Шаг для стрелок ввода (только для type="number") */
  arrowStep?: NumberOrString
  /** Arrow alignment/ Выравнивание стрелок */
  arrowAlign?: 'center' | 'right' | 'left'
}

/**
 * Text length constraints (characters, items)/
 * Ограничения длины текста (символы, элементы)
 */
export type FieldLengthProps = {
  /** Minimum length/ Минимальная длина */
  minlength?: NumberOrString
  /** Maximum length/ Максимальная длина */
  maxlength?: NumberOrString
}

/**
 * Validation pattern attribute/
 * Атрибут паттерна валидации
 */
export type FieldPatternProps = {
  /** Validation pattern (regexp)/ Паттерн валидации (рег. выражение) */
  pattern?: string
}

/**
 * UX input control attributes/
 * Атрибуты управления UX вводом
 */
export type FieldUxProps = {
  /** Autocomplete hint/ Подсказка автозаполнения */
  autocomplete?: string
  /** Auto capitalization mode/ Режим авто-капитализации */
  autocapitalize?: 'off' | 'none' | 'sentences' | 'words' | 'characters' | string
  /** Input mode hint (virtual keyboard)/ Подсказка режима ввода (виртуальная клавиатура) */
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url' | string
  /** Enter key hint/ Подсказка для клавиши Enter */
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send' | string
  /** Spellcheck flag/ Проверка орфографии */
  spellcheck?: boolean | 'true' | 'false'
  /** Autocorrect mode (iOS/Safari)/ Режим автокоррекции (iOS/Safari) */
  autocorrect?: 'on' | 'off' | string
}

/**
 * Composite props for standard textual / numeric inputs/
 * Составные свойства стандартных текстовых / числовых инпутов
 */
export type FieldInputProps<Value = any>
  = FieldBasicProps<Value>
    & FieldStepProps
    & FieldArrowProps
    & FieldLengthProps
    & FieldPatternProps
    & FieldUxProps & {
      /** Datalist id reference/ Ссылка на datalist */
      list?: string

      // Style
      iconVisibility?: string
      iconVisibilityOff?: string
    }

/**
 * Props for file input elements (type="file")/
 * Свойства для инпутов выбора файлов (type="file")
 */
export type FieldInputFileProps<Value = any>
  = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    /** Multiple files selection flag/ Флаг выбора нескольких файлов */
    multiple?: boolean
    /** Accept file types list (MIME, extensions)/ Список допустимых типов (MIME, расширения) */
    accept?: string
    /** Capture mode for media input (mobile)/ Режим захвата для медиа (мобильные устройства) */
    capture?: string | boolean
  }

/**
 * Props for checkbox & radio inputs (excluding type field)/
 * Свойства для инпутов checkbox и radio (без поля type)
 */
export type FieldInputCheckProps<Value = boolean>
  = Omit<FieldBasicProps<Value>, 'type'> & FieldUxProps & {
    type?: 'checkbox' | 'radio'
    valueVariant?: NumberOrStringOrBoolean
    /** Indeterminate visual state (checkbox only)/ Промежуточное визуальное состояние (только для checkbox) */
    indeterminate?: boolean
  }

/**
 * Props for textarea elements with sizing & wrapping/
 * Свойства для textarea с поддержкой размеров и переноса
 */
export type FieldTextareaProps<Value = any>
  = Omit<FieldBasicProps<Value>, 'type'> & FieldLengthProps & FieldUxProps & {
    /** Number of visible text lines/ Количество видимых строк */
    rows?: NumberOrString
    /** Number of visible columns/ Количество видимых колонок */
    cols?: NumberOrString
    /** Text wrapping mode/ Режим переноса текста */
    wrap?: 'soft' | 'hard' | 'off' | string
    /** Automatic field sizing mode (CSS field-sizing)/ Режим автоизменения размера (CSS field-sizing) */
    fieldSizing?: 'content' | 'fixed' | string
  }

/**
 * Props for select elements (single & multiple)/
 * Свойства для select элементов (одиночный и множественный выбор)
 */
export type FieldSelectProps<Value = any>
  = Omit<FieldBasicProps<Value>, 'type'> & Omit<FieldStepProps, 'min' | 'step'> & FieldArrowProps & FieldUxProps & {
    // Value
    option?: ListRecord

    // Style
    /** Multiple selection mode/ Режим множественного выбора */
    multiple?: boolean
  }

/**
 * All possible field properties combined/
 * Все возможные свойства поля в одном интерфейсе
 */
export type FieldAllProps<Value = any>
  = FieldInputProps<Value>
    & FieldInputFileProps<Value>
    & FieldInputCheckProps<Value>
    & FieldTextareaProps<Value>
    & FieldSelectProps<Value>
