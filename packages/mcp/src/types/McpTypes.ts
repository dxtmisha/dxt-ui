import type { ServerOptions } from '@modelcontextprotocol/sdk/server/index'
import type { ServerCapabilities } from '@modelcontextprotocol/sdk/types'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'
import type { McpResourceAbstract } from '../classes/McpResourceAbstract'

/** Tool input JSON schema structure / Структура JSON-схемы входных параметров инструмента */
export interface McpToolInputSchema {
  /** Schema type / Тип схемы */
  type?: string
  /** Schema properties / Свойства схемы */
  properties?: Record<string, unknown>
  /** Required fields / Обязательные поля */
  required?: string[]
  [key: string]: unknown
}

/** Tool handler callback signature / Сигнатура функции-обработчика инструмента */
export type McpToolHandler = (
  args: Record<string, any>,
  extra?: unknown
) => Promise<unknown> | unknown

/** Interface for MCP tool definition / Интерфейс определения инструмента MCP */
export interface McpToolItem {
  /** Tool name / Имя инструмента */
  name: string
  /** Tool description / Описание инструмента */
  description?: string
  /** Input schema for arguments / Схема входных параметров */
  inputSchema?: McpToolInputSchema
  /** Handler callback for tool execution / Обработчик выполнения инструмента */
  handler: McpToolHandler
}

/** Resource content representation / Представление содержимого ресурса */
export interface McpResourceContent {
  /** Resource URI / URI ресурса */
  uri: string
  /** MIME type / MIME-тип */
  mimeType?: string
  /** Text content / Текстовое содержимое */
  text?: string
  /** Binary content as base64 string / Бинарное содержимое в виде base64 строки */
  blob?: string
  /** Additional metadata / Дополнительные метаданные */
  _meta?: Record<string, unknown>
}

/** Resource read result structure / Структура результата чтения ресурса */
export interface McpResourceResult {
  /** List of resource contents / Список содержимого ресурсов */
  contents: McpResourceContent[]
  /** Additional metadata / Дополнительные метаданные */
  _meta?: Record<string, unknown>
}

/** Resource read handler callback signature / Сигнатура функции-обработчика чтения ресурса */
export type McpResourceHandler = (
  uri: URL,
  extra?: unknown
) => Promise<McpResourceResult | McpResourceContent | McpResourceContent[] | string> | McpResourceResult | McpResourceContent | McpResourceContent[] | string

/** Interface for raw JSON MCP resource record / Интерфейс сырой записи ресурса MCP из JSON */
export interface McpResourceRecord {
  /** Resource URI / URI ресурса */
  uri: string
  /** Resource name / Имя ресурса */
  name: string
  /** Resource MIME type / MIME-тип ресурса */
  mimeType?: string
  /** Resource description / Описание ресурса */
  description?: string
  /** Static text content / Статическое текстовое содержимое */
  text?: string
  /** Static binary content as base64 string / Статическое бинарное содержимое в виде base64 строки */
  blob?: string
}

/** Interface for MCP resource definition / Интерфейс определения ресурса MCP */
export interface McpResourceItem {
  /** Resource URI / URI ресурса */
  uri: string
  /** Resource name / Имя ресурса */
  name: string
  /** Resource description / Описание ресурса */
  description?: string
  /** Resource MIME type / MIME-тип ресурса */
  mimeType?: string
  /** Static text content / Статическое текстовое содержимое */
  text?: string
  /** Static binary content as base64 string / Статическое бинарное содержимое в виде base64 строки */
  blob?: string
  /** Handler callback for reading resource / Обработчик чтения ресурса */
  handler?: McpResourceHandler
  /** Additional metadata / Дополнительные метаданные */
  _meta?: Record<string, unknown>
}

/** Interface for MCP resource class options / Интерфейс настроек класса ресурса MCP */
export interface McpResourceOptions {
  /** Custom resource content loader / Пользовательский загрузчик содержимого ресурса */
  loader?: (
    resource: McpResourceItem,
    uri: URL,
    extra?: unknown
  ) => Promise<McpResourceResult | McpResourceContent | McpResourceContent[] | string> | McpResourceResult | McpResourceContent | McpResourceContent[] | string
}

/** Interface for MCP server creation options / Интерфейс настроек создания MCP сервера */
export interface McpServerOptions {
  /** Server name / Имя сервера */
  name?: string
  /** Server version / Версия сервера */
  version?: string
  /** Server capabilities / Возможности сервера */
  capabilities?: ServerCapabilities
  /** SDK Server options / Дополнительные опции сервера SDK */
  options?: ServerOptions
  /** Transport instance for communication / Транспорт для взаимодействия */
  transport?: Transport
  /** List of initial resources / Список начальных ресурсов */
  resources?: (McpResourceItem | McpResourceAbstract)[]
}

