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
import {
  forEach,
  isObject,
  isObjectNotArray,
  toArray,
  toCamelCase
} from '@dxtmisha/functional-basic'

import { DesignComponents } from './DesignComponents'

import type {
  ConstrClass,
  ConstrClasses,
  ConstrClassObject,
  ConstrComponent,
  ConstrEmit,
  ConstrExpose,
  ConstrItem,
  ConstrOptions,
  ConstrStyles
} from '../../types/constructorTypes'

/**
 * Base class for collecting all functional components and managing reactive state in Vue.
 * It integrates connected subcomponents, reactive refs, computed classes, styles,
 * slots, attributes, and external expose data, delegating DOM rendering to `initRender`.
 *
 * Базовый класс для сбора всех функциональных компонентов и управления реактивным состоянием во Vue.
 * Объединяет подключенные подкомпоненты, реактивные ссылки, вычисляемые классы, стили,
 * слоты, атрибуты и экспортируемые данные, делегируя построение DOM-дерева методу `initRender`.
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
  /** Component name split by levels / Название компонента, разбитое по уровням */
  protected readonly name: string[]
  /** Root DOM element reference / Реактивная ссылка на корневой DOM-элемент */
  protected readonly element = ref<E | undefined>()
  /** Reactive references to component props / Реактивные ссылки на свойства компонента */
  protected readonly refs: ToRefs<P>

  /** Connected design subcomponents / Подключенные подкомпоненты дизайна */
  protected readonly components: DesignComponents<COMP, P>
  /** Emit handlers / Обработчики emit */
  protected readonly emits?: ConstrEmit<EMITS>

  /** Final computed list of classes / Итоговый вычисляемый список классов */
  protected readonly classes?: ComputedRef<CLASSES>
  /** Computed classes defined by constructor / Вычисляемые классы, определённые конструктором */
  protected classesSub?: ComputedRef<Partial<CLASSES>>

  /** Final computed list of styles / Итоговый вычисляемый список стилей */
  protected readonly styles?: ComputedRef<ConstrStyles>
  /** Computed styles defined by constructor / Вычисляемые стили, определённые конструктором */
  protected stylesSub?: ComputedRef<ConstrStyles>

  /** Additional attributes / Дополнительные атрибуты */
  protected attrs?: ConstrItem
  /** Named slots / Именованные слоты */
  protected slots?: SLOTS

  /** Exposed data / Экспортируемые данные */
  protected dataExpose?: EXPOSE

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
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

  /**
   * Getting the class name.
   *
   * Получение названия класса.
   * @returns class name / название класса
   */
  getName(): string {
    return this.name.join('-')
  }

  /**
   * Getting the design name.
   *
   * Получение названия дизайна.
   * @returns design name / название дизайна
   */
  getDesign(): string {
    return String(this.name[0])
  }

  /**
   * Getting the class name of a sub-element.
   *
   * Получение названия класса подэлемента.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns sub-element class name / название класса подэлемента
   */
  getSubClass(name: string | string[]): string {
    return `${this.getName()}__${toArray(name).join('__')}`
  }

  /**
   * Getting the class name for the status.
   *
   * Получение названия класса для статуса.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns status class name / название класса статуса
   */
  getStatusClass(name: string | string[]): string {
    return `${this.getName()}--${toArray(name).join('--')}`
  }

  /**
   * Getting the property name for the style.
   *
   * Получение названия свойства для стиля.
   * @param name list of class names by levels / список названий классов по уровням
   * @returns CSS custom property name / название CSS-переменной
   */
  getStyle(name: string | string[]): string {
    return `--${this.getName()}-sys-${toArray(name).join('-')}`
  }

  /**
   * Getting additional parameters.
   *
   * Получение дополнительных параметров.
   * @returns additional attributes / дополнительные атрибуты
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
   * Getting key and class attributes for a sub-element.
   *
   * Получение атрибутов key и class для подэлемента.
   * @param name element class/key name / имя класса/ключа элемента
   * @returns key and class attributes / атрибуты key и class
   */
  getKeyClass<K extends keyof CLASSES>(name: K & string) {
    return {
      key: name,
      class: (this.classes?.value as ConstrItem | undefined)?.[name]
    }
  }

  /**
   * List of available external variables.
   *
   * Список доступных переменных извне.
   * @returns exposed external variables / список доступных переменных извне
   */
  expose(): ConstrExpose<E, EXPOSE> {
    return {
      ...(this.dataExpose ?? {}),
      elementHtml: this.element
    } as ConstrExpose<E, EXPOSE>
  }

  /**
   * The rendering method for the setup method.
   *
   * Метод рендеринга для метода настройки.
   * @returns render function / функция рендеринга
   */
  render(): () => VNode | (VNode | any)[] | undefined {
    return () => this.initRender()
  }

  /**
   * Final initialization of computed classes, styles, and exposed data.
   * Must be called as the last statement in the constructor of the child class.
   *
   * Финальная инициализация вычисляемых классов, стилей и экспортируемых данных.
   * Должна вызываться последней инструкцией в конструкторе дочернего класса.
   * @returns current instance / текущий экземпляр
   */
  protected init(): this {
    this.classesSub = computed(() => this.initClasses())
    this.stylesSub = computed(() => this.initStyles())
    this.dataExpose = this.initExpose()

    return this
  }

  /**
   * Initialization of all the necessary properties for work.
   *
   * Инициализация всех необходимых свойств для работы.
   * @returns exposed data / экспортируемые данные
   */
  protected abstract initExpose(): EXPOSE

  /**
   * Improvement of the obtained list of classes.
   *
   * Доработка полученного списка классов.
   * @returns partial list of classes / частичный список классов
   */
  protected abstract initClasses(): Partial<CLASSES>

  /**
   * Refinement of the received list of styles.
   *
   * Доработка полученного списка стилей.
   * @returns styles object / объект стилей
   */
  protected abstract initStyles(): ConstrStyles

  /**
   * Rendering method returning VNode tree.
   *
   * Метод рендеринга, возвращающий дерево VNode.
   * @returns rendered element / отрендеренный элемент
   */
  protected abstract initRender(): VNode | (VNode | any)[] | undefined

  /**
   * Initializes the slot.
   *
   * Инициализирует слот.
   * @param name slot name / название слота
   * @param children if you pass this element, the slot will be added to it /
   * если передать этот элемент, то слот добавится в него
   * @param props property for the slot / свойство для слота
   * @returns rendered slot / отрендеренный слот
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
   * @param classes list of classes for transformation / список классов для преобразования
   * @returns object of classes / объект классов
   */
  protected toClass(classes?: ConstrClass): ConstrClassObject {
    if (isObjectNotArray(classes)) {
      return classes
    }

    if (Array.isArray(classes)) {
      const name = classes
        .filter(item => typeof item === 'string' && item.trim() !== '')
        .join(' ')

      return name === '' ? {} : { [name]: true }
    }

    if (typeof classes === 'string') {
      const name = classes.trim()

      return name === '' ? {} : { [name]: true }
    }

    return {}
  }

  /**
   * Converts the class name to standard for the current component.
   *
   * Преобразовывает название класса в стандартное для текущего компонента.
   * @param classes list of classes / список классов
   * @returns object with converted class names / объект с преобразованными названиями классов
   */
  protected toClassName<T extends ConstrItem>(classes?: ConstrItem): T {
    if (isObject(classes)) {
      const data: ConstrItem = {}

      forEach(classes, (value, name: string) => {
        if (name.match(/\?\?/)) {
          data[name.replace(/\?\?/, this.getName())] = value
        } else if (name.match(/\?/)) {
          data[name.replace(/\?/, this.getDesign())] = value
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
   * @param name component name for transformation / название компонента для преобразования
   * @returns component names by levels / названия компонента по уровням
   */
  private initName(name: string): string[] {
    return forEach(name.split('.', 2), item => toCamelCase(item))
  }

  /**
   * Updating data about classes by merging constructor, options, and attribute classes.
   *
   * Обновление данных о классах путем объединения классов конструктора, опций и атрибутов.
   * @returns updated classes / обновленные классы
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
      ?? classes
      ?? {
        main: {}
      }
    ) as CLASSES
  }

  /**
   * Refinement of the received list of styles by merging constructor and option styles.
   *
   * Доработка полученного списка стилей путем объединения стилей конструктора и опций.
   * @returns updated styles / обновленные стили
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

    return stylesProps ?? styles ?? {}
  }
}
