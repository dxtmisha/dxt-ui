import { type Ref } from 'vue'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'
import { DraggableWrapperItem } from './DraggableWrapperItem'

/**
 * Helper class for managing multiselection styles and states during drag /
 * Вспомогательный класс для управления стилями и состояниями множественного выбора при перетаскивании
 */
export class DraggableWrapperSelection {
  /**
   * Constructor
   * @param id unique component identifier / уникальный идентификатор компонента
   * @param position root element ref / ссылка на корневой элемент
   * @param itemActive active draggable element ref / ссылка на активный перемещаемый элемент
   * @param itemSelection selected elements ref / ссылка на список выбранных элементов
   */
  constructor(
    protected readonly id: string,
    protected readonly classes: DraggableWrapperClassesData,
    protected readonly position: Ref<HTMLElement | undefined>,
    protected readonly item: DraggableWrapperItem
  ) { }

  /**
   * Gets list of dataset values for the selection /
   * Возвращает список значений dataset для выбранных элементов
   * @returns array of dataset values / массив значений dataset
   */
  getSelection(): (string | undefined)[] {
    const selection = this.item.getSelection()
    const active = this.item.getActive()
    const list = selection || (active ? [active] : [])
    return list.map(item => item?.dataset?.value)
  }

  /**
   * Finds all elements involved in the current selection stack /
   * Находит все элементы, участвующие в текущем стеке выбора
   * @returns array of html elements / массив html-элементов
   */
  protected findSelection(): HTMLElement[] {
    if (!this.position.value) {
      return []
    }
    const elements = this.position.value.querySelectorAll<HTMLElement>(
      `.${this.id}.${this.classes.list.active}, .${this.id}.${this.classes.list.selected}`
    )
    return Array.from(elements)
  }

  /**
   * Coordinates the selections stack visual offset and rotation angles /
   * Координирует визуальное смещение и углы поворота стека выбранных элементов
   */
  goSelection(): void {
    const active = this.item.getActive()
    if (!active) {
      return
    }

    if (active.classList.contains(this.classes.list.selected)) {
      let shift = 1
      const deg = 4
      const max = 4

      const selection = this.findSelection()
      this.item.setSelection(selection)

      selection.forEach((item) => {
        if (item !== active) {
          const rect = item.getBoundingClientRect()

          item.style.setProperty('--_cp-width', `${rect.width}px`)
          item.style.setProperty('--_cp-height', `${rect.height}px`)
          item.style.setProperty('--_cp-shift', `-${max * deg - shift * deg}deg`)
          item.classList.add(this.classes.list.active, this.classes.list.selection)

          if (shift < max) {
            shift++
          } else {
            item.classList.add(this.classes.list.selectionMore)
          }
        }
      })
    }
  }
}
