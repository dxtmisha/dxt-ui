import { Datetime } from '@dxtmisha/functional-basic';
import { default as default_2 } from 'typescript';
import { default as default_3 } from 'node:path';
import { default as default_4 } from 'node:fs';
import { GoogleGenAI } from '@google/genai';
import { Plugin as Plugin_3 } from 'vite';
import { TransformResult } from 'rollup';

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
 * Class for generating AI documentation.
 *
 * Класс для генерации AI документации.
 */
export declare class AiDoc {
    /**
     * Main method to generate documentation.
     *
     * Основной метод для генерации документации.
     */
    make(): Promise<void>;
    /**
     * Process a specific directory.
     *
     * Обрабатывает конкретную директорию.
     * @param dir - directory path / путь к директории
     */
    makeDirectory(dir: string): Promise<void>;
    /**
     * Get list of files in a directory.
     *
     * Получает список файлов в директории.
     * @param dir - directory path / путь к директории
     */
    protected getListByDirectory(dir: string): GitFileList;
}

export declare type AiDocFile = {
    content: string;
    date: Datetime;
};

/**
 * Class for generating documentation for Functions.
 *
 * Класс для генерации документации для Функций.
 */
export declare class AiDocItem extends AiDocItemAbstract {
    protected pathDemo: string[];
    protected pathPrompt: string[];
}

export declare abstract class AiDocItemAbstract {
    protected readonly path: string;
    protected readonly item: GitFileItem;
    /** Demo file path / Путь к файлу демо */
    protected abstract pathDemo: string[];
    /** Prompt template path / Путь к шаблону промпта */
    protected abstract pathPrompt: string[];
    /** Build item / Элемент сборки */
    protected readonly build: BuildItem;
    /** Markdown file / Файл в формате Markdown */
    protected readonly mdFile: ComponentWikiFile;
    /** Code file / Файл с кодом */
    protected readonly code: ComponentWikiFile;
    /** Property file data / Данные из файла свойств */
    protected readonly projectName: string;
    /** AI instance / Экземпляр ИИ */
    protected readonly ai?: AiAbstract;
    /** Description from AI / Описание от ИИ */
    protected description?: string;
    /**
     * Constructor
     * @param path source file path / путь к исходному файлу
     * @param item git file item / элемент файла git
     */
    constructor(path: string, item: GitFileItem);
    /**
     * Generates documentation using AI.
     *
     * Генерирует документацию с использованием ИИ.
     */
    make(): Promise<void>;
    /**
     * Checks if the item is marked as not to be built.
     *
     * Проверяет, помечен ли элемент как не подлежащий сборке.
     */
    isBuildDisabled(): boolean;
    /**
     * Returns the path to the Wiki file.
     *
     * Возвращает путь к Wiki файлу.
     */
    protected getPathWiki(): string[];
    /**
     * Returns the file modification date.
     *
     * Возвращает дату изменения файла.
     */
    protected getItemDate(): Date;
    /**
     * Returns the title for the documentation.
     *
     * Возвращает заголовок для документации.
     */
    protected getTitle(): string;
    /**
     * Reads the demo file content.
     *
     * Читает содержимое демо-файла.
     */
    protected readDemo(): string;
    /**
     * Reads the prompt template.
     *
     * Читает шаблон промпта.
     */
    protected readPrompt(): string;
    /**
     * Prepares context for AI.
     *
     * Подготавливает контекст для ИИ.
     */
    protected makeAi(): void;
    /**
     * Initializes the title in the content.
     *
     * Инициализирует заголовок в контенте.
     * @param content content / контент
     */
    protected initName(content: string): string;
}

/**
 * AI Documentation Item for Classes.
 *
 * Элемент документации AI для классов.
 */
export declare class AiDocItemClasses extends AiDocItemAbstract {
    protected pathDemo: string[];
    protected pathPrompt: string[];
}

export declare class AiDocItemComposables extends AiDocItemAbstract {
    protected pathDemo: string[];
    protected pathPrompt: string[];
}

/**
 * Class for managing AI documentation types.
 *
 * Класс для управления типами документации ИИ.
 */
export declare class AiDocType {
    /** List of available documentation types / Список доступных типов документации */
    protected static types: AiDocTypeItem[];
    /**
     * Adds a new documentation type to the list.
     *
     * Добавляет новый тип документации в список.
     * @param type documentation type item / элемент типа документации
     */
    static add(type: AiDocTypeItem): void;
    /**
     * Generates documentation for a file item.
     *
     * Генерирует документацию для элемента файла.
     * @param item git file item / элемент файла git
     */
    static make(item: GitFileItem): Promise<void>;
}

export declare type AiDocTypeItem = {
    check: (item: GitFileItem) => boolean;
    item: any;
};

export declare type AiDocTypes = AiDocTypeItem[];

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
export declare class AiGoogle extends AiGoogleLite {
    constructor();
}

/**
 * Google AI (Gemini) implementation via CLI.
 * Extends AiGoogleCliLite and provides configuration from the project environment.
 *
 * Реализация Google AI (Gemini) через CLI.
 * Расширяет AiGoogleCliLite и предоставляет конфигурацию из окружения проекта.
 *
 * Responsibilities / Ответственности:
 * - Provide API key and model from config / Предоставить API ключ и модель из конфигурации
 * - Initialize CLI wrapper / Инициализировать обертку CLI
 *
 * Notes / Примечания:
 * - Uses getConfigAi() to retrieve credentials / Использует getConfigAi() для получения учетных данных
 */
