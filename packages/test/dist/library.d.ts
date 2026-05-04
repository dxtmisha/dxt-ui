import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
import { WikiStorybook, WikiStorybookProp } from '@dxtmisha/wiki';
import { TestWikiDemoClasses, TestWikiSlotRender } from './library';
export declare const DxtTestBlock: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        title?: string;
        description?: string;
        anchor?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        title?: string;
        description?: string;
        anchor?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    title?: string;
    description?: string;
    anchor?: string;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const DxtTestButton: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        label?: string;
        selected?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLButtonElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        label?: string;
        selected?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    label?: string;
    selected?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const DxtTestPage: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        title?: string;
        description?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        title?: string;
        description?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    title?: string;
    description?: string;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const DxtTestWiki: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        design: string;
        wiki: WikiStorybook;
        component: any;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        design: string;
        wiki: WikiStorybook;
        component: any;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    design: string;
    wiki: WikiStorybook;
    component: any;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Readonly<{
        [x: string]: ((args: Record<string, any>, classDemo: TestWikiDemoClasses) => any) | undefined;
    }> & {
        [x: string]: ((args: Record<string, any>, classDemo: TestWikiDemoClasses) => any) | undefined;
    };
});
export declare const DxtTestWikiAnchor: DefineComponent<{
    list: ({
        name: string;
    })[];
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    list: ({
        name: string;
    })[];
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
export declare const DxtTestWikiCode: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        code?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        code?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    code?: string;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: {
        default?(_: {}): any;
    };
});
export declare const DxtTestWikiDemo: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        args?: Record<string, any>;
        compact?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        args?: Record<string, any>;
        compact?: boolean;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    args?: Record<string, any>;
    compact?: boolean;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Readonly< TestWikiSlotRender> & TestWikiSlotRender;
});
export declare const DxtTestWikiHide: DefineComponent<{}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, HTMLButtonElement>;
export declare const DxtTestWikiPossibilities: DefineComponent<{
    possibilities: string[];
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    possibilities: string[];
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
export declare const DxtTestWikiPropItem: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        item: WikiStorybookProp;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        item: WikiStorybookProp;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    item: WikiStorybookProp;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Readonly< TestWikiSlotRender> & TestWikiSlotRender;
});
export declare const DxtTestWikiTitle: DefineComponent<{
    label: string;
    type?: string;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    label: string;
    type?: string;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLHeadingElement>;
export * from './composables/useWikiItemFocus';
export * from './composables/useWikiPropsHide';
export * from './types/wikiTypes';
