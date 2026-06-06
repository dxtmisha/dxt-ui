import { type PaginationPropsBasic, defaultsPagination } from '@dxtmisha/constructor/Pagination'

export const propsValues = {
  // :values [!] System label / Системная метка
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
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
    // :default [!] System label / Системная метка
  }
}
