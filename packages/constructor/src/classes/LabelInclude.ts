import { computed, type Ref, type VNode } from 'vue'
import { type ConstrClass, isFilled, render } from '@dxt-ui/functional'

import type { LabelAlternativeSlots, LabelProps, LabelSlots } from '../types/labelTypes.ts'

/**
 * Use for adding text
 *
 * Использование для добавления текста
 */
export class LabelInclude {
  /**
   * Constructor
   * @param props input property/ входное свойство
   * @param className class name/ название класса
   * @param classesExtra additional classes/ дополнительные классы
   * @param slots object for working with slots/ объект для работы со слотами
   * @param elementsExtra additional elements/ дополнительные элементы
   * @param labelReplacing additional elements/ дополнительные элементы
   * @param alternativeSlots alternative slots/ альтернативные слоты
   */
  constructor(
    protected readonly props: Readonly<LabelProps>,
    protected readonly className: string,
    protected readonly classesExtra?: ConstrClass,
    protected readonly slots?: LabelSlots | LabelAlternativeSlots,
    protected readonly elementsExtra?: () => VNode[],
    protected readonly labelReplacing?: Ref<string | number | undefined>,
    protected readonly alternativeSlots?: boolean
  ) {
  }

  /** Label presence check/ Проверка наличия метки */
  readonly isLabel = computed<boolean>(() => {
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

    if (this.isLabel.value) {
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
            'span',
            { class: this.getClassName() },
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

    return classes
  }

  /**
   * Adds the label text if it exists
   *
   * Добавляет текст метки, если он есть
   */
  protected initLabel(): any[] {
    if (isFilled(this.props.label)) {
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
