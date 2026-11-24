// ai-none

import { mergeProps, type VNode } from 'vue'
import {
  type ConstrBind,
  getObjectNoUndefined,
  isFilled,
  isNumber
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { CollageBarPropsInclude, CollageBarSlotsInclude } from './basicTypes'
import type { CollageBarProps } from './props'
import type { CollageBarExpose, CollageBarSlots } from './types'

/**
 * CollageBarInclude class provides functionality for conditionally rendering CollageBar components
 * within other components (such as Collage or CollageItem).
 *
 * Класс CollageBarInclude предоставляет функциональность для условного рендеринга компонентов
 * CollageBar внутри других компонентов (таких как Collage или CollageItem).
 */
export class CollageBarInclude<
  Props extends CollageBarPropsInclude = CollageBarPropsInclude,
  PropsExtra extends CollageBarProps = CollageBarProps
> extends ComponentIncludeAbstract<
    Props,
    PropsExtra,
    CollageBarExpose,
    CollageBarSlots
  > {
  /**
   * Checks whether collage bar content is present in properties or slots.
   *
   * Проверяет наличие содержимого панели коллажа в свойствах или слотах.
   * @param props input properties / входные свойства
   * @param slots optional slots dictionary / необязательный словарь слотов
   * @returns true if collage bar should be displayed / true, если панель коллажа должна отображаться
   */
  static is(
    props?: Readonly<CollageBarPropsInclude>,
    slots?: CollageBarSlots | CollageBarSlotsInclude
  ): boolean {
    const attrs = props?.collageBarAttrs

    return Boolean(
      isFilled(props?.label, true)
      || isNumber(props?.label)
      || isFilled(props?.description, true)
      || isNumber(props?.description)
      || isFilled(props?.to)
      || isFilled(props?.href)
      || isFilled(attrs?.label, true)
      || isNumber(attrs?.label)
      || isFilled(attrs?.description, true)
      || isNumber(attrs?.description)
      || isFilled(attrs?.button, true)
      || isNumber(attrs?.button)
      || isFilled(attrs?.icon)
      || isFilled(attrs?.buttonAttrs)
      || isFilled(attrs?.to)
      || isFilled(attrs?.href)
      || (slots && (
        Boolean('default' in slots && slots.default)
        || Boolean('description' in slots && slots.description)
        || Boolean('body' in slots && slots.body)
        || Boolean('trailing' in slots && slots.trailing)
        || Boolean('barBody' in slots && slots.barBody)
        || Boolean('barTrailing' in slots && slots.barTrailing)
      ))
    )
  }

  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'collageBar'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'collageBarAttrs'

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false

  /**
   * Checks whether the bar should be displayed.
   *
   * Проверяет, нужно ли отображать панель.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    const binds = this.binds.value

    return Boolean(
      isFilled(binds.label, true)
      || isNumber(binds.label)
      || isFilled(binds.description, true)
      || isNumber(binds.description)
      || isFilled(binds.button, true)
      || isNumber(binds.button)
      || isFilled(binds.icon)
      || isFilled(binds.buttonAttrs)
      || isFilled(binds.to)
      || isFilled(binds.href)
    )
  }

  /**
   * Renders the included CollageBar component as a VNode array.
   *
   * Рендерит включённый компонент CollageBar в виде массива VNode.
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param isShow function returns true if the component should be rendered / функция возвращает true, если компонент должен быть отрисован
   * @param index unique rendering key / уникальный ключ рендеринга
   * @returns array of VNodes / массив VNode
   */
  override readonly render = (
    slotsChildren?: CollageBarSlots,
    attrs?: Partial<ConstrBind<PropsExtra>>,
    isShow?: () => boolean,
    index?: string
  ): VNode[] => this.initRender(
    slotsChildren,
    attrs,
    isShow ?? (() => this.is || Boolean(
      slotsChildren?.default
      || slotsChildren?.description
      || slotsChildren?.body
      || slotsChildren?.trailing
    )),
    index
  )

  /**
   * Builds and resolves all HTML attributes and classes for binding without overwriting `collageBarAttrs` with `undefined`.
   *
   * Создаёт и разрешает все HTML-атрибуты и классы для привязки без перезаписи `collageBarAttrs` значением `undefined`.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds(): Partial<ConstrBind<PropsExtra>> {
    const props = this.getProps()

    return mergeProps(
      getObjectNoUndefined({
        position: props.collageBarPosition,
        selected: props.selected,
        label: props.label,
        labelId: props.labelId,
        description: props.description,
        descriptionId: props.descriptionId,
        to: props.to,
        href: props.href,
        value: props.value,
        detail: props.detail
      }),
      super.toBinds()
    ) as Partial<ConstrBind<PropsExtra>>
  }
}
