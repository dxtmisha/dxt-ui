import { Plugin as Plugin_3 } from 'vite';
import { TransformResult } from 'rollup';

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
 * Class for storing plugin data.
 *
 * Класс для хранения данных плагина.
 */
declare class PluginData {
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

declare enum PropertyCategory {
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

declare type PropertyItem = {
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

/** Regular expression replacement configuration / Конфигурация замены регулярным выражением */
declare type PropertyReplace = {
    /** Regular expression pattern / Шаблон регулярного выражения */
    pattern?: string;
    /** Regular expression flags / Флаги регулярного выражения */
    flags: string;
    /** Replacement string / Строка замены */
    replace: string;
};

declare enum PropertyType {
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
declare type PropertyValue<T> = string | string[] | number | Record<string, T> | null;

export { }
