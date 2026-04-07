import { StorybookComponentsDescriptionItem } from '../types/storybookTypes';
/**
 * Class for working with Storybook component descriptions in the wiki
 *
 * Класс для работы с описаниями компонентов Storybook в вики
 */
export declare class WikiStorybookDescriptions {
    private readonly item?;
    private readonly mdx?;
    /**
     * Constructor
     * @param name - Name of the component to find in the descriptions/ Имя компонента для поиска в описаниях
     */
    constructor(name: string);
    /**
     * Get the description of the component
     *
     * Возвращает описание компонента
     * @return The description of the component or undefined if not found/ Описание компонента или undefined, если не найдено
     */
    getItem(): StorybookComponentsDescriptionItem | undefined;
    /**
     * Get an additional description of the component for a specific type
     *
     * Возвращает дополнительное описание компонента для конкретного типа
     * @param type - Type of the description to retrieve/ тип описания для получения
     */
    getDescriptionByType(type: string): any;
}
