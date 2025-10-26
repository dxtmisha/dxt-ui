import { FigmaItem } from './FigmaItem'
import type { UiFigmaItemText, UiFigmaNode } from '../types/figmaTypes'

export class FigmaFrame {
  protected items: FigmaItem[] = []

  /**
   * Constructor
   * @param page
   */
  constructor(
    protected readonly page: UiFigmaNode
  ) {
    this.items = this.initItems(page)
  }

  getItemsFrame() {
    return this.filter<FrameNode>(item => item.isFrame())
  }

  getItemsSection() {
    return this.filter<SectionNode>(item => item.isSection())
  }

  getItemsText() {
    return this.filter<TextNode>(item => item.isText())
  }

  getMainFrames() {
    const main = this.toMain()

    if (main) {
      return main
        .getChildrenItems()
        .filter(item => item.isFrame() || item.isSection())
    }

    return []
  }

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

  protected filter<R extends UiFigmaNode>(callback: (
    item: FigmaItem) => boolean
  ): FigmaItem<R>[] {
    return this.items.filter(callback) as FigmaItem<R>[]
  }

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
