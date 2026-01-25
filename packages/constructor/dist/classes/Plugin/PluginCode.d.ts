import { default as MagicString, SourceMap } from 'magic-string';
/**
 * Class for working with plugin code.
 *
 * Класс для работы с кодом плагина.
 */
export declare class PluginCode {
    protected readonly id: string;
    protected readonly code: string;
    protected magicString: MagicString;
    protected newCode: string;
    /**
     * Constructor
     * @param id file ID / ID файла
     * @param code source code / исходный код
     */
    constructor(id: string, code: string);
    /**
     * Checks if the file is a Vue component.
     *
     * Проверяет, является ли файл компонентом Vue.
     */
    isVue(): boolean;
    /**
     * Checks if the file is a SCSS file.
     *
     * Проверяет, является ли файл SCSS.
     */
    isScss(): boolean;
    /**
     * Returns the modified code.
     *
     * Возвращает измененный код.
     */
    get(): string;
    /**
     * Returns the file ID.
     *
     * Возвращает ID файла.
     */
    getId(): string;
    /**
     * Returns the original code.
     *
     * Возвращает оригинальный код.
     */
    getCode(): string;
    /**
     * Returns the source map.
     *
     * Возвращает карту кода.
     */
    getMaps(): SourceMap;
    /**
     * Checks for the presence of code.
     *
     * Проверяет наличие кода.
     * @param pattern search pattern / паттерн поиска
     */
    has(pattern: string | RegExp): boolean;
    /**
     * Adds code after the <script setup> tag.
     * If the tag is missing, adds it to the beginning of the file.
     *
     * Добавляет код после тега <script setup>.
     * Если тег отсутствует, добавляет в начало файла.
     * @param code code to add / код для добавления
     */
    addAfterScript(code: string): this;
    /**
     * Adds code to the beginning of the file.
     *
     * Добавляет код в начало файла.
     * @param code code to add / код для добавления
     */
    addStart(code: string): this;
    /**
     * Adds code to the beginning of the file if it is missing.
     *
     * Добавляет код в начало файла, если он отсутствует.
     * @param code code to add / код для добавления
     * @param pattern search pattern / паттерн поиска
     */
    addStartIfNone(code: string, pattern?: string | RegExp): this;
    /**
     * Replaces the found fragment with new code in newCode.
     *
     * Заменяет найденный фрагмент на новый код в newCode.
     * @param pattern search pattern / паттерн поиска
     * @param replacement replacement string / строка замены
     */
    replace(pattern: string | RegExp, replacement: string | ((substring: string, ...args: any[]) => string)): this;
}
