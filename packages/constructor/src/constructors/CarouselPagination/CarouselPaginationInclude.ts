import type { ConstrBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { CarouselPaginationPropsInclude } from './basicTypes'
import type { CarouselPaginationExpose, CarouselPaginationSlots } from './types'
import type { CarouselPaginationProps } from './props'

/**
 * CarouselPaginationInclude class manages embedding and rendering CarouselPagination within parent components.
 *
 * Класс CarouselPaginationInclude управляет встраиванием и рендерингом CarouselPagination внутри родительских компонентов.
 *
 * @template Props input parameters / входные параметры
 * @template PropsExtra additional parameters / дополнительные параметры
 */
export class CarouselPaginationInclude<
  Props extends CarouselPaginationPropsInclude = CarouselPaginationPropsInclude,
  PropsExtra extends ConstrBind<CarouselPaginationProps> = ConstrBind<CarouselPaginationProps>
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    CarouselPaginationExpose,
    CarouselPaginationSlots,
    Record<string, any>
  > {
  /** Sub-component name / Название субкомпонента */
  protected readonly name = 'carouselPagination'
  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected readonly propsAttrsName = 'carouselPaginationAttrs'

  /**
   * Checks whether the pagination component should be displayed.
   *
   * Проверяет, нужно ли отображать компонент пагинации.
   */
  override get is(): boolean {
    return Boolean(this.getProps().carouselPaginationAttrs || this.propsExtra)
  }
}
