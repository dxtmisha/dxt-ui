import { ZipOptions } from 'fflate';
/**
 * Class for creating and managing ZIP archives.
 *
 * Класс для создания и управления ZIP-архивами.
 */
export declare class Zip {
    protected name: string;
    protected options: ZipOptions;
    protected readonly data: Record<string, any>;
    protected buffer?: Uint8Array;
    /**
     * Constructor
     * @param name Archive name / Название архива
     * @param options ZIP options / Настройки ZIP
     */
    constructor(name: string, options?: ZipOptions);
    /**
     * Checks if the archive has data.
     *
     * Проверяет, есть ли данные в архиве.
     * @returns boolean
     */
    is(): boolean;
    /**
     * Returns the ZIP buffer.
     *
     * Возвращает буфер ZIP.
     * @returns Uint8Array | undefined
     */
    get(): Uint8Array | undefined;
    /**
     * Sets the archive name.
     *
     * Устанавливает название архива.
     * @param name Archive name / Название архива
     * @returns this
     */
    setName(name: string): this;
    /**
     * Sets the ZIP options.
     *
     * Устанавливает настройки ZIP.
     * @param options ZIP options / Настройки ZIP
     * @returns this
     */
    setOptions(options: ZipOptions): this;
    /**
     * Adds a file to the archive.
     *
     * Добавляет файл в архив.
     * @param pathName File path or name / Путь или название файла
     * @param data File content / Содержимое файла
     * @returns this
     */
    addFile(pathName: string, data: any): this;
    /**
     * Deletes a file from the archive by name.
     *
     * Удаляет файл из архива по имени.
     * @param pathName File path or name / Путь или название файла
     * @returns this
     */
    removeFile(pathName: string): this;
    /**
     * Saves the archive by downloading it in the browser.
     *
     * Сохраняет архив, скачивая его в браузере.
     * @returns this
     */
    save(): this;
    /**
     * Reforms data before adding it to the archive.
     *
     * Преобразует данные перед добавлением в архив.
     * @param data file data / данные файла
     * @returns any | undefined
     */
    protected reformedData(data: any): any | undefined;
}
