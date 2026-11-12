import { computed, type Ref } from 'vue'
import {
  type ConstrClass,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract,
  forEach,
  getBind,
  toBinds
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TextInclude } from '../../classes/TextInclude'

import { MotionTransformClassesInclude } from '../MotionTransform'
import { SkeletonInclude } from '../Skeleton'
import { WindowClassesInclude } from '../Window'

import { BarsAction } from './BarsAction'

import type { AriaList } from '../../types/ariaTypes'
import type { EventClickValue } from '../../types/eventClickTypes'
import type { BarsProps } from './props'
import type { BarsComponents, BarsEmits, BarsSlots } from './types'

/** Bars dependency constructors type / Тип конструкторов зависимостей Bars */
export type BarsConstructors = {
  /** Action mode manager constructor / Конструктор менеджера режима действий */
  action: typeof BarsAction
  /** Description include constructor / Конструктор подключения описания */
  description: typeof DescriptionInclude
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Label include constructor / Конструктор подключения метки */
  label: typeof LabelInclude
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<boolean>
  /** MotionTransform classes helper constructor / Конструктор помощника классов MotionTransform */
  motionTransformClasses: typeof MotionTransformClassesInclude
  /** Skeleton include constructor / Конструктор подключения скелета */
  skeleton: typeof SkeletonInclude
  /** Text localization constructor / Конструктор локализации текста */
  text: typeof TextInclude
  /** Window classes helper constructor / Конструктор помощника классов Window */
  windowClasses: typeof WindowClassesInclude
}

/**
 * Class Bars manages the core logic of the bars navigation and action header component.
 * Coordinates title/description text, control buttons, action-mode toggling, and accessibility.
 *
 * Класс Bars управляет основной логикой компонента навигационной панели и заголовка действий.
 * Координирует текст заголовка/описания, кнопки управления, переключение режима действий и доступность.
 */
