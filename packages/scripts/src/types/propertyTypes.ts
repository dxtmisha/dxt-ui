export enum PropertyType {
  /**
   * Design name, it forms the first group of names /
   * Название дизайна, по нему формируется первая группа названий
   */
  design = 'design',

  /**
   * Component name, it forms the second group of names /
   * Название компонента, по нему формируется вторая группа названий
   */
  component = 'component',

  /**
   * Class name, it forms the second group of names /
   * Название класса, по нему формируется вторая группа названий
   */
  classType = 'class',

  /**
   * Defines a property as a theme for generating classes for the selected theme /
   * Определяет свойство как тему для формирования классов под выбранную тему
   */
  theme = 'theme',

  /** Defines a custom property for CSS / Определяет пользовательское свойство для CSS */
  var = 'var',

  /** Defines the component's style / Определяет стиль компонента */
  property = 'property',

  /**
   * Defines the sub-properties of an element, such as `hover`, `focus`, etc. /
   * Определяет под-свойства элемента, такие как `hover`, `focus` и т. д.
   */
  selector = 'selector',

  /**
   * Defines a pseudo-element of an element, such as `::after`, for example /
   * Определяет виртуальный элемент элемента, такие как `::after` например
   */
  virtual = 'virtual',

  /**
   * Defines variations of an element, additional states of the element /
   * Определяет вариации элемента, дополнительные состояния элемента
   */
  state = 'state',

  /**
   * Defines the subclass name for elements that are inside the main element /
   * Определяет название подкласса у элементов для тех элементов,
   * которые находятся внутри основного элемента
   */
  subclass = 'subclass',

  /** Defines media data for adaptation / Определяет медиа-данные для адаптации */
  media = 'media',

  /**
   * Defines media data for adapting the maximum width /
   * Определяет медиа-данные для адаптации максимальной ширины
   */
  mediaMax = 'media-max',

  /** Defines properties for a media group / Определяет свойства для группы медиа */
  mediaGroup = 'media-group',

  /**
   * Defines properties for a media group with a maximum width /
   * Определяет свойства для группы медиа с максимальной шириной
   */
  mediaMaxGroup = 'media-max-group',

  /**
   * Defines container properties for responsive layout /
   * Определяет свойства контейнера для адаптивной верстки
   */
  container = 'container',

  /**
   * Defines container properties with maximum width constraints /
   * Определяет свойства контейнера с ограничениями максимальной ширины
   */
  containerMax = 'container-max',

  /** Defines properties for a container group / Определяет свойства для группы контейнеров */
  containerGroup = 'container-group',

  /**
   * Defines properties for a container group with maximum width constraints /
   * Определяет свойства для группы контейнеров с ограничениями максимальной ширины
   */
  containerMaxGroup = 'container-max-group',

  /** Defines properties for animation / Определяет свойства для анимации */
  animate = 'animate',

  /**
   * Defines properties for a specific frame of the animation /
   * Определяет свойства для определённого кадра анимации
   */
  animateFrame = 'animate-frame',

  /**
   * Defines a link to another tree element for merging properties /
   * Определяет ссылку на другой элемент дерева для слияния свойств
   */
  link = 'link',

  /**
   * Defines a link to another tree element for forming a class /
   * Определяет ссылку на другой элемент дерева для формирования класса
   */
  linkClass = 'link-class',

  /**
   * Defines a property as a variable for generating styles for SCSS /
   * Определяет свойство как переменную для формирования стилей для SCSS
   */
  scss = 'scss',

  /**
   * The property is global, all types are re-generated relative to the current property /
   * Свойство является глобальным, все типы формируются заново относительно текущего свойства
   */
  root = 'root',

  /**
   * The property is only a mixin. Such properties are not included in styles or anything else /
   * Свойство является лишь миксовым. Такие свойства не включаются в стили или что-то ещё
   */
  mixin = 'mixin',

  /**
   * The property is excluded from the generation of any data. /
   * Such properties are ignored and not added to the list /
   * Свойство исключено из формирования каких-либо данных.
   * Такие свойства игнорируются и не добавляются в список
   */
  none = 'none',

  /**
   * The property is a link to an external file for merging /
   * Свойство является ссылкой на внешний файл для слияния
   */
  file = 'file',

  /**
   * A system property for generating undefined properties. /
   * The behavior of the property is similar to that of `none` /
   * Системное свойство для формирования неопределённых свойств.
   * Поведение свойства аналогично как у `none`
   */
  other = 'other'
}

export enum PropertyCategory {
  /**
   * Indicates that for this branch, paths need to be regenerated /
   * Указывает, что для этой ветви нужно заново формировать пути
   */
  root = 'root',

