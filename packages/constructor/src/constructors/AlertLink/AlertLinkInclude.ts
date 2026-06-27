import { h, type VNode } from 'vue'
import {
  type ConstrEmit,
  type DesignComponents,
  toBinds
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { EventClickValue } from '../../types/eventClickTypes'
import type { AlertLinkEmitsInclude, AlertLinkPropsInclude } from './basicTypes'
import type { AlertLinkPropsBasic } from './props'
import type { AlertLinkExpose, AlertLinkSlots } from './types'

/**
 * AlertLinkInclude class provides functionality for conditionally rendering alert links
 * within other components. It manages the logic for list rendering.
 *
 * Класс AlertLinkInclude предоставляет функциональность для условного рендеринга ссылок оповещения
 * внутри других компонентов. Управляет логикой рендеринга списка.
 */
export class AlertLinkInclude<
  Props extends AlertLinkPropsInclude = AlertLinkPropsInclude,
  PropsExtra extends AlertLinkPropsBasic = AlertLinkPropsBasic
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    AlertLinkExpose,
    AlertLinkSlots
  > {
  /** Sub-component name / Название субкомпонента */
  protected readonly name = 'alertLink'
  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected readonly propsAttrsName = 'linksAttrs'

  /**
   * Constructor
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<any, Props>,
    protected readonly emits?: ConstrEmit<AlertLinkEmitsInclude>
  ) {
    super(className, props, components)
  }

  /**
   * Checks whether links should be displayed.
   *
   * Проверяет, нужно ли отображать ссылки.
   * @returns visibility status / статус видимости
   */
  override get is(): boolean {
    return Boolean(this.getProps().links)
  }

  /**
   * Handles link click events and emits the custom event.
   *
   * Обрабатывает событие клика по ссылке и генерирует пользовательское событие.
   * @param event native mouse event / native событие мыши
   * @param value payload with event details / данные события с подробностями
   */
  readonly onLink = (event: MouseEvent, value: EventClickValue) => {
    this.emits?.('link', event, value)
    this.emits?.('linkLite', value)
  }

  /**
   * Renders the list of AlertLink components inside a wrapping container.
   *
   * Рендерит список компонентов AlertLink внутри контейнера-обертки.
   * @param _slotsChildren slots children / слоты дочерних элементов (не используется)
   * @param attrs attributes / атрибуты (не используется)
   * @param isShow function returning visibility state / функция, возвращающая видимость компонента
   * @returns rendered virtual node list / отрендеренный список виртуальных нод
   */
  protected override initRender(
    _slotsChildren?: AlertLinkSlots,
    attrs?: Record<string, any>,
    isShow: () => boolean = () => this.is
  ): VNode[] {
    if (
      this.components
      && isShow()
    ) {
      const listElement: any[] = []

      this.getProps()
        .links?.forEach((link, index) => {
          const indexSlot = String(
            link.href
            ?? link.label
            ?? `alertLink-${index}`
          )

          this.components?.renderAdd(
            listElement,
            this.name,
            toBinds(
              this.getPropsAttrs(),
              link,
              {
                class: `${this.className}__links__item`,
                onClick: this.onLink
              }
            ),
            undefined,
            indexSlot
          )
        })

      return [h(
        'div',
        toBinds(
          attrs,
          { class: `${this.className}__links` }
        ),
        listElement
      )]
    }

    return []
  }
}
