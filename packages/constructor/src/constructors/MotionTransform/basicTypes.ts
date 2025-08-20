import type { ComputedRef } from 'vue'

export type MotionTransformEmitOptions = {
  type: 'head' | 'body' | 'top' | 'script'
  open: boolean
}

export type MotionTransformClassList = {
  show: string
  open: string
  window: string

  click: string
  none: string
  noneGlobal: string
  close: string
}

export type MotionTransformStyle = {
  contextWidth: string
  contextHeight: string
  headScale: string
  top: string
  left: string
  headWidth: string
  height: string
  scale: string
  headHeight: string
  bodyHeight: string
}

export type MotionTransformControlItem = {
  isOpen: ComputedRef<boolean>
  isShow: ComputedRef<boolean>
  classes: MotionTransformClassList
}
