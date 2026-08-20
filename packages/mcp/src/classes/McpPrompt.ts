import { isArray, isFilled, isObject, isString } from '@dxtmisha/functional-basic'
import type { GetPromptResult, PromptMessage } from '@modelcontextprotocol/sdk/types.js'
import type { ZodRawShapeCompat } from '@modelcontextprotocol/sdk/server/zod-compat.js'
import { McpItemAbstract } from './McpItemAbstract'
import type {
  McpPromptItem,
  SdkMcpServer
} from '../types/McpTypes'

/**
 * Class for managing and executing MCP prompt templates.
 *
 * Класс для управления и выполнения шаблонов промптов MCP.
 */
export class McpPrompt extends McpItemAbstract<
  McpPromptItem,
  McpPromptItem | McpPromptItem[] | McpPrompt
> {
  /**
   * Adds prompt items, an array of items, or merges another McpPrompt instance.
   *
   * Добавляет элементы промптов, массив элементов или объединяет другой экземпляр McpPrompt.
   * @param prompt Prompt item, array of items or McpPrompt instance / Элемент промпта, массив элементов или экземпляр McpPrompt
   * @returns current instance / текущий экземпляр
   */
  override add(prompt: McpPromptItem | McpPromptItem[] | McpPrompt): this {
    if (prompt instanceof McpPrompt) {
      this.addItems(prompt.getItems())
    } else if (isArray(prompt)) {
      this.addItems(prompt)
    } else if (isObject(prompt) && isFilled(prompt.name)) {
      this.addItem(prompt)
    }

    return this
  }

  /**
   * Executes a registered prompt handler and converts result to GetPromptResult.
   *
   * Выполняет обработчик зарегистрированного промпта и преобразует результат в GetPromptResult.
   * @param name Prompt name to execute / Имя промпта для выполнения
   * @param args Prompt template arguments / Аргументы шаблона промпта
   * @param extra Optional execution context metadata / Опциональные метаданные контекста выполнения
   * @returns standard GetPromptResult / стандартный GetPromptResult
   */
  async execute(
    name: string,
    args: Record<string, unknown> = {},
    extra?: Record<string, unknown>
  ): Promise<GetPromptResult> {
    const promptItem = this.getItem(name)

    if (!promptItem) {
      return {
        description: `Prompt "${name}" not found.`,
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: `Prompt "${name}" not found.`
            }
          }
        ]
      }
    }

    try {
      const rawResult = await promptItem.handler(args, extra)
      return this.formatResult(rawResult, promptItem)
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error)

      return {
        description: `Error executing prompt "${name}"`,
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: errorMessage
            }
          }
        ]
      }
    }
  }

  /**
   * Registers all managed prompts into an SDK McpServer instance.
   *
   * Регистрирует все управляемые промпты в экземпляре SDK McpServer.
   * @param sdkServer SDK McpServer instance / Экземпляр SDK McpServer
   */
  override register(sdkServer: SdkMcpServer): void {
    this.items.forEach(promptItem => {
      const promptConfiguration: Record<string, unknown> = {}

      if (isFilled(promptItem.description)) {
        promptConfiguration.description = promptItem.description
      }

      if (isFilled(promptItem.argsSchema)) {
        promptConfiguration.argsSchema = promptItem.argsSchema as ZodRawShapeCompat
      }

      sdkServer.registerPrompt(
        promptItem.name,
        promptConfiguration,
        async (args: Record<string, unknown>, extra: unknown) => {
          return this.execute(promptItem.name, args || {}, extra as Record<string, unknown>)
        }
      )
    })
  }

  /**
   * Extracts the unique key from a prompt item.
   *
   * Извлекает уникальный ключ из элемента промпта.
   * @param item Target prompt item / Целевой элемент промпта
   * @returns unique prompt name / уникальное имя промпта
   * @protected
   */
  protected override getKey(item: McpPromptItem): string {
    return item.name
  }

  /**
   * Normalizes raw handler result into GetPromptResult format.
   *
   * Нормализует сырой результат обработчика в формат GetPromptResult.
   * @param result Raw handler output / Сырой результат обработчика
   * @param promptItem Target prompt definition / Целевое определение промпта
   * @returns standard GetPromptResult / стандартный GetPromptResult
   * @protected
   */
  protected formatResult(
    result: unknown,
    promptItem: McpPromptItem
  ): GetPromptResult {
    if (isString(result)) {
      return {
        description: promptItem.description,
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: result
            }
          }
        ]
      }
    }

    if (isArray(result)) {
      const normalizedMessages: PromptMessage[] = (result as unknown[]).map(rawMessage => {
        if (isObject(rawMessage)) {
          const candidate = rawMessage as Record<string, unknown>
          const messageRole: 'user' | 'assistant' = candidate.role === 'assistant' ? 'assistant' : 'user'

          if (isString(candidate.content)) {
            return {
              role: messageRole,
              content: {
                type: 'text' as const,
                text: candidate.content
              }
            }
          }

          if (isObject(candidate.content)) {
            return {
              role: messageRole,
              content: candidate.content as PromptMessage['content']
            }
          }
        }

        return {
          role: 'user' as const,
          content: {
            type: 'text' as const,
            text: String(rawMessage ?? '')
          }
        }
      })

      return {
        description: promptItem.description,
        messages: normalizedMessages
      }
    }

    if (isObject(result)) {
      const candidate = result as Record<string, unknown>

      if (isArray(candidate.messages)) {
        return candidate as unknown as GetPromptResult
      }

      return {
        description: promptItem.description,
        messages: [
          {
            role: 'user',
            content: {
              type: 'text',
              text: JSON.stringify(result, null, 2)
            }
          }
        ]
      }
    }

    return {
      description: promptItem.description,
      messages: [
        {
          role: 'user',
          content: {
            type: 'text',
            text: String(result ?? '')
          }
        }
      ]
    }
  }
}
