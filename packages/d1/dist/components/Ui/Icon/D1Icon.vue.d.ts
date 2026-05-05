import { IconSlots } from '@dxtmisha/constructor/Icon';
import { IconProps } from './props';
import { DefineComponent, ComputedRef, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
import { EventClickValue } from '@dxtmisha/constructor';
import { ImageEventData } from '@dxtmisha/constructor/Image';
type __VLS_Slots = IconSlots;
declare const __VLS_component: DefineComponent<IconProps, {
    isActive: ComputedRef<boolean>;
    value?: Ref< EventClickValue["value"]>;
    detail?: Ref< EventClickValue["detail"]>;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    load: (image: ImageEventData) => any;
    click: (event: MouseEvent, value: EventClickValue) => any;
    clickLite: (value: EventClickValue) => any;
}, string, PublicProps, Readonly<IconProps> & Readonly<{
    onLoad?: ((image: ImageEventData) => any) | undefined;
    onClick?: ((event: MouseEvent, value: EventClickValue) => any) | undefined;
    onClickLite?: ((value: EventClickValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
