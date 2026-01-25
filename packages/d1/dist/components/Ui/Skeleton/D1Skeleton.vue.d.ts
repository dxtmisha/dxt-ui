import { SkeletonSlots } from '@dxtmisha/constructor/Skeleton';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { PropsToken } from './props';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<SkeletonSlots> & SkeletonSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<PropsToken, {
    isActive: ComputedRef<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< PropsToken> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
