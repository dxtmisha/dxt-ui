import { onMounted, ref, watch, type Ref, type ToRefs } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  getElementId
} from '@dxtmisha/functional'

import { ModelInclude } from '../../classes/ModelInclude'

import { ActionsInclude, type ActionsProps } from '../Actions'
import { BarsInclude, type BarsProps } from '../Bars'
import { WindowInclude, type WindowProps } from '../Window'

import type { ComponentIncludeExtra } from '../../types/componentInclude'
import type { ModalComponents, ModalEmits, ModalSlots } from './types'
import type { ModalProps } from './props'

/**
 * Abstract class representing the base logic and structure for a modal window component.
 * It coordinates and manages the sub-components: top/bottom bars (BarsInclude), action buttons (ActionsInclude), and the main window area (WindowInclude).
 *
 * Абстрактный класс, представляющий базовую логику и структуру для компонента модального окна.
 * Координирует и управляет подкомпонентами: верхними/нижними панелями (BarsInclude), кнопками действий (ActionsInclude) и основной областью окна (WindowInclude).
 */
export abstract class ModalAbstract {
  /** Instance for managing the core modal window container / Экземпляр для управления основным контейнером модального окна */
  readonly window: WindowInclude
  /** Instance for managing the modal header and footer bars / Экземпляр для управления панелями заголовка и подвала модального окна */
  readonly bars: BarsInclude
  /** Instance for managing action buttons or controls / Экземпляр для управления кнопками действий или элементами управления */
  readonly actions: ActionsInclude

  /** Open state reference / Ссылка на состояние открытия */
  readonly open = ref<boolean>(false)
  /** Model synchronization manager / Менеджер синхронизации модели */
  readonly model: ModelInclude<boolean>

  /**
   * Constructor for initializing all sub-components of the modal window.
   *
   * Конструктор для инициализации всех подкомпонентов модального окна.
   * @param props input data / входные данные
   * @param refs input data references / ссылки на входные данные
   * @param element element / элемент
   * @param classDesign class design / дизайн класса
   * @param className class name / название класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots slots / слоты
   * @param emits the function called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param extraWindow additional parameters for WindowInclude / дополнительные параметры для WindowInclude
   * @param extraBars additional parameters for BarsInclude / дополнительные параметры для BarsInclude
   * @param extraActions additional parameters for ActionsInclude / дополнительные параметры для ActionsInclude
   * @param constructors object with constructor classes / объект с классами конструкторов
   * @param constructors.WindowConstructor class for creating a window / класс для создания окна
   * @param constructors.BarsConstructor class for creating bars / класс для создания панелей
   * @param constructors.ActionsConstructor class for creating actions / класс для создания действий
   */
  constructor(
    protected readonly props: ModalProps,
    protected readonly refs: ToRefs<ModalProps>,
    protected readonly element: Ref<HTMLElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<ModalComponents, ModalProps>,
    protected readonly slots?: ModalSlots,
    protected readonly emits?: ConstrEmit<ModalEmits>,
    protected readonly extraWindow?: () => ComponentIncludeExtra<WindowProps>,
    protected readonly extraBars?: () => ComponentIncludeExtra<BarsProps>,
    protected readonly extraActions?: () => ComponentIncludeExtra<ActionsProps>,
    constructors: {
      ActionsConstructor?: typeof ActionsInclude
      BarsConstructor?: typeof BarsInclude
      ModelIncludeConstructor?: typeof ModelInclude
      WindowConstructor?: typeof WindowInclude
    } = {}
  ) {
    const {
      ActionsConstructor = ActionsInclude,
      BarsConstructor = BarsInclude,
      ModelIncludeConstructor = ModelInclude,
      WindowConstructor = WindowInclude
    } = constructors

    const labelId: string = getElementId()
    const descriptionId: string = getElementId()

    this.model = new ModelIncludeConstructor('open', this.emits, this.open)

    this.window = new WindowConstructor(
      className,
      props,
      components,
      () => ({
        open: this.open.value,
        ...this.getExtraWindow()
      }),
      undefined,
      emits,
      labelId,
      descriptionId,
      this.model
    )

    this.bars = new BarsConstructor(
      className,
      props,
      components,
      () => this.getExtraBars(),
      undefined,
      emits,
      labelId,
      descriptionId
    )

    this.actions = new ActionsConstructor(
      className,
      props,
      components,
      () => this.getExtraActions(),
      undefined,
      emits
    )

    onMounted(() => {
      watch([refs.open], () => {
        this.open.value = Boolean(this.props.open)
      }, { immediate: true })
    })
  }

  /**
   * Retrieves additional properties for the window sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента окна.
   * @returns object with additional window properties / объект с дополнительными свойствами окна
   */
  protected getExtraWindow(): ComponentIncludeExtra<WindowProps> {
    return this.extraWindow?.()
  }

  /**
   * Retrieves additional properties for the bars sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента панелей.
   * @returns object with additional bars properties / объект с дополнительными свойствами панелей
   */
  protected getExtraBars(): ComponentIncludeExtra<BarsProps> {
    return this.extraBars?.()
  }

  /**
   * Retrieves additional properties for the actions sub-component.
   *
   * Возвращает дополнительные свойства для подкомпонента действий.
   * @returns object with additional actions properties / объект с дополнительными свойствами действий
   */
  protected getExtraActions(): ComponentIncludeExtra<ActionsProps> {
    return this.extraActions?.()
  }
}
