import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  getObjectNoUndefined
} from '@dxtmisha/functional'

import { ButtonGroup } from './ButtonGroup'

import type {
  ButtonGroupPropsBasic
} from './props'
import type {
  ButtonGroupClasses,
  ButtonGroupComponents,
  ButtonGroupEmits,
  ButtonGroupExpose,
  ButtonGroupSlots
} from './types'

/**
 * ButtonGroupDesign class constructor for managing classes, styles, ARIA group semantics,
 * and rendering grouped button items and default slot children.
 *
 * Класс-конструктор дизайна ButtonGroupDesign для управления классами, стилями, ARIA-семантикой группы
 * и рендерингом сгруппированных кнопок и дочерних элементов слота по умолчанию.
 */
export class ButtonGroupDesign<
  COMP extends ButtonGroupComponents,
  EXPOSE extends ButtonGroupExpose,
  CLASSES extends ButtonGroupClasses,
  P extends ButtonGroupPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    ButtonGroupEmits,
    EXPOSE,
    ButtonGroupSlots,
    CLASSES,
    P
  > {
  /** ButtonGroup logic orchestrator instance / Экземпляр оркестратора логики ButtonGroup */
  protected readonly item: ButtonGroup

  /**
   * Constructor for creating a ButtonGroupDesign instance.
   *
   * Конструктор для создания экземпляра ButtonGroupDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, ButtonGroupEmits, P>,
    ItemConstructor: typeof ButtonGroup = ButtonGroup
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties / экспортируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns class dictionary / словарь классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        item: this.naming.getSubClass('item')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns style dictionary / словарь стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the root `<div>` group container with ARIA attributes and button list.
   *
   * Метод для рендеринга корневого контейнера `<div>` с ARIA-атрибутами и списком кнопок.
   * @returns rendered virtual node / отрендеренный виртуальный узел
   */
  protected initRender(): VNode {
    return h(
      'div',
      mergeProps(
        this.getAttrs(),
        this.item.aria,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
      this.renderList()
    )
  }

  /**
   * Renders the configured button items from `list` and appends default slot content.
   *
   * Рендерит настроенные элементы кнопок из `list` и добавляет содержимое слота по умолчанию.
   * @returns rendered virtual node array / массив отрендеренных виртуальных узлов
   */
  protected readonly renderList = (): VNode[] => {
    const children: VNode[] = []

    if (this.item.isList()) {
      const list = this.props.list
      const length = list?.length ?? 0

      if (length > 0 && this.components) {
        const sharedAttrs = getObjectNoUndefined((this.props.buttonAttrs ?? {}) as Record<string, unknown>)

        for (let index = 0; index < length; index++) {
          const buttonItem = list![index]

          this.components.renderAdd(
            children,
            'button',
            mergeProps(
              getObjectNoUndefined({
                isSkeleton: this.props.isSkeleton,
                class: this.classes?.value.item,
                onClick: this.item.i('event').onClick
              }),
              sharedAttrs,
              getObjectNoUndefined((buttonItem ?? {}) as Record<string, unknown>)
            ),
            undefined,
            `list-${index}`
          )
        }
      }

      this.initSlot('default', children)
    }

    return children
  }
}
