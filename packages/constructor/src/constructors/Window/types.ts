import type { Ref } from 'vue'
import type { ConstrClass } from '@dxt-ui/functional'

import type { ScrollbarComponentsInclude, ScrollbarEmitsInclude } from '../Scrollbar'
import type { ButtonComponentInclude } from '../Button'
import type { ImageComponentsInclude, ImageEmitsInclude } from '../Image'

import type { WindowControlItem, WindowEmitOptions } from './basicTypes'

/**
 * Interface for describing which components need to be connected for work.
 *
 * Интерфейс для описания, какие компоненты надо подключить для работы.
 */
export type WindowComponents
  = ScrollbarComponentsInclude
    & ButtonComponentInclude
    & ImageComponentsInclude

/**
 * Type describing available events.
 *
 * Тип, описывающий доступные события.
 */
export type WindowEmits
  = ScrollbarEmitsInclude
    & ImageEmitsInclude
    & {
      window: [options: WindowEmitOptions]
    }

/**
 * Type describing available properties.
 *
 * Тип, описывающий доступные свойства.
 */
export interface WindowExpose {
  /**
   * Unique identifier of the window/
   * Уникальный идентификатор окна
   */
  id: string

  /**
   * Reactive state of window visibility/
   * Реактивное состояние видимости окна
   */
  open: Ref<boolean>

  /**
   * Control item data for window management/
   * Данные элемента управления для управления окном
   */
  control: WindowControlItem

  /**
   * Sets window open state/
   * Устанавливает состояние открытия окна
   */
  setOpen(open: boolean): Promise<void>

  /**
   * Toggles window visibility/
   * Переключает видимость окна
   */
  toggle(): Promise<void>
}

/**
 * Type describing available slots.
 *
 * Тип, описывающий доступные слоты.
 */
export interface WindowSlots {
  /**
   * Control slot for window management/
   * Слот управления для управления окном
   */
  control?(props: WindowControlItem): any

  /**
   * Title slot for window header/
   * Слот заголовка для шапки окна
   */
  title?(props: WindowControlItem): any

  /**
   * Footer slot for window bottom/
   * Слот подвала для низа окна
   */
  footer?(props: WindowControlItem): any

  /**
   * Default slot for main content/
   * Основной слот для главного содержимого
   */
  default?(props: WindowControlItem): any
}

/**
 * Type describing subclasses.
 *
 * Тип, описывающий подклассы.
 */
export type WindowClasses = {
  main: ConstrClass
  // :classes [!] System label / Системная метка
  body: string
  bodyGroup: string
  bodyContext: string
  control: string
  image: string
  close: string
  teleport: string
  // :classes [!] System label / Системная метка
}
