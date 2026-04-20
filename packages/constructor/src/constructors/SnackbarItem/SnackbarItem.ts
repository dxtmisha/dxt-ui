import { computed, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { ActionsInclude } from '../Actions'
import { ButtonInclude } from '../Button'
import { IconTrailingInclude } from '../Icon'

import type { SnackbarItemComponents, SnackbarItemEmits, SnackbarItemSlots } from './types'
import type { SnackbarItemProps } from './props'

/**
 * SnackbarItem
 */
export class SnackbarItem {
  /** Label manager for snackbar item/ Менеджер меток для элемента снекбара */
  readonly label: LabelInclude
  /** Description manager for snackbar item/ Менеджер описаний для элемента снекбара */
  readonly description: DescriptionInclude
  /** Event click manager for snackbar item/ Менеджер событий клика для элемента снекбара */
  readonly event: EventClickInclude

  /** Icon manager for snackbar item/ Менеджер иконок для элемента снекбара */
  readonly icon: IconTrailingInclude
  /** Button manager for snackbar item/ Менеджер кнопок для элемента снекбара */
  readonly button: ButtonInclude
  /** Actions manager for snackbar item/ Менеджер действий для элемента снекбара */
  readonly actions: ActionsInclude

  /** Text manager for window content/ Менеджер текста для содержимого окна */
  readonly text: TextInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors constructors item class/ класс элемента конструкторов
   * @param constructors.ActionsConstructor class for creating actions/ класс для создания действий
   * @param constructors.ButtonConstructor class for creating a button/ класс для создания кнопки
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EventClickConstructor class for creating an event click/ класс для создания события клика
   * @param constructors.IconConstructor class for creating an icon/ класс для создания иконки
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.TextConstructor class for creating a text/ класс для создания текста
   */
  constructor(
    protected readonly props: SnackbarItemProps,
    protected readonly refs: ToRefs<SnackbarItemProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<SnackbarItemComponents, SnackbarItemProps>,
    protected readonly slots?: SnackbarItemSlots,
    protected readonly emits?: ConstrEmit<SnackbarItemEmits>,
    constructors?: {
      ActionsConstructor?: typeof ActionsInclude
      ButtonConstructor?: typeof ButtonInclude
      DescriptionConstructor?: typeof DescriptionInclude
      EventConstructor?: typeof EventClickInclude
      IconConstructor?: typeof IconTrailingInclude
      LabelConstructor?: typeof LabelInclude
      TextConstructor?: typeof TextInclude
    }
  ) {
    const {
      ActionsConstructor = ActionsInclude,
      ButtonConstructor = ButtonInclude,
      DescriptionConstructor = DescriptionInclude,
      EventConstructor = EventClickInclude,
      IconConstructor = IconTrailingInclude,
      LabelConstructor = LabelInclude,
      TextConstructor = TextInclude
    } = constructors ?? {}

    this.label = new LabelConstructor(props, className, undefined, slots)
    this.description = new DescriptionConstructor(props, className, slots)
    this.event = new EventConstructor(undefined, undefined, emits)

    this.icon = new IconConstructor(props, className, components)
    this.button = new ButtonConstructor(
      computed(() => this.props.button),
      className,
      components,
      undefined,
      { onClick: this.event.onClick }
    )
    this.actions = new ActionsConstructor(
      props,
      className,
      components,
      emits,
      {
        align: 'left'
      }
    )

    this.text = new TextConstructor(props)
  }

  /** ARIA bind for snackbar item/ ARIA привязка для элемента снекбара */
  readonly ariaBind = computed(() => {
    const aria = {
      ...AriaStaticInclude.atomic(true),
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.live(this.props.ariaLive)
    }

    if (this.props.success) {
      return {
        ...aria,
        ...AriaStaticInclude.live('polite'),
        ...AriaStaticInclude.role('status')
      }
    }

    if (this.props.error) {
      return {
        ...aria,
        ...AriaStaticInclude.live('assertive'),
        ...AriaStaticInclude.role('alert')
      }
    }

    return aria
  })

  /**
   * Events on close button click.
   *
   * События при нажатии на закрытие.
   */
  readonly onClose = () => this.emits?.('close', this.props.value)
}
