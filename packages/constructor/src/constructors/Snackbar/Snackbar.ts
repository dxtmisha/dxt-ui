import type { Ref } from 'vue'
import {
  type ConstrBind,
  type ConstrEmit,
  type ConstrItems,
  type DesignComp,
  DesignLogicAbstract,
  type DesignName
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { TeleportInclude } from '../../classes/TeleportInclude'
import { TextInclude } from '../../classes/TextInclude'

import { SnackbarData } from './SnackbarData'
import { SnackbarEvent } from './SnackbarEvent'

import type { AriaList } from '../../types/ariaTypes'
import type { SnackbarProps } from './props'
import type { SnackbarComponents, SnackbarEmits, SnackbarSlots } from './types'

/** Snackbar dependency constructors type / Тип конструкторов зависимостей Snackbar */
export type SnackbarConstructors = {
  /** Notification queue data manager constructor / Конструктор менеджера данных очереди уведомлений */
  data: typeof SnackbarData
  /** Event emitter manager constructor / Конструктор менеджера событий */
  event: typeof SnackbarEvent
  /** Teleport manager constructor / Конструктор менеджера телепорта */
  teleport: typeof TeleportInclude
  /** Text localization manager constructor / Конструктор менеджера локализации текста */
  text: typeof TextInclude
}

/**
 * Snackbar class for orchestrating the notification queue, events, teleportation, and ARIA region bindings.
 * Lazily instantiates subordinate helpers and coordinates timer/DOM lifecycle cleanup via `DesignLogicAbstract`.
 *
 * Класс Snackbar для оркестрации очереди уведомлений, событий, телепортации и привязок ARIA-области.
 * Лениво инициализирует подчинённые хелперы и координирует очистку таймеров и DOM через `DesignLogicAbstract`.
 */
export class Snackbar extends DesignLogicAbstract<
  HTMLDivElement,
  SnackbarComponents,
  SnackbarEmits,
  SnackbarSlots,
  SnackbarProps,
  SnackbarConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<SnackbarConstructors> = {
    data: {
      item: SnackbarData,
      parameters: () => [
        this.props,
        this.element,
        this.naming,
        () => this.i('event')
      ]
    },
    event: {
      item: SnackbarEvent,
      parameters: () => [this.emits]
    },
    teleport: {
      item: TeleportInclude
    },
    text: {
      item: TextInclude,
      parameters: () => [this.props]
    }
  }

  /**
   * Constructor for Snackbar.
   * Eagerly initializes `TeleportInclude` during `setup` so Vue `inject` captures any SSR teleport target.
   *
   * Конструктор для Snackbar.
   * Немедленно инициализирует `TeleportInclude` во время `setup`, чтобы `inject` Vue захватил SSR-цель телепорта.
   * @param props input properties / входные свойства
   * @param element root HTML element reference / ссылка на корневой HTML-элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with sub-components / объект для работы с вложенными компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits event emitter function / функция вызова событий
   * @param constructors dependency constructors override map / карта переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<SnackbarProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<SnackbarComponents, SnackbarProps>,
    slots?: SnackbarSlots,
    emits?: ConstrEmit<SnackbarEmits>,
    constructors?: Partial<SnackbarConstructors>
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

    this.i('teleport')
  }

  /**
   * Returns WAI-ARIA attributes for the snackbar notifications region.
   *
   * Возвращает WAI-ARIA атрибуты для области уведомлений снекбара.
   * @returns ARIA attributes object / объект ARIA-атрибутов
   */
  get aria(): AriaList {
    return {
      ...AriaStaticInclude.role('region'),
      ...AriaStaticInclude.label(this.i('text').notifications)
    }
  }

  /**
   * Returns root element bindings including hover pause/resume handlers and ARIA attributes.
   *
   * Возвращает привязки корневого элемента, включая обработчики паузы/возобновления при наведении и ARIA-атрибуты.
   * @returns root element binding properties / свойства привязки корневого элемента
   */
  get binds(): ConstrBind {
    const data = this.i('data')

    return {
      onMouseenter: data.pause,
      onMouseleave: data.resume,
      ...this.aria
    }
  }

  /**
   * Handles closing of a snackbar notification item by its identifier.
   *
   * Обрабатывает закрытие элемента уведомления снекбара по его идентификатору.
   * @param value element identification / идентификатор элемента
   */
  readonly onClose = (value: string): void => this.i('data').remove(value)
}