  /**
   * Indicates that this is a class. It will generate a new class /
   * Указывает, что это класс. Будет генерировать новый класс
   */
  class = 'class',

  /**
   * Indicates that this is a media type for generating adapted properties /
   * Указывает, что это тип медиа для формирования адаптированных свойств
   */
  media = 'media',

  /**
   * Indicates that this is the starting point for generating a class based on the theme /
   * Указывает, что это начальная точка для формирования класса под тему
   */
  theme = 'theme',

  /**
   * Indicates that the current property is a palette for generating custom colors /
   * Указывает, что текущее свойство — это палитра для формирования пользовательских цветов
   */
  shade = 'shade',

  /**
   * Indicates that this is the starting point for generating classes for the palette /
   * Указывает, что это начальная точка для формирования классов для палитры
   */
  palette = 'palette',

  /**
   * Indicates that this branch is not intended for generating the palette /
   * Указывает, что эта ветка не предназначена для формирования палитры
   */
  paletteNone = 'palette-none',

  /** Indicates that this property is a color / Указывает, что это свойство является цветом */
  color = 'color',

  /**
   * Indicates that this branch is an enumeration of colors /
   * Указывает, что эта ветка представляет собой перечисление цветов
   */
  colors = 'colors',

  /**
   * Indicates that this branch represents styles for element variations /
   * Указывает, что эта ветка представляет собой стили для вариаций элемента
   */
  style = 'style'
}

export enum PropertyKey {
  /** Main property value / Основное значение свойства */
  value = 'value',

  /** Property type identifier / Идентификатор типа свойства */
  type = '_type',
  /** Property category identifier / Идентификатор категории свойства */
  category = '_category',

  /** State property identifier / Идентификатор свойства состояния */
  state = '_state',
  /** Subclass property identifier / Идентификатор свойства подкласса */
  subclass = '_subclass',
  /** Variable property key / Ключ свойства переменной */
  varKey = '_var',
  /** Component property identifier / Идентификатор свойства компонента */
  prop = '_prop',
  /** Theme property identifier / Идентификатор свойства темы */
  theme = '_theme',

  /** Rename property key / Ключ свойства переименования */
  rename = '_rename',
  /** Replace property key / Ключ свойства замены */
  replace = '_replace',
  /** Default value property key / Ключ свойства значения по умолчанию */
  default = '_default',
  /** Important property key / Ключ свойства важности */
  important = '_important',
  /** Modification property key / Ключ свойства модификации */
  modification = '_modification',

  /** Drag property key / Ключ свойства перетаскивания */
  drag = '_drag',
  /** Drag setting property key / Ключ свойства настройки перетаскивания */
  dragSetting = '_dragSetting',
  /** Setting clone property key / Ключ свойства клонирования настроек */
  settingClone = '_settingClone',

  /** Full name property key / Ключ свойства полного имени */
  fullName = '_fullName',
  /** Full value property key / Ключ свойства полного значения */
  fullValue = '_fullValue',

  /** Style property key / Ключ свойства стиля */
  style = '_style',
  /** Remove property key / Ключ свойства удаления */
  remove = '_remove',

  /** Internal name key / Внутренний ключ имени */
  name = '__n',
  /** Internal name index key / Внутренний ключ индекса имени */
  nameIndex = '__ni',
  /** Internal variable key / Внутренний ключ переменной */
  variable = '__v',
  /** Internal CSS key / Внутренний ключ CSS */
  css = '__c',
  /** Internal CSS color opacity key / Внутренний ключ непрозрачности цвета CSS */
  cssColorOpacity = '__cco',
  /** Internal code key / Внутренний ключ кода */
  code = '__f',
  /** Internal sort key / Внутренний ключ сортировки */
  sort = '__s',
  /** Internal order key / Внутренний ключ порядка */
  order = '__o',
  /** Internal index key / Внутренний ключ индекса */
  index = '__i',
  /** Internal main state key / Внутренний ключ основного состояния */
  stateMain = '__m',
  /** Internal duplicate key / Внутренний ключ дубликата */
  duplicate = '__d',
  /** Internal file key / Внутренний ключ файла */
  file = '__file',
  /** Internal wrap key / Внутренний ключ обертки */
  wrap = '__wrap'
}

/** Regular expression replacement configuration / Конфигурация замены регулярным выражением */
export type PropertyReplace = {
  /** Regular expression pattern / Шаблон регулярного выражения */
  pattern?: string
  /** Regular expression flags / Флаги регулярного выражения */
  flags: string
  /** Replacement string / Строка замены */
  replace: string
}

