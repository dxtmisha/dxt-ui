import { h, ref, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

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
 * MotionTransformDesign handles component integration, styles, classes, and markup rendering for the MotionTransform constructor.
 *
 * MotionTransformDesign управляет интеграцией компонентов, стилями, классами и рендерингом разметки для конструктора MotionTransform.
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
  /** Substrate context element / Элемент подложки контекста */
  protected elementContext = ref<HTMLDivElement>()
  /** MotionTransform controller instance / Экземпляр контроллера MotionTransform */
  protected readonly item: MotionTransform

  /**
   * Constructor for MotionTransformDesign.
   *
   * Конструктор для MotionTransformDesign.
   * @param name class name / имя класса
   * @param props properties / свойства
   * @param options additional design options / дополнительные параметры дизайна
   * @param ItemConstructor class constructor for the transform item / конструктор класса элемента трансформации
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MotionTransformEmits, P>,
    ItemConstructor: typeof MotionTransform = MotionTransform
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
   * Initializes exposed interface for the transform component.
   *
   * Инициализирует экспортируемые свойства для компонента трансформации.
   * @returns exposed object / экспортируемый объект
   */
  protected initExpose(): EXPOSE {
    return {
      getOpen: () => this.item.state.open.value,
      isShow: () => this.item.state.isShow(),

      setOpen: this.item.go.to,
      toOpen: this.item.go.open,
      toClose: this.item.go.close,
      toggle: this.item.go.toggle
    } as EXPOSE
  }

  /**
   * Initializes classes for elements in the transform component.
   *
   * Инициализирует классы для элементов компонента трансформации.
   * @returns object with classes / объект с классами
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
   * Initializes styles for the transform component.
   *
   * Инициализирует стили для компонента трансформации.
   * @returns styles object / объект стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main render function for the transform component.
   *
   * Основная функция рендеринга для компонента трансформации.
   * @returns virtual node (VNode) / виртуальный узел (VNode)
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
      this.item.teleport.render(
        children,
        { disabled: !this.item.state.teleport.value }
      )
    )
  }

  /**
   * Rendering the main element.
   *
   * Рендеринг главного элемента.
   */
  readonly renderMain = (): VNode[] => {
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
  readonly renderHead = () => {
    return [
      h(
        'div',
        {
          class: this.classes?.value.head,
          ...this.item.bindsHead
        },
        this.initSlot('head', undefined, this.item.slotData)
      )
    ]
  }

  /**
   * Rendering the content.
   *
   * Рендеринг содержимого.
   */
  readonly renderBody = () => {
    if (
      this.props.inDom
      || this.item.state.isShow()
    ) {
      return [
        h(
          this.props.tagBody ?? 'div',
          {
            class: this.classes?.value.body,
            ...this.item.bindsBody
          },
          this.initSlot('body', undefined, this.item.slotData)
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
  readonly renderScrim = (): VNode[] => {
    if (this.item.state.teleport.value) {
      return [
        h('div', {
          key: 'scrim',
          class: this.classes?.value.scrim
        })
      ]
    }

    return []
  }
}
