import type { UiFigmaNode } from '../types/figmaTypes'

export class FigmaItem<T extends UiFigmaNode = UiFigmaNode> {
  constructor(
    protected item: T
  ) {
  }

  get(): T {
    return this.item
  }

  isFrame(): this is { item: FrameNode } {
    return this.getType() === 'FRAME'
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

  getType() {
    if ('type' in this.item) {
      return this.item.type
    }

    return undefined
  }

  getParent() {
    if ('parent' in this.item) {
      return this.item.parent
    }

    return undefined
  }

  getId(): string {
    if ('id' in this.item) {
      return this.item.id
    }

    return ''
  }

  getText(): string {
    if (this.isText()) {
      return this.item.characters.trim()
    }

    return ''
  }
}
