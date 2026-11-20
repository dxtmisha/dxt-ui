import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Skeleton } from '../Skeleton'

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

/**
 * Design constructor class for the Checkbox component.
 *
 * Класс конструктора дизайна для компонента Checkbox.
 */
export class CheckboxDesign<
  COMP extends CheckboxComponents,
  EXPOSE extends CheckboxExpose,
  CLASSES extends CheckboxClasses,
  P extends CheckboxPropsBasic
> extends DesignConstructorAbstract<
    HTMLLabelElement,
    COMP,
    CheckboxEmits,
    EXPOSE,
    CheckboxSlots,
    CLASSES,
    P
  > {
  /** Checkbox logic instance / Экземпляр логики Checkbox */
  protected readonly item: Checkbox

  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
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
   * @returns exposed properties / экспонируемые свойства
   */
  protected initExpose(): EXPOSE {
    return {
      ...this.item.i('value').expose(),
      ...this.item.i('validation').expose()
    } as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes object / частичный объект классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        input: this.naming.getSubClass('input'),
        body: this.naming.getSubClass('body'),
        item: this.naming.getSubClass('item'),
        icon: this.naming.getSubClass('icon'),
        loading: this.naming.getSubClass('loading'),
        info: this.naming.getSubClass('info'),
        label: this.naming.getSubClass('label')
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
   * @returns rendered VNode / отрендеренный VNode
   */
  protected initRender(): VNode {
    return h(
      'label',
      mergeProps(
        this.getAttrs(),
        this.item.binds,
        {
          ref: this.element,
          class: this.classes?.value.main,
          style: this.styles?.value
        }
      ),
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
   * @returns body VNode / VNode тела
   */
  readonly renderBody = (): VNode => {
    const children: VNode[] = [
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
   * @returns input VNode / VNode элемента ввода
   */
  readonly renderInput = (): VNode => {
    return h('input', mergeProps(
      this.item.i('attributes').listForCheckbox,
      {
        class: this.classes?.value.input,
        type: this.item.type,
        checked: Boolean(this.item.i('value').item.value),
        onClick: this.item.onClick,
        onInput: this.item.onInput,
        onFocus: this.item.i('event').onFocus,
        onBlur: this.item.i('event').onBlur,
        ...AriaStaticInclude.readonly(Boolean(this.props.readonly)),
        ...AriaStaticInclude.invalid(this.item.i('validation').isError())
      }
    ))
  }

  /**
   * Rendering of the hidden input.
   *
   * Рендеринг скрытого input.
   * @returns hidden input VNode / VNode скрытого элемента ввода
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
   * @returns array of VNodes / массив VNode
   */
  readonly renderChecked = (): VNode[] => {
    return this.renderCheckedItem()
  }

  /**
   * Rendering of the internal checkbox element.
   *
   * Рендеринг внутреннего элемента checkbox.
   * @returns array of VNodes / массив VNode
   */
  readonly renderCheckedItem = (): VNode[] => {
    return [
      h(
        'span',
        {
          class: this.classes?.value.item,
          ...AriaStaticInclude.hidden()
        },
        [
          ...this.item.callInstance('progress', item => item.render(), []),
          h(
            'span',
            {
              class: [
                this.classes?.value.icon,
                this.item.callInstance(
                  'skeleton',
                  item => item.classesSkeleton.classBackground,
                  Skeleton.getClassesListByDesign(this.naming.getDesign()).classBackground
                )
              ]
            },
            [
              this.components?.renderOne(
                'image',
                this.item.i('icon').item
              )
            ]
          ),
          ...this.item.callInstance('ripple', item => item.render(), [])
        ]
      )
    ]
  }

  /**
   * Rendering of the informational text element.
   *
   * Рендеринг элемента информационного текста.
   * @returns array of VNodes / массив VNode
   */
  readonly renderInfo = (): VNode[] => {
    if (
      this.item.callInstance('label', item => item.is, false)
      || this.item.callInstance('description', item => item.is, false)
    ) {
      return [h(
        'span',
        this.getKeyClass('info'),
        [
          ...this.item.callInstance('label', item => item.render(), []),
          ...this.item.callInstance('description', item => item.render(), []),
          ...this.item.i('message').render()
        ]
      )]
    }

    return []
  }
}
