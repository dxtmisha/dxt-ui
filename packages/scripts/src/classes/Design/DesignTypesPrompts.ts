import { createHash } from 'node:crypto'
import { forEach, isFilled } from '@dxtmisha/functional-basic'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesAi } from './DesignTypesAi'

import type {
  DesignTypesItem,
  DesignTypesList,
  DesignTypesPromptCacheItem,
  DesignTypesPromptCacheList,
  DesignTypesPromptData,
  DesignTypesPromptResult
} from '../../types/designTypes'

import { UI_MODULES } from '../../config'

/**
 * Class for reading prompt files and generating AI project rules and prompt triggers description.
 *
 * Класс для чтения файлов промптов и генерации описания правил проекта ИИ и триггеров промптов.
 */
export class DesignTypesPrompts {
  /** Cached list of prompt files / Кэшированный список файлов с промптами */
  protected listPrompts?: DesignTypesList

  /** Cached prompt AI metadata list / Кэшированный список метаданных промптов ИИ */
  protected cacheList?: DesignTypesPromptCacheList

  /**
   * Constructor for DesignTypesPrompts.
   *
   * Конструктор для DesignTypesPrompts.
   * @param promptsDir input directory path containing prompt files / входной путь к директории, содержащей файлы промптов
   * @param ai instance of DesignTypesAi for AI interactions / экземпляр DesignTypesAi для ИИ взаимодействия
   */
  constructor(
    protected readonly promptsDir: string = 'ai-resources',
    protected readonly ai: DesignTypesAi
  ) { }

  /**
   * Reads and returns the prompt cache list from the JSON cache file.
   *
   * Читает и возвращает список кэша промптов из JSON файла кэша.
   * @returns prompt cache list / список кэша промптов
   */
  getCacheList(): DesignTypesPromptCacheList {
    if (this.cacheList === undefined) {
      const cachePath = this.getCachePath()
      const data = PropertiesFile.readFile<DesignTypesPromptCacheList>(cachePath)

      this.cacheList = Array.isArray(data) ? data : []
    }

    return this.cacheList
  }

  /**
   * Gets a list of prompt files.
   *
   * Получает список файлов с промптами.
   * @returns list of prompt files / список файлов с промптами
   */
  getListPrompts(): DesignTypesList {
    if (this.listPrompts === undefined) {
      const files = PropertiesFile.readDirRecursive(this.promptsDir)

      this.listPrompts = forEach(
        files,
        (file) => {
          if (file.endsWith('.json')) {
            return undefined
          }

          const path = `${this.promptsDir}/${file}`
          const content = PropertiesFile.readFileOnly(path)

          if (content) {
            return {
              path,
              content,
              md5: this.getMd5(content)
            }
          }
        }
      ) as DesignTypesList
    }

    return this.listPrompts
  }

  /**
   * Initializes prompt rules by executing cache processing and returning formatted prompt rule strings.
   *
   * Инициализирует правила промптов, выполняя обработку кэша и возвращая список отформатированных строк правил промптов.
   * @returns array of formatted prompt rule strings / массив отформатированных строк правил промптов
   */
  async init(): Promise<string[]> {
    await this.make()

    const list = this.getListPrompts()
    const cache = this.getCacheList()
    const prompts: string[] = []

    for (const item of list) {
      const cachedItem = cache.find(itemCache => itemCache.path === item.path)

      if (cachedItem && isFilled(cachedItem.description)) {
        prompts.push(this.getPromptLine(item.path, cachedItem.description))
      }
    }

    return prompts
  }

  /**
   * Processes prompt files using AI and updates the JSON cache file if changes are detected.
   *
   * Обрабатывает файлы промптов с помощью ИИ и обновляет JSON файл кэша при обнаружении изменений.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    const list = this.getListPrompts()
    let isCacheChanged = false

    for (const item of list) {
      const result = await this.toAiPromptItem(item)

      if (result.isChanged) {
        isCacheChanged = true
      }
    }

    if (isCacheChanged) {
      this.saveCacheList(this.getCacheList())
    }

    return this
  }

  /**
   * Generates project rules and prompt triggers description using AI.
   *
   * Генерирует описание правил проекта и триггеров промптов с помощью ИИ.
   * @returns prompt rules description / описание правил промптов
   */
  async toAiPrompts(): Promise<string> {
    const prompts = await this.init()

    if (prompts.length > 0) {
      return '## Mandatory Rules\n'
        + 'You MUST evaluate whether your task relates to any of the following topics (even if not working directly with this package). If related material is present, you are strictly obligated to read and study the corresponding file before proceeding:\n'
        + `${prompts.join('\n')}`
    }

    return ''
  }

