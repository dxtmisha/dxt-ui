import { isFilled } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'
import type { DesignTypesPromptsAbstract } from './DesignTypesPromptsAbstract'

import type { DesignMcpResourceItem } from '../../types/designTypes'

import {
  UI_DIR_AI_PROMPT_SCREENSHOT,
  UI_FILE_AI_DESCRIPTION,
  UI_FILE_AI_MCP,
  UI_FILE_AI_TYPES
} from '../../config'

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
   * @param prompts instance of DesignTypesPromptsAbstract for prompt list management / экземпляр DesignTypesPromptsAbstract для управления списком промптов
   */
  constructor(
    protected readonly ai: DesignTypesAi,
    protected readonly prompts: DesignTypesPromptsAbstract
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

    resources.push(...this.getScreenshotList(projectName))

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

    this.saveMcp(resources)

    return this
  }

  /**
   * Returns MIME type based on file extension.
   *
   * Возвращает MIME-тип на основе расширения файла.
   * @param file filename or path / имя файла или путь
   * @returns MIME type string / строка MIME-типа
   * @protected
   */
  protected getMimeType(file: string): string {
    if (file.endsWith('.webp')) {
      return 'image/webp'
    }
    if (file.endsWith('.png')) {
      return 'image/png'
    }
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      return 'image/jpeg'
    }
    if (file.endsWith('.svg')) {
      return 'image/svg+xml'
    }
    if (file.endsWith('.html') || file.endsWith('.htm')) {
      return 'text/html'
    }
    if (file.endsWith('.css')) {
      return 'text/css'
    }
    if (file.endsWith('.json')) {
      return 'application/json'
    }
    if (file.endsWith('.md')) {
      return 'text/markdown'
    }

    return 'text/plain'
  }

  /**
   * Retrieves and formats the list of MCP screenshot resources.
   *
   * Получает и форматирует список ресурсов скриншотов MCP.
   * @param projectName project name / название проекта
   * @returns list of screenshot MCP resource items / список элементов MCP-ресурсов скриншотов
   * @protected
   */
  protected getScreenshotList(projectName: string): DesignMcpResourceItem[] {
    const resources: DesignMcpResourceItem[] = []

    if (PropertiesFile.is(UI_DIR_AI_PROMPT_SCREENSHOT)) {
      const screenshotFiles = PropertiesFile.readDir(UI_DIR_AI_PROMPT_SCREENSHOT)

      for (const file of screenshotFiles) {
        if (!file.startsWith('.')) {
          resources.push({
            uri: `${projectName}/${UI_DIR_AI_PROMPT_SCREENSHOT}/${file}`,
            name: `Screenshot: ${file} (${projectName})`,
            mimeType: this.getMimeType(file),
            description: `Visual reference screenshot / asset (${file}) for ${projectName}.`
          })
        }
      }
    }

    return resources
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