export declare class AiGoogleCli extends AiGoogleCliLite {
    constructor();
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

export declare type AiImageItem = {
    mime: string;
    base64: string;
};

export declare type AiImageList = AiImageItem[];

/** AI type for content generation / Тип ИИ для генерации контента */
export declare type AiType = 'gemini' | 'gemini-cli';

export declare class BuildFunctional {
    constructor();
    make(): void;
    getList(): string[];
}

/**
 * Builds a component using a temporary Vite config.
 *
 * Билдит компонент с использованием временного Vite-конфига.
 */
export declare class BuildItem {
    protected readonly path: string;
    /** Template vite config file / Файл шаблона vite-конфига */
    protected readonly viteSample: ComponentWikiFile;
    /** Aggregated built code file / Файл агрегированного собранного кода */
    protected readonly codeFile: ComponentWikiFile;
    /**
     * Constructor
     * @param path component path / путь к компоненту
     */
    constructor(path: string);
    /**
     * Returns distribution temp directory path segments.
     *
     * Возвращает сегменты пути дистрибутива (temp).
     */
    getPathTemporaryDist(): string[];
    /**
     * Returns aggregated built code content.
     *
     * Возвращает содержимое агрегированного собранного кода.
     */
    getCode(): string;
    /**
     * Removes temporary distribution directory.
     *
     * Удаляет временную директорию дистрибутива.
     */
    removeDir(): void;
    /**
     * Prepares temporary vite config, triggers build, then restores original.
     *
     * Готовит временный vite-конфиг, запускает билд, затем восстанавливает оригинал.
     */
    make(): Promise<boolean>;
    /**
     * Saves existing vite config aside (rename) before custom build.
     *
     * Сохраняет существующий vite-конфиг (переименовывает) перед кастомным билдом.
     */
    protected saveViteConfig(): void;
    /**
     * Restores original vite config after build.
     *
     * Восстанавливает оригинальный vite-конфиг после билда.
     */
    protected resetViteConfig(): void;
    /**
     * Reads built file content and wraps with header comment (file name).
     *
     * Читает содержимое собранного файла и оборачивает заголовком с именем файла.
     * @param path relative built file path / относительный путь собранного файла
     */
    protected readFile(path: string): string;
    /**
     * Aggregates all built files into a single code snapshot file.
     *
     * Агрегирует все собранные файлы в единый снимок кода.
     */
    protected readAndWriteALlFiles(): void;
    /**
     * Runs build command (npm run build) capturing stdout/stderr.
     *
     * Запускает команду билда (npm run build), перехватывая stdout/stderr.
     */
    protected run(): Promise<boolean>;
}

/**
 * Utility class for reading and writing a single wiki component file.
 *
 * Утилитный класс для чтения и записи одного файла wiki компонента.
 */
declare class ComponentWikiFile {
    protected readonly paths: string[];
    protected readonly isDate: boolean;
    protected readonly isOld: boolean;
    /**
     * Constructor.
     *
     * Конструктор.
     * @param paths target file path segments / сегменты пути целевого файла
     * @param isDate whether to extract date from content / извлекать ли дату из содержимого
     * @param isOld whether to keep old version of file / сохранять ли старую версию файла
     */
    constructor(paths: string[], isDate?: boolean, isOld?: boolean);
    /**
     * Returns absolute path to file.
     *
     * Возвращает абсолютный путь к файлу.
     */
    getPath(): string;
    /**
     * Returns date from file content.
     *
     * Возвращает дату из содержимого файла.
     */
    getDate(): Datetime;
    /**
     * Reads file content as string.
     *
     * Читает содержимое файла как строку.
     */
    read(): string;
    /**
     * Writes content to file.
     *
     * Записывает содержимое в файл.
     * @param content content to write / содержимое для записи
     */
    write(content: string): void;
    /**
     * Extracts date from content string.
     *
     * Извлекает дату из строки содержимого.
     * @param content content string / строка содержимого
     */
    protected extractDateFromContent(content: string): Datetime;
    /**
     * Adds current date to content if isDate is true.
     *
     * Добавляет текущую дату в содержимое, если isDate равно true.
     * @param content content string / строка содержимого
     */
    protected addDate(content: string): string;
}

/** Item for design flags / Элемент флагов дизайна */
export declare type DesignFlagsItem = {
    /** Flag name / Название флага */
    name: string;
    /** X coordinate / Координата X */
    x: number;
    /** Y coordinate / Координата Y */
    y: number;
};

/** List of design flags items / Список элементов флагов дизайна */
export declare type DesignFlagsList = DesignFlagsItem[];

export declare type DesignPluginOptions = {
    style?: boolean;
    component?: boolean;
    viteOptions?: Plugin_3;
};

/** Design structure classes item with index, name and full flag / Элемент классов структуры дизайна с индексом, именем и флагом полноты */
export declare type DesignStructureClassesItem = {
    /** Class index identifier / Идентификатор индекса класса */
    index: string;
    /** CSS class name / Название CSS класса */
    className: string;
    /** Full class flag / Флаг полного класса */
    full: boolean;
};

/** List of design structure classes / Список классов структуры дизайна */
export declare type DesignStructureClassesList = DesignStructureClassesItem[];

/** Main design structure item with complete information / Основной элемент структуры дизайна с полной информацией */
export declare type DesignStructureItem = {
    /** Item name / Название элемента */
    name: string;
    /** Item index identifier / Идентификатор индекса элемента */
    index: string;
    /** Item type / Тип элемента */
    type: string;
    /** CSS class name / Название CSS класса */
    className?: string;
    /** Current values array / Массив текущих значений */
    value: (string | boolean)[];
    /** All possible values array / Массив всех возможных значений */
    valueAll: (string | boolean)[];
    /** Nested sub-items / Вложенные подэлементы */
    state: DesignStructureItemSub[];
    /** Style flag / Флаг стиля */
    style?: boolean;
    /** Default value / Значение по умолчанию */
    default?: string | number | boolean;
    /** Item category / Категория элемента */
    category?: string;
};

/** Design structure sub-item with nested state / Подэлемент структуры дизайна с вложенным состоянием */
export declare type DesignStructureItemSub = {
    /** Sub-item name / Название подэлемента */
    name: string;
    /** Sub-item index / Индекс подэлемента */
    index: string;
    /** Array of values / Массив значений */
    value: (string | boolean)[];
    /** Nested sub-items / Вложенные подэлементы */
    state: DesignStructureItemSub[];
};

/** Record of design structure items by key / Запись элементов структуры дизайна по ключу */
export declare type DesignStructureList = Record<string, DesignStructureItem>;

/** Design structure state with hierarchy and property information / Состояние структуры дизайна с иерархией и информацией о свойствах */
export declare type DesignStructureState = {
    /** Element index identifier / Идентификатор индекса элемента */
    index: string;
    /** Element type / Тип элемента */
    type: string;
    /** Property item data / Данные элемента свойства */
    item: PropertyItem;
    /** CSS class name / Название CSS класса */
    className?: string;
    /** Nested state array / Массив вложенных состояний */
    state: DesignStructureState[];
};

/** List of design structure states / Список состояний структуры дизайна */
export declare type DesignStructureStateList = DesignStructureState['state'];

/**
 * Class for generating AI-optimized type definitions.
 *
 * Класс для генерации оптимизированных ИИ определений типов.
 */
export declare class DesignTypes {
    protected readonly dir: string;
    /**
     * Array of directory path segments.
     *
     * Массив сегментов пути директории.
     */
    protected readonly dirArray: string[];
    /**
     * Constructor
     * @param dir directory path / путь к директории
     */
    constructor(dir?: string);
    /**
     * Main method to execute the type generation process.
     *
     * Основной метод для выполнения процесса генерации типов.
     */
    make(): void;
    /**
     * Checks if the file is a valid declaration file.
     *
     * Проверяет, является ли файл валидным файлом декларации.
     * @param file file name / имя файла
     */
    protected isFile(file: string): boolean;
    /**
     * Checks if the content contains type definitions.
     *
     * Проверяет, содержит ли контент определения типов.
     * @param content file content / содержимое файла
     */
    protected isContent(content?: string): content is string;
    /**
     * Returns the full path segments for a file.
     *
     * Возвращает сегменты полного пути для файла.
     * @param file file name / имя файла
     */
    protected getPath(file: string): string[];
    /**
     * Reads the directory recursively.
     *
     * Читает директорию рекурсивно.
     */
    protected getList(): string[];
    /**
     * Gets a list of files filtered by criteria.
     *
     * Получает список файлов, отфильтрованный по критериям.
     */
    protected getListByFilter(): DesignTypesList;
    /**
     * Reads the content of a file.
     *
     * Читает содержимое файла.
     * @param path file path / путь к файлу
     */
    protected readFile(path: string): string | undefined;
    /**
     * Saves the generated content to a file.
     *
     * Сохраняет сгенерированный контент в файл.
     * @param content content to save / контент для сохранения
     */
    protected save(content: string): void;
    /**
     * Combines a list of files into a single string.
     *
     * Объединяет список файлов в одну строку.
     * @param list list of files / список файлов
     */
    protected toOneFile(list: DesignTypesList): string;
    /**
     * Sends content to AI for optimization.
     *
     * Отправляет контент ИИ для оптимизации.
     * @param content content to optimize / контент для оптимизации
     */
    protected toAiEdit(content: string): Promise<string>;
}

/**
 * Class for working with TypeScript types
 *
 * Класс для работы с типами TypeScript
 */
export declare class DesignTypescript {
    protected readonly program: default_2.Program;
    protected readonly checker: default_2.TypeChecker;
    protected readonly sourceFile?: default_2.SourceFile;
    protected types?: DesignTypescriptList;
    constructor(path?: string, options?: default_2.CompilerOptions);
    /**
     * Returns the TypeScript types from the source file
     *
     * Возвращает типы TypeScript из исходного файла
     */
    getTypes(): DesignTypescriptList;
    /**
     * Returns the TypeScript type by name
     *
     * Возвращает тип TypeScript по имени
     * @param name Name of the type/ имя типа
     */
    getType(name: string): DesignTypescriptItem | undefined;
    /**
     * Returns the type of the property
     *
     * Возвращает тип свойства
     * @param type TypeScript type/ тип TypeScript
     * @param prop Symbol of the property/ символ свойства
     */
    protected getPropType(type: default_2.Type, prop?: default_2.Symbol): string;
    /**
     * Returns the option of the property
     *
     * Возвращает опцию свойства
     * @param type TypeScript type/ тип TypeScript
     */
    protected getPropOption(type: default_2.Type): DesignTypescriptProp['option'];
    /**
     * Extracts literal options from a property TypeNode union
     *
     * Извлекает литеральные опции из узла типа свойства (union)
     * @param type Property type AST node/ узел AST типа свойства
     * @returns Array of literal values or undefined/ Массив литеральных значений или undefined
     */
    protected getPropOptionByNode(type: default_2.TypeNode): DesignTypescriptProp['option'];
    /**
     * Extracts literal options from property declarations by reading their type nodes
     *
     * Извлекает литеральные опции из деклараций свойства, анализируя их узлы типа
     * @param declarations Symbol declarations/ декларации символа
     * @returns Array of literal values or empty array/ Массив литеральных значений или пустой массив
     */
    protected getPropOptionByDeclarations(declarations?: default_2.Declaration[]): DesignTypescriptProp['option'];
    /**
     * Returns information about the property
     *
     * Возвращает информацию о свойстве
     * @param node Type alias or interface declaration/ объявление псевдонима типа или интерфейса
     * @param prop Symbol of the property/ символ свойства
     */
    protected getPropInformation(node: default_2.TypeAliasDeclaration | default_2.InterfaceDeclaration, prop: default_2.Symbol): DesignTypescriptProp;
}

/** TypeScript item containing name and properties / TypeScript элемент содержащий имя и свойства */
export declare type DesignTypescriptItem = {
    /** TypeScript item name / Название TypeScript элемента */
    name: string;
    /** Array of properties / Массив свойств */
    props: DesignTypescriptProps;
};

/** List of TypeScript items / Список TypeScript элементов */
export declare type DesignTypescriptList = DesignTypescriptItem[];

/** TypeScript property description with type and options / Описание TypeScript свойства с типом и опциями */
export declare type DesignTypescriptProp = {
    /** Property name / Название свойства */
    name: string;
    /** Property type / Тип свойства */
    type: string;
    /** Array of possible options / Массив возможных опций */
    option?: string[];
    /** Property description / Описание свойства */
    description?: string;
};

/** List of TypeScript properties / Список TypeScript свойств */
export declare type DesignTypescriptProps = DesignTypescriptProp[];

export declare type DesignTypesItem = {
    path: string;
    content: string;
};

export declare type DesignTypesList = DesignTypesItem[];

/** Configuration structure for the design system UI project / Структура конфигурации для проекта дизайн-системы UI */
export declare type DesignUiConfig = {
    /** Extends another configuration file / Расширяет другой файл конфигурации */
    extends?: string;
    /** Project name / Название проекта */
    project: string;
    /** Design system name / Название дизайн-системы */
    name: string;
    /** Alternative names / Альтернативные названия */
    alternativeName?: string[];
    /**
     * Abbreviation symbol, this key will be used to separate into sub-branches /
     * Символ сокращения, такой ключ будет разделять на под-ветки
     */
    separator?: string;
    /**
     * Name that will be removed when splitting into branches /
     * Название, которое будет удаляться при разделении на ветки
     */
    separatorBasicName?: string;
    /**
     * Limit of key splitting into sub-branches /
     * Лимит разделения ключа на под-ветки
     */
    separatorLimit?: number;
    /** Wiki language / Язык wiki */
    wikiLanguage?: string;
    /** Package prefix for generating package names / Префикс пакета для генерации названий пакетов */
    packagePrefix?: string;
    /** AI type for generating content / Тип ИИ для генерации контента */
    aiType?: 'gemini';
    /** AI model for generating content / Модель ИИ для генерации контента */
    aiModel?: string;
    /** Google AI key for accessing Google services / Ключ Google AI для доступа к сервисам Google */
    aiKey?: string;
    /** Directories for AI documentation generation / Каталоги для генерации AI документации */
    aiDocDirectory?: string[];
    /** Paths to Storybook for AI documentation generation / Пути к Storybook для генерации AI документации */
    aiDocStorybookPath?: string;
};

/**
 * Returns AI configuration: API key and model.
 *
 * Возвращает конфигурацию ИИ: API ключ и модель.
 */
export declare function getConfigAi(): [string, string];

/**
 * Gets the current directory name.
 *
 * Получает имя текущей директории.
 */
export declare function getDirname(): string;

/**
 * Returns the package.json file content.
 *
 * Возвращает содержимое файла package.json.
 */
export declare function getPackageJson(): Record<string, any> | undefined;

export declare type GitFileItem = {
    path: string;
    pathByOS: string[];
    pathFull: string;
    date: string;
    status?: GitStatus;
};

export declare type GitFileList = GitFileItem[];

/**
 * Class for reading information from Git repository.
 *
 * Класс для чтения информации из Git репозитория.
 */
export declare class GitRead {
    /**
     * Gets list of files with their metadata.
     *
     * Получает список файлов с их метаданными.
     * @param filter - file filter function / функция фильтрации файлов
     */
    static getList(filter?: (file: string) => boolean): GitFileList;
    /**
     * Gets list of files in porcelain format with their metadata.
     *
     * Получает список файлов в формате porcelain с их метаданными.
     * @param filter - file filter function / функция фильтрации файлов
     */
    static getListPorcelain(filter?: (file: string) => boolean): GitFileList;
    /**
     * Gets unique list of files from both standard and porcelain lists.
     *
     * Получает уникальный список файлов из обоих стандартных и porcelain списков.
     * @param filter - file filter function / функция фильтрации файлов
     */
    static getListUnique(filter: (file: string) => boolean): GitFileList;
    /**
     * Gets list of files by directory with .ts extension, excluding test files.
     *
     * Получает список файлов по директории с расширением .ts, исключая тестовые файлы.
     * @param directory - directory path or regex / путь к директории или регулярное выражение
     */
    static getListByDirectory(directory: string | RegExp): GitFileList;
    /**
     * Gets list of class files (*.ts in /classes/ directory).
     *
     * Получает список файлов классов (*.ts в директории /classes/).
     */
    static getClassesList(): GitFileList;
    /**
     * Gets list of class files (*.ts in /classes/ directory).
     *
     * Получает список файлов классов (*.ts в директории /classes/).
     */
    static getFunctionsList(): GitFileList;
    /**
     * Gets list of all file paths in repository.
     *
     * Получает список всех путей файлов в репозитории.
     */
    static getFilesPath(): string[];
    /**
     * Gets list of files in porcelain format.
     *
     * Получает список файлов в формате porcelain.
     */
    static getFilesPorcelain(): string[];
    /**
     * Gets the date of the last commit for a file.
     *
     * Получает дату последнего коммита для файла.
     * @param filePath - path to file / путь к файлу
     */
    static getFileDate(filePath: string): string;
    /**
     * Gets the directory prefix of the current Git repository.
     *
     * Получает префикс директории текущего Git репозитория.
     */
    static getDirPrefix(): string;
    /**
     * Formats a date string to standard full format.
     *
     * Форматирует строку даты в стандартный полный формат.
     * @param date - date string / строка даты
     */
    static getDate(date?: string): string;
    /**
     * Filters a list of Git files by the current directory prefix.
     *
     * Фильтрует список файлов Git по префиксу текущей директории.
     * @param list - list of Git files / список файлов Git
     */
    static filterByDirectory(list: GitFileList): GitFileList;
    /**
     * Merges two lists of Git files, ensuring uniqueness by file path.
     *
     * Объединяет два списка файлов Git, обеспечивая уникальность по пути файла.
     * @param listA - first list to merge / первый список для объединения
     * @param listB - lists to merge / списки для объединения
     */
    static mergeUnique(listA: GitFileList, listB: GitFileList): GitFileList;
    /**
     * Splits a file path into its components.
     *
     * Разбивает путь файла на его компоненты.
     * @param path - file path / путь к файлу
     */
    static splitPath(path: string): string[];
    /**
     * Executes Git command and returns result.
     *
     * Выполняет Git команду и возвращает результат.
     * @param command - command to execute / команда для выполнения
     */
    protected static exec(command: string): string;
}

/**
 * Git file status codes/
 * Коды статусов файлов Git
 */
export declare enum GitStatus {
    /** File has been modified / Файл был изменен */
    MODIFIED = "M",
    /** File has been added / Файл был добавлен */
    ADDED = "A",
    /** File has been deleted / Файл был удален */
    DELETED = "D",
    /** File has been renamed / Файл был переименован */
    RENAMED = "R",
    /** File has been copied / Файл был скопирован */
    COPIED = "C",
    /** File has been updated / Файл был обновлен */
    UPDATED = "U",
    /** File is untracked / Файл не отслеживается */
    UNTRACKED = "??",
    /** File is ignored / Файл игнорируется */
    IGNORED = "!!",
    /** File modified by both sides / Файл изменен с обеих сторон */
    BOTH_MODIFIED = "UU",
    /** File added by us / Файл добавлен нами */
    ADDED_BY_US = "AU",
    /** File deleted by us / Файл удален нами */
    DELETED_BY_US = "DU",
    /** File added by them / Файл добавлен ими */
    ADDED_BY_THEM = "UA",
    /** File deleted by them / Файл удален ими */
    DELETED_BY_THEM = "UD",
    /** File added by both sides / Файл добавлен с обеих сторон */
    BOTH_ADDED = "AA",
    /** File deleted by both sides / Файл удален с обеих сторон */
    BOTH_DELETED = "DD",
    /** File modified in index / Файл изменен в индексе */
    MODIFIED_IN_INDEX = "MM",
    /** File added in index / Файл добавлен в индексе */
    ADDED_IN_INDEX = "AM",
    /** File deleted in index / Файл удален в индексе */
    DELETED_IN_INDEX = "DM",
    /** File renamed in index / Файл переименован в индексе */
    RENAMED_IN_INDEX = "RM",
    /** File copied in index / Файл скопирован в индексе */
    COPIED_IN_INDEX = "CM"
}

/**
 * Checks if __dirname is available.
 *
 * Проверяет, доступен ли __dirname.
 */
export declare function hasNativeDirname(): boolean;

/** List of library items / Список элементов библиотеки */
export declare type LibraryAll = LibraryItem[];

/** Library component data with design information / Данные компонента библиотеки с информацией о дизайне */
export declare type LibraryData = {
    /** Design system name / Название дизайн-системы */
    design: string;
    /** Component name / Название компонента */
    name: string;
    /** Component alias / Псевдоним компонента */
    alias: string;
    /** Full component code / Полный код компонента */
    codeFull: string;
    /** Component directory / Директория компонента */
    dir: string;
};

/** Collection of library files / Коллекция файлов библиотеки */
export declare type LibraryFiles = LibraryFilesItem[];

/** Library files item with name, path and file list / Элемент файлов библиотеки с именем, путём и списком файлов */
export declare type LibraryFilesItem = {
    /** File group name / Название группы файлов */
    name: string;
    /** File path / Путь к файлу */
    path: PropertiesFilePath;
    /** Array of file names / Массив имён файлов */
    files: string[];
};

/** Library icon item with name, path and value / Элемент иконки библиотеки с именем, путём и значением */
export declare type LibraryIconItem = {
    /** Icon name / Название иконки */
    name: string;
    /** Icon file path / Путь к файлу иконки */
    path: string;
    /** Icon value or content / Значение или содержимое иконки */
    value: string;
};

/** Library item containing name and list of components / Элемент библиотеки содержащий имя и список компонентов */
export declare type LibraryItem = {
    /** Library name / Название библиотеки */
    name: string;
    /** Array of components / Массив компонентов */
    components: LibraryData[];
};

/**
 * Class for working with the list of components.
 *
 * Класс для работы со списком компонентов.
 */
declare class LibraryItems {
    protected readonly items: LibraryAll;
    /**
     * Constructor
     */
    constructor();
    /**
     * Returns the list of components divided by design groups.
     *
     * Возвращает список компонентов, разделенных по группам дизайна.
     */
    get(): LibraryAll;
    /**
     * Returns the list of components as an array.
     *
     * Возвращает список компонентов в виде массива.
     */
    getComponentList(): LibraryData[];
    /**
     * Returns the number of components.
     *
     * Возвращает количество компонентов.
     */
    getCount(): number;
    /**
     * Writes data in the file.
     *
     * Записывает данные в файле.
     * @param name file name/ название файла
     * @param data values for writing/ значения для записи
     * @param extension file extension by default is json/ расширение файла по умолчанию - json
     */
    write(name: string, data: string[], extension?: string): void;
    /**
     * Returns a list of components.
     *
     * Возвращает список компонентов.
     */
    protected getComponents(): LibraryData[];
    /**
     * Returns the path to the design system components directory
     *
     * Возвращает путь к директории компонентов дизайн-системы
     */
    protected getComponentsPath(): string[];
    /**
     * Initializes data about the component.
     *
     * Инициализирует данные о компоненте.
     */
    protected initItems(): LibraryAll;
}

/**
 * Class for creating a file with a list of components.
 *
 * Класс для создания файла со списком компонентов.
 */
export declare class LibraryList {
    protected readonly items: LibraryItems;
    protected readonly packageName: string;
    /**
     * Constructor
     * @param items object for working with the list of components / объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    /**
     * Creates files with a list of components.
     *
     * Создает файлы со списком компонентов.
     */
    make(): this;
    /**
     * Returns a list of components for the file.
     *
     * Возвращает список компонентов для файла.
     */
    protected getComponents(): string[];
    /**
     * Returns a regular expression for all components.
     *
     * Возвращает регулярное выражение для всех компонентов.
     */
    protected getComponentsReg(): string;
    /**
     * Returns a list of design names.
     *
     * Возвращает список названий дизайнов.
     */
    protected getDesigns(): string[];
    /**
     * Generates a regular expression for the list of names.
     *
     * Генерирует регулярное выражение для списка имен.
     * @param names list of names / список имен
     * @param only exact match / точное совпадение
     */
    protected getReg(names: string[], only?: boolean): string;
    /**
     * Formats names for regular expression.
     *
     * Форматирует имена для регулярного выражения.
     * @param names list of names / список имен
     */
    protected getRegName(names: string[]): string;
    /**
     * Returns a list of CSS variables.
     *
     * Возвращает список CSS переменных.
     */
    protected getVars(): string[];
    protected getVarsReg(): string;
}

/**
 * Class for creating a plugin file.
 *
 * Класс для создания файла плагина.
 */
export declare class LibraryPlugin {
    protected readonly items: LibraryItems;
    /**
     * Constructor
     * @param items object for working with the list of components / объект для работы со списком компонентов
     */
    constructor(items: LibraryItems);
    /**
     * Creates a plugin file.
     *
     * Создает файл плагина.
     */
    make(): this;
}

/**
 * Base class for the Vite plugin.
 *
 * Базовый класс для плагина Vite.
 */
declare class Plugin_2 {
    protected readonly design: string;
    protected readonly packageName: string;
    protected readonly componentsReg: RegExp;
    protected readonly styleVarsReg: RegExp;
    protected readonly componentsList: PluginComponentImports;
    protected readonly name: string;
    protected readonly options: DesignPluginOptions;
    protected readonly data: PluginData;
    protected first: boolean;
    protected mode: string;
    /**
     * Constructor
     * @param design design name / название дизайна
     * @param packageName package name / название пакета
     * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
     * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
     * @param componentsList list of components / список компонентов
     * @param name plugin name / название плагина
     * @param options plugin options / настройки плагина
     */
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports, name?: string, options?: DesignPluginOptions);
    /**
     * Initializes the plugin.
     *
     * Инициализирует плагин.
     */
    init(): Plugin_3;
    /**
     * Checks if components should be processed.
     *
     * Проверяет, нужно ли обрабатывать компоненты.
     */
    protected isComponents(): boolean;
    /**
     * Checks if styles should be processed.
     *
     * Проверяет, нужно ли обрабатывать стили.
     */
    protected isStyles(): boolean;
    /**
     * Transforms the code.
     *
     * Преобразовывает код.
     * @param code file content / содержимое файла
     * @param id file identification / идентификация файла
     */
    protected transform(code: string, id: string): TransformResult;
    /**
     * Initializes the main file.
     *
     * Инициализирует главный файл.
     * @param code file content / содержимое файла
     */
    protected initMain(code: string): string;
    /**
     * Initializes components.
     *
     * Инициализирует компоненты.
     * @param id file identification / идентификация файла
     * @param code file content / содержимое файла
     */
    protected initComponents(id: string, code: string): string;
    /**
     * Initializes styles.
     *
     * Инициализирует стили.
     * @param id file identification / идентификация файла
     * @param code file content / содержимое файла
     */
    protected initStyles(id: string, code: string): string;
}
export { Plugin_2 as Plugin }

