import type { ConstrOptions } from '@dxtmisha/functional'

import { MenuCountryDesign } from '../MenuCountry/MenuCountryDesign'
import { MenuLanguage } from './MenuLanguage'

import type { MenuLanguagePropsBasic } from './props'
import type {
  MenuLanguageClasses,
  MenuLanguageComponents,
  MenuLanguageEmits,
  MenuLanguageExpose
} from './types'

/**
 * Design constructor class for the MenuLanguage component.
 * Connects MenuLanguage logic, sets up slots, classes, styles, and defines the rendering function.
 *
 * Класс-конструктор дизайна для компонента MenuLanguage.
 * Связывает логику MenuLanguage, настраивает слоты, классы, стили и определяет функцию рендеринга.
 */
export class MenuLanguageDesign<
  COMP extends MenuLanguageComponents,
  EXPOSE extends MenuLanguageExpose,
  CLASSES extends MenuLanguageClasses,
  P extends MenuLanguagePropsBasic
> extends MenuCountryDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor
   *
   * Конструктор
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor constructors item class / класс элемента конструкторов
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, MenuLanguageEmits, P>,
    ItemConstructor: typeof MenuLanguage = MenuLanguage
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
