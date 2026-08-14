import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio'
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport'

/**
 * Class for managing MCP server transport.
 *
 * Класс для управления транспортом MCP сервера.
 */
export class McpTransport {
  /**
   * Constructor
   *
   * Конструктор
   * @param transport Optional initial transport / Опциональный начальный транспорт
   */
  constructor(
    protected transport?: Transport
  ) {}

  /**
   * Returns the transport instance, creating default StdioServerTransport if not set.
   *
   * Возвращает экземпляр транспорта, создавая StdioServerTransport по умолчанию, если не установлен.
   * @returns Transport
   */
  get(): Transport {
    if (!this.transport) {
      this.transport = new StdioServerTransport()
    }

    return this.transport
  }

  /**
   * Sets the transport instance.
   *
   * Устанавливает экземпляр транспорта.
   * @param transport Transport instance / Экземпляр транспорта
   * @returns this
   */
  set(transport: Transport): this {
    this.transport = transport
    return this
  }
}
