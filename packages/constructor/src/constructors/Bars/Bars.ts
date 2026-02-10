import { computed, reactive, type Ref, type ToRefs } from 'vue'
import { type ConstrClass, type ConstrEmit, type DesignComp, forEach, getBind, toBind } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { LabelInclude } from '../../classes/LabelInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { BarsAction } from './BarsAction'
import { WindowClassesInclude } from '../Window'
import { MotionTransformClassesInclude } from '../MotionTransform'
import { SkeletonInclude } from '../Skeleton'
import { TextInclude } from '../../classes/TextInclude'

import type { BarsComponents, BarsEmits, BarsSlots } from './types'
import type { BarsProps } from './props'
import type { EventClickValue } from '../../types/eventClickTypes'

/**
 * Bars
 */
export class Bars {
  /** Управление action‑режимом */
  readonly action: BarsAction

  /** Label object/ Объект метки */
  readonly label: LabelInclude
  /** Description object/ Объект описания */
  readonly description: DescriptionInclude

  /** Event object/ Объект события */
  readonly event: EventClickInclude

  /** Helper for Window CSS classes/ Вспомогательный класс для CSS‑классов Window */
  readonly windowClasses: WindowClassesInclude
  /** Helper for MotionTransform CSS classes/ Вспомогательный класс для CSS‑классов MotionTransform */
  readonly motionTransformClasses: MotionTransformClassesInclude
  /** Подключение скелетона для текста/описания */
  readonly skeleton: SkeletonInclude

  /** Text object/ Объект текста */
  readonly text: TextInclude

  /**
   * Constructor
   * @param props input data/ входные данные
   * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
   * @param element input element/ элемент ввода
   * @param classDesign design name/ название дизайна
   * @param className class name/ название класса
   * @param components object for working with components/ объект для работы с компонентами
   * @param slots object for working with slots/ объект для работы со слотами
   * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
   * @param constructors object with classes/ объект с классами
   * @param constructors.BarsActionConstructor class for managing action mode/ класс для управления action-режимом
   * @param constructors.DescriptionConstructor class for creating a description/ класс для создания описания
   * @param constructors.EventConstructor class for creating an event/ класс для создания события
   * @param constructors.LabelConstructor class for creating a label/ класс для создания метки
   * @param constructors.ModelConstructor class for working with models/ класс для работы с моделями
   * @param constructors.MotionTransformClassesConstructor helper class for MotionTransform CSS classes/ вспомогательный класс для CSS-классов MotionTransform
   * @param constructors.SkeletonConstructor class for creating a skeleton/ класс для создания скелета
   * @param constructors.TextConstructor class for creating text/ класс для создания текста
   * @param constructors.WindowClassesConstructor helper class for Window CSS classes/ вспомогательный класс для CSS-классов Window
   */
  constructor(
    protected readonly props: BarsProps,
    protected readonly refs: ToRefs<BarsProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BarsComponents, BarsProps>,
    protected readonly slots?: BarsSlots,
    protected readonly emits?: ConstrEmit<BarsEmits>,
    constructors?: {
      BarsActionConstructor?: typeof BarsAction
      DescriptionConstructor?: typeof DescriptionInclude
      EventConstructor?: typeof EventClickInclude
      LabelConstructor?: typeof LabelInclude
      ModelConstructor?: typeof ModelInclude
      MotionTransformClassesConstructor?: typeof MotionTransformClassesInclude
      SkeletonConstructor?: typeof SkeletonInclude
      TextConstructor?: typeof TextInclude
      WindowClassesConstructor?: typeof WindowClassesInclude
    }
  ) {
    const {
      BarsActionConstructor = BarsAction,
      DescriptionConstructor = DescriptionInclude,
      EventConstructor = EventClickInclude,
      LabelConstructor = LabelInclude,
      ModelConstructor = ModelInclude,
      MotionTransformClassesConstructor = MotionTransformClassesInclude,
      SkeletonConstructor = SkeletonInclude,
      TextConstructor = TextInclude,
      WindowClassesConstructor = WindowClassesInclude
    } = constructors ?? {}

    const skeleton = new SkeletonConstructor(this.props, this.classDesign, ['classTextVariant'])

    this.action = new BarsActionConstructor(this.props, this.refs)

    this.label = new LabelConstructor(this.labelBinds,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      skeleton
    )
    this.description = new DescriptionConstructor(this.descriptionBinds, className, slots, skeleton)

    this.event = new EventConstructor(undefined, undefined, emits)

    this.windowClasses = new WindowClassesConstructor(classDesign)
    this.motionTransformClasses = new MotionTransformClassesConstructor(classDesign)
    this.skeleton = skeleton
    this.text = new TextConstructor(this.props)

    new ModelConstructor('action', this.emits, this.action.action)
  }

