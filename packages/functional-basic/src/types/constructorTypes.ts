import type { Undefined } from './basicTypes'

/** Generic record type for constructor items / Дженерик тип записи для элементов конструктора */
export type ConstrItem = Record<string, any>

/** Constructor value wrapper with optional value property / Обертка значения конструктора с опциональным свойством value */
export type ConstrValue<T = any> = {
  /** Optional value of type T / Опциональное значение типа T */
  value?: T
}

/** Generic record type for constructor components / Дженерик тип записи для компонентов конструктора */
export type ConstrComponent = Record<string, any>

/** Utility type to convert union types to intersection types / Утилитарный тип для преобразования объединенных типов в пересеченные */
export type UnionToIntersection<U> = (U extends unknown ? (value: U) => void : never) extends (value: infer I) => void ? I : never

/** Extract emit item type from constructor item / Извлечение типа элемента emit из элемента конструктора */
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T]

/**
 * Constructor emit type with proper event handler signatures /
 * Тип emit конструктора с правильными сигнатурами обработчиков событий
 */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
  [K in keyof T]: (event: K, ...args: T[K]) => void
}>>

/** Object type for CSS class names with boolean values / Тип объекта для CSS классов с булевыми значениями */
export type ConstrClassObject = Record<string, boolean | undefined>

/**
 * Constructor class type supporting strings, arrays, and objects /
 * Тип класса конструктора, поддерживающий строки, массивы и объекты
 */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject

/** Record type for mapping class names to class definitions / Тип записи для сопоставления имен классов с определениями классов */
export type ConstrClassList = Record<string, ConstrClass>

/** Constructor classes with required main class and additional class list / Классы конструктора с обязательным основным классом и дополнительным списком классов */
export type ConstrClasses = { main: ConstrClass } & ConstrClassList

/** Constructor style item type for individual style properties / Тип элемента стиля конструктора для отдельных свойств стиля */
export type ConstrStylesItem = string | number | Undefined

/**
 * Constructor styles type supporting objects and arrays of style definitions /
 * Тип стилей конструктора, поддерживающий объекты и массивы определений стилей
 */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[]

/** Constructor registration configuration / Конфигурация регистрации конструктора */
export type ConstrRegistration = {
  /** Optional flag for registration / Опциональный флаг для регистрации */
  flag?: boolean
  /** Optional translation map / Опциональная карта переводов */
  translate?: Record<string, string>
}

/**
 * Props for link handling / Пропсы для обработки ссылок
 */
export type ConstrHrefProps = {
  /** Hyperlink reference / Гиперссылка */
  href?: string
}
