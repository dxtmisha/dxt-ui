/** Figma REST API endpoints/ Эндпоинты Figma REST API */
export enum FigmaApiEndpoint {
  /** Get file content / Получить содержимое файла */
  files = 'files/:file_key',
  /** Get specific nodes from a file / Получить конкретные узлы из файла */
  fileNodes = 'files/:file_key/nodes',
  /** Get specific images from a file / Получить конкретные изображения из файла */
  fileImages = 'images/:file_key',
  /** Get image fills from a file / Получить заливки изображений из файла */
  fileImageFills = 'files/:file_key/images',
  /** Get file versions / Получить версии файла */
  fileVersions = 'files/:file_key/versions',
  /** Get file comments / Получить комментарии файла */
  fileComments = 'files/:file_key/comments',
  /** Get user information / Получить информацию о пользователе */
  me = 'me',
  /** Get team projects / Получить проекты команды */
  teamProjects = 'teams/:team_id/projects',
  /** Get project files / Получить файлы проекта */
  projectFiles = 'projects/:project_id/files',
  /** Get component information / Получить информацию о компоненте */
  components = 'components/:key',
  /** Get file components / Получить компоненты файла */
  fileComponents = 'files/:file_key/components',
  /** Get team components / Получить компоненты команды */
  teamComponents = 'teams/:team_id/components',
  /** Get component set information / Получить информацию о наборе компонентов */
  componentSets = 'component_sets/:key',
  /** Get file component sets / Получить наборы компонентов файла */
  fileComponentSets = 'files/:file_key/component_sets',
  /** Get team component sets / Получить наборы компонентов команды */
  teamComponentSets = 'teams/:team_id/component_sets',
  /** Get style information / Получить информацию о стиле */
  styles = 'styles/:key',
  /** Get file styles / Получить стили файла */
  fileStyles = 'files/:file_key/styles',
  /** Get team styles / Получить стили команды */
  teamStyles = 'teams/:team_id/styles'
}

/**
 * Parameters for the files endpoint.
 *
 * Параметры для эндпоинта files.
 */
export type FigmaFilesParams = {
  /** A specific version ID to get / Идентификатор конкретной версии для получения */
  version?: string

  /** Comma separated list of nodes that you care about in the document / Список узлов через запятую, которые вас интересуют в документе */
  ids?: string

  /** How deep into the document tree to traverse / Насколько глубоко по дереву документа нужно пройтись */
  depth?: number

  /** Set to "paths" to export vector data / Установите "paths" для экспорта векторных данных */
  geometry?: 'paths'

  /** A comma separated list of plugin IDs to include their data / Список ID плагинов через запятую для включения их данных */
  plugin_data?: string

  /**
   * Returns branch metadata for the requested file /
   * Возвращает метаданные ветки для запрошенного файла
   * @default false
   */
  branch_data?: boolean
}

/**
 * Result returned by the files endpoint.
 *
 * Результат, возвращаемый эндпоинтом files.
 */
export type FigmaFilesResult = {
  /** File name / Название файла */
  name: string
  /** User's role in the file / Роль пользователя в файле */
  role: string
  /** Last modified date / Дата последнего изменения */
  lastModified: string
  /** Editor type (figma or figjam) / Тип редактора (figma или figjam) */
  editorType: string
  /** URL to the file thumbnail / URL миниатюры файла */
  thumbnailUrl: string
  /** Version ID / Идентификатор версии */
  version: string
  /** The root node of the document / Корневой узел документа */
  document: any
  /** Map of components used in the file / Карта компонентов, используемых в файле */
  components: Record<string, any>
  /** Map of component sets used in the file / Карта наборов компонентов, используемых в файле */
  componentSets: Record<string, any>
  /** Schema version / Версия схемы */
  schemaVersion: number
  /** Map of styles used in the file / Карта стилей, используемых в файле */
  styles: Record<string, any>
  /** Main file key if this is a branch / Ключ основного файла, если это ветка */
  mainFileKey?: string
  /** List of branches for the file / Список веток для файла */
  branches?: {
    /** Branch key / Ключ ветки */
    key: string
    /** Branch name / Название ветки */
    name: string
    /** URL to the branch thumbnail / URL миниатюры ветки */
    thumbnail_url: string
    /** Last modified date of the branch / Дата последнего изменения ветки */
    last_modified: string
    /** Link access level / Уровень доступа по ссылке */
    link_access: string
  }[]
}

