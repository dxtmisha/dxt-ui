import { forEach } from '@dxtmisha/functional-basic'
import type {
  UiFigmaFramesList,
  UiFigmaFrameStylesCssList,
  UiFigmaFrameStylesList
} from '@dxtmisha/figma'

import { FigmaItem } from './FigmaItem'

import type { UiFigmaItemText, UiFigmaNode } from '../types/figmaTypes'

/**
 * Class for working with Figma frames and their elements.
 *
 * Класс для работы с фреймами Figma и их элементами.
 */
export class FigmaFrame {
  /** List of main Figma items/ Список основных элементов Figma */
  protected mainItem: FigmaItem[] = []
  /**
   * List of all Figma items.
   *
   * Список всех элементов Figma.
   */
  protected items: FigmaItem[] = []

  /**
   * Constructor
   * @param page Figma page or node / страница или узел Figma
   * @param selection whether to use the current selection or the entire page / использовать текущее выделение или всю страницу
   */
  constructor(
    protected readonly page: UiFigmaNode,
    protected readonly selection: boolean = false
  ) {
    this.mainItem = this.initMain()
    this.items = this.initBySelection()
  }

  /**
   * Checks if the current context is a selection.
   *
   * Проверяет, является ли текущий контекст выделением.
   * @returns true if the context is a selection / true, если контекст является выделением
   */
  isSelection(): this is { page: PageNode } {
    return this.selection && 'selection' in this.page
  }

  /**
   * Returns all frame items.
   *
   * Возвращает все элементы-фреймы.
   * @returns list of frame items / список элементов-фреймов
   */
  getItemsFrame(): FigmaItem<FrameNode>[] {
    return this.filter<FrameNode>(item => item.isFrame())
  }

  /**
   * Returns all section items.
   *
   * Возвращает все элементы-секции.
   * @returns list of section items / список элементов-секций
   */
  getItemsSection(): FigmaItem<SectionNode>[] {
    return this.filter<SectionNode>(item => item.isSection())
  }

  /**
   * Returns all text items.
   *
   * Возвращает все текстовые элементы.
   * @returns list of text items / список текстовых элементов
   */
  getItemsText(): FigmaItem<TextNode>[] {
    return this.filter<TextNode>(item => item.isText())
  }

  /**
   * Returns a list of frames with their names, IDs, and screenshots.
   *
   * Возвращает список фреймов с их названиями, идентификаторами и скриншотами.
   * @returns promise with frame information list / промис со списком информации о фреймах
   */
  async getItemsInfo(): Promise<UiFigmaFramesList> {
    return await this.getInfoByItems(this.items)
  }

  /**
   * Returns CSS styles for all items.
   *
   * Возвращает CSS-стили для всех элементов.
   * @returns promise with CSS styles list / промис со списком CSS-стилей
   */
  async getItemsCss(): Promise<UiFigmaFrameStylesCssList> {
    const data: UiFigmaFrameStylesCssList = {}

    for (const item of this.items) {
      data[item.getId()] = await item.getCss()
    }

    return data
  }

  /**
   * Returns a list of frames with their styles.
   *
   * Возвращает список фреймов с их стилями.
   * @returns promise with frame styles list / промис со списком стилей фреймов
   */
  async getItemsStyles(): Promise<UiFigmaFrameStylesList> {
    return await this.getStylesByItems(this.items)
  }

  /**
   * Returns main frames from the root node.
   *
   * Возвращает основные фреймы из корневого узла.
   * @returns list of main frame items / список основных элементов-фреймов
   */
  getMainFrames(): FigmaItem[] {
    const main = this.toMain()

    if (main) {
      return main
        .getChildrenItems()
        .filter((item: FigmaItem) => item.isFrame() || item.isSection())
    }

    return []
  }

  /**
   * Returns a list of frames with their names, IDs, and screenshots.
   *
   * Возвращает список фреймов с их названиями, идентификаторами и скриншотами.
   * @returns promise with frame information list / промис со списком информации о фреймах
   */
  async getMainItemsInfo(): Promise<UiFigmaFramesList> {
    return await this.getInfoByItems(this.mainItem)
  }

  /**
   * Returns a list of main frames with their styles.
   *
   * Возвращает список основных фреймов с их стилями.
   * @returns promise with frame styles list / промис со списком стилей фреймов
   */
  async getMainItemsStyles(): Promise<UiFigmaFrameStylesList> {
    return await this.getStylesByItems(this.mainItem, true)
  }

  /**
   * Returns all text nodes with their IDs grouped by text content.
   *
   * Возвращает все текстовые узлы с их идентификаторами, сгруппированные по текстовому содержимому.
   * @returns list of grouped text items / список сгруппированных текстовых элементов
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
   * Takes screenshots of the main items.
   *
   * Делает скриншоты основных элементов.
   * @returns promise with list of screenshots as Uint8Array / промис со списком скриншотов в формате Uint8Array
   */
  async screenshot() {
    const images: Uint8Array[] = []

    for (const item of this.mainItem) {
      images.push((await item.exportJpg()) as Uint8Array)
    }

    return images
  }

  /**
   * Returns information about the specified items.
   *
   * Возвращает информацию об указанных элементах.
   * @param items list of items / список элементов
   * @returns promise with information list / промис со списком информации
   */
  protected async getInfoByItems(items: FigmaItem[]): Promise<UiFigmaFramesList> {
    const data: UiFigmaFramesList = []

    for (const item of items) {
      data.push(await item.getInfo())
    }

    return data
  }

  /**
   * Returns styles for the specified items.
   *
   * Возвращает стили для указанных элементов.
   * @param items list of items / список элементов
   * @param subStyle whether to include child styles / нужно ли включать стили дочерних элементов
   * @returns promise with styles list / промис со списком стилей
   */
  protected async getStylesByItems(
    items: FigmaItem[],
    subStyle: boolean = false
  ): Promise<UiFigmaFrameStylesList> {
    const data: UiFigmaFrameStylesList = []

    for (const item of items) {
      const styleItem = await item.getStyles()

      if (subStyle) {
        styleItem.childrenStyles = await (new FigmaFrame(item.get())).getItemsCss()
      }

      data.push(styleItem)
    }

    return data
  }

  /**
   * Initializes main items based on selection or entire page.
   *
   * Инициализирует основные элементы на основе выделения или всей страницы.
   * @returns list of main Figma items / список основных элементов Figma
   */
  protected initMain() {
    if (this.isSelection()) {
      return forEach(
        [...this.page.selection],
        item => new FigmaItem(item)
      )
    }

    return [new FigmaItem(this.page)]
  }

  /**
   * Recursively initializes all items from the page.
   *
   * Рекурсивно инициализирует все элементы со страницы.
   * @param page Figma page or node / страница или узел Figma
   * @returns list of initialized Figma items / список инициализированных элементов Figma
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
   * @returns list of initialized Figma items / список инициализированных элементов Figma
   */
  protected initBySelection() {
    if (this.isSelection()) {
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
   * @returns filtered list of items / отфильтрованный список элементов
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
   * @param item starting item / начальный элемент
   * @returns root Figma item / корневой элемент Figma
   */
  protected toMain(
    item: FigmaItem = new FigmaItem(this.page)
  ): FigmaItem {
    const parent = item.getParentItem()

    if (
      parent
      && !parent.isDocument()
    ) {
      return this.toMain(parent)
    }

    return item
  }
}
