import { ref } from 'vue'
import { forEach, getExp, strFill } from '@dxt-ui/functional'

/**
 * Class for storing counts of entered characters for elastic ("rubber") groups.
 *
 * Класс для хранения количества введённых символов для «резиновых» групп.
 */
export class MaskRubberItem {
  /** Map: group name -> entered length/ Карта: имя группы -> введённая длина */
  protected readonly item = ref<Record<string, number>>({})

  /**
   * Checks whether group has a non‑zero stored length.
   *
   * Проверяет, есть ли у группы ненулевая длина.
   * @param groupName group name / название группы
   */
  is(groupName: string): boolean {
    return Number(this.item.value?.[groupName]) > 0
  }

  /**
   * Returns stored length for group (0 if none).
   *
   * Возвращает сохранённую длину группы (0 если нет).
   * @param groupName group name / название группы
   */
  getByIndex(groupName: string): number {
    return this.item.value?.[groupName] ?? 0
  }

  /**
   * Increments stored length for group by 1.
   *
   * Увеличивает сохранённую длину группы на 1.
   * @param groupName group name / название группы
   */
  add(groupName: string): this {
    this.item.value = {
      ...this.item.value,
      [groupName]: this.getByIndex(groupName) + 1
    }

    return this
  }

  /**
   * Decreases stored length for group by 1 (if > 0).
   *
   * Уменьшает сохранённую длину группы на 1 (если > 0).
   * @param groupName group name / название группы
   * @returns true if decreased / true если уменьшено
   */
  pop(groupName: string): boolean {
    if (this.is(groupName)) {
      this.item.value = {
        ...this.item.value,
        [groupName]: this.getByIndex(groupName) - 1
      }

      return true
    }

    return false
  }

  /**
   * Resets all stored lengths.
   *
   * Сбрасывает все сохранённые длины.
   */
  reset(): this {
    this.item.value = {}
    return this
  }

  /**
   * Expands mask by duplicating matched group placeholders according to stored lengths.
   *
   * Расширяет маску, дублируя плейсхолдеры групп по сохранённым длинам.
   * @param mask original mask / исходная маска
   */
  expandMask(mask: string): string {
    let value = mask

    forEach(this.item.value, (length, index) => {
      value = value.replace(
        getExp(index, 'g', '([:value]+)'),
        (all: string) => `${all}${strFill(index, length)}`
      )
    })

    return value
  }
}