/**
 * Parameters for the fileNodes endpoint.
 *
 * Параметры для эндпоинта fileNodes.
 */
export type FigmaFileNodesParams = {
  /** A comma separated list of node IDs to retrieve and convert / Список ID узлов через запятую для получения и преобразования */
  ids: string

  /** A specific version ID to get / Идентификатор конкретной версии для получения */
  version?: string

  /** How deep into the node tree to traverse / Насколько глубоко по дереву узлов нужно пройтись */
  depth?: number

  /** Set to "paths" to export vector data / Установите "paths" для экспорта векторных данных */
  geometry?: 'paths'

  /** A comma separated list of plugin IDs to include their data / Список ID плагинов через запятую для включения их данных */
  plugin_data?: string
}

/**
 * Result returned by the fileNodes endpoint.
 *
 * Результат, возвращаемый эндпоинтом fileNodes.
 */
export type FigmaFileNodesResult = {
  /** File name / Название файла */
  name: string
  /** User's role in the file / Роль пользователя в файле */
  role: string
  /** Last modified date / Дата последнего изменения */
  lastModified: string
  /** Editor type (figma or figjam) / Тип редактора (figma или figjam) */
  editorType: string
  /** URL to the file thumbnail / URL миниатюры файла */
  thumbnailUrl: string
  /** Error message if any / Сообщение об ошибке, если есть */
  err?: string
  /** Map of node IDs to node data / Карта ID узлов и данных узлов */
  nodes: Record<string, {
    /** The root node of the requested subtree / Корневой узел запрошенного поддерева */
    document: any
    /** Map of components used in the subtree / Карта компонентов, используемых в поддереве */
    components: Record<string, any>
    /** Map of component sets used in the subtree / Карта наборов компонентов, используемых в поддереве */
    componentSets: Record<string, any>
    /** Schema version / Версия схемы */
    schemaVersion: number
    /** Map of styles used in the subtree / Карта стилей, используемых в поддереве */
    styles: Record<string, any>
  }>
}

/**
 * Parameters for the fileImages endpoint.
 *
 * Параметры для эндпоинта fileImages.
 */
export type FigmaFileImagesParams = {
  /** A comma separated list of node IDs to render / Список ID узлов через запятую для рендеринга */
  ids: string

  /** A number between 0.01 and 4, the image scaling factor / Число от 0.01 до 4, коэффициент масштабирования изображения */
  scale?: number

  /** The image output format, as a string enum / Формат вывода изображения в виде строки enum */
  format?: 'jpg' | 'png' | 'svg' | 'pdf'

  /**
   * Whether text elements are rendered as outlines (vector paths) or as <text> elements in SVGs /
   * Визуализируются ли текстовые элементы как контуры (векторные контуры) или как элементы <text> в SVG
   * @default true
   */
  svg_outline_text?: boolean

  /**
   * Whether to include id attributes for all SVG elements. Adds the layer name to the id attribute of an svg element /
   * Включать ли атрибуты id для всех элементов SVG. Добавляет имя слоя в атрибут id элемента svg
   * @default false
   */
  svg_include_id?: boolean

  /**
   * Whether to include node id attributes for all SVG elements. Adds the node id to a data-node-id attribute of an svg element /
   * Включать ли атрибуты id узла для всех элементов SVG. Добавляет id узла в атрибут data-node-id элемента svg
   * @default false
   */
  svg_include_node_id?: boolean

  /**
   * Whether to simplify inside/outside strokes and use stroke attribute if possible instead of <mask> /
   * Упрощать ли внутренние/внешние обводки и использовать атрибут stroke, если это возможно, вместо <mask>
   * @default true
   */
  svg_simplify_stroke?: boolean

  /**
   * Whether content that overlaps the node should be excluded from rendering /
   * Должен ли контент, перекрывающий узел, быть исключен из рендеринга
   * @default true
   */
  contents_only?: boolean

  /**
   * Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty /
   * Использовать полные размеры узла независимо от того, обрезан он или пространство вокруг него пустое
   * @default false
   */
  use_absolute_bounds?: boolean

  /** A specific version ID to use / Идентификатор конкретной версии для использования */
  version?: string
}