/** List of library component imports / Список импортов компонентов библиотеки */
export declare type PluginComponentImports = PluginComponentItem[];

/** Library component item with name and regex / Элемент компонента библиотеки с именем и регулярным выражением */
export declare type PluginComponentItem = {
    /** Component name / Название компонента */
    name: string;
    /** Regular expression for component search / Регулярное выражение для поиска компонента */
    reg: RegExp;
};

/** List of library components by key / Список компонентов библиотеки по ключу */
export declare type PluginComponentList = Record<string, PluginComponentItem>;

/**
 * Class for connecting components.
 *
 * Класс для подключения компонентов.
 */
export declare class PluginComponents {
    protected readonly id: string;
    protected readonly code: string;
    protected readonly pluginData: PluginData;
    /**
     * Constructor
     * @param id file identification / идентификация файла
     * @param code file content / содержимое файла
     * @param pluginData plugin data / данные плагина
     */
    constructor(id: string, code: string, pluginData: PluginData);
    /**
     * Initializes the data.
     *
     * Инициализирует данные.
     */
    init(): string;
    /**
     * Checks if there is a script element.
     *
     * Проверяет, есть ли элемент script.
     */
    protected isScript(): boolean;
    /**
     * Returns the file code, adding a script if it’s not there.
     *
     * Возвращает код файла, добавляя script, если его нет.
     */
    protected getCode(): string;
    /**
     * Returns the path to the component.
     *
     * Возвращает путь к компоненту.
     * @param item component data / данные компонента
     */
    protected getPath(item: PluginComponentItem): string;
    /**
     * Adds import code to the script.
     *
     * Добавляет код импорта в скрипт.
     * @param code file content / содержимое файла
     * @param imports import code / код импорта
     */
    protected addImportCode(code: string, imports: string): string;
    /**
     * Generates the import string for a component.
     *
     * Генерирует строку импорта для компонента.
     * @param item component data / данные компонента
     */
    protected importComponent(item: PluginComponentItem): string;
}

