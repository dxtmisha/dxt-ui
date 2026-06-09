import { ref } from 'vue'

export class DraggableWrapperItemGo {
  protected readonly item = ref<HTMLElement>()

  is(): boolean {
    return Boolean(this.item.value)
  }

  get(): HTMLElement | undefined {
    return this.item.value
  }

  set(value: HTMLElement | undefined): this {
    this.item.value = value
    return this
  }

  reset(): this {
    return this.set(undefined)
  }
}
