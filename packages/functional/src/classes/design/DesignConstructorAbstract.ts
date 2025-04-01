import {
  computed,
  type ComputedRef,
  ref,
  toRefs,
  type ToRefs,
  useAttrs,
  useSlots,
  type VNode
} from 'vue'

import { forEach } from '../../functions/forEach'
import { isObject } from '../../functions/isObject'
import { isObjectNotArray } from '../../functions/isObjectNotArray'
import { toArray } from '../../functions/toArray'
import { toCamelCase } from '../../functions/toCamelCase'

import { DesignComponents } from './DesignComponents'

import type {
  ConstrClass,
  ConstrClasses,
  ConstrClassObject,
  ConstrComponent,
  ConstrEmit,
  ConstrItem,
  ConstrOptions,
  ConstrStyles
} from '../../types/constructorTypes'

/**
 * Class for collecting all functional components.
 *
 * Класс для сбора всех функциональных компонентов.
 */
export abstract class DesignConstructorAbstract<
  E extends Element,
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  EXPOSE extends ConstrItem,
  SLOTS extends ConstrItem,
  CLASSES extends ConstrClasses,
  P extends ConstrItem
> {
  protected readonly name: string[]
  protected readonly element = ref<E | undefined>()
  protected readonly refs: ToRefs<P>

  protected readonly components: DesignComponents<COMP, P>
  protected readonly emits?: ConstrEmit<EMITS>

  protected readonly classes?: ComputedRef<ConstrClasses>
  protected classesSub?: ComputedRef<Partial<CLASSES>>

  protected readonly styles?: ComputedRef<ConstrStyles>
  protected stylesSub?: ComputedRef<ConstrStyles>

  protected attrs?: ConstrItem
  protected slots?: SLOTS

  protected dataExpose?: EXPOSE

  /**
   * Constructor
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   */
  protected constructor(
    name: string,
    protected readonly props: Readonly<P>,
    protected readonly options?: ConstrOptions<COMP, EMITS, P>
  ) {
    this.name = this.initName(name)
    this.refs = this.props ? toRefs(this.props) : {} as ToRefs<P>

    this.components = new DesignComponents(options?.components, options?.compMod)

    this.emits = options?.emits
    this.classes = computed(() => this.updateClasses())
    this.styles = computed(() => this.updateStyles())

    this.attrs = useAttrs()
    this.slots = useSlots() as SLOTS
  }

  protected init(): this {
    this.classesSub = computed(() => this.initClasses())
    this.stylesSub = computed(() => this.initStyles())
    this.dataExpose = this.initExpose()

    return this
  }

  /**
   * Getting the class name.
   *
   * Получение названия класса.
   */
  getName(): string {
    return this.name.join('-')
  }

  /**
   * Getting the class name.
   *
   * Получение названия дизайна.
   */
  getDesign(): string {
    return this.name[0]
  }

  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getSubClass(name: string | string[]): string {
    return `${this.getName()}__${toArray(name).join('__')}`
  }

  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStatusClass(name: string | string[]): string {
    return `${this.getName()}--${toArray(name).join('--')}`
  }

  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels/ список названий классов по уровням
   */
  getStyle(name: string | string[]): string {
    return `--${this.getName()}-sys-${toArray(name).join('-')}`
  }

  /**
   * Getting additional parameters.
   *
   * Получение дополнительных параметров.
   */
  getAttrs(): ConstrItem {
    const attrs: ConstrItem = { ...this.attrs ?? {} }

    if ('class' in attrs) {
      delete attrs.class
    }

    if ('style' in attrs) {
      delete attrs.style
    }

    return attrs
  }

  /**
   * List of available external variables.
   *
   * Список доступных переменных извне.
   */
  expose(): EXPOSE {
    return this.dataExpose ?? {} as EXPOSE
  }

  /**
   * The rendering method for the setup method.
   *
   * Метод рендеринга для метода настройки.
   */
  render(): () => VNode | (VNode | any)[] | undefined {
    return () => {
      if (import.meta.env.DEV) {
        // console.info(`Render: ${this.getName()}`)
      }

      return this.initRender()
    }
  }

  /**
   * Initialization of all the necessary properties for work
   *
   * Инициализация всех необходимых свойств для работы.
   */
  protected abstract initExpose(): EXPOSE

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   */
  protected abstract initClasses(): Partial<CLASSES>

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  protected abstract initStyles(): ConstrStyles

  /**
   * A method for rendering.
   *
   * Метод для рендеринга.
   */
  protected abstract initRender(): VNode | (VNode | any)[] | undefined

  /**
   * Initializes the slot.
   *
   * Инициализирует слот.
   * @param name slot name/ название слота
   * @param children if you pass this element, the slot will be added to it/
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot/ свойство для слота
   */
  protected initSlot<K extends keyof SLOTS>(
    name: K,
    children?: any[],
    props: ConstrItem = {}
  ): VNode | undefined {
    if (
      this.slots
      && this.slots?.[name]
      && typeof this.slots[name] === 'function'
    ) {
      const slot = (this.slots[name] as ((props?: ConstrItem) => VNode))(props)

      if (children) {
        children.push(slot)
      }

      return slot
    }

    return undefined
  }

  /**
   * Transformation of the class value into an object.
   *
   * Преобразование значения класса в объект.
   * @param classes list of classes for transformation/ список классов для преобразования
   */
  protected toClass(classes?: ConstrClass): ConstrClassObject {
    if (isObjectNotArray(classes)) {
      return classes
    }

    if (Array.isArray(classes)) {
      const name = classes
        .filter(item => typeof item === 'string' && item.trim() !== '')
        .join(' ')

      return { [name]: true }
    }

    if (typeof classes === 'string') {
      return { [classes]: true }
    }

    return {}
  }

  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes/ список классов
   */
  protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T {
    if (isObject(classes)) {
      const data: ConstrItem = {}

      forEach(classes, (value, name: string) => {
        if (name.match(/\?\?/)) {
          data[name.replace(/\?\?/, this.getName())] = value
        } else if (name.match(/\?/)) {
          data[name.replace(/\?/, this.name[0])] = value
        } else {
          data[name] = value
        }
      })

      return data as T
    }

    return {} as T
  }

  /**
   * Getting component names as an array.
   *
   * Получение названий компонентов в виде массива.
   * @param name component name for transformation/ название компонента для преобразования
   */
  private initName(name: string): string[] {
    return forEach(name.split('.', 2), item => toCamelCase(item))
  }

  /**
   * Updating data about the class.
   *
   * Обновление данных об классе.
   */
  private updateClasses(): CLASSES {
    const classes = this.classesSub?.value
    const classesProps = this.options?.classes?.value

    if (
      classes
      && classesProps
    ) {
      return {
        ...classes,
        ...classesProps,
        main: {
          ...this.toClass(classes?.main),
          ...this.toClass(classesProps?.main),
          ...this.toClass(this.attrs?.class)
        }
      } as CLASSES
    }

    return (
      classesProps
      ?? {
        main: {}
      }
    ) as CLASSES
  }

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   */
  private updateStyles(): ConstrStyles {
    const styles = this.stylesSub?.value
    const stylesProps = this.options?.styles?.value

    if (
      styles
      && stylesProps
    ) {
      return {
        ...styles,
        ...stylesProps
      }
    }

    return stylesProps ?? {}
  }
}
