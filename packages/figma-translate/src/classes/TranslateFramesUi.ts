import { useFigmaUiMessenger } from '@dxtmisha/figma'
import { TranslatePostCommand, TranslatePostType, type TranslatePostItem } from '../types/TranslateTypes'

export class TranslateFramesUi {
  protected static post = useFigmaUiMessenger()

  static make(): void {
    this.post.add(TranslatePostType.frames, this.on)
  }

  static update() {
    this.post.post(
      TranslatePostType.frames,
      { command: TranslatePostCommand.update }
    )
  }

  protected static on = (message: TranslatePostItem) => {
    console.log(message)
  }
}