/**
 * Result returned by the fileImages endpoint.
 *
 * Результат, возвращаемый эндпоинтом fileImages.
 */
export type FigmaFileImagesResult = {
  /** Error message if the request failed / Сообщение об ошибке, если запрос не удался */
  err: string | null
  /** A mapping from node IDs to URLs of the rendered images / Сопоставление ID узлов с URL-адресами отрендеренных изображений */
  images: Record<string, string>
  /** Status code of the response / Код статуса ответа */
  status: number
}

/**
 * Result returned by the fileStyles endpoint.
 *
 * Результат, возвращаемый эндпоинтом fileStyles.
 */
export type FigmaFileStylesResult = {
  /** Status code of the response / Код статуса ответа */
  status: number
  /** Whether an error occurred / Произошла ли ошибка */
  error: boolean
  /** Metadata container / Контейнер метаданных */
  meta: {
    /** List of styles in the file / Список стилей в файле */
    styles: {
      /** The unique identifier of the style / Уникальный идентификатор стиля */
      key: string
      /** The key of the file the style lives in / Ключ файла, в котором находится стиль */
      file_key: string
      /** The node ID that corresponds to the style / ID узла, соответствующий стилю */
      node_id: string
      /** The type of style (FILL, TEXT, EFFECT, or GRID) / Тип стиля (FILL, TEXT, EFFECT или GRID) */
      style_type: 'FILL' | 'TEXT' | 'EFFECT' | 'GRID'
      /** URL to a thumbnail image of the style / URL-адрес миниатюры стиля */
      thumbnail_url: string
      /** Name of the style / Название стиля */
      name: string
      /** Description of the style / Описание стиля */
      description: string
      /** Date the style was last updated / Дата последнего обновления стиля */
      updated_at: string
      /** Date the style was created / Дата создания стиля */
      created_at: string
      /** A sortable string for the style's position / Строка для сортировки позиции стиля */
      sort_position: string
      /** The user who created the style / Пользователь, создавший стиль */
      user: {
        /** User's ID / ID пользователя */
        id: string
        /** User's handle / Никнейм пользователя */
        handle: string
        /** URL to the user's avatar / URL-адрес аватара пользователя */
        img_url: string
      }
    }[]
  }
}

/**
 * Result returned by the styles endpoint.
 *
 * Результат, возвращаемый эндпоинтом styles.
 */
export type FigmaStylesResult = {
  /** Status code of the response / Код статуса ответа */
  status: number
  /** Whether an error occurred / Произошла ли ошибка */
  error: boolean
  /** Metadata about the style / Метаданные о стиле */
  meta: {
    /** The unique identifier of the style / Уникальный идентификатор стиля */
    key: string
    /** The key of the file the style lives in / Ключ файла, в котором находится стиль */
    file_key: string
    /** The node ID that corresponds to the style / ID узла, соответствующий стилю */
    node_id: string
    /** The type of style (FILL, TEXT, EFFECT, or GRID) / Тип стиля (FILL, TEXT, EFFECT или GRID) */
    style_type: 'FILL' | 'TEXT' | 'EFFECT' | 'GRID'
    /** URL to a thumbnail image of the style / URL-адрес миниатюры стиля */
    thumbnail_url: string
    /** Name of the style / Название стиля */
    name: string
    /** Description of the style / Описание стиля */
    description: string
    /** Date the style was last updated / Дата последнего обновления стиля */
    updated_at: string
    /** Date the style was created / Дата создания стиля */
    created_at: string
    /** A sortable string for the style's position / Строка для сортировки позиции стиля */
    sort_position: string
    /** The user who created the style / Пользователь, создавший стиль */
    user: {
      /** User's ID / ID пользователя */
      id: string
      /** User's handle / Никнейм пользователя */
      handle: string
      /** URL to the user's avatar / URL-адрес аватара пользователя */
      img_url: string
    }
  }
}

/** Base URL for Figma REST API / Базовый URL для Figma REST API */
export const FIGMA_API_URL: string = 'https://api.figma.com/v1/'