/**
 * Property value type with support for strings, numbers, arrays, objects and null /
 * Тип значения свойства с поддержкой строк, чисел, массивов, объектов и null
 */
export type PropertyValue<T> = string | string[] | number | Record<string, T> | null

export type PropertyItem = {
  /**
   * Property value, can be string, number, array or object /
   * Значение свойства, может быть строкой, числом, массивом или объектом
   */
  value: PropertyValue<PropertyItem>

  /** Optional type description / Опциональное описание типа */
  type?: string

  /** Optional property description / Опциональное описание свойства */
  description?: string

  /** Property type, values are taken from `PropertyType` / Тип свойства, значения берутся из `PropertyType` */
  _type?: PropertyType | null

  /**
   * Category is a property used for explicit grouping of /
   * the property type for selecting the processing mechanism /
   * Категория — это свойство, используемое для явной группировки
   * принадлежности типа свойства для выбора механизма обработки
   */
  _category?: PropertyCategory | string

  /**
   * Indicates that this is an element variation, and a class for /
   * the variation needs to be generated. It is used as an additional /
   * property to ensure the script generates the variation class along with the subclass /
   * Указывает, что это вариация элемента, и необходимо
   * формировать класс для этой вариации. Используется как дополнительное
   * свойство, чтобы скрипт формировал класс вариации вместе с подклассом
   */
  _state?: boolean

  /**
   * Indicates that this is a subclass of the element. It is used as an additional /
   * property to ensure the script generates the element's subclass /
   * Указывает, что это подкласс элемента. Используется как дополнительное свойство,
   * чтобы скрипт формировал подкласс элемента
   */
  _subclass?: boolean

  /**
   * Indicates that this is a custom property. /
   * It is used as an additional property so that the script additionally /
   * generates a custom property /
   * Указывает, что это пользовательское свойство.
   * Используется как дополнительное свойство, чтобы скрипт дополнительно
   * формировал и пользовательское свойство
   */
  _var?: boolean

  /**
   * Indicates that this property is a component property with the specified name /
   * Указывает, что это свойство является свойством компонента с указанным названием
   */
  _prop?: string | boolean

  /** Theme property name / Название свойства темы */
  _theme?: string

  /**
   * Indicates that the property should be renamed to the specified one /
   * Указывает, что необходимо переименовать свойство на указанное
   */
  _rename?: string

  /**
   * Sets a regular expression for transforming the property's value /
   * Задает регулярное выражение для преобразования значения свойства
   */
  _replace?: string | PropertyReplace

  /**
   * Default values, if no value is specified in the property /
   * Значения по умолчанию, если в свойстве не указано значение
   */
  _default?: string | number | boolean

  /** Indicates that the property is a priority / Указывает, что свойство в приоритете */
  _important?: boolean

  /**
   * Indicates whether to use the standard modification for the property (default: true) /
   * Указывает, нужно ли использовать стандартную модификацию для свойства (по умолчанию: true)
   */
  _modification?: boolean

  /**
   * Indicates that the branch should be moved to another branch of the tree /
   * Указывает, что необходимо перевести ветку на другую ветку дерева
   */
  _drag?: string

  /**
   * Additional data for modifying the branch after relocation /
   * Дополнительные данные для модификации ветки после перемещения
   */
  _dragSetting?: string

  /**
   * Indicates that the element should be cloned along with its additional properties /
   * Указывает, что элемент нужно клонировать вместе с его дополнительными свойствами
   */
  _settingClone?: boolean

  /**
   * Indicates whether the property name is complete and does not require modification /
   * Указывает, является ли название свойства полным и не требует модификации
   */
  _fullName?: boolean

  /**
   * Indicates whether the property value is complete and does not require modification /
   * Указывает, является ли значение свойства полным и не требует модификации
   */
  _fullValue?: boolean

  /**
   * Indicates whether the property value is for styling (default: true) /
   * Указывает, является ли значение свойства стилевым (по умолчанию: true)
   */
  _style?: boolean

  /**
   * Indicates that the branch is deprecated and needs to be removed /
   * Указывает, что ветка устарела и ее необходимо удалить
   */
  _remove?: boolean

  // Технические свойства для скриптов
  /** Internal index identifier / Внутренний идентификатор индекса */
  __i?: string

  /** Internal name identifier / Внутренний идентификатор имени */
  __n?: string

  /** Internal name index identifier / Внутренний идентификатор индекса имени */
  __ni?: string

  /** Internal variable type / Внутренний тип переменной */
  __v?: PropertyType

  /** Internal CSS identifier / Внутренний идентификатор CSS */
  __c?: string

  /** Internal CSS color opacity / Внутренняя непрозрачность цвета CSS */
  __cco?: boolean | string

  /** Internal code or function identifier / Внутренний идентификатор кода или функции */
  __f?: string | string[]

  /** Internal sort identifier / Внутренний идентификатор сортировки */
  __s?: string

  /** Internal order number / Внутренний номер порядка */
  __o?: number

  /** Internal main state flag / Внутренний флаг основного состояния */
  __m?: boolean

  /** Internal duplicate identifier / Внутренний идентификатор дубликата */
  __d?: string

  /** Internal file path / Внутренний путь к файлу */
  __file?: string

  /** Internal wrap flag / Внутренний флаг обертки */
  __wrap?: boolean
}

