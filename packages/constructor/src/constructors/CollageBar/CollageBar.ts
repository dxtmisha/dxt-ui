import { type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  getBind
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { ButtonInclude } from '../Button'

import type { CollageBarComponents, CollageBarEmits, CollageBarSlots } from './types'
import type { CollageBarProps } from './props'

/**
 * CollageBar controller class managing labels, descriptions, buttons, and click events. /
 * Класс контроллера CollageBar, управляющий метками, описаниями, кнопками и событиями клика.
 */
export class CollageBar {
  /** Label control instance / Экземпляр управления меткой */
  readonly label: LabelInclude

  /** Description control instance / Экземпляр управления описанием */
  readonly description: DescriptionInclude

  /** Button control instance / Экземпляр управления кнопкой */
  readonly button: ButtonInclude

  /** Click event control instance / Экземпляр управления событием клика */
  readonly event: EventClickInclude

  /**
   * Constructor
   * @param props input data / входные данные
   * @param refs input data in the form of reactive elements / входные данные в виде реактивных элементов
   * @param element input element / элемент ввода
   * @param classDesign design name / название дизайна
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   * @param constructors.ButtonIncludeConstructor class for working with button / класс для работы с кнопкой
   * @param constructors.DescriptionIncludeConstructor class for working with description / класс для работы с описанием
   * @param constructors.EventClickIncludeConstructor class for working with click events / класс для работы с событиями клика
   * @param constructors.LabelIncludeConstructor class for working with label / класс для работы с меткой
   */
  constructor(
    protected readonly props: CollageBarProps,
    protected readonly refs: ToRefs<CollageBarProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<CollageBarComponents, CollageBarProps>,
    protected readonly slots?: CollageBarSlots,
    protected readonly emits?: ConstrEmit<CollageBarEmits>,
    constructors: {
      ButtonIncludeConstructor?: typeof ButtonInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      LabelIncludeConstructor?: typeof LabelInclude
    } = {}
  ) {
    const {
      ButtonIncludeConstructor = ButtonInclude,
      DescriptionIncludeConstructor = DescriptionInclude,
      EventClickIncludeConstructor = EventClickInclude,
      LabelIncludeConstructor = LabelInclude
    } = constructors

    this.event = new EventClickIncludeConstructor(props, undefined, emits)

    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots
    )

    this.description = new DescriptionIncludeConstructor(
      props,
      className,
      slots
    )

    this.button = new ButtonIncludeConstructor(
      className,
      props,
      components,
      () => ({
        ...getBind(this.props.button, 'label'),
        icon: this.props.icon,
        detail: this.props.detail,
        value: this.props.value,
        ...this.event.binds
      })
    )
  }

  /**
   * HTML tag for the container. /
   * HTML-тег для контейнера.
   */
  get tag(): string {
    return this.props.tag ?? 'figcaption'
  }

  /**
   * Checks if the button needs to be displayed.
   *
   * Проверяет, нужно ли отображать кнопку.
   * @returns true if the button should be displayed / true, если кнопку нужно отобразить
   */
  isButton(): boolean {
    return Boolean(
      this.props.button
      || this.props.icon
      || this.props.buttonAttrs
    )
  }
}
