import { GoogleGenAI } from '@google/genai';

/**
 * Abstract AI base class providing common mechanics for AI integrations.
 * Handles prompt accumulation, model selection and unified response workflow.
 *
 * Абстрактный базовый класс AI, обеспечивающий общую механику интеграций:
 * накопление prompt, выбор модели и унифицированный цикл получения ответа.
 *
 * Responsibilities / Ответственности:
 * - Accumulate and compose prompt context / Накопление и компоновка контекста
 * - Select active model / Выбор активной модели
 * - Normalize generation call flow / Нормализация вызова генерации
 *
 * Extension points / Точки расширения:
 * - init(): client / auth / transport setup
 * - response(): concrete model invocation
 *
 * Расширение через методы:
 * - init(): инициализация клиента / авторизация / транспорт
 * - response(): конкретный вызов модели
 */
export declare abstract class AiAbstract<AI = any> {
    protected key: string;
    protected model: string;
    /** AI client instance / Экземпляр AI-клиента */
    protected ai?: AI;
    /** Prompt prefix / Префикс prompt */
    protected prompt: string;
    /** Accumulated image list / Накопленный список изображений */
    protected images: AiImageList;
    /** Accumulated contents / Накопленные содержимое */
    protected contents: string[];
    /**
     * Constructor initializes implementation specific resources.
     *
     * Конструктор инициализирует ресурсы конкретной реализации.
     * @param key - API key / API ключ
     * @param model - initial model id / начальный идентификатор модели
     */
    constructor(key: string, model: string);
    /**
     * Returns accumulated image list.
     *
     * Возвращает накопленный список изображений.
     */
    getImages(): AiImageList;
    /**
     * Returns accumulated contents.
     *
     * Возвращает накопленное содержимое.
     */
    getContents(): string[];
    /**
     * Appends an image to the accumulated image list.
     *
     * Добавляет изображение к накопленному списку изображений.
     * @param image - image item / элемент изображения
     */
    addImage(image: AiImageItem): this;
    /**
     * Appends content to the accumulated contents.
     *
     * Добавляет содержимое к накопленному содержимому.
     * @param content - content string / строка содержимого
     */
    addContent(content: string): this;
    /**
     * Appends a new line to the accumulated prompt block.
     *
     * Добавляет новую строку к накопленному блоку prompt.
     */
    addPrompt(prompt: string): void;
    /**
     * Clears entire accumulated image list.
     *
     * Очищает весь накопленный список изображений.
     */
    resetImages(): this;
    /**
     * Clears entire accumulated contents.
     *
     * Очищает все накопленное содержимое.
     */
    resetContents(): this;
    /**
     * Clears entire accumulated prompt.
     *
     * Полностью очищает накопленный prompt.
     */
    resetPrompt(): void;
    /**
     * Sets / switches API key for authentication.
     *
     * Устанавливает / переключает API ключ для аутентификации.
     * @param key - new API key / новый API ключ
     */
    setKey(key: string): this;
    /**
     * Sets / switches current model for generation.
     *
     * Устанавливает / переключает текущую модель для генерации.
     */
    setModel(model: string): this;
    /**
     * Generates AI response using active model and composed contents.
     *
     * Генерирует отклик ИИ, используя активную модель и собранный контент.
     */
    generate(contents: string): Promise<string>;
    /**
     * Combines persistent prompt prefix with provided contents.
     *
     * Объединяет постоянный префикс prompt с переданным содержимым.
     */
    protected getMainContents(contents: string): string;
    /**
     * Implementation hook: initialize client / transport / auth.
     *
     * Хук реализации: инициализация клиента / транспорта / авторизации.
     */
    protected abstract init(): void;
    /**
     * Implementation hook: convert accumulated images to model-specific format.
     *
     * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
     */
    protected abstract toImages(): void;
    /**
     * Implementation hook: convert accumulated contents to model-specific format.
     *
     * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
     */
    protected abstract toContents(): void;
    /**
     * Implementation hook: perform model call and return textual result.
     *
     * Хук реализации: выполнить вызов модели и вернуть текстовый результат.
     * @param model - active model id / идентификатор активной модели
     * @param contents - composed prompt + contents / собранный prompt + содержимое
     */
    protected abstract response(model: string, contents: string): Promise<string>;
}

/**
 * Google AI (Gemini) implementation via CLI.
 * Uses system shell to execute Gemini CLI commands.
 *
 * Реализация Google AI (Gemini) через CLI.
 * Использует системную оболочку для выполнения команд Gemini CLI.
 *
 * Responsibilities / Ответственности:
 * - Construct CLI command / Сформировать CLI команду
 * - Execute command via shell / Выполнить команду через оболочку
 * - Return stdout as result / Вернуть stdout как результат
 *
 * Notes / Примечания:
 * - Requires 'gemini' CLI tool installed / Требует установленной утилиты 'gemini'
 * - API key is passed via environment variable or config / API ключ передается через переменную окружения или конфиг
 */
export declare class AiGoogleCliLite extends AiAbstract<{}> {
    /**
     * Counter for generating unique temporary file names/
     * Счетчик для генерации уникальных имен временных файлов
     */
    protected idFile: number;
    /**
     * Generates a unique file path for the temporary prompt.
     *
     * Генерирует уникальный путь к файлу для временного промпта.
     */
    protected getFileName(): string;
    /**
     * Initializes the "client".
     * For CLI, we just mark it as initialized.
     *
     * Инициализирует "клиента".
     * Для CLI мы просто помечаем его как инициализированный.
     */
    protected init(): void;
    /**
     * Implementation hook: convert accumulated images to model-specific format.
     * CLI implementation currently ignores images.
     *
     * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
     * Реализация CLI в настоящее время игнорирует изображения.
     */
    protected toImages(): any;
    /**
     * Implementation hook: convert accumulated contents to model-specific format.
     * Returns array of strings.
     *
     * Хук реализации: преобразовать накопленное содержимое в формат, специфичный для модели.
     * Возвращает массив строк.
     */
    protected toContents(): any;
    /**
     * Performs content generation request via CLI and returns textual result.
     *
     * Выполняет запрос генерации контента через CLI и возвращает текстовый результат.
     * @param model Model identifier / Идентификатор модели
     * @param contents Composed contents for generation / Собранный контент для генерации
     */
    protected response(model: string, contents: string): Promise<string>;
    /**
     * Creates a temporary file with the prompt content and returns the path formatted for the CLI.
     *
     * Создает временный файл с содержимым промпта и возвращает путь, отформатированный для CLI.
     * @param content Prompt content / Содержимое промпта
     * @returns Formatted file path (e.g., @./ai-tmp/Prompt-1.txt) / Отформатированный путь к файлу
     */
    protected createFile(content: string): string;
    /**
     * Cleans up temporary files and directories.
     *
     * Очищает временные файлы и директории.
     * @protected
     */
    protected removeFile(): void;
}

/**
 * Google AI (Gemini) implementation of AiAbstract.
 * Initializes GoogleGenAI client and performs text generation requests.
 *
 * Реализация Google AI (Gemini) поверх AiAbstract.
 * Инициализирует клиент GoogleGenAI и выполняет запросы генерации текста.
 *
 * Responsibilities / Ответственности:
 * - Provide API key / Предоставить API ключ
 * - Initialize low-level client / Инициализировать низкоуровневый клиент
 * - Call generateContent and extract plain text / Вызвать generateContent и извлечь текст
 *
 * Notes / Примечания:
 * - Model must be set via setModel() before generate() / Модель нужно задать через setModel()
 * - Returns empty string if response is missing / Возвращает пустую строку при отсутствии результата
 */
export declare class AiGoogleLite extends AiAbstract<GoogleGenAI> {
    /**
     * Initializes GoogleGenAI client instance.
     *
     * Инициализирует экземпляр клиента GoogleGenAI.
     */
    protected init(): void;
    /**
     * Implementation hook: convert accumulated images to model-specific format.
     *
     * Хук реализации: преобразовать накопленные изображения в формат, специфичный для модели.
     */
    protected toImages(): any;
    protected toContents(): any;
    /**
     * Performs content generation request and returns textual result.
     *
     * Выполняет запрос генерации контента и возвращает текстовый результат.
     * @param model Model identifier / Идентификатор модели
     * @param contents Composed contents for generation / Собранный контент для генерации
     */
    protected response(model: string, contents: string): Promise<string>;
}

declare type AiImageItem = {
    mime: string;
    base64: string;
};

declare type AiImageList = AiImageItem[];

export { }