/** Partial version of PropertyItem with optional value / Частичная версия PropertyItem с опциональным значением */
export type PropertyItemPartial = Partial<Omit<PropertyItem, 'value'>> & {
  value?: PropertyValue<PropertyItemPartial>
}

/** Input type for property data with flexible structure / Входной тип для данных свойств с гибкой структурой */
export type PropertyItemInput = Record<string, any> & (PropertyItemPartial | {
  [K in string]: PropertyItemInput
})

/** Record of property items by name / Запись элементов свойств по имени */
export type PropertyList = Record<string, PropertyItem>

/** Property list or flexible input data / Список свойств или гибкие входные данные */
export type PropertyListOrData = Record<string, PropertyItemInput>

/** Parent property item information / Информация о родительском элементе свойства */
export type PropertyItemsParent = {
  /** Property name / Название свойства */
  name: string
  /** Property item data / Данные элемента свойства */
  item: PropertyItem
}

/** Complete property item with context and hierarchy / Полный элемент свойства с контекстом и иерархией */
export type PropertyItemsItem = {
  /** Design name / Название дизайна */
  design: string
  /** Component name / Название компонента */
  component?: string
  /** Property name / Название свойства */
  name: string
  /** Property index / Индекс свойства */
  index: string
  /** Property value / Значение свойства */
  value: PropertyItem['value']
  /** Property item data / Данные элемента свойства */
  item: PropertyItem
  /** Previous property item / Предыдущий элемент свойства */
  previous?: PropertyItem
  /** Parent property item / Родительский элемент свойства */
  parent?: PropertyItem
  /** Array of parent items / Массив родительских элементов */
  parents: PropertyItemsParent[]
}

/** Callback function for processing property items / Функция обратного вызова для обработки элементов свойств */
export type PropertyItemsCallback<T> = (item: PropertyItemsItem) => T

/** Media queries organized property lists / Организованные по медиа-запросам списки свойств */
export type PropertyItemsMedia = Record<string, PropertyList>

/** Linked property item with data and properties / Связанный элемент свойства с данными и свойствами */
export type PropertyLinkItem = {
  /** Link name / Название ссылки */
  name: string
  /** Link data / Данные ссылки */
  data: PropertyList
  /** Link properties / Свойства ссылки */
  properties: PropertyList
}

/** Palette item with design and values / Элемент палитры с дизайном и значениями */
export type PropertyPaletteItem = {
  /** Design name / Название дизайна */
  design: string
  /** Array of property values / Массив значений свойств */
  value: PropertyItem['value'][]
}

/** List of palette items / Список элементов палитры */
export type PropertyPaletteList = PropertyPaletteItem[]

/** Used palette information with name and values / Информация об используемой палитре с именем и значениями */
export type PropertyPaletteUsed = {
  /** Palette name / Название палитры */
  name: string
  /** Array of values / Массив значений */
  value: string[]
}

/** Wrapped property item with values and quantity / Обернутый элемент свойства с значениями и количеством */
export type PropertyWrapItem = {
  /** Values mapped by keys / Значения сопоставленные по ключам */
  values: Record<string, PropertyList[]>
  /** Total quantity / Общее количество */
  quantity: number
}

/** Wrapped property list with properties and quantity / Обернутый список свойств с свойствами и количеством */
export type PropertyWrapList = {
  /** Properties mapped by keys / Свойства сопоставленные по ключам */
  properties: Record<string, PropertyWrapItem>
  /** Total quantity / Общее количество */
  quantity: number
}

/**
 * Wrapped property focus item with value and items /
 * Элемент фокуса обернутого свойства со значением и элементами
 */
export type PropertyWrapFocus = {
  /** Focus value / Значение фокуса */
  value: string
  /** Array of property lists / Массив списков свойств */
  item: PropertyList[]
}
