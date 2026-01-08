import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents,
  getRef,
  type RefOrNormal,
  toBinds
} from '@dxtmisha/functional'

import type { EventClickValue } from '../../types/eventClickTypes'

import type { ActionsComponentInclude, ActionsEmitsInclude, ActionsPropsInclude } from './basicTypes'
import type { ActionsProps } from './props'

/**
 * ActionsInclude class provides functionality for conditionally rendering actions components
 * within other components. It manages the logic for determining when to display actions
 * and configures the appropriate properties.
 *
 * Класс ActionsInclude предоставляет функциональность для условного рендеринга компонентов
 * действий внутри других компонентов. Он управляет логикой определения необходимости
 * отображения действий и настраивает соответствующие свойства.
 */
export class ActionsInclude<
  Props extends ActionsPropsInclude = ActionsPropsInclude,
  PropsExtra extends ConstrBind<ActionsProps> = ConstrBind<ActionsProps>
> {
  /**
   * Constructor
   * @param props input parameter/ входной параметр
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param extra additional parameter or property name/ дополнительный параметр или имя свойства
   * @param index index identifier/ идентификатор индекса
   */
  constructor(
    protected readonly props: Readonly<Props>,
    protected readonly className: string,
    protected readonly components?: DesignComponents<ActionsComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<ActionsEmitsInclude>,
    protected readonly extra?: RefOrNormal<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /**
   * Checks whether actions should be displayed/
   * Проверяет, нужно ли отображать действия
   */
  readonly is = computed(() => Boolean(
    !this.props.actionsHide
    && (
      this.binds.value.list
      || this.binds.value.listSecondary
    )
  ))

  /** Computed bindings for the actions/ Вычисляемые привязки для действий */
  readonly binds = computed<PropsExtra>(() => {
    const props = toBinds<PropsExtra>(
      getRef(this.extra),
      this.props.actionsAttrs,
      { class: `${this.className}__actions` }
    )

    return {
      ...props,

      list: this.props.actionsList ?? props.list,
      listSecondary: this.props.actionsSecondary ?? props.listSecondary,
      onClick: this.onClick
    }
  })

  /**
   * Render the Actions component
   *
   * Рендер компонента действий
   */
  readonly render = (): VNode[] => {
    if (
      this.components
      && this.is.value
    ) {
      return this.components.render(
        'actions',
        this.binds.value,
        undefined,
        this.index
      )
    }

    return []
  }

  /**
   * Handles click events from Actions and emits related events/
   * Обрабатывает клики по действиям и испускает связанные события
   *
   * @param event native mouse event/ native событие мыши
   * @param value payload with { type, value, detail }/ данные события с { type, value, detail }
   */
  protected readonly onClick = (event: MouseEvent, value: EventClickValue) => {
    this.emits?.('actions', event, value)
    this.emits?.('actionsLite', value)
  }
}
