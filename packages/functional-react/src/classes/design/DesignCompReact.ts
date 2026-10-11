import type { ReactElement, ReactNode } from 'react'
import {
  DesignComponentsAbstract,
  isObjectNotArray
} from '@dxtmisha/functional-basic'

import { renderReact } from '../../functions/ref/renderReact'
import { toBindsReact } from '../../functions/toBindsReact'

import type {
  ConstrComponentModReact,
  ConstrComponentReact,
  ConstrItem
} from '../../types/constructorTypes'

/**
 * Class for working with connected components in React.
 * It stores the map of child components injected by the design system (e.g. `icon`, `progress`, `ripple`),
 * applies forced property modifications (`compMod`) and creates React elements by component name.
 * An instance lives for exactly one render, so modifications are cached as plain objects without reactivity.
 *
 * Класс для работы с подключенными компонентами в React.
 * Хранит карту дочерних компонентов, переданных дизайн-системой (например, `icon`, `progress`, `ripple`),
 * применяет принудительные модификации свойств (`compMod`) и создаёт React-элементы по имени компонента.
 * Экземпляр живёт ровно один рендер, поэтому модификации кешируются обычными объектами без реактивности.
 */
export class DesignCompReact<
  COMP extends ConstrComponentReact,
  P extends ConstrItem
> extends DesignComponentsAbstract<
    COMP,
    P,
    ReactElement,
    ReactNode
  > {
  /** Cache for computed modifications / Кэш для вычисленных модификаций */
  protected caching: Record<string, ConstrItem> = {}

  /**
   * Constructor
   * @param components list of connected components / список подключенных компонентов
   * @param modification data for modification / данные для модификации
   */
  constructor(
    components: COMP = {} as COMP,
    modification?: ConstrComponentModReact<P>
  ) {
    super(components, modification)
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
        this.caching[index] = this.computeModification(index)
      }

      const caching = this.caching[index]

      if (caching) {
        if (props) {
          return toBindsReact(caching, props)
        }

        return caching
      }
    }

    return props
  }

  /**
   * Rendering a component by its name.
   *
   * Рендеринг компонента по его имени.
   * @param name name of the component / названия компонента
   * @param props property of the component / свойство компонента
   * @param children sub-elements of the component / под элементы компонента
   * @param index the name of the key / названия ключа
   * @returns React element or undefined / React-элемент или undefined
   */
  renderOne<
    K extends keyof COMP,
    PK extends keyof P
  >(
    name: K & string,
    props?: P[PK] & ConstrItem | ConstrItem,
    children?: ReactNode,
    index?: PK & string | string
  ): ReactElement | undefined {
    const component = this.get(name)

    if (component) {
      const indexItem = index ?? name

      return renderReact(
        component,
        this.getModification(indexItem, props),
        children,
        indexItem
      )
    }

    return undefined
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
    const modification: ConstrItem | undefined = this.modification?.[index]

    if (isObjectNotArray(modification)) {
      return { ...modification }
    }

    return {}
  }
}
