/** Union type for undefined and null values/ Объединенный тип для undefined и null значений */
export type Undefined = undefined | null

/**
 * Union type for all "empty" values including falsy primitives and string representations/
 * Объединенный тип для всех "пустых" значений включая ложные примитивы и строковые представления
 */
export type EmptyValue = Undefined | 0 | false | '' | 'undefined' | 'null' | '0' | 'false' | '[]'

/** Union type for numeric and string values/ Объединенный тип для числовых и строковых значений */
export type NumberOrString = number | string

/**
 * Union type for numeric, string, and boolean values/
 * Объединенный тип для числовых, строковых и булевых значений
 */
export type NumberOrStringOrBoolean = number | string | boolean

/**
 * Union type for numeric, string, and Date values/
 * Объединенный тип для числовых, строковых значений и Date
 */
export type NumberOrStringOrDate = NumberOrString | Date

/**
 * Generic type that can be either a single value or an array of values/
 * Дженерик тип для одиночного значения или массива значений
 */
export type NormalOrArray<T = NumberOrString> = T | T[]

/**
 * Generic type that can be either a direct value or a Promise resolving to that value/
 * Дженерик тип для прямого значения или Promise
 */
export type NormalOrPromise<T> = T | Promise<T>

/**
 * Generic record/object type with string keys/
 * Дженерик тип записи/объекта со строковыми ключами
 */
export type ObjectItem<T = any> = Record<string, T>

/** Generic type that can be either an array or an object/ Дженерик тип для массива или объекта */
export type ObjectOrArray<T = any> = T[] | ObjectItem<T>

// Function
/**
 * Function type that returns a value of type R/
 * Тип функции, возвращающей значение типа R
 */
export type FunctionReturn<R = any> = () => R

/** Function type that returns void/ Тип функции, возвращающей void */
export type FunctionVoid = () => void

/**
 * Function type that accepts multiple arguments of type T and returns type R/
 * Тип функции с переменными аргументами
 */
export type FunctionArgs<T, R> = (...args: T[]) => R

/**
 * Most generic function type that accepts any arguments and returns any value/
 * Наиболее общий тип функции
 */
export type FunctionAnyType<T = any, R = any> = (...args: T[]) => R

// Item
/**
 * Generic record type for lists with string keys/
 * Дженерик тип записи для списков со строковыми ключами
 */
export type ItemList<T = any> = Record<string, T>

/**
 * Generic item type with index and value properties/
 * Дженерик тип элемента со свойствами index и value
 */
export type Item<V> = {
  /** Unique string identifier for the item/ Уникальный строковый идентификатор элемента */
  index: string
  /** The actual value of the item/ Фактическое значение элемента */
  value: V
}

/**
 * Generic item type with label and value properties/
 * Дженерик тип элемента со свойствами label и value
 */
export type ItemValue<V> = {
  /** Display text for the item/ Отображаемый текст для элемента */
  label: string
  /** The actual value of the item/ Фактическое значение элемента */
  value: V
}

/**
 * Generic item type with name and value properties/
 * Дженерик тип элемента со свойствами name и value
 */
export type ItemName<V> = {
  /** Name identifier (string or number)/ Идентификатор имени (строка или число) */
  name: string | number
  /** The actual value of the item/ Фактическое значение элемента */
  value: V
}

// Element
/**
 * Union type for HTML elements and Window object/
 * Объединенный тип для HTML элементов и объекта Window
 */
export type ElementOrWindow = HTMLElement | Window

/**
 * Generic type that can be either an element or a string selector/
 * Дженерик тип для элемента или строкового селектора
 */
export type ElementOrString<E extends ElementOrWindow> = E | string

/** Type for event listener options/ Тип для опций обработчика событий */
export type EventOptions = AddEventListenerOptions | boolean | undefined

/**
 * Generic event listener function type with additional detail parameter/
 * Дженерик тип функции обработчика событий с дополнительным параметром detail
 */
export type EventListenerDetail<
  O extends Event,
  D extends Record<string, any>
> = (event: O, detail?: D) => void

/**
 * Type for tracking active event listeners and observers/
 * Тип для отслеживания активных обработчиков событий и наблюдателей
 */
export type EventActivityItem<E extends ElementOrWindow> = {
  /** The target element for the event/ Целевой элемент для события */
  element: E | undefined
  /** The event type name/ Название типа события */
  type: string
  /** Optional custom event listener/ Опциональный пользовательский обработчик событий */
  listener?: (event: any | Event) => void
  /** Optional ResizeObserver instance/ Опциональный экземпляр ResizeObserver */
  observer?: ResizeObserver
}

// Image
/** Type for 2D coordinates/ Тип для 2D координат */
export type ImageCoordinator = {
  /** X-axis coordinate/ Координата по оси X */
  x: number
  /** Y-axis coordinate/ Координата по оси Y */
  y: number
}
