// md5:d3494f23c7e7b736d8c6408198824276 true
import { RouteLocationRaw } from 'vue-router';

export type EventClickValue = {
    type: string;
    value: any;
    detail: Record<string, any> | undefined;
};

export type EventClickEmits = {
    click: [
        event: MouseEvent,
        value: EventClickValue
    ];
    clickLite: [
        value: EventClickValue
    ];
};

/** @keywords click expose properties event value detail */
export interface EventClickExpose {
    /** @keywords get click event value */
    getValue?: () => EventClickValue['value'] | undefined;
    /** @keywords get click event detail */
    getDetail?: () => EventClickValue['detail'] | undefined;
}

export type EventClickProps = {
    to?: string | RouteLocationRaw;
    href?: string;
    value?: EventClickValue['value'];
    detail?: EventClickValue['detail'];
};