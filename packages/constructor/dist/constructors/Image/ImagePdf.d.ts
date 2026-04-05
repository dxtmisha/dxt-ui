/**
 * Class for working with PDF files.
 *
 * Класс для работы с PDF-файлами.
 */
export declare class ImagePdf {
    /**
     * Checks if the file is an image.
     *
     * Проверяет, является ли файл PDF.
     * @param file verified file/ проверяемый файл
     */
    static isPdf(file: string | File): boolean;
    /**
     * Applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer.
     *
     * Асинхронно читать содержимое файлов (или буферы данных), хранящиеся на компьютере пользователя.
     * @param file the Blob or File from which to read/ Blob или File которые следует прочитать
     */
    static get(file: string | File): Promise<string>;
}