export class Bars extends DesignLogicAbstract<
  HTMLElement,
  BarsComponents,
  BarsEmits,
  BarsSlots,
  BarsProps,
  BarsConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<BarsConstructors> = {
    action: {
      item: BarsAction,
      parameters: () => [this.props]
    },
    description: {
      item: DescriptionInclude,
      parameters: () => [
        () => ({
          description: this.isAction() ? this.props.actionDescription : this.props.description,
          descriptionId: this.props.descriptionId
        }),
        this.naming,
        this.slots,
        () => (SkeletonInclude.is(this.props) ? this.i('skeleton') : undefined)
      ]
    },
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    label: {
      item: LabelInclude,
      parameters: () => [
        () => ({
          label: this.isAction() ? this.props.actionLabel : this.props.label,
          labelId: this.props.labelId
        }),
        this.naming,
        undefined,
        this.slots,
        undefined,
        undefined,
        undefined,
        () => (SkeletonInclude.is(this.props) ? this.i('skeleton') : undefined)
      ]
    },
    model: {
      item: ModelInclude<boolean>,
      parameters: () => [
        'action',
        this.emits,
        this.i('action').action
      ]
    },
    motionTransformClasses: {
      item: MotionTransformClassesInclude,
      parameters: () => [this.naming.getDesign()]
    },
    skeleton: {
      item: SkeletonInclude,
      parameters: () => [
        this.props,
        this.naming,
        ['classTextVariant']
      ]
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    windowClasses: {
      item: WindowClassesInclude,
      parameters: () => [this.naming.getDesign()]
    }
  }

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    props: Readonly<BarsProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<BarsComponents, BarsProps>,
    slots?: BarsSlots,
    emits?: ConstrEmit<BarsEmits>,
    constructors?: Partial<BarsConstructors>
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

    this.i('model')
  }

  /**
   * Returns list of ARIA attributes.
   *
   * Возвращает список ARIA-атрибутов.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.live(this.ariaLive)
    }
  }

  /**
   * Returns the value for the aria-live property.
   *
   * Возвращает значение для свойства aria-live.
   * @returns aria-live value / значение aria-live
   */
  get ariaLive(): 'polite' | 'off' | undefined {
    if (this.isActionPossible()) {
      return 'polite'
    }

    return undefined
  }

  /**
   * Returns the button name.
   *
   * Возвращает название кнопки.
   * @returns button label / название кнопки
   */
  get backLabel(): string | number | undefined {
    return this.isAction() ? undefined : this.backBinds.value?.label
  }

  /**
   * Values for the class.
   *
   * Значения для класса.
   * @returns classes values / значения классов
   */
  get classes(): ConstrClass {
    return {
      [this.naming.getStatusClass('action')]: this.isAction()
    }
  }

  /**
   * Checks if action mode is currently active.
   *
   * Проверяет, активен ли в данный момент режим действий.
   * @returns true if action mode is active / true, если режим действий активен
   */
  isAction(): boolean {
    return this.i('action').action.value
  }

  /**
   * Checks if action mode is possible.
   *
   * Проверяет, возможен ли режим действий.
   * @returns true if action mode is possible / true, если режим действий возможен
   */
  isActionPossible(): boolean {
    return this.i('action').isPossible()
  }

  /**
   * Checks if description is enabled.
   *
   * Проверяет, включено ли описание.
   * @returns true if description is present / true, если описание присутствует
   */
  isDescription(): boolean {
    return Boolean(
      this.props.description
      || this.props.actionDescription
      || (this.slots && 'description' in this.slots)
    )
  }

  /**
   * Checks if label is enabled.
   *
   * Проверяет, включена ли метка.
   * @returns true if label is present / true, если метка присутствует
   */
  isLabel(): boolean {
    return Boolean(
      this.props.label
      || this.props.actionLabel
      || (this.slots && ('default' in this.slots || 'label' in this.slots))
    )
  }

  /** Returns the button data / Возвращает данные кнопки */
  readonly backBinds = computed<BarsProps['buttonAttrs']>(
    () => this.initItem(
      toBinds(
        {
          icon: {
            icon: this.props.iconBack,
            iconActive: this.props.iconClose
          },
          iconDir: true,
          value: 'back',
          class: [
            this.i('windowClasses').get().close,
            this.i('motionTransformClasses').get().close
          ],
          onClick: this.onClickBack,
          ...AriaStaticInclude.label(this.i('text').close)
        },
        this.props.backButton
      ),
      'main-back'
    )
  )

  /** Returns the list of control buttons / Возвращает список кнопок управления */
  readonly barsBinds = computed<BarsProps['bars']>(() => this.initList(this.props.bars))

  /** Returns the list of active control buttons / Возвращает список активных кнопок управления */
  readonly actionBarsBinds = computed<BarsProps['bars']>(() => this.initList(this.props.actionBars, true))

  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает все параметры для кнопки.
   * @param item list of buttons / список параметров
   * @param key button identifier / идентификатор кнопки
   * @param isAction is action button / является ли кнопка действия
   * @returns button attributes / атрибуты кнопки
   */
  protected initItem(
    item: BarsProps['buttonAttrs'],
    key: string | number,
    isAction: boolean = false
  ): BarsProps['buttonAttrs'] {
    return {
      isSkeleton: this.props.isSkeleton,
      onClick: this.i('event').onClick,
      ...toBinds(
        this.props.buttonAttrs,
        item
      ),
      key: `${isAction ? 'action' : 'main'}Bar-${item?.value ?? key}`,
      icon: getBind(item?.icon, { animationShow: isAction }, 'icon')
    }
  }

  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает список параметров для кнопки.
   * @param bars list of buttons / список кнопок
   * @param isAction is action button / является ли кнопка действия
   * @returns list of button attributes / список атрибутов кнопок
   */
  protected initList(
    bars?: BarsProps['bars'],
    isAction: boolean = false
  ): BarsProps['bars'] {
    if (bars) {
      return forEach(
        bars,
        (item, key) => this.initItem(item, key, isAction)
      ) as BarsProps['bars']
    }

    return undefined
  }

  /**
   * Click handler for the "back" button.
   *
   * Обработчик клика по кнопке «назад»: закрывает action-режим и проксирует событие.
   * @param event native mouse event / нативное событие мыши
   * @param options event click options / параметры клика события
   */
  protected readonly onClickBack = (
    event: MouseEvent,
    options?: EventClickValue
  ): void => {
    if (options?.value === 'back') {
      this.i('action').close()
    }

    this.i('event').onClick(event, options)
  }
}