/**
 * Class for storing plugin data.
 *
 * Класс для хранения данных плагина.
 */
export declare class PluginData {
    protected readonly design: string;
    protected readonly packageName: string;
    protected readonly componentsReg: RegExp;
    protected readonly styleVarsReg: RegExp;
    protected readonly componentsList: PluginComponentImports;
    protected readonly styleModification: Record<string, string>;
    /**
     * Constructor
     * @param design design name / название дизайна
     * @param packageName package name / название пакета
     * @param componentsReg regular expression for finding components / регулярное выражение для поиска компонентов
     * @param styleVarsReg regular expression for finding variables / регулярное выражение для поиска переменных
     * @param componentsList list of components / список компонентов
     */
    constructor(design: string, packageName: string, componentsReg: RegExp, styleVarsReg: RegExp, componentsList: PluginComponentImports);
    /**
     * Returns the design name.
     *
     * Возвращает название дизайна.
     */
    getDesign(): string;
    /**
     * Returns the package name.
     *
     * Возвращает название пакета.
     */
    getPackageName(): string;
    /**
     * Checks if the code contains a component.
     *
     * Проверяет, содержит ли код компонент.
     * @param code code to check / код для проверки
     */
    hasComponent(code: string): boolean;
    /**
     * Checks if the code contains variables.
     *
     * Проверяет, содержит ли код переменные.
     * @param code code to check / код для проверки
     */
    hasVars(code: string): boolean;
    /**
     * Returns a list of all components in the code.
     *
     * Возвращает список всех компонентов в коде.
     * @param code code to check / код для проверки
     */
    getComponents(code: string): PluginComponentImports;
    /**
     * Returns the regular expression for finding variables.
     *
     * Возвращает регулярное выражение для поиска переменных.
     */
    getStyleVarsReg(): RegExp;
    /**
     * Returns the style modification map.
     *
     * Возвращает карту модификации стилей.
     */
    getStyleModification(): Record<string, string>;
    /**
     * Finds a component by name.
     *
     * Находит компонент по имени.
     * @param component component name / название компонента
     */
    protected findComponent(component: string): PluginComponentItem | undefined;
    /**
     * Initializes the style modification map.
     *
     * Инициализирует карту модификации стилей.
     */
    protected initStyleModification(): Record<string, string>;
}

