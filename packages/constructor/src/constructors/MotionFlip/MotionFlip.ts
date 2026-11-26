import {
  type ConstrBind,
  type ConstrItems,
  DesignLogicAbstract
} from '@dxtmisha/functional'

import { MotionFlipAction } from './MotionFlipAction'
import { MotionFlipElement } from './MotionFlipElement'
import { MotionFlipItems } from './MotionFlipItems'
import { MotionFlipObserver } from './MotionFlipObserver'

import type { MotionFlipCallback } from './basicTypes'
import type { MotionFlipProps } from './props'
import type {
  MotionFlipComponents,
  MotionFlipEmits,
  MotionFlipSlots
} from './types'

/**
 * Type describing dependency constructors for MotionFlip.
 *
 * Тип, описывающий конструкторы зависимостей для MotionFlip.
 */
export type MotionFlipConstructors = {
  /** Action controller constructor / Конструктор контроллера действий */
  action: typeof MotionFlipAction
  /** Element manager constructor / Конструктор менеджера элемента */
  elementManager: typeof MotionFlipElement
  /** Item list controller constructor / Конструктор контроллера списка элементов */
  items: typeof MotionFlipItems
  /** Observer controller constructor / Конструктор контроллера наблюдения */
  observer: typeof MotionFlipObserver
}

/**
 * Class for managing FLIP layout animations.
 * Performs smooth position and dimensions transitions during layout changes.
 *
 * Класс для управления FLIP анимациями макета.
 * Выполняет плавные переходы положения и размеров при изменениях макета.
 */
export class MotionFlip extends DesignLogicAbstract<
  HTMLElement,
  MotionFlipComponents,
  MotionFlipEmits,
  MotionFlipSlots,
  MotionFlipProps,
  MotionFlipConstructors
> {
  /** Item configurations and default constructors by constructor name / Конфигурации элементов и конструкторы по умолчанию по имени конструктора */
  protected override readonly constructorItems: ConstrItems<MotionFlipConstructors> = {
    action: {
      item: MotionFlipAction,
      parameters: () => [
        this.props,
        () => this.i('elementManager'),
        () => this.i('items')
      ]
    },
    elementManager: {
      item: MotionFlipElement,
      parameters: () => [
        this.element,
        this.naming
      ]
    },
    items: {
      item: MotionFlipItems,
      parameters: () => [
        () => this.i('elementManager')
      ]
    },
    observer: {
      item: MotionFlipObserver,
      conditions: () => MotionFlipObserver.is(this.props),
      parameters: () => [
        this.props,
        () => this.i('action'),
        () => this.i('elementManager'),
        () => this.i('items')
      ]
    }
  }

  /**
   * Computed bindings for the element.
   *
   * Вычисляемые привязки для элемента.
   * @returns element bindings / привязки элемента
   */
  get binds(): ConstrBind {
    return {
      onTransitionend: this.onTransition
    }
  }

  /**
   * Updates the FLIP animation on layout changes.
   *
   * Обновляет FLIP анимацию при изменениях макета.
   * @param callback function performing DOM updates / функция, выполняющая обновления DOM
   * @returns promise resolving when update sequence completes / промис, завершающийся при завершении обновления
   */
  readonly update = async (callback: MotionFlipCallback): Promise<void> => {
    if (!this.props.disabled && this.element.value) {
      await this.i('action').update(callback)
      return
    }

    await callback()
  }

  /**
   * Stops active FLIP animation and clears animation state.
   *
   * Останавливает активную FLIP-анимацию и сбрасывает состояние анимации.
   */
  readonly stop = (): void => {
    if (this.hasInstance('action')) {
      this.i('action').stop()
    }
  }

  /**
   * Handle transition end event to clear animation state.
   *
   * Обрабатывает событие окончания перехода для сброса состояния анимации.
   * @param event transition event / событие перехода
   */
  readonly onTransition = (event: TransitionEvent): void => {
    if (this.hasInstance('action')) {
      this.i('action').onTransition(event)
    }
  }
}
