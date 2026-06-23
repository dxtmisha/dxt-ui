import { type ComputedRef } from 'vue'
import { type GeoFlagNational, GeoFlagRef } from '@dxtmisha/functional'

import { MenuCountry } from '../MenuCountry/MenuCountry'

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
   * Initializes the flag list.
   *
   * Инициализирует список флагов.
   * @protected
   * @returns reactive list of national flag items / реактивный список элементов национальных флагов
   */
  protected override initFlagList(): ComputedRef<GeoFlagNational[]> {
    return new GeoFlagRef(this.refs.language).getNationalLanguage(this.refs.countryList)
  }
}
