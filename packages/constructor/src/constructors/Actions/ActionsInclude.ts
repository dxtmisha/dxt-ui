import {
  type ConstrEmit,
  type DesignComponents
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExtra } from '../../types/componentInclude'
import type { EventClickValue } from '../../types/eventClickTypes'
import type { ActionsComponentInclude, ActionsEmitsInclude, ActionsPropsInclude } from './basicTypes'
import type { ActionsProps } from './props'
import type { ActionsExpose, ActionsSlots } from './types'

/**
 * ActionsInclude class provides functionality for conditionally rendering actions components
 * within other components. It manages the logic for determining when to display actions
 * and configures the appropriate properties.
 *
 * Класс ActionsInclude предоставляет функциональность для условного рендеринга компонентов
 * действий внутри других компонентов. Он управляет логикой определения необходимости
 * отображения действий и настраивает соответствующие свойства.
 */
export class ActionsInclude extends ComponentIncludeAbstract<
  ActionsPropsInclude,
  ActionsProps,
  ActionsExpose,
  ActionsSlots
> {
  /** Component name / Имя компонента */
  protected name = 'actions'
  /** Property name for attributes / Имя свойства для атрибутов */
  protected propsAttrsName = 'actionsAttrs'

  /**
   * Constructor for ActionsInclude class.
   *
   * Конструктор для класса ActionsInclude.
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    className: string,
    props: Readonly<ActionsPropsInclude>,
    components?: DesignComponents<ActionsComponentInclude, ActionsPropsInclude>,
    extra?: ComponentIncludeExtra<ActionsProps>,
    index?: string,
    protected readonly emits?: ConstrEmit<ActionsEmitsInclude>
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Checks whether actions should be displayed.
   *
   * Проверяет, нужно ли отображать действия.
   * @returns visibility status / статус видимости
   */
  override get is(): boolean {
    const props = this.getProps()

    return Boolean(
      !props.actionsHide
      && (
        this.binds.value.list
        || this.binds.value.listSecondary
      )
    )
  }

  /**
   * Handles click events from Actions and emits related events.
   *
   * Обрабатывает клики по действиям и испускает связанные события.
   * @param event native mouse event / native событие мыши
   * @param value payload with event details / данные события с подробностями
   */
  readonly onClick = (event: MouseEvent, value: EventClickValue) => {
    this.emits?.('actions', event, value)
    this.emits?.('actionsLite', value)
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    const props = this.getProps()
    const binds = super.toBinds()

    return {
      ...binds,

      list: props.actionsList ?? binds.list,
      listSecondary: props.actionsSecondary ?? binds.listSecondary,
      onClick: this.onClick
    }
  }
}
