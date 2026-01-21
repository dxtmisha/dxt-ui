/**
 * Class for importing plugins.
 *
 * Класс для импорта плагинов.
 */
export declare class PluginImport {
    protected readonly packageName: string;
    protected code: string;
    /**
     * Constructor
     * @param packageName package name / название пакета
     * @param code file content / содержимое файла
     */
    constructor(packageName: string, code: string);
    /**
     * Returns the file content.
     *
     * Возвращает содержимое файла.
     */
    get(): string;
    /**
     * Returns the style connection code.
     *
     * Возвращает код подключения стиля.
     */
    importStyle(): void;
    /**
     * Creates an import line.
     *
     * Создает строку импорта.
     * @param name file name / имя файла
     */
    protected makeImport(name: string): void;
}
