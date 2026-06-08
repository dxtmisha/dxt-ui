import { ref } from 'vue'

export class DraggableWrapperItem {
  protected readonly active = ref<HTMLElement>()
  protected readonly selection = ref<HTMLElement[]>()

  get start(): HTMLElement[] {
    if (this.selection.value) {
      return this.selection.value
    }

    const active = this.getActive()

    if (active) {
      return [active]
    }

    return []
  }

  getActive(): HTMLElement | undefined {
    return this.active.value
  }

  getSelection(): HTMLElement[] | undefined {
    return this.selection.value
  }

  setActive(value: HTMLElement | undefined): this {
    this.active.value = value
    return this
  }

  setSelection(value: HTMLElement[] | undefined): this {
    this.selection.value = value
    return this
  }
}
