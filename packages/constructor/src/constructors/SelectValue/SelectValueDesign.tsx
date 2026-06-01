import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { SelectValue } from './SelectValue'

import type { ChipGroupItem } from '../ChipGroup'
import {
  type SelectValuePropsBasic
} from './props'
import {
  type SelectValueClasses,
  type SelectValueComponents,
  type SelectValueEmits,
  type SelectValueExpose,
  type SelectValueSlots
} from './types'

/**
 * SelectValueDesign is a design constructor class for the SelectValue component,
 * managing styling class resolution and rendering methods for both single and multiple selections.
 *
 * SelectValueDesign — это конструкторский класс дизайна для компонента SelectValue,
 * управляющий разрешением классов стилей и методами рендеринга как для одиночного, так и для множественного выбора.
 */
export class SelectValueDesign<
  COMP extends SelectValueComponents,
  EXPOSE extends SelectValueExpose,
  CLASSES extends SelectValueClasses,
  P extends SelectValuePropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    SelectValueEmits,
    EXPOSE,
    SelectValueSlots,
    CLASSES,
    P
  > {
  /** SelectValue helper instance / Вспомогательный экземпляр SelectValue */
  protected readonly item: SelectValue

  /**
   * Constructor / Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor select value item class / класс элемента значения выбора
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SelectValueEmits, P>,
    ItemConstructor: typeof SelectValue = SelectValue
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.refs,
      this.element,
      this.getDesign(),
      this.getName(),
      this.components,
      this.slots,
      this.emits
    )

    this.init()
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed API object / объект экспортируемого API
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial class object / объект частичных классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
      ...{
        // :classes [!] System label / Системная метка
        item: this.getSubClass('item'),
        trailing: this.getSubClass('trailing')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns main VNode / основной VNode
   */
  protected initRender(): VNode {
    return h(
      'div',
      {
        ...this.getAttrs(),
        class: this.classes?.value.main
      },
      this.renderData()
    )
  }

  /**
   * Rendering data.
   *
   * Рендеринг данных.
   * @returns array of VNodes or strings / массив VNode или строк
   */
  readonly renderData = (): (VNode | string)[] => {
    if (this.item.isPlaceholder()) {
      return [String(this.props.placeholder)]
    }

    if (this.props.value) {
      if (this.props.multiple) {
        return this.renderList()
      }

      const label = this.props.value[0]?.label
        ?? this.props.value[0]?.value

      if (label) {
        return [String(label)]
      }
    }

    return []
  }

  /**
   * List rendering.
   *
   * Рендеринг списка.
   * @returns array of VNodes / массив VNode
   */
  readonly renderList = (): VNode[] => {
    const children: any[] = []

    this.props.value?.forEach((item) => {
      const chip = this.renderItem(item)

      if (chip) {
        children.push(chip)
      } else {
        children.push(item.label)
      }
    })

    return children
  }

  /**
   * Element rendering.
   *
   * Рендеринг элемента.
   * @param item selected element / выбранный элемент
   * @returns chip VNode or undefined / VNode чипа или undefined
   */
  readonly renderItem = (item: ChipGroupItem): VNode | undefined => {
    return this.components.renderOne(
      'chip',
      toBinds(
        this.props.chipAttrs,
        {
          'class': this.classes?.value.item,
          'icon': this.props.iconShow && item.icon ? item.icon : undefined,
          'iconTrailing': this.item.iconTrailing,
          'label': item.label,
          'data-value': item.index,
          'readonly': true,
          'disabled': this.props.disabled,
          'value': item.value,
          'detail': item.detail,
          'onClick': this.item.onClick
        }
      ),
      undefined,
      item.index
    )
  }
}
