import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { SkeletonInclude } from '../Skeleton'

import type { TableItemComponents, TableItemEmits, TableItemSlots } from './types'
import type { TableItemProps } from './props'

/**
 * Class representing a table cell constructor (TableItem).
 * Provides coordination for components such as label, description, tooltip, and skeleton.
 *
 * Класс, представляющий конструктор ячейки таблицы (TableItem).
 * Обеспечивает координацию работы таких компонентов, как метка, описание, всплывающая подсказка и скелетон.
 */
export class TableItem {
  /** Description text manager instance / Экземпляр менеджера текста описания */
  readonly description: DescriptionInclude
  /** Label text manager instance / Экземпляр менеджера текста метки */
  readonly label: LabelInclude
  /** Skeleton loader manager instance / Экземпляр менеджера скелетонов */
  readonly skeleton: SkeletonInclude

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target HTML element / целевой HTML-элемент
   * @param classDesign design system prefix / префикс дизайн-системы
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.DescriptionConstructor class for creating a description / класс для создания описания
   * @param constructors.LabelConstructor class for creating a label / класс для создания метки
   * @param constructors.SkeletonConstructor class for creating a skeleton / класс для создания скелета
   */
  constructor(
    protected readonly props: TableItemProps,
    protected readonly refs: ToRefs<TableItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<TableItemComponents, TableItemProps>,
    protected readonly slots?: TableItemSlots,
    protected readonly emits?: ConstrEmit<TableItemEmits>,
    constructors: {
      DescriptionConstructor?: typeof DescriptionInclude
      LabelConstructor?: typeof LabelInclude
      SkeletonConstructor?: typeof SkeletonInclude
    } = {}
  ) {
    const {
      DescriptionConstructor = DescriptionInclude,
      LabelConstructor = LabelInclude,
      SkeletonConstructor = SkeletonInclude
    } = constructors

    this.skeleton = new SkeletonConstructor(props, classDesign, ['classTextVariant'])
    this.description = new DescriptionConstructor(props, className, slots, this.skeleton)
    this.label = new LabelConstructor(
      props,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      this.skeleton
    )
  }

  /**
   * Returns the HTML tag for the table cell.
   *
   * Возвращает HTML-тег для ячейки таблицы.
   */
  get tag(): string {
    return this.props.tag ?? 'td'
  }

  /**
   * Computed HTML attributes and bindings for the main element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента.
   */
  get binds() {
    return {
      'colspan': this.props.colspan,
      'rowspan': this.props.rowspan,
      'data-value': this.props.value,
      'data-key': this.props.key,
      'data-index': this.props.index,
      'data-divider': this.props.disabled ? undefined : 'active'
    }
  }
}
