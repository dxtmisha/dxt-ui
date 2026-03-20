import { useFigmaPluginMessenger } from '@dxtmisha/figma'
import { TranslateCommand } from '../types/TranslateTypes'

export class TranslateFramesPlugin {
  protected static post = useFigmaPluginMessenger()

  static make(): void {
    this.post.add(TranslateCommand.frames, this.on)
  }

  static update() {
    this.post.post(TranslateCommand.frames, { command: 'update' })
  }

  protected static on = (message: any) => {
    console.log('message', message)
  }
}
