import { SnackbarSlots, SnackbarValue } from '@dxtmisha/constructor/Snackbar';
import { SnackbarProps } from './props';
import { DefineComponent, ComputedRef, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Slots = SnackbarSlots;
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
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
