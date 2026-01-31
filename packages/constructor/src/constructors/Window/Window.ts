import { computed, onMounted, onUnmounted, type Ref, type ToRefs, watch } from 'vue'
import { type ConstrClassObject, type ConstrEmit, type DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ScrollbarInclude } from '../Scrollbar/ScrollbarInclude'
import { ImageInclude } from '../Image/ImageInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { TextInclude } from '../../classes/TextInclude'

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
import { WindowHidden } from './WindowHidden'

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

  readonly text: TextInclude

  /** Hidden manager for hiding elements outside the window when open/ Менеджер скрытия элементов вне окна при открытии */
  readonly hidden: WindowHidden

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
   * @param WindowClassesConstructor class for working with window classes/ класс для работы с классами окна
   * @param WindowClientConstructor class for working with window client/ класс для работы с клиентом окна
   * @param WindowCoordinatesConstructor class for working with coordinates/ класс для работы с координатами
   * @param WindowElementConstructor class for working with window elements/ класс для работы с элементами окна
   * @param WindowEmitConstructor class for working with emits/ класс для работы с событиями
   * @param WindowEscConstructor class for working with escape key/ класс для работы с клавишей Escape
   * @param WindowEventConstructor class for working with events/ класс для работы с событиями
   * @param WindowFlashConstructor class for working with flash animation/ класс для работы с анимацией вспышки
   * @param WindowHiddenConstructor class for working with hidden elements/ класс для работы со скрытыми элементами
   * @param WindowHookConstructor class for working with window hooks/ класс для работы с хуками окна
   * @param WindowOpenConstructor class for working with open state/ класс для работы с состоянием открытия
   * @param WindowOriginConstructor class for working with origin/ класс для работы с точкой начала
   * @param WindowPersistentConstructor class for working with persistent state/ класс для работы с постоянным состоянием
   * @param WindowPositionConstructor class for working with position/ класс для работы с позицией
   * @param WindowStaticConstructor class for working with static mode/ класс для работы со статическим режимом
   * @param WindowStatusConstructor class for working with window status/ класс для работы со статусом окна
   * @param WindowStylesConstructor class for working with styles/ класс для работы со стилями
   * @param WindowVerificationConstructor class for working with verification/ класс для работы с проверкой
   * @param ImageConstructor class for working with image/ класс для работы с изображением
   * @param ModelConstructor class for working with model/ класс для работы с моделью
   * @param ScrollbarConstructor class for working with scrollbar/ класс для работы со скроллбаром
   * @param TabIndexConstructor class for working with tab index/ класс для работы с индексом табуляции
   * @param TextConstructor class for working with text/ класс для работы с текстом
   */
  constructor(
    protected readonly props: WindowPropsBasic,
    protected readonly refs: ToRefs<WindowPropsBasic>,
    element: Ref<HTMLDivElement | undefined>,
    protected readonly classDesign: string,
    protected readonly className: string,
    protected readonly components?: DesignComp<WindowComponents, WindowPropsBasic>,
    protected readonly slots?: WindowSlots,
    protected readonly emits?: ConstrEmit<WindowEmits>,
    protected readonly WindowClassesConstructor: typeof WindowClasses = WindowClasses,
    protected readonly WindowClientConstructor: typeof WindowClient = WindowClient,
    protected readonly WindowCoordinatesConstructor: typeof WindowCoordinates = WindowCoordinates,
    protected readonly WindowElementConstructor: typeof WindowElement = WindowElement,
    protected readonly WindowEmitConstructor: typeof WindowEmit = WindowEmit,
    protected readonly WindowEscConstructor: typeof WindowEsc = WindowEsc,
    protected readonly WindowEventConstructor: typeof WindowEvent = WindowEvent,
    protected readonly WindowFlashConstructor: typeof WindowFlash = WindowFlash,
    protected readonly WindowHiddenConstructor: typeof WindowHidden = WindowHidden,
    protected readonly WindowHookConstructor: typeof WindowHook = WindowHook,
    protected readonly WindowOpenConstructor: typeof WindowOpen = WindowOpen,
    protected readonly WindowOriginConstructor: typeof WindowOrigin = WindowOrigin,
    protected readonly WindowPersistentConstructor: typeof WindowPersistent = WindowPersistent,
    protected readonly WindowPositionConstructor: typeof WindowPosition = WindowPosition,
    protected readonly WindowStaticConstructor: typeof WindowStatic = WindowStatic,
    protected readonly WindowStatusConstructor: typeof WindowStatus = WindowStatus,
    protected readonly WindowStylesConstructor: typeof WindowStyles = WindowStyles,
    protected readonly WindowVerificationConstructor: typeof WindowVerification = WindowVerification,
    protected readonly ImageConstructor: typeof ImageInclude = ImageInclude,
    protected readonly ModelConstructor: typeof ModelInclude = ModelInclude,
    protected readonly ScrollbarConstructor: typeof ScrollbarInclude = ScrollbarInclude,
    protected readonly TabIndexConstructor: typeof TabIndexInclude = TabIndexInclude,
    protected readonly TextConstructor: typeof TextInclude = TextInclude
  ) {
    this.hook = new WindowHookConstructor(props)

    this.classes = new WindowClassesConstructor(className)
    this.element = new WindowElementConstructor(this.classes, element)
    this.client = new WindowClientConstructor(this.element)
    this.tabIndex = new TabIndexConstructor(
      () => this.element.getBody()
    )

    this.status = new WindowStatusConstructor(this.element)
    this.persistent = new WindowPersistentConstructor(props, this.classes, this.element)
    this.flash = new WindowFlashConstructor(props, this.classes)
    this.coordinates = new WindowCoordinatesConstructor(this.classes, this.element)
    this.position = new WindowPositionConstructor(props, this.client, this.element, this.coordinates)
    this.origin = new WindowOriginConstructor(this.client, this.element, this.position)
    this.staticMode = new WindowStaticConstructor(props, refs, this.element)
    this.emit = new WindowEmitConstructor(this.classes, this.element, emits)

    this.styles = new WindowStylesConstructor(
      this.element,
      this.coordinates,
      this.position,
      this.origin,
      className
    )
    this.open = new WindowOpenConstructor(
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

    this.verification = new WindowVerificationConstructor(
      props,
      this.persistent,
      this.classes,
      this.element,
      this.staticMode,
      this.open
    )
    this.event = new WindowEventConstructor(
      props,
      this.status,
      this.client,
      this.flash,
      this.open,
      this.verification
    )

    this.scrollbar = new ScrollbarConstructor(
      props,
      className,
      components,
      emits
    )
    this.image = new ImageConstructor(
      props,
      components,
      emits
    )
    this.esc = new WindowEscConstructor(
      this.open.item,
      () => this.open.close(),
      () => !this.props.persistent
    )
    this.text = new TextConstructor(this.props)
    this.hidden = new WindowHiddenConstructor(this.classes, this.open)

    new ModelConstructor<boolean>('open', this.emits, this.open.item)

    onMounted(() => {
      watch([refs.open], () => this.open.set(props.open), { immediate: true })
    })
    onUnmounted(this.stop)
  }

  /** Checks if the role is a menu/ Проверяет, является ли роль меню */
  isMenu(): boolean {
    return this.props.role === 'menu'
      || this.props.role === 'menuitemcheckbox'
      || this.props.role === 'menuitemradio'
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
