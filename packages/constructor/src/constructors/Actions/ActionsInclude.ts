import { type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeExposeItem, ComponentIncludeExtra } from '../../types/componentInclude'
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
export class ActionsInclude<
  Props extends ActionsPropsInclude = ActionsPropsInclude,
  PropsExtra extends ActionsProps = ActionsProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    ActionsExpose,
    ActionsSlots
  > {
  protected readonly exposeItems: ComponentIncludeExposeItem<any>[] | undefined = undefined

  protected name = 'actions'
  protected propsAttrsName = 'actionsAttrs'

  /**
   * Constructor
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param extra additional parameter or property name / дополнительный параметр или имя свойства
   * @param index index identifier / идентификатор индекса
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<ActionsComponentInclude, Props>,
    extra?: ComponentIncludeExtra<PropsExtra>,
    index?: string,
    protected readonly emits?: ConstrEmit<ActionsEmitsInclude>
  ) {
    super(className, props, components, extra, index)
  }

  /**
   * Checks whether actions should be displayed /
   * Проверяет, нужно ли отображать действия
   */
  get is(): boolean {
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
   * Handles click events from Actions and emits related events /
   * Обрабатывает клики по действиям и испускает связанные события
   * @param event native mouse event / native событие мыши
   * @param value payload with { type, value, detail } / данные события с { type, value, detail }
   */
  readonly onClick = (event: MouseEvent, value: EventClickValue) => {
    this.emits?.('actions', event, value)
    this.emits?.('actionsLite', value)
  }

  /**
   * Renders the Actions component /
   * Рендер компонента действий
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @returns array of VNodes / массив VNode
   */
  readonly render = (
    slotsChildren?: ActionsSlots,
    attrs?: ConstrBind<PropsExtra>
  ): VNode[] => super.initRender(
    slotsChildren,
    attrs,
    () => this.is
  )

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): ConstrBind<PropsExtra> {
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
