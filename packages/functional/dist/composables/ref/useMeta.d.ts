import { MetaRobots, MetaStatic } from '@dxtmisha/functional-basic';
import { Ref } from 'vue';
/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 *
 * Vue композабл для реактивного управления мета-тегами с автоматической синхронизацией DOM.
 * Использует паттерн singleton - все компоненты используют одно состояние мета-тегов.
 */
export declare const useMeta: () => Readonly<{
    meta: typeof MetaStatic;
    /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
    title: Ref<string, string>;
    /** Reactive keywords meta tag / Реактивный мета-тег keywords */
    keyword: Ref<string, string>;
    /** Reactive description meta tag / Реактивный мета-тег description */
    description: Ref<string, string>;
    /** Reactive author meta tag / Реактивный мета-тег author */
    author: Ref<string, string>;
    /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
    image: Ref<string, string>;
    /** Reactive canonical URL / Реактивный канонический URL */
    canonical: Ref<string, string>;
    /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
    robots: Ref<MetaRobots, MetaRobots>;
    /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
    siteName: Ref<string, string>;
    /**
     * Generates HTML string for all meta tags (for SSR).
     *
     * Генерирует HTML-строку для всех мета-тегов (для SSR).
     */
    getHtmlMeta: () => string;
    /**
     * Synchronizes all reactive values with the current state of MetaStatic.
     *
     * Синхронизирует все реактивные значения с текущим состоянием MetaStatic.
     */
    sync: () => void;
    /**
     * Updates MetaStatic values with current reactive state.
     *
     * Обновляет значения MetaStatic текущим реактивным состоянием.
     */
    update: () => void;
    /**
     * Updates MetaStatic values if the current environment is SSR (not a DOM runtime).
     *
     * Обновляет значения MetaStatic, если текущая среда — SSR (не DOM-среда).
     */
    updateSsr: () => void;
    /**
     * Sets the page title.
     *
     * Устанавливает заголовок страницы.
     * @param value Title to set / Заголовок для установки
     */
    setTitle: (value: string) => void;
    /**
     * Sets the keywords meta tag.
     *
     * Устанавливает мета-тег keywords.
     * @param value Keywords to set / Ключевые слова для установки
     */
    setKeywords: (value: string) => void;
    /**
     * Sets the description meta tag.
     *
     * Устанавливает мета-тег description.
     * @param value Description to set / Описание для установки
     */
    setDescription: (value: string) => void;
    /**
     * Sets the author meta tag.
     *
     * Устанавливает мета-тег author.
     * @param value Author to set / Автор для установки
     */
    setAuthor: (value: string) => void;
    /**
     * Sets the Open Graph / Twitter Card image URL.
     *
     * Устанавливает URL изображения для Open Graph / Twitter Card.
     * @param value Image URL to set / URL изображения для установки
     */
    setImage: (value: string) => void;
    /**
     * Sets the canonical URL.
     *
     * Устанавливает канонический URL.
     * @param value Canonical URL to set / Канонический URL для установки
     */
    setCanonical: (value: string) => void;
    /**
     * Sets the robots meta tag directive.
     *
     * Устанавливает директиву мета-тега robots.
     * @param value Robots directive to set / Директива robots для установки
     */
    setRobots: (value: MetaRobots) => void;
    /**
     * Sets the site name for Open Graph and Twitter Card.
     *
     * Устанавливает название сайта для Open Graph и Twitter Card.
     * @param value Site name to set / Название сайта для установки
     */
    setSiteName: (value: string) => void;
    /**
     * Sets the suffix for the page title.
     *
     * Устанавливает суффикс для заголовка страницы.
     * @param suffix Suffix to set / Суффикс для установки
     */
    setSuffix: (suffix: string) => typeof MetaStatic;
} & {
    init(): Readonly<{
        meta: typeof MetaStatic;
        /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
        title: Ref<string, string>;
        /** Reactive keywords meta tag / Реактивный мета-тег keywords */
        keyword: Ref<string, string>;
        /** Reactive description meta tag / Реактивный мета-тег description */
        description: Ref<string, string>;
        /** Reactive author meta tag / Реактивный мета-тег author */
        author: Ref<string, string>;
        /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
        image: Ref<string, string>;
        /** Reactive canonical URL / Реактивный канонический URL */
        canonical: Ref<string, string>;
        /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
        robots: Ref<MetaRobots, MetaRobots>;
        /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
        siteName: Ref<string, string>;
        /**
         * Generates HTML string for all meta tags (for SSR).
         *
         * Генерирует HTML-строку для всех мета-тегов (для SSR).
         */
        getHtmlMeta: () => string;
        /**
         * Synchronizes all reactive values with the current state of MetaStatic.
         *
         * Синхронизирует все реактивные значения с текущим состоянием MetaStatic.
         */
        sync: () => void;
        /**
         * Updates MetaStatic values with current reactive state.
         *
         * Обновляет значения MetaStatic текущим реактивным состоянием.
         */
        update: () => void;
        /**
         * Updates MetaStatic values if the current environment is SSR (not a DOM runtime).
         *
         * Обновляет значения MetaStatic, если текущая среда — SSR (не DOM-среда).
         */
        updateSsr: () => void;
        /**
         * Sets the page title.
         *
         * Устанавливает заголовок страницы.
         * @param value Title to set / Заголовок для установки
         */
        setTitle: (value: string) => void;
        /**
         * Sets the keywords meta tag.
         *
         * Устанавливает мета-тег keywords.
         * @param value Keywords to set / Ключевые слова для установки
         */
        setKeywords: (value: string) => void;
        /**
         * Sets the description meta tag.
         *
         * Устанавливает мета-тег description.
         * @param value Description to set / Описание для установки
         */
        setDescription: (value: string) => void;
        /**
         * Sets the author meta tag.
         *
         * Устанавливает мета-тег author.
         * @param value Author to set / Автор для установки
         */
        setAuthor: (value: string) => void;
        /**
         * Sets the Open Graph / Twitter Card image URL.
         *
         * Устанавливает URL изображения для Open Graph / Twitter Card.
         * @param value Image URL to set / URL изображения для установки
         */
        setImage: (value: string) => void;
        /**
         * Sets the canonical URL.
         *
         * Устанавливает канонический URL.
         * @param value Canonical URL to set / Канонический URL для установки
         */
        setCanonical: (value: string) => void;
        /**
         * Sets the robots meta tag directive.
         *
         * Устанавливает директиву мета-тега robots.
         * @param value Robots directive to set / Директива robots для установки
         */
        setRobots: (value: MetaRobots) => void;
        /**
         * Sets the site name for Open Graph and Twitter Card.
         *
         * Устанавливает название сайта для Open Graph и Twitter Card.
         * @param value Site name to set / Название сайта для установки
         */
        setSiteName: (value: string) => void;
        /**
         * Sets the suffix for the page title.
         *
         * Устанавливает суффикс для заголовка страницы.
         * @param suffix Suffix to set / Суффикс для установки
         */
        setSuffix: (suffix: string) => typeof MetaStatic;
    }>;
    destroyExecute?(): void;
}>;
