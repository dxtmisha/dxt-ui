import { computed, h, ref, Teleport, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
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
   * @param ItemConstructor class for working with the item/ класс для работы с элементом
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
  readonly renderMain = (): VNode[] => {
    return [
      h(
        'div',
        this.propsMain.value,
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
        this.propsHead.value,
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
  readonly renderBody = () => {
    if (
      this.props.inDom
      || this.item.state.isShow.value
    ) {
      return [
        h(
          this.props.tagBody ?? 'div',
          this.propsBody.value,
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
  readonly renderScrim = (): VNode[] => {
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

  /**
   * Props for the main element.
   *
   * Свойства для главного элемента.
   */
  protected readonly propsMain = computed(() => ({
    ...this.getAttrs(),
    ref: this.element,
    key: 'main',
    class: this.classes?.value.main,
    onTransitionend: this.item.event.onTransitionend
  }))

  /**
   * Props for the head element.
   *
   * Свойства для элемента заголовка.
   */
  protected readonly propsHead = computed(() => {
    const props = {
      key: 'head',
      class: this.classes?.value.head,
      onClick: this.item.event.onClick
    }

    if (this.props.clickOpen) {
      return {
        ...props,
        onKeydown: this.item.event.onKeydown,
        ...this.item.slotData.value.binds
      }
    }

    return props
  })

  /**
   * Props for the body element.
   *
   * Свойства для элемента тела.
   */
  protected readonly propsBody = computed(() => {
    return {
      key: 'body',
      id: this.item.element.idBody,
      class: this.classes?.value.body,
      ...AriaStaticInclude.role('region'),
      ...AriaStaticInclude.modal(
        false,
        this.props.ariaLabelledby,
        this.props.ariaDescribedby
      )
    }
  })
}
