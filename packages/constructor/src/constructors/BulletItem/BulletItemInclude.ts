import { type VNode } from 'vue'
import {
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
export class BulletItemInclude extends ComponentIncludeAbstract<
  BulletItemPropsInclude,
  BulletItemPropsBasic,
  BulletItemExpose,
  BulletItemSlots
> {
  /** Sub-component name / Название субкомпонента */
  protected readonly name = 'bulletItem'
  /** Name of the property containing component attributes / Название свойства, содержащего атрибуты компонента */
  protected readonly propsAttrsName = 'itemAttrs'

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
   * Returns the component name.
   *
   * Возвращает имя компонента.
   * @returns component name / имя компонента
   */
  getName(): string {
    return this.className
  }

  /**
   * Returns the item class name.
   *
   * Возвращает имя класса элемента.
   * @returns item class name / имя класса элемента
   */
  getItemClass(): string {
    return `${this.getName()}Item`
  }

  /**
   * Returns the bullet item class name.
   *
   * Возвращает имя класса элемента списка.
   * @returns bullet item class name / имя класса элемента списка
   */
  getBulletItemClass(): string {
    return `${this.getName()}__bullet__item`
  }

  /**
   * Returns the combined class names for the bullet item.
   *
   * Возвращает объединенные имена классов для элемента списка.
   * @returns combined class names / объединенные имена классов
   */
  getClasses(): string {
    return `${this.getItemClass()} ${this.getBulletItemClass()}`
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
              this.getAttrs(attrs),
              {
                description,
                class: this.getBulletItemClass()
              }
            ),
            slotsChildren as RawSlots,
            `bulletItem-${index}`
          )
        })

      return listElement
    }

    return []
  }
}
