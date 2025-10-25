// export:none

import { forEach, isObjectNotArray, toCamelCase } from '@dxtmisha/functional'

import { PropertiesToAbstract } from './PropertiesToAbstract'
import { PropertiesItems } from '../PropertiesItems'

import { type PropertyItem, type PropertyItemsMedia, PropertyKey, PropertyType } from '../../../types/propertyTypes'

/**
 * A class for transforming class.
 *
 * Класс для преобразования class.
 */
export class PropertiesToMedia extends PropertiesToAbstract {
  protected readonly FILE_CACHE = '040-media'
  private readonly media: PropertyItemsMedia

  /**
   * Constructor
   * @param items data for processing/ данные для обработки
   */
  constructor(protected items: PropertiesItems) {
    super(items)
    this.media = this.items.getMedia()
  }

  protected init(): void {
    this.items
      .findVariable([
        PropertyType.mediaGroup,
        PropertyType.mediaMaxGroup,
        PropertyType.containerGroup,
        PropertyType.containerMaxGroup
      ])
      .forEach(
        (
          {
            design,
            name,
            item,
            parent
          }
        ) => {
          if (
            parent?.value
            && isObjectNotArray(parent.value)
          ) {
            if (name in parent.value) {
              delete parent.value[name]
            }

            Object.assign(
              parent.value,
              this.toValueGroup(design, name, item, this.getTypeByGroup(item))
            )
          }
        }
      )

    this.items
      .findVariable([
        PropertyType.media,
        PropertyType.mediaMax,
        PropertyType.container,
        PropertyType.containerMax
      ])
      .forEach(
        (
          {
            design,
            name,
            item
          }
        ) => {
          item[PropertyKey.name] = this.getName(design, name, item)
        }
      )
  }

  /**
   * @param design design name/ название дизайна
   * @param name base property name/ базовое название свойства
   * @param item current element/ текущий элемент
   */
  private getName(
    design: string,
    name: string,
    item: PropertyItem
  ) {
    const values = this.toValueForMedia(
      design,
      this.items.getReName(name, item).split(',')
    )

    if (values.length > 1) {
      return `(min-width: ${values?.[0] || '0px'}) and (max-width: calc(${values?.[1] || '1980px'} - 1px))`
    } else if (
      item?.[PropertyKey.variable] === PropertyType.mediaMax
      || item?.[PropertyKey.variable] === PropertyType.containerMax
    ) {
      return `(max-width: calc(${values?.[0] || '1980px'} - 1px))`
    } else {
      return `(min-width: ${values?.[0] || '0px'})`
    }
  }

  /**
   * Returns the type of property by group.
   *
   * Возвращает тип свойства по группе.
   * @param item current element/ текущий элемент
   */
  private getTypeByGroup(item: PropertyItem): PropertyType {
    switch (item?.[PropertyKey.variable]) {
      case PropertyType.containerGroup:
        return PropertyType.container
      case PropertyType.containerMaxGroup:
        return PropertyType.containerMax
      case PropertyType.mediaMaxGroup:
        return PropertyType.mediaMax
      default:
        return PropertyType.media
    }
  }

  /**
   * Updates data if the alias is entered.
   *
   * Изменяет данные, если введен алиас.
   * @param design design name/ название дизайна
   * @param values a list of values for media/ список значений для медиа
   */
  private toValueForMedia(design: string, values: string[]): string[] {
    return forEach(values, (value) => {
      const key = toCamelCase(value.replace(/^mediaMax|media|containerMax|container/, ''))
      const media = this.media?.[design]?.[key]?.value

      return (typeof media === 'string' && media) || key
    })
  }

  /**
   * Creates a group of media values.
   *
   * Создает группу медиа значений.
   * @param design design name/ название дизайна
   * @param name base property name/ базовое название свойства
   * @param item current element/ текущий элемент
   * @param type property type/ тип свойства
   */
  private toValueGroup(
    design: string,
    name: string,
    item: PropertyItem,
    type: PropertyType
  ): Record<string, PropertyItem> | undefined {
    const medias = this.media?.[design]

    if (medias) {
      const data: Record<string, PropertyItem> = {}

      Object.keys(medias).forEach((key) => {
        const index: string = toCamelCase(`${name}-${key}`)
        const indexMedia: string = toCamelCase(`${type}-${key}`)

        data[index] = {
          value: {
            [indexMedia]: {
              value: item.value,
              __i: `${type}|sm`,
              __v: type,
              __n: indexMedia
            }
          },
          __i: index,
          __v: PropertyType.state,
          __n: `&--${index}`
        } as PropertyItem
      })

      return data
    }

    return undefined
  }
}
