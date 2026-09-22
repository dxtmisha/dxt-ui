import { isString } from '@dxtmisha/functional'

import type { AriaList, AriaTrueOrFalse } from '../types/ariaTypes'
import type { RoleType } from '../types/roleTypes'

/**
 * Utility class for generating static ARIA accessibility attributes and widget states.
 *
 * Утилитарный класс для формирования статических ARIA атрибутов доступности и состояний виджетов.
 */
export class AriaStaticInclude {
  /**
   * Returns the ARIA role attribute defining the semantic purpose, role, or widget type of the element in the accessibility tree.
   *
   * Возвращает атрибут ARIA role, определяющий смысловое назначение, роль или тип виджета элемента в дереве доступности.
   * @param role ARIA role type / Тип ARIA роли
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static role(role?: RoleType): AriaList {
    return {
      role
    }
  }

  /**
   * Returns the ARIA roledescription attribute defining a human-readable, author-localized description for the element role.
   *
   * Возвращает атрибут ARIA roledescription, определяющий понятное человеку и локализованное описание роли элемента.
   * @param roledescription human-readable role description / понятное человеку описание роли
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static roledescription(roledescription?: string): AriaList {
    return this.isDataToData('aria-roledescription', roledescription)
  }

  /**
   * Returns the ARIA atomic attribute indicating whether assistive technologies will present all or only parts of the changed live region.
   *
   * Возвращает атрибут ARIA atomic, указывающий, следует ли вспомогательным технологиям озвучивать всю динамическую область целиком или только измененную часть.
   * @param isAtomic whether the entire region is presented on update / озвучивать ли всю область целиком при обновлении
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static atomic(isAtomic?: boolean): AriaList {
    return {
      'aria-atomic': this.isTrueOrFalse(isAtomic)
    }
  }

  /**
   * Returns the ARIA checked attribute indicating the current checked state of checkboxes, radio buttons, or switches.
   *
   * Возвращает атрибут ARIA checked, указывающий текущее состояние отметки флажков, радиокнопок или переключателей.
   * @param isChecked whether the element is checked / отмечен ли элемент
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static checked(isChecked?: boolean): AriaList {
    return {
      'aria-checked': this.isTrueOrFalse(isChecked)
    }
  }

  /**
   * Returns the ARIA controls attribute identifying the element whose contents or presence are controlled by the current element.
   *
   * Возвращает атрибут ARIA controls, идентифицирующий элемент, содержимым или отображением которого управляет текущий элемент.
   * @param controls identifier of the controlled element / идентификатор управляемого элемента
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static controls(controls?: string): AriaList {
    return this.isDataToData('aria-controls', controls)
  }

  /**
   * Returns the ARIA current attribute indicating the element that represents the current item within a container or set of related elements.
   *
   * Возвращает атрибут ARIA current, указывающий на элемент, который представляет текущий пункт в контейнере или наборе связанных элементов.
   * @param value current token value or boolean / значение токена текущего элемента или булево значение
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static current(value?: AriaList['aria-current']): AriaList {
    const current = isString(value)
      ? value
      : this.isTrueOrFalse(value)

    return this.isDataToData('aria-current', current)
  }

  /**
   * Returns the ARIA busy attribute indicating an element is currently being modified, signaling assistive technologies to wait before reading changes.
   *
   * Возвращает атрибут ARIA busy, указывающий, что элемент в данный момент изменяется, сообщая вспомогательным технологиям подождать перед чтением изменений.
   * @param isBusy whether the element is busy / находится ли элемент в процессе обновления
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static busy(isBusy?: boolean): AriaList {
    return {
      'aria-busy': this.isTrueOrFalse(isBusy)
    }
  }

  /**
   * Returns the ARIA describedby attribute identifying the element that provides additional descriptive information for the current object.
   *
   * Возвращает атрибут ARIA describedby, идентифицирующий элемент, предоставляющий дополнительное описание для текущего объекта.
   * @param id identifier of the describing element / идентификатор описывающего элемента
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static describedby(id?: string): AriaList {
    return this.isDataToData('aria-describedby', id)
  }

  /**
   * Returns the ARIA disabled attribute indicating that the element is perceivable but disabled, not editable or operable.
   *
   * Возвращает атрибут ARIA disabled, указывающий, что элемент доступен для восприятия, но отключен и недоступен для взаимодействия.
   * @param isDisabled whether the element is disabled / отключен ли элемент
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static disabled(isDisabled: boolean = true): AriaList {
    if (isDisabled) {
      return {
        'aria-disabled': this.isTrueOrFalse(isDisabled)
      }
    }

    return {}
  }

  /**
   * Returns the ARIA readonly attribute indicating that the element is not editable, but remains focusable and operable.
   *
   * Возвращает атрибут ARIA readonly, указывающий, что элемент не редактируется, но доступен для фокуса и навигации.
   * @param isReadonly whether the element is read-only / доступен ли элемент только для чтения
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static readonly(isReadonly: boolean = true): AriaList {
    if (isReadonly) {
      return {
        'aria-readonly': this.isTrueOrFalse(isReadonly)
      }
    }

    return {}
  }

  /**
   * Returns the ARIA expanded attribute indicating whether the element or the grouping container it controls is currently expanded or collapsed.
   *
   * Возвращает атрибут ARIA expanded, указывающий, развернут или свернут элемент либо управляемая им группа элементов.
   * @param isExpanded whether the element is expanded / развернут ли элемент
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static expanded(isExpanded?: boolean): AriaList {
    return {
      'aria-expanded': this.isTrueOrFalse(isExpanded)
    }
  }

  /**
   * Returns the ARIA haspopup attribute indicating the availability and type of an interactive popup element triggered by this element.
   *
   * Возвращает атрибут ARIA haspopup, указывающий на наличие и тип интерактивного всплывающего элемента, открываемого данным элементом.
   * @param haspopup popup type or boolean / тип всплывающего окна или булево значение
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static haspopup(haspopup?: AriaList['aria-haspopup']): AriaList {
    return this.isDataToData('aria-haspopup', haspopup)
  }

  /**
   * Returns the ARIA label attribute defining an accessible name string for the element when visible text is absent.
   *
   * Возвращает атрибут ARIA label, задающий текстовую метку (доступное имя) для элемента при отсутствии видимого текста.
   * @param label accessible label text or number / текст доступной метки или число
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static label(label?: string | number): AriaList {
    return this.isDataToData('aria-label', label)
  }

  /**
   * Returns the ARIA labelledby attribute identifying the element that serves as the accessible label for the current object.
   *
   * Возвращает атрибут ARIA labelledby, идентифицирующий элемент, который служит текстовой меткой для текущего объекта.
   * @param id identifier of the labeling element / идентификатор элемента-метки
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static labelledby(id?: string): AriaList {
    return this.isDataToData('aria-labelledby', id)
  }

  /**
   * Returns the ARIA invalid attribute indicating that the entered value does not conform to expected validation rules.
   *
   * Возвращает атрибут ARIA invalid, указывающий, что введенное значение не соответствует правилам валидации.
   * @param isInvalid whether the element value is invalid / является ли значение невалидным
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static invalid(isInvalid: boolean = true): AriaList {
    if (isInvalid) {
      return {
        'aria-invalid': this.isTrueOrFalse(isInvalid)
      }
    }

    return {}
  }

  /**
   * Generates composite ARIA attributes (id, controls, haspopup, expanded) for interactive controls and trigger elements.
   *
   * Формирует составной набор ARIA атрибутов (id, controls, haspopup, expanded) для интерактивных элементов управления.
   * @param id element identifier / идентификатор элемента
   * @param controls identifier of the controlled element / идентификатор управляемого элемента
   * @param haspopup popup type or boolean / тип всплывающего окна или булево значение
   * @param expanded whether the controlled element is expanded / развернут ли управляемый элемент
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static control(
    id?: string,
    controls?: string,
    haspopup?: AriaList['aria-haspopup'],
    expanded?: boolean
  ): AriaList {
    return {
      id,
      ...this.controls(controls),
      ...this.haspopup(haspopup),
      ...this.expanded(expanded)
    }
  }

  /**
   * Returns the ARIA hidden attribute indicating whether the element is hidden from assistive technologies and excluded from the accessibility tree.
   *
   * Возвращает атрибут ARIA hidden, указывающий, скрыт ли элемент от вспомогательных технологий и исключен ли из дерева доступности.
   * @param isHidden whether the element is hidden from accessibility tools / скрыт ли элемент от инструментов доступности
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static hidden(
    isHidden: boolean = true
  ): AriaList {
    return {
      'aria-hidden': this.isTrueOrFalse(isHidden)
    }
  }

  /**
   * Returns the ARIA live attribute indicating that an element updates dynamically and defining the announcement urgency for screen readers.
   *
   * Возвращает атрибут ARIA live, указывающий на динамическое обновление содержимого и определяющий приоритет оповещения скринридером.
   * @param live update announcement priority ('off' | 'polite' | 'assertive') / приоритет оповещения об обновлениях ('off' | 'polite' | 'assertive')
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static live(
    live?: AriaList['aria-live']
  ): AriaList {
    return this.isDataToData('aria-live', live)
  }

  /**
   * Returns the ARIA modal attribute indicating whether the element is modal, restricting focus and accessibility navigation to its contents.
   *
   * Возвращает атрибут ARIA modal, указывающий, является ли элемент модальным, ограничивая фокус и навигацию доступности его содержимым.
   * @param isModal whether the element is modal / является ли элемент модальным
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static ariaModal(
    isModal: boolean = true
  ): AriaList {
    return this.isDataToData('aria-modal', isModal)
  }

  /**
   * Generates composite ARIA attributes (modal, labelledby, describedby) for modal windows and dialog overlays.
   *
   * Формирует составной набор ARIA атрибутов (modal, labelledby, describedby) для модальных окон и диалоговых оверлеев.
   * @param isModal whether the window is modal / является ли окно модальным
   * @param ariaLabelledby identifier of the title element / идентификатор элемента заголовка
   * @param ariaDescribedby identifier of the description element / идентификатор элемента описания
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static modal(
    isModal: boolean = true,
    ariaLabelledby?: string,
    ariaDescribedby?: string
  ): AriaList {
    return {
      ...this.ariaModal(isModal),
      ...this.labelledby(ariaLabelledby),
      ...this.describedby(ariaDescribedby)
    }
  }

  /**
   * Returns the ARIA multiselectable attribute indicating that the user may select multiple items simultaneously from selectable descendants.
   *
   * Возвращает атрибут ARIA multiselectable, указывающий, что пользователь может выбрать несколько элементов одновременно среди дочерних элементов.
   * @param isMultiselectable whether multiple items can be selected / разрешен ли множественный выбор элементов
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static multiselectable(isMultiselectable?: boolean): AriaList {
    return {
      'aria-multiselectable': this.isTrueOrFalse(isMultiselectable)
    }
  }

  /**
   * Returns the ARIA selected attribute indicating the current selected state of selectable items such as tabs, options, or rows.
   *
   * Возвращает атрибут ARIA selected, указывающий текущее состояние выбора таких элементов, как вкладки, пункты списка или строки.
   * @param isSelected whether the element is selected / выбран ли элемент
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static selected(isSelected?: boolean): AriaList {
    if (isSelected !== undefined) {
      return {
        'aria-selected': this.isTrueOrFalse(isSelected)
      }
    }

    return {}
  }

  /**
   * Returns the ARIA sort attribute indicating if items in a table or grid column/row are sorted in ascending or descending order.
   *
   * Возвращает атрибут ARIA sort, указывающий, отсортированы ли элементы столбца/строки таблицы или сетки по возрастанию или убыванию.
   * @param sortDir sorting direction ('none' | 'ascending' | 'descending' | 'other') / направление сортировки ('none' | 'ascending' | 'descending' | 'other')
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static sort(sortDir?: AriaList['aria-sort'] | string): AriaList {
    return this.isDataToData('aria-sort', sortDir)
  }

  /**
   * Returns the ARIA orientation attribute indicating whether the element layout orientation is horizontal or vertical.
   *
   * Возвращает атрибут ARIA orientation, указывающий, является ли пространственная ориентация элемента горизонтальной или вертикальной.
   * @param orientation element orientation ('horizontal' | 'vertical' | 'undefined') / ориентация элемента ('horizontal' | 'vertical' | 'undefined')
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static orientation(orientation?: AriaList['aria-orientation']): AriaList {
    return this.isDataToData('aria-orientation', orientation)
  }

  /**
   * Returns ARIA range attributes (valuenow, valuemin, valuemax) defining the current, minimum, and maximum values for range widgets.
   *
   * Возвращает ARIA атрибуты диапазона (valuenow, valuemin, valuemax), определяющие текущее, минимальное и максимальное значения для виджетов с диапазоном.
   * @param value current numeric or string value / текущее числовое или строковое значение
   * @param min minimum allowed value / минимально допустимое значение
   * @param max maximum allowed value / максимально допустимое значение
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  static valueMinMax(
    value?: string | number,
    min?: string | number,
    max?: string | number
  ): AriaList {
    return {
      'aria-valuenow': value,
      'aria-valuemin': min,
      'aria-valuemax': max
    }
  }

  /**
   * Converts a boolean value to an ARIA-compliant string literal ('true' or 'false').
   *
   * Преобразует булево значение в строковый литерал ('true' или 'false'), соответствующий спецификации ARIA.
   * @param value boolean value to convert / преобразуемое булево значение
   * @returns string 'true' or 'false', or undefined / строка 'true', 'false' или undefined
   */
  static isTrueOrFalse(value?: boolean): AriaTrueOrFalse | undefined {
    return value ? 'true' : 'false'
  }

  /**
   * Helper method that constructs an ARIA attribute record only if the provided value is defined and truthy.
   *
   * Вспомогательный метод, формирующий объект с ARIA атрибутом только в том случае, если переданное значение определено и истинно.
   * @param name ARIA attribute name / имя ARIA атрибута
   * @param value attribute value / значение атрибута
   * @returns ARIA attributes object / Объект ARIA атрибутов
   */
  protected static isDataToData<V>(
    name: string,
    value?: V
  ): AriaList {
    if (value) {
      return {
        [name]: value
      }
    }

    return {}
  }
}
