import { type ConstrOptions } from '@dxtmisha/functional'

import { MenuCountryDesign } from '../MenuCountry/MenuCountryDesign'
import { MenuLanguage } from './MenuLanguage'

import {
  type MenuLanguagePropsBasic
} from './props'
import {
  type MenuLanguageClasses,
  type MenuLanguageComponents,
  type MenuLanguageEmits,
  type MenuLanguageExpose
} from './types'

/**
 * MenuLanguageDesign
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
   * @param name class name/ название класса
   * @param props properties/ свойства
   * @param options list of additional parameters/ список дополнительных параметров
   * @param ItemConstructor constructors item class/ класс элемента конструкторов
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
      options as any,
      ItemConstructor as any
    )
  }
}
