import { TextareaAutosizeSlots } from '@dxtmisha/constructor/TextareaAutosize';
import { TextareaAutosizeProps } from './props';
import { DefineComponent, Ref, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<TextareaAutosizeSlots> & TextareaAutosizeSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<TextareaAutosizeProps, {
    value: Ref<string>;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    input: (event: InputEvent) => any;
}, string, PublicProps, Readonly<TextareaAutosizeProps> & Readonly<{
    onInput?: ((event: InputEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
