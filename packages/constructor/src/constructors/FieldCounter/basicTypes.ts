import type { ConstrBind } from '@dxtmisha/functional'

import type { FieldCounterPropsBasic } from './props'

/**
 * Interface for describing which components need to be connected for FieldCounter work/
 * Интерфейс для описания, какие компоненты надо подключить для работы FieldCounter
 */
export type FieldCounterComponentInclude = {
  fieldCounter: object
}

/**
 * Properties that can be passed to FieldCounterInclude/
 * Свойства, которые можно передать в FieldCounterInclude
 */
export interface FieldCounterPropsInclude<
  FieldCounter extends FieldCounterPropsBasic = FieldCounterPropsBasic
> {
  counter?: FieldCounterPropsBasic['counter']
  counterShow?: boolean
  counterTemplate?: FieldCounterPropsBasic['template']
  maxlength?: FieldCounterPropsBasic['maxlength']
  fieldCounterAttrs?: ConstrBind<FieldCounter>
}
