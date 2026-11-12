// ai-none

import { computed, type VNode } from 'vue'
import {
  type ConstrBind,
  executeFunction,
  getBind
} from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { ProgressPropsInclude } from './basicTypes'
import type { ProgressProps } from './props'
import type { ProgressExpose, ProgressSlots } from './types'

/** Progress include item getter callback / Функция получения экземпляра подключения прогресса */
export type ProgressIncludeItem = ProgressInclude | (() => ProgressInclude)

/**
 * ProgressInclude class provides functionality for conditionally rendering progress components
 * within other components. It manages the logic for determining when to display a progress bar
 * and configures the appropriate properties.
 *
 * Класс ProgressInclude предоставляет функциональность для условного рендеринга компонентов
 * прогресса внутри других компонентов. Он управляет логикой определения необходимости
 * отображения индикатора прогресса и настраивает соответствующие свойства.
 */
export class ProgressInclude extends ComponentIncludeAbstract<
  ProgressPropsInclude,
  ProgressProps,
  ProgressExpose,
  ProgressSlots
> {
  /**
   * Checks whether progress is enabled in properties.
   *
   * Проверяет, включён ли прогресс в свойствах.
   * @param props input data / входные данные
   * @returns true if progress is enabled / true, если прогресс включён
   */
  static is(props?: ProgressPropsInclude): boolean {
    return Boolean(props?.loading)
  }

  /**
   * Lazily renders the progress component if it is enabled.
   *
   * Лениво рендерит компонент прогресса, если он включен.
   * @param item callback function returning progress instance or instance / функция обратного вызова или экземпляр прогресса
   * @param props input properties / входные свойства
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param index unique rendering key / уникальный ключ рендеринга
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  static renderLazy(
    item: ProgressIncludeItem,
    props?: ProgressPropsInclude,
    slotsChildren?: ProgressSlots,
    attrs?: ConstrBind<ProgressProps>,
    index?: string
  ): VNode[] {
    if (ProgressInclude.is(props)) {
      return executeFunction(item)?.render(slotsChildren, attrs, undefined, index) ?? []
    }

    return []
  }

  /** Sub-component name identifier / Идентификатор имени субкомпонента */
  protected readonly name = 'progress'
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected readonly propsAttrsName = undefined

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false

  /** List of ARIA properties for the progress component / Список ARIA-свойств для компонента Progress */
  readonly aria = computed<AriaList>(
    () => AriaStaticInclude.disabled(this.is)
  )

  /**
   * Checks whether progress should be displayed.
   *
   * Проверяет, нужно ли отображать индикатор прогресса.
   * @returns true if progress should be displayed / true, если прогресс должен отображаться
   */
  override get is(): boolean {
    return ProgressInclude.is(this.getProps())
  }

  /**
   * Generates the CSS class name according to BEM structure.
   *
   * Генерирует имя CSS-класса в соответствии с BEM-структурой.
   * @returns BEM-formatted class name / имя класса в формате BEM
   */
  protected override getClassName(): string {
    return this.naming.getSubClass('loading')
  }

  /**
   * Resolves and returns design properties specifically bound for the progress indicator.
   *
   * Разрешает и возвращает свойства дизайна, привязанные именно к прогрессу.
   * @returns resolved progress properties or undefined / разрешенные свойства прогресса или undefined
   */
  protected override getExtra(): ProgressProps | undefined {
    return getBind(
      this.getProps().loading,
      super.getExtra(),
      'visible'
    ) as ProgressProps
  }
}
