// md5:5eec0d7e3999cb8e963e3032bc01f460 true
import type { ConstrBind } from '@dxtmisha/functional';

/** Component inclusions for nested alert links @keywords alert, link, component */
export type AlertLinkComponentInclude = {
    alertLink?: object;
};

/** Emitted event signatures for nested alert links @keywords alert, link, emits, events */
export type AlertLinkEmitsInclude = {
    /** Triggered on clicking an alert link with mouse event */
    link: [event: MouseEvent, value: EventClickValue];
    /** Triggered on clicking an alert link without mouse event */
    linkLite: [value: EventClickValue];
};

/** Properties for nested alert links @keywords alert, link, props */
export type AlertLinkPropsInclude<AlertLinkProps extends AlertLinkPropsBasic = AlertLinkPropsBasic> = {
    /** List of link configurations */
    links?: ConstrBind<AlertLinkProps>[];
    /** Additional attributes for links component */
    linksAttrs?: ConstrBind<AlertLinkProps>;
};