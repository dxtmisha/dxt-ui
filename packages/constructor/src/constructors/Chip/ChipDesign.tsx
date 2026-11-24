import { type ConstrOptions } from '@dxtmisha/functional'

import { ButtonDesign } from '../Button'
import { Chip } from './Chip'

import {
  type ChipPropsBasic
} from './props'
import {
  type ChipClasses,
  type ChipComponents,
  type ChipEmits,
  type ChipExpose
} from './types'

/**
 * ChipDesign constructor class responsible for assembling and rendering the Chip component.
 * Inherits rendering, class resolution, styles initialization, and expose orchestration from ButtonDesign.
 *
 * Класс-конструктор ChipDesign, отвечающий за сборку и рендеринг компонента чипа.
 * Наследует рендеринг, разрешение классов, инициализацию стилей и оркестрацию экспортируемых свойств от ButtonDesign.
 */
export class ChipDesign<
  COMP extends ChipComponents,
  EXPOSE extends ChipExpose,
  CLASSES extends ChipClasses,
  P extends ChipPropsBasic
> extends ButtonDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor for creating a ChipDesign instance.
   *
   * Конструктор для создания экземпляра дизайна чипа.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor chip item class / класс элемента чипа
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ChipEmits, P>,
    ItemConstructor: typeof Chip = Chip
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
