import { TranslatePostCommand } from './TranslatePostCommand'

export class TranslateFramesRead {
  static make() {
    this.read()
  }

  protected static read() {
    TranslatePostCommand.post('frames')
  }
}
