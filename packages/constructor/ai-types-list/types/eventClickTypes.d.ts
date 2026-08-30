// md5:99fe92e6d1be3635cd09fccfb91abd8e true
import type { RouteLocationRaw } from 'vue-router';

/** Value object for click events @keywords click, event, payload */
export type EventClickValue = {
    type: string;
    value: any;
    detail: Record<string, any> | undefined;
};

/** Emits for click event handling @keywords click, emits, event */
export type EventClickEmits = {
    click: [event: MouseEvent, value: EventClickValue];
    clickLite: [value: EventClickValue];
};

/** Exposed methods for click functionality @keywords expose, click, getter */
export interface EventClickExpose {
    /** Gets the click event value @keywords getValue, click, value */
    getValue?: () => EventClickValue['value'] | undefined;
    /** Gets the click event detail @keywords getDetail, click, detail */
    getDetail?: () => EventClickValue['detail'] | undefined;
}

/** Props for click event handling @keywords click, props, navigation */
export type EventClickProps = {
    to?: string | RouteLocationRaw;
    href?: string;
    value?: EventClickValue['value'];
    detail?: EventClickValue['detail'];
};