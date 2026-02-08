import { computed, h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  isString
} from '@dxtmisha/functional'

import { Field } from './Field'

import {
  type FieldPropsBasic
} from './props'
import {
  type FieldClasses,
  type FieldComponents,
  type FieldEmits,
  type FieldExpose,
  type FieldSlots
} from './types'

/**
 * FieldDesign
 */
export class FieldDesign<
  COMP extends FieldComponents,
  EXPOSE extends FieldExpose,
  CLASSES extends FieldClasses,
  P extends FieldPropsBasic
> extends DesignConstructorAbstract<
    HTMLLabelElement,
    COMP,
    FieldEmits,
    EXPOSE,
    FieldSlots,
    CLASSES,
    P
  > {
  protected readonly item: Field

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
    options?: ConstrOptions<COMP, FieldEmits, P>,
    ItemConstructor: typeof Field = Field
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
        body: this.getSubClass('body'),
        bodyInput: this.getSubClass('body__input'),
        bodyTitle: this.getSubClass('body__title'),
        bodyTitleLabel: this.getSubClass('body__title__label'),
        bodyTitleLabelText: this.getSubClass('body__title__label__text'),
        bodyScoreboard: this.getSubClass('body__scoreboard'),
        bodyScoreboardLeft: this.getSubClass('body__scoreboard__left'),
        bodyScoreboardRight: this.getSubClass('body__scoreboard__right'),
        bodyScoreboardSpace: this.getSubClass('body__scoreboard__space'),
        bodyScoreboardInput: this.getSubClass('body__scoreboard__input'),
        bodyBorder: this.getSubClass('body__border'),
        required: this.getSubClass('required')
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
    const children: any[] = []

    if (this.item.isClassic.value) {
      children.push(...this.item.fieldLabel.render())
    }

    children.push(
      ...this.renderBody(),
      ...this.item.fieldMessage.render()
    )

    return h(
      this.item.isClassic.value ? 'div' : 'label',
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        for: this.item.isClassic.value ? undefined : this.item.id.value
      },
      children
    )
  }

  /**
   * Generates body.
   *
   * Генерирует тело.
   */
  readonly renderBody = (): VNode[] => {
    const children: any[] = [
      this.initSlot('default', undefined, this.item.control.value),
      this.renderBodyLabel(),
      this.renderBodyScoreboard(),
      this.renderBodyBorder()
    ]

    return [
      h(
        'span',
        {
          class: [
            this.classes?.value.body,
            this.item.skeleton.classes.value
          ],
          onClick: this.item.event.onClick
        },
        children
      )
    ]
  }

  /**
   * Generates data for the title.
   *
   * Генерирует данные для заголовка.
   */
  readonly renderBodyLabel = (): VNode => {
    const children: any[] = [
      this.props.label
    ]

    if (this.props.required) {
      children.push(h(
        'span',
        { class: this.classes?.value.required }
      ))
    }

    return h(
      'span',
      { class: this.classes?.value.bodyTitle },
      h(
        'span',
        { class: this.classes?.value.bodyTitleLabel },
        h(
          'span',
          { class: this.classes?.value.bodyTitleLabelText },
          children
        )
      )
    )
  }

  /**
   * Generates data for additional controls.
   *
   * Генерирует данные для дополнительных управлений.
   */
  readonly renderBodyScoreboard = (): VNode => {
    const children: any[] = [
      ...this.renderBodyScoreboardSlot(),
      ...this.renderBodyScoreboardIcon(),
      ...this.item.prefix.render(),
      ...this.item.suffix.render(),
      ...this.item.progress.render(),
      ...this.renderBodyScoreboardSpace()
    ]

    return h('span', {
      'class': this.classes?.value.bodyScoreboard,
      'data-element': 'scoreboard'
    }, children)
  }

  /**
   * Generates data for the slot.
   *
   * Генерирует данные для слота.
   */
  readonly renderBodyScoreboardSlot = (): VNode[] => {
    const slots: any[] = []

    if (this.slots) {
      if ('leading' in this.slots) {
        slots.push(h(
          'span',
          { class: this.classes?.value.bodyScoreboardLeft },
          this.initSlot('leading')
        ))
      }

      if ('trailing' in this.slots) {
        slots.push(h(
          'span',
          { class: this.classes?.value.bodyScoreboardRight },
          this.initSlot('trailing')
        ))
      }
    }

    return slots
  }

  /**
   * Generates all available icons.
   *
   * Генерирует все доступные иконки.
   */
  readonly renderBodyScoreboardIcon = (): VNode[] => {
    const icons: any[] = [...this.item.icon.render()]

    if (this.item.icons.isCancel.value) {
      this.components.renderAdd(
        icons,
        'icon',
        this.item.icons.cancelBind.value,
        undefined,
        'cancel'
      )
    }

    if (this.item.icons.isArrow.value) {
      this.components.renderAdd(
        icons,
        'icon',
        this.item.icons.previousBind.value,
        undefined,
        'previous'
      )

      this.components.renderAdd(
        icons,
        'icon',
        this.item.icons.nextBind.value,
        undefined,
        'next'
      )
    }

    return icons
  }

  /**
   * Generates separators and additional descriptions.
   *
   * Генерирует разделители и дополнительные описания.
   */
  readonly renderBodyScoreboardSpace = (): VNode[] => {
    const children: any[] = []

    if (this.item.caption.is.value) {
      children.push(
        h(
          'span',
          {
            class: this.classes?.value.bodyScoreboardInput,
            style: `min-width: ${this.lengthValue()};`
          },
          this.focusValue()
        ),
        ...this.item.caption.render()
      )
    }

    return [
      h(
        'span',
        { class: this.classes?.value.bodyScoreboardSpace },
        children
      )
    ]
  }

  /**
   * Generates border.
   *
   * Генерирует border.
   */
  readonly renderBodyBorder = (): VNode => {
    return h('span', { class: this.classes?.value.bodyBorder })
  }

  /**
   * Value for focus.
   *
   * Значение для фокуса.
   */
  protected readonly focusValue = (): string => {
    if (
      !this.lengthElement.value
      && isString(this.props.value)
    ) {
      return this.props.value
    }

    return ''
  }

  /**
   * Length value.
   *
   * Значение длины.
   */
  protected readonly lengthValue = (): string | undefined => {
    if (this.lengthElement.value) {
      return `${this.lengthElement.value.offsetWidth}px`
    }

    return undefined
  }

  /**
   * Element for counting characters.
   *
   * Элемент для подсчёта символов.
   */
  protected readonly lengthElement = computed<HTMLInputElement | undefined>(() => {
    return this.element.value
      ?.querySelector<HTMLInputElement>(`*[data-length]`) ?? undefined
  })

  /**
   * Input element.
   *
   * Элемент ввода.
   */
  protected readonly inputElement = computed<HTMLInputElement | undefined>(() => {
    return this.element.value
      ?.querySelector<HTMLInputElement>(`input.${this.classes?.value.bodyInput}, .${this.classes?.value.bodyInput} input`) ?? undefined
  })
}
