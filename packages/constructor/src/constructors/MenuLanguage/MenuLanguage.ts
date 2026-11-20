import { toRef, type ComputedRef, type Ref } from 'vue'
import {
  type ConstrEmit,
  type DesignComp,
  type DesignName,
  type GeoFlagNational
} from '@dxtmisha/functional'

import { MenuCountry, type MenuCountryConstructors } from '../MenuCountry/MenuCountry'
import { MenuCountryList } from '../MenuCountry/MenuCountryList'
import type { MenuCountryComponents, MenuCountryEmits, MenuCountrySlots } from '../MenuCountry/types'
import type { MenuLanguageProps } from './props'

/**
 * Class for generating and managing the localized language list for MenuLanguage.
 *
 * Класс для формирования и управления локализованным списком языков для MenuLanguage.
 */
export class MenuLanguageList extends MenuCountryList {
  /**
   * Initializes the language flag list.
   *
   * Инициализирует список языковых флагов.
   * @returns reactive list of national flag language items / реактивный список элементов флагов языков
   */
  protected override initFlagList(): ComputedRef<GeoFlagNational[]> {
    return this.flag().getNationalLanguage(toRef(this.props, 'list'))
  }
}

/**
 * Class for managing the language selection menu.
 * It integrates menu functionality, event handling, and model state for selecting languages,
 * including automatic flag list generation based on language codes.
 *
 * Класс для управления меню выбора языка.
 * Интегрирует функциональность меню, обработку событий и состояние модели для выбора языков,
 * включая автоматическую генерацию списка флагов на основе кодов языков.
 */
export class MenuLanguage extends MenuCountry {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input data / входные данные
   * @param element input element / элемент ввода
   * @param naming component naming helper / помощник именования компонента
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits event emitter callback / функция вызова событий
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    props: Readonly<MenuLanguageProps>,
    element: Ref<HTMLDivElement | undefined>,
    naming: DesignName,
    components?: DesignComp<MenuCountryComponents, MenuLanguageProps>,
    slots?: MenuCountrySlots,
    emits?: ConstrEmit<MenuCountryEmits>,
    constructors?: Partial<MenuCountryConstructors>
  ) {
    super(
      props,
      element,
      naming,
      components,
      slots,
      emits,
      {
        list: MenuLanguageList,
        ...constructors
      }
    )
  }
}
