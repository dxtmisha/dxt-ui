// md5:deb4054002e458e9ae35b49deace1314 true
import { ConstrBind } from '@dxtmisha/functional';
export type AlertLinkComponentInclude = {
    alertLink?: object;
};
export type AlertLinkEmitsInclude = {
    link: [event: MouseEvent, value: EventClickValue];
    linkLite: [value: EventClickValue];
};
export type AlertLinkPropsInclude<AlertLinkProps extends AlertLinkPropsBasic = AlertLinkPropsBasic> = {
    links?: ConstrBind<AlertLinkProps>[];
    linksAttrs?: ConstrBind<AlertLinkProps>;
};