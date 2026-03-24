import { FigmaFrame, FigmaItem, useFigmaPluginMessenger } from '@dxtmisha/figma'
import { TranslateFramesInitEnabled } from './TranslateFramesInitEnabled'

import { TranslatePostCommand, TranslatePostType, type TranslateFrameItem } from '../types/TranslateTypes'

export class TranslateFramesInit {
  protected static list?: FigmaItem[]
  protected static listData?: TranslateFrameItem[]

  static async make() {
    const listData = await this.getListData()

    await this.makeEnabled()

    useFigmaPluginMessenger().post(
      TranslatePostType.frames,
      {
        command: TranslatePostCommand.frames,
        data: listData,
        enabled: TranslateFramesInitEnabled.get()
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
        console.log('item, type', item)
        this.listData.push({
          name: item.getName(),
          id: item.getId(),
          image: await item.exportJpg()
        })
      }
    }

    return this.listData
  }

  protected static async makeEnabled(): Promise<void> {
    const listData = await this.getListData()

    listData.forEach((item) => {
      console.log('item', item)
    })
  }
}
