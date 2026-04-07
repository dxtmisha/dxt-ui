import { StorybookArgsItem } from '../types/storybookTypes';
/**
 * Class for working with a single Storybook property.
 *
 * Класс для работы с одним свойством Storybook.
 */
export declare class WikiStorybookProp {
    readonly name: string;
    protected readonly item: StorybookArgsItem;
    /**
     * Constructor
     * @param name property name / имя свойства
     * @param item property configuration / конфигурация свойства
     */
    constructor(name: string, item: StorybookArgsItem);
    /**
     * Checks if the item is hidden.
     *
     * Проверяет, скрыт ли элемент.
     */
    isHide(): boolean;
    /**
     * Checks if the item is a demo item.
     *
     * Проверяет, является ли элемент демонстрационным.
     */
    isDemo(): boolean;
    /**
     * Returns the property configuration.
     *
     * Возвращает конфигурацию свойства.
     */
    get(): StorybookArgsItem;
    /**
     * Returns the property name.
     *
     * Возвращает имя свойства.
     */
    getName(): string;
    /**
     * Returns the default value of the property.
     *
     * Возвращает значение по умолчанию для свойства.
     */
    getDefaultValue(): any;
    /**
     * Returns the property type.
     *
     * Возвращает тип свойства.
     */
    getType(): string;
    /**
     * Returns the property description.
     *
     * Возвращает описание свойства.
     */
    getDescription(): string;
    /**
     * Returns the property options.
     *
     * Возвращает опции свойства.
     */
    getOptions(): StorybookArgsItem['options'];
    /**
     * Returns the demo data.
     *
     * Возвращает демонстрационные данные.
     */
    getDemo(): any;
    /**
     * Returns the additional demo data.
     *
     * Возвращает дополнительные демонстрационные данные.
     */
    getDemoOptions(): Record<string, any>;
}
