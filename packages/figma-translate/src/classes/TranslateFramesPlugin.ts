import { useFigmaPluginMessenger } from '@dxtmisha/figma'
import { TranslatePostCommand, TranslatePostType, type TranslatePostItem } from '../types/TranslateTypes'
import { TranslateFramesInit } from './TranslateFramesInit'

export class TranslateFramesPlugin {
  protected static post = useFigmaPluginMessenger()

  static make(): void {
    this.post.add(TranslatePostType.frames, this.on)
  }

  protected static on = (message: TranslatePostItem) => {
    switch (message.command) {
      case TranslatePostCommand.update:
        TranslateFramesInit.make()
        break
    }
  }
}
