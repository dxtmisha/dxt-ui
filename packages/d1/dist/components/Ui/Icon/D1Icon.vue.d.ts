import { IconSlots } from '@dxtmisha/constructor/Icon';
import { IconProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { ImageEventData } from '@dxtmisha/constructor/Image';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<IconSlots> & IconSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<IconProps, {
    isActive: ComputedRef<boolean>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    load: (image: ImageEventData) => any;
}, string, PublicProps, Readonly<IconProps> & Readonly<{
    onLoad?: ((image: ImageEventData) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
