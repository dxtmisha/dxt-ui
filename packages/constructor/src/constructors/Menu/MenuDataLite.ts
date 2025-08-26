import { computed, ref } from 'vue'
import { ListData } from '@dxt-ui/functional'

import { MenuOpen } from './MenuOpen'
import { MenuFocus } from './MenuFocus'

/**
 * Lite data manager for Menu component
 *
 * Менеджер облегченных данных для компонента Menu
 */
export class MenuDataLite {
  /** Internal state for lite mode activation/ Внутреннее состояние для активации облегченного режима */
  protected readonly is = ref<boolean>()

  /**
   * Constructor
   * @param data list data manager/ менеджер данных списка
   * @param open open state manager/ менеджер состояния открытия
   * @param focus focus manager/ менеджер фокуса
   */
  constructor(
    protected readonly data: ListData,
    protected readonly open: MenuOpen,
    protected readonly focus: MenuFocus
  ) {
  }

  /** Returns a list of menu items/ Возвращает список элементов меню */
  readonly item = computed(() => {
    if (this.is.value) {
      return this.data.liteData.value
    }

    if (this.isLite()) {
      return undefined
    }

    return this.data.data.value
  })

  /**
   * Activates lite mode if conditions are met
   *
   * Активирует облегченный режим при соблюдении условий
   */
  activate(): void {
    if (this.isLite()) {
      this.is.value = true
      this.focus.preparationBySelected()
    }
  }

  /**
   * Deactivates lite mode and updates focus
   *
   * Деактивирует облегченный режим и обновляет фокус
   */
  deactivate() {
    if (this.is.value) {
      this.is.value = false
      this.focus.preparationBySelected()
    }
  }

  /**
   * Checks whether it is necessary to enable simplified mode.
   *
   * Проверяет, надо ли включить упрощенный режим.
   * @returns true if lite mode should be enabled/ true, если нужно включить облегченный режим
   */
  protected isLite(): boolean {
    return !this.open.item.value && this.data.isLite()
  }
}