/**
 * Class for importing plugins.
 *
 * Класс для импорта плагинов.
 */
export declare class PluginImport {
    protected readonly packageName: string;
    protected code: string;
    /**
     * Constructor
     * @param packageName package name / название пакета
     * @param code file content / содержимое файла
     */
    constructor(packageName: string, code: string);
    /**
     * Returns the file content.
     *
     * Возвращает содержимое файла.
     */
    get(): string;
    /**
     * Returns the style connection code.
     *
     * Возвращает код подключения стиля.
     */
    importStyle(): void;
    /**
     * Creates an import line.
     *
     * Создает строку импорта.
     * @param name file name / имя файла
     */
    protected makeImport(name: string): void;
}

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

/**
 * A class for obtaining data to work with plugins.
 *
 * Класс для получения данных для работы с плагинами.
 */
export declare class PluginTool {
    /**
     * Checks if the id is a user’s file.
     *
     * Проверяет, является ли id файлом пользователя.
     * @param id file identification / идентификация файла
     */
    static isSrc(id: string): boolean;
    /**
     * Checks if the id is a JS user’s file.
     *
     * Проверяет, является ли id файлом JS пользователя.
     * @param id file identification / идентификация файла
     */
    static isJs(id: string): boolean;
    /**
     * Checks if the id is a Vue user’s file.
     *
     * Проверяет, является ли id файлом vue пользователя.
     * @param id file identification / идентификация файла
     */
    static isVue(id: string): boolean;
    /**
     * Checks if the id is a Style user’s file.
     *
     * Проверяет, является ли id файлом style пользователя.
     * @param id file identification / идентификация файла
     */
    static isCss(id: string): boolean;
    /**
     * Checks if it is development mode.
     *
     * Проверяет, является ли режим разработка.
     * @param mode current mode / текущий режим
     */
    static isDev(mode: string): boolean;
}

/**
 * A class for working with files.
 *
 * Класс для работы с файлами.
 */
