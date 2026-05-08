type MetaList<T extends readonly string[]> = {
    [K in T[number]]?: string;
};
/**
 * Class for working with meta tags.
 *
 * Класс для управления мета-тегами.
 */
export declare class MetaManager<T extends readonly string[], Key extends keyof MetaList<T> = keyof MetaList<T>> {
    protected readonly listMeta: T;
    protected readonly isProperty: boolean;
    protected readonly items: MetaList<T>;
    /**
     * Creates an instance of MetaManager.
     *
     * Создает экземпляр MetaManager.
     * @param listMeta list of meta-tag names to manage / список имен мета-тегов для управления
     * @param isProperty use 'property' attribute instead of 'name' / использовать атрибут 'property' вместо 'name'
     */
    constructor(listMeta: T, isProperty?: boolean);
    /**
     * Returns the list of meta tag names.
     *
     * Возвращает список имен мета-тегов.
     * @returns list of meta tag names/ список имен мета-тегов
     */
    getListMeta(): T;
    /**
     * Get the content of a meta tag by name.
     *
     * Получает содержимое мета-тега по имени.
     * @param name meta tag name / имя мета-тега
     * @returns meta tag content/ содержимое мета-тега
     */
    get(name: Key): string;
    /**
     * Returns all meta tags.
     *
     * Возвращает все мета-теги.
     * @returns object with all meta tags/ объект со всеми мета-тегами
     */
    getItems(): MetaList<T>;
    /**
     * Returns all meta tags as HTML string.
     *
     * Возвращает все мета-теги в виде HTML-строки.
     * @returns HTML string/ HTML-строка
     */
    html(): string;
    /**
     * Sets the content of a meta tag.
     *
     * Устанавливает содержимое мета-тега.
     * @param name meta tag name / имя мета-тега
     * @param content meta tag content / содержимое мета-тега
     */
    set(name: Key, content: string): this;
    /**
     * Sets multiple meta tags from an object.
     *
     * Устанавливает несколько мета-тегов из объекта.
     * @param metaList object with meta tag names and content / объект с именами и содержимым мета-тегов
     */
    setByList(metaList: MetaList<T>): this;
    /**
     * Returns the attribute name for meta tags.
     *
     * Возвращает имя атрибута для мета-тегов.
     * @returns attribute name / имя атрибута
     */
    protected getAttributeName(): string;
    /**
     * Finds a meta element in the DOM.
     *
     * Находит мета-элемент в DOM.
     * @param name meta tag name / имя мета-тега
     * @returns meta element if found, or undefined / мета-элемент, если найден, иначе undefined
     */
    protected findMetaElement(name: string): HTMLMetaElement | undefined;
    /**
     * Sets the content of a meta tag in internal storage.
     *
     * Устанавливает содержимое мета-тега во внутреннем хранилище.
     * @param name meta tag name / имя мета-тега
     * @param content meta tag content / содержимое мета-тега
     * @returns current instance / текущий экземпляр
     */
    protected setItem(name: Key, content: string): this;
    /**
     * Sets or creates a meta tag in the DOM.
     *
     * Устанавливает или создает мета-тег в DOM.
     * @param name meta tag name / имя мета-тега
     * @returns current instance / текущий экземпляр
     */
    protected setMeta(name: Key): this;
    /**
     * Converts meta tag to HTML string.
     *
     * Преобразует мета-тег в HTML-строку.
     * @param name meta tag name / имя мета-тега
     * @returns HTML string / HTML-строка
     */
    protected toHtmlString(name: Key): string;
    /**
     * Converts the title to an HTML-safe string.
     *
     * Преобразует заголовок в HTML-безопасную строку.
     * @param title page title / заголовок страницы
     * @returns encoded title string / закодированная строка заголовка
     */
    protected toHtmlTitle(title: string): string;
    /**
     * Updates meta tags data from the DOM.
     *
     * Обновляет данные мета-тегов из DOM.
     * @returns current instance / текущий экземпляр
     */
    protected update(): this;
}
export {};
