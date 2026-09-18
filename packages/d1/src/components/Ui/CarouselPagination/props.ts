import { type CarouselPaginationPropsBasic, defaultsCarouselPagination } from '@dxtmisha/constructor/CarouselPagination'

export const propsValues = {
  // :values [!] System label / Системная метка
  type: ['bullets', 'lines', 'fraction', 'progressbar'],
  palette: ['red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white']
  // :values [!] System label / Системная метка
}

type PropsToken = {
  // :type [!] System label / Системная метка
  type?: 'bullets' | 'lines' | 'fraction' | 'progressbar'
  vertical?: boolean
  dynamic?: boolean
  palette?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose' | 'slate' | 'gray' | 'zinc' | 'neutral' | 'stone' | 'black' | 'white'
  // :type [!] System label / Системная метка
}

/**
 * Type describing incoming properties/ Тип, описывающий входящие свойства
 */
export type CarouselPaginationProps = CarouselPaginationPropsBasic & PropsToken

/**
 * Default value for property/ Значение по умолчанию для свойства
 */
export const defaults: object = {
  ...defaultsCarouselPagination,
  ...{
    // :default [!] System label / Системная метка
    type: 'bullets'
    // :default [!] System label / Системная метка
  }
}
