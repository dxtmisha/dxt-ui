import { ref, watch, type Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { DescriptionInclude } from '../../classes/DescriptionInclude'
import { EventClickInclude } from '../../classes/EventClickInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import {
  type MotionTransformEmits,
  MotionTransformInclude
} from '../MotionTransform'
import { AccordionHead } from './AccordionHead'

import type { AccordionProps } from './props'
import type {
  AccordionComponents,
  AccordionEmits,
  AccordionSlots
} from './types'

/** Accordion dependency constructors type / Тип конструкторов зависимостей Accordion */
export type AccordionConstructors = {
  /** Event click constructor / Конструктор события клика */
  event: typeof EventClickInclude
  /** Header cell constructor / Конструктор ячейки заголовка */
  head: typeof AccordionHead
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<boolean>
  /** Motion transform manager constructor / Конструктор менеджера анимации переходов */
  motionTransform: typeof MotionTransformInclude
}

/**
 * Class representing the core logic and state manager for the Accordion component.
 * It coordinates panel open/close states, transitions, accessibility identifiers,
 * dynamic cells, and reactive model updates.
 *
 * Класс, представляющий основную логику и менеджер состояния для компонента Accordion.
 * Координирует состояния открытия/закрытия панели, переходы анимации, идентификаторы
 * доступности, динамические ячейки и реактивные обновления модели.
 */
export class Accordion extends DesignLogicAbstract<
  HTMLDivElement,
  AccordionComponents,
  AccordionEmits,
  AccordionSlots,
  AccordionProps,
  AccordionConstructors
> {
  /** Open state reference / Ссылка на состояние открытия */
  readonly open: Ref<boolean> = ref<boolean>(Boolean(this.getOpenProp()))

  /** Cleanup function for open prop watcher / Функция очистки наблюдателя свойства open */
  protected watchStop?: () => void

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<AccordionConstructors> = {
    event: {
      item: EventClickInclude,
      parameters: () => [
        undefined,
        undefined,
        this.emits
      ]
    },
    head: {
      item: AccordionHead,
      parameters: () => [
        this.props,
        () => this.i('event')
      ]
    },
    model: {
      item: ModelInclude<boolean>,
      parameters: () => [
        'open',
        this.emits,
        this.open
      ]
    },
    motionTransform: {
      item: MotionTransformInclude,
      parameters: () => [
        () => ({
          open: this.getOpenProp(),
          clickOpen: this.props.cellAttrs?.disabled
            ? false
            : this.props.clickOpen,
          autoClose: this.props.autoClose,
          motionTransformAttrs: this.props.motionTransformAttrs
        }),
        this.naming,
        this.components,
        this.onEmitsTransform,
        () => {
          const head = this.i('head')
          const hasDescription = DescriptionInclude.is(this.props, this.slots)
            || Boolean(this.props.cellAttrs?.description)

          return {
            'adaptive': 'planeAlways',
            'inDom': true,
            'open': this.getOpenProp(),
            'section': true,

            ...AriaStaticInclude.labelledby(head.getLabelId()),
            ...AriaStaticInclude.describedby(hasDescription ? head.getDescriptionId() : undefined),

            'data-divider': this.props.divider ? 'divider' : undefined
          }
        }
      ]
    }
  }

  /**
   * Constructor for initializing Accordion properties and inclusion managers.
   *
   * Конструктор для инициализации свойств Accordion и включенных менеджеров.
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    props: Readonly<AccordionProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<AccordionComponents, AccordionProps>,
    slots?: AccordionSlots,
    emits?: ConstrEmit<AccordionEmits>,
    constructors?: Partial<AccordionConstructors>
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
   * Computed bindings for the element.
   *
   * Вычисляемые привязки для элемента.
   * @returns element bindings / привязки элемента
   */
  get binds(): ConstrBind {
    return this.i('model').getBinds()
  }

  /**
   * Returns bindings for the header cell.
   *
   * Возвращает привязки для ячейки заголовка.
   * @returns bindings object / объект привязок
   */
  get bindsCell(): ConstrBind {
    return this.i('head').binds
  }

  /**
   * Updates the open state based on props.
   *
   * Обновляет состояние открытия на основе свойств.
   */
  readonly update = (): void => {
    this.open.value = Boolean(this.getOpenProp())
  }

  /**
   * Dispatches MotionTransform events and synchronizes the open state.
   *
   * Диспетчеризирует события MotionTransform и синхронизирует состояние открытия.
   * @param type event name / название события
   * @param args event arguments / аргументы события
   */
  readonly onEmitsTransform: ConstrEmit<MotionTransformEmits> = (
    type: keyof MotionTransformEmits,
    ...args: unknown[]
  ): void => {
    if (type === 'transform') {
      const [event, options] = args as MotionTransformEmits['transform']

      if (typeof options?.open === 'boolean') {
        this.open.value = options.open
      }

      this.emits?.('transform', event, options)
    } else if (type === 'transformLite') {
      const [options] = args as MotionTransformEmits['transformLite']

      if (typeof options?.open === 'boolean') {
        this.open.value = options.open
      }

      this.emits?.('transformLite', options)
    } else if (type === 'update:open') {
      const [value] = args as MotionTransformEmits['update:open']
      this.emits?.('update:open', value)
    } else if (type === 'update:modelOpen') {
      const [value] = args as MotionTransformEmits['update:modelOpen']
      this.emits?.('update:modelOpen', value)
    }
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  protected override readonly onMounted = (): void => {
    this.resetWatch()
    this.watchStop = watch(() => this.getOpenProp(), this.update)
    this.update()
  }

  /**
   * Cleanup lifecycle watchers on unmount.
   *
   * Очистка наблюдателей жизненного цикла при размонтировании.
   */
  protected override readonly onUnmounted = (): void => {
    this.resetWatch()
  }

  /**
   * Resolves the incoming open state across open and modelOpen props.
   *
   * Разрешает входное состояние открытия с учётом свойств open и modelOpen.
   * @returns resolved open flag or undefined / разрешённый флаг открытия или undefined
   */
  protected getOpenProp(): boolean | undefined {
    if (
      this.props.open === undefined
      && this.props.modelOpen === undefined
    ) {
      return undefined
    }

    return Boolean(this.props.open || this.props.modelOpen)
  }

  /**
   * Stops and resets the active open prop watcher.
   *
   * Останавливает и сбрасывает активный наблюдатель свойства open.
   */
  protected resetWatch(): void {
    this.watchStop?.()
    this.watchStop = undefined
  }
}
