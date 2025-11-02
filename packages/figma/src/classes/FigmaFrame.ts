import { FigmaItem } from './FigmaItem'
import type { UiFigmaItemText, UiFigmaNode } from '../types/figmaTypes'

/**
 * Class for working with Figma frames and their elements.
 *
 * Класс для работы с фреймами Figma и их элементами.
 */
export class FigmaFrame {
  /**
   * List of all Figma items.
   *
   * Список всех элементов Figma.
   */
  protected items: FigmaItem[] = []

  /**
   * Constructor
   * @param page Figma page or node/ страница или узел Figma
   */
  constructor(
    protected readonly page: UiFigmaNode
  ) {
    this.items = this.initBySelection()
  }

  /**
   * Returns all frame items.
   *
   * Возвращает все элементы-фреймы.
   */
  getItemsFrame() {
    return this.filter<FrameNode>(item => item.isFrame())
  }

  /**
   * Returns all section items.
   *
   * Возвращает все элементы-секции.
   */
  getItemsSection() {
    return this.filter<SectionNode>(item => item.isSection())
  }

  /**
   * Returns all text items.
   *
   * Возвращает все текстовые элементы.
   */
  getItemsText() {
    return this.filter<TextNode>(item => item.isText())
  }

  /**
   * Returns main frames from the root node.
   *
   * Возвращает основные фреймы из корневого узла.
   */
  getMainFrames() {
    const main = this.toMain()

    if (main) {
      return main
        .getChildrenItems()
        .filter(item => item.isFrame() || item.isSection())
    }

    return []
  }

  /**
   * Returns all text nodes with their IDs grouped by text content.
   *
   * Возвращает все текстовые узлы с их идентификаторами, сгруппированные по текстовому содержимому.
   */
  getTexts(): UiFigmaItemText[] {
    const data: UiFigmaItemText[] = []
    const list = this.filter<TextNode>(
      item => item.isTextNoValue()
    )

    list.forEach((item) => {
      const text = item.getText()
      const value = data.find(item => item.text === text)

      if (value) {
        value.id.push(item.getId())
      } else {
        data.push({
          id: [item.getId()],
          text
        })
      }
    })

    return data
  }

  /**
   * Recursively initializes all items from the page.
   *
   * Рекурсивно инициализирует все элементы со страницы.
   * @param page Figma page or node/ страница или узел Figma
   */
  protected initItems(
    page: UiFigmaNode
  ): FigmaItem[] {
    const data: FigmaItem[] = []

    if ('children' in page) {
      for (const item of page.children) {
        data.push(
          new FigmaItem(item),
          ...this.initItems(item)
        )
      }
    }

    return data
  }

  /**
   * Initializes items based on the current selection or entire page.
   *
   * Инициализирует элементы на основе текущего выделения или всей страницы.
   */
  protected initBySelection() {
    if ('selection' in this.page) {
      const items: FigmaItem[] = []

      for (const item of this.page.selection) {
        items.push(...this.initItems(item))
      }

      return items
    }

    return this.initItems(this.page)
  }

  /**
   * Filters items by the specified condition.
   *
   * Фильтрует элементы по указанному условию.
   * @param callback filter function/ функция фильтрации
   */
  protected filter<R extends UiFigmaNode>(callback: (
    item: FigmaItem) => boolean
  ): FigmaItem<R>[] {
    return this.items.filter(callback) as FigmaItem<R>[]
  }

  /**
   * Returns the main (root) item in the hierarchy.
   *
   * Возвращает главный (корневой) элемент в иерархии.
   * @param item starting item/ начальный элемент
   */
  protected toMain(
    item: FigmaItem = new FigmaItem(this.page)
  ) {
    const parent = item.getParentItem()

    if (
      parent
      && !parent.isDocument()
    ) {
      this.toMain(parent)
    }

    return item
  }
}
