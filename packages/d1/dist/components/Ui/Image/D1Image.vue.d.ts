import { ImageSlots, ImageTypeItem, ImageEventItem, ImageEventData } from '@dxtmisha/constructor/Image';
import { ImageProps } from './props';
import { DefineComponent, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<ImageSlots> & ImageSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<ImageProps, {
    type: ComputedRef<ImageTypeItem>;
    data: Ref<ImageEventItem>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    load: (image: ImageEventData) => any;
}, string, PublicProps, Readonly<ImageProps> & Readonly<{
    onLoad?: ((image: ImageEventData) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
