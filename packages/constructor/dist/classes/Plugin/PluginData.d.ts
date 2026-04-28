import { PluginComponentImports, PluginComponentItem } from '../../types/pluginTypes';
/**
 * Class for storing plugin data.
 *
 * Класс для хранения данных плагина.
 */
export declare class PluginData {
    protected readonly design: string;
    protected readonly packageName: string;
    protected readonly componentsReg: RegExp;
    protected readonly styleVarsReg: RegExp;
    protected readonly componentsList: PluginComponentImports;
    protected readonly styleModification: Record<string, string>;
    /**
     * Constructor
     * @param design design name / название дизайна
     * @param packageName package name / название пакета
     * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
     * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
     * @param componentsList list of components / список компонентов
     */
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports);
    /**
     * Checks if the code contains a component.
     *
     * Проверяет, содержит ли код компонент.
     * @param code code to check / код для проверки
     */
    hasComponent(code: string): boolean;
    /**
     * Checks if the code contains variables.
     *
     * Проверяет, содержит ли код переменные.
     * @param code code to check / код для проверки
     */
    hasVars(code: string): boolean;
    /**
     * Returns the design name.
     *
     * Возвращает название дизайна.
     */
    getDesign(): string;
    /**
     * Returns the package name.
     *
     * Возвращает название пакета.
     */
    getPackageName(): string;
    /**
     * Returns a list of all components in the code.
     *
     * Возвращает список всех компонентов в коде.
     * @param code code to check / код для проверки
     */
    getComponents(code: string): PluginComponentImports;
    /**
     * Returns the regular expression for finding variables.
     *
     * Возвращает регулярное выражение для поиска переменных.
     */
    getStyleVarsReg(): RegExp;
    /**
     * Returns the style modification map.
     *
     * Возвращает карту модификации стилей.
     */
    getStyleModification(): Record<string, string>;
    /**
     * Finds a component by name.
     *
     * Находит компонент по имени.
     * @param component component name / название компонента
     */
    protected findComponent(component: string): PluginComponentItem | undefined;
    /**
     * Initializes the style modification map.
     *
     * Инициализирует карту модификации стилей.
     */
    protected initStyleModification(): Record<string, string>;
}
