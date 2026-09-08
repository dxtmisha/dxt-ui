import requireFs from 'node:fs'
import { forEach, isArray, isFilled, isObject, isString } from '@dxtmisha/functional-basic'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { useAi } from '../../composables/useAi'

import type { AiImageItem } from '../../types/aiTypes'
import type { DesignScreenshotItem, DesignScreenshotList } from '../../types/screenshotTypes'

import aiScreenshotDescriptionPrompt from '../../media/templates/prompts/aiScreenshotDescription.en.md?raw'

/**
 * Class for analyzing individual component screenshots using AI and generating structured JSON metadata descriptions.
 * Reads captured screenshot image files, analyzes visible components per screenshot with multimodal AI, and saves the list of screenshot descriptors to a JSON file.
 *
 * Класс для анализа отдельных скриншотов компонентов с помощью ИИ и генерации структурированных JSON описаний метаданных.
 * Читает сохраненные файлы изображений скриншотов, анализирует видимые компоненты для каждого скриншота с помощью мультимодального ИИ и сохраняет список дескрипторов скриншотов в JSON файл.
 */
export class DesignScreenshotDescription {
  /** Cached list of analyzed screenshot items / Кэшированный список проанализированных элементов скриншота */
  protected items?: DesignScreenshotList

  /**
   * Constructor initializes target screenshot file path.
   *
   * Конструктор инициализирует целевой путь к файлу скриншота.
   * @param file target screenshot file base path / базовый путь к целевому файлу скриншота
   */
  constructor(
    protected readonly file: string = './ai-screenshot/screenshot'
  ) { }

  /**
   * Checks if the screenshot description JSON file exists.
   *
   * Проверяет, существует ли JSON файл описания скриншота.
   * @returns true if description file exists / true, если файл описания существует
   */
  is(): boolean {
    return PropertiesFile.is(this.getJsonPath())
  }

  /**
   * Returns the directory containing the screenshot files.
   *
   * Возвращает директорию, содержащую файлы скриншотов.
   * @returns directory path / путь к директории
   */
  getDir(): string {
    return PropertiesFile.getPathDir(this.getJsonPath())
  }

  /**
   * Returns the JSON description file path.
   *
   * Возвращает путь к JSON файлу описания.
   * @returns JSON file path / путь к JSON файлу
   */
  getJsonPath(): string {
    return `${this.file}.json`
  }

  /**
   * Returns the list of screenshot description items from cache or file.
   *
   * Возвращает список элементов описания скриншота из кэша или файла.
   * @returns list of screenshot description items / список элементов описания скриншота
   */
  getItems(): DesignScreenshotList {
    if (this.items === undefined) {
      const path = this.getJsonPath()

      if (PropertiesFile.is(path)) {
        const data = PropertiesFile.readFile<DesignScreenshotList>(path)

        if (isArray(data)) {
          this.items = data
        }
      }
    }

    return this.items ?? []
  }

  /**
   * Executes AI screenshot analysis for each screenshot image file and writes results to the JSON file.
   *
   * Выполняет анализ скриншотов с помощью ИИ для каждого файла изображения скриншота и записывает результаты в JSON файл.
   * @returns this instance / этот экземпляр
   */
  async make(): Promise<this> {
    console.info('DesignScreenshotDescription: analyzing screenshots...')

    const imageFiles = this.getImageFiles()

    if (imageFiles.length === 0) {
      console.warn('DesignScreenshotDescription: no screenshot images found to analyze.')
      return this
    }

    const items: DesignScreenshotList = []

    for (const fileName of imageFiles) {
      console.info(`DesignScreenshotDescription: analyzing ${fileName}...`)

      const image = this.getImage(fileName)

      if (image) {
        const item = await this.toAiItem(fileName, image)

        if (item) {
          items.push(item)
        }
      }
    }

    if (items.length > 0) {
      this.items = items
      this.saveJson(items)
      console.info(`DesignScreenshotDescription: saved ${items.length} items to ${this.getJsonPath()}`)
    } else {
      console.warn('DesignScreenshotDescription: AI analysis returned no items.')
    }

    return this
  }

