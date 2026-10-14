import { computed, type ComputedRef, type VNode } from 'vue'
import {
  forEach,
  isObjectNotArray
} from '@dxtmisha/functional-basic'

import { getRef } from '../../functions/ref/getRef'
import { render } from '../../functions/ref/render'
import { toBinds } from '../../functions/toBinds'

import type {
  RawChildren,
  RawSlots
} from '../../types/refTypes'
import type {
  ConstrComponent,
  ConstrComponentMod,
  ConstrItem
} from '../../types/constructorTypes'

/**
 * Class for working with connected components in Vue.
 *
 * Класс для работы с подключенными компонентами во Vue.
 */
export class DesignComponents<
  COMP extends ConstrComponent,
  P extends ConstrItem
> {
  /** Cache for computed properties / Кэш для вычисляемых свойств */
  protected caching: Record<string, ComputedRef<ConstrItem>> = {}

  /**
   * Constructor
   * @param components list of connected components / список подключенных компонентов
   * @param modification data for modification / данные для модификации
   */
  constructor(
    protected readonly components: COMP = {} as COMP,
    protected readonly modification?: ConstrComponentMod<P>
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
  getModification<K extends keyof P>(
    index?: K & string | string,
    props?: P[K] | ConstrItem
  ): ConstrItem | undefined {
    if (index) {
      if (!(index in this.caching)) {
        this.caching[index] = computed(() => this.computeModification(index))
      }

      const caching = this.caching[index]

      if (caching) {
        if (props) {
          return toBinds(caching.value, props)
        }

        return caching.value
      }
    }

    return props
  }

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
    children?: RawChildren | RawSlots,
    index?: PK & string | string
  ): VNode[] {
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
  renderOne<
    K extends keyof COMP,
    PK extends keyof P
  >(
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: RawChildren | RawSlots,
    index?: PK & string | string
  ): VNode | undefined {
    if (this.is(name)) {
      const indexItem = index ?? name

      return render(
        this.get(name),
        this.getModification(indexItem, props),
        children,
        indexItem
      )
    }

    return undefined
  }

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
    children?: RawChildren | RawSlots,
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
  protected computeModification<K extends keyof P>(
    index: K & string | string
  ): ConstrItem {
    const modification = getRef(this.modification?.[index])

    if (
      modification
      && isObjectNotArray(modification)
    ) {
      const value: ConstrItem = {}

      forEach(modification, (item, name: string) => {
        value[name] = getRef(item)
      })

      return value
    }

    return {}
  }
}
