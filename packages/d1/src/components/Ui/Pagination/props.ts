import { type PaginationPropsBasic, defaultsPagination } from '@dxtmisha/constructor/Pagination'

export const propsValues = {
  // :values [!] System label / Системная метка
  adaptive: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl'],
  adaptiveMore: ['lineAlways', 'lineSm', 'lineMd', 'lineLg', 'lineXl', 'line2xl']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  adaptive?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl'
  adaptiveMore?: 'lineAlways' | 'lineSm' | 'lineMd' | 'lineLg' | 'lineXl' | 'line2xl'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type PaginationProps = PaginationPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsPagination,
  ...{
    // :default [!] System label / Системная метка
    adaptive: 'lineMd',
    adaptiveMore: 'lineLg'
    // :default [!] System label / Системная метка
  }
}
