import { ListDataRef, type NumberOrStringOrBoolean } from '@dxtmisha/functional'

import { MenuValue } from './MenuValue'

import type { MenuProps } from './props'

export class MenuGo {
  constructor(
    protected readonly props: MenuProps,
    protected readonly value: MenuValue,
    protected readonly data: ListDataRef
  ) {
  }

  readonly previous = (): NumberOrStringOrBoolean | undefined => {
    return this.go(-1)
  }

  readonly next = (): NumberOrStringOrBoolean | undefined => {
    return this.go(1)
  }

  protected getStep(): number {
    return Number(this.props.step) || 1
  }

  protected go(directions: number): NumberOrStringOrBoolean | undefined {
    const value = this.data.getSelectedByStep(this.getStep() * directions)

    if (value) {
      this.value.setValue(value)
    }

    return value
  }
}
