// md5:8bc1456ad0850e8aa687582d9d6304cb true
import type { RouteLocationRaw } from 'vue-router';

export type EventClickValue = {
  type: string;
  value: any;
  detail: Record<string, any> | undefined;
};

export type EventClickEmits = {
  click: [event: MouseEvent, value: EventClickValue];
  clickLite: [value: EventClickValue];
};

export interface EventClickExpose {
  /** Returns the click event value. @keywords click, value, getter */
  getValue?: () => EventClickValue['value'] | undefined;
  /** Returns the click event details. @keywords click, detail, getter */
  getDetail?: () => EventClickValue['detail'] | undefined;
}

export type EventClickProps = {
  to?: string | RouteLocationRaw;
  href?: string;
  value?: EventClickValue['value'];
  detail?: EventClickValue['detail'];
  index?: number | string;
};