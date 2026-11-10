import { ref, watch, type Ref } from 'vue'
import {
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  type DesignName,
  DesignLogicAbstract,
  executeFunctionRef,
  getElementId
} from '@dxtmisha/functional'

import { ActionsInclude, type ActionsProps } from '../Actions'
import { BarsInclude, type BarsProps } from '../Bars'
import { ModelInclude } from '../../classes/ModelInclude'
import { WindowInclude, type WindowProps } from '../Window'

import type { ComponentIncludeExtra } from '../../types/componentInclude'
import type { ModalComponents, ModalEmits, ModalSlots } from './types'
import type { ModalProps } from './props'

/** Modal dependency constructors type / Тип конструкторов зависимостей Modal */
export type ModalConstructors = {
  /** Actions include constructor / Конструктор кнопок действий */
  actions: typeof ActionsInclude
  /** Bars include constructor / Конструктор панелей заголовка и подвала */
  bars: typeof BarsInclude
  /** Model include constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude
  /** Window include constructor / Конструктор основного окна */
  window: typeof WindowInclude
}

/** Legacy constructors interface for backward compatibility / Устаревший интерфейс конструкторов для обратной совместимости */
export type ModalLegacyConstructors = {
  ActionsConstructor?: typeof ActionsInclude
  BarsConstructor?: typeof BarsInclude
  ModelIncludeConstructor?: typeof ModelInclude
  WindowConstructor?: typeof WindowInclude
}

/**
 * Normalizes constructor overrides for ModalAbstract.
 *
 * Нормализует переопределения конструкторов для ModalAbstract.
 * @param constructors constructor overrides object / объект переопределений конструкторов
 * @returns normalized constructors / нормализованные конструкторы
 */
function normalizeModalConstructors<T extends ModalConstructors>(
  constructors?: Partial<T> | ModalLegacyConstructors | Record<string, any>
): Partial<T> | undefined {
  if (!constructors) {
    return undefined
  }

  const result: Record<string, any> = { ...constructors }

  if ('ActionsConstructor' in constructors && !('actions' in result)) {
    result.actions = constructors.ActionsConstructor
  }
  if ('BarsConstructor' in constructors && !('bars' in result)) {
    result.bars = constructors.BarsConstructor
  }
  if ('ModelIncludeConstructor' in constructors && !('model' in result)) {
    result.model = constructors.ModelIncludeConstructor
  }
  if ('WindowConstructor' in constructors && !('window' in result)) {
    result.window = constructors.WindowConstructor
  }

  return result as Partial<T>
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

  /** Open state reference / Ссылка на состояние открытия */
  readonly open = ref<boolean>(Boolean(this.props.open))

  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ModalConstructors> = {
    actions: {
      item: ActionsInclude,
      parameters: () => [
        this.naming,
        this.props,
        this.components,
        () => executeFunctionRef(this.extraActionsCallback),
        undefined,
        this.emits
      ]
    },
    bars: {
      item: BarsInclude,
      parameters: () => [
        this.naming,
        this.props,
        this.components,
        () => executeFunctionRef(this.extraBars),
        undefined,
        this.emits,
        this.labelId,
        this.descriptionId
      ]
    },
    model: {
      item: ModelInclude,
      parameters: () => [
        'open',
        this.emits,
        this.open
      ]
    },
    window: {
      item: WindowInclude,
      parameters: () => [
        this.naming,
        this.props,
        this.components,
        () => ({
          open: this.open.value,
          ...executeFunctionRef(this.extraWindow)
        }),
        undefined,
        this.emits,
        this.labelId,
        this.descriptionId,
        this.model
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
   * @param extraWindow additional parameters for WindowInclude / дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude / дополнительные параметры для BarsInclude
   * @param extraActionsCallback additional parameters for ActionsInclude / дополнительные параметры для ActionsInclude
   * @param constructors object with constructor classes / объект с классами конструкторов
   */
  protected constructor(
    props: ModalProps,
    element: Ref<HTMLElement | undefined>,
    naming: DesignName,
    components?: DesignComp<ModalComponents, ModalProps>,
    slots?: ModalSlots,
    emits?: ConstrEmit<ModalEmits>,
    protected readonly extraWindow?: () => ComponentIncludeExtra<WindowProps>,
    protected readonly extraBars?: () => ComponentIncludeExtra<BarsProps>,
    protected readonly extraActionsCallback?: () => ComponentIncludeExtra<ActionsProps>,
    constructors?: Partial<ModalConstructors> | ModalLegacyConstructors
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      normalizeModalConstructors(constructors)
    )
  }

  /**
   * Instance for managing the core modal window container.
   *
   * Экземпляр для управления основным контейнером модального окна.
   * @returns window include instance / экземпляр включения окна
   */
  get window(): WindowInclude {
    return this.i('window')
  }

  /**
   * Instance for managing the modal header and footer bars.
   *
   * Экземпляр для управления панелями заголовка и подвала модального окна.
   * @returns bars include instance / экземпляр включения панелей
   */
  get bars(): BarsInclude {
    return this.i('bars')
  }

  /**
   * Instance for managing action buttons or controls.
   *
   * Экземпляр для управления кнопками действий или элементами управления.
   * @returns actions include instance / экземпляр включения действий
   */
  get actions(): ActionsInclude {
    return this.i('actions')
  }

  /**
   * Model synchronization manager.
   *
   * Менеджер синхронизации модели.
   * @returns model include instance / экземпляр включения модели
   */
  get model(): ModelInclude<boolean> {
    return this.i('model') as unknown as ModelInclude<boolean>
  }

  /**
   * Setup lifecycle listeners and watchers on mount.
   *
   * Настройка слушателей жизненного цикла и наблюдателей при монтировании.
   */
  protected override readonly onMounted = (): void => {
    watch(() => this.props.open, this.update)
    this.update()
  }

  /**
   * Updates the open state based on props.
   *
   * Обновляет состояние открытия на основе свойств.
   */
  readonly update = (): void => {
    this.open.value = Boolean(this.props.open)
  }
}
