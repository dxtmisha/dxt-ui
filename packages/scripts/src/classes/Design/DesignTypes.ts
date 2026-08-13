import { ServerStorage } from '@dxtmisha/functional-basic'

import { DesignTypesAi } from './DesignTypesAi'
import { DesignTypesDescription } from './DesignTypesDescription'
import { DesignTypesMake } from './DesignTypesMake'
import { DesignTypesMcp } from './DesignTypesMcp'
import { DesignTypesPrompts } from './DesignTypesPrompts'

/**
 * Engine for generating compressed and AI-optimized TypeScript type definitions.
 * It scans the build output for declaration files, sanitizes them, and uses AI to produce a minimal, context-rich type library for use in automated coding assistants.
 *
 * Движок для генерации сжатых и оптимизированных для ИИ определений типов TypeScript.
 * Сканирует выходные данные сборки на наличие файлов деклараций, очищает их и использует ИИ для создания минимальной, насыщенной контекстом библиотеки типов для использования в автоматизированных помощниках по кодированию.
 */
export class DesignTypes {
  /** Instance of DesignTypesAi for AI interactions / Экземпляр DesignTypesAi для ИИ взаимодействия */
  protected readonly ai: DesignTypesAi

  /** Instance of DesignTypesDescription for description generation / Экземпляр DesignTypesDescription для генерации описания */
  protected readonly description: DesignTypesDescription

  /** Instance of DesignTypesMake for declaration file processing / Экземпляр DesignTypesMake для обработки файлов деклараций */
  protected readonly makeTypes: DesignTypesMake

  /** Instance of DesignTypesMcp for MCP server resources processing / Экземпляр DesignTypesMcp для обработки ресурсов MCP-сервера */
  protected readonly mcp: DesignTypesMcp

  /** Instance of DesignTypesPrompts for prompt file processing / Экземпляр DesignTypesPrompts для обработки файлов промптов */
  protected readonly prompts: DesignTypesPrompts

  /**
   * Constructor for DesignTypes.
   *
   * Конструктор для DesignTypes.
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param promptsDir input directory path containing prompt files / входной путь к директории, содержащей файлы промптов
   * @param isRaw flag disabling AI processing to create raw types and empty description / флаг отключения ИИ обработки для создания сырых типов и пустого описания
   */
  constructor(
    protected readonly dir: string = 'dist',
    protected readonly promptsDir: string = 'ai-resources',
    protected readonly isRaw: boolean = false
  ) {
    ServerStorage.setErrorStatus(true)

    this.ai = new DesignTypesAi(this.dir, this.isRaw)
    this.makeTypes = new DesignTypesMake(this.ai)
    this.prompts = new DesignTypesPrompts(this.promptsDir, this.ai)
    this.description = new DesignTypesDescription(this.ai, this.makeTypes, this.prompts, this.isRaw)
    this.mcp = new DesignTypesMcp(this.ai, this.prompts, this.isRaw)
  }

  /**
   * Main method to execute the type generation process.
   *
   * Основной метод для выполнения процесса генерации типов.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    console.log('DesignTypes: making AI types...')

    await this.makeTypes.make()
    await this.prompts.make()
    await this.description.make()
    await this.mcp.make()

    console.log('DesignTypes: AI types saved.')

    return this
  }

  /**
   * Generates type definitions by combining processed files from ai-types-list directory without running AI.
   *
   * Генерирует определения типов путем объединения обработанных файлов из директории ai-types-list без запуска ИИ.
   * @returns current instance / текущий экземпляр
   */
  makeSave(): this {
    console.log('DesignTypes: saving AI types from list...')

    this.makeTypes.makeSave()

    console.log('DesignTypes: AI types saved.')

    return this
  }
}
