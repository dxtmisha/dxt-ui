// md5:ed00e380e0ca20ef4d7a1759e978bd1a
import { MetaRobots } from '@dxtmisha/functional-basic';
/**
 * Vue composable for reactive meta tags management with automatic DOM synchronization.
 * Uses singleton pattern - all components share the same meta state.
 * Prefer setTitle(), setDescription(), and the other set methods for changes.
 * Direct ref writes remain supported; SSR updates are synchronous, browser updates are batched.
 *
 * Vue композабл для реактивного управления мета-тегами с автоматической синхронизацией DOM.
 * Использует паттерн singleton - все компоненты используют одно состояние мета-тегов.
 * Для изменений предпочтительно использовать setTitle(), setDescription() и остальные set-методы.
 * Прямая запись в refs поддерживается; SSR обновляется синхронно, изменения в браузере объединяются.
 */
export declare const useMeta: () => Readonly<{
    meta: import("@dxtmisha/functional-basic").Meta;
    /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
    title: import("vue").Ref<string, string>;
    /** Reactive keywords meta tag / Реактивный мета-тег keywords */
    keyword: import("vue").Ref<string, string>;
    /** Reactive description meta tag / Реактивный мета-тег description */
    description: import("vue").Ref<string, string>;
    /** Reactive author meta tag / Реактивный мета-тег author */
    author: import("vue").Ref<string, string>;
    /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
    image: import("vue").Ref<string, string>;
    /** Reactive canonical URL / Реактивный канонический URL */
    canonical: import("vue").Ref<string, string>;
    /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
    robots: import("vue").Ref<MetaRobots, MetaRobots>;
    /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
    siteName: import("vue").Ref<string, string>;
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
    setSuffix: (suffix: string) => import("@dxtmisha/functional-basic").Meta;
} & Omit<import("../../library").ExecuteUseManagement<{
    meta: import("@dxtmisha/functional-basic").Meta;
    /** Reactive page title (without suffix) / Реактивный заголовок страницы (без суффикса) */
    title: import("vue").Ref<string, string>;
    /** Reactive keywords meta tag / Реактивный мета-тег keywords */
    keyword: import("vue").Ref<string, string>;
    /** Reactive description meta tag / Реактивный мета-тег description */
    description: import("vue").Ref<string, string>;
    /** Reactive author meta tag / Реактивный мета-тег author */
    author: import("vue").Ref<string, string>;
    /** Reactive Open Graph / Twitter Card image URL / Реактивный URL изображения для Open Graph / Twitter Card */
    image: import("vue").Ref<string, string>;
    /** Reactive canonical URL / Реактивный канонический URL */
    canonical: import("vue").Ref<string, string>;
    /** Reactive robots meta tag directive / Реактивная директива мета-тега robots */
    robots: import("vue").Ref<MetaRobots, MetaRobots>;
    /** Reactive site name for Open Graph and Twitter Card / Реактивное название сайта для Open Graph и Twitter Card */
    siteName: import("vue").Ref<string, string>;
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
    setSuffix: (suffix: string) => import("@dxtmisha/functional-basic").Meta;
}>, "meta" | "title" | "description" | "sync" | "keyword" | "author" | "image" | "canonical" | "robots" | "siteName" | "getHtmlMeta" | "update" | "updateSsr" | "setTitle" | "setKeywords" | "setDescription" | "setAuthor" | "setImage" | "setCanonical" | "setRobots" | "setSiteName" | "setSuffix">>;
