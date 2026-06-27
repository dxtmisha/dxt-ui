import { type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp, getBind } from '@dxtmisha/functional'

import { ActionsInclude } from '../Actions'
import { AlertLinkInclude } from '../AlertLink'
import { ButtonInclude } from '../Button'
import { IconTrailingInclude } from '../Icon'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { AlertEvent } from './AlertEvent'
import { AlertHide } from './AlertHide'

import type { AlertComponents, AlertEmits, AlertSlots } from './types'
import type { AlertProps } from './props'

/**
 * Alert class for managing the business logic of the Alert component.
 *
 * Класс Alert для управления бизнес-логикой компонента Alert.
 */
export class Alert {
  /** Hidden state manager / Менеджер скрытого состояния */
  readonly hide: AlertHide

  /** Click event manager / Менеджер событий клика */
  readonly event: EventClickInclude
  /** Alert events manager / Менеджер событий Alert */
  readonly alertEvent: AlertEvent

  /** Icon manager / Менеджер иконок */
  readonly icon: IconTrailingInclude
  /** Label manager / Менеджер метки */
  readonly label: LabelInclude
  /** Description manager / Менеджер описания */
  readonly description: DescriptionInclude

  /** Button manager / Менеджер кнопки */
  readonly button: ButtonInclude
  /** Close button manager / Менеджер кнопки закрытия */
  readonly buttonClose: ButtonInclude

  /** Actions manager / Менеджер действий */
  readonly actions: ActionsInclude
  /** Link manager / Менеджер ссылок */
  readonly link: AlertLinkInclude
  /** Text manager for alert content / Менеджер текста для содержимого оповещения */
  readonly text: TextInclude

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
   * @param constructors.ActionsIncludeConstructor class for working with actions / класс для работы с действиями
   * @param constructors.AlertEventConstructor class for working with alert events / класс для работы со скрытым состоянием
   * @param constructors.AlertHideConstructor class for working with hidden state / класс для работы со скрытым состоянием
   * @param constructors.AlertLinkIncludeConstructor class for working with alert links / класс для работы со ссылками оповещения
   * @param constructors.ButtonIncludeConstructor class for working with buttons / класс для работы с кнопками
   * @param constructors.DescriptionIncludeConstructor class for working with descriptions / класс для работы с описаниями
   * @param constructors.EventClickIncludeConstructor class for working with click events / класс для работы с событиями клика
   * @param constructors.IconTrailingIncludeConstructor class for working with trailing icons / класс для работы с хвостовыми иконками
   * @param constructors.LabelIncludeConstructor class for working with labels / класс для работы с метками
   * @param constructors.TextIncludeConstructor class for working with text / класс для работы с текстом
   */
  constructor(
    protected readonly props: AlertProps,
    protected readonly refs: ToRefs<AlertProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<AlertComponents, AlertProps>,
    protected readonly slots?: AlertSlots,
    protected readonly emits?: ConstrEmit<AlertEmits>,
    constructors: {
      ActionsIncludeConstructor?: typeof ActionsInclude
      AlertEventConstructor?: typeof AlertEvent
      AlertHideConstructor?: typeof AlertHide
      AlertLinkIncludeConstructor?: typeof AlertLinkInclude
      ButtonIncludeConstructor?: typeof ButtonInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      IconTrailingIncludeConstructor?: typeof IconTrailingInclude
      LabelIncludeConstructor?: typeof LabelInclude
      TextIncludeConstructor?: typeof TextInclude
    } = {}
  ) {
    const {
      ActionsIncludeConstructor = ActionsInclude,
      AlertEventConstructor = AlertEvent,
      AlertHideConstructor = AlertHide,
      AlertLinkIncludeConstructor = AlertLinkInclude,
      ButtonIncludeConstructor = ButtonInclude,
      DescriptionIncludeConstructor = DescriptionInclude,
      EventClickIncludeConstructor = EventClickInclude,
      IconTrailingIncludeConstructor = IconTrailingInclude,
      LabelIncludeConstructor = LabelInclude,
      TextIncludeConstructor = TextInclude
    } = constructors

    this.hide = new AlertHideConstructor(className)

    this.event = new EventClickIncludeConstructor(undefined, undefined, emits)
    this.alertEvent = new AlertEventConstructor(this.hide, emits)

    this.icon = new IconTrailingIncludeConstructor(props, className, components)
    this.label = new LabelIncludeConstructor(props, className, undefined, slots)
    this.description = new DescriptionIncludeConstructor(props, className, slots)

    this.button = new ButtonIncludeConstructor(
      className,
      undefined,
      components,
      () => getBind(props.button, 'label')
    )
    this.buttonClose = new ButtonIncludeConstructor(
      className,
      undefined,
      components,
      () => ({
        icon: props.iconClose,
        onClick: this.alertEvent.onClose
      }),
      'buttonClose'
    )

    this.actions = new ActionsIncludeConstructor(
      className,
      props,
      components,
      undefined,
      undefined,
      emits
    )
    this.link = new AlertLinkIncludeConstructor(
      className,
      props,
      components,
      emits
    )
    this.text = new TextIncludeConstructor(props)
  }

  /** ARIA bind for alert / ARIA привязка для оповещения */
  get ariaBind() {
    return {
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.live(this.props.ariaLive),
      ...AriaStaticInclude.labelledby(this.label.is ? this.label.id : undefined),
      ...AriaStaticInclude.describedby(this.description.is ? this.description.id : undefined)
    }
  }
}
