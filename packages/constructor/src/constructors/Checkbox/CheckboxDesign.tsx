import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  toBinds
} from '@dxtmisha/functional'

import { Checkbox } from './Checkbox'

import {
  type CheckboxPropsBasic
} from './props'
import {
  type CheckboxClasses,
  type CheckboxComponents,
  type CheckboxEmits,
  type CheckboxExpose,
  type CheckboxSlots
} from './types'
import { AriaStaticInclude } from '../../library'

/**
 * CheckboxDesign
 */
export class CheckboxDesign<
  COMP extends CheckboxComponents,
  EXPOSE extends CheckboxExpose,
  CLASSES extends CheckboxClasses,
  P extends CheckboxPropsBasic
> extends DesignConstructorAbstract<
  HTMLDivElement,
  COMP,
  CheckboxEmits,
  EXPOSE,
  CheckboxSlots,
  CLASSES,
  P
> {
  protected readonly item: Checkbox

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
    options?: ConstrOptions<COMP, CheckboxEmits, P>,
    ItemConstructor: typeof Checkbox = Checkbox
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
      value: this.item.value.item,
      checkValidity: this.item.validation.checkValidity,
      validationMessage: this.item.validation.message
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
        input: this.getSubClass('input'),
        body: this.getSubClass('body'),
        item: this.getSubClass('item'),
        icon: this.getSubClass('icon'),
        loading: this.getSubClass('loading'),
        info: this.getSubClass('info'),
        label: this.getSubClass('label')
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
      'label',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main
      },
      [
        this.renderInputHidden(),
        this.renderInput(),
        this.renderBody()
      ]
    )
  }

  /**
   * Rendering of the main body.
   *
   * Рендеринг главного body.
   */
  readonly renderBody = (): VNode => {
    const children: any[] = [
      ...this.renderChecked(),
      ...this.renderInfo()
    ]

    return h('span', {
      class: this.classes?.value.body
    }, children)
  }

  /**
   * Rendering of the main input.
   *
   * Рендеринг главного input.
   */
  readonly renderInput = (): VNode => {
    return h('input', toBinds(
      this.item.attributes.listForCheckbox.value,
      {
        class: this.classes?.value.input,
        type: this.item.type,
        checked: this.item.value.item.value,
        onInput: this.item.event.onChecked,
        ...AriaStaticInclude.invalid(this.item.validation.isError())
      }
    ))
  }

  /**
   * Rendering of the hidden input.
   *
   * Рендеринг скрытого input.
   */
  readonly renderInputHidden = (): VNode => {
    return h('input', {
      name: this.props.name,
      type: 'hidden',
      value: this.props.valueVariantHide
    })
  }

  /**
   * Rendering of the checkbox element.
   *
   * Рендеринг элемента checkbox.
   */
  readonly renderChecked = (): VNode[] => {
    return [
      h(
        'span',
        {
          class: this.classes?.value.item,
          ...AriaStaticInclude.hidden()
        },
        [
          ...this.item.progress.render(),
          h(
            'span',
            {
              class: [
                this.classes?.value.icon,
                this.item.skeleton.classesSkeleton.classBackground
              ]
            },
            [
              this.components.renderOne(
                'image',
                this.item.icon.item.value
              )
            ]
          ),
          ...this.item.ripple.render()
        ]
      )
    ]
  }

  /**
   * Rendering of the informational text element.
   *
   * Рендеринг элемента информационного текста.
   */
  readonly renderInfo = (): VNode[] => {
    if (
      this.item.label.is.value
      || this.item.description.is.value
    ) {
      return [h(
        'span',
        { class: this.classes?.value.info },
        [
          ...this.item.label.render(),
          ...this.item.description.render(),
          ...this.item.message.render()
        ])]
    }

    return []
  }
}
