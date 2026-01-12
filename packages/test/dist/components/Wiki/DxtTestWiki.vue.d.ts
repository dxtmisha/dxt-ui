import { WikiStorybook } from '@dxtmisha/wiki';
import { TestWikiDemoClasses } from '../../library';
import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions } from 'vue';
type __VLS_Props = {
    design: string;
    wiki: WikiStorybook;
    component: any;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Readonly<{
        [x: string]: ((args: Record<string, any>, classDemo: TestWikiDemoClasses) => any) | undefined;
    }> & {
        [x: string]: ((args: Record<string, any>, classDemo: TestWikiDemoClasses) => any) | undefined;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: DefineComponent<__VLS_Props, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
