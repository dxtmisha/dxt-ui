import { computed, ref, type VNode } from 'vue'
import {
  type ConstrBind,
  type DesignComponents,
  executeFunction,
  getRef,
  type RawSlots,
  toBinds
} from '@dxtmisha/functional'
import type { ComponentIncludeExposeItem, ComponentIncludeExtra, ComponentIncludeProps, ComponentIncludePropsAttrs } from '../types/componentInclude'

/**
 * ComponentInclude is an abstract base class designed to facilitate the programmatic
 * inclusion, rendering, and state management of sub-components within a main component.
 * It encapsulates common logic for binds, exposing API methods of children, and rendering.
 *
 * ComponentInclude — это абстрактный базовый класс, разработанный для упрощения программного
 * включения, рендеринга и управления состоянием субкомпонентов внутри основного компонента.
 * Он инкапсулирует общую логику для привязок (binds), экспорта API-методов дочерних элементов и рендеринга.
 */
export abstract class ComponentIncludeAbstract<
  Props extends Record<string, any>,
  PropsExtra extends Record<string, any>,
  ComponentExpose extends Record<string, any> = Record<string, any>,
  ComponentSlots extends Record<string, any> = Record<string, any>
> {
  /** Reference to the sub-component element / Ссылка на элемент субкомпонента */
  protected readonly element = ref<ConstrBind<ComponentExpose> | undefined>()
  /** List of methods to expose from the sub-component / Список методов для экспорта из субкомпонента */
  protected readonly exposeItems: ComponentIncludeExposeItem<any>[] | undefined

  /** Component sub-name or code identifier / Дополнительное имя компонента или идентификатор кода */
  protected abstract readonly name: string
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected abstract readonly propsAttrsName?: ComponentIncludePropsAttrs<Props> | string

  /**
   * Abstract constructor for initializing basic component inclusion properties.
   *
   * Абстрактный конструктор для инициализации базовых свойств включения компонента.
   * @param className base class name of the parent component / имя базового класса родительского компонента
   * @param props input properties / входные свойства
   * @param components design components registry / реестр дизайн-компонентов
   * @param extra additional properties or attributes / дополнительные свойства или атрибуты
   * @param index unique index key for rendering / уникальный ключ индекса для рендеринга
   */
  protected constructor(
    protected readonly className: string,
    protected readonly props: ComponentIncludeProps<Props>,
    protected readonly components?: DesignComponents<Record<string, object | undefined>, Props>,
    protected readonly extra?: ComponentIncludeExtra<PropsExtra>,
    protected readonly index?: string
  ) {
  }

  /** Computed binding object for the component / Вычисляемый объект привязки для компонента */
  readonly binds = computed<ConstrBind<PropsExtra>>(() => this.toBinds())

  /** Exposes the API methods and properties / Экспортирует API-методы и свойства */
  get expose(): ComponentExpose {
    return this.toExpose()
  }

  /**
   * Checks whether the component should be displayed /
   * Проверяет, нужно ли отображать компонент
   */
  get is(): boolean {
    return true
  }

  /**
   * Renders the included component as a VNode array.
   *
   * Рендерит включенный компонент в виде массива VNode.
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param isShow function returns true if the component should be rendered / функция возвращает true, если компонент должен быть отрисован
   * @returns array of VNodes / массив VNode
   */
  readonly render = (
    slotsChildren?: ComponentSlots,
    attrs?: ConstrBind<PropsExtra>,
    isShow: () => boolean = () => this.is
  ): VNode[] => this.initRender(slotsChildren, attrs, isShow)

  /**
   * Generates the CSS class name according to BEM structure.
   *
   * Генерирует имя CSS-класса в соответствии с BEM-структурой.
   * @returns BEM-formatted class name / имя класса в формате BEM
   */
  protected getClassName(): string {
    return `${this.className}__${this.name}`
  }

  /**
   * Resolves and returns current component properties.
   *
   * Разрешает и возвращает текущие свойства компонента.
   * @returns component properties / свойства компонента
   */
  protected getProps(): Props {
    return executeFunction(this.props)
  }

  /**
   * Extracts and returns custom attributes defined in props.
   *
   * Извлекает и возвращает пользовательские атрибуты, определенные в свойствах (props).
   * @returns raw bindable properties or undefined / сырые связываемые свойства или undefined
   */
  protected getPropsAttrs(): ConstrBind<Props> | undefined {
    return this.propsAttrsName ? this.getProps()?.[this.propsAttrsName] : undefined
  }

  /**
   * Resolves and returns additional attributes.
   *
   * Разрешает и возвращает дополнительные атрибуты.
   * @returns extra attributes or undefined / дополнительные атрибуты или undefined
   */
  protected getExtra(): PropsExtra | undefined {
    return getRef(executeFunction(this.extra))
  }

  /**
   * Combines input attributes with internal component bindings.
   *
   * Объединяет входные атрибуты со внутренними привязками компонента.
   * @param attrs attributes to merge / атрибуты для объединения
   * @returns merged binding attributes / объединенные атрибуты привязки
   */
  protected getAttrs(attrs?: ConstrBind<PropsExtra>): ConstrBind<PropsExtra> {
    if (attrs) {
      return toBinds<PropsExtra>(
        attrs,
        this.binds.value
      )
    }

    return this.binds.value
  }

  /**
   * Wraps a single expose definition into an executable proxy method.
   *
   * Оборачивает одно определение экспорта в исполняемый прокси-метод.
   * @param item expose configuration item / элемент конфигурации экспорта
   * @returns wrapped proxy function / обернутая прокси-функция
   */
  protected getExposeItem<V = any>(
    item: ComponentIncludeExposeItem<V>
  ): ((...attrs: any[]) => V) {
    return (...attrs: any[]) => {
      const data = this.element.value?.[item.method ?? item.name]?.(...attrs) ?? item.defaultValue

      switch (item.type) {
        case 'boolean':
          return Boolean(data)
        case 'number':
          return Number(data)
        case 'string':
          return String(data)
        default:
          return data
      }
    }
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected toBinds(): ConstrBind<PropsExtra> {
    return toBinds<PropsExtra>(
      this.getExtra(),
      this.getPropsAttrs(),
      {
        class: this.getClassName()
      }
    )
  }

  /**
   * Collects and exposes defined proxy methods of the sub-component.
   *
   * Собирает и экспортирует определенные прокси-методы субкомпонента.
   * @returns exposed API object / объект экспортируемого API
   */
  protected toExpose(): ComponentExpose {
    const data: Record<string, any> = {}

    if (this.exposeItems) {
      this.exposeItems.forEach((item) => {
        data[item.name] = this.getExposeItem(item)
      })
    }

    return data as ComponentExpose
  }

  /**
   * Initializes and renders the included component.
   *
   * Инициализирует и рендерит включенный компонент.
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param isShow function returns true if the component should be rendered / функция возвращает true, если компонент должен быть отрисован
   * @returns array of VNodes / массив VNode
   */
  protected initRender(
    slotsChildren?: ComponentSlots,
    attrs?: ConstrBind<PropsExtra>,
    isShow: () => boolean = () => this.is
  ): VNode[] {
    if (
      this.components
      && isShow()
    ) {
      return this.components.render(
        this.name,
        {
          ref: this.element,
          ...this.getAttrs(attrs)
        },
        slotsChildren as RawSlots,
        this.index
      )
    }

    return []
  }
}
