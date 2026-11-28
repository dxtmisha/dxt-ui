import { mergeProps, unref, type VNode, type VNodeArrayChildren } from 'vue'
import {
  type ConstrBind,
  getElementId,
  type DesignName,
  isFilledOrNumber,
  type RefOrNormal,
  render,
  executeFunctionRef,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { SkeletonInclude, type SkeletonPropsInclude } from '../constructors/Skeleton'

import type { DescriptionProps, DescriptionSlots } from '../types/descriptionTypes'

/**
 * Utility class for connecting and rendering description elements.
 * It manages description visibility states, slots, dynamic translations, and loading skeletons.
 *
 * Утилитарный класс для подключения и рендеринга элементов описания.
 * Управляет состояниями видимости описания, слотами, динамическими переводами и скелетонами загрузки.
 */
export class DescriptionInclude {
  /**
   * Checks if description content is present in props or slots.
   *
   * Проверяет наличие содержимого описания в свойствах или слотах.
   * @param props description properties / свойства описания
   * @param slots description slots / слоты описания
   * @returns true if description is present / true, если описание присутствует
   */
  static is(
    props?: DescriptionProps,
    slots?: DescriptionSlots
  ): boolean {
    return Boolean(
      isFilledOrNumber(props?.description)
      || (slots && 'description' in slots)
    )
  }

  /** Default element identifier / Идентификатор элемента по умолчанию */
  protected readonly elementIdDefault = getElementId()

  /**
   * Constructor for initializing DescriptionInclude properties.
   *
   * Конструктор для инициализации свойств DescriptionInclude.
   * @param props input properties / входные свойства
   * @param naming component naming helper / помощник именования компонента
   * @param slots slots dictionary / объект слотов
   * @param skeleton callback returning optional loading skeleton include / функция обратного вызова, возвращающая необязательный скелетон загрузки
   * @param tag HTML tag for wrapping element / HTML-тег для оборачивающего элемента
   */
  constructor(
    protected readonly props: RefOrNormalOrFunction<DescriptionProps & SkeletonPropsInclude>,
    protected readonly naming: DesignName,
    protected readonly slots?: DescriptionSlots,
    protected readonly skeleton?: () => SkeletonInclude | undefined,
    protected readonly tag?: RefOrNormal<string | undefined>
  ) {
  }

  /**
   * Check for the presence of a description.
   *
   * Проверка наличия описания.
   * @returns checking result / результат проверки
   */
  get is(): boolean {
    return DescriptionInclude.is(this.getProps(), this.slots)
  }

  /**
   * Unique identifier for the description element.
   *
   * Уникальный идентификатор для элемента описания.
   * @returns unique identifier / уникальный идентификатор
   */
  get id(): string {
    return this.getProps().descriptionId || this.elementIdDefault
  }

  /**
   * Renders the description element with children and properties.
   *
   * Рендерит элемент описания с дочерними элементами и свойствами.
   * @param slotsChildren additional children elements / дополнительные дочерние элементы
   * @param props additional HTML properties / дополнительные HTML-свойства
   * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
   */
  render(
    slotsChildren?: VNodeArrayChildren,
    props: ConstrBind = {}
  ): VNode[] {
    if (!this.is) {
      return []
    }

    const children: VNodeArrayChildren = []
    const description = this.getProps().description

    if (isFilledOrNumber(description)) {
      children.push(description)
    }

    if (this.slots?.description) {
      children.push(this.slots.description({}))
    }

    if (slotsChildren) {
      children.push(...slotsChildren)
    }

    if (children.length > 0) {
      const skeleton = this.getSkeleton()

      return [
        render(
          unref(this.tag) ?? 'div',
          mergeProps(
            {
              id: this.id,
              class: {
                [this.naming.getSubClass('description')]: true,
                ...skeleton?.classes
              }
            },
            props
          ),
          children,
          'description'
        )
      ]
    }

    return []
  }

  /**
   * Returns properties resolving functions if needed.
   *
   * Возвращает свойства, разрешая функции при необходимости.
   * @returns resolved description properties / разрешенные свойства описания
   */
  protected getProps(): DescriptionProps & SkeletonPropsInclude {
    return executeFunctionRef(this.props)
  }

  /**
   * Returns the skeleton instance if skeleton mode is active.
   *
   * Возвращает экземпляр скелетона, если режим скелетона активен.
   * @returns skeleton instance or undefined / экземпляр скелетона или undefined
   */
  protected getSkeleton(): SkeletonInclude | undefined {
    if (SkeletonInclude.is(this.getProps())) {
      return this.skeleton?.()
    }

    return undefined
  }
}
