import { ClientOnlySlots } from '@dxtmisha/constructor/ClientOnly';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { ClientOnlyPropsInclude } from '@dxtmisha/constructor';
type __VLS_Slots = ClientOnlySlots;
declare const __VLS_component: DefineComponent<ClientOnlyPropsInclude, {
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly< ClientOnlyPropsInclude> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
