// ai-none

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { CarouselPaginationPropsInclude } from './basicTypes'
import type { CarouselPaginationProps } from './props'
import type { CarouselPaginationExpose, CarouselPaginationSlots } from './types'

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
  PropsExtra extends CarouselPaginationProps = CarouselPaginationProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    CarouselPaginationExpose,
    CarouselPaginationSlots
  > {
  /**
   * Checks whether pagination configuration is provided via properties or extra bindings.
   *
   * Проверяет, задана ли конфигурация пагинации через свойства или дополнительные привязки.
   * @param props input properties / входные свойства
   * @param extra optional extra attributes / необязательные дополнительные атрибуты
   * @returns true if pagination should be displayed / true, если пагинация должна отображаться
   */
  static is(
    props?: Readonly<CarouselPaginationPropsInclude>,
    extra?: unknown
  ): boolean {
    return Boolean(props?.carouselPaginationAttrs || extra)
  }

  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'carouselPagination'
  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected override readonly propsAttrsName = 'carouselPaginationAttrs'

  /**
   * Checks whether the pagination component should be displayed.
   *
   * Проверяет, нужно ли отображать компонент пагинации.
   * @returns true if pagination should be displayed / true, если пагинация должна отображаться
   */
  override get is(): boolean {
    return CarouselPaginationInclude.is(this.getProps(), this.getExtra())
  }
}
