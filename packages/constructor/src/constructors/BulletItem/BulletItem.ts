import {
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { SkeletonInclude } from '../Skeleton'

import type { BulletItemProps } from './props'
import type {
  BulletItemComponents,
  BulletItemEmits,
  BulletItemSlots
} from './types'

/** BulletItem dependency constructors type / Тип конструкторов зависимостей BulletItem */
export type BulletItemConstructors = {
  /** Description include constructor / Конструктор подключения описания */
  description: typeof DescriptionInclude
  /** Skeleton include constructor / Конструктор подключения скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Class representing the business logic and orchestrator of the BulletItem component.
 * Coordinates lazy instantiation of `DescriptionInclude` (`<span>`) and `SkeletonInclude`.
 *
 * Класс, представляющий бизнес-логику и оркестратор компонента BulletItem.
 * Координирует ленивую инициализацию `DescriptionInclude` (`<span>`) и `SkeletonInclude`.
 */
export class BulletItem extends DesignLogicAbstract<
  HTMLLIElement,
  BulletItemComponents,
  BulletItemEmits,
  BulletItemSlots,
  BulletItemProps,
  BulletItemConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BulletItemConstructors> = {
    description: {
      item: DescriptionInclude,
      canCreate: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.callInstance('skeleton', item => item),
        'span'
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      canCreate: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classTextVariant']
      ]
    }
  }
}
