export enum PropertyType {
  /**
   * Design name, it forms the first group of names
   *
   * Название дизайна, по нему формируется первая группа названий
   */
  design = 'design',

  /**
   * Component name, it forms the second group of names
   *
   * Название компонента, по нему формируется вторая группа названий
   */
  component = 'component',

  /**
   * Class name, it forms the second group of names
   *
   * Название класса, по нему формируется вторая группа названий
   */
  classType = 'class',

  /**
   * Defines a property as a theme for generating classes for the selected theme
   *
   * Определяет свойство как тему для формирования классов под выбранную тему
   */
  theme = 'theme',

  /**
   * Defines a custom property for CSS
   *
   * Определяет пользовательское свойство для CSS
   */
  var = 'var',

  /**
   * Defines the component's style
   *
   * Определяет стиль компонента
   */
  property = 'property',

  /**
   * Defines the sub-properties of an element, such as `hover`, `focus`, etc.
   *
   * Определяет под-свойства элемента, такие как `hover`, `focus` и т. д.
   */
  selector = 'selector',

  /**
   * Defines a pseudo-element of an element, such as `::after`, for example
   *
   * Определяет виртуальный элемент элемента, такие как `::after` например
   */
  virtual = 'virtual',

  /**
   * Defines variations of an element, additional states of the element
   *
   * Определяет вариации элемента, дополнительные состояния элемента
   */
  state = 'state',

  /**
   * Defines the subclass name for elements that are inside the main element
   *
   * Определяет название подкласса у элементов для тех элементов,
   * которые находятся внутри основного элемента
   */
  subclass = 'subclass',

  /**
   * Defines media data for adaptation
   *
   * Определяет медиа-данные для адаптации
   */
  media = 'media',

  /**
   * Defines media data for adapting the maximum width
   *
   * Определяет медиа-данные для адаптации максимальной ширины
   */
  mediaMax = 'media-max',

  /**
   * Defines properties for animation
   *
   * Определяет свойства для анимации
   */
  animate = 'animate',

  /**
   * Defines properties for a specific frame of the animation
   *
   * Определяет свойства для определённого кадра анимации
   */
  animateFrame = 'animate-frame',

  /**
   * Defines a link to another tree element for merging properties
   *
   * Определяет ссылку на другой элемент дерева для слияния свойств
   */
  link = 'link',

  /**
   * Defines a link to another tree element for forming a class
   *
   * Определяет ссылку на другой элемент дерева для формирования класса
   */
  linkClass = 'link-class',

  /**
   * Defines a property as a variable for generating styles for SCSS
   *
   * Определяет свойство как переменную для формирования стилей для SCSS
   */
  scss = 'scss',

  /**
   * The property is global, all types are re-generated relative to the current property
   *
   * Свойство является глобальным, все типы формируются заново относительно текущего свойства
   */
  root = 'root',

  /**
   * The property is only a mixin. Such properties are not included in styles or anything else
   *
   * Свойство является лишь миксовым. Такие свойства не включаются в стили или что-то ещё
   */
  mixin = 'mixin',

  /**
   * The property is excluded from the generation of any data.
   * Such properties are ignored and not added to the list
   *
   * Свойство исключено из формирования каких-либо данных.
   * Такие свойства игнорируются и не добавляются в список
   */
  none = 'none',

  /**
   * The property is a link to an external file for merging
   *
   * Свойство является ссылкой на внешний файл для слияния
   */
  file = 'file',

  /**
   * A system property for generating undefined properties.
   * The behavior of the property is similar to that of `none`
   *
   * Системное свойство для формирования неопределённых свойств.
   * Поведение свойства аналогично как у `none`
   */
  other = 'other'
}

export enum PropertyCategory {
  /**
   * Indicates that for this branch, paths need to be regenerated
   *
   * Указывает, что для этой ветви нужно заново формировать пути
   */
  root = 'root',

  /**
   * Indicates that this is a class. It will generate a new class
   *
   * Указывает, что это класс. Будет генерировать новый класс
   */
  class = 'class',

  /**
   * Indicates that this is a media type for generating adapted properties
   *
   * Указывает, что это тип медиа для формирования адаптированных свойств
   */
  media = 'media',

  /**
   * Indicates that this is the starting point for generating a class based on the theme
   *
   * Указывает, что это начальная точка для формирования класса под тему
   */
  theme = 'theme',

  /**
   * Indicates that the current property is a palette for generating custom colors
   *
   * Указывает, что текущее свойство — это палитра для формирования пользовательских цветов
   */
  shade = 'shade',

  /**
   * Indicates that this is the starting point for generating classes for the palette
   *
   * Указывает, что это начальная точка для формирования классов для палитры
   */
  palette = 'palette',

  /**
   * Indicates that this branch is not intended for generating the palette
   *
   * Указывает, что эта ветка не предназначена для формирования палитры
   */
  paletteNone = 'palette-none',

  /**
   * Indicates that this property is a color
   *
   * Указывает, что это свойство является цветом
   */
  color = 'color',

  /**
   * Indicates that this branch is an enumeration of colors
   *
   * Указывает, что эта ветка представляет собой перечисление цветов
   */
  colors = 'colors',

  /**
   * Indicates that this branch represents styles for element variations
   *
   * Указывает, что эта ветка представляет собой стили для вариаций элемента
   */
  style = 'style'
}

export enum PropertyKey {
  value = 'value',

  type = '_type',
  category = '_category',

