import type { Ref } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export type EventClickValue = {
  type: string
  value: any
  detail: Record<string, any> | undefined
}

export type EventClickEmits = {
  click: [
    event: MouseEvent,
    value: EventClickValue
  ]
  clickLite: [
    value: EventClickValue
  ]
}

export interface EventClickExpose {
  value?: Ref<EventClickValue['value']>
  detail?: Ref<EventClickValue['detail']>
}

export interface EventClickProps {
  to?: string | RouteLocationRaw
  value?: EventClickValue['value']
  detail?: EventClickValue['detail']
}
