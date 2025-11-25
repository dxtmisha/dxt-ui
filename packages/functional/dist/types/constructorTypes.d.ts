import { Ref, PropType } from 'vue';
import { Undefined } from '@dxtmisha/functional-basic';
import { RefOrNormal, RefType } from './refTypes';
/** Generic record type for constructor items/ Дженерик тип записи для элементов конструктора */
export type ConstrItem = Record<string, any>;
/** Constructor value wrapper with optional value property/ Обертка значения конструктора с опциональным свойством value */
export type ConstrValue<T = any> = {
    /** Optional value of type T/ Опциональное значение типа T */
    value?: T;
};
/** Generic record type for constructor components/ Дженерик тип записи для компонентов конструктора */
export type ConstrComponent = Record<string, any>;
/**
 * Constructor component modification type with reactive or normal values/
 * Тип модификации компонента конструктора с реактивными или обычными значениями
 */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
    [K in keyof P]?: RefOrNormal<P[K]>;
};
/** Utility type to convert union types to intersection types/ Утилитарный тип для преобразования объединенных типов в пересеченные */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
/** Extract emit item type from constructor item/ Извлечение типа элемента emit из элемента конструктора */
export type ConstrEmitItem<T extends ConstrItem> = T[keyof T];
/**
 * Constructor emit type with proper event handler signatures/
 * Тип emit конструктора с правильными сигнатурами обработчиков событий
 */
export type ConstrEmit<T extends ConstrItem = ConstrItem> = UnionToIntersection<ConstrEmitItem<{
    [K in keyof T]: (evt: K, ...args: T[K]) => void;
}>>;
/** Object type for CSS class names with boolean values/ Тип объекта для CSS классов с булевыми значениями */
export type ConstrClassObject = Record<string, boolean>;
/**
 * Constructor class type supporting strings, arrays, and objects/
 * Тип класса конструктора, поддерживающий строки, массивы и объекты
 */
export type ConstrClass = string | (string | ConstrClass | Undefined)[] | ConstrClassObject;
/** Record type for mapping class names to class definitions/ Тип записи для сопоставления имен классов с определениями классов */
export type ConstrClassList = Record<string, ConstrClass>;
/** Constructor classes with required main class and additional class list/ Классы конструктора с обязательным основным классом и дополнительным списком классов */
export type ConstrClasses = {
    main: ConstrClass;
} & ConstrClassList;
/** Constructor style item type for individual style properties/ Тип элемента стиля конструктора для отдельных свойств стиля */
export type ConstrStylesItem = string | null;
/**
 * Constructor styles type supporting objects and arrays of style definitions/
 * Тип стилей конструктора, поддерживающий объекты и массивы определений стилей
 */
export type ConstrStyles = Record<string, ConstrStylesItem> | ConstrStyles[];
/**
 * Constructor options interface for component configuration/
 * Интерфейс опций конструктора для конфигурации компонента
 */
export type ConstrOptions<COMP extends ConstrComponent, EMITS extends ConstrItem, P extends ConstrItem> = {
    /** Optional components configuration/ Опциональная конфигурация компонентов */
    components?: COMP;
    /** Optional component modifications/ Опциональные модификации компонента */
    compMod?: ConstrComponentMod<P>;
    /** Optional emit handlers/ Опциональные обработчики emit */
    emits?: ConstrEmit<EMITS>;
    /** Optional reactive classes/ Опциональные реактивные классы */
    classes?: RefType<ConstrClasses>;
    /** Optional reactive styles/ Опциональные реактивные стили */
    styles?: RefType<ConstrStyles>;
};
/**
 * Constructor setup interface for component initialization/
 * Интерфейс настройки конструктора для инициализации компонента
 */
export type ConstrSetup<E extends Element, CLASSES extends ConstrClasses, SETUP extends ConstrItem> = {
    /** Component name/ Имя компонента */
    name: string;
    /** Reactive element reference/ Реактивная ссылка на элемент */
    element: Ref<E | undefined>;
    /** Reactive classes/ Реактивные классы */
    classes: RefType<CLASSES>;
    /** Reactive styles/ Реактивные стили */
    styles: RefType<ConstrStyles>;
} & SETUP;
/** Constructor registration configuration/ Конфигурация регистрации конструктора */
export type ConstrRegistration = {
    /** Optional flag for registration/ Опциональный флаг для регистрации */
    flag?: boolean;
    /** Optional translation map/ Опциональная карта переводов */
    translate?: Record<string, string>;
};
/**
 * Constructor bind type for component binding with class and style support/
 * Тип привязки конструктора для привязки компонента с поддержкой классов и стилей
 */
export type ConstrBind<T> = T & Record<string, any> & {
    /** Optional key/ Опциональный ключ */
    key?: string;
    /** Optional CSS classes/ Опциональные CSS классы */
    class?: ConstrClass;
    /** Optional styles/ Опциональные стили */
    style?: ConstrStyles;
};
/** Constructor prop item options for Vue prop definitions/ Опции элемента prop конструктора для определений Vue prop */
export type ConstrPropItemOptions<T = any> = {
    /** Vue prop type/ Тип Vue prop */
    type?: PropType<T>;
    /** Required flag/ Флаг обязательности */
    required?: boolean;
    /** Default value/ Значение по умолчанию */
    default?: any;
    /** Custom validator function/ Пользовательская функция валидации */
    validator?(value: any, props: any): boolean;
};
/** Constructor prop item type with options or direct PropType/ Тип элемента prop конструктора с опциями или прямым PropType */
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>;
/** Constructor props type for component prop definitions/ Тип props конструктора для определений props компонента */
export type ConstrProps<P = Record<string, any>> = {
    [K in keyof P]: ConstrPropItem<P[K]>;
};