  /** Returns the button data/ Возвращает данные кнопки */
  readonly backBinds = computed<BarsProps['buttonAttrs']>(
    () => this.initItem(
      toBind(
        {
          icon: {
            icon: this.props.iconBack,
            iconActive: this.props.iconClose
          },
          iconDir: true,
          value: 'back',
          class: [
            this.windowClasses.get().close,
            this.motionTransformClasses.get().close
          ],
          onClick: this.onClickBack,
          ...AriaStaticInclude.label(this.text.close.value)
        },
        this.props.backButton ?? {}
      ),
      'main-back'
    )
  )

  /** Returns the list of control buttons/ Возвращает список кнопок управления */
  readonly barsBinds = computed<BarsProps['bars']>(() => this.initList(this.props.bars))

  /**
   * Returns the list of active control buttons/
   * Возвращает список активных кнопок управления
   */
  readonly actionBarsBinds = computed<BarsProps['bars']>(() => this.initList(this.props.actionBars, true))

  /** Returns the button name/ Возвращает название кнопки */
  readonly backLabel = computed<string | number | undefined>(() => this.action.action.value ? undefined : this.backBinds.value?.label)

  /**
   * Values for the class.
   *
   * Значения для класса.
   */
  readonly classes = computed<ConstrClass>(() => {
    return {
      [`${this.className}--action`]: this.action.action.value
    }
  })

  /**
   * Returns the value for the aria-live property.
   *
   * Возвращает значение для свойства aria-live.
   */
  readonly ariaLive = computed<'polite' | 'off' | undefined>(() => {
    if (this.action.isPossible.value) {
      return 'polite'
    }

    return undefined
  })

  /** Binds for label text/ Привязки для текста метки */
  protected readonly labelBinds = reactive({
    label: computed(() => this.action.action.value ? this.props.actionLabel : this.props.label),
    labelId: computed(() => this.props.labelId)
  })

  /** Binds for description text/ Привязки для текста описания */
  protected readonly descriptionBinds = reactive({
    description: computed(() => this.action.action.value ? this.props.actionDescription : this.props.description),
    descriptionId: computed(() => this.props.descriptionId)
  })

  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает все параметры для кнопки.
   * @param item list of buttons/ список параметры
   * @param key button identifier/ идентификатор кнопки
   * @param isAction is action button/ является ли кнопка действия
   */
  protected initItem(
    item: BarsProps['buttonAttrs'],
    key: string | number,
    isAction: boolean = false
  ): BarsProps['buttonAttrs'] {
    return {
      isSkeleton: this.props.isSkeleton,
      onClick: this.event.onClick,
      ...toBind(
        this.props.buttonAttrs ?? {},
        item ?? {}
      ),
      key: `${isAction ? 'action' : ''}Bar-${item?.value ?? key}`,
      icon: getBind(item?.icon, { animationShow: isAction }, 'icon')
    }
  }

  /**
   * Prepares all parameters for the button.
   *
   * Подготавливает список параметры для кнопки.
   * @param bars list of buttons/ >список кнопок
   * @param isAction is action button/ является ли кнопка действия
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
   * Click handler for the "back" button
   *
   * Обработчик клика по кнопке «назад»: закрывает action‑режим и проксирует событие.
   */
  protected readonly onClickBack = (
    event: MouseEvent,
    options?: EventClickValue
  ) => {
    if (options?.value === 'back') {
      this.action.close()
    }

    this.event.onClick(event, options)
  }
}
