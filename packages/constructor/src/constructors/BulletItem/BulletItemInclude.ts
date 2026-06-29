import { h, type VNode } from 'vue'
import {
  type DesignComponents,
  type RawSlots,
  toBinds
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { BulletItemPropsInclude } from './basicTypes'
import type { BulletItemExpose, BulletItemSlots } from './types'
import type { BulletItemPropsBasic } from './props'

/**
 * BulletItemInclude class provides functionality for rendering bullet items
 * within other components. It manages the logic for list rendering.
 *
 * Класс BulletItemInclude предоставляет функциональность для рендеринга элементов списка
 * внутри других компонентов. Управляет логикой рендеринга списка.
 */
export class BulletItemInclude<
  Props extends BulletItemPropsInclude = BulletItemPropsInclude,
  PropsExtra extends BulletItemPropsBasic = BulletItemPropsBasic
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    BulletItemExpose,
    BulletItemSlots
  > {
  /** Sub-component name / Название субкомпонента */
  protected readonly name = 'bulletItem'
  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected readonly propsAttrsName = 'itemAttrs'

  /**
   * Constructor
   * @param className class name / название класса
   * @param props input parameter / входной параметр
   * @param components object for working with components / объект для работы с компонентами
   */
  constructor(
    className: string,
    props: Readonly<Props>,
    components?: DesignComponents<any, Props>
  ) {
    super(className, props, components)
  }

  /**
   * Checks whether items should be displayed.
   *
   * Проверяет, нужно ли отображать элементы.
   * @returns visibility status / статус видимости
   */
  override get is(): boolean {
    return Boolean(this.getProps().list)
  }

  /**
   * Renders the list of BulletItem components inside a wrapping container.
   *
   * Рендерит список компонентов BulletItem внутри контейнера-обертки.
   * @param slotsChildren slots children / слоты дочерних элементов (не используется)
   * @param attrs attributes / атрибуты (не используется)
   * @param isShow function returning visibility state / функция, возвращающая видимость компонента
   * @returns rendered virtual node list / отрендеренный список виртуальных нод
   */
  protected override initRender(
    slotsChildren?: BulletItemSlots,
    attrs?: Record<string, any>,
    isShow: () => boolean = () => this.is
  ): VNode[] {
    if (
      this.components
      && isShow()
    ) {
      const listElement: any[] = []

      this.getProps()
        .list?.forEach((description, index) => {
          this.components?.renderAdd(
            listElement,
            this.name,
            toBinds(
              this.getPropsAttrs(),
              {
                description,
                class: `${this.className}__bullet__item`
              }
            ),
            slotsChildren as RawSlots,
            `bulletItem-${index}`
          )
        })

      return [h(
        'ul',
        toBinds(
          attrs,
          { class: `${this.className}__bullet` }
        ),
        listElement
      )]
    }

    return []
  }
}
