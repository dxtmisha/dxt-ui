import { PluginCode } from './PluginCode';
import { PluginData } from './PluginData';
import { PluginComponentItem } from '../../types/pluginTypes';
/**
 * Class for connecting components.
 *
 * Класс для подключения компонентов.
 */
export declare class PluginComponents {
    protected readonly code: PluginCode;
    protected readonly pluginData: PluginData;
    /**
     * Constructor
     * @param code file content / содержимое файла
     * @param pluginData plugin data / данные плагина
     */
    constructor(code: PluginCode, pluginData: PluginData);
    /**
     * Initializes the data.
     *
     * Инициализирует данные.
     */
    make(): void;
    /**
     * Returns the path to the component.
     *
     * Возвращает путь к компоненту.
     * @param item component data / данные компонента
     */
    protected getPath(item: PluginComponentItem): string;
    /**
     * Generates the import string for a component.
     *
     * Генерирует строку импорта для компонента.
     * @param item component data / данные компонента
     */
    protected importComponent(item: PluginComponentItem): string;
}
