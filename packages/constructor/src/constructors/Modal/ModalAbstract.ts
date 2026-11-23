import { ref, watch, type Ref, type WatchStopHandle } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract,
  executeFunctionRef,
  getElementId,
  isFilled
} from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import { ActionsInclude, type ActionsProps } from '../Actions'
import { BarsInclude, type BarsProps } from '../Bars'
import { WindowInclude, type WindowProps } from '../Window'

import type { ComponentIncludeExtra } from '../../types/componentInclude'
import type { ModalProps } from './props'
import type { ModalComponents, ModalEmits, ModalSlots } from './types'

/** Modal dependency constructors type / Тип конструкторов зависимостей Modal */
export type ModalConstructors = {
  /** Actions include constructor / Конструктор кнопок действий */
  actions: typeof ActionsInclude
  /** Bars include constructor / Конструктор панелей заголовка и подвала */
  bars: typeof BarsInclude
  /** Model include constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude<boolean>
  /** Window include constructor / Конструктор основного окна */
  window: typeof WindowInclude
}

/**
 * Abstract class representing the base logic and structure for a modal window component.
 * It coordinates and manages the sub-components: top/bottom bars (BarsInclude), action buttons (ActionsInclude), and the main window area (WindowInclude).
 *
 * Абстрактный класс, представляющий базовую логику и структуру для компонента модального окна.
 * Координирует и управляет подкомпонентами: верхними/нижними панелями (BarsInclude), кнопками действий (ActionsInclude) и основной областью окна (WindowInclude).
 */
export abstract class ModalAbstract extends DesignLogicAbstract<
  HTMLElement,
  ModalComponents,
  ModalEmits,
  ModalSlots,
  ModalProps,
  ModalConstructors
> {
  /** Label identifier for ARIA / Идентификатор метки для ARIA */
  readonly labelId: string = getElementId()
  /** Description identifier for ARIA / Идентификатор описания для ARIA */
  readonly descriptionId: string = getElementId()

  /** Watcher handle for open/modelOpen synchronization / Дескриптор наблюдателя за синхронизацией open/modelOpen */
  protected stopOpenWatch?: WatchStopHandle

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ModalConstructors> = {
    actions: {
      item: ActionsInclude,
      canCreate: () => {
        if (this.props.actionsHide) {
          return false
        }

        const extraActions = executeFunctionRef(
          executeFunctionRef(this.extraActionsCallback)
        )

        return Boolean(
          isFilled(this.props.actionsList)
          || isFilled(this.props.actionsSecondary)
          || isFilled(this.props.actionsAttrs?.list)
          || isFilled(this.props.actionsAttrs?.listSecondary)
          || isFilled(extraActions?.list)
          || isFilled(extraActions?.listSecondary)
        )
      },
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => executeFunctionRef(this.extraActionsCallback),
        undefined,
        this.emits
      ]
    },
    bars: {
      item: BarsInclude,
      canCreate: () => Boolean(this.extraBars) || BarsInclude.is(this.props),
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => executeFunctionRef(this.extraBars),
        undefined,
        this.emits,
        this.labelId,
        this.descriptionId
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
    window: {
      item: WindowInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          open: this.open.value,
          ...executeFunctionRef(this.extraWindow)
        }),
        undefined,
        this.emits,
        this.labelId,
        this.descriptionId,
        () => this.i('model')
      ]
    }
  }

  /**
   * Constructor for initializing all sub-components of the modal window.
   *
   * Конструктор для инициализации всех подкомпонентов модального окна.
   * @param props input data / входные данные
   * @param element element / элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots slots / слоты
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with constructor classes / объект с классами конструкторов
   * @param extraWindow additional parameters for WindowInclude / дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude / дополнительные параметры для BarsInclude
   * @param extraActionsCallback additional parameters for ActionsInclude / дополнительные параметры для ActionsInclude
   */
  protected constructor(
    props: Readonly<ModalProps>,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ModalComponents, ModalProps>,
    slots?: ModalSlots,
    emits?: ConstrEmit<ModalEmits>,
    constructors?: Partial<ModalConstructors>,
    protected readonly extraWindow?: () => ComponentIncludeExtra<WindowProps>,
    protected readonly extraBars?: () => ComponentIncludeExtra<BarsProps>,
    protected readonly extraActionsCallback?: () => ComponentIncludeExtra<ActionsProps>
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

  /** Open state reference / Ссылка на состояние открытия */
  readonly open = ref<boolean>(this.getOpenProp())

  /**
   * Updates the open state based on incoming open/modelOpen props.
   *
   * Обновляет состояние открытия на основе входящих свойств open/modelOpen.
   */
  readonly update = (): void => {
    this.open.value = this.getOpenProp()
  }

  /**
   * Resolves the incoming open state across open and modelOpen props.
   *
   * Разрешает входное состояние открытия с учётом свойств open и modelOpen.
   * @returns resolved open state / разрешённое состояние открытия
   */
  protected getOpenProp(): boolean {
    return Boolean(this.props.open || this.props.modelOpen)
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  protected override readonly onMounted = (): void => {
    this.stopOpenWatch?.()
    this.stopOpenWatch = watch(() => this.getOpenProp(), this.update)
    this.update()
  }

  /**
   * Cleanup lifecycle watchers on unmount.
   *
   * Очистка наблюдателей жизненного цикла при размонтировании.
   */
  protected override readonly onUnmounted = (): void => {
    this.stopOpenWatch?.()
    this.stopOpenWatch = undefined
  }
}
