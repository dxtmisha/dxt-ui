import { SnackbarSlots, SnackbarValue } from '@dxtmisha/constructor/Snackbar';
import { SnackbarProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<SnackbarSlots> & SnackbarSlots;
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<SnackbarProps, {
    isItem: ComputedRef<boolean>;
    add(item: SnackbarValue): void;
    remove(value: string): void;
    clear(): void;
    elementHtml?: ComputedRef<HTMLDivElement | undefined> | undefined;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
    hide: (value: string, item: SnackbarValue) => any;
    show: (value: string, item: SnackbarValue) => any;
}, string, PublicProps, Readonly<SnackbarProps> & Readonly<{
    onHide?: ((value: string, item: SnackbarValue) => any) | undefined;
    onShow?: ((value: string, item: SnackbarValue) => any) | undefined;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
