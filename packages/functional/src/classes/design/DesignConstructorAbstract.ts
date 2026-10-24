import {
  computed,
  type ComputedRef,
  normalizeClass,
  normalizeStyle,
  onBeforeUpdate,
  ref,
  renderSlot,
  shallowRef,
  type Slots,
  useAttrs,
  useSlots,
  type VNode
} from 'vue'
import { isDifferent, isFilled } from '@dxtmisha/functional-basic'

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
 * Abstract Vue rendering constructor combining naming, a root element ref, optional connected components, attrs, slots, exposed data, and computed class/style composition. Instantiate a concrete subclass during component `setup()`.
 *
 * Абстрактный конструктор рендеринга Vue: объединяет именование, ссылку на корневой элемент, подключённые компоненты, атрибуты, слоты, экспортируемые данные и вычисляемые классы/стили. Создавайте конкретный подкласс в `setup()` компонента.
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
   * Initializes DesignConstructorAbstract with the supplied configuration.
   *
   * Инициализирует DesignConstructorAbstract с переданными настройками.
   * @param name Component, dependency, slot or route name according to the method. / Имя компонента, зависимости, слота или маршрута согласно методу.
   * @param props Input properties. / Входные свойства.
   * @param options Configuration options. / Параметры настройки.
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
   * Returns a new attribute object without `class` and `style`.
   *
   * Возвращает новый объект атрибутов без `class` и `style`.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getAttrs(): ConstrItem {
    const { class: _class, style: _style, ...attrs } = this.attrs ?? {}

    return attrs
  }

  /**
   * Returns a sub-element key and its current computed class entry.
   *
   * Возвращает ключ подэлемента и его текущее вычисляемое значение класса.
   * @param name Sub-element class-map key. / Ключ подэлемента в карте классов.
   * @returns Object containing the key and computed class entry. / Объект с ключом и вычисляемым значением класса.
   */
  getKeyClass<K extends keyof CLASSES>(name: K & string) {
    return {
      key: name,
      class: (this.classes?.value as ConstrItem | undefined)?.[name]
    }
  }

  /**
   * Returns this constructor’s `DesignName` instance.
   *
   * Возвращает экземпляр `DesignName` этого конструктора.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  getNaming(): DesignName {
    return this.naming
  }

  /**
   * Combines `initExpose()` data with the root ref under `elementHtml`.
   *
   * Объединяет данные `initExpose()` со ссылкой на корень `elementHtml`.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  expose(): ConstrExpose<E, EXPOSE> {
    return {
      ...this.initExpose(),
      elementHtml: this.element
    } as ConstrExpose<E, EXPOSE>
  }

  /**
   * Registers slot-change tracking and returns a function delegating rendering to `initRender()`.
   *
   * Регистрирует отслеживание замены слотов и возвращает функцию, делегирующую рендеринг `initRender()`.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  render(): () => VNode | VNode[] | undefined {
    const slotsState = shallowRef<Record<string, unknown>>({
      ...this.slots
    })

    onBeforeUpdate(() => {
      if (isDifferent(this.slots ?? {}, slotsState.value)) {
        slotsState.value = { ...this.slots }
      }
    })

    return () => {
      // Track slot changes in the render effect / Отслеживаем изменения слотов в эффекте рендеринга
      void slotsState.value
      return this.initRender()
    }
  }

  /**
   * Implement in a subclass to return the externally exposed data.
   *
   * Реализуйте в подклассе для получения внешнего API.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  protected abstract initExpose(): EXPOSE

  /**
   * Implement in a subclass to return the logic class map before merging.
   *
   * Реализуйте в подклассе для получения карты классов логики перед объединением.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  protected abstract initClasses(): Partial<CLASSES>

  /**
   * Implement in a subclass to return styles before options and attrs are applied.
   *
   * Реализуйте в подклассе для получения стилей до применения опций и атрибутов.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  protected abstract initStyles(): ConstrStyles

  /**
   * Implement the VNode tree. The result may be one node, an array, or `undefined`.
   *
   * Реализуйте дерево VNode. Результат — один узел, массив или `undefined`.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
   */
  protected abstract initRender(): VNode | VNode[] | undefined

  /**
   * Renders a named slot as a keyed fragment and optionally appends that fragment to `children`. Missing slots return `undefined` without modifying the array.
   *
   * Рендерит именованный слот как фрагмент с ключом и при необходимости добавляет фрагмент в `children`. Отсутствующий слот возвращает `undefined`, не меняя массив.
   * @param name Named slot key. / Ключ именованного слота.
   * @param children Child content or an optional VNode accumulator. / Дочернее содержимое либо необязательный массив VNode.
   * @param props Scoped-slot properties; defaults to an empty object. / Свойства scoped-слота; по умолчанию пустой объект.
   * @returns The requested value or object as declared in the signature. / Запрошенное значение либо объект согласно сигнатуре.
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
      const slot = renderSlot(this.slots as Slots, String(name), props)

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

    return {
      ...classes,
      ...classesProps,
      main: normalizeClass([
        classes?.main,
        classesProps?.main,
        this.attrs?.class
      ])
    } as CLASSES
  }

  /**
   * Merges constructor, option, and external attribute styles.
   *
   * Объединяет стили конструктора, опций и внешних атрибутов.
   * @returns updated styles / обновленные стили
   */
  private updateStyles(): ConstrStyles {
    return normalizeStyle([
      this.initStyles(),
      this.options?.styles?.value,
      this.attrs?.style
    ]) as ConstrStyles
  }
}
