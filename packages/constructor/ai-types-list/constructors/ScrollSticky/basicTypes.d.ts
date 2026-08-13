// md5:bb9d9dd291cd41e17e7f4fa04e24e3df true
import { Ref } from 'vue';

export type ScrollStickyBind = {
    ref: Ref<HTMLElement | undefined>;
    class: string | undefined;
};

export type ScrollStickyBindItem = ScrollStickyBind & {
    binds: ScrollStickyBind;
    bindsScroll: ScrollStickyBind;
    bindsContext: ScrollStickyBind;
};

export type ScrollStickyComponentInclude = {
    scrollSticky?: object;
};