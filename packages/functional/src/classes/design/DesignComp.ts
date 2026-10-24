import { DesignComponents } from './DesignComponents'
import type { ConstrComponent, ConstrItem } from '../../types/constructorTypes'

/**
 * Exported subclass of `DesignComponents<COMP, P>`. It adds no members or behavior; registry lookup, reactive modifications and VNode rendering are inherited unchanged.
 *
 * Экспортируемый подкласс `DesignComponents<COMP, P>`. Не добавляет собственных членов или поведения: поиск, реактивные модификации и рендеринг VNode наследуются без изменений.
 */
export class DesignComp<
  COMP extends ConstrComponent,
  P extends ConstrItem
> extends DesignComponents<COMP, P> {
}
