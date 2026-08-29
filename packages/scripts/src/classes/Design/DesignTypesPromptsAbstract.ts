import type { DesignTypesAi } from './DesignTypesAi'
import { PropertiesConfig } from '../Properties/PropertiesConfig'
import type { DesignTypesPromptCacheList } from '../../types/designTypes'

/**
 * Abstract class for reading, managing, and compiling AI prompts and rule metadata.
 * Allows custom implementations of prompt scanning and cache management for DesignTypes.
 *
 * Абстрактный класс для чтения, управления и компиляции метаданных промптов и правил ИИ.
 * Позволяет реализовывать собственную механику сканирования и кэширования для DesignTypes.
 */
export abstract class DesignTypesPromptsAbstract {
  /**
   * Constructor for DesignTypesPromptsAbstract.
   *
   * Конструктор для DesignTypesPromptsAbstract.
   * @param promptsDir input directory path containing prompt files / входной путь к директории, содержащей файлы промптов
   * @param ai instance of DesignTypesAi for AI interactions / экземпляр DesignTypesAi для ИИ взаимодействия
   */
  constructor(
    protected readonly promptsDir: string = PropertiesConfig.getAiResourcesDir(),
    protected readonly ai: DesignTypesAi
  ) { }

  /**
   * Reads and returns the prompt metadata list for MCP server resources.
   *
   * Читает и возвращает список метаданных промптов для ресурсов MCP-сервера.
   * @returns prompt metadata cache list / список метаданных промптов
   */
  abstract getCacheList(): DesignTypesPromptCacheList

  /**
   * Executes the prompt scanning and metadata generation process.
   *
   * Выполняет процесс сканирования промптов и генерации метаданных.
   * @returns current instance / текущий экземпляр
   */
  abstract make(): Promise<this>

  /**
   * Generates formatted mandatory project rules and prompt triggers for ai-description.md.
   *
   * Генерирует форматированные обязательные правила проекта и триггеры промптов для ai-description.md.
   * @returns prompt rules markdown string / строка правил промптов в формате markdown
   */
  abstract toAiPrompts(): Promise<string>
}
