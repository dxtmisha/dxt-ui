import { forEach } from '../../functions/forEach'
import { getRef } from '../../functions/ref/getRef'
import { isObjectNotArray } from '../../functions/isObjectNotArray'
import { render } from '../../functions/ref/render'

import type { VNode } from 'vue'
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
 * Class for working with connected components.
 *
 * Класс для работы с подключенными компонентами.
 */
export class DesignComponents<
  COMP extends ConstrComponent,
  P extends ConstrItem
> {
  /**
   * Constructor
   * @param components list of connected components/ список подключенных компонентов
   * @param modification data for modification/ данные для модификации
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
   * @param name name of the component/ названия компонента
   */
  is<K extends keyof COMP>(name: K): name is K {
    return name in this.components
  }

  /**
   * Getting the object of the component.
   *
   * Получение объекта компонента.
   * @param name name of the component/ названия компонента
   */
  get<K extends keyof COMP>(name: K): COMP[K] {
    return this.components?.[name]
  }

  /**
   * Returns the modified input data of the connected components.
   *
   * Возвращает модифицированные входные данные у подключенных компонентов.
   * @param index the name of this/ название данного
   * @param props basic data/ базовые данные
   */
  getModification<K extends keyof P>(
    index?: K & string | string,
    props?: P[K] | Record<string, any>
  ): Record<string, any> | undefined {
    if (index) {
      const modification = getRef(this.modification?.[index])

      if (
        modification
        && isObjectNotArray(modification)
      ) {
        const value: Record<string, any> = {}

        forEach(modification, (item, name: string) => {
          value[name] = getRef(item)
        })

        if (props) {
          Object.assign(value, props)
        }

        return value
      }
    }

    return props
  }

  /**
   * Rendering a component by its name and returning an array with one component.
   *
   * Рендеринг компонента по его имени и возвращение массива с одним компонентом.
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
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
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
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
   * Rendering the component by its name.
   *
   * Рендеринг компонента по его имени.
   * @param item an array to which the rendered object will be added/
   * массив, по которому будет добавлять объект
   * @param name name of the component/ названия компонента
   * @param props property of the component/ свойство компонента
   * @param children sub-elements of the component/ под элементы компонента
   * @param index the name of the key/ названия ключа
   */
  renderAdd<
    K extends keyof COMP,
    PK extends keyof P
  >(
    item: any[],
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: RawChildren | RawSlots,
    index?: PK & string | string
  ): this {
    item.push(...this.render(name, props, children, index))

    return this
  }
}
