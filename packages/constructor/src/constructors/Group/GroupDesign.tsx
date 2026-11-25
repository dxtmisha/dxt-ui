import {
  type ConstrOptions
} from '@dxtmisha/functional'

import { BlockDesign } from '../Block'
import { Group } from './Group'

import {
  type GroupPropsBasic
} from './props'
import {
  type GroupClasses,
  type GroupComponents,
  type GroupEmits,
  type GroupExpose
} from './types'

/**
 * Design constructor class for the Group component.
 * Connects the `Group` logic orchestrator with `BlockDesign` rendering, slots, and exposed refs.
 *
 * Класс дизайн-конструктора для компонента Group.
 * Связывает логический оркестратор `Group` с рендерингом, слотами и экспортируемыми ссылками `BlockDesign`.
 */
export class GroupDesign<
  COMP extends GroupComponents,
  EXPOSE extends GroupExpose,
  CLASSES extends GroupClasses,
  P extends GroupPropsBasic
> extends BlockDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor group item class / класс элемента группы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, GroupEmits, P>,
    ItemConstructor: typeof Group = Group
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
