import type { DraggableWrapperProps } from './props.ts'

export class DraggableWrapperEvents {
  constructor(
    protected readonly props: DraggableWrapperProps
  ) {
  }

  get delay(): number {
    return Number(this.props.delay || 640)
  }
}
