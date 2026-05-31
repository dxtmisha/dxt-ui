import { type Ref, type VNode } from 'vue'
import {
  type ConstrClass,
  executeFunctionRef,
  getElementId,
  isFilled,
  type RefOrNormalOrFunction,
  render,
  toBinds
} from '@dxtmisha/functional'

import { SkeletonInclude } from '../constructors/Skeleton'

import type { LabelAlternativeSlots, LabelProps, LabelSlots } from '../types/labelTypes'

/**
 * Utility class for connecting and rendering label elements.
 * It manages label states, slots, dynamic translations, and loading skeletons.
 *
 * Утилитарный класс для подключения и рендеринга элементов меток.
 * Управляет состояниями меток, слотами, динамическими переводами и скелетонами загрузки.
 */
export class LabelInclude {
  /** Default element identifier / Идентификатор элемента по умолчанию */
  protected readonly elementIdDefault = getElementId()

  /**
   * Constructor for initializing LabelInclude properties.
   *
   * Конструктор для инициализации свойств LabelInclude.
   * @param props input properties / входные свойства
   * @param className base class name / название базового класса
   * @param classesExtra additional CSS classes / дополнительные CSS-классы
   * @param slots slots dictionary / объект слотов
   * @param elementsExtra callback for extra VNode elements / коллбэк для дополнительных VNode-элементов
   * @param labelReplacing reactive ref for replacing the label text / реактивная ссылка для замены текста метки
   * @param alternativeSlots flag to use alternative slot name / флаг использования альтернативного имени слота
   * @param skeleton optional loading skeleton include / необязательный скелетон загрузки
   * @param tag HTML tag for wrapping element / HTML-тег для оборачивающего элемента
   */
  constructor(
    protected readonly props: RefOrNormalOrFunction<LabelProps>,
    protected readonly className: string,
    protected readonly classesExtra?: ConstrClass,
    protected readonly slots?: LabelSlots | LabelAlternativeSlots,
    protected readonly elementsExtra?: () => VNode[],
    protected readonly labelReplacing?: Ref<string | number | undefined>,
    protected readonly alternativeSlots?: boolean,
    protected readonly skeleton?: SkeletonInclude,
    protected readonly tag?: RefOrNormalOrFunction<string | undefined>
  ) {
  }

  /**
   * Label presence check.
   *
   * Проверка наличия метки.
   * @returns checking result / результат проверки
   */
  get is(): boolean {
    if (
      this.getProps().label
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
  }

  /**
   * Identifier for the element.
   *
   * Идентификатор для элемента.
   * @returns unique identifier / уникальный идентификатор
   */
  get id(): string {
    return this.getProps().labelId || this.elementIdDefault
  }

  /**
   * Renders the label element with children and properties.
   *
   * Рендерит элемент метки с дочерними элементами и свойствами.
   * @param childrenExtra additional children elements / дополнительные дочерние элементы
   * @param props additional HTML properties / дополнительные HTML-свойства
   * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
   */
  render(
    childrenExtra?: any[],
    props: Record<string, any> = {}
  ): VNode[] {
    const elements: any[] = []

    if (this.is) {
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
            executeFunctionRef(this.tag) ?? 'span',
            toBinds(
              {
                id: this.id,
                class: this.getClassName()
              },
              props
            ),
            children,
            'label'
          )
        )
      }
    }

    return elements
  }

  /**
   * Returns properties resolving functions if needed.
   *
   * Возвращает свойства, разрешая функции при необходимости.
   * @returns resolved label properties / разрешенные свойства метки
   */
  protected getProps(): LabelProps {
    return executeFunctionRef(this.props)
  }

  /**
   * Resolves the list of class names for the label element.
   *
   * Разрешает список имен классов для элемента метки.
   * @returns resolved CSS classes / разрешенные CSS-классы
   */
  protected getClassName(): ConstrClass {
    const classes: ConstrClass = [`${this.className}__label`]

    if (this.classesExtra) {
      classes.push(this.classesExtra)
    }

    if (this.skeleton) {
      classes.push(this.skeleton.classes)
    }

    return classes
  }

  /**
   * Resolves the static label text content.
   *
   * Разрешает статический текст метки.
   * @returns array containing the text / массив, содержащий текст
   */
  protected initLabel(): any[] {
    const label = this.getProps().label

    if (
      !this.labelReplacing?.value
      && isFilled(label)
    ) {
      return [label]
    }

    return []
  }

  /**
   * Resolves the dynamic highlighted or replaced label text.
   *
   * Разрешает динамический подсвеченный или замененный текст метки.
   * @returns array with virtual span node / массив с виртуальным узлом span
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
   * Resolves the slot content for the label element.
   *
   * Разрешает содержимое слота для элемента метки.
   * @returns array with resolved slot content / массив с разрешенным содержимым слота
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
