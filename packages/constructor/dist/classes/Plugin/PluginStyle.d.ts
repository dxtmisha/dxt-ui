import { PluginData } from './PluginData';
/**
 * Class for transforming into non-standard style properties.
 *
 * Класс для преобразования в нестандартные свойства стилей.
 */
export declare class PluginStyle {
    protected readonly id: string;
    protected readonly code: string;
    protected readonly data: PluginData;
    /**
     * Constructor
     * @param id file identification / идентификация файла
     * @param code file content / содержимое файла
     * @param data plugin data / данные плагина
     */
    constructor(id: string, code: string, data: PluginData);
    /**
     * Initialization of the transformation of all style properties.
     *
     * Инициализация преобразования всех свойств стилей.
     */
    init(): string;
    /**
     * Checks whether this file needs to be transformed.
     *
     * Проверяет, нужно ли преобразовывать этот файл.
     */
    protected is(): boolean;
    protected getCodeNone(): string;
    protected getPropertiesNone(): string;
    protected getModificationRef(): RegExp;
    /**
     * Connects a list of tokens to work with values.
     *
     * Подключает список токенов для работы со значениями.
     */
    protected importDesign(): string;
    /**
     * Removes default values from colors.
     *
     * Удаляет значения по умолчанию у цветов.
     * @param code file content / содержимое файла
     */
    protected initColors(code: string): string;
    /**
     * Transforms property values under the correct name.
     *
     * Преобразовывает значения свойств под правильным именем.
     * @param code file content / содержимое файла
     */
    protected initVars(code: string): string;
    /**
     * Transformation of all properties into non-standard ones used through mixins.
     *
     * Преобразование всех свойств в нестандартные, используемые через миксины.
     * @param code file content / содержимое файла
     */
    protected initProperties(code: string): string;
}
