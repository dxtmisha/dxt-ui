import type { ConstrBind } from '@dxtmisha/functional'

import type { EventClickEmits } from '../../types/eventClickTypes'
import type { BarsPropsBasic } from './props'

/**
 * Component map for including the Bars component/
 * Карта компонентов для подключения компонента Bars
 */
export type BarsComponentInclude = {
  /** Bars component configuration/ Конфигурация компонента панелей */
  bars?: object
}

/** Available events for Bars/ Доступные события для Bars */
export type BarsEmitsInclude = {
  /** Click event for bars/ Событие клика для панелей */
  bars: EventClickEmits['click']
  /** Simple click event for bars/ Простое событие клика для панелей */
  barsLite: EventClickEmits['clickLite']
  /** Back button click event for bars/ Событие клика кнопки назад для панелей */
  barsBack: EventClickEmits['clickLite']
}

/**
 * Props used to include and configure the Bars component/
 * Свойства для подключения и настройки компонента Bars
 */
export type BarsPropsInclude<
  Bars extends BarsPropsBasic = BarsPropsBasic
> = {
  /** Bars label/ Метка панелей */
  barsLabel?: string | number
  /** Bars description/ Описание панелей */
  barsDescription?: string
  /** Hide back button/ Скрыть кнопку назад */
  barsBackHide?: boolean
  /** Hide bars/ Скрыть панели */
  barsHide?: boolean
  /** List of bar buttons/ Список кнопок панелей */
  barsList?: Bars['bars']
  /** Additional attributes for Bars component/ Дополнительные атрибуты для компонента Bars */
  barsAttrs?: ConstrBind<Bars>
}
