import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  forEach
} from '@dxtmisha/functional'

import { MotionAxis } from './MotionAxis'

import {
  type MotionAxisPropsBasic
} from './props'
import {
  type MotionAxisClasses,
  type MotionAxisComponents,
  type MotionAxisEmits,
  type MotionAxisExpose,
  type MotionAxisSlots
} from './types'

/**
 * MotionAxisDesign
 */
export class MotionAxisDesign<
  COMP extends MotionAxisComponents,
  EXPOSE extends MotionAxisExpose,
  CLASSES extends MotionAxisClasses,
  P extends MotionAxisPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    MotionAxisEmits,
    EXPOSE,
    MotionAxisSlots,
    CLASSES,
    P
  > {
  protected readonly item: MotionAxis

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
    options?: ConstrOptions<COMP, MotionAxisEmits, P>,
    ItemConstructor: typeof MotionAxis = MotionAxis
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
    return {
      next: this.item.go.next,
      back: this.item.go.back,
      to: this.item.go.to,

      top: this.item.go.top,
      right: this.item.go.right,
      bottom: this.item.go.bottom,
      left: this.item.go.left,
      down: this.item.go.down,
      up: this.item.go.up
    } as EXPOSE
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
        slide: this.getSubClass('slide')
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
        ref: this.element,
        class: this.classes?.value.main
      },
      this.renderSlides()
    )
  }

  /**
   * Rendering the slide.
   *
   * Рендеринг слайда.
   */
  readonly renderSlides = (): VNode[] => {
    const children: VNode[] = []

    this.item.slides.reset()

    if (this.slots) {
      forEach(this.slots, (slot, key) => {
        this.item.slides.add(key)

        if (this.item.isInDom(key)) {
          const classStatus = this.item.elementItem.getClassStatus()

          children.push(h(
            'div',
            {
              key,
              'class': {
                [classStatus.main]: true,
                [classStatus.previous]: this.item.previous.is(key),
                [classStatus.preparation]: this.item.status.isPreparation(key),
                [classStatus.active]: this.item.status.isActive(key)
              },
              'data-key': key
            },
            slot?.({})
          ))
        }
      })
    }

    return children
  }
}
