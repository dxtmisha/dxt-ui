import type { Ref } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import type { AriaList } from '../../types/ariaTypes'
import type { WindowExpose } from './types'
import type { WindowPropsBasic } from './props'

/**
 * Window status items for different states of window lifecycle/
 * Элементы статуса окна для различных состояний жизненного цикла окна
 */
export enum WindowStatusItem {
  /** Display state/ Состояние отображения */
  display = 'display',
  /** Preparation state/ Состояние подготовки */
  preparation = 'preparation',
  /** Flash state/ Состояние вспышки */
  flash = 'flash',
  /** Open state/ Состояние открытия */
  open = 'open',
  /** Hide state/ Состояние скрытия */
  hide = 'hide',
  /** Close state/ Состояние закрытия */
  close = 'close'
}

/**
 * Window status control items for managing window behavior and appearance/
 * Элементы управления статусом окна для управления поведением и внешним видом окна
 */
export enum WindowStatusControlItem {
  /** Block parent closing from child control/ Блокировка закрытия родителя от дочернего контрола */
  block = 'block',
  /**
   * Block window closing on backdrop click when element exists inside window body/
   * Блокировка закрытия окна по клику на фон при наличии элемента внутри тела окна
   */
  blockChildren = 'blockChildren',
  /** Block closing other underlying open windows/ Блокировка закрытия других открытых окон */
  blockOther = 'blockOther',
  /** Close current window on click/ Закрытие текущего окна при клике */
  close = 'close',
  /** Prevent autoClose and click actions on inner elements/ Отмена autoClose и клик-действий для внутренних элементов */
  static = 'static',
  /** Prevent control from opening the window/ Запрет открытия окна по контролу */
  controlStatic = 'controlStatic',
  /** Control opens window only (does not close when already open)/ Контрол только открывает окно */
  controlOpenOnly = 'controlOpenOnly',
  /** Active control state class/ Класс активного контрола */
  controlActive = 'controlActive',
  /** Persistent wobble/flash animation modifier/ Модификатор анимации persistent */
  persistent = 'persistent'
}

/**
 * Options for window events/
 * Опции для событий окна
 */
export type WindowEmitOptions = {
  /** Unique window identifier/ Уникальный идентификатор окна */
  id: string
  /** Window DOM element/ DOM элемент окна */
  element: HTMLDivElement
  /** Control DOM element/ DOM элемент управления */
  control: HTMLElement
  /** Window open state/ Состояние открытия окна */
  open: boolean
}

/**
 * List of CSS classes for window styling/
 * Список CSS классов для стилизации окна
 */
export type WindowClassesList = {
  /** Class preventing parent close from child control/ Класс, блокирующий закрытие родителя от дочернего контрола */
  block: string
  /** Class inside body blocking backdrop close of current window/ Класс внутри тела, блокирующий закрытие текущего окна по фону */
  blockChildren: string
  /** Class blocking other underlying open windows from closing/ Класс, блокирующий закрытие других открытых окон */
  blockOther: string
  /** Explicit close trigger class inside window body/ Класс явного закрытия окна по клику */
  close: string
  /** Class inside window preventing autoClose dismissal on click/ Класс внутри окна, отменяющий autoClose при клике */
  static: string

  /** Control element class/ Класс элемента управления */
  control: string
  /** Control element class with unique window ID/ Класс элемента управления с ID окна */
  controlId: string
  /** Class disabling window opening from control/ Класс запрета открытия окна по контролу */
  controlStatic: string
  /** Class restricting control to open-only behavior/ Класс контрола только на открытие */
  controlOpenOnly: string
  /** Active control class when window is open/ Класс активного контрола при открытом окне */
  controlActive: string

  /** Persistent animation modifier class/ Класс модификатора persistent-анимации */
  persistent: string
}

/**
 * Window event click type/
 * Тип события клика окна
 */
export type WindowEventClickType = KeyboardEvent | MouseEvent | TouchEvent

/**
 * Window event click handler/
 * Обработчик события клика окна
 */
export type WindowEventClick = (event: WindowEventClickType) => Promise<void>

/**
 * Interface for window classes inclusion/
 * Интерфейс для включения классов окна
 */
export type WindowControlBasic = {
  /** Window CSS classes list/ Список CSS классов окна */
  classesWindow: WindowClassesList
}

/**
 * Control item data for window management/
 * Данные элемента управления для управления окном
 */
export type WindowControlItem
  = WindowControlBasic
    & {
    /** CSS class string/ Строка CSS класса */
      class: string
      /** Reactive open state/ Реактивное состояние открытия */
      open: Ref<boolean>
      /** Click event handler/ Обработчик события клика */
      onClick: WindowEventClick
      /** Keydown event handler/ Обработчик события нажатия клавиши */
      onKeydown: WindowEventClick
      /** Context menu event handler/ Обработчик события контекстного меню */
      onContextmenu: WindowEventClick
      /** Binding properties/ Свойства привязки */
      binds:
        AriaList
        & {
          /** Binding class/ Класс привязки */
          class: string
          /** Click event handler for binding/ Обработчик события клика для привязки */
          onClick: WindowEventClick
          /** Keydown event handler/ Обработчик события нажатия клавиши */
          onKeydown: WindowEventClick
          /** Context menu event handler for binding/ Обработчик события контекстного меню для привязки */
          onContextmenu: WindowEventClick
        }
    }

/**
 * Component map for including the Window component/
 * Карта компонентов для подключения компонента Window
 */
export type WindowComponentInclude = {
  /** Window component configuration/ Конфигурация компонента окна */
  window?: object
}

/**
 * Event map for Window include/
 * Карта событий для подключения Window
 */
export type WindowEmitsInclude = {
  /** Window event triggered on state change/ Событие окна при изменении состояния */
  window: [options: WindowEmitOptions]
}

/**
 * Interface for window expose inclusion/
 * Интерфейс для включения expose окна
 */
export interface WindowExposeInclude extends WindowExpose {
  /** Returns reference to the window element/ Возвращает ссылку на элемент окна */
  getWindowElement(): ConstrBind<WindowExpose> | undefined
}

/**
 * Props used to include and configure the Window component/
 * Свойства для подключения и настройки компонента Window
 */
export type WindowPropsInclude<
  Window extends WindowPropsBasic = WindowPropsBasic
> = {
  /** Disabled state/ Отключённое состояние */
  disabled?: boolean
  /** Enable auto close on outside click/ Включить авто-закрытие при клике вне */
  autoClose?: boolean
  /** Additional attributes for Window component/ Дополнительные атрибуты для компонента Window */
  windowAttrs?: ConstrBind<Window>
}

/**
 * CSS variable name for MotionTransform body type/
 * Имя CSS‑переменной для типа тела MotionTransform
 */
export const __WINDOW_TYPE_BODY_NAME = '--sys-type-body'
