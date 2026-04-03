import type { LabelAlternativeSlots } from '../../types/labelTypes'
import type { DescriptionSlots } from '../../types/descriptionTypes'
import type { CaptionSlots } from '../../types/captionTypes'

/**
 * CSS class names for Cell sub-elements/
 * Имена CSS классов для под-элементов Cell
 */
export type CellClassesSub = {
  /** Label element class/ Класс элемента метки */
  label: string
  /** Description element class/ Класс элемента описания */
  description: string
  /** Caption element class/ Класс элемента подписи */
  caption: string
  /** Trailing element class/ Класс завершающего элемента */
  trailing: string
}

/**
 * Component map for including Cell/
 * Карта компонентов для подключения Cell
 */
export type CellComponentInclude = {
  /** Cell component key/ Ключ компонента Cell */
  cell?: object
}

/**
 * Type describing available slots/
 * Тип, описывающий доступные слоты
 */
export interface CellSlotsInclude extends LabelAlternativeSlots,
  DescriptionSlots,
  CaptionSlots {
  /** Slot for elements on the right/ Слот для элементов справа */
  trailing?(props: CellClassesSub): any

  /** Slot for the main body content/ Слот для основного контента тела */
  body?(props: CellClassesSub): any
}
