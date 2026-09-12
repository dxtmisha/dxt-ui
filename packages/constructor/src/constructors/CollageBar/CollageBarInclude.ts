import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'
import type { CollageBarPropsInclude } from './basicTypes'
import type { CollageBarPropsBasic } from './props'
import type { CollageBarExpose } from './types'

/**
 * CollageBarInclude class provides functionality for conditionally rendering CollageBar components
 * within other components (such as Collage or CollageItem).
 *
 * Класс CollageBarInclude предоставляет функциональность для условного рендеринга компонентов
 * CollageBar внутри других компонентов (таких как Collage или CollageItem).
 */
export class CollageBarInclude extends ComponentIncludeAbstract<
  CollageBarPropsInclude,
  CollageBarPropsBasic,
  CollageBarExpose,
  any
> {
  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'collageBar'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'collageBarAttrs'

  /** Determines whether to initialize the element reference during binding / Определяет, нужно ли инициализировать ссылку на элемент при привязке */
  protected readonly hasInitElement: boolean = false

  /**
   * Checks whether the bar should be displayed.
   *
   * Проверяет, нужно ли отображать панель.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    return Boolean(
      this.binds.value.label
      || this.binds.value.description
      || this.binds.value.icon
      || this.binds.value.buttonAttrs
      || this.binds.value.to
      || this.binds.value.href
    )
  }

  /**
   * Builds and resolves all HTML attributes and classes for binding.
   *
   * Создает и разрешает все HTML-атрибуты и классы для привязки.
   * @returns resolved bindings / разрешенные привязки
   */
  protected override toBinds() {
    const props = this.getProps()

    return {
      ...super.toBinds(),
      position: props.collageBarPosition,
      label: props.label,
      labelId: props.labelId,
      description: props.description,
      descriptionId: props.descriptionId,
      to: props.to,
      href: props.href,
      value: props.value,
      detail: props.detail
    }
  }
}
