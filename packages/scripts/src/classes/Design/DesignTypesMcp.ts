import { isFilled } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'
import { DesignTypesPrompts } from './DesignTypesPrompts'

import type { DesignMcpResourceItem } from '../../types/designTypes'

import { UI_FILE_AI_DESCRIPTION, UI_FILE_AI_MCP, UI_FILE_AI_TYPES } from '../../config'

/**
 * Class for generating, processing, and saving MCP server resources for AI documentation.
 *
 * Класс для генерации, обработки и сохранения ресурсов MCP-сервера для ИИ документации.
 */
export class DesignTypesMcp {
  /**
   * Constructor for DesignTypesMcp.
   *
   * Конструктор для DesignTypesMcp.
   * @param ai instance of DesignTypesAi for AI interactions / экземпляр DesignTypesAi для ИИ взаимодействия
   * @param prompts instance of DesignTypesPrompts for prompt list management / экземпляр DesignTypesPrompts для управления списком промптов
   * @param isRaw flag disabling AI processing / флаг отключения ИИ обработки
   */
  constructor(
    protected readonly ai: DesignTypesAi,
    protected readonly prompts: DesignTypesPrompts,
    protected readonly isRaw: boolean = false
  ) { }

  /**
   * Generates and saves MCP server resources file.
   *
   * Генерирует и сохраняет файл ресурсов MCP-сервера.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    const projectName = this.ai.getProjectName()
    const resources: DesignMcpResourceItem[] = []

    if (!this.isRaw) {
      resources.push({
        uri: `${projectName}/${UI_FILE_AI_TYPES}`,
        name: `Type Definitions (${projectName})`,
        mimeType: 'text/markdown',
        description: 'TypeScript type definitions and signatures for AI coding assistant.'
      })

      resources.push({
        uri: `${projectName}/${UI_FILE_AI_DESCRIPTION}`,
        name: `Project Overview (${projectName})`,
        mimeType: 'text/markdown',
        description: 'Project overview, usage guidelines, and mandatory prompt rules for AI coding assistant.'
      })

      const cache = this.prompts.getCacheList()

      for (const item of cache) {
        if (
          isFilled(item.name)
          && isFilled(item.description)
        ) {
          resources.push({
            uri: `${projectName}/${item.path}`,
            name: `${item.name} (${projectName})`,
            mimeType: 'text/markdown',
            description: item.description
          })
        }
      }
    }

    this.saveMcp(resources)

    return this
  }

  /**
   * Saves the MCP server resources to a JSON file.
   *
   * Сохраняет ресурсы MCP-сервера в JSON файл.
   * @param data data to save / данные для сохранения
   */
  protected saveMcp(data: object): void {
    PropertiesFile.writeByPath(
      UI_FILE_AI_MCP,
      JSON.stringify(data, null, 2)
    )
  }
}
