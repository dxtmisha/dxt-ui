// ai-none

import { computed } from 'vue'

import type { ButtonProps } from '../Button'
import type { MenuCountryInclude } from '../MenuCountry'
import type { InputPhoneDialCodeProps } from './props'

/**
 * Class for managing the selected country item and resolving its icon and label for InputPhoneDialCode.
 *
 * Класс для управления выбранным элементом страны и определения его иконки и текста для InputPhoneDialCode.
 */
export class InputPhoneDialCodeItem {
  /**
   * Constructor
   *
   * Конструктор
   * @param props input properties / входящие свойства
   * @param menu function returning country menu include instance / функция, возвращающая экземпляр меню выбора страны
   */
  constructor(
    protected readonly props: Readonly<InputPhoneDialCodeProps>,
    protected readonly menu: () => MenuCountryInclude
  ) {
  }

  /**
   * Computed list of currently selected country items from the menu.
   *
   * Вычисляемый список выбранных элементов страны из меню.
   */
  readonly list = computed(() => {
    return this.menu().getElement()?.getSelectedList()
  })

  /**
   * Computed first selected country item.
   *
   * Вычисляемый первый выбранный элемент страны.
   */
  readonly item = computed(() => {
    return this.list.value?.[0]
  })

  /**
   * Returns resolved icon and label bindings for the trigger button.
   *
   * Возвращает разрешённые привязки иконки и текста для кнопки-триггера.
   * @returns icon and label bindings / привязки иконки и текста
   */
  get binds(): { icon?: ButtonProps['icon'], label?: string } {
    return {
      icon: this.getIcon(),
      label: this.getLabel()
    }
  }

  /**
   * Resolves the icon identifier from the selected item or its nested detail.
   *
   * Определяет идентификатор иконки из выбранного элемента или его вложенного поля detail.
   * @returns icon identifier or undefined / идентификатор иконки или undefined
   */
  getIcon(): ButtonProps['icon'] {
    const item = this.item.value

    return item?.icon ?? item?.detail?.icon
  }

  /**
   * Resolves the trigger button label according to the `labelType` setting.
   *
   * Определяет текст кнопки-триггера в соответствии с параметром `labelType`.
   * @returns resolved label string or undefined / определённый текст метки или undefined
   */
  getLabel(): string | undefined {
    const item = this.item.value

    if (item) {
      switch (this.props.labelType) {
        case 'code':
          return item.caption ?? item.label
        case 'name':
          return item.detail?.label ?? item.label
      }
    }

    return undefined
  }
}
