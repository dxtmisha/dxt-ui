import { forEach } from '@dxtmisha/functional/lite'
import type { UiFigmaExportFormat, UiFigmaNode } from '../types/figmaTypes'

export class FigmaItem<T extends UiFigmaNode = UiFigmaNode> {
  constructor(
    protected item: T
  ) {
  }

  isDocument(): this is { item: DocumentNode } {
    return this.getType() === 'DOCUMENT'
  }

  isFrame(): this is { item: FrameNode } {
    return this.getType() === 'FRAME'
  }

  isSection(): this is { item: SectionNode } {
    return this.getType() === 'SECTION'
  }

  isText(): this is { item: TextNode } {
    return this.getType() === 'TEXT'
  }

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

  get(): T {
    return this.item
  }

  getType() {
    if ('type' in this.item) {
      return this.item.type
    }

    return undefined
  }

  getParent() {
    if ('parent' in this.item) {
      return this.item.parent ?? undefined
    }

    return undefined
  }

  getParentItem(): FigmaItem | undefined {
    const parent = this.getParent()

    if (parent) {
      return new FigmaItem(parent)
    }

    return undefined
  }

  getChildren(): UiFigmaNode[] {
    if ('children' in this.item) {
      return this.item.children as UiFigmaNode[]
    }

    return []
  }

  getChildrenItems(): FigmaItem[] {
    return forEach(this.getChildren(), child => new FigmaItem(child))
  }

  getId(): string {
    if ('id' in this.item) {
      return this.item.id
    }

    return ''
  }

  getName(): string {
    if ('name' in this.item) {
      return this.item.name
    }

    return this.getId()
  }

  async exportJpg() {
    return await this.exportItem('JPG')
  }

  async exportJson() {
    return await this.exportItem('JSON_REST_V1')
  }

  getText(): string {
    if (this.isText()) {
      return this.item.characters.trim()
    }

    return ''
  }

  protected getExportSettings(
    formatSettings: UiFigmaExportFormat | ExportSettings
  ): ExportSettings {
    switch (formatSettings) {
      case 'JPG':
      case 'PNG':
      case 'SVG':
      case 'PDF':
      case 'JSON_REST_V1':
        return {
          format: formatSettings
        } as any as ExportSettings
      default:
        return formatSettings
    }
  }

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
