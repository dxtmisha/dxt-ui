import type { ImagePropsBasic, ImagePropsInclude } from '../Image'
import type { SkeletonPropsInclude } from '../Skeleton'

import type { AriaLabelPropsInclude, AriaRolePropsInclude } from '../../types/ariaTypes'
import type { EventClickProps } from '../../types/eventClickTypes'

type CarouselItemPropsToken = {
  // :type [!] System label / Системная метка
  selected?: boolean
  snap?: 'start' | 'center' | 'end' | 'none'
  // :type [!] System label / Системная метка
}

export type CarouselItemPropsBasic<
  Image extends ImagePropsBasic = ImagePropsBasic
> = ImagePropsInclude<Image>
  & EventClickProps
  & SkeletonPropsInclude
  & AriaLabelPropsInclude
  & AriaRolePropsInclude
  & {
    /** Current slide number or identifier for accessibility / Номер или идентификатор текущего слайда для доступности */
    slide?: number | string

    /** Total slides count for accessibility / Общее количество слайдов для доступности */
    total?: number | string

    /** HTML tag for the container / HTML-тег для контейнера */
    tag?: string
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CarouselItemProps = CarouselItemPropsBasic & CarouselItemPropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCarouselItem = {
  role: 'group',
  ...{
    // :default [!] System label / Системная метка
    snap: 'start'
    // :default [!] System label / Системная метка
  }
}
