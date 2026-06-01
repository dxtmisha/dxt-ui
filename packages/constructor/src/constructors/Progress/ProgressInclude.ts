import { computed } from 'vue'
import { getBind } from '@dxtmisha/functional'

import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import { AriaStaticInclude } from '../../classes/AriaStaticInclude'

import type { AriaList } from '../../types/ariaTypes'
import type { ProgressPropsInclude } from './basicTypes'
import type { ProgressProps } from './props'
import type { ProgressExpose, ProgressSlots } from './types'

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
  protected readonly name = 'progress'
  protected readonly propsAttrsName = undefined

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected readonly hasInitElement: boolean = false

  /**
   * Checks whether progress should be displayed /
   * Проверяет, нужно ли отображать индикатор прогресса
   */
  override get is(): boolean {
    return Boolean(this.getProps().loading)
  }

  /**
   * list of aria properties for the progress component /
   * список aria свойств для компонента Progress
   */
  readonly aria = computed<AriaList>(
    () => AriaStaticInclude.disabled(this.is)
  )

  /**
   * Generates the CSS class name according to BEM structure.
   *
   * Генерирует имя CSS-класса в соответствии с BEM-структурой.
   * @returns BEM-formatted class name / имя класса в формате BEM
   */
  protected override getClassName(): string {
    return `${this.className}__loading`
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