export declare class PropertiesFile {
    protected static root: string;
    protected static module: boolean;
    /**
     * The fs.existsSync() method is used to synchronously check if a file already
     * exists in the given path or not. It returns a boolean value which indicates
     * the presence of a file.
     *
     * Метод fs.existsSync() используется для синхронной проверки наличия файла в
     * указанном пути. Он возвращает логическое значение, которое указывает на
     * наличие файла.
     * @param path it holds the path of the file that has to be checked /
     * это содержит путь к файлу, который необходимо проверить
     */
    static is(path: PropertiesFilePath): boolean;
    /**
     * Checks whether it is a directory.
     *
     * Проверяет, является ли это директорией.
     * @param path name of the element being checked/ название проверяемого элемента
     */
    static isDir(path: PropertiesFilePath): boolean;
    /**
     * Determines whether the package is connected as a module.
     *
     * Определяет, является ли пакет подключенным как модуль.
     */
    static isModule(): boolean;
    /**
     * The path.joinPath() method joins all given path segments together using the
     * platform-specific separator as a delimiter, then normalizes the resulting path.
     *
     * Метод path.joinPath() объединяет все указанные сегменты пути с использованием
     * специфического для платформы разделителя в качестве разделителя,
     * а затем нормализует полученный путь.
     * @param path a sequence of path segments/ последовательность сегментов пути
     */
    static joinPath(path: PropertiesFilePath): string;
    /**
     * Getting the path to the file by its name and the path to the directory.
     *
     * Получение пути к файлу по его названию и пути к директории.
     * @param path path to the file/ путь к файлу
     * @param name file name/ название файла
     * @param extension file extension by default is json/ расширение файла по умолчанию - json
     */
    static joinPathByName(path: PropertiesFilePath, name: string, extension?: string): string;
    /**
     * Returns the root path.
     *
     * Возвращает корневой путь.
     */
    static getRoot(): string;
    /**
     * Returns the root project path
     *
     * Возвращает корневой путь проекта
     * @param rootProject root project path/ путь к корневому проекту
     * @param maxDepth maximum depth of search for the root project/ максимальная глубина поиска корневого проекта
     */
    static getRootProject(rootProject?: string, maxDepth?: number): string | undefined;
    static getDirname(): string;
    /**
     * Returns the file name.
     *
     * Возвращает имя файла.
     * @param name element name/ название элемента
     * @param extension file extension by default is json/ расширение файла по умолчанию - json
     */
    static getFileName(name: string, extension?: string): string;
    /**
     * Returns the path to the directory, removing the file name from the path.
     *
     * Возвращает путь к директории, убрав название файла из пути.
     * @param path path to the file/ путь к файлу
     */
    static getPathDir(path: PropertiesFilePath): string;
    /**
     * Returns the path to the file.
     *
     * Возвращает путь к файлу.
     * @param path path to the file/ путь к файлу
     * @param name element name/ название элемента
     * @param extension file extension by default is json/ расширение файла по умолчанию - json
     */
    static getPathFile(path: PropertiesFilePath, name: string, extension?: string): string[];
    /**
     * The method splits the path into an array of components.
     *
     * Метод разбивает путь на массив компонентов.
     * @param path path to the directory/ путь к директории
     */
    static splitForDir(path: PropertiesFilePath): string[];
    /**
     * Method returns an object whose properties represent significant elements of the path.
     *
     * Метод возвращает объект, свойства которого представляют существенные элементы пути.
     * @param path filename/ имя файла
     */
    static parse(path: PropertiesFilePath): default_3.ParsedPath;
    /**
     * Returns the directory separator symbol.
     *
     * Возвращает символ разделителя директории.
     */
    static sep(): string;
    /**
     * Getting information about the file.
     *
     * Получение информации о файле.
     * @param path path to the file/ путь к файлу
     */
    static stat(path: PropertiesFilePath): default_4.Stats | undefined;
    /**
     * Returns the time the file was last modified.
     *
     * Возвращает время последнего изменения файла.
     * @param path path to the file/ путь к файлу
     */
    static getTime(path: PropertiesFilePath): string | undefined;
    /**
     * Converts the path to use the current OS separator.
     *
     * Преобразует путь для использования текущего разделителя ОС.
     * @param path path to the directory/ путь к директории
     */
    static toSep(path: string): PropertiesFilePath;
    /**
     * Reads the contents of the directory.
     *
     * Читает содержимое директории.
     * @param path path to the directory/ путь к директории
     */
    static readDir(path: PropertiesFilePath): string[];
    /**
     * Reads the contents of the directory recursively.
     *
     * Читает содержимое директории рекурсивно.
     * @param path path to the directory/ путь к директории
     */
    static readDirRecursive(path: PropertiesFilePath): string[];
    /**
     * Reads the contents of the directory recursively.
     *
     * Читает содержимое директории рекурсивно.
     * @param path path to the directory/ путь к директории
     */
    static readDirRecursiveWithIndex(path: PropertiesFilePath): string[];
    /**
     * Reads only directories recursively.
     *
     * Читает только директории рекурсивно.
     * @param path path to the directory/ путь к директории
     */
    static readDirOnlyRecursive(path: PropertiesFilePath): string[];
    /**
     * Reads the contents of the directory and files recursively.
     *
     * Читает содержимое директории и файлы рекурсивно.
     * @param path path to the directory/ путь к директории
     * @param fullPath full path for recursion/ полный путь для рекурсии
     * @param isIndex whether to include the root directory in the list/ включать ли корневую директорию в список
     */
    static readDirAndFileRecursive(path: PropertiesFilePath, fullPath?: PropertiesFilePath, isIndex?: boolean): string[];
    /**
     * Returns the contents of the path.
     *
     * Возвращает содержимое пути.
     * @param path filename/ имя файла
     */
    static readFile<R>(path: PropertiesFilePath): R | undefined;
    /**
     * Returns the content of the file, without converting the value.
     *
     * Возвращает содержимое файла, без преобразования значения.
     * @param path filename/ имя файла
     */
    static readFileOnly(path: PropertiesFilePath): string | undefined;
    /**
     * Synchronously creates a directory.
     *
     * Синхронно создает директорию.
     * @param path path to the directory/ путь к директории
     */
    static createDir(path: PropertiesFilePath): void;
    /**
     * Writing data to a file.
     *
     * Запись данных в файл.
     * @param path path to the file/ путь к файлу
     * @param name file name/ название файла
     * @param value values for storage/ значения для хранения
     * @param extension file extension by default is ts/ расширение файла по умолчанию - ts
     */
    static write<T extends PropertiesFileValue>(path: PropertiesFilePath, name: string, value: T, extension?: string): void;
    /**
     * Writes to the selected path.
     *
     * Записывает по выбранному пути.
     * @param path path to the file/ путь к файлу
     * @param value values for storage/ значения для хранения
     * @param transform whether to transform the value/ преобразовывать ли значение
     */
    static writeByPath<T extends PropertiesFileValue>(path: PropertiesFilePath, value: T, transform?: boolean): void;
    /**
     * Copy a file from the source path to the destination path.
     *
     * Копирования файла из исходного пути в целевой путь.
     * @param path path to the file/ путь к файлу
     * @param pathsSrc source filename to copy/ исходное имя файла для копирования
     */
    static copy(path: PropertiesFilePath, pathsSrc: PropertiesFilePath): void;
    /**
     * Directory deletion.
     *
     * Удаление директории.
     * @param path path to the directory/ путь к директории
     */
    static removeDir(path: PropertiesFilePath): void;
    /**
     * File deletion.
     *
     * Удаление файла.
     * @param path path to the file/ путь к файлу
     */
    static removeFile(path: PropertiesFilePath): void;
    static rename(path: PropertiesFilePath, newPath: PropertiesFilePath): void;
    /**
     * Changing file permissions.
     *
     * Изменение прав доступа к файлу.
     * @param path path to the file/ путь к файлу
     * @param mode file permissions/ права доступа к файлу
     */
    static chmod(path: PropertiesFilePath, mode?: string | number): void;
    /**
     * Removing root from the path.
     *
     * Удаление root из пути.
     * @param path path to the directory/ путь к директории
     */
    private static removeRootInPath;
}

export declare type PropertiesFilePath = string | string[];

export declare type PropertiesFileValue<T = any> = string | Record<string, T> | Buffer;

export declare enum PropertyCategory {
    /**
     * Indicates that for this branch, paths need to be regenerated /
     * Указывает, что для этой ветви нужно заново формировать пути
     */
    root = "root",
    /**
     * Indicates that this is a class. It will generate a new class /
     * Указывает, что это класс. Будет генерировать новый класс
     */
    class = "class",
    /**
     * Indicates that this is a media type for generating adapted properties /
     * Указывает, что это тип медиа для формирования адаптированных свойств
     */
    media = "media",
    /**
     * Indicates that this is the starting point for generating a class based on the theme /
     * Указывает, что это начальная точка для формирования класса под тему
     */
    theme = "theme",
    /**
     * Indicates that the current property is a palette for generating custom colors /
     * Указывает, что текущее свойство — это палитра для формирования пользовательских цветов
     */
    shade = "shade",
    /**
     * Indicates that this is the starting point for generating classes for the palette /
     * Указывает, что это начальная точка для формирования классов для палитры
     */
    palette = "palette",
    /**
     * Indicates that this branch is not intended for generating the palette /
     * Указывает, что эта ветка не предназначена для формирования палитры
     */
    paletteNone = "palette-none",
    /** Indicates that this property is a color / Указывает, что это свойство является цветом */
    color = "color",
    /**
     * Indicates that this branch is an enumeration of colors /
     * Указывает, что эта ветка представляет собой перечисление цветов
     */
    colors = "colors",
    /**
     * Indicates that this branch represents styles for element variations /
     * Указывает, что эта ветка представляет собой стили для вариаций элемента
     */
    style = "style"
}