  state = '_state',
  subclass = '_subclass',
  varKey = '_var',
  prop = '_prop',
  theme = '_theme',

  rename = '_rename',
  replace = '_replace',
  default = '_default',
  important = '_important',
  modification = '_modification',

  drag = '_drag',
  dragSetting = '_dragSetting',
  settingClone = '_settingClone',

  fullName = '_fullName',
  fullValue = '_fullValue',

  style = '_style',
  remove = '_remove',

  name = '__n',
  nameIndex = '__ni',
  variable = '__v',
  css = '__c',
  cssColorOpacity = '__cco',
  code = '__f',
  sort = '__s',
  order = '__o',
  index = '__i',
  stateMain = '__m',
  duplicate = '__d',
  file = '__file',
  wrap = '__wrap'
}

export type PropertyReplace = {
  pattern?: string
  flags: string
  replace: string
}

export type PropertyValue<T> = string | string[] | number | Record<string, T> | null

export type PropertyItem = {
  value: PropertyValue<PropertyItem>
  type?: string
  description?: string

  /**
   * Property type, values are taken from `PropertyType`
   *
   * Тип свойства, значения берутся из `PropertyType`
   */
  _type?: PropertyType | null

  /**
   * Category is a property used for explicit grouping of
   * the property type for selecting the processing mechanism
   *
   * Категория — это свойство, используемое для явной группировки
   * принадлежности типа свойства для выбора механизма обработки
   */
  _category?: PropertyCategory | string

  /**
   * Indicates that this is an element variation, and a class for
   * the variation needs to be generated. It is used as an additional
   * property to ensure the script generates the variation class along with the subclass
   *
   * Указывает, что это вариация элемента, и необходимо
   * формировать класс для этой вариации. Используется как дополнительное
   * свойство, чтобы скрипт формировал класс вариации вместе с подклассом
   */
  _state?: boolean

  /**
   * Indicates that this is a subclass of the element. It is used as an additional
   * property to ensure the script generates the element's subclass
   *
   * Указывает, что это подкласс элемента. Используется как дополнительное свойство,
   * чтобы скрипт формировал подкласс элемента
   */
  _subclass?: boolean

  /**
   * Indicates that this is a custom property.
   * It is used as an additional property so that the script additionally
   * generates a custom property
   *
   * Указывает, что это пользовательское свойство.
   * Используется как дополнительное свойство, чтобы скрипт дополнительно
   * формировал и пользовательское свойство
   */
  _var?: boolean

  /**
   * Indicates that this property is a component property with the specified name
   *
   * Указывает, что это свойство является свойством компонента с указанным названием
   */
  _prop?: string | boolean

  _theme?: string

  /**
   * Indicates that the property should be renamed to the specified one
   *
   * Указывает, что необходимо переименовать свойство на указанное
   */
  _rename?: string

  /**
   * Sets a regular expression for transforming the property's value
   *
   * Задает регулярное выражение для преобразования значения свойства
   */
  _replace?: string | PropertyReplace

  /**
   * Default values, if no value is specified in the property
   *
   * Значения по умолчанию, если в свойстве не указано значение
   */
  _default?: string | number | boolean

  /**
   * Indicates that the property is a priority
   *
   * Указывает, что свойство в приоритете
   */
  _important?: boolean

  /**
   * Indicates whether to use the standard modification for the property. Default is `true`
   *
   * Указывает, нужно ли использовать стандартную модификацию для свойства. По умолчанию — `true`
   */
  _modification?: boolean

  /**
   * Indicates that the branch should be moved to another branch of the tree
   *
   * Указывает, что необходимо перевести ветку на другую ветку дерева
   */
  _drag?: string

  /**
   * Additional data for modifying the branch after relocation
   *
   * Дополнительные данные для модификации ветки после перемещения
   */
  _dragSetting?: string

  /**
   * Indicates that the element should be cloned along with its additional properties
   *
   * Указывает, что элемент нужно клонировать вместе с его дополнительными свойствами
   */
  _settingClone?: boolean

  /**
   * Indicates whether the property name is complete and does not require modification
   *
   * Указывает, является ли название свойства полным и не требует модификации
   */
  _fullName?: boolean

  /**
   * Indicates whether the property value is complete and does not require modification
   *
   * Указывает, является ли значение свойства полным и не требует модификации
   */
  _fullValue?: boolean

  /**
   * Indicates whether the property value is for styling. Default is `true`
   *
   * Указывает, является ли значение свойства стилевым. По умолчанию — `true`
   */
  _style?: boolean

  /**
   * Indicates that the branch is deprecated and needs to be removed
   *
   * Указывает, что ветка устарела и ее необходимо удалить
   */
  _remove?: boolean

  // Далее идет техническое свойство для скриптов
  __i?: string
  __n?: string
  __ni?: string
  __v?: PropertyType
  __c?: string
  __cco?: boolean | string
  __f?: string | string[]
  __s?: string
  __o?: number
  __m?: boolean
  __d?: string
  __file?: string
  __wrap?: boolean
}

export type PropertyItemPartial = Partial<Omit<PropertyItem, 'value'>> & {
  value?: PropertyValue<PropertyItemPartial>
}
export type PropertyItemInput = Record<string, any> & (PropertyItemPartial | {
  [K in string]: PropertyItemInput
})

export type PropertyList = Record<string, PropertyItem>
export type PropertyListOrData = Record<string, PropertyItemInput>

export const PROPERTY_CACHE_FILE = 'properties'