  /**
   * Loads an individual image file by name and returns an AI image item with base64 data.
   *
   * Загружает отдельный файл изображения по имени и возвращает элемент изображения ИИ с данными base64.
   * @param fileName image file name / имя файла изображения
   * @returns AI image item or undefined / элемент изображения ИИ или undefined
   * @protected
   */
  protected getImage(fileName: string): AiImageItem | undefined {
    const filePath = PropertiesFile.joinPath([this.getDir(), fileName])

    try {
      const buffer = requireFs.readFileSync(filePath)
      const base64 = buffer.toString('base64')
      const mime = this.getMimeType(fileName)

      if (isFilled(base64)) {
        return {
          mime,
          base64
        }
      }
    } catch (error) {
      console.error(`DesignScreenshotDescription: failed to read image ${filePath}`, error)
    }

    return undefined
  }

  /**
   * Scans screenshot directory and returns a sorted list of image file names.
   *
   * Сканирует директорию скриншотов и возвращает отсортированный список имен файлов изображений.
   * @returns sorted array of image file names / отсортированный массив имен файлов изображений
   * @protected
   */
  protected getImageFiles(): string[] {
    const dir = this.getDir()

    if (!PropertiesFile.is(dir)) {
      return []
    }

    const files = PropertiesFile.readDir(dir)
    const imageFiles = forEach(
      files,
      (fileName) => {
        if (fileName.match(/\.(webp|png|jpe?g)$/i)) {
          return fileName
        }
      }
    ) as string[]

    return imageFiles.sort()
  }

  /**
   * Determines MIME type based on image file extension.
   *
   * Определяет MIME-тип на основе расширения файла изображения.
   * @param file filename or path / имя файла или путь
   * @returns image MIME type string / строка MIME-типа изображения
   * @protected
   */
  protected getMimeType(file: string): string {
    if (file.endsWith('.png')) {
      return 'image/png'
    }
    if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      return 'image/jpeg'
    }

    return 'image/webp'
  }

  /**
   * Saves the generated screenshot description list to a JSON file.
   *
   * Сохраняет сгенерированный список описаний скриншота в JSON файл.
   * @param items description items list / список элементов описания
   * @protected
   */
  protected saveJson(items: DesignScreenshotList): void {
    PropertiesFile.writeByPath(
      this.getJsonPath(),
      items
    )
  }

  /**
   * Sends a single screenshot image and prompt to AI and parses the JSON response into a screenshot descriptor item.
   *
   * Отправляет отдельное изображение скриншота и промпт ИИ и парсит полученный JSON-ответ в элемент дескриптора скриншота.
   * @param fileName image file name / имя файла изображения
   * @param image image item with base64 data / элемент изображения с данными base64
   * @returns parsed screenshot item or undefined / распарсенный элемент скриншота или undefined
   * @protected
   */
  protected async toAiItem(
    fileName: string,
    image: AiImageItem
  ): Promise<DesignScreenshotItem | undefined> {
    const ai = useAi()

    if (!ai) {
      console.warn('DesignScreenshotDescription: no AI provider available.')
      return undefined
    }

    ai.addImage(image)

    ai.addPrompt('You are a world-class UI/UX design expert and design system architect.')
    ai.addPrompt(`CRITICAL DIRECTIVE: Inspect the provided screenshot image for file "${fileName}" and identify all visible UI components and sections.`)
    ai.addPrompt(
      `TARGET FILE NAME: "${fileName}"\n\n`
      + `TASK INSTRUCTIONS & GOAL:\n`
      + `${aiScreenshotDescriptionPrompt}`
    )

    const response = await ai.generate('go!')

    if (response) {
      try {
        const cleaned = response.replace(/```json|```/g, '').trim()
        const parsed = JSON.parse(cleaned)

        if (isArray(parsed) && parsed.length > 0) {
          const first = parsed[0]
          if (isObject(first) && isString(first.description) && isFilled(first.description)) {
            return {
              name: fileName,
              description: first.description.trim()
            }
          }
        } else if (isObject(parsed) && isString(parsed.description) && isFilled(parsed.description)) {
          return {
            name: fileName,
            description: parsed.description.trim()
          }
        }
      } catch (error) {
        console.error(`DesignScreenshotDescription: failed to parse AI response for ${fileName}`, error)
      }
    }

    return undefined
  }
}
