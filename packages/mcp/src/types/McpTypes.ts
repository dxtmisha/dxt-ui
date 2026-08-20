import type {
  CallToolResult,
  GetPromptResult,
  PromptMessage,
  ReadResourceResult,
  ToolAnnotations
} from '@modelcontextprotocol/sdk/types.js'
import type { ServerOptions } from '@modelcontextprotocol/sdk/server/index.js'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js'
import type { McpServer as SdkMcpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

/** Server metadata and initialization options / Метаданные сервера и параметры инициализации */
export type McpServerOptions = {
  /** Server name / Имя сервера */
  name: string
  /** Server version / Версия сервера */
  version: string
  /** Server description / Описание сервера */
  description?: string
  /** Additional SDK server options / Дополнительные параметры SDK сервера */
  options?: ServerOptions
}

/** Text content item for MCP messages / Текстовый элемент содержимого для сообщений MCP */
export type McpContentText = {
  /** Content type indicator / Индикатор типа содержимого */
  type: 'text'
  /** Text payload / Текстовая полезная нагрузка */
  text: string
}

/** Image content item for MCP messages / Элемент содержимого изображения для сообщений MCP */
export type McpContentImage = {
  /** Content type indicator / Индикатор типа содержимого */
  type: 'image'
  /** Base64 encoded image data / Данные изображения в кодировке base64 */
  data: string
  /** Image MIME type / MIME-тип изображения */
  mimeType: string
}

/** Resource content item for MCP messages / Элемент содержимого ресурса для сообщений MCP */
export type McpContentResource = {
  /** Content type indicator / Индикатор типа содержимого */
  type: 'resource'
  /** Resource content item / Элемент содержимого ресурса */
  resource: McpResourceContents
}

/** Union of all MCP content item types / Объединение всех типов элементов содержимого MCP */
export type McpContentItem = McpContentText | McpContentImage | McpContentResource

/** Standard MCP tool result structure / Стандартная структура результата инструмента MCP */
export type McpToolResult = CallToolResult

/** Tool handler execution function / Функция выполнения обработчика инструмента */
export type McpToolHandler<TArgs = Record<string, unknown>, TResult = unknown> = (
  args: TArgs,
  extra?: Record<string, unknown>
) => Promise<TResult> | TResult

/** Tool definition item / Определение элемента инструмента */
export type McpToolItem<TArgs = Record<string, unknown>, TResult = unknown> = {
  /** Unique tool name / Уникальное имя инструмента */
  name: string
  /** Tool description / Описание инструмента */
  description?: string
  /** Tool input schema definition (Zod schema or shape) / Определение схемы входных параметров инструмента (схема Zod или форма) */
  inputSchema?: unknown
  /** Tool output schema definition / Определение схемы выходных параметров инструмента */
  outputSchema?: unknown
  /** Tool annotations / Аннотации инструмента */
  annotations?: ToolAnnotations
  /** Execution handler callback / Функция обратного вызова обработчика выполнения */
  handler: McpToolHandler<TArgs, TResult>
}

/** Array of tool items / Массив элементов инструментов */
export type McpToolList = McpToolItem[]

/** Resource contents item payload / Полезная нагрузка содержимого ресурса */
export type McpResourceContents = {
  /** Resource URI / URI ресурса */
  uri: string
  /** Resource MIME type / MIME-тип ресурса */
  mimeType?: string
  /** Text content / Текстовое содержимое */
  text?: string
  /** Base64 binary blob / Бинарный блоб base64 */
  blob?: string
}

/** Standard MCP resource read result / Стандартный результат чтения ресурса MCP */
export type McpResourceResult = ReadResourceResult

/** Handler callback for dynamic resource reading / Функция обратного вызова для динамического чтения ресурса */
export type McpResourceReadHandler = (
  uri: URL,
  extra?: Record<string, unknown>
) => Promise<McpResourceResult | McpResourceContents | string | Record<string, unknown>> | McpResourceResult | McpResourceContents | string | Record<string, unknown>

/** Resource item definition / Определение элемента ресурса */
export type McpResourceItem = {
  /** Unique resource URI / Уникальный URI ресурса */
  uri: string
  /** Resource display name / Отображаемое имя ресурса */
  name: string
  /** Resource description / Описание ресурса */
  description?: string
  /** Resource MIME type / MIME-тип ресурса */
  mimeType?: string
  /** Static text content / Статическое текстовое содержимое */
  text?: string
  /** Static binary blob / Статический бинарный блоб */
  blob?: string
  /** Dynamic resource read handler / Обработчик динамического чтения ресурса */
  handler?: McpResourceReadHandler
}

/** Array of resource items / Массив элементов ресурсов */
export type McpResourceList = McpResourceItem[]

/** Polymorphic input for resources initialization / Полиморфный вход для инициализации ресурсов */
export type McpResourceInput =
  | McpResourceItem
  | McpResourceItem[]
  | Record<string, unknown>
  | Record<string, unknown>[]

/** Prompt argument descriptor / Дескриптор аргумента промпта */
export type McpPromptArgument = {
  /** Argument name / Имя аргумента */
  name: string
  /** Argument description / Описание аргумента */
  description?: string
  /** Whether the argument is required / Обязателен ли аргумент */
  required?: boolean
}

/** Prompt message item / Элемент сообщения промпта */
export type McpPromptMessage = PromptMessage

/** Standard MCP prompt result structure / Стандартная структура результата промпта MCP */
export type McpPromptResult = GetPromptResult

/** Handler callback for generating prompt content / Функция обратного вызова для генерации содержимого промпта */
export type McpPromptHandler = (
  args: Record<string, unknown>,
  extra?: Record<string, unknown>
) => Promise<unknown> | unknown

/** Prompt item definition / Определение элемента промпта */
export type McpPromptItem = {
  /** Unique prompt name / Уникальное имя промпта */
  name: string
  /** Prompt description / Описание промпта */
  description?: string
  /** Prompt arguments metadata list / Список метаданных аргументов промпта */
  arguments?: McpPromptArgument[]
  /** Schema for prompt arguments / Схема для аргументов промпта */
  argsSchema?: unknown
  /** Handler callback for prompt generation / Функция обратного вызова для генерации промпта */
  handler: McpPromptHandler
}

/** Array of prompt items / Массив элементов промптов */
export type McpPromptList = McpPromptItem[]

/** Re-export of Transport and SDK server types / Реэкспорт типов Transport и SDK сервера */
export type { Transport, SdkMcpServer, ServerOptions, PromptMessage }
