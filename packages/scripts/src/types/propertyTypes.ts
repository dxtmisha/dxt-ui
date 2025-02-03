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

  /**
   * Category is a property used for explicit grouping of
   * the property type for selecting the processing mechanism
   *
   * Категория — это свойство, используемое для явной группировки
   * принадлежности типа свойства для выбора механизма обработки
   */
  category = '_category',
  theme = '_theme',

  /**
   * Property type, values are taken from `PropertyType`
   *
   * Тип свойства, значения берутся из `PropertyType`
   */
  type = '_type',
  state = '_state',
  subclass = '_subclass',
  rename = '_rename',
  drag = '_drag',
  dragSetting = '_dragSetting',
  prop = '_prop',
  default = '_default',
  replace = '_replace',
  important = '_important',
  varKey = '_var',
  modification = '_modification',
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

  _type?: PropertyType | null
  _state?: boolean
  _subclass?: boolean
  _category?: PropertyCategory | string
  _theme?: string
  _rename?: string
  _drag?: string
  _dragSetting?: string
  _prop?: string | boolean
  _default?: string | number | boolean
  _replace?: string | PropertyReplace
  _important?: boolean
  _var?: boolean
  _modification?: boolean
  _settingClone?: boolean
  _fullName?: boolean
  _fullValue?: boolean
  _style?: boolean
  _remove?: boolean

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
