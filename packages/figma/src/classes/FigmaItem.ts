import type { UiFigmaExportFormat, UiFigmaNode } from '../types/figmaTypes'

/**
 * Class for working with Figma nodes.
 *
 * Класс для работы с узлами Figma.
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
   */
  isDocument(): this is { item: DocumentNode } {
    return this.getType() === 'DOCUMENT'
  }

  /**
   * Checks if the node is a frame.
   *
   * Проверяет, является ли узел фреймом.
   */
  isFrame(): this is { item: FrameNode } {
    return this.getType() === 'FRAME'
  }

  /**
   * Checks if the node is a section.
   *
   * Проверяет, является ли узел секцией.
   */
  isSection(): this is { item: SectionNode } {
    return this.getType() === 'SECTION'
  }

  /**
   * Checks if the node is a text node.
   *
   * Проверяет, является ли узел текстовым узлом.
   */
  isText(): this is { item: TextNode } {
    return this.getType() === 'TEXT'
  }

  /**
   * Checks if the node is a text node with a meaningful value.
   *
   * Проверяет, является ли узел текстовым узлом с осмысленным значением.
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
   * Returns the Figma node.
   *
   * Возвращает узел Figma.
   */
  get(): T {
    return this.item
  }

  /**
   * Returns the type of the node.
   *
   * Возвращает тип узла.
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
   */
  getParentItem(): FigmaItem | undefined {
    const parent = this.getParent()

    if (parent) {
      return new FigmaItem(parent)
    }

    return undefined
  }

  /**
   * Returns the child nodes.
   *
   * Возвращает дочерние узлы.
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
   */
  getName(): string {
    if ('name' in this.item) {
      return this.item.name
    }

    return this.getId()
  }

  /**
   * Exports the node as JPG.
   *
   * Экспортирует узел в формате JPG.
   */
  async exportJpg() {
    return await this.exportItem('JPG')
  }

  /**
   * Exports the node as JSON.
   *
   * Экспортирует узел в формате JSON.
   */
  async exportJson() {
    return await this.exportItem('JSON_REST_V1')
  }

  /**
   * Returns the text content of the node.
   *
   * Возвращает текстовое содержимое узла.
   */
  getText(): string {
    if (this.isText()) {
      return this.item.characters.trim()
    }

    return ''
  }

  /**
   * Converts format settings to ExportSettings.
   *
   * Преобразует настройки формата в ExportSettings.
   * @param formatSettings format settings/ настройки формата
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
   * @param formatSettings format settings/ настройки формата
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
}
