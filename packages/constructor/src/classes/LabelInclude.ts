import { computed, type Ref, type VNode } from 'vue'
import { type ConstrClass, getElementId, getRef, isFilled, type RefOrNormal, render } from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { LabelAlternativeSlots, LabelExpose, LabelProps, LabelSlots } from '../types/labelTypes'

/**
 * Use for adding text
 *
 * Использование для добавления текста
 */
export class LabelInclude {
  /** Unique identifier/ Уникальный идентификатор */
  protected id = getElementId()

  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param labelReplacing additional elements/ дополнительные элементы
   * @param alternativeSlots alternative slots/ альтернативные слоты
   * @param skeleton optional skeleton for loading state/ необязательный скелетон для состояния загрузки
   * @param tag tag name/ имя тега
   */
  constructor(
    protected readonly props: Readonly<LabelProps>,
    protected readonly className: string,
    protected readonly classesExtra?: ConstrClass,
    protected readonly slots?: LabelSlots | LabelAlternativeSlots,
    protected readonly elementsExtra?: () => VNode[],
    protected readonly labelReplacing?: Ref<string | number | undefined>,
    protected readonly alternativeSlots?: boolean,
    protected readonly skeleton?: SkeletonInclude,
    protected readonly tag: RefOrNormal<string> = 'span'
  ) {
  }

  /** Label presence check/ Проверка наличия метки */
  readonly is = computed<boolean>(() => {
    if (
      this.props.label
      || this.labelReplacing?.value
    ) {
      return true
    }

    if (this.slots) {
      if (this.alternativeSlots) {
        return 'label' in this.slots
      }

      return 'default' in this.slots
    }

    return false
  })

  /** Identifier for the element/ Идентификатор для элемента */
  readonly idElement = computed<string | undefined>(() => {
    if (this.is.value) {
      return this.getId()
    }

    return undefined
  })

  /**
   * Expose helpers for Label state and actions.
   *
   * Вспомогательные методы expose для состояния и действий Label.
   */
  readonly expose: LabelExpose = {
    labelId: this.getId()
  }

  /**
   * Get the unique identifier.
   *
   * Получение уникального идентификатора.
   */
  getId(): string {
    return this.props?.labelId || this.id
  }

  /**
   * Render the label
   *
   * Рендер метки
   * @param childrenExtra additional children/ дополнительные дочерние элементы
   */
  render(
    childrenExtra?: any[]
  ): VNode[] {
    const elements: any[] = []

    if (this.is.value) {
      const children: any[] = [
        ...this.initLabel(),
        ...this.initLabelReplacing(),
        ...this.initSlot()
      ]

      if (this.elementsExtra) {
        children.push(...this.elementsExtra())
      }

      if (childrenExtra) {
        children.push(...childrenExtra)
      }

      if (children.length > 0) {
        elements.push(
          render(
            getRef(this.tag),
            {
              id: this.getId(),
              class: this.getClassName()
            },
            children,
            'label'
          )
        )
      }
    }

    return elements
  }

  /**
   * Get the class name for the label
   *
   * Получение имени класса для метки
   */
  protected getClassName(): ConstrClass {
    const classes: ConstrClass = [`${this.className}__label`]

    if (this.classesExtra) {
      classes.push(this.classesExtra)
    }

    if (this.skeleton) {
      classes.push(this.skeleton.classes.value)
    }

    return classes
  }

  /**
   * Adds the label text if it exists
   *
   * Добавляет текст метки, если он есть
   */
  protected initLabel(): any[] {
    if (
      !this.labelReplacing?.value
      && isFilled(this.props.label)
    ) {
      return [this.props.label]
    }

    return []
  }

  /**
   * Adds alternative label text if it exists
   *
   * Добавляет альтернативный текст метки, если он есть
   */
  protected initLabelReplacing(): any[] {
    if (isFilled(this.labelReplacing?.value)) {
      return [
        render(
          'span',
          { innerHTML: this.labelReplacing.value },
          undefined,
          'highlight'
        )
      ]
    }

    return []
  }

  /**
   * Adds a slot for the label if it exists
   *
   * Добавляет слот для метки, если он есть
   */
  protected initSlot(): any[] {
    if (this.slots) {
      if (this.alternativeSlots) {
        if ('label' in this.slots) {
          return [this.slots.label?.({})]
        }
      } else if ('default' in this.slots) {
        return [this.slots.default?.({})]
      }
    }

    return []
  }
}
