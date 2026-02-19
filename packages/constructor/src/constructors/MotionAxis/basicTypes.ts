import type { ConstrBind } from '@dxtmisha/functional'
import type { MotionAxisProps } from './props'

export type MotionAxisSelectedValue = string | undefined

export type MotionAxisClassStatus = {
  main: string
  previous: string
  preparation: string
  active: string
}

export type MotionAxisEmitType = 'start' | 'end'
export type MotionAxisEmitOptions = {
  type: MotionAxisEmitType

  selected?: MotionAxisSelectedValue
  previous?: MotionAxisSelectedValue
  preparation?: MotionAxisSelectedValue
  active?: MotionAxisSelectedValue
}

export type MotionAxisComponentInclude = {
  motionAxis?: object
}

export type MotionAxisEmitsInclude = {
  motionAxis: [options: MotionAxisEmitOptions]
}

export type MotionAxisPropsInclude = {
  selected?: MotionAxisSelectedValue
  motionAxisAttrs?: ConstrBind<MotionAxisProps>
}
