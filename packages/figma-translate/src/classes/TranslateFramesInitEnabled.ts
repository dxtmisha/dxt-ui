import { useFigmaStorage } from '@dxtmisha/figma'
import type { TranslateFramesEnabledData } from '../types/framesTypes'

export class TranslateFramesInitEnabled {
  protected static list = useFigmaStorage<TranslateFramesEnabledData>('translate-frames-enabled')

  static is(name: string): boolean {
    return name in this.get()
  }

  static get(): TranslateFramesEnabledData {
    return this.list.get({}) as TranslateFramesEnabledData
  }

  static set(
    name: string,
    isEnabled: boolean
  ) {
    this.list.set({
      ...this.get(),
      [name]: isEnabled
    })
  }

  static putIfAbsent(
    name: string,
    isEnabled: boolean
  ) {
    if (!this.is(name)) {
      this.set(name, isEnabled)
    }
  }
}
