import {
  type CSSProperties,
  type ReactNode,
  type RefObject,
  useRef
} from 'react'
import {
  DesignConstructorBasicAbstract,
  isFunction,
  isNull
} from '@dxtmisha/functional-basic'

import { DesignCompReact } from './DesignCompReact'
import { toClassString } from '../../functions/toClassString'
import { toCssProperties } from '../../functions/toCssProperties'

import type {
  ConstrClasses,
  ConstrComponentReact,
  ConstrExposeReact,
  ConstrItem,
  ConstrOptionsReact,
  ConstrSlotReact,
  ConstrStyles
} from '../../types/constructorTypes'

/**
 * Base class for collecting all functional parts of a design component in React.
 * It resolves the component name, root element reference, connected components, classes, styles,
 * attributes, slots and exposed data, and delegates the element tree construction to `initRender`.
 *
 * Unlike Vue, where `setup` runs once, a React function component runs on every render.
 * Therefore, the instance is created on every render at the top level of the component
 * (unconditionally, so the order of hooks is preserved), and all values are calculated
 * for the current render without reactive wrappers.
 *
 * Usage: `const design = new ButtonDesign('d1.button', props, options)`,
 * `useImperativeHandle(ref, () => design.expose())`, `return design.render()`.
 *
 * Базовый класс для сбора всех функциональных частей компонента дизайна в React.
 * Определяет название компонента, ссылку на корневой элемент, подключенные компоненты, классы, стили,
 * атрибуты, слоты и экспортируемые данные, а построение дерева элементов делегирует в `initRender`.
 *
 * В отличие от Vue, где `setup` выполняется один раз, функциональный компонент React выполняется
 * на каждом рендере. Поэтому экземпляр создаётся на каждом рендере на верхнем уровне компонента
 * (безусловно, чтобы сохранялся порядок хуков), а все значения вычисляются для текущего рендера
 * без реактивных обёрток.
 *
 * Использование: `const design = new ButtonDesign('d1.button', props, options)`,
 * `useImperativeHandle(ref, () => design.expose())`, `return design.render()`.
 */
export abstract class DesignConstructorReactAbstract<
  E extends Element,
  COMP extends ConstrComponentReact,
  EMITS extends ConstrItem,
  EXPOSE extends ConstrItem,
  SLOTS extends ConstrItem,
  CLASSES extends ConstrClasses,
  P extends ConstrItem
> extends DesignConstructorBasicAbstract<
    COMP,
    EMITS,
    EXPOSE,
    SLOTS,
    CLASSES,
    P
  > {
  /** Root DOM element reference / Ссылка на корневой DOM-элемент */
  protected readonly element: RefObject<E | null> = useRef<E | null>(null)

  /** Connected components / Подключенные компоненты */
  protected readonly components: DesignCompReact<COMP, P>

  /** Final list of classes / Итоговый список классов */
  protected classes?: CLASSES
  /** Classes defined by the constructor / Классы, определённые конструктором */
  protected classesSub?: Partial<CLASSES>

  /** Final list of styles / Итоговый список стилей */
  protected styles?: CSSProperties
  /** Styles defined by the constructor / Стили, определённые конструктором */
  protected stylesSub?: ConstrStyles

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   */
  protected constructor(
    name: string,
    props: Readonly<P>,
    protected readonly options?: ConstrOptionsReact<COMP, EMITS, P>
  ) {
    super(name, props, {
      emits: options?.emits,
      attrs: options?.attrs,
      slots: options?.slots as SLOTS | undefined
    })

    this.components = new DesignCompReact(options?.components, options?.compMod)
  }

  /**
   * Getting key and className attributes for a sub-element.
   *
   * Получение атрибутов key и className для подэлемента.
   * @param name element class/key name / имя класса/ключа элемента
   * @returns key and className attributes / атрибуты key и className
   */
  getKeyClass<K extends keyof CLASSES>(name: K & string): { key: string, className: string } {
    return {
      key: name,
      className: toClassString(this.classes?.[name])
    }
  }

  /**
   * List of available external variables.
   * In React, it is passed to `useImperativeHandle`.
   *
   * Список доступных переменных извне.
   * В React передаётся в `useImperativeHandle`.
   * @returns exposed data / экспортируемые данные
   */
  expose(): ConstrExposeReact<E, EXPOSE> {
    return {
      ...(this.dataExpose ?? {}),
      elementHtml: this.element
    } as ConstrExposeReact<E, EXPOSE>
  }

  /**
   * The rendering method, the result is returned from the function component.
   *
   * Метод рендеринга, результат возвращается из функционального компонента.
   * @returns React node / React-узел
   */
  render(): ReactNode {
    return this.initRender()
  }

  /**
   * Final initialization: calculates classes, styles and exposed data.
   * Must be called as the last statement in the constructor of the child class.
   *
   * Финальная инициализация: вычисляет классы, стили и экспортируемые данные.
   * Должна вызываться последней инструкцией в конструкторе дочернего класса.
   * @returns current instance / текущий экземпляр
   */
  protected init(): this {
    this.classesSub = this.initClasses()
    this.stylesSub = this.initStyles()

    this.classes = this.updateClasses()
    this.styles = this.updateStyles()

    this.dataExpose = this.initExpose()

    return this
  }

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   * @returns React node / React-узел
   */
  protected abstract initRender(): ReactNode

  /**
   * Initializes the slot. A slot can be a ready React node or a render function.
   * For the `default` slot, `props.children` is used if the slot is not passed in the options.
   *
   * Инициализирует слот. Слот может быть готовым React-узлом или функцией рендеринга.
   * Для слота `default` используется `props.children`, если слот не передан в опциях.
   * @param name slot name / название слота
   * @param children if you pass this element, the slot will be added to it /
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot / свойство для слота
   * @returns slot content or undefined / содержимое слота или undefined
   */
  protected initSlot<K extends keyof SLOTS>(
    name: K & string,
    children?: ReactNode[],
    props: ConstrItem = {}
  ): ReactNode | undefined {
    const slotItem: ConstrSlotReact | undefined = this.slots?.[name]
    const slot: ConstrSlotReact | undefined = isNull(slotItem) && name === 'default'
      ? this.props.children
      : slotItem

    if (!isNull(slot)) {
      const node = isFunction(slot) ? slot(props) : slot

      if (children) {
        children.push(node)
      }

      return node
    }

    return undefined
  }

  /**
   * Updating data about the classes.
   * In React there is no automatic attribute fallthrough, so `className` from the attributes
   * is always merged into the main class.
   *
   * Обновление данных о классах.
   * В React нет автоматической передачи атрибутов, поэтому `className` из атрибутов
   * всегда объединяется с основным классом.
   * @returns final list of classes / итоговый список классов
   */
  private updateClasses(): CLASSES {
    const classes = this.classesSub
    const classesProps = this.options?.classes

    return {
      ...classes,
      ...classesProps,
      main: {
        ...this.toClass(classes?.main),
        ...this.toClass(classesProps?.main),
        ...this.toClass(this.attrs?.className)
      }
    } as CLASSES
  }

  /**
   * Updating data about the styles.
   * Styles of the constructor, the options and `style` from the attributes are merged in order.
   *
   * Обновление данных о стилях.
   * Стили конструктора, опций и `style` из атрибутов объединяются по порядку.
   * @returns final list of styles / итоговый список стилей
   */
  private updateStyles(): CSSProperties {
    return toCssProperties([
      this.stylesSub ?? {},
      this.options?.styles ?? {},
      this.attrs?.style ?? {}
    ])
  }
}