export declare type PropertyItem = {
    /**
     * Property value, can be string, number, array or object /
     * Значение свойства, может быть строкой, числом, массивом или объектом
     */
    value: PropertyValue<PropertyItem>;
    /** Optional type description / Опциональное описание типа */
    type?: string;
    /** Optional property description / Опциональное описание свойства */
    description?: string;
    /** Property type, values are taken from `PropertyType` / Тип свойства, значения берутся из `PropertyType` */
    _type?: PropertyType | null;
    /**
     * Category is a property used for explicit grouping of /
     * the property type for selecting the processing mechanism /
     * Категория — это свойство, используемое для явной группировки
     * принадлежности типа свойства для выбора механизма обработки
     */
    _category?: PropertyCategory | string;
    /**
     * Indicates that this is an element variation, and a class for /
     * the variation needs to be generated. It is used as an additional /
     * property to ensure the script generates the variation class along with the subclass /
     * Указывает, что это вариация элемента, и необходимо
     * формировать класс для этой вариации. Используется как дополнительное
     * свойство, чтобы скрипт формировал класс вариации вместе с подклассом
     */
    _state?: boolean;
    /**
     * Indicates that this is a subclass of the element. It is used as an additional /
     * property to ensure the script generates the element's subclass /
     * Указывает, что это подкласс элемента. Используется как дополнительное свойство,
     * чтобы скрипт формировал подкласс элемента
     */
    _subclass?: boolean;
    /**
     * Indicates that this is a custom property. /
     * It is used as an additional property so that the script additionally /
     * generates a custom property /
     * Указывает, что это пользовательское свойство.
     * Используется как дополнительное свойство, чтобы скрипт дополнительно
     * формировал и пользовательское свойство
     */
    _var?: boolean;
    /**
     * Indicates that this property is a component property with the specified name /
     * Указывает, что это свойство является свойством компонента с указанным названием
     */
    _prop?: string | boolean;
    /** Theme property name / Название свойства темы */
    _theme?: string;
    /**
     * Indicates that the property should be renamed to the specified one /
     * Указывает, что необходимо переименовать свойство на указанное
     */
    _rename?: string;
    /**
     * Sets a regular expression for transforming the property's value /
     * Задает регулярное выражение для преобразования значения свойства
     */
    _replace?: string | PropertyReplace;
    /**
     * Default values, if no value is specified in the property /
     * Значения по умолчанию, если в свойстве не указано значение
     */
    _default?: string | number | boolean;
    /** Indicates that the property is a priority / Указывает, что свойство в приоритете */
    _important?: boolean;
    /**
     * Indicates whether to use the standard modification for the property (default: true) /
     * Указывает, нужно ли использовать стандартную модификацию для свойства (по умолчанию: true)
     */
    _modification?: boolean;
    /**
     * Indicates that the branch should be moved to another branch of the tree /
     * Указывает, что необходимо перевести ветку на другую ветку дерева
     */
    _drag?: string;
    /**
     * Additional data for modifying the branch after relocation /
     * Дополнительные данные для модификации ветки после перемещения
     */
    _dragSetting?: string;
    /**
     * Indicates that the element should be cloned along with its additional properties /
     * Указывает, что элемент нужно клонировать вместе с его дополнительными свойствами
     */
    _settingClone?: boolean;
    /**
     * Indicates whether the property name is complete and does not require modification /
     * Указывает, является ли название свойства полным и не требует модификации
     */
    _fullName?: boolean;
    /**
     * Indicates whether the property value is complete and does not require modification /
     * Указывает, является ли значение свойства полным и не требует модификации
     */
    _fullValue?: boolean;
    /**
     * Indicates whether the property value is for styling (default: true) /
     * Указывает, является ли значение свойства стилевым (по умолчанию: true)
     */
    _style?: boolean;
    /**
     * Indicates that the branch is deprecated and needs to be removed /
     * Указывает, что ветка устарела и ее необходимо удалить
     */
    _remove?: boolean;
    /** Internal index identifier / Внутренний идентификатор индекса */
    __i?: string;
    /** Internal name identifier / Внутренний идентификатор имени */
    __n?: string;
    /** Internal name index identifier / Внутренний идентификатор индекса имени */
    __ni?: string;
    /** Internal variable type / Внутренний тип переменной */
    __v?: PropertyType;
    /** Internal CSS identifier / Внутренний идентификатор CSS */
    __c?: string;
    /** Internal CSS color opacity / Внутренняя непрозрачность цвета CSS */
    __cco?: boolean | string;
    /** Internal code or function identifier / Внутренний идентификатор кода или функции */
    __f?: string | string[];
    /** Internal sort identifier / Внутренний идентификатор сортировки */
    __s?: string;
    /** Internal order number / Внутренний номер порядка */
    __o?: number;
    /** Internal main state flag / Внутренний флаг основного состояния */
    __m?: boolean;
    /** Internal duplicate identifier / Внутренний идентификатор дубликата */
    __d?: string;
    /** Internal file path / Внутренний путь к файлу */
    __file?: string;
    /** Internal wrap flag / Внутренний флаг обертки */
    __wrap?: boolean;
};

/** Input type for property data with flexible structure / Входной тип для данных свойств с гибкой структурой */
export declare type PropertyItemInput = Record<string, any> & (PropertyItemPartial | {
    [K in string]: PropertyItemInput;
});

/** Partial version of PropertyItem with optional value / Частичная версия PropertyItem с опциональным значением */
export declare type PropertyItemPartial = Partial<Omit<PropertyItem, 'value'>> & {
    value?: PropertyValue<PropertyItemPartial>;
};

/** Callback function for processing property items / Функция обратного вызова для обработки элементов свойств */
export declare type PropertyItemsCallback<T> = (item: PropertyItemsItem) => T;

/** Complete property item with context and hierarchy / Полный элемент свойства с контекстом и иерархией */
export declare type PropertyItemsItem = {
    /** Design name / Название дизайна */
    design: string;
    /** Component name / Название компонента */
    component?: string;
    /** Property name / Название свойства */
    name: string;
    /** Property index / Индекс свойства */
    index: string;
    /** Property value / Значение свойства */
    value: PropertyItem['value'];
    /** Property item data / Данные элемента свойства */
    item: PropertyItem;
    /** Previous property item / Предыдущий элемент свойства */
    previous?: PropertyItem;
    /** Parent property item / Родительский элемент свойства */
    parent?: PropertyItem;
    /** Array of parent items / Массив родительских элементов */
    parents: PropertyItemsParent[];
};

/** Media queries organized property lists / Организованные по медиа-запросам списки свойств */
export declare type PropertyItemsMedia = Record<string, PropertyList>;

/** Parent property item information / Информация о родительском элементе свойства */
export declare type PropertyItemsParent = {
    /** Property name / Название свойства */
    name: string;
    /** Property item data / Данные элемента свойства */
    item: PropertyItem;
};

declare enum PropertyKey_2 {
    /** Main property value / Основное значение свойства */
    value = "value",
    /** Property type identifier / Идентификатор типа свойства */
    type = "_type",
    /** Property category identifier / Идентификатор категории свойства */
    category = "_category",
    /** State property identifier / Идентификатор свойства состояния */
    state = "_state",
    /** Subclass property identifier / Идентификатор свойства подкласса */
    subclass = "_subclass",
    /** Variable property key / Ключ свойства переменной */
    varKey = "_var",
    /** Component property identifier / Идентификатор свойства компонента */
    prop = "_prop",
    /** Theme property identifier / Идентификатор свойства темы */
    theme = "_theme",
    /** Rename property key / Ключ свойства переименования */
    rename = "_rename",
    /** Replace property key / Ключ свойства замены */
    replace = "_replace",
    /** Default value property key / Ключ свойства значения по умолчанию */
    default = "_default",
    /** Important property key / Ключ свойства важности */
    important = "_important",
    /** Modification property key / Ключ свойства модификации */
    modification = "_modification",
    /** Drag property key / Ключ свойства перетаскивания */
    drag = "_drag",
    /** Drag setting property key / Ключ свойства настройки перетаскивания */
    dragSetting = "_dragSetting",
    /** Setting clone property key / Ключ свойства клонирования настроек */
    settingClone = "_settingClone",
    /** Full name property key / Ключ свойства полного имени */
    fullName = "_fullName",
    /** Full value property key / Ключ свойства полного значения */
    fullValue = "_fullValue",
    /** Style property key / Ключ свойства стиля */
    style = "_style",
    /** Remove property key / Ключ свойства удаления */
    remove = "_remove",
    /** Internal name key / Внутренний ключ имени */
    name = "__n",
    /** Internal name index key / Внутренний ключ индекса имени */
    nameIndex = "__ni",
    /** Internal variable key / Внутренний ключ переменной */
    variable = "__v",
    /** Internal CSS key / Внутренний ключ CSS */
    css = "__c",
    /** Internal CSS color opacity key / Внутренний ключ непрозрачности цвета CSS */
    cssColorOpacity = "__cco",
    /** Internal code key / Внутренний ключ кода */
    code = "__f",
    /** Internal sort key / Внутренний ключ сортировки */
    sort = "__s",
    /** Internal order key / Внутренний ключ порядка */
    order = "__o",
    /** Internal index key / Внутренний ключ индекса */
    index = "__i",
    /** Internal main state key / Внутренний ключ основного состояния */
    stateMain = "__m",
    /** Internal duplicate key / Внутренний ключ дубликата */
    duplicate = "__d",
    /** Internal file key / Внутренний ключ файла */
    file = "__file",
    /** Internal wrap key / Внутренний ключ обертки */
    wrap = "__wrap"
}
export { PropertyKey_2 as PropertyKey }

