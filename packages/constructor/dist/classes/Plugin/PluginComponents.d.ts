import { PluginData } from './PluginData';
import { PluginComponentItem } from '../../types/pluginTypes';
/**
 * Class for connecting components.
 *
 * Класс для подключения компонентов.
 */
export declare class PluginComponents {
    protected readonly id: string;
    protected readonly code: string;
    protected readonly pluginData: PluginData;
    /**
     * Constructor
     * @param id file identification / идентификация файла
     * @param code file content / содержимое файла
     * @param pluginData plugin data / данные плагина
     */
    constructor(id: string, code: string, pluginData: PluginData);
    /**
     * Initializes the data.
     *
     * Инициализирует данные.
     */
    init(): string;
    /**
     * Checks if there is a script element.
     *
     * Проверяет, есть ли элемент script.
     */
    protected isScript(): boolean;
    /**
     * Returns the file code, adding a script if it’s not there.
     *
     * Возвращает код файла, добавляя script, если его нет.
     */
    protected getCode(): string;
    /**
     * Returns the path to the component.
     *
     * Возвращает путь к компоненту.
     * @param item component data / данные компонента
     */
    protected getPath(item: PluginComponentItem): string;
    /**
     * Adds import code to the script.
     *
     * Добавляет код импорта в скрипт.
     * @param code file content / содержимое файла
     * @param imports import code / код импорта
     */
    protected addImportCode(code: string, imports: string): string;
    /**
     * Generates the import string for a component.
     *
     * Генерирует строку импорта для компонента.
     * @param item component data / данные компонента
     */
    protected importComponent(item: PluginComponentItem): string;
}
