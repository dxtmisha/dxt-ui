import { computed, onMounted, onUnmounted, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrClassObject, type ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ScrollbarInclude } from '../Scrollbar/ScrollbarInclude'
import { ImageInclude } from '../Image/ImageInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'

import { WindowClient } from './WindowClient'
import { WindowHook } from './WindowHook'

import { WindowClasses } from './WindowClasses'
import { WindowElement } from './WindowElement'

import { WindowStatus } from './WindowStatus'
import { WindowPersistent } from './WindowPersistent'
import { WindowFlash } from './WindowFlash'
import { WindowCoordinates } from './WindowCoordinates'
import { WindowPosition } from './WindowPosition'
import { WindowOrigin } from './WindowOrigin'
import { WindowStatic } from './WindowStatic'
import { WindowEmit } from './WindowEmit'

import { WindowStyles } from './WindowStyles'
import { WindowOpen } from './WindowOpen'
import { WindowVerification } from './WindowVerification'
import { WindowEvent } from './WindowEvent'
import { WindowEsc } from './WindowEsc'

import type { WindowControlItem } from './basicTypes'
import type { WindowComponents, WindowEmits, WindowSlots } from './types'
import type { WindowPropsBasic } from './props'

/**
 * Main Window class that manages all window-related functionality including positioning,
 * events, styles, animations, and component integrations. This class serves as the central
 * coordinator for window operations in the design system.
 *
 * Основной класс Window, который управляет всей функциональностью окон, включая позиционирование,
 * события, стили, анимации и интеграции компонентов. Этот класс служит центральным координатором
 * для операций с окнами в дизайн-системе.
 */
export class Window {
  /** Client instance for window management/ Экземпляр клиента для управления окном */
  readonly client: WindowClient
  /** Hook instance for window events/ Экземпляр хука для событий окна */
  readonly hook: WindowHook

  /** Class manager for window styles/ Менеджер классов для стилей окна */
  readonly classes: WindowClasses
  /** Element manager for window DOM element/ Менеджер элементов для DOM элемента окна */
  readonly element: WindowElement
  readonly tabIndex: TabIndexInclude

  /** Status manager for window state/ Менеджер статуса для состояния окна */
  readonly status: WindowStatus
  /** Persistent manager for window data/ Менеджер постоянных данных для окна */
  readonly persistent: WindowPersistent
  /** Flash manager for window animations/ Менеджер анимаций для окна */
  readonly flash: WindowFlash
  /** Coordinates manager for window positioning/ Менеджер координат для позиционирования окна */
  readonly coordinates: WindowCoordinates
  /** Position manager for window placement/ Менеджер позиции для размещения окна */
  readonly position: WindowPosition
  /** Origin manager for window transformations/ Менеджер начальной точки для трансформаций окна */
  readonly origin: WindowOrigin
  /** Static mode manager for window behavior/ Менеджер статического режима для поведения окна */
  readonly staticMode: WindowStatic
  /** Emit manager for window events/ Менеджер событий для окна */
  readonly emit: WindowEmit

  /** Styles manager for window appearance/ Менеджер стилей для внешнего вида окна */
  readonly styles: WindowStyles
  /** Open manager for window visibility/ Менеджер открытия для видимости окна */
  readonly open: WindowOpen
  /** Verification manager for window state validation/ Менеджер проверки для валидации состояния окна */
  readonly verification: WindowVerification
  /** Event manager for window interactions/ Менеджер событий для взаимодействий с окном */
  readonly event: WindowEvent

  /** Scrollbar manager for window content/ Менеджер скроллбара для содержимого окна */
  readonly scrollbar: ScrollbarInclude
  /** Image manager for window content/ Менеджер изображений для содержимого окна */
  readonly image: ImageInclude

  /** Escape key manager for window closing/ Менеджер клавиши Escape для закрытия окна */
  readonly esc: WindowEsc

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
    protected readonly props: WindowPropsBasic,
    protected readonly refs: ToRefs<WindowPropsBasic>,
    element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<WindowComponents, WindowPropsBasic>,
    protected readonly slots?: WindowSlots,
    protected readonly emits?: ConstrEmit<WindowEmits>
  ) {
    this.hook = new WindowHook(props)

    this.classes = new WindowClasses(className)
    this.element = new WindowElement(this.classes, element)
    this.client = new WindowClient(this.element)
    this.tabIndex = new TabIndexInclude(
      () => this.element.getBody()
    )

    this.status = new WindowStatus(this.element)
    this.persistent = new WindowPersistent(props, this.classes, this.element)
    this.flash = new WindowFlash(props, this.classes)
    this.coordinates = new WindowCoordinates(this.classes, this.element)
    this.position = new WindowPosition(props, this.client, this.element, this.coordinates)
    this.origin = new WindowOrigin(this.client, this.element, this.position)
    this.staticMode = new WindowStatic(props, refs, this.element)
    this.emit = new WindowEmit(this.classes, this.element, emits)

    this.styles = new WindowStyles(
      this.element,
      this.coordinates,
      this.position,
      this.origin,
      className
    )
    this.open = new WindowOpen(
      props,
      this.client,
      this.hook,
      this.element,
      this.tabIndex,
      this.status,
      this.flash,
      this.coordinates,
      this.position,
      this.origin,
      this.emit,
      this.styles
    )

    this.verification = new WindowVerification(
      props,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open
    )
    this.event = new WindowEvent(
      props,
      this.status,
      this.client,
      this.flash,
      this.open,
      this.verification
    )

    this.scrollbar = new ScrollbarInclude(
      props,
      className,
      components,
      emits
    )
    this.image = new ImageInclude(
      props,
      components,
      emits
    )
    this.esc = new WindowEsc(
      this.open.item,
      () => this.open.close(),
      () => !this.props.persistent
    )

    new ModelInclude<boolean>('open', this.emits, this.open.item)

    onMounted(() => {
      watch([refs.open], () => this.open.set(props.open), { immediate: true })
    })
    onUnmounted(this.stop)
  }

  /** Returns data for managing slot data/ Возвращает данные для управления данными слотами */
  readonly slotData = computed<WindowControlItem>(() => ({
    classesWindow: this.classes.list,
    class: this.classes.list.controlId,
    open: this.open.item,
    onclick: this.event.onClick,
    oncontextmenu: this.event.onContextmenu,
    binds: {
      class: this.classes.list.controlId,
      onclick: this.event.onClick,
      oncontextmenu: this.event.onContextmenu,
      ...AriaStaticInclude.control(
        this.classes.getControlId(),
        this.classes.getId(),
        this.props.ariaHaspopup,
        this.open.item.value
      )
    }
  }))

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   */
  readonly classesList = computed<ConstrClassObject>(() => ({
    [this.classes.getId()]: true,
    [`${this.className}--staticMode`]: this.staticMode.item.value
  }))

  /**
   * Restores the data to its previous state.
   *
   * Восстанавливает данные в прежнее состояние.
   */
  protected readonly stop = (): void => {
    this.event.stop()
    this.staticMode.stop()
  }
}