/** Linked property item with data and properties / Связанный элемент свойства с данными и свойствами */
export declare type PropertyLinkItem = {
    /** Link name / Название ссылки */
    name: string;
    /** Link data / Данные ссылки */
    data: PropertyList;
    /** Link properties / Свойства ссылки */
    properties: PropertyList;
};

/** Record of property items by name / Запись элементов свойств по имени */
export declare type PropertyList = Record<string, PropertyItem>;

/** Property list or flexible input data / Список свойств или гибкие входные данные */
export declare type PropertyListOrData = Record<string, PropertyItemInput>;

/** Palette item with design and values / Элемент палитры с дизайном и значениями */
export declare type PropertyPaletteItem = {
    /** Design name / Название дизайна */
    design: string;
    /** Array of property values / Массив значений свойств */
    value: PropertyItem['value'][];
};

/** List of palette items / Список элементов палитры */
export declare type PropertyPaletteList = PropertyPaletteItem[];

/** Used palette information with name and values / Информация об используемой палитре с именем и значениями */
export declare type PropertyPaletteUsed = {
    /** Palette name / Название палитры */
    name: string;
    /** Array of values / Массив значений */
    value: string[];
};

/** Regular expression replacement configuration / Конфигурация замены регулярным выражением */
export declare type PropertyReplace = {
    /** Regular expression pattern / Шаблон регулярного выражения */
    pattern?: string;
    /** Regular expression flags / Флаги регулярного выражения */
    flags: string;
    /** Replacement string / Строка замены */
    replace: string;
};

export declare enum PropertyType {
    /**
     * Design name, it forms the first group of names /
     * Название дизайна, по нему формируется первая группа названий
     */
    design = "design",
    /**
     * Component name, it forms the second group of names /
     * Название компонента, по нему формируется вторая группа названий
     */
    component = "component",
    /**
     * Class name, it forms the second group of names /
     * Название класса, по нему формируется вторая группа названий
     */
    classType = "class",
    /**
     * Defines a property as a theme for generating classes for the selected theme /
     * Определяет свойство как тему для формирования классов под выбранную тему
     */
    theme = "theme",
    /** Defines a custom property for CSS / Определяет пользовательское свойство для CSS */
    var = "var",
    /** Defines the component's style / Определяет стиль компонента */
    property = "property",
    /**
     * Defines the sub-properties of an element, such as `hover`, `focus`, etc. /
     * Определяет под-свойства элемента, такие как `hover`, `focus` и т. д.
     */
    selector = "selector",
    /**
     * Defines a pseudo-element of an element, such as `::after`, for example /
     * Определяет виртуальный элемент элемента, такие как `::after` например
     */
    virtual = "virtual",
    /**
     * Defines variations of an element, additional states of the element /
     * Определяет вариации элемента, дополнительные состояния элемента
     */
    state = "state",
    /**
     * Defines the subclass name for elements that are inside the main element /
     * Определяет название подкласса у элементов для тех элементов,
     * которые находятся внутри основного элемента
     */
    subclass = "subclass",
    /** Defines media data for adaptation / Определяет медиа-данные для адаптации */
    media = "media",
    /**
     * Defines media data for adapting the maximum width /
     * Определяет медиа-данные для адаптации максимальной ширины
     */
    mediaMax = "media-max",
    /** Defines properties for a media group / Определяет свойства для группы медиа */
    mediaGroup = "media-group",
    /**
     * Defines properties for a media group with a maximum width /
     * Определяет свойства для группы медиа с максимальной шириной
     */
    mediaMaxGroup = "media-max-group",
    /**
     * Defines container properties for responsive layout /
     * Определяет свойства контейнера для адаптивной верстки
     */
    container = "container",
    /**
     * Defines container properties with maximum width constraints /
     * Определяет свойства контейнера с ограничениями максимальной ширины
     */
    containerMax = "container-max",
    /** Defines properties for a container group / Определяет свойства для группы контейнеров */
    containerGroup = "container-group",
    /**
     * Defines properties for a container group with maximum width constraints /
     * Определяет свойства для группы контейнеров с ограничениями максимальной ширины
     */
    containerMaxGroup = "container-max-group",
    /** Defines properties for animation / Определяет свойства для анимации */
    animate = "animate",
    /**
     * Defines properties for a specific frame of the animation /
     * Определяет свойства для определённого кадра анимации
     */
    animateFrame = "animate-frame",
    /**
     * Defines a link to another tree element for merging properties /
     * Определяет ссылку на другой элемент дерева для слияния свойств
     */
    link = "link",
    /**
     * Defines a link to another tree element for forming a class /
     * Определяет ссылку на другой элемент дерева для формирования класса
     */
    linkClass = "link-class",
    /**
     * Defines a property as a variable for generating styles for SCSS /
     * Определяет свойство как переменную для формирования стилей для SCSS
     */
    scss = "scss",
    /**
     * The property is global, all types are re-generated relative to the current property /
     * Свойство является глобальным, все типы формируются заново относительно текущего свойства
     */
    root = "root",
    /**
     * The property is only a mixin. Such properties are not included in styles or anything else /
     * Свойство является лишь миксовым. Такие свойства не включаются в стили или что-то ещё
     */
    mixin = "mixin",
    /**
     * The property is excluded from the generation of any data. /
     * Such properties are ignored and not added to the list /
     * Свойство исключено из формирования каких-либо данных.
     * Такие свойства игнорируются и не добавляются в список
     */
    none = "none",
    /**
     * The property is a link to an external file for merging /
     * Свойство является ссылкой на внешний файл для слияния
     */
    file = "file",
    /**
     * A system property for generating undefined properties. /
     * The behavior of the property is similar to that of `none` /
     * Системное свойство для формирования неопределённых свойств.
     * Поведение свойства аналогично как у `none`
     */
    other = "other"
}

/**
 * Property value type with support for strings, numbers, arrays, objects and null /
 * Тип значения свойства с поддержкой строк, чисел, массивов, объектов и null
 */
export declare type PropertyValue<T> = string | string[] | number | Record<string, T> | null;

/**
 * Wrapped property focus item with value and items /
 * Элемент фокуса обернутого свойства со значением и элементами
 */
export declare type PropertyWrapFocus = {
    /** Focus value / Значение фокуса */
    value: string;
    /** Array of property lists / Массив списков свойств */
    item: PropertyList[];
};

/** Wrapped property item with values and quantity / Обернутый элемент свойства с значениями и количеством */
export declare type PropertyWrapItem = {
    /** Values mapped by keys / Значения сопоставленные по ключам */
    values: Record<string, PropertyList[]>;
    /** Total quantity / Общее количество */
    quantity: number;
};

/** Wrapped property list with properties and quantity / Обернутый список свойств с свойствами и количеством */
export declare type PropertyWrapList = {
    /** Properties mapped by keys / Свойства сопоставленные по ключам */
    properties: Record<string, PropertyWrapItem>;
    /** Total quantity / Общее количество */
    quantity: number;
};

/**
 * Composable to obtain an AI instance based on configuration.
 *
 * Композабл для получения экземпляра AI на основе конфигурации.
 */
export declare function useAi(): AiAbstract | undefined;

export { }
