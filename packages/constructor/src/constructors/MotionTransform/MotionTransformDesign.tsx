import { h, ref, Teleport, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxt-ui/functional'

import { MotionTransform } from './MotionTransform'

import {
  type MotionTransformPropsBasic
} from './props'
import {
  type MotionTransformClasses,
  type MotionTransformComponents,
  type MotionTransformEmits,
  type MotionTransformExpose,
  type MotionTransformSlots
} from './types'

/**
 * MotionTransformDesign
 */
export class MotionTransformDesign<
  COMP extends MotionTransformComponents,
  EXPOSE extends MotionTransformExpose,
  CLASSES extends MotionTransformClasses,
  P extends MotionTransformPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  MotionTransformEmits,
  EXPOSE,
  MotionTransformSlots,
  CLASSES,
  P
> {
  protected elementContext = ref<HTMLDivElement>()
  protected readonly item: MotionTransform

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MotionTransformEmits, P>
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new MotionTransform(
      this.props,
      this.refs,
      this.element,
      this.elementContext,
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
      open: this.item.state.open,
      isShow: this.item.state.isShow,

      setOpen: this.item.go.to,
      toOpen: this.item.go.open,
      toClose: this.item.go.close,
      toggle: this.item.go.toggle
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
        context: this.getSubClass('context'),
        head: this.getSubClass('head'),
        body: this.getSubClass('body'),
        backdrop: this.getSubClass('backdrop'),
        scrim: this.getSubClass('scrim'),
        clickNone: this.getSubClass('clickNone')
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
      ...this.renderMain(),
      ...this.renderScrim()
    ]

    return h(
      'div',
      {
        ref: this.elementContext,
        class: this.classes?.value.context
      },
      h(
        Teleport,
        {
          key: 'teleport',
          disabled: !this.item.state.teleport.value,
          to: 'body'
        },
        children
      )
    )
  }

  /**
   * Rendering the main element.
   *
   * Рендеринг главного элемента.
   */
  protected readonly renderMain = (): VNode[] => {
    return [
      h(
        'div',
        {
          ...this.getAttrs(),
          ref: this.element,
          key: 'main',
          class: this.classes?.value.main,
          onTransitionend: this.item.event.onTransitionend
        },
        [
          ...this.renderHead(),
          ...this.renderBody()
        ]
      )
    ]
  }

  /**
   * Rendering the title.
   *
   * Рендеринг заголовка.
   */
  protected readonly renderHead = (): VNode[] => {
    return [
      h(
        'div',
        {
          key: 'head',
          class: this.classes?.value.head,
          onClick: this.item.event.onClick
        },
        this.initSlot(
          'head',
          undefined,
          this.item.getSlotData()
        )
      )
    ]
  }

  /**
   * Rendering the content.
   *
   * Рендеринг содержимого.
   */
  protected readonly renderBody = (): VNode[] => {
    if (this.item.state.isShow.value) {
      return [
        h(
          'div',
          {
            key: 'body',
            class: this.classes?.value.body
          },
          this.initSlot(
            'body',
            undefined,
            this.item.getSlotData()
          )
        )
      ]
    }

    return []
  }

  /**
   * Rendering the background.
   *
   * Рендеринг задника.
   */
  protected readonly renderScrim = (): VNode[] => {
    if (this.item.state.teleport.value) {
      return [
        h(
          'div',
          {
            key: 'scrim',
            class: this.classes?.value.scrim
          }
        )
      ]
    }

    return []
  }
}
