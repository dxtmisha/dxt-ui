import type { ServerOptions } from '@modelcontextprotocol/sdk/server/index'
import type { ServerCapabilities } from '@modelcontextprotocol/sdk/types'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'

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
}
