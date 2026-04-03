import type { ConstrBind } from '@dxtmisha/functional'

import type { FieldCounterPropsBasic } from './props'

/**
 * Interface for describing which components need to be connected for FieldCounter work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldCounter
 */
export type FieldCounterComponentInclude = {
  /** FieldCounter component configuration/ Конфигурация компонента счетчика поля */
  fieldCounter?: object
}

/**
 * Properties that can be passed to FieldCounterInclude/
 * Свойства, которые можно передать в FieldCounterInclude
 */
export interface FieldCounterPropsInclude<
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic
> {
  /** Counter value/ Значение счетчика */
  counter?: FieldCounterPropsBasic['counter']
  /** Whether to show the counter/ Показывать ли счетчик */
  counterShow?: boolean
  /** Template for the counter display/ Шаблон для отображения счетчика */
  counterTemplate?: FieldCounterPropsBasic['template']
  /** Unique ID for the counter/ Уникальный идентификатор для счетчика */
  counterId?: string
  /** Maximum allowed length/ Максимально допустимая длина */
  maxlength?: FieldCounterPropsBasic['maxlength']
  /** Additional attributes for the FieldCounter component/ Дополнительные атрибуты для компонента счетчика поля */
  fieldCounterAttrs?: ConstrBind<FieldCounter>
}
