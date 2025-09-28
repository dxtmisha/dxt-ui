import { StorybookArgsItem, StorybookArgsToItem } from '../types/storybookTypes';
/**
 * Class representing a Storybook wiki item
 *
 * Класс, представляющий элемент wiki для Storybook
 */
export declare class WikiStorybookItem {
    private readonly name;
    private readonly item;
    /**
     * Constructor
     * @param name - The name of the item in the wiki/ Название элемента в wiki
     * @param item - The item to convert to a Storybook args item/
     * Элемент, который нужно преобразовать в элемент аргументов Storybook
     */
    constructor(name: string, item: StorybookArgsToItem);
    /**
     * Returns the name of the item in the wiki
     *
     * Возвращает название элемента в wiki
     * @return The name of the item in the wiki/ название элемента в wiki
     */
    getName(): string;
    /**
     * Returns the value of the item in the wiki
     *
     * Возвращает значение элемента в wiki
     * @return The value of the item in the wiki/ значение элемента в wiki
     */
    getValue(): any;
    /**
     * Returns the order of the item in the wiki
     *
     * Возвращает порядок элемента в wiki
     * @return The order of the item in the wiki/ порядок элемента в wiki
     */
    getOrder(): number;
    /**
     * Converts the Wiki item to a Storybook args item
     *
     * Преобразует элемент Wiki в элемент аргументов Storybook
     */
    to(): StorybookArgsItem;
    /**
     * Returns the category type of a property
     *
     * Возвращает тип категории у свойства
     */
    private getCategory;
    /**
     * Returns the default property values
     *
     * Возвращает значения свойства по умолчанию
     */
    private getDefaultValue;
    /**
     * Returns a property description based on the language
     *
     * Возвращает описание свойства с учетом языка
     */
    private getDescription;
    /**
     * Returns the type of property
     *
     * Возвращает тип свойства
     */
    private getType;
    /**
     * Function to create a Storybook args object with boolean type
     *
     * Функция для создания объекта аргументов Storybook с типом boolean
     */
    private toBoolean;
    /**
     * Function to create a Storybook args object with number type
     *
     * Функция для создания объекта аргументов Storybook с типом number
     */
    private toNumber;
    /**
     * Function to create a Storybook args object with object type
     *
     * Функция для создания объекта аргументов Storybook с типом object
     */
    private toObject;
    /**
     * Function to create a Storybook args object with select type
     *
     * Функция для создания объекта аргументов Storybook с типом select
     */
    private toSelect;
    /**
     * Function to create a Storybook args object with string type
     *
     * Функция для создания объекта аргументов Storybook с типом string
     */
    private toString;
}
