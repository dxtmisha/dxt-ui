import { WikiStorybookItem } from './WikiStorybookItem';
import { StorybookArgs, StorybookArgsToItem, StorybookArgsToList, StorybookComponentsDescription, StorybookComponentsDescriptionStory, StorybookProp, StorybookProps } from '../types/storybookTypes';
/**
 * Class representing a Storybook wiki
 *
 * Класс, представляющий wiki для Storybook
 */
export declare class WikiStorybook {
    protected readonly component: string;
    protected readonly props: StorybookProps;
    protected readonly defaults: Record<string, any>;
    protected readonly wikiDesign: StorybookArgsToList;
    protected readonly wikiBasic: StorybookArgsToList;
    protected readonly wikiDescriptions: StorybookComponentsDescription;
    protected list: WikiStorybookItem[];
    /**
     * Creates a new instance of WikiStorybook
     *
     * Создает новый экземпляр WikiStorybook
     * @param component - Component name/ Название компонента
     * @param props - Properties for the component/ свойства для компонента
     * @param defaults - Default values for the component/ значения по умолчанию для компонента
     * @param wikiDesign - Design values for the wiki/ значения дизайна для wiki
     * @param wikiBasic - Basic values for the wiki/ базовые значения для wiki
     * @param wikiDescriptions - Component descriptions for the wiki/ описания компонентов для wiki
     */
    constructor(component: string, props: StorybookProps, defaults: Record<string, any>, wikiDesign: StorybookArgsToList, wikiBasic: StorybookArgsToList, wikiDescriptions: StorybookComponentsDescription);
    /**
     * Returns the name of the component
     *
     * Возвращает имя компонента
     */
    getName(): string;
    /**
     * Returns the properties wiki for the component
     *
     * Возвращает wiki свойств для компонента
     * @return The properties wiki for the component/ wiki свойств для компонента
     */
    getWiki(): StorybookArgs;
    /**
     * Returns the description of the component from the wiki
     *
     * Возвращает описание компонента из wiki
     * @return The description of the component/ описание компонента
     */
    getDescription(): string;
    /**
     * Returns the values of the wiki items
     *
     * Возвращает значения элементов wiki
     * @return An object containing the values of the wiki items/ объект, содержащий значения элементов wiki
     */
    getValues(): Record<string, any>;
    /**
     * Returns a Storybook item by its ID
     *
     * Возвращает элемент Storybook по его ID
     * @param id - The ID of the story/ ID истории
     */
    getStoryItem(id: string): StorybookComponentsDescriptionStory | undefined;
    /**
     * Returns the name of the story by its ID
     *
     * Возвращает имя истории по ее ID
     * @param id - The ID of the story/ ID истории
     */
    getStoryName(id: string): string | undefined;
    /**
     * Returns a wiki item by its name
     *
     * Возвращает элемент wiki по его имени
     * @param name - The name of the wiki item/ имя элемента wiki
     */
    protected getWikiItem(name: string): StorybookArgsToItem | undefined;
    /**
     * Returns the description item for the component
     *
     * Возвращает элемент описания для компонента
     * @return The description item for the component/ элемент описания для компонента
     */
    private getDescriptionItem;
    /**
     * Adds a default value to the wiki item and a list of options
     *
     * Добавляет значение по умолчанию к элементу wiki и список опций
     * @param item - The item to convert/ элемент для преобразования
     * @param wiki - The wiki item to which the default value and options will be added/
     * элемент wiki, к которому будут добавлены значение по умолчанию и опции
     */
    protected toWikiItemChanged(item: StorybookProp, wiki: StorybookArgsToItem): StorybookArgsToItem;
    /**
     * Converts the descriptions to text format
     *
     * Преобразует описания в текстовый формат
     * @param descriptions - The descriptions to convert/ Описания для преобразования
     */
    private toDescriptionText;
    /**
     * Initializes the list of wiki items for the component
     *
     * Инициализирует список элементов wiki для компонента
     * @return The list of wiki items for the component/ список элементов wiki для компонента
     */
    initList(): WikiStorybookItem[];
    /**
     * Initializes the properties list for the component
     *
     * Инициализирует список свойств для компонента
     * @return The list of properties for the component/ список свойств для компонента
     */
    initPropsWiki(): StorybookArgs;
}
