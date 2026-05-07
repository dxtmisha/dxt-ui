import { forEach } from '@dxtmisha/functional-basic'
import type {
  UiFigmaFramesItem,
  UiFigmaFrameStylesData,
  UiFigmaFrameStylesItem,
  UiFigmaFrameStylesJson
} from '@dxtmisha/figma'

import type { UiFigmaExportFormat, UiFigmaNode } from '../types/figmaTypes'

/**
 * Class for working with Figma nodes.
 *
 * Класс для работы с узлами Figma.
 * @template T type of Figma node/ тип узла Figma
 */
export class FigmaItem<T extends UiFigmaNode = UiFigmaNode> {
  /**
   * Constructor
   * @param item Figma node/ узел Figma
   */
  constructor(
    protected item: T
  ) {
  }

  /**
   * Checks if the node is a document.
   *
   * Проверяет, является ли узел документом.
   * @returns true if the node is a document / true, если узел является документом
   */
  isDocument(): this is { item: DocumentNode } {
    return this.getType() === 'DOCUMENT'
  }

  /**
   * Checks if the node is a frame.
   *
   * Проверяет, является ли узел фреймом.
   * @returns true if the node is a frame / true, если узел является фреймом
   */
  isFrame(): this is { item: FrameNode } {
    return this.getType() === 'FRAME'
  }

  /**
   * Checks if the node is a section.
   *
   * Проверяет, является ли узел секцией.
   * @returns true if the node is a section / true, если узел является секцией
   */
  isSection(): this is { item: SectionNode } {
    return this.getType() === 'SECTION'
  }

  /**
   * Checks if the node is a text node.
   *
   * Проверяет, является ли узел текстовым узлом.
   * @returns true if the node is a text node / true, если узел является текстовым узлом
   */
  isText(): this is { item: TextNode } {
    return this.getType() === 'TEXT'
  }

  /**
   * Checks if the node is a text node with a meaningful value.
   *
   * Проверяет, является ли узел текстовым узлом с осмысленным значением.
   * @returns true if it is a text node with a value / true, если это текстовый узел со значением
   */
  isTextNoValue(): this is { item: TextNode } {
    if (this.isText()) {
      const text = this.getText()

      return !(
        text === ''
        || text.match(/^[\d., ]+(|[^ ]{1,3})$/)
      )
    }

    return false
  }

  /**
   * Checks if the node is in the current page.
   *
   * Проверяет, находится ли узел на текущей странице.
   * @returns true if the node is in the current page / true, если узел находится на текущей странице
   */
  inCurrentPage(): boolean {
    return this.getParentPage()?.id === figma.currentPage.id
  }

  /**
   * Returns the Figma node.
   *
   * Возвращает узел Figma.
   * @returns Figma node / узел Figma
   */
  get(): T {
    return this.item
  }

  /**
   * Returns the type of the node.
   *
   * Возвращает тип узла.
   * @returns node type / тип узла
   */
  getType() {
    if ('type' in this.item) {
      return this.item.type
    }

    return undefined
  }

  /**
   * Returns the parent node.
   *
   * Возвращает родительский узел.
   * @returns parent node / родительский узел
   */
  getParent() {
    if ('parent' in this.item) {
      return this.item.parent ?? undefined
    }

    return undefined
  }

  /**
   * Returns the parent node wrapped in FigmaItem.
   *
   * Возвращает родительский узел, обернутый в FigmaItem.
   * @returns parent FigmaItem / родительский FigmaItem
   */
  getParentItem(): FigmaItem | undefined {
    const parent = this.getParent()

    if (parent) {
      return new FigmaItem(parent)
    }

    return undefined
  }

  /**
   * Returns the parent page.
   *
   * Возвращает родительскую страницу.
   * @returns parent page / родительская страница
   */
  getParentPage(): PageNode | undefined {
    let parent = this.getParent()

    while (parent && parent.type !== 'PAGE') {
      if (parent.parent) {
        parent = parent.parent
      } else {
        return undefined
      }
    }

    return parent as PageNode | undefined
  }

  /**
   * Returns the parent page wrapped in FigmaItem.
   *
   * Возвращает родительскую страницу, обернутую в FigmaItem.
   * @returns parent page FigmaItem / родительская страница FigmaItem
   */
  getParentPageItem(): FigmaItem | undefined {
    const parentPage = this.getParentPage()

    if (parentPage) {
      return new FigmaItem(parentPage)
    }

    return undefined
  }

  /**
   * Returns the child nodes.
   *
   * Возвращает дочерние узлы.
   * @returns list of child nodes / список дочерних узлов
   */
  getChildren(): UiFigmaNode[] {
    if ('children' in this.item) {
      return this.item.children as UiFigmaNode[]
    }

    return []
  }

  /**
   * Returns the child nodes wrapped in FigmaItem.
   *
   * Возвращает дочерние узлы, обернутые в FigmaItem.
   * @returns list of child FigmaItems / список дочерних FigmaItems
   */
  getChildrenItems(): FigmaItem[] {
    const children: FigmaItem[] = []

    for (const child of this.getChildren()) {
      children.push(new FigmaItem(child))
    }

    return children
  }

