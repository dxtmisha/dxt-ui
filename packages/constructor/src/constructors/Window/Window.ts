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

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ModelInclude } from '../../classes/ModelInclude'
import { TabIndexInclude } from '../../classes/TabIndexInclude'
import { TeleportInclude } from '../../classes/TeleportInclude'
import { TextInclude } from '../../classes/TextInclude'

import { ScrollbarInclude } from '../Scrollbar'
import { ImageInclude } from '../Image'

import { WindowClassesData } from './WindowClassesData'
import { WindowClient } from './WindowClient'
import { WindowCoordinates } from './WindowCoordinates'
import { WindowElement } from './WindowElement'
import { WindowEmit } from './WindowEmit'
import { WindowEsc } from './WindowEsc'
import { WindowEvent } from './WindowEvent'
import { WindowFlash } from './WindowFlash'
import { WindowHidden } from './WindowHidden'
import { WindowHook } from './WindowHook'
import { WindowOpen } from './WindowOpen'
import { WindowOrigin } from './WindowOrigin'
import { WindowPersistent } from './WindowPersistent'
import { WindowPosition } from './WindowPosition'
import { WindowStatic } from './WindowStatic'
import { WindowStatus } from './WindowStatus'
import { WindowStyles } from './WindowStyles'
import { WindowVerification } from './WindowVerification'

import type { WindowControlItem } from './basicTypes'
import type { WindowComponents, WindowEmits, WindowSlots } from './types'
import type { WindowPropsBasic } from './props'

/** Window dependency constructors type / Тип конструкторов зависимостей Window */
export type WindowConstructors = {
  /** Classes helper constructor / Конструктор помощника по классам */
  classesData: typeof WindowClassesData
  /** Client coordinates manager constructor / Конструктор менеджера координат клиента */
  client: typeof WindowClient
  /** Coordinates calculation constructor / Конструктор расчета координат */
  coordinates: typeof WindowCoordinates
  /** Element manager constructor / Конструктор менеджера элементов */
  element: typeof WindowElement
  /** Emit event manager constructor / Конструктор менеджера событий */
  emit: typeof WindowEmit
  /** Escape key handler constructor / Конструктор обработчика клавиши Escape */
  esc: typeof WindowEsc
  /** Event listener manager constructor / Конструктор менеджера прослушивателей событий */
  event: typeof WindowEvent
  /** Flash animation constructor / Конструктор анимации вспышки */
  flash: typeof WindowFlash
  /** Hidden elements outside window constructor / Конструктор скрытия элементов вне окна */
  hidden: typeof WindowHidden
  /** Hook manager constructor / Конструктор менеджера хуков */
  hook: typeof WindowHook
  /** Image manager constructor / Конструктор менеджера изображений */
  image: typeof ImageInclude
  /** Model synchronization constructor / Конструктор синхронизации модели */
  model: typeof ModelInclude
  /** Open state manager constructor / Конструктор менеджера состояния открытия */
  open: typeof WindowOpen
  /** Transform origin manager constructor / Конструктор менеджера точки трансформации */
  origin: typeof WindowOrigin
  /** Persistent state manager constructor / Конструктор менеджера постоянного состояния */
  persistent: typeof WindowPersistent
  /** Position manager constructor / Конструктор менеджера позиции */
  position: typeof WindowPosition
  /** Scrollbar manager constructor / Конструктор менеджера скроллбара */
  scrollbar: typeof ScrollbarInclude
  /** Static mode manager constructor / Конструктор менеджера статического режима */
  staticMode: typeof WindowStatic
  /** Status manager constructor / Конструктор менеджера статуса */
  status: typeof WindowStatus
  /** Styles manager constructor / Конструктор менеджера стилей */
  styles: typeof WindowStyles
  /** Tab index manager constructor / Конструктор менеджера таб-индекса */
  tabIndex: typeof TabIndexInclude
  /** Teleport manager constructor / Конструктор менеджера телепорта */
  teleport: typeof TeleportInclude
  /** Text localization manager constructor / Конструктор менеджера текста */
  text: typeof TextInclude
  /** Verification manager constructor / Конструктор менеджера проверки */
  verification: typeof WindowVerification
}

