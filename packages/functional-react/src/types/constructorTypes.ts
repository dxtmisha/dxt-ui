import type {
  CSSProperties,
  ElementType,
  ReactNode,
  RefObject
} from 'react'

import type {
  ConstrClasses,
  ConstrEmit,
  ConstrItem,
  ConstrStyles
} from '@dxtmisha/functional-basic'

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

/** Generic record type for React constructor components / Дженерик тип записи для React компонентов конструктора */
export type ConstrComponentReact = Record<string, ElementType | undefined>

/**
 * Constructor component modification type with plain values for React /
 * Тип модификации компонента конструктора с обычными значениями для React
 */
export type ConstrComponentModReact<P extends ConstrItem> = ConstrItem | {
  [K in keyof P]?: P[K]
}

/**
 * Exposed properties of the component with the root element reference for React /
 * Экспортируемые свойства компонента со ссылкой на корневой элемент для React
 */
export type ConstrExposeReact<E extends Element, EXPOSE extends ConstrItem> = EXPOSE & {
  /** Root DOM element reference / Ссылка на корневой DOM-элемент */
  elementHtml?: RefObject<E | null>
}

/**
 * Slot content for React: a ready React node or a render function (scoped slot) /
 * Содержимое слота для React: готовый React-узел или функция рендеринга (слот с параметрами)
 */
export type ConstrSlotReact<T extends ConstrItem = ConstrItem> = ReactNode | ((props: T) => ReactNode)

/**
 * Constructor options for React component configuration /
 * Опции конструктора для конфигурации компонента React
 */
export type ConstrOptionsReact<
  COMP extends ConstrComponentReact,
  EMITS extends ConstrItem,
  P extends ConstrItem
> = {
  /** Optional components configuration / Опциональная конфигурация компонентов */
  components?: COMP
  /** Optional component modifications / Опциональные модификации компонента */
  compMod?: ConstrComponentModReact<P>
  /** Optional emit handlers / Опциональные обработчики emit */
  emits?: ConstrEmit<EMITS>
  /** Optional classes / Опциональные классы */
  classes?: ConstrClasses
  /** Optional styles / Опциональные стили */
  styles?: ConstrStyles
  /**
   * Optional additional attributes not declared in properties /
   * Опциональные дополнительные атрибуты, не объявленные в свойствах
   */
  attrs?: ConstrItem
  /** Optional named slots of the component / Опциональные именованные слоты компонента */
  slots?: Record<string, ConstrSlotReact | undefined>
}

/**
 * Constructor bind type for React component binding with className and style support /
 * Тип привязки конструктора для привязки компонента React с поддержкой className и стилей
 */
export type ConstrBindReact<T = ConstrItem>
  = T
    & Record<string, any>
    & {
      /** Optional key / Опциональный ключ */
      key?: string
      /** Optional CSS classes / Опциональные CSS классы */
      className?: string
      /** Optional styles / Опциональные стили */
      style?: CSSProperties
    }

/**
 * Constructor setup interface for React component initialization /
 * Интерфейс настройки конструктора для инициализации компонента React
 */
export type ConstrSetupReact<
  E extends Element,
  CLASSES extends ConstrClasses,
  SETUP extends ConstrItem
> = {
  /** Component name / Имя компонента */
  name: string
  /** Element reference / Ссылка на элемент */
  element: RefObject<E | null>
  /** Classes / Классы */
  classes: CLASSES
  /** Styles / Стили */
  styles: CSSProperties
} & SETUP
