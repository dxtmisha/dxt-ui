import { default as MagicString, SourceMap } from 'magic-string';
export declare class PluginCode {
    protected readonly id: string;
    protected readonly code: string;
    protected magicString: MagicString;
    constructor(id: string, code: string);
    isVue(): boolean;
    get(): string;
    getId(): string;
    getCode(): string;
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
}
