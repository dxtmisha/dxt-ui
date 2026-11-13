// ai-none

import { computed, type VNode } from 'vue'
import { getBind, type ConstrBind } from '@dxtmisha/functional'

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

  /** Sub-component name identifier / Идентификатор имени субкомпонента */
  protected readonly name = 'progress'
  /** Property name containing raw attributes to pass / Имя свойства, содержащего сырые атрибуты для передачи */
  protected readonly propsAttrsName = undefined

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected override readonly hasInitElement: boolean = false

  /** Whether the progress component has been rendered / Был ли отрисован компонент прогресса */
  protected hasRendered = false

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
   * Keeps a previously rendered progress component mounted while it hides.
   *
   * Сохраняет ранее отрисованный компонент прогресса во время его скрытия.
   * @param slotsChildren sub-component slots / слоты субкомпонента
   * @param attrs additional override attributes / дополнительные переопределяющие атрибуты
   * @param isShow optional rendering condition / необязательное условие отрисовки
   * @param index unique rendering key / уникальный ключ рендеринга
   * @returns rendered virtual nodes / отрисованные виртуальные узлы
   */
  override readonly render = (
    slotsChildren?: ProgressSlots,
    attrs?: Partial<ConstrBind<ProgressProps>>,
    isShow?: () => boolean,
    index?: string
  ): VNode[] => {
    const nodes = this.initRender(
      slotsChildren,
      attrs,
      isShow ?? (() => this.is || this.hasRendered),
      index
    )

    if (nodes.length > 0) {
      this.hasRendered = true
    }

    return nodes
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