  /**
   * Returns the node ID.
   *
   * Возвращает идентификатор узла.
   * @returns node ID / идентификатор узла
   */
  getId(): string {
    if ('id' in this.item) {
      return this.item.id
    }

    return ''
  }

  /**
   * Returns the node name.
   *
   * Возвращает имя узла.
   * @returns node name / имя узла
   */
  getName(): string {
    if ('name' in this.item) {
      return this.item.name
    }

    return this.getId()
  }

  /**
   * Returns the text content of the node.
   *
   * Возвращает текстовое содержимое узла.
   * @returns text content / текстовое содержимое
   */
  getText(): string {
    if (this.isText()) {
      return this.item.characters.trim()
    }

    return ''
  }

  /**
   * Returns the CSS styles of the node.
   *
   * Возвращает CSS-стили узла.
   * @returns promise with CSS styles / промис с CSS-стилями
   */
  async getCss(): Promise<Record<string, string>> {
    if ('getCSSAsync' in this.item) {
      return await this.item.getCSSAsync()
    }

    return {}
  }

  /**
   * Returns information about the node.
   *
   * Возвращает информацию об узле.
   * @returns promise with node information / промис с информацией об узле
   */
  async getInfo(): Promise<UiFigmaFramesItem> {
    return {
      name: this.getName(),
      id: this.getId(),
      image: await this.exportJpg()
    }
  }

  /**
   * Returns the styles of the node.
   *
   * Возвращает стили узла.
   * @returns promise with node styles / промис со стилями узла
   */
  async getStyles(): Promise<UiFigmaFrameStylesItem> {
    return {
      ...(await this.getInfo()),
      json: await this.exportJsonCompact(),
      text: this.getText(),
      styles: await this.getCss()
    }
  }

  /**
   * Exports the node as JPG.
   *
   * Экспортирует узел в формате JPG.
   * @returns promise with image data as Uint8Array / промис с данными изображения в формате Uint8Array
   */
  async exportJpg() {
    return await this.exportItem('JPG')
  }

  /**
   * Exports the node as JSON.
   *
   * Экспортирует узел в формате JSON.
   * @returns promise with node data in JSON format / промис с данными узла в формате JSON
   */
  async exportJson() {
    return await this.exportItem('JSON_REST_V1')
  }

  /**
   * Exports the node as compact JSON.
   *
   * Экспортирует узел в формате компактного JSON.
   * @returns promise with compact JSON data / промис с компактными данными JSON
   */
  async exportJsonCompact(): Promise<UiFigmaFrameStylesData | undefined> {
    const json = (await this.exportJson()) as Record<string, any>

    if (json) {
      return {
        document: this.toJsonCompact(json.document),
        styles: json.styles
      }
    }

    return undefined
  }

  /**
   * Selects the node.
   *
   * Выделяет узел.
   */
  toSelection() {
    figma.currentPage.selection = [this.item as never]
    figma.viewport.scrollAndZoomIntoView([this.item as never])
  }

  /**
   * Moves to the page containing the node and selects it.
   *
   * Перемещает на страницу, содержащую узел, и выделяет его.
   */
  async toPageAndSelection() {
    if (this.inCurrentPage()) {
      this.toSelection()
    }

    const parentPage = this.getParentPage()

    if (parentPage) {
      await figma.setCurrentPageAsync(parentPage)
      this.toSelection()
    }
  }

  /**
   * Converts format settings to ExportSettings.
   *
   * Преобразует настройки формата в ExportSettings.
   * @param formatSettings format settings / настройки формата
   * @returns export settings / настройки экспорта
   */
  protected getExportSettings(
    formatSettings: UiFigmaExportFormat | ExportSettings
  ): ExportSettings {
    switch (formatSettings) {
      case 'JSON_REST_V1':
      case 'JPG':
      case 'PNG':
      case 'SVG':
      case 'PDF':
        return {
          format: formatSettings
        } as any as ExportSettings
      default:
        return formatSettings
    }
  }

  /**
   * Exports the node in the specified format.
   *
   * Экспортирует узел в указанном формате.
   * @param formatSettings format settings / настройки формата
   * @returns promise with exported data / промис с экспортированными данными
   */
  protected async exportItem(
    formatSettings: UiFigmaExportFormat | ExportSettings
  ) {
    if ('exportAsync' in this.item) {
      return await (this.item as FrameNode)
        .exportAsync(this.getExportSettings(formatSettings))
    }

    return ''
  }

  /**
   * Converts node data to compact JSON format.
   *
   * Преобразует данные узла в компактный формат JSON.
   * @param data node data / данные узла
   * @returns compact JSON data / компактные данные JSON
   */
  protected toJsonCompact(data: Record<string, any>): UiFigmaFrameStylesJson {
    const item: UiFigmaFrameStylesJson = {
      id: String(data.id),
      name: String(data.name)
    }

    if ('type' in data) {
      item.type = data.type
    }

    if ('characters' in data) {
      item.characters = data.characters
    }

    if ('style' in data) {
      item.style = data.style
    }

    if ('styles' in data) {
      item.styles = data.styles
    }

    if (
      'children' in data
      && data.children
      && data.children.length > 0
    ) {
      item.children = forEach(data.children, (children: Record<string, any>) => this.toJsonCompact(children))
    }

    return item
  }
}
