import { PropertiesToAbstract } from './PropertiesToAbstract'

import {
  type PropertyItem,
  type PropertyItemsItem,
  PropertyKey
} from '../../../types/propertyTypes'

const REG_SUB = /(?<={[^}]*?){([^{}]+)}/g

/**
 * Class for converting all properties with sub-values.
 *
 * Класс для преобразования всех свойств с под-значениями.
 */
export class PropertiesToSub extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '006-sub'

  /**
   * Converting all elements.
   *
   * Преобразование всех элементов.
   */
  protected init(): void {
    this.items.each((property) => {
      if (this.is(property.value)) {
        this.read(property)
      }
    })
  }

  /**
   * Проверяет, если значения
   * @param value current element/ текущий элемент
   */
  private is(value: PropertyItem['value']): boolean {
    return typeof value === 'string' && Boolean(value.match(REG_SUB))
  }

  /**
   * Converting all indices to values.
   *
   * Преобразование всех индексов в значения.
   * @param design design name/ название дизайна
   * @param component component name/ название компонента
   * @param value values of properties from the value field/ значения свойств из поля value
   */
  private getValue(
    design: string,
    component: string,
    value: string
  ) {
    let max = 24
    let update = true

    while (update && max-- > 0) {
      update = false
      value = value.replace(REG_SUB, (name, value) => {
        update = true

        return this.items.getItem(
          this.items.getLink(design, component, name)
        )?.value ?? value
      })
    }

    return value.trim()
  }

  /**
   * Converting all indices to values for a field of values.
   *
   * Преобразование всех индексов в значения для поля значения.
   */
  private read(
    {
      design,
      component,
      item
    }: PropertyItemsItem
  ): void {
    if (
      component
      && typeof item.value === 'string'
    ) {
      item.value = this.getValue(design, component, item.value)

      if (item?.[PropertyKey.fullValue]) {
        item.value = item.value.replace(/[{}]/g, '')
      }
    }
  }
}
