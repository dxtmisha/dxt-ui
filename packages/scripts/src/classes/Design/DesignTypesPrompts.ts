import { forEach, isFilled } from '@dxtmisha/functional-basic'
import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignTypesPromptsAbstract } from './DesignTypesPromptsAbstract'

import type {
  DesignTypesItem,
  DesignTypesList,
  DesignTypesPromptCacheItem,
  DesignTypesPromptCacheList,
  DesignTypesPromptData,
  DesignTypesPromptResult
} from '../../types/designTypes'

import { UI_DIR_AI_TYPES_LIST, UI_DIR_RESOURCES, UI_MODULES } from '../../config'

import aiPromptMetadataPrompt from '../../media/templates/prompts/aiPromptMetadata.en.md?raw'

/**
 * Class for reading prompt files, managing individual prompt metadata files, and generating AI project rules and prompt triggers description.
 *
 * Класс для чтения файлов промптов, управления отдельными файлами метаданных промптов и генерации описания правил проекта ИИ и триггеров промптов.
 */
export class DesignTypesPrompts extends DesignTypesPromptsAbstract {
  /** Cached list of prompt files / Кэшированный список файлов с промптами */
  protected listPrompts?: DesignTypesList

  /** Cached prompt AI metadata list / Кэшированный список метаданных промптов ИИ */
  protected cacheList?: DesignTypesPromptCacheList

  /**
   * Reads and returns the prompt cache list from individual JSON files in the resources directory.
   *
   * Читает и возвращает список кэша промптов из отдельных JSON файлов в директории ресурсов.
   * @returns prompt cache list / список кэша промптов
   */
  getCacheList(): DesignTypesPromptCacheList {
    if (this.cacheList === undefined) {
      const cacheDir = this.getCacheDir()
      const files = PropertiesFile.readDirRecursive(cacheDir)
      const list: DesignTypesPromptCacheList = []

      for (const file of files) {
        if (file.endsWith('.json')) {
          const item = PropertiesFile.readFile<DesignTypesPromptCacheItem>([cacheDir, file])

          if (
            item
            && isFilled(item.path)
            && isFilled(item.name)
            && isFilled(item.description)
          ) {
            list.push(item)
          }
        }
      }

      this.cacheList = list
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
   * Processes prompt files using AI and updates individual JSON cache files if changes are detected.
   *
   * Обрабатывает файлы промптов с помощью ИИ и обновляет отдельные JSON файлы кэша при обнаружении изменений.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    const list = this.getListPrompts()

    for (const item of list) {
      await this.toAiPromptItem(item)
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
   * Gets the cache directory path for individual prompt JSON files.
   *
   * Получает путь к директории кэша для отдельных JSON файлов промптов.
   * @returns cache directory path / путь к директории кэша
   */
  protected getCacheDir(): string {
    return PropertiesFile.joinPath([UI_DIR_AI_TYPES_LIST, UI_DIR_RESOURCES])
  }

  /**
   * Gets the cache JSON file path for a specific prompt file path.
   *
   * Получает путь к JSON файлу кэша для конкретного пути к файлу промпта.
   * @param path relative file path of the prompt / относительный путь к файлу промпта
   * @returns cache JSON file path / путь к JSON файлу кэша
   */
  protected getCachePath(path: string): string {
    const relativePath = path
      .replace(new RegExp(`^${this.promptsDir}/`), '')
      .replace(/\.[^/.]+$/, '.json')

    return PropertiesFile.joinPath([
      this.getCacheDir(),
      relativePath
    ])
  }

  /**
   * Generates MD5 hash for the given content.
   *
   * Генерирует MD5 хэш для переданного содержимого.
   * @param content file or text content / содержимое файла или текста
   * @returns MD5 hash string / MD5 хэш строка
   */
  protected getMd5(content: string): string {
    return this.ai.getMd5(content)
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
   * Saves an individual prompt cache item to its JSON cache file.
   *
   * Сохраняет отдельный элемент кэша промпта в его JSON файл кэша.
   * @param item prompt cache item to save / элемент кэша промпта для сохранения
   */
  protected saveCacheItem(item: DesignTypesPromptCacheItem): void {
    PropertiesFile.writeByPath(
      this.getCachePath(item.path),
      item
    )
  }

  /**
   * Saves the prompt cache list to individual JSON cache files.
   *
   * Сохраняет список кэша промптов в отдельные JSON файлы кэша.
   * @param cache cache list to save / список кэша для сохранения
   */
  protected saveCacheList(cache: DesignTypesPromptCacheList): void {
    this.cacheList = cache

    for (const item of cache) {
      this.saveCacheItem(item)
    }
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
      aiPromptMetadataPrompt
    )
  }

  /**
   * Processes a single prompt file item using cache or AI into a formatted rule entry string and updates individual cache file if changed.
   *
   * Обрабатывает один элемент файла промпта с использованием кэша или ИИ в отформатированную строку правила и обновляет отдельный файл кэша при изменениях.
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

      this.saveCacheItem(newItem)

      return {
        prompt: this.getPromptLine(item.path, data.description),
        isChanged: true
      }
    }

    return { isChanged: false }
  }
}
