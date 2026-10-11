import type {
  ConstrComponent,
  ConstrItem
} from '../../types/constructorTypes'

/**
 * Base abstract class for working with connected components in design constructors.
 * Manages the component registry, checking component availability, and batch rendering.
 *
 * Базовый абстрактный класс для работы с подключенными компонентами в конструкторах дизайна.
 * Управляет реестром компонентов, проверкой наличия компонентов и пакетным рендерингом.
 */
export abstract class DesignComponentsAbstract<
  COMP extends ConstrComponent,
  P extends ConstrItem,
  RENDER = unknown,
  CHILDREN = unknown
> {
  /**
   * Constructor
   * @param components list of connected components / список подключенных компонентов
   * @param modification data for modification / данные для модификации
   */
  constructor(
    protected readonly components: COMP = {} as COMP,
    protected readonly modification?: ConstrItem
  ) {
  }

  /**
   * Check the presence of the component.
   *
   * Проверить наличие компонента.
   * @param name name of the component / названия компонента
   * @returns true if the component is connected / true, если компонент подключён
   */
  is<K extends keyof COMP>(name: K): name is K {
    return Boolean(this.components?.[name])
  }

  /**
   * Getting the object of the component.
   *
   * Получение объекта компонента.
   * @param name name of the component / названия компонента
   * @returns component / компонент
   */
  get<K extends keyof COMP>(name: K): COMP[K] {
    return this.components?.[name]
  }

  /**
   * Returns the modified input data of the connected components.
   *
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this / название данного
   * @param props basic data / базовые данные
   * @returns modified properties / модифицированные свойства
   */
  abstract getModification<K extends keyof P>(
    index?: K & string | string,
    props?: P[K] | ConstrItem
  ): ConstrItem | undefined

  /**
   * Rendering a component by its name and returning an array with one component.
   *
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component / названия компонента
   * @param props property of the component / свойство компонента
   * @param children sub-elements of the component / под элементы компонента
   * @param index the name of the key / названия ключа
   * @returns array with rendered component or empty array / массив с отрендеренным компонентом или пустой массив
   */
  render<
    K extends keyof COMP,
    PK extends keyof P
  >(
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: CHILDREN,
    index?: PK & string | string
  ): RENDER[] {
    const item = this.renderOne(
      name,
      props,
      children,
      index
    )

    if (item) {
      return [item]
    }

    return []
  }

  /**
   * Rendering a component by its name.
   *
   * Рендеринг компонента по его имени.
   * @param name name of the component / названия компонента
   * @param props property of the component / свойство компонента
   * @param children sub-elements of the component / под элементы компонента
   * @param index the name of the key / названия ключа
   * @returns rendered element or undefined / отрендеренный элемент или undefined
   */
  abstract renderOne<
    K extends keyof COMP,
    PK extends keyof P
  >(
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: CHILDREN,
    index?: PK & string | string
  ): RENDER | undefined

  /**
   * Rendering the component by its name and adding it to the array.
   *
   * Рендеринг компонента по его имени и добавление его в массив.
   * @param item an array to which the rendered object will be added /
   * массив, по которому будет добавлять объект
   * @param name name of the component / названия компонента
   * @param props property of the component / свойство компонента
   * @param children sub-elements of the component / под элементы компонента
   * @param index the name of the key / названия ключа
   * @returns current instance / текущий экземпляр
   */
  renderAdd<
    K extends keyof COMP,
    PK extends keyof P
  >(
    item: unknown[],
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: CHILDREN,
    index?: PK & string | string
  ): this {
    item.push(...this.render(name, props, children, index))

    return this
  }

  /**
   * Calculates modified input data for connected components.
   *
   * Вычисляет модифицированные входные данные для подключенных компонентов.
   * @param index the name of this / название данного
   * @returns modified properties / модифицированные свойства
   */
  protected abstract computeModification<K extends keyof P>(
    index: K & string | string
  ): ConstrItem
}
