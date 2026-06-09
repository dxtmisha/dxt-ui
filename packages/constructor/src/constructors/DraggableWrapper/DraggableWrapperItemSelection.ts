import { ref } from 'vue'

export class DraggableWrapperItemSelection {
  protected readonly item = ref<HTMLElement[]>()

  get(): HTMLElement[] | undefined {
    return this.item.value
  }

  set(value: HTMLElement[] | undefined): this {
    this.item.value = value
    return this
  }

  reset(): this {
    return this.set(undefined)
  }
}
