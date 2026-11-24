// ai-none

import { mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  getObjectNoUndefined,
  isFilled,
  type RawSlots
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { SkeletonPropsInclude } from '../Skeleton'
import type { BulletItemPropsInclude } from './basicTypes'
import type { BulletItemPropsBasic } from './props'
import type { BulletItemExpose, BulletItemSlots } from './types'

/**
 * BulletItemInclude class provides functionality for conditionally rendering lists
 * of BulletItem components inside parent bullet list containers (such as Bullet).
 *
 * Класс BulletItemInclude предоставляет функциональность для условного рендеринга списков
 * компонентов BulletItem внутри родительских контейнеров маркированного списка (например, Bullet).
 */
export class BulletItemInclude<
  Props extends BulletItemPropsInclude & SkeletonPropsInclude = BulletItemPropsInclude & SkeletonPropsInclude,
  PropsExtra extends BulletItemPropsBasic = BulletItemPropsBasic
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    BulletItemExpose,
    BulletItemSlots
  > {
  /**
   * Checks whether bullet items are configured in `list`.
   *
   * Проверяет, заданы ли элементы списка в `list`.
   * @param props input properties / входные свойства
   * @returns true if list is non-empty / true, если список не пуст
   */
  static is(props?: BulletItemPropsInclude): boolean {
    return isFilled(props?.list)
  }

  /** Prevents binding all rendered list items to a single shared element ref / Предотвращает привязку всех элементов списка к одному общему ref */
  protected override readonly hasInitElement: boolean = false
  /** Sub-component name / Название субкомпонента */
  protected override readonly name = 'bulletItem'
  /** Name of the property containing shared item attributes / Название свойства с общими атрибутами элементов */
  protected override readonly propsAttrsName = 'itemAttrs'

  /**
   * Checks whether items should be displayed.
   *
   * Проверяет, нужно ли отображать элементы.
   * @returns visibility status / статус видимости
   */
  override get is(): boolean {
    return BulletItemInclude.is(this.getProps())
  }

  /**
   * Returns the parent component's base BEM block name.
   *
   * Возвращает базовое имя BEM-блока родительского компонента.
   * @returns component name / имя компонента
   */
  getName(): string {
    return this.naming.getName()
  }

  /**
   * Returns the standalone BulletItem BEM block class name (e.g. `d1-bulletItem`).
   *
   * Возвращает имя BEM-класса компонента BulletItem (например, `d1-bulletItem`).
   * @returns item class name / имя класса элемента
   */
  getItemClass(): string {
    return `${this.getName()}Item`
  }

  /**
   * Returns the parent container's item sub-element class name (e.g. `d1-bullet__item`).
   *
   * Возвращает имя субкласса элемента родительского контейнера (например, `d1-bullet__item`).
   * @returns bullet item subclass name / имя субкласса элемента списка
   */
  getBulletItemClass(): string {
    return this.naming.getSubClass('item')
  }

  /**
   * Returns the combined class names applied to raw `<li>` tags in HTML mode.
   *
   * Возвращает объединённые имена классов для тегов `<li>` в HTML-режиме.
   * @returns combined class names / объединённые имена классов
   */
  getClasses(): string {
    return `${this.getItemClass()} ${this.getBulletItemClass()}`
  }

  /**
   * Renders the list of BulletItem VNodes with non-destructive attribute merging.
   *
   * Рендерит список VNode компонентов BulletItem с неразрушающим слиянием атрибутов.
   * @param slotsChildren child slots / слоты дочерних элементов
   * @param attrs optional override attributes / необязательные переопределяющие атрибуты
   * @param isShow function returning visibility state / функция, возвращающая состояние видимости
   * @returns rendered virtual node list / отрендеренный список виртуальных узлов
   */
  protected override initRender(
    slotsChildren?: BulletItemSlots,
    attrs?: Partial<ConstrBind<PropsExtra>>,
    isShow: () => boolean = () => this.is
  ): VNode[] {
    if (
      this.components
      && isShow()
    ) {
      const props = this.getProps()
      const list = props.list
      const length = list?.length ?? 0

      if (length === 0) {
        return []
      }

      const listElements: VNode[] = []
      const propsAttrs = getObjectNoUndefined((this.getPropsAttrs() ?? {}) as Record<string, unknown>)
      const extraAttrs = getObjectNoUndefined((attrs ?? {}) as Record<string, unknown>)

      for (let index = 0; index < length; index++) {
        const description = list![index]

        this.components.renderAdd(
          listElements,
          this.name,
          mergeProps(
            getObjectNoUndefined({
              isSkeleton: props.isSkeleton,
              class: this.getBulletItemClass()
            }),
            propsAttrs,
            extraAttrs,
            getObjectNoUndefined({
              description
            })
          ),
          slotsChildren as RawSlots,
          `bulletItem-${index}`
        )
      }

      return listElements
    }

    return []
  }
}
