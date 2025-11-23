import { Meta, MetaRobots } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 *
 * Vue композабл для реактивного управления мета-тегами с автоматической синхронизацией DOM.
 * Использует паттерн singleton - все компоненты используют одно состояние мета-тегов.
 */
export declare const useMeta: () => Readonly<Readonly<{
    meta: Meta;
    title: Ref<string, string>;
    keyword: Ref<string, string>;
    description: Ref<string, string>;
    author: Ref<string, string>;
    image: Ref<string, string>;
    canonical: Ref<string, string>;
    robots: Ref<MetaRobots, MetaRobots>;
    siteName: Ref<string, string>;
    getHtmlMeta: () => string;
}> & {
    init(): Readonly<{
        meta: Meta;
        title: Ref<string, string>;
        keyword: Ref<string, string>;
        description: Ref<string, string>;
        author: Ref<string, string>;
        image: Ref<string, string>;
        canonical: Ref<string, string>;
        robots: Ref<MetaRobots, MetaRobots>;
        siteName: Ref<string, string>;
        getHtmlMeta: () => string;
    }>;
}>;
