import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { BlockDesign } from '../Block'
import { Section } from './Section'

import {
  type SectionPropsBasic
} from './props'
import {
  type SectionClasses,
  type SectionComponents,
  type SectionEmits,
  type SectionExpose
} from './types'

/**
 * SectionDesign component class for rendering semantic section containers and delegating layout to BlockDesign.
 *
 * Класс компонента SectionDesign для рендеринга семантических контейнеров секций и делегирования разметки BlockDesign.
 */
export class SectionDesign<
  COMP extends SectionComponents,
  EXPOSE extends SectionExpose,
  CLASSES extends SectionClasses,
  P extends SectionPropsBasic
> extends BlockDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor for creating a SectionDesign instance.
   *
   * Конструктор для создания экземпляра SectionDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor section item class / класс элемента секции
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SectionEmits, P>,
    ItemConstructor: typeof Section = Section
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
