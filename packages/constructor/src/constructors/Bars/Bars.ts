import { computed, reactive, type Ref, type ToRefs } from 'vue'
import { type ConstrEmit, DesignComp, forEach, getBind, toBind } from '@dxtmisha/functional'

import { LabelInclude } from '../../classes/LabelInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'

import { WindowClassesInclude } from '../Window'
import { MotionTransformClassesInclude } from '../MotionTransform'
import { SkeletonInclude } from '../Skeleton'
import { BarsAction } from './BarsAction'

import type { BarsComponents, BarsEmits, BarsSlots } from './types'
import type { BarsProps } from './props'
import type { EventClickValue } from '../../types/eventClickTypes'

/**
 * Bars
 */
export class Bars {
  /** Управление action‑режимом */
  readonly action: BarsAction

  readonly label: LabelInclude
  readonly description: DescriptionInclude

  readonly event: EventClickInclude

  /** Helper for Window CSS classes/ Вспомогательный класс для CSS‑классов Window */
  readonly windowClasses: WindowClassesInclude
  /** Helper for MotionTransform CSS classes/ Вспомогательный класс для CSS‑классов MotionTransform */
  readonly motionTransformClasses: MotionTransformClassesInclude
  /** Подключение скелетона для текста/описания */
  readonly skeleton: SkeletonInclude

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
   */
  constructor(
    protected readonly props: BarsProps,
    protected readonly refs: ToRefs<BarsProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<BarsComponents, BarsProps>,
    protected readonly slots?: BarsSlots,
    protected readonly emits?: ConstrEmit<BarsEmits>
  ) {
    const skeleton = new SkeletonInclude(this.props, this.classDesign, ['classTextVariant'])

    this.action = new BarsAction(this.props, this.refs)

    this.label = new LabelInclude(this.labelBinds,
      className,
      undefined,
      slots,
      undefined,
      undefined,
      undefined,
      skeleton
    )
    this.description = new DescriptionInclude(this.descriptionBinds, className, slots, skeleton)

    this.event = new EventClickInclude(undefined, undefined, emits)

    this.windowClasses = new WindowClassesInclude(classDesign)
    this.motionTransformClasses = new MotionTransformClassesInclude(classDesign)
    this.skeleton = skeleton

    new ModelInclude('action', this.emits, this.action.action)
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
          onClick: this.onClickBack
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
  readonly backLabel = computed<string | number | undefined>(() => this.action.is.value ? undefined : this.backBinds.value?.label)

  /** Binds for label text/ Привязки для текста метки */
  protected readonly labelBinds = reactive({
    label: computed(() => this.action.is.value ? this.props.actionLabel : this.props.label)
  })

  /** Binds for description text/ Привязки для текста описания */
  protected readonly descriptionBinds = reactive({
    description: computed(() => this.action.is.value ? this.props.actionDescription : this.props.description)
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
