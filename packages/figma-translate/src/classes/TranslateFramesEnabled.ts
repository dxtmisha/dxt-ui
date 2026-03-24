import { shallowRef } from 'vue'
import { useFigmaUiMessenger } from '@dxtmisha/figma'

import { TranslatePostCommand, TranslatePostType } from '../types/TranslateTypes'
import type { TranslateFramesEnabledData } from '../types/framesTypes'

export class TranslateFramesEnabled {
  protected static post = useFigmaUiMessenger()
  protected static enabled = shallowRef<TranslateFramesEnabledData>()

  static is(name: string): boolean {
    return this.enabled.value?.[name] || true
  }

  static set(name: string, isEnabled: boolean): void {
    this.postData(name, isEnabled)
    this.enabled.value = {
      ...this.enabled.value,
      [name]: isEnabled
    }
  }

  static update(enabled: TranslateFramesEnabledData): void {
    this.enabled.value = enabled
  }

  protected static postData(name: string, isEnabled: boolean): void {
    this.post.post(
      TranslatePostType.frames,
      {
        command: TranslatePostCommand.framesEnabled,
        name,
        isEnabled
      }
    )
  }
}
