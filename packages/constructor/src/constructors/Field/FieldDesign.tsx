import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract
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
 * FieldDesign class handles the rendering and style structure of the Field component.
 * It ties together structural layout, design tokens, sub-components, and active state styles.
 *
 * Класс FieldDesign управляет рендерингом и структурой стилей компонента Field.
 * Объединяет структурную разметку, токены дизайна, субкомпоненты и стили активного состояния.
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
  /** Instance of the Field logic controller / Экземпляр контроллера логики поля */
  protected readonly item: Field

  /**
   * Constructor for creating the Field design renderer.
   *
   * Конструктор для создания рендерера дизайна Field.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor class for working with the item / класс для работы с элементом
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
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed properties object / объект экспонируемых свойств
   */
  protected initExpose(): EXPOSE {
    return {} as EXPOSE
  }

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial classes map / частичная карта классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: this.item.classes,
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
   * @returns styles map / карта стилей
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * A method for rendering the core Field element.
   *
   * Метод для рендеринга основного элемента Field.
   * @returns virtual node for rendering / виртуальный узел для рендеринга
   */
  protected initRender(): VNode {
    const children: any[] = []

    if (this.item.fieldElement.isClassic()) {
      children.push(...this.item.fieldLabel.render(this.slots))
    }

    children.push(
      ...this.renderBody(),
      ...this.item.fieldMessage.render()
    )

    return h(
      this.item.fieldElement.tag,
      {
        ...this.getAttrs(),
        ref: this.element,
        class: this.classes?.value.main,
        style: this.styles?.value,
        for: this.item.fieldElement.forId
      },
      children
    )
  }

  /**
   * Generates body element as VNode array.
   *
   * Генерирует тело элемента в виде массива VNode.
   * @returns body virtual nodes / виртуальные узлы тела
   */
  readonly renderBody = (): VNode[] => {
    const children: any[] = [
      this.initSlot('default', undefined, this.item.control),
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
            this.item.skeleton.classes
          ],
          ...this.item.event.binds
        },
        children
      )
    ]
  }

  /**
   * Generates data and virtual node for the title label.
   *
   * Генерирует данные и виртуальный узел для метки заголовка.
   * @returns title label virtual node / виртуальный узел метки заголовка
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
   * Generates data and virtual node for additional controls (scoreboard).
   *
   * Генерирует данные и виртуальный узел для дополнительных элементов управления (scoreboard).
   * @returns scoreboard virtual node / виртуальный узел scoreboard
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
   * Generates data for leading and trailing scoreboard slots.
   *
   * Генерирует данные для ведущего и ведомого слотов scoreboard.
   * @returns slots virtual nodes / виртуальные узлы слотов
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
   * Generates all available icons (cancel, arrow actions) inside scoreboard.
   *
   * Генерирует все доступные иконки (отмена, действия стрелок) внутри scoreboard.
   * @returns icons virtual nodes / виртуальные узлы иконок
   */
  readonly renderBodyScoreboardIcon = (): VNode[] => {
    const icons: any[] = [...this.item.icon.render()]

    if (this.item.icons.isCancel()) {
      this.components.renderAdd(
        icons,
        'icon',
        this.item.icons.cancelBind,
        undefined,
        'cancel'
      )
    }

    if (this.item.icons.isArrow()) {
      this.components.renderAdd(
        icons,
        'icon',
        this.item.icons.previousBind,
        undefined,
        'previous'
      )

      this.components.renderAdd(
        icons,
        'icon',
        this.item.icons.nextBind,
        undefined,
        'next'
      )
    }

    return icons
  }

  /**
   * Generates separators, spacing, and additional captions inside scoreboard.
   *
   * Генерирует разделители, отступы и дополнительные подписи внутри scoreboard.
   * @returns spacing virtual nodes / виртуальные узлы отступов
   */
  readonly renderBodyScoreboardSpace = (): VNode[] => {
    const children: any[] = []

    if (this.item.caption.is) {
      children.push(
        h(
          'span',
          {
            class: this.classes?.value.bodyScoreboardInput,
            style: `min-width: ${this.item.space.minWidth};`
          },
          this.item.space.value
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
   * Generates the field border element.
   *
   * Генерирует элемент границы поля.
   * @returns border virtual node / виртуальный узел границы
   */
  readonly renderBodyBorder = (): VNode => {
    return h('span', { class: this.classes?.value.bodyBorder })
  }
}
