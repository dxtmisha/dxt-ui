import { ImageSlots, ImageTypeItem, ImageEventItem, ImageEventData } from '@dxtmisha/constructor/Image';
import { ImageProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Slots = ImageSlots;
declare const __VLS_component: DefineComponent<ImageProps, {
    type: ComputedRef<ImageTypeItem>;
    data: ComputedRef<ImageEventItem>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    load: (image: ImageEventData) => any;
}, string, PublicProps, Readonly<ImageProps> & Readonly<{
    onLoad?: ((image: ImageEventData) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
