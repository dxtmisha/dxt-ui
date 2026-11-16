import {
  type ConstrClassObject,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'

import { FieldCounterInclude } from '../FieldCounter'
import { ProgressInclude } from '../Progress'
import { SkeletonInclude } from '../Skeleton'

import type { FieldLabelPropsBasic } from './props'
import type { FieldLabelComponents, FieldLabelEmits, FieldLabelSlots } from './types'

/** FieldLabel dependency constructors type / Тип конструкторов зависимостей FieldLabel */
export type FieldLabelConstructors = {
  /** Field counter constructor / Конструктор счетчика поля */
  fieldCounter: typeof FieldCounterInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
  /** Progress constructor / Конструктор индикатора прогресса */
  progress: typeof ProgressInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * FieldLabel logic orchestrator class.
 * Manages label rendering, required indicator, loading progress, character counter, and skeleton state.
 *
 * Класс-оркестратор логики FieldLabel.
 * Управляет рендерингом метки, индикатором обязательности, прогрессом загрузки, счетчиком символов и состоянием скелетона.
 */
export class FieldLabel extends DesignLogicAbstract<
  HTMLLabelElement,
  FieldLabelComponents,
  FieldLabelEmits,
  FieldLabelSlots,
  FieldLabelPropsBasic,
  FieldLabelConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<FieldLabelConstructors> = {
    fieldCounter: {
      item: FieldCounterInclude,
      canCreate: () => FieldCounterInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    label: {
      item: LabelInclude,
      canCreate: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        true,
        () => this.callInstance('skeleton', item => item)
      ]
    },
    progress: {
      item: ProgressInclude,
      canCreate: () => ProgressInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        {
          circular: true,
          position: 'static',
          dense: true
        }
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

  /**
   * Values for the class.
   *
   * Значения для класса.
   * Возвращает объект классов, включающий классы скелетона, если он активен.
   * @returns object of class names / объект названий классов
   */
  get classes(): ConstrClassObject {
    return this.callInstance('skeleton', item => item.classes, {})
  }
}