  /**
   * Gets the cache JSON file path for prompts.
   *
   * Получает путь к JSON файлу кэша для промптов.
   * @returns cache JSON file path / путь к JSON файлу кэша
   */
  protected getCachePath(): string {
    return `${this.promptsDir}/prompts.json`
  }

  /**
   * Generates MD5 hash for the given content.
   *
   * Генерирует MD5 хэш для переданного содержимого.
   * @param content file or text content / содержимое файла или текста
   * @returns MD5 hash string / MD5 хэш строка
   */
  protected getMd5(content: string): string {
    return createHash('md5').update(content.trim()).digest('hex')
  }

  /**
   * Formats a prompt rule entry line for a file and description.
   *
   * Форматирует строку элемента правила промпта для файла и описания.
   * @param path relative file path / относительный путь к файлу
   * @param description rule description / описание правила
   * @returns formatted prompt rule line / отформатированная строка правила промпта
   */
  protected getPromptLine(
    path: string,
    description: string
  ): string {
    return `- '${UI_MODULES}/${this.ai.getProjectName()}/${path}': ${description}`
  }

  /**
   * Saves the prompt cache list to the JSON cache file.
   *
   * Сохраняет список кэша промптов в JSON файл кэша.
   * @param cache cache list to save / список кэша для сохранения
   */
  protected saveCacheList(cache: DesignTypesPromptCacheList): void {
    this.cacheList = cache
    PropertiesFile.writeByPath(this.getCachePath(), cache)
  }

  /**
   * Generates document metadata (title and description) for studying a prompt file using AI.
   *
   * Генерирует метаданные документа (название и описание) для изучения файла промпта с помощью ИИ.
   * @param content prompt file content / содержимое файла промпта
   * @returns object with document title and description or undefined / объект с названием и описанием документа или undefined
   */
  protected async toAiPromptData(content: string): Promise<DesignTypesPromptData | undefined> {
    return this.ai.toAiJson<DesignTypesPromptData>(
      content,
      'Goal: Generate a document metadata object in valid JSON format for an AI coding assistant.\n\n'
      + 'CRITICAL RESTRICTIONS:\n'
      + '- The output MUST be a valid JSON object with keys: "name" and "description".\n'
      + '- Field "name": Short and concise document title (maximum 4-5 words).\n'
      + '- Field "description": Clear description for an AI agent explaining what exact standards, rules, or tools this file contains and what commercial or technical task it solves (maximum 3 sentences).\n'
      + '- Do NOT include markdown code block wrappers (```json). Return ONLY the raw JSON string.\n\n'
      + 'EXAMPLES OF GOOD OUTPUT:\n'
      + '{\n'
      + '  "name": "Coding Standards",\n'
      + '  "description": "Строгие архитектурные конвенции и стандарты написания кода для продукта"\n'
      + '}\n\n'
      + 'OUTPUT REQUIREMENTS:\n'
      + 'Return ONLY the JSON object. No explanations, no markdown formatting, no conversational text.'
    )
  }

  /**
   * Processes a single prompt file item using cache or AI into a formatted rule entry string and updates cache list if changed.
   *
   * Обрабатывает один элемент файла промпта с использованием кэша или ИИ в отформатированную строку правила и обновляет список кэша при изменениях.
   * @param item prompt file item / элемент файла промпта
   * @returns object with formatted rule string and changed flag / объект с отформатированной строкой правила и флагом изменений
   */
  protected async toAiPromptItem(
    item: DesignTypesItem
  ): Promise<DesignTypesPromptResult> {
    const md5 = item.md5 ?? this.getMd5(item.content)
    const cache = this.getCacheList()
    const cacheIndex = cache.findIndex(itemCache => itemCache.path === item.path)
    const cachedItem = cacheIndex >= 0 ? cache[cacheIndex] : undefined

    if (
      cachedItem
      && cachedItem.md5 === md5
      && isFilled(cachedItem.name)
      && isFilled(cachedItem.description)
    ) {
      return {
        prompt: this.getPromptLine(item.path, cachedItem.description),
        isChanged: false
      }
    }

    console.log(`-- processing prompt metadata for ${item.path}...`)

    const data = await this.toAiPromptData(item.content)

    if (
      data
      && isFilled(data.name)
      && isFilled(data.description)
    ) {
      const newItem: DesignTypesPromptCacheItem = {
        path: item.path,
        md5,
        name: data.name,
        description: data.description
      }

      if (cacheIndex >= 0) {
        cache[cacheIndex] = newItem
      } else {
        cache.push(newItem)
      }

      return {
        prompt: this.getPromptLine(item.path, data.description),
        isChanged: true
      }
    }

    return { isChanged: false }
  }
}
