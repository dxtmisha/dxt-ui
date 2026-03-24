import { useFigmaPluginMessenger } from '@dxtmisha/figma'

import { TranslateFramesInit } from './TranslateFramesInit'
import { TranslateFramesInitEnabled } from './TranslateFramesInitEnabled'

import { TranslatePostCommand, TranslatePostType, type TranslatePostItem } from '../types/TranslateTypes'

export class TranslateFramesPlugin {
  protected static post = useFigmaPluginMessenger()

  static make(): void {
    this.post.add(TranslatePostType.frames, this.on)
  }

  protected static on = (message: TranslatePostItem) => {
    switch (message.command) {
      case TranslatePostCommand.framesEnabled:
        TranslateFramesInitEnabled.set(message.name, message.isEnabled)
        break
      case TranslatePostCommand.update:
        TranslateFramesInit.make()
        break
    }
  }
}
