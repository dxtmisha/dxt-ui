import { DraggableWrapperItemActive } from './DraggableWrapperItemActive'
import { DraggableWrapperItemSelection } from './DraggableWrapperItemSelection'
import { DraggableWrapperItemGo } from './DraggableWrapperItemGo'

export class DraggableWrapperItem {
  constructor(
    protected readonly active: DraggableWrapperItemActive,
    protected readonly selection: DraggableWrapperItemSelection,
    protected readonly go: DraggableWrapperItemGo
  ) {}

  getActive(): DraggableWrapperItemActive {
    return this.active
  }

  getSelection(): DraggableWrapperItemSelection {
    return this.selection
  }

  getGo(): DraggableWrapperItemGo {
    return this.go
  }

  get(): HTMLElement[] {
    const selection = this.selection.get()

    if (selection) {
      return selection
    }

    const active = this.active.get()

    if (active) {
      return [active]
    }

    return []
  }

  reset(): this {
    this.active.reset()
    this.selection.reset()
    this.go.reset()

    return this
  }
}
