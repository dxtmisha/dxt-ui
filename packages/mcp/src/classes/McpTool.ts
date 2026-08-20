import { isArray, isFilled, isObject, isString } from '@dxtmisha/functional-basic'
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js'
import type { ZodRawShapeCompat } from '@modelcontextprotocol/sdk/server/zod-compat.js'
import { McpItemAbstract } from './McpItemAbstract'
import type {
  McpToolItem,
  SdkMcpServer
} from '../types/McpTypes'

/**
 * Class for managing and executing MCP tools.
 *
 * Класс для управления и выполнения инструментов MCP.
 */
export class McpTool extends McpItemAbstract<
  McpToolItem,
  McpToolItem | McpToolItem[] | McpTool
> {
  /**
   * Adds tool items, an array of tool items, or merges another McpTool instance.
   *
   * Добавляет элементы инструментов, массив элементов или объединяет другой экземпляр McpTool.
   * @param tool Tool item, array of items or McpTool instance / Элемент инструмента, массив элементов или экземпляр McpTool
   * @returns current instance / текущий экземпляр
   */
  override add(tool: McpToolItem | McpToolItem[] | McpTool): this {
    if (tool instanceof McpTool) {
      this.addItems(tool.getItems())
    } else if (isArray(tool)) {
      this.addItems(tool)
    } else if (isObject(tool) && isFilled(tool.name)) {
      this.addItem(tool)
    }

    return this
  }

  /**
   * Executes a registered tool by name with arguments and converts result to CallToolResult.
   *
   * Выполняет зарегистрированный инструмент по имени с аргументами и преобразует результат в CallToolResult.
   * @param name Tool name to execute / Имя инструмента для выполнения
   * @param args Tool input arguments / Входные аргументы инструмента
   * @param extra Optional execution context metadata / Опциональные метаданные контекста выполнения
   * @returns formatted tool execution result / отформатированный результат выполнения инструмента
   */
  async execute(
    name: string,
    args: Record<string, unknown> = {},
    extra?: Record<string, unknown>
  ): Promise<CallToolResult> {
    const toolItem = this.getItem(name)

    if (!toolItem) {
      return {
        content: [
          {
            type: 'text',
            text: `Tool "${name}" not found.`
          }
        ],
        isError: true
      }
    }

    try {
      const rawResult = await toolItem.handler(args, extra)
      return this.formatResult(rawResult)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error)

      return {
        content: [
          {
            type: 'text',
            text: errorMessage
          }
        ],
        isError: true
      }
    }
  }

  /**
   * Registers all managed tools into an SDK McpServer instance.
   *
   * Регистрирует все управляемые инструменты в экземпляре SDK McpServer.
   * @param sdkServer SDK McpServer instance / Экземпляр SDK McpServer
   */
  override register(sdkServer: SdkMcpServer): void {
    this.items.forEach(toolItem => {
      const toolDescription = isFilled(toolItem.description) ? toolItem.description : undefined

      if (isFilled(toolItem.inputSchema)) {
        sdkServer.registerTool(
          toolItem.name,
          {
            description: toolDescription,
            inputSchema: toolItem.inputSchema as ZodRawShapeCompat,
            outputSchema: isFilled(toolItem.outputSchema) ? (toolItem.outputSchema as ZodRawShapeCompat) : undefined,
            annotations: toolItem.annotations
          },
          async (args: Record<string, unknown>, extra: unknown) => {
            const rawResult = await toolItem.handler(args || {}, extra as Record<string, unknown>)
            return this.formatResult(rawResult)
          }
        )
      } else {
        sdkServer.registerTool(
          toolItem.name,
          {
            description: toolDescription,
            outputSchema: isFilled(toolItem.outputSchema) ? (toolItem.outputSchema as ZodRawShapeCompat) : undefined,
            annotations: toolItem.annotations
          },
          async (extra: unknown) => {
            const rawResult = await toolItem.handler({}, extra as Record<string, unknown>)
            return this.formatResult(rawResult)
          }
        )
      }
    })
  }

  /**
   * Extracts the unique key from a tool item.
   *
   * Извлекает уникальный ключ из элемента инструмента.
   * @param item Target tool item / Целевой элемент инструмента
   * @returns unique tool name / уникальное имя инструмента
   * @protected
   */
  protected override getKey(item: McpToolItem): string {
    return item.name
  }

  /**
   * Normalizes raw execution result into CallToolResult format.
   *
   * Нормализует сырой результат выполнения в формат CallToolResult.
   * @param result Raw handler output / Сырой результат обработчика
   * @returns standard CallToolResult / стандартный CallToolResult
   * @protected
   */
  protected formatResult(result: unknown): CallToolResult {
    if (isObject(result)) {
      const candidateResult = result as Record<string, unknown>

      if (isArray(candidateResult.content)) {
        return candidateResult as unknown as CallToolResult
      }

      if (isObject(candidateResult.structuredContent)) {
        return candidateResult as unknown as CallToolResult
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(result, null, 2)
          }
        ]
      }
    }

    if (isString(result)) {
      return {
        content: [
          {
            type: 'text',
            text: result
          }
        ]
      }
    }

    return {
      content: [
        {
          type: 'text',
          text: String(result ?? '')
        }
      ]
    }
  }
}
