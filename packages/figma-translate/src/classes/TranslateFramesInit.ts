import { FigmaFrame, FigmaItem, useFigmaPluginMessenger } from '@dxtmisha/figma'

import { TranslatePostCommand, TranslatePostType, type TranslateFrameItem } from '../types/TranslateTypes'

export class TranslateFramesInit {
  protected static list?: FigmaItem[]
  protected static listData?: TranslateFrameItem[]

  static async make() {
    const listData = await this.getListData()

    useFigmaPluginMessenger().post(
      TranslatePostType.frames,
      {
        command: TranslatePostCommand.frames,
        data: listData
      }
    )
  }

  protected static getList(): FigmaItem[] {
    if (!this.list) {
      this.list = new FigmaFrame(figma.currentPage)
        .getMainFrames()
    }

    return this.list
  }

  protected static async getListData(): Promise<TranslateFrameItem[]> {
    if (!this.listData) {
      this.listData = []

      for (const item of this.getList()) {
        this.listData.push({
          name: item.getName(),
          id: item.getId(),
          image: await item.exportJpg()
        })
      }
    }

    return this.listData
  }
}
