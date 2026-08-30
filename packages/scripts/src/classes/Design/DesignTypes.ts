import { ServerStorage } from '@dxtmisha/functional-basic'

import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { DesignTypesAi } from './DesignTypesAi'
import { DesignTypesBuild } from './DesignTypesBuild'
import { DesignTypesDescription } from './DesignTypesDescription'
import { DesignTypesMake } from './DesignTypesMake'
import { DesignTypesMcp } from './DesignTypesMcp'
import { DesignTypesPrompts } from './DesignTypesPrompts'
import type { DesignTypesBuildAbstract } from './DesignTypesBuildAbstract'
import type { DesignTypesMakeAbstract } from './DesignTypesMakeAbstract'
import type { DesignTypesPromptsAbstract } from './DesignTypesPromptsAbstract'

/**
 * Engine for compiling TypeScript declarations into a temporary directory and generating AI-optimized type definitions.
 * It compiles TypeScript sources, cleanses declaration files, uses AI to produce a minimal, context-rich type library, and removes temporary artifacts upon completion.
 *
 * Движок для компиляции деклараций TypeScript во временную директорию и генерации оптимизированных ИИ определений типов.
 * Компилирует исходники TypeScript, очищает файлы деклараций, использует ИИ для создания минимальной, насыщенной контекстом библиотеки типов и удаляет временные артефакты после завершения.
 */
export class DesignTypes {
  /** Instance of DesignTypesAi for AI interactions / Экземпляр DesignTypesAi для ИИ взаимодействия */
  protected readonly ai: DesignTypesAi

  /** Instance of DesignTypesBuildAbstract for compiling TypeScript declarations / Экземпляр DesignTypesBuildAbstract для компиляции деклараций TypeScript */
  protected readonly buildTypes: DesignTypesBuildAbstract

  /** Instance of DesignTypesDescription for description generation / Экземпляр DesignTypesDescription для генерации описания */
  protected readonly description: DesignTypesDescription

  /** Instance of DesignTypesMakeAbstract for declaration file processing / Экземпляр DesignTypesMakeAbstract для обработки файлов деклараций */
  protected readonly makeTypes: DesignTypesMakeAbstract

  /** Instance of DesignTypesMcp for MCP server resources processing / Экземпляр DesignTypesMcp для обработки ресурсов MCP-сервера */
  protected readonly mcp: DesignTypesMcp

  /** Instance of DesignTypesPromptsAbstract for prompt file processing / Экземпляр DesignTypesPromptsAbstract для обработки файлов промптов */
  protected readonly prompts: DesignTypesPromptsAbstract

  /**
   * Constructor for DesignTypes.
   *
   * Конструктор для DesignTypes.
   * @param promptsDir input directory path containing prompt files / входной путь к директории, содержащей файлы промптов
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param dirDist output directory path containing compiled JavaScript files / выходной путь к директории скомпилированных JavaScript файлов
   * @param constructors optional constructors map for custom subsystem implementations / опциональный объект конструкторов для кастомных реализаций подсистем
   */
  constructor(
    protected readonly promptsDir: string = PropertiesConfig.getAiResourcesDir(),
    protected readonly dir: string = PropertiesConfig.getTypesTemporaryDirectory(),
    protected readonly dirDist: string = PropertiesConfig.getDistDir(),
    constructors: {
      DesignTypesBuildConstructor?: typeof DesignTypesBuildAbstract
      DesignTypesMakeConstructor?: typeof DesignTypesMakeAbstract
      DesignTypesPromptsConstructor?: typeof DesignTypesPromptsAbstract
    } = {}
  ) {
    const {
      DesignTypesBuildConstructor = DesignTypesBuild,
      DesignTypesMakeConstructor = DesignTypesMake,
      DesignTypesPromptsConstructor = DesignTypesPrompts
    } = constructors

    ServerStorage.setErrorStatus(true)

    this.ai = new DesignTypesAi(this.dir)
    this.buildTypes = new (DesignTypesBuildConstructor as typeof DesignTypesBuild)(this.dir)
    this.makeTypes = new (DesignTypesMakeConstructor as typeof DesignTypesMake)(this.ai, this.dir, this.dirDist)
    this.prompts = new (DesignTypesPromptsConstructor as typeof DesignTypesPrompts)(this.promptsDir, this.ai)
    this.description = new DesignTypesDescription(this.ai, this.makeTypes, this.prompts)
    this.mcp = new DesignTypesMcp(this.ai, this.prompts)
  }

  /**
   * Main method to execute the type generation process.
   *
   * Основной метод для выполнения процесса генерации типов.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    console.log('DesignTypes: making AI types...')

    try {
      this.buildTypes.build()

      await this.makeTypes.make()
      await this.prompts.make()
      await this.description.make()
      await this.mcp.make()
    } finally {
      this.buildTypes.clean()
    }

    console.log('DesignTypes: AI types saved.')

    return this
  }

  /**
   * Generates type definitions by combining processed files from ai-types-list directory without running AI.
   *
   * Генерирует определения типов путем объединения обработанных файлов из директории ai-types-list без запуска ИИ.
   * @returns current instance / текущий экземпляр
   */
  async makeSave(): Promise<this> {
    console.log('DesignTypes: saving AI types from list...')

    this.makeTypes.makeSave()

    if (!this.description.is()) {
      await this.description.make()
    }

    if (!this.mcp.is()) {
      await this.mcp.make()
    }

    console.log('DesignTypes: AI types saved.')

    return this
  }
}
