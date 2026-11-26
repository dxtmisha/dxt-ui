import { mergeProps, type Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName,
  getBind,
  isFilled,
  isNumber
} from '@dxtmisha/functional'

import { ActionsInclude, type ActionsProps } from '../Actions'
import { ButtonInclude } from '../Button'
import { IconTrailingInclude } from '../Icon'

import { AreaInclude } from '../../classes/AreaInclude'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { TextInclude } from '../../classes/TextInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { SnackbarItemProps } from './props'
import type { SnackbarItemComponents, SnackbarItemEmits, SnackbarItemSlots } from './types'

/** SnackbarItem dependency constructors type / Тип конструкторов зависимостей SnackbarItem */
export type SnackbarItemConstructors = {
  /** Actions manager constructor / Конструктор менеджера действий */
  actions: typeof ActionsInclude
  /** Area context manager constructor / Конструктор менеджера контекста области */
  area: typeof AreaInclude
  /** Action button manager constructor / Конструктор менеджера кнопки действия */
  button: typeof ButtonInclude
  /** Close button manager constructor / Конструктор менеджера кнопки закрытия */
  buttonClose: typeof ButtonInclude
  /** Description manager constructor / Конструктор менеджера описания */
  description: typeof DescriptionInclude
  /** Click event manager constructor / Конструктор менеджера событий клика */
  event: typeof EventClickInclude
  /** Icon manager constructor / Конструктор менеджера иконок */
  icon: typeof IconTrailingInclude
  /** Label manager constructor / Конструктор менеджера метки */
  label: typeof LabelInclude
  /** Text manager constructor / Конструктор менеджера текста */
  text: typeof TextInclude
}

/**
 * SnackbarItem class for managing the business logic of a single snackbar notification item.
 * Coordinates area context propagation, WAI-ARIA live region attributes, icons, label,
 * description, action button, close button, and action lists.
 *
 * Класс SnackbarItem для управления бизнес-логикой отдельного элемента уведомления снекбара.
 * Координирует передачу контекста области, WAI-ARIA атрибуты динамической области, иконки,
 * метку, описание, кнопку действия, кнопку закрытия и списки действий.
 */
export class SnackbarItem extends DesignLogicAbstract<
  HTMLDivElement,
  SnackbarItemComponents,
  SnackbarItemEmits,
  SnackbarItemSlots,
  SnackbarItemProps,
  SnackbarItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SnackbarItemConstructors> = {
    actions: {
      item: ActionsInclude,
      canCreate: () => Boolean(
        !this.props.actionsHide
        && (
          isFilled(this.props.actionsList)
          || isFilled(this.props.actionsSecondary)
          || isFilled(this.props.actionsAttrs?.list)
          || isFilled(this.props.actionsAttrs?.listSecondary)
        )
      ),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        { align: 'left' } as ActionsProps,
        undefined,
        this.emits
      ]
    },
    area: {
      item: AreaInclude,
      parameters: () => [
        this.props
      ]
    },
    button: {
      item: ButtonInclude,
      canCreate: () => isFilled(this.props.button) || isNumber(this.props.button),
      parameters: () => [
        undefined,
        this.naming,
        this.components,
        () => {
          if (isFilled(this.props.button) || isNumber(this.props.button)) {
            const bind = getBind(this.props.button, undefined, 'label', true)

            if (isFilled(bind)) {
              return mergeProps(
                { onClick: this.i('event').onClick },
                bind
              )
            }
          }

          return {}
        }
      ]
    },
    buttonClose: {
      item: ButtonInclude,
      canCreate: () => Boolean(this.props.closeButton && this.props.iconClose),
      parameters: () => [
        undefined,
        this.naming,
        this.components,
        () => (
          this.props.closeButton
            ? {
                icon: this.props.iconClose,
                class: this.naming.getSubClass('close'),
                onClick: this.onClose,
                ...AriaStaticInclude.label(this.i('text').close)
              }
            : {}
        ),
        'button-close'
      ]
    },
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    icon: {
      item: IconTrailingInclude,
      canCreate: () => IconTrailingInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [
        this.props
      ]
    }
  }

  /**
   * Constructor for SnackbarItem.
   * Eagerly initializes AreaInclude during setup so Vue provide/inject context is registered.
   *
   * Конструктор для SnackbarItem.
   * Инициализирует AreaInclude немедленно во время setup для регистрации контекста provide/inject Vue.
   * @param props input properties / входные свойства
   * @param element root HTML element reference / ссылка на корневой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with sub-components / объект для работы с вложенными компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits event emitter function / функция вызова событий
   * @param constructors dependency constructors override map / карта переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<SnackbarItemProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<SnackbarItemComponents, SnackbarItemProps>,
    slots?: SnackbarItemSlots,
    emits?: ConstrEmit<SnackbarItemEmits>,
    constructors?: Partial<SnackbarItemConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )

    this.i('area')
  }

  /**
   * Returns WAI-ARIA attributes for the snackbar item live region.
   * Defaults to `role="alert"` / `aria-live="assertive"` for error notifications and
   * `role="status"` / `aria-live="polite"` for success notifications unless explicitly overridden.
   *
   * Возвращает WAI-ARIA атрибуты для динамической области элемента снекбара.
   * По умолчанию задает `role="alert"` / `aria-live="assertive"` для уведомлений об ошибках и
   * `role="status"` / `aria-live="polite"` для уведомлений об успехе, если не переопределены явно.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    let role = this.props.role
    let live = this.props.ariaLive

    if (this.props.error) {
      role ??= 'alert'
      live ??= 'assertive'
    } else if (this.props.success) {
      role ??= 'status'
      live ??= 'polite'
    }

    return {
      ...AriaStaticInclude.atomic(true),
      ...AriaStaticInclude.role(role),
      ...AriaStaticInclude.live(live)
    }
  }

  /**
   * Handles close button click and emits the `close` event with the item value.
   *
   * Обрабатывает нажатие на кнопку закрытия и испускает событие `close` со значением элемента.
   */
  readonly onClose = (): void => {
    this.emits?.('close', this.props.value)
  }
}
