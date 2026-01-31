import { CreateComponentPublicInstanceWithMixins, ComponentOptionsMixin, PublicProps, GlobalComponents, GlobalDirectives, ComponentProvideOptions, ComponentOptionsBase, VNodeProps, AllowedComponentProps, ComponentCustomProps, DefineComponent } from 'vue';
import { WikiStorybook, WikiStorybookProp } from '@dxtmisha/wiki';
import { TestWikiDemoClasses, TestWikiSlotRender } from './library';
export declare const DxtTestBlock: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        title?: string;
        description?: string;
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
export declare const DxtTestButton: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        label?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLButtonElement, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        label?: string;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    label?: string;
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
export declare const DxtTestScreenshot: DefineComponent<{
    element: HTMLElement;
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    element: HTMLElement;
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLDivElement>;
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
export declare const DxtTestWiki: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        design: string;
        wiki: WikiStorybook;
        component: any;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
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
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, any, ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<{
        args?: Record<string, any>;
    }> & Readonly<{}>, {}, {}, {}, {}, {}>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & ComponentOptionsBase<Readonly<{
    args?: Record<string, any>;
}> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, {}, {}, string, {}, GlobalComponents, GlobalDirectives, string, ComponentProvideOptions> & VNodeProps & AllowedComponentProps & ComponentCustomProps & (new () => {
    $slots: Readonly< TestWikiSlotRender> & TestWikiSlotRender;
});
export declare const DxtTestWikiPossibilities: DefineComponent<{
    possibilities: string[];
}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{
    possibilities: string[];
}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, HTMLUListElement>;
export declare const DxtTestWikiPropItem: {
    new (...args: any[]): CreateComponentPublicInstanceWithMixins<Readonly<{
        item: WikiStorybookProp;
    }> & Readonly<{}>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, PublicProps, {}, false, {}, {}, GlobalComponents, GlobalDirectives, string, {}, HTMLDivElement, ComponentProvideOptions, {
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
export * from './types/wikiTypes';
