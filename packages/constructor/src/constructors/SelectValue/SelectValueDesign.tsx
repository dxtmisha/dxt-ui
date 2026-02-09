import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract, toBinds
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
 * SelectValueDesign
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
  protected readonly item: SelectValue

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor select value item class/ класс элемента значения выбора
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
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes.value,
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
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
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
   */
  protected readonly renderData = (): (VNode | string)[] => {
    if (this.item.isPlaceholder.value) {
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
   */
  protected readonly renderList = (): VNode[] => {
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
   * @param item selected element/ выбранный элемент
   */
  protected readonly renderItem = (item: ChipGroupItem): VNode | undefined => {
    return this.components.renderOne(
      'chip',
      toBinds(
        this.props.chipAttrs,
        {
          'class': this.classes?.value.item,
          'icon': this.props.iconShow && item.icon ? item.icon : undefined,
          'iconTrailing': this.item.iconTrailing.value,
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
