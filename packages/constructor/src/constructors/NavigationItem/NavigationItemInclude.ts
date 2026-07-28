import { ComponentIncludeAbstract } from '../../classes/ComponentIncludeAbstract'

import type { NavigationItemPropsInclude } from './basicTypes'
import type { NavigationItemPropsBasic } from './props'
import type { NavigationItemExpose, NavigationItemSlots } from './types'

/**
 * NavigationItemInclude class provides functionality for conditionally rendering navigation item components
 * within other components.
 *
 * Класс NavigationItemInclude предоставляет функциональность для условного рендеринга компонентов
 * элемента навигации внутри других компонентов.
 */
export class NavigationItemInclude extends ComponentIncludeAbstract<
  NavigationItemPropsInclude,
  NavigationItemPropsBasic,
  NavigationItemExpose,
  NavigationItemSlots
> {
  /** Name of the component for style prefixing and resolution / Имя компонента для префикса стилей и разрешения */
  protected override readonly name = 'navigationItem'

  /** Key name for passing additional attributes / Имя ключа для передачи дополнительных атрибутов */
  protected override readonly propsAttrsName = 'navigationItemAttrs'

  /**
   * Checks whether the navigation item should be displayed.
   *
   * Проверяет, нужно ли отображать элемент навигации.
   * @returns check result / результат проверки
   */
  override get is(): boolean {
    return (
      'label' in this.binds.value
      || 'icon' in this.binds.value
    )
  }
}