/**
 * Main Window class that manages all window-related functionality including positioning,
 * events, styles, animations, and component integrations. This class serves as the central
 * coordinator for window operations in the design system.
 *
 * Основной класс Window, который управляет всей функциональностью окон, включая позиционирование,
 * события, стили, анимации и интеграции компонентов. Этот класс служит центральным координатором
 * для операций с окнами в дизайн-системе.
 */
export class Window extends DesignLogicAbstract<
  HTMLDivElement,
  WindowComponents,
  WindowEmits,
  WindowSlots,
  WindowPropsBasic,
  WindowConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<WindowConstructors> = {
    classesData: {
      item: WindowClassesData,
      parameters: () => [this.naming]
    },
    client: {
      item: WindowClient,
      parameters: () => [() => this.i('element')]
    },
    coordinates: {
      item: WindowCoordinates,
      parameters: () => [
        () => this.i('classesData'),
        () => this.i('element')
      ]
    },
    element: {
      item: WindowElement,
      parameters: () => [
        () => this.i('classesData'),
        this.element
      ]
    },
    emit: {
      item: WindowEmit,
      parameters: () => [
        () => this.i('classesData'),
        () => this.i('element'),
        this.emits
      ]
    },
    esc: {
      item: WindowEsc,
      conditions: () => WindowEsc.is(this.props),
      parameters: () => [
        this.i('open').item,
        () => this.i('open').close(),
        () => !this.props.persistent && (this.props.closeOnEsc ?? true)
      ]
    },
    event: {
      item: WindowEvent,
      parameters: () => [
        this.props,
        () => this.i('tabIndex'),
        () => this.i('status'),
        () => this.i('client'),
        () => this.i('flash'),
        () => this.i('open'),
        () => this.i('verification')
      ]
    },
    flash: {
      item: WindowFlash,
      parameters: () => [
        this.props,
        () => this.i('classesData')
      ]
    },
    hidden: {
      item: WindowHidden,
      conditions: () => WindowHidden.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('classesData'),
        () => this.i('staticMode'),
        () => this.i('open'),
        () => this.i('teleport')
      ]
    },
    hook: {
      item: WindowHook,
      parameters: () => [this.props]
    },
    image: {
      item: ImageInclude,
      conditions: () => Boolean(this.props.image),
      parameters: () => [
        this.naming,
        this.props,
        this.components,
        undefined,
        this.emits
      ]
    },
    model: {
      item: ModelInclude,
      parameters: () => [
        'open',
        this.emits,
        this.i('open').item
      ]
    },
    open: {
      item: WindowOpen,
      parameters: () => [
        this.props,
        this.isMounted,
        () => this.i('client'),
        () => this.i('hook'),
        () => this.i('element'),
        () => this.i('tabIndex'),
        () => this.i('status'),
        () => this.i('flash'),
        () => this.i('coordinates'),
        () => this.i('position'),
        () => this.i('origin'),
        () => this.i('emit'),
        () => this.i('styles')
      ]
    },
    origin: {
      item: WindowOrigin,
      parameters: () => [
        () => this.i('client'),
        () => this.i('element'),
        () => this.i('position')
      ]
    },
    persistent: {
      item: WindowPersistent,
      conditions: () => WindowPersistent.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('classesData'),
        () => this.i('element')
      ]
    },
    position: {
      item: WindowPosition,
      parameters: () => [
        this.props,
        () => this.i('client'),
        () => this.i('element'),
        () => this.i('coordinates')
      ]
    },
    scrollbar: {
      item: ScrollbarInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        this.emits
      ]
    },
    staticMode: {
      item: WindowStatic,
      conditions: () => WindowStatic.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('element')
      ]
    },
    status: {
      item: WindowStatus,
      parameters: () => [() => this.i('element')]
    },
    styles: {
      item: WindowStyles,
      parameters: () => [
        () => this.i('element'),
        () => this.i('coordinates'),
        () => this.i('position'),
        () => this.i('origin'),
        this.naming
      ]
    },
    tabIndex: {
      item: TabIndexInclude,
      parameters: () => [
        () => this.i('element').getBody(),
        undefined,
        () => Boolean(this.props.autoTabIndex)
      ]
    },
    teleport: {
      item: TeleportInclude
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    },
    verification: {
      item: WindowVerification,
      parameters: () => [
        this.props,
        this.isMounted,
        () => this.i('persistent'),
        () => this.i('classesData'),
        () => this.i('element'),
        () => this.i('staticMode'),
        () => this.i('open')
      ]
    }
  }

  /**
   * Constructor
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
   * @param constructors object with classes / объект с классами
   */
  constructor(
    props: WindowPropsBasic,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<WindowComponents, WindowPropsBasic>,
    slots?: WindowSlots,
    emits?: ConstrEmit<WindowEmits>,
    constructors?: Partial<WindowConstructors>
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
   * Returns attributes for the main element.
   *
   * Возвращает атрибуты для главного элемента.
   * @returns element binding attributes / атрибуты привязки элемента
   */
  get binds(): ConstrBind {
    const props: Record<string, any> = {
      'key': 'main',
      'data-window': this.i('classesData').getId(),
      'onTransitionend': this.i('event').onTransition
    }

    if (WindowStatic.is(this.props) && this.i('staticMode').is()) {
      return props
    }

    return {
      ...props,
      ...AriaStaticInclude.role(this.props.role),
      ...AriaStaticInclude.modal(
        true,
        this.props.ariaLabelledby,
        this.props.ariaDescribedby
      )
    }
  }

  /**
   * Returns data for managing slot data.
   *
   * Возвращает данные для управления данными слотами.
   * @returns control and binding data for slots / данные управления и привязки для слотов
   */
  get slotData(): WindowControlItem {
    const classes = this.i('classesData')
    const event = this.i('event')
    const open = this.i('open')

    return {
      classesWindow: classes.list,
      class: classes.list.controlId,
      open: open.item,
      onClick: event.onClick,
      onKeydown: event.onKeydown,
      onContextmenu: event.onContextmenu,
      binds: {
        class: classes.list.controlId,
        onClick: event.onClick,
        onKeydown: event.onKeydown,
        onContextmenu: event.onContextmenu,
        ...AriaStaticInclude.control(
          classes.getControlId(),
          open.inDom ? classes.getId() : undefined,
          this.props.ariaHaspopup,
          open.item.value
        )
      }
    }
  }

  /**
   * Returns the list of available classes.
   *
   * Возвращает список доступных классов.
   * @returns classes object / объект классов
   */
  get classes(): ConstrClassObject {
    return {
      [this.i('classesData').getId()]: true,
      [this.naming.getStatusClass('staticMode')]: WindowStatic.is(this.props) && Boolean(this.i('staticMode').item.value),
      [this.naming.getStatusClass('embedded')]: Boolean(this.props.embedded)
    }
  }

  /**
   * Checks if the role is a menu.
   *
   * Проверяет, является ли роль меню.
   * @returns boolean true if role is menu / true если роль является меню
   */
  isMenu(): boolean {
    return this.props.role === 'menu'
      || this.props.role === 'menuitemcheckbox'
      || this.props.role === 'menuitemradio'
  }

  /**
   * Checks if the component is rendered on client.
   *
   * Проверяет, отрендерен ли компонент на клиенте.
   * @returns boolean true if rendered on client / true если компонент отрендерен на клиенте
   */
  isRender(): boolean {
    return this.isMounted.value
  }
}
