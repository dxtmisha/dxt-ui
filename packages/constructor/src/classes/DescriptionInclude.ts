import { type VNode } from 'vue'
import {
  getElementId,
  getRef,
  isFilled,
  type RefOrNormal,
  render,
  toBinds,
  executeFunctionRef,
  type RefOrNormalOrFunction
} from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { DescriptionProps, DescriptionSlots } from '../types/descriptionTypes'

/**
 * Utility class for connecting and rendering description elements.
 * It manages description visibility states, slots, dynamic translations, and loading skeletons.
 *
 * Утилитарный класс для подключения и рендеринга элементов описания.
 * Управляет состояниями видимости описания, слотами, динамическими переводами и скелетонами загрузки.
 */
export class DescriptionInclude {
  /** Default element identifier / Идентификатор элемента по умолчанию */
  protected readonly elementIdDefault = getElementId()

  /**
   * Constructor for initializing DescriptionInclude properties.
   *
   * Конструктор для инициализации свойств DescriptionInclude.
   * @param props input properties / входные свойства
   * @param className base class name / название базового класса
   * @param slots slots dictionary / объект слотов
   * @param skeleton optional loading skeleton include / необязательный скелетон загрузки
   * @param tag HTML tag for wrapping element / HTML-тег для оборачивающего элемента
   */
  constructor(
    protected readonly props: RefOrNormalOrFunction<DescriptionProps>,
    protected readonly className: string,
    protected readonly slots?: DescriptionSlots,
    protected readonly skeleton?: SkeletonInclude,
    protected readonly tag: RefOrNormal<string> = 'div'
  ) {
  }

  /**
   * Check for the presence of a description.
   *
   * Проверка наличия описания.
   * @returns checking result / результат проверки
   */
  get is(): boolean {
    return Boolean(this.getProps().description || this.slots?.description)
  }

  /**
   * Unique identifier for the description element.
   *
   * Уникальный идентификатор для элемента описания.
   * @returns unique identifier / уникальный идентификатор
   */
  get id(): string {
    return this.getProps()?.descriptionId || this.elementIdDefault
  }

  /**
   * Renders the description element with children and properties.
   *
   * Рендерит элемент описания с дочерними элементами и свойствами.
   * @param childrenExtra additional children elements / дополнительные дочерние элементы
   * @param props additional HTML properties / дополнительные HTML-свойства
   * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
   */
  render(
    childrenExtra?: any[],
    props: Record<string, any> = {}
  ): VNode[] {
    const children: any[] = []
    const description = this.getProps().description

    if (isFilled(description)) {
      children.push(description)
    }

    if (this.slots?.description) {
      children.push(this.slots.description?.({}))
    }

    if (childrenExtra) {
      children.push(...childrenExtra)
    }

    if (children.length > 0) {
      return [
        render(
          getRef(this.tag),
          toBinds(
            {
              id: this.id,
              class: {
                [`${this.className}__description`]: true,
                ...this.skeleton?.classes
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
  protected getProps(): DescriptionProps {
    return executeFunctionRef(this.props)
  }
}
