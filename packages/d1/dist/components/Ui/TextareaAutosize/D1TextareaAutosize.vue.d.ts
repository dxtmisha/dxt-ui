import { TextareaAutosizeSlots } from '@dxtmisha/constructor/TextareaAutosize';
import { TextareaAutosizeProps } from './props';
import { DefineComponent, Ref, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Slots = TextareaAutosizeSlots;
declare const __VLS_component: DefineComponent<TextareaAutosizeProps, {
    value: Ref<string>;
    elementHtml?: ComputedRef<HTMLTextAreaElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (event: InputEvent) => any;
}, string, PublicProps, Readonly<TextareaAutosizeProps> & Readonly<{
    onInput?: ((event: InputEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
