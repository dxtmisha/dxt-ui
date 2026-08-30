// md5:aa6fa17c3fa77801e910183b98355d7e true
import { type Ref } from 'vue';

/** Scroll and context binding properties. @keywords scroll context ref class */
export type ScrollStickyBind = {
    ref: Ref<HTMLElement | undefined>;
    class: string | undefined;
};

/** Slot element binding structure for scroll sticky component. @keywords slot bindings */
export type ScrollStickyBindItem = ScrollStickyBind & {
    binds: ScrollStickyBind;
    bindsScroll: ScrollStickyBind;
    bindsContext: ScrollStickyBind;
};

/** Component inclusion structure for scroll sticky. @keywords component instance */
export type ScrollStickyComponentInclude = {
    scrollSticky?: object;
};