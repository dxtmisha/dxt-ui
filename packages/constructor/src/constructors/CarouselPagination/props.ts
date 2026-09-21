import type { ControlProps } from '../../types/controlTypes'
import type { ModelPropsSelected } from '../../types/modelTypes'
import type { TextPaginationPropsInclude } from '../../types/textTypes'

type CarouselPaginationPropsToken = {
  // :type [!] System label / Системная метка
  type?: 'bullets' | 'dots' | 'lines' | 'fraction' | 'progressbar'
  vertical?: boolean
  dynamic?: boolean
  // :type [!] System label / Системная метка
}

export type CarouselPaginationPropsBasic = ModelPropsSelected<number | string>
  & TextPaginationPropsInclude
  & ControlProps
  & {

    /** Current active slide / Текущий активный слайд */
    selected?: number | string

    /** Total item count / Общее количество элементов */
    count?: number | string

    /** Number of visible bullets in dynamic mode / Количество отображаемых буллетов в динамическом режиме */
    visible?: number | string

    /** Whether to hide pagination if only one slide exists / Скрывать ли пагинацию, если слайд всего один */
    hideIfOne?: boolean

    /** HTML tag for the container / HTML-тег для контейнера */
    tag?: string

    /** Template for formatting fraction display (e.g. '[active] / [total]') / Шаблон для форматирования отображения дроби (например, '[active] / [total]') */
    template?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CarouselPaginationProps = CarouselPaginationPropsBasic & CarouselPaginationPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCarouselPagination = {
  tag: 'div',
  count: 0,
  visible: 5,
  hideIfOne: true,
  template: '[active] / [total]',
  control: true,
  ...{
    // :default [!] System label / Системная метка
    type: 'bullets'
    // :default [!] System label / Системная метка
  }
}
