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
import { DesignConstructorBasicAbstract } from '@dxtmisha/functional-basic'

import { DesignComponents } from './DesignComponents'

import type {
  ConstrClasses,
  ConstrComponent,
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
> extends DesignConstructorBasicAbstract<
    COMP,
    EMITS,
    EXPOSE,
    SLOTS,
    CLASSES,
    P
  > {
  /** Root DOM element reference / Реактивная ссылка на корневой DOM-элемент */
  protected readonly element = ref<E | undefined>()
  /** Reactive references to component props / Реактивные ссылки на свойства компонента */
  protected readonly refs: ToRefs<P>

  /** Connected design subcomponents / Подключенные подкомпоненты дизайна */
  protected readonly components: DesignComponents<COMP, P>

  /** Final computed list of classes / Итоговый вычисляемый список классов */
  protected readonly classes?: ComputedRef<CLASSES>
  /** Computed classes defined by constructor / Вычисляемые классы, определённые конструктором */
  protected classesSub?: ComputedRef<Partial<CLASSES>>

  /** Final computed list of styles / Итоговый вычисляемый список стилей */
  protected readonly styles?: ComputedRef<ConstrStyles>
  /** Computed styles defined by constructor / Вычисляемые стили, определённые конструктором */
  protected stylesSub?: ComputedRef<ConstrStyles>

  /**
   * Constructor
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   */
  protected constructor(
    name: string,
    props: Readonly<P>,
    protected readonly options?: ConstrOptions<COMP, EMITS, P>
  ) {
    super(name, props, options)

    this.refs = this.props ? toRefs(this.props) : {} as ToRefs<P>
    this.components = new DesignComponents(options?.components, options?.compMod)

    this.classes = computed(() => this.updateClasses())
    this.styles = computed(() => this.updateStyles())

    this.attrs = useAttrs()
    this.slots = useSlots() as SLOTS
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
