import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { Bullet } from './Bullet'

import {
  type BulletPropsBasic
} from './props'
import {
  type BulletClasses,
  type BulletComponents,
  type BulletEmits,
  type BulletExpose,
  type BulletSlots
} from './types'

/**
 * BulletDesign
 */
export class BulletDesign<
  COMP extends BulletComponents,
  EXPOSE extends BulletExpose,
  CLASSES extends BulletClasses,
  P extends BulletPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  BulletEmits,
  EXPOSE,
  BulletSlots,
  CLASSES,
  P
> {
  /** Instance of the Bullet constructor / Экземпляр конструктора Bullet */
  protected readonly item: Bullet

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, BulletEmits, P>,
    ItemConstructor: typeof Bullet = Bullet
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
      main: {},
      ...{
        // :classes [!] System label / Системная метка
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
    const children: any[] = [
      ...this.item.list.render()
    ]

    if (
      this.slots
      && 'default' in this.slots
    ) {
      const slotElements: any[] = []
      this.initSlot('default', slotElements)

      children.push(h(
        'ul',
        { class: `${this.getName()}__bullet` },
        slotElements
      ))
    } else if (this.props.html) {
      const classesItem = `${this.getName()}Item ${this.getName()}__bullet__item`
      children.push(h('ul', {
        class: `${this.getName()}__bullet`,
        innerHTML: this.props.html.replace(/<li>/ig, `<li class="${classesItem}">`)
      }))
    }

    return h('div', {
      ...this.getAttrs(),
      ref: this.element,
      class: this.classes?.value.main
    }, children)
  }
}
