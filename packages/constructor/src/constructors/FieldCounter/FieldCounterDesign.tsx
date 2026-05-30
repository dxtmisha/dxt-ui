import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import { FieldCounter } from './FieldCounter'

import {
  type FieldCounterPropsBasic
} from './props'
import {
  type FieldCounterClasses,
  type FieldCounterComponents,
  type FieldCounterEmits,
  type FieldCounterExpose,
  type FieldCounterSlots
} from './types'

/**
 * FieldCounterDesign class coordinates rendering and styling of the field counter component.
 *
 * Класс FieldCounterDesign координирует рендеринг и стилизацию компонента счетчика поля.
 */
export class FieldCounterDesign<
  COMP extends FieldCounterComponents,
  EXPOSE extends FieldCounterExpose,
  CLASSES extends FieldCounterClasses,
  P extends FieldCounterPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    FieldCounterEmits,
    EXPOSE,
    FieldCounterSlots,
    CLASSES,
    P
  > {
  /** FieldCounter class instance / Экземпляр класса FieldCounter */
  protected readonly item: FieldCounter

  /**
   * Constructor for FieldCounterDesign class.
   *
   * Конструктор для класса FieldCounterDesign.
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, FieldCounterEmits, P>,
    ItemConstructor: typeof FieldCounter = FieldCounter
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
   * @returns expose object / объект с открытыми свойствами
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns list of classes / список классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        aria: this.getSubClass('aria')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns list of styles / список стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns rendered nodes or undefined / отрендеренные узлы или undefined
   */
  protected initRender(): VNode[] | undefined {
    if (this.item.is()) {
      return [
        h('span', {
          ...this.getAttrs(),
          id: this.props.id,
          class: this.classes?.value.main,
          innerHTML: this.item.item
        }),
        ...this.renderAria()
      ]
    }

    return undefined
  }

  /**
   * Render hidden element for screen reader.
   *
   * Рендер скрытого элемента для скринридера.
   * @returns list of virtual nodes / список виртуальных узлов
   */
  readonly renderAria = (): VNode[] => {
    if (this.item.ariaText) {
      return [
        h(
          'div',
          {
            class: this.classes?.value.aria,
            ...AriaStaticInclude.live('polite')
          },
          [
            h(
              'span',
              {
                ...AriaStaticInclude.role('img'),
                ...AriaStaticInclude.label(this.item.ariaText)
              }
            )
          ]
        )
      ]
    }

    return []
  }
}
