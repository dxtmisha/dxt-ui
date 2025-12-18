import { DefineComponent, ComponentOptionsMixin, PublicProps, ComponentProvideOptions, CreateComponentPublicInstanceWithMixins, GlobalComponents, GlobalDirectives, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue';
export { Calculator } from './classes/Calculator';
export declare const UiTestButton: DefineComponent<{
    label: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    label: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLButtonElement>;
export declare const UiTestContainer: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        label?: string;
        description?: string;
        isDark?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        label?: string;
        description?: string;
        isDark?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    label?: string;
    description?: string;
    isDark?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const UiTestGroup: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, true, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const UiTestItemFull: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        label?: string;
        isFlex?: boolean;
        isPadding?: boolean;
        background?: boolean;
        rounded?: boolean;
        inverse?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {
        isFlex: boolean;
        background: boolean;
        rounded: boolean;
    }, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        label?: string;
        isFlex?: boolean;
        isPadding?: boolean;
        background?: boolean;
        rounded?: boolean;
        inverse?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {
        isFlex: boolean;
        background: boolean;
        rounded: boolean;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    label?: string;
    isFlex?: boolean;
    isPadding?: boolean;
    background?: boolean;
    rounded?: boolean;
    inverse?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {
    isFlex: boolean;
    background: boolean;
    rounded: boolean;
}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const UiTestItemSquared: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        label?: string;
        size?: "xs" | "sm" | "md" | "lg" | "xl";
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        label?: string;
        size?: "xs" | "sm" | "md" | "lg" | "xl";
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    label?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const UiTestLabel: DefineComponent<{
    label?: string | number;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    label?: string | number;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export declare const UiTestTitle: DefineComponent<{
    title: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    title: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
