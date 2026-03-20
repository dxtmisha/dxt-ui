import { useFigmaUiMessenger } from '@dxtmisha/figma'
import { TranslateCommand } from '../types/TranslateTypes'

export class TranslateFramesUi {
  protected static post = useFigmaUiMessenger()

  static make(): void {
    this.post.add(TranslateCommand.frames, this.on)
  }

  static update() {
    console.log('update')
    this.post.post(TranslateCommand.frames, { command: 'update' })
  }

  protected static on = (message: any) => {
    console.log(message)
  }
}
