import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { ListGroupOpen } from '../ListGroup'
import { type WindowEmitOptions, WindowInclude, type WindowProps } from '../Window'

import type { ListMenuProps } from './props'
import type { ListMenuComponents, ListMenuEmits, ListMenuSlots } from './types'

/** ListMenu dependency constructors type / Тип конструкторов зависимостей ListMenu */
export type ListMenuConstructors = {
  /** Group open state constructor / Конструктор состояния открытия группы */
  open: typeof ListGroupOpen<ListMenuProps>
  /** Window constructor / Конструктор окна */
  window: typeof WindowInclude
}

/**
 * Orchestrator class for the ListMenu component.
 * Manages submenu open state, window positioning configuration, and root window bindings.
 *
 * Класс-оркестратор для компонента ListMenu.
 * Управляет состоянием открытия подменю, конфигурацией позиционирования окна и привязками корневого окна.
 */
export class ListMenu extends DesignLogicAbstract<
  HTMLDivElement,
  ListMenuComponents,
  ListMenuEmits,
  ListMenuSlots,
  ListMenuProps,
  ListMenuConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<ListMenuConstructors> = {
    open: {
      item: ListGroupOpen<ListMenuProps>,
      parameters: () => [this.props]
    },
    window: {
      item: WindowInclude,
      parameters: () => [
        this.props,
        this.naming,
        this.components,
        () => ({
          adaptive: 'menu',
          axis: this.props.axis,
          role: 'menu',
          ariaHaspopup: 'menu',
          onWindow: (options: WindowEmitOptions) => this.i('open').onOpen({
            type: 'body',
            open: options.open
          })
        } as WindowProps),
        undefined,
        this.emits
      ]
    }
  }

  /**
   * Returns binding attributes for the window component.
   *
   * Возвращает привязочные атрибуты для компонента окна.
   * @returns window component bindings / привязки компонента окна
   */
  get binds(): ConstrBind<WindowProps> {
    return {
      open: this.isOpen(),
      inert: false,
      autoTabIndex: false,
      closeOnEsc: false
    }
  }

  /**
   * Checks whether the menu is currently open.
   *
   * Проверяет, открыто ли меню в данный момент.
   * @returns true if the menu is open / true, если меню открыто
   */
  isOpen(): boolean {
    return this.i('open').is()
  }
}
