import { ref } from 'vue'

import { MotionAxisStatus } from './MotionAxisStatus'

import type { MotionAxisSelectedValue } from './basicTypes'

export class MotionAxisSlides {
  readonly item = ref<string[]>([])

  constructor(
    protected readonly status: MotionAxisStatus
  ) {
  }

  get() {
    return this.item
  }

  /**
   * Returns the selected slide.
   *
   * Возвращает выбранный слайд.
   * @param step change step number / номер шага изменения
   */
  getByIndex(step: number): string | undefined {
    const slides = this.item.value ?? []
    const selected = this.findIndex()

    if (selected === -1) {
      return slides?.[0]
    }

    const focus = selected + step

    if (focus >= slides.length) {
      return slides?.[0]
    }

    if (focus <= -1) {
      return slides?.[slides.length - 1]
    }

    return slides?.[focus]
  }

  findIndex(
    selected: MotionAxisSelectedValue = this.status.get()
  ) {
    return this.item.value.findIndex(item => item === selected)
  }

  add(key: string): this {
    this.item.value.push(key)
    return this
  }

  reset() {
    this.item.value = []
  }
}
