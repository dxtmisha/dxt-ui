import type { ListRecord, ListSelectedList } from '@dxtmisha/functional'

import type { CollageItemPropsBasic, CollageItemPropsInclude } from '../CollageItem'

export type CollagePropsToken = {
  // :type [!] System label / Системная метка
  appearance?: 'standard' | 'quilted' | 'woven' | 'masonryHorizontal' | 'masonryVertical'
  columns?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'
  // :type [!] System label / Системная метка
}

export type CollagePropsBasic<
  CollageItem extends CollageItemPropsBasic = CollageItemPropsBasic
> = CollageItemPropsInclude<CollageItem>
  & {
    /** List of collage images / Список изображений коллажа */
    images?: ListRecord<CollageItem>

    /** List of selected item identifiers / Список выбранных идентификаторов элементов */
    selected?: ListSelectedList

    /** Key for the item value in data object / Ключ для значения элемента в объекте данных */
    keyValue?: string
    /** Key for the item label in data object / Ключ для метки элемента в объекте данных */
    keyLabel?: string

    /** Base cell size / Базовый размер ячейки */
    cellSize?: string | number
  }

/**
 * Type describing incoming properties.
 *
 * Тип, описывающий входящие свойства.
 */
export type CollageProps = CollagePropsBasic & CollagePropsToken

/**
 * Default value for property.
 *
 * Значение по умолчанию для свойства.
 */
export const defaultsCollage = {
  ...{
    // :default [!] System label / Системная метка
    appearance: 'standard',
    columns: '4'
    // :default [!] System label / Системная метка
  }
}
