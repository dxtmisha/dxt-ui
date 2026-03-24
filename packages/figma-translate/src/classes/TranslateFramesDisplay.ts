import { shallowRef } from 'vue'

import type { TranslateFrameItem } from '../types/TranslateTypes'

export class TranslateFramesDisplay {
  protected static frames = shallowRef<TranslateFrameItem[]>()

  static is(): boolean {
    return Boolean(
      this.frames.value
      && this.frames.value.length > 0
    )
  }

  static get(): TranslateFrameItem[] {
    return this.frames.value || []
  }

  static update(frames: TranslateFrameItem[]): void {
    this.frames.value = frames
  }
}
