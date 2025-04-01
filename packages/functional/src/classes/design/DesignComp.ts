import { DesignComponents } from './DesignComponents'
import type { ConstrComponent, ConstrItem } from '../../types/constructorTypes'

export class DesignComp<
  COMP extends ConstrComponent,
  P extends ConstrItem
> extends DesignComponents<COMP, P> {
}
