import { ref, type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { ActionsInclude } from '../Actions/ActionsInclude'
import { ButtonInclude } from '../Button/ButtonInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { IconTrailingInclude } from '../Icon/IconTrailingInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { AlertLinkInclude } from '../AlertLink/AlertLinkInclude'

import type { AlertComponents, AlertEmits, AlertSlots } from './types'
import type { AlertProps } from './props'

/**
 * Alert class for managing the business logic of the Alert component.
 *
 * Класс Alert для управления бизнес-логикой компонента Alert.
 */
export class Alert {
  /** Actions manager / Менеджер действий */
  readonly actions: ActionsInclude

  /** Button manager / Менеджер кнопки */
  readonly button: ButtonInclude

  /** Close button manager / Менеджер кнопки закрытия */
  readonly buttonClose: ButtonInclude

  /** Description manager / Менеджер описания */
  readonly description: DescriptionInclude

  /** Animation end status / Статус окончания анимации */
  readonly destroy = ref<boolean>(false)

  /** Click event manager / Менеджер событий клика */
  readonly event: EventClickInclude

  /** Visibility state / Состояние видимости */
  readonly hide = ref<boolean>(false)

  /** Icon manager / Менеджер иконок */
  readonly icon: IconTrailingInclude

  /** Label manager / Менеджер метки */
  readonly label: LabelInclude

  /** Link manager / Менеджер ссылок */
  readonly link: AlertLinkInclude

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
   * @param constructors.AlertLinkIncludeConstructor class for working with alert links / класс для работы со ссылками оповещения
   * @param constructors.ButtonIncludeConstructor class for working with buttons / класс для работы с кнопками
   * @param constructors.DescriptionIncludeConstructor class for working with descriptions / класс для работы с описаниями
   * @param constructors.EventClickIncludeConstructor class for working with click events / класс для работы с событиями клика
   * @param constructors.IconTrailingIncludeConstructor class for working with trailing icons / класс для работы с хвостовыми иконками
   * @param constructors.LabelIncludeConstructor class for working with labels / класс для работы с метками
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
      AlertLinkIncludeConstructor?: typeof AlertLinkInclude
      ButtonIncludeConstructor?: typeof ButtonInclude
      DescriptionIncludeConstructor?: typeof DescriptionInclude
      EventClickIncludeConstructor?: typeof EventClickInclude
      IconTrailingIncludeConstructor?: typeof IconTrailingInclude
      LabelIncludeConstructor?: typeof LabelInclude
    } = {}
  ) {
    const {
      ActionsIncludeConstructor = ActionsInclude,
      AlertLinkIncludeConstructor = AlertLinkInclude,
      ButtonIncludeConstructor = ButtonInclude,
      DescriptionIncludeConstructor = DescriptionInclude,
      EventClickIncludeConstructor = EventClickInclude,
      IconTrailingIncludeConstructor = IconTrailingInclude,
      LabelIncludeConstructor = LabelInclude
    } = constructors

    this.actions = new ActionsIncludeConstructor(
      className,
      props,
      components,
      undefined,
      undefined,
      emits
    )

    this.button = new ButtonIncludeConstructor(
      className,
      () => props.button,
      components
    )

    this.buttonClose = new ButtonIncludeConstructor(
      className,
      () => ({
        icon: props.iconClose,
        label: undefined
      }),
      components,
      {
        onClick: this.onClose
      },
      'buttonClose'
    )

    this.description = new DescriptionIncludeConstructor(
      props,
      className,
      slots
    )

    this.event = new EventClickIncludeConstructor(
      undefined,
      undefined,
      emits
    )

    this.icon = new IconTrailingIncludeConstructor(
      props,
      className,
      components
    )

    this.label = new LabelIncludeConstructor(
      props,
      className,
      undefined,
      slots
    )

    this.link = new AlertLinkIncludeConstructor(
      className,
      props,
      components,
      emits
    )
  }

  /**
   * Returns classes for dynamic status control.
   *
   * Возвращает классы для динамического контроля статусов.
   */
  get classes(): ConstrClass {
    return {
      [`${this.className}--hide`]: this.hide.value
    }
  }

  /**
   * Events on close button click.
   *
   * События при нажатии на закрытие.
   */
  readonly onClose = (): void => {
    this.hide.value = true
  }

  /**
   * Event of animation end when closing the window.
   *
   * Событие окончания анимации при закрытии окна.
   * @param event native transition event / native событие перехода
   */
  readonly onTransition = (event: TransitionEvent): void => {
    if (
      event.propertyName === 'opacity'
      && this.hide.value
    ) {
      this.destroy.value = true
      this.emits?.('close')
    }
  }
}
