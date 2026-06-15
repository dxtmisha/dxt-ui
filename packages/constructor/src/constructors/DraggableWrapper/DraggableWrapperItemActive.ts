import { ref } from 'vue'
import { DraggableWrapperClassesData } from './DraggableWrapperClassesData'

export class DraggableWrapperItemActive {
  protected readonly item = ref<HTMLElement>()

  protected readonly property: {
    width: string
    height: string
  }

  constructor(
    protected readonly classes: DraggableWrapperClassesData
  ) {
    const className = this.classes.getName()

    this.property = {
      width: `--${className}-sys-item-width`,
      height: `--${className}-sys-item-height`
    }
  }

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

  prepare(item: HTMLElement): this {
    const rect = item.getBoundingClientRect()

    item.style.setProperty(this.property.width, `${rect.width}px`)
    item.style.setProperty(this.property.height, `${rect.height}px`)
    item.classList.add(this.classes.list.active, this.classes.list.go)

    return this.set(item)
  }

  reset(): this {
    return this.set(undefined)
  }
}
