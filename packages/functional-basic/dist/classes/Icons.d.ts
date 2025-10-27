export type IconsItem = string | Promise<string | any>;
/**
 * Class for managing icons.
 *
 * Класс для управления иконками.
 */
export declare class Icons {
    protected static icons: Record<string, IconsItem>;
    protected static url: string;
    /**
     * Checks if the given icon is in the list of connected icons.
     *
     * Проверяет, есть ли данная иконка в списке подключенных иконок.
     * @param index icon name/ название иконки
     */
    static is(index: string): boolean;
    /**
     * Returns the icon by the name.
     *
     * Возвращает иконку по названию.
     * @param index icon name/ название иконки
     * @param url path to the storage location of the icon, if the icon does not exist/
     * путь к месту хранения иконки, если иконка не существует
     * @param wait waiting time for picture loading/
     * время ожидания загрузки картинки
     */
    static get(index: string, url?: string, wait?: number): Promise<string>;
    /**
     * Returns a list of names of all registered icons.
     *
     * Возвращает список названий всех зарегистрированных иконок.
     */
    static getNameList(): string[];
    /**
     * Returns a global link.
     *
     * Возвращает глобальную ссылку.
     */
    static getUrlGlobal(): string;
    /**
     * Adding custom icons.
     *
     * Добавление пользовательских иконок.
     * @param index icon name/ название иконки
     * @param file path to the file/ путь к файлу
     */
    static add(index: string, file: IconsItem): void;
    /**
     * Adding custom icons in loading mode.
     *
     * Добавление пользовательских иконок в режиме загрузки.
     * @param index icon name/ название иконки
     */
    static addLoad(index: string): void;
    /**
     * Adding custom global icons.
     *
     * Добавление пользовательских глобальных иконок.
     * @param index icon name/ название иконки
     * @param file path to the file/ путь к файлу
     */
    static addGlobal(index: string, file: string): void;
    /**
     * Adding an icon by the list.
     *
     * Добавление иконки по списку.
     * @param list list of icons/ список иконки
     */
    static addByList(list: Record<string, IconsItem>): void;
    /**
     * Changes the file path.
     *
     * Изменяет путь к файлу.
     * @param url new file path/ новый путь к файлу
     */
    static setUrl(url: string): void;
    /**
     * Returns the icon name.
     *
     * Возвращает название иконки.
     * @param index icon name/ название иконки
     */
    protected static getName(index: string): string;
    /**
     * Script execution delay.
     *
     * Задержка выполнения скрипта.
     */
    protected static wait(): Promise<void>;
}
