import {
  computed,
  type ComputedRef,
  ref,
  useAttrs,
  useSlots,
  type VNode
} from 'vue'
import { isFilled } from '@dxtmisha/functional-basic'

import { DesignComponents } from './DesignComponents'
import { DesignName } from './DesignName'

import type {
  ConstrClasses,
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
  /** Component naming helper / Помощник именования компонента */
  protected readonly naming: DesignName
  /** Root DOM element reference / Реактивная ссылка на корневой DOM-элемент */
  protected readonly element = ref<E | undefined>()

  /** Connected design subcomponents / Подключенные подкомпоненты дизайна */
  protected readonly components?: DesignComponents<COMP, P>
  /** Emit handlers / Обработчики emit */
  protected readonly emits?: ConstrEmit<EMITS>

  /** Final computed list of classes / Итоговый вычисляемый список классов */
  protected readonly classes?: ComputedRef<CLASSES>

  /** Final computed list of styles / Итоговый вычисляемый список стилей */
  protected readonly styles?: ComputedRef<ConstrStyles>

  /** Additional attributes / Дополнительные атрибуты */
  protected attrs?: ConstrItem
  /** Named slots / Именованные слоты */
  protected slots?: SLOTS

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
    this.naming = new DesignName(name)

    if (isFilled(options?.components)) {
      this.components = new DesignComponents(options.components, options.compMod)
    }

    this.emits = options?.emits
    this.classes = computed(() => this.updateClasses())
    this.styles = computed(() => this.updateStyles())

    this.attrs = useAttrs()
    this.slots = useSlots() as SLOTS
  }

  /**
   * Getting additional parameters.
   *
   * Получение дополнительных параметров.
   * @returns additional attributes / дополнительные атрибуты
   */
  getAttrs(): ConstrItem {
    const { class: _class, style: _style, ...attrs } = this.attrs ?? {}

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
   * Returns the component naming helper.
   *
   * Возвращает помощник именования компонента.
   * @returns current naming helper instance / текущий экземпляр помощника именования
   */
  getNaming(): DesignName {
    return this.naming
  }

  /**
   * List of available external variables.
   *
   * Список доступных переменных извне.
   * @returns exposed external variables / список доступных переменных извне
   */
  expose(): ConstrExpose<E, EXPOSE> {
    return {
      ...this.initExpose(),
      elementHtml: this.element
    } as ConstrExpose<E, EXPOSE>
  }

  /**
   * The rendering method for the setup method.
   *
   * Метод рендеринга для метода настройки.
   * @returns render function / функция рендеринга
   */
  render(): () => VNode | VNode[] | undefined {
    return () => this.initRender()
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
  protected abstract initRender(): VNode | VNode[] | undefined

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
    children?: VNode[],
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
    const classes = this.initClasses()
    const classesProps = this.options?.classes?.value

    if (
      classes
      && classesProps
    ) {
      return {
        ...classes,
        ...classesProps,
        main: [
          classes?.main,
          classesProps?.main,
          this.attrs?.class
        ]
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
    const styles = this.initStyles()
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
