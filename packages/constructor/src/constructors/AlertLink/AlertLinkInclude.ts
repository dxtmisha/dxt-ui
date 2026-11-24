// ai-none

import { h, mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type DesignComponents,
  type DesignName,
  isFilled
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { ComponentIncludeProps } from '../../types/componentInclude'
import type { EventClickValue } from '../../types/eventClickTypes'
import type {
  AlertLinkComponentInclude,
  AlertLinkEmitsInclude,
  AlertLinkPropsInclude
} from './basicTypes'
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
  /**
   * Checks whether alert links are configured.
   *
   * Проверяет, заданы ли ссылки оповещения.
   * @param props input parameter / входной параметр
   * @returns true if links array is non-empty / true, если массив ссылок не пуст
   */
  static is(props?: AlertLinkPropsInclude): boolean {
    return isFilled(props?.links)
  }

  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'alertLink'
  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected override readonly propsAttrsName = 'linksAttrs'

  /**
   * Constructor
   * @param props input parameter / входной параметр
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   */
  constructor(
    props: ComponentIncludeProps<Props>,
    naming: DesignName,
    components?: DesignComponents<AlertLinkComponentInclude, Props>,
    protected readonly emits?: ConstrEmit<AlertLinkEmitsInclude>
  ) {
    super(props, naming, components)
  }

  /**
   * Checks whether links should be displayed.
   *
   * Проверяет, нужно ли отображать ссылки.
   * @returns visibility status / статус видимости
   */
  override get is(): boolean {
    return AlertLinkInclude.is(this.getProps())
  }

  /**
   * Handles link click events and emits the custom event.
   *
   * Обрабатывает событие клика по ссылке и генерирует пользовательское событие.
   * @param event native mouse event / native событие мыши
   * @param value payload with event details / данные события с подробностями
   */
  readonly onLink = (event: MouseEvent, value: EventClickValue): void => {
    this.emits?.('link', event, value)
    this.emits?.('linkLite', value)
  }

  /**
   * Renders the list of AlertLink components inside a wrapping container.
   *
   * Рендерит список компонентов AlertLink внутри контейнера-обертки.
   * @param _slotsChildren slots children / слоты дочерних элементов (не используется)
   * @param attrs attributes / атрибуты
   * @param isShow function returning visibility state / функция, возвращающая видимость компонента
   * @returns rendered virtual node list / отрендеренный список виртуальных нод
   */
  protected override initRender(
    _slotsChildren?: AlertLinkSlots,
    attrs?: Partial<ConstrBind<PropsExtra>>,
    isShow: () => boolean = () => this.is
  ): VNode[] {
    if (
      this.components
      && isShow()
    ) {
      const listElement: VNode[] = []
      const propsAttrs = (this.getPropsAttrs() ?? {}) as Record<string, unknown>

      this.getProps()
        .links?.forEach((link, index) => {
          const indexSlot = `alertLink-${index}-${link.href ?? link.label ?? ''}`

          this.components?.renderAdd(
            listElement,
            this.name,
            mergeProps(
              {
                class: this.naming.getSubClass('links', 'item'),
                onClick: this.onLink
              },
              propsAttrs,
              link
            ),
            undefined,
            indexSlot
          )
        })

      if (listElement.length > 0) {
        return [h(
          'div',
          mergeProps(
            { class: this.naming.getSubClass('links') },
            (attrs ?? {}) as Record<string, unknown>
          ),
          listElement
        )]
      }
    }

    return []
  }
}
