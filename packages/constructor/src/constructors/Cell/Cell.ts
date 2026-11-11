import type { Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrClassObject,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract
} from '@dxtmisha/functional'
import { getClassTagAStatic } from '../../functions/getClassTagAStatic'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { CaptionInclude } from '../../classes/CaptionInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EnabledInclude } from '../../classes/EnabledInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'

import { IconTrailingInclude } from '../Icon'
import { ProgressInclude } from '../Progress'
import { RippleInclude } from '../Ripple'
import { SkeletonInclude } from '../Skeleton'

import type { CellClassesSub } from './basicTypes'
import type { CellComponents, CellEmits, CellSlots } from './types'
import type { CellProps } from './props'

/** Cell dependency constructors type / Тип конструкторов зависимостей Cell */
export type CellConstructors = {
  /** Caption constructor / Конструктор подписи */
  caption: typeof CaptionInclude
  /** Description constructor / Конструктор описания */
  description: typeof DescriptionInclude
  /** Enabled status constructor / Конструктор статуса активности */
  enabled: typeof EnabledInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Icon trailing constructor / Конструктор иконки и завершающей иконки */
  icon: typeof IconTrailingInclude
  /** Label constructor / Конструктор метки */
  label: typeof LabelInclude
  /** Progress constructor / Конструктор индикатора прогресса */
  progress: typeof ProgressInclude
  /** Ripple constructor / Конструктор эффекта волны */
  ripple: typeof RippleInclude
  /** Skeleton constructor / Конструктор скелетона */
  skeleton: typeof SkeletonInclude
}

/**
 * Class representing a list item or cell element (Cell).
 * Provides coordination for components such as icons, progress, ripples, labels, descriptions, and click events.
 *
 * Класс, представляющий элемент списка или ячейку (Cell).
 * Обеспечивает координацию работы таких компонентов, как иконки, прогресс, волны, метки, описания и события клика.
 */
export class Cell extends DesignLogicAbstract<
  HTMLDivElement,
  CellComponents,
  CellEmits,
  CellSlots,
  CellProps,
  CellConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<CellConstructors> = {
    caption: {
      item: CaptionInclude,
      conditions: () => CaptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.getSkeleton()
      ]
    },
    description: {
      item: DescriptionInclude,
      conditions: () => DescriptionInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        this.slots,
        () => this.getSkeleton()
      ]
    },
    enabled: {
      item: EnabledInclude,
      parameters: () => [
        this.props,
        () => (ProgressInclude.is(this.props) ? this.i('progress') : undefined)
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        this.props,
        () => this.i('enabled'),
        this.emits
      ]
    },
    icon: {
      item: IconTrailingInclude,
      conditions: () => IconTrailingInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components
      ]
    },
    label: {
      item: LabelInclude,
      conditions: () => LabelInclude.is(this.props, this.slots),
      parameters: () => [
        this.props,
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        () => this.getSkeleton()
      ]
    },
    progress: {
      item: ProgressInclude,
      conditions: () => ProgressInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        { position: 'bottom' }
      ]
    },
    ripple: {
      item: RippleInclude,
      conditions: () => RippleInclude.is(this.props),
      parameters: () => [
        this.naming,
        this.components,
        () => this.i('enabled')
      ]
    },
    skeleton: {
      item: SkeletonInclude,
      conditions: () => SkeletonInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        ['classTextVariant']
      ]
    }
  }

  /**
   * Constructor
   * @param props input properties / входные свойства
   * @param element target HTML element / целевой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   */
  constructor(
    props: CellProps,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<CellComponents, CellProps>,
    slots?: CellSlots,
    emits?: ConstrEmit<CellEmits>,
    constructors?: Partial<CellConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      constructors
    )
  }

  /**
   * Computed CSS classes for the cell component.
   *
   * Вычисляемые CSS классы для компонента ячейки.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    const classes: ConstrClassObject = {
      [this.naming.getStatusClass('description')]: this.isDescription(),
      [getClassTagAStatic(this.naming.getDesign())]: true
    }

    return classes
  }

  /**
   * Returns a list of sub-element CSS classes for the cell component.
   *
   * Возвращает список CSS классов для под-элементов компонента ячейки.
   * @returns sub-element classes object / объект классов под-элементов
   */
  get classesSub(): CellClassesSub {
    return {
      label: this.naming.getSubClass('label'),
      description: this.naming.getSubClass('description'),
      caption: this.naming.getSubClass('caption'),
      trailing: this.naming.getSubClass('trailing')
    }
  }

  /**
   * Computed role for the cell component.
   *
   * Вычисляемая роль для компонента ячейки.
   * @returns role attribute / атрибут role
   */
  get role(): string | undefined {
    if (this.props.role) {
      return this.props.role
    }

    if (this.props.dynamic) {
      return 'button'
    }

    return undefined
  }

  /**
   * Computed HTML attributes and bindings for the main cell element.
   *
   * Вычисляемые HTML-атрибуты и привязки для главного элемента ячейки.
   * @returns element binding attributes / атрибуты привязки элемента
   */
  get binds(): ConstrBind {
    const props: ConstrBind = {
      'data-value': this.props.value,
      'data-divider': this.props.divider ? 'active' : undefined,
      ...this.i('event').binds,
      ...AriaStaticInclude.role(this.role)
    }

    if (this.props.dynamic) {
      return {
        ...props,
        tabindex: '0'
      }
    }

    return props
  }

  /**
   * Checks if description is present and active.
   *
   * Проверяет наличие и активность описания.
   * @returns check result / результат проверки
   */
  protected isDescription(): boolean {
    return Boolean(
      DescriptionInclude.is(this.props, this.slots)
      && this.i('description').is
    )
  }

  /**
   * Returns the skeleton instance if skeleton mode is active.
   *
   * Возвращает экземпляр скелетона, если включен режим скелетона.
   * @returns skeleton instance or undefined / экземпляр скелетона или undefined
   */
  protected getSkeleton(): SkeletonInclude | undefined {
    return SkeletonInclude.is(this.props) ? this.i('skeleton') : undefined
  }
}
