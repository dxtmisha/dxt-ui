import { TransformResult } from 'rollup';
import { Plugin as VitePlugin } from 'vite';
import { PluginCode } from './PluginCode';
import { PluginData } from './PluginData';
import { PluginComponentImports, PluginOptions } from '../../types/pluginTypes';
/**
 * Base class for the Vite plugin.
 *
 * Базовый класс для плагина Vite.
 */
export declare class Plugin {
    protected readonly design: string;
    protected readonly packageName: string;
    protected readonly componentsReg: RegExp;
    protected readonly styleVarsReg: RegExp;
    protected readonly componentsList: PluginComponentImports;
    protected readonly name: string;
    protected readonly options: PluginOptions;
    protected readonly data: PluginData;
    protected first: boolean;
    protected mode: string;
    /**
     * Constructor
     * @param design design name / название дизайна
     * @param packageName package name / название пакета
     * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
     * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
     * @param componentsList list of components / список компонентов
     * @param name plugin name / название плагина
     * @param options plugin options / настройки плагина
     */
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports, name?: string, options?: PluginOptions);
    /**
     * Initializes the plugin.
     *
     * Инициализирует плагин.
     */
    init(): VitePlugin;
    /**
     * Checks if components should be processed.
     *
     * Проверяет, нужно ли обрабатывать компоненты.
     */
    protected isComponents(): boolean;
    /**
     * Checks if styles should be processed.
     *
     * Проверяет, нужно ли обрабатывать стили.
     */
    protected isStyles(): boolean;
    /**
     * Transforms the code.
     *
     * Преобразовывает код.
     * @param code file content / содержимое файла
     * @param id file identification / идентификация файла
     */
    protected transform(code: string, id: string): TransformResult;
    /**
     * Initializes the main file.
     *
     * Инициализирует главный файл.
     * @param code file content / содержимое файла
     */
    protected initMain(code: string): string;
    /**
     * Initializes components.
     *
     * Инициализирует компоненты.
     * @param code file content / содержимое файла
     */
    protected makeComponents(code: PluginCode): this;
    /**
     * Initializes styles.
     *
     * Инициализирует стили.
     * @param code file content / содержимое файла
     */
    protected initStyles(code: PluginCode): this;
}
