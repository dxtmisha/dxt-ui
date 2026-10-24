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
 * Typed registry of connected Vue components. It resolves components by name, caches computed modification maps, merges props, and creates VNodes with consistent keys.
 *
 * Типизированный реестр подключённых компонентов Vue. Находит компоненты по имени, кэширует вычисляемые модификации, объединяет свойства и создаёт VNode с согласованными ключами.
 */
export class DesignComponents<
  COMP extends ConstrComponent,
  P extends ConstrItem
> {
  /** Cache for computed properties / Кэш для вычисляемых свойств */
  protected caching: Record<string, ComputedRef<ConstrItem>> = {}

  /**
   * Initializes DesignComponents with the supplied configuration.
   *
   * Инициализирует DesignComponents с переданными настройками.
   * @param components Connected component registry. / Реестр подключённых компонентов.
   * @param modification Per-index default prop maps, optionally reactive. / Карты свойств по умолчанию по индексам, могут быть реактивными.
   */
  constructor(
    protected readonly components: COMP = {} as COMP,
    protected readonly modification?: ConstrComponentMod<P>
  ) {
  }

  /**
   * Checks whether a registry entry contains a component.
   *
   * Проверяет наличие компонента в записи реестра.
   * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
   * @returns Whether the described condition is satisfied. / Выполнено ли описанное условие.
   */
  is<K extends keyof COMP>(name: K): name is K {
    return Boolean(this.components?.[name])
  }

  /**
   * Returns the registry entry without creating a VNode.
   *
   * Возвращает запись реестра без создания VNode.
   * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
   * @returns Connected component registry entry. / Запись реестра подключённых компонентов.
   */
  get<K extends keyof COMP>(name: K): COMP[K] {
    return this.components?.[name]
  }

  /**
   * Caches the computed defaults for an index and merges explicit props using `toBinds`. Without a nonempty index, returns the supplied props unchanged.
   *
   * Кэширует вычисляемые значения по индексу и объединяет явные свойства через `toBinds`. Без непустого индекса возвращает исходные свойства без изменений.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @param props Input properties. / Входные свойства.
   * @returns Merged prop map or the unchanged props when no index is supplied. / Объединённая карта свойств либо исходные свойства без индекса.
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
   * Wraps the rendered VNode in an array; returns an empty array for a missing component.
   *
   * Оборачивает VNode в массив; возвращает пустой массив для отсутствующего компонента.
   * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
   * @param props Input properties. / Входные свойства.
   * @param children Child content or an optional VNode accumulator. / Дочернее содержимое либо необязательный массив VNode.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @returns Single-VNode array or an empty array. / Массив из одного VNode либо пустой массив.
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
   * Creates one VNode with merged props and children. Returns `undefined` for a missing component.
   *
   * Создаёт один VNode с объединёнными свойствами и дочерними элементами. Возвращает `undefined` для отсутствующего компонента.
   * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
   * @param props Input properties. / Входные свойства.
   * @param children Child content or an optional VNode accumulator. / Дочернее содержимое либо необязательный массив VNode.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @returns Rendered VNode, or undefined when the component is missing. / Отрендеренный VNode либо undefined при отсутствии компонента.
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
   * Appends rendered nodes to an existing array and returns the same registry for chaining.
   *
   * Добавляет отрендеренные узлы в существующий массив и возвращает тот же реестр для цепочек вызовов.
   * @param item Existing array to append rendered nodes to. / Существующий массив для добавления отрендеренных узлов.
   * @param name Connected component registry key. / Ключ подключённого компонента в реестре.
   * @param props Input properties. / Входные свойства.
   * @param children Child content or an optional VNode accumulator. / Дочернее содержимое либо необязательный массив VNode.
   * @param index Entry or modification index. / Индекс записи либо модификации.
   * @returns The current instance for chaining. / Текущий экземпляр для цепочек вызовов.
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
