import type { Ref, PropType, ComputedRef } from 'vue'
import type {
  ConstrClass,
  ConstrClasses,
  ConstrComponent,
  ConstrEmit,
  ConstrItem,
  ConstrStyles
} from '@dxtmisha/functional-basic'

import type {
  RefOrNormal,
  RefType
} from './refTypes'

export type {
  ConstrClass,
  ConstrClasses,
  ConstrClassList,
  ConstrClassObject,
  ConstrComponent,
  ConstrEmit,
  ConstrEmitItem,
  ConstrHrefProps,
  ConstrItem,
  ConstrRegistration,
  ConstrStyles,
  ConstrStylesItem,
  ConstrValue,
  UnionToIntersection
} from '@dxtmisha/functional-basic'

/**
 * Constructor component modification type with reactive or normal values/
 * Тип модификации компонента конструктора с реактивными или обычными значениями
 */
export type ConstrComponentMod<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: RefOrNormal<P[K]>
}

export type ConstrExpose<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
  elementHtml?: ComputedRef<E | undefined>
}

/**
 * Constructor options interface for component configuration/
 * Интерфейс опций конструктора для конфигурации компонента
 */
export type ConstrOptions<
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  P extends ConstrItem
> = {
  /** Optional components configuration/ Опциональная конфигурация компонентов */
  components?: COMP
  /** Optional component modifications/ Опциональные модификации компонента */
  compMod?: ConstrComponentMod<P>
  /** Optional emit handlers/ Опциональные обработчики emit */
  emits?: ConstrEmit<EMITS>
  /** Optional reactive classes/ Опциональные реактивные классы */
  classes?: RefType<ConstrClasses>
  /** Optional reactive styles/ Опциональные реактивные стили */
  styles?: RefType<ConstrStyles>
}

/**
 * Constructor setup interface for component initialization/
 * Интерфейс настройки конструктора для инициализации компонента
 */
export type ConstrSetup<
  E extends Element,
  CLASSES extends ConstrClasses,
  SETUP extends ConstrItem
> = {
  /** Component name/ Имя компонента */
  name: string
  /** Reactive element reference/ Реактивная ссылка на элемент */
  element: Ref<E | undefined>
  /** Reactive classes/ Реактивные классы */
  classes: RefType<CLASSES>
  /** Reactive styles/ Реактивные стили */
  styles: RefType<ConstrStyles>
} & SETUP

/**
 * Constructor bind type for component binding with class and style support/
 * Тип привязки конструктора для привязки компонента с поддержкой классов и стилей
 */
export type ConstrBind<T = ConstrItem>
  = T
    & Record<string, any>
    & {
      /** Optional key/ Опциональный ключ */
      key?: string
      /** Optional CSS classes/ Опциональные CSS классы */
      class?: ConstrClass
      /** Optional styles/ Опциональные стили */
      style?: ConstrStyles
    }

/** Constructor prop item options for Vue prop definitions/ Опции элемента prop конструктора для определений Vue prop */
export type ConstrPropItemOptions<T = any> = {
  /** Vue prop type/ Тип Vue prop */
  type?: PropType<T>
  /** Required flag/ Флаг обязательности */
  required?: boolean
  /** Default value/ Значение по умолчанию */
  default?: any
  /** Custom validator function/ Пользовательская функция валидации */
  validator?(value: any, props: any): boolean
}

/** Constructor prop item type with options or direct PropType/ Тип элемента prop конструктора с опциями или прямым PropType */
export type ConstrPropItem<T = any> = ConstrPropItemOptions<T> | PropType<T>

/** Constructor props type for component prop definitions/ Тип props конструктора для определений props компонента */
export type ConstrProps<P = Record<string, any>> = {
  [K in keyof P]: ConstrPropItem<P[K]>
}
