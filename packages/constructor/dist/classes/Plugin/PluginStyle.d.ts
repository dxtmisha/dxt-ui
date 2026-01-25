import { PluginData } from './PluginData';
import { PluginCode } from './PluginCode';
/**
 * Class for transforming into non-standard style properties.
 *
 * Класс для преобразования в нестандартные свойства стилей.
 */
export declare class PluginStyle {
    protected readonly code: PluginCode;
    protected readonly data: PluginData;
    /**
     * Constructor
     * @param code file content / содержимое файла
     * @param data plugin data / данные плагина
     */
    constructor(code: PluginCode, data: PluginData);
    /**
     * Initialization of the transformation of all style properties.
     *
     * Инициализация преобразования всех свойств стилей.
     */
    make(): this;
    /**
     * Checks whether this file needs to be transformed.
     *
     * Проверяет, нужно ли преобразовывать этот файл.
     */
    protected is(): boolean;
    /**
     * Returns the comment for ignoring the file.
     *
     * Возвращает комментарий для игнорирования файла.
     */
    protected getIgnoreComment(): string;
    /**
     * Returns a string for a negative lookahead to exclude lines with a special comment.
     *
     * Возвращает строку для негативного просмотра вперед, чтобы исключить строки со специальным комментарием.
     */
    protected getPropertiesNone(): string;
    /**
     * Returns a regular expression for finding properties that need to be replaced with mixins.
     *
     * Возвращает регулярное выражение для поиска свойств, которые необходимо заменить на миксины.
     */
    protected getModificationRef(): RegExp;
    /**
     * Connects a list of tokens to work with values.
     *
     * Подключает список токенов для работы со значениями.
     */
    protected importDesign(): this;
    /**
     * Removes default values from colors.
     *
     * Удаляет значения по умолчанию у цветов.
     */
    protected makeColors(): this;
    /**
     * Transforms property values under the correct name.
     *
     * Преобразовывает значения свойств под правильным именем.
     */
    protected makeVars(): this;
    /**
     * Transformation of all properties into non-standard ones used through mixins.
     *
     * Преобразование всех свойств в нестандартные, используемые через миксины.
     */
    protected makeProperties(): this;
}
