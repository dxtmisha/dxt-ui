import { isArray, isFilled } from '@dxtmisha/functional-basic'
import { PropertiesFile } from '../Properties/PropertiesFile'

import type { DesignScreenshotList } from '../../types/screenshotTypes'

import {
  UI_DIR_AI_PROMPT_SCREENSHOT,
  UI_DIR_AI_TYPES,
  UI_FILE_AI_PROMPT_SCREENSHOT_CODE,
  UI_FILE_AI_PROMPT_SCREENSHOT_JSON,
  UI_FILE_AI_PROMPT_SCREENSHOT_STYLES
} from '../../config'

/**
 * Class representing screenshot handling in the AI prompt generation process.
 * Manages reading screenshot image references, copying HTML/CSS showcase artifacts, and enriching screenshot lists with AI descriptions.
 *
 * Класс, представляющий обработку скриншотов в процессе генерации промпта для ИИ.
 * Управляет чтением ссылок на изображения скриншотов, копированием HTML/CSS артефактов витрины и обогащением списка скриншотов описаниями ИИ.
 */
export class LibraryAiPromptScreenshot {
  /** Map of screenshot file names to their textual descriptions. / Карта имен файлов скриншотов и их текстовых описаний. */
  protected descriptionsMap?: Map<string, string>

  /**
   * Constructor for LibraryAiPromptScreenshot.
   *
   * Конструктор для LibraryAiPromptScreenshot.
   * @param dir Path segments to the directory / Сегменты пути к директории
   * @param projectName Project name from package.json / Название проекта из package.json
   */
  constructor(
    protected readonly dir: string[] = [],
    protected readonly projectName: string = 'none'
  ) { }

  /**
   * Checks if the screenshot directory exists.
   *
   * Проверяет, существует ли директория со скриншотами.
   * @returns true if screenshot directory exists / true, если директория скриншотов существует
   */
  isScreenshot(): boolean {
    return PropertiesFile.is(this.getPath(UI_DIR_AI_PROMPT_SCREENSHOT))
  }

  /**
   * Formats and returns the screenshot section for the AI prompt.
   * Copies HTML and CSS showcase files to the root types directory and enriches screenshot image references with descriptions.
   *
   * Форматирует и возвращает секцию скриншотов для промпта ИИ.
   * Копирует файлы HTML и CSS витрины в корневую директорию типов и обогащает ссылки на изображения скриншотов описаниями.
   * @returns formatted screenshot section or undefined / отформатированная секция скриншотов или undefined
   */
  make(): string | undefined {
    const list = this.getScreenshotList()

    if (list && list.length > 0) {
      console.log('-- Screenshot')

      const descriptionsMap = this.getDescriptionsMap()
      const prefix = this.getPathString(UI_DIR_AI_PROMPT_SCREENSHOT)
      const lines: string[] = []

      const imageFiles = list.filter(file => this.isImageFile(file))
      imageFiles.forEach((file) => {
        const description = descriptionsMap.get(file)
        const path = `'${prefix}/${file}'`

        if (description) {
          lines.push(`- ${path}: ${description}`)
        } else {
          lines.push(`- ${path}`)
        }
      })

      if (list.includes(UI_FILE_AI_PROMPT_SCREENSHOT_CODE)) {
        const targetPath = this.copyScreenshotFile(UI_FILE_AI_PROMPT_SCREENSHOT_CODE)
        const description = descriptionsMap.get(UI_FILE_AI_PROMPT_SCREENSHOT_CODE)
        const path = `'${targetPath.join('/')}'`

        if (description) {
          lines.push(`- ${path}: ${description}`)
        } else {
          lines.push(`- ${path}`)
        }
      }

      if (list.includes(UI_FILE_AI_PROMPT_SCREENSHOT_STYLES)) {
        const targetPath = this.copyScreenshotFile(UI_FILE_AI_PROMPT_SCREENSHOT_STYLES)
        const description = descriptionsMap.get(UI_FILE_AI_PROMPT_SCREENSHOT_STYLES)
        const path = `'${targetPath.join('/')}'`

        if (description) {
          lines.push(`- ${path}: ${description}`)
        } else {
          lines.push(`- ${path}`)
        }
      }

      if (lines.length > 0) {
        return `## Component Visual References (Screenshots)
${lines.join('\n')}
        `.trim()
      }
    }

    return undefined
  }

  /**
   * Checks whether the file is an image file and not a metadata/code file.
   *
   * Проверяет, является ли файл изображением, а не файлом метаданных/кода.
   * @param fileName file name to verify / имя файла для проверки
   * @returns true if file is an image / true, если файл является изображением
   * @protected
   */
  protected isImageFile(fileName: string): boolean {
    return fileName !== UI_FILE_AI_PROMPT_SCREENSHOT_JSON
      && fileName !== UI_FILE_AI_PROMPT_SCREENSHOT_CODE
      && fileName !== UI_FILE_AI_PROMPT_SCREENSHOT_STYLES
  }

  /**
   * Retrieves and caches the map of screenshot descriptions from screenshot.json.
   *
   * Получает и кэширует карту описаний скриншотов из screenshot.json.
   * @returns map of file names to descriptions / карта имен файлов к описаниям
   * @protected
   */
  protected getDescriptionsMap(): Map<string, string> {
    if (!this.descriptionsMap) {
      const map = new Map<string, string>()
      const jsonPath = this.getScreenshotPath(UI_FILE_AI_PROMPT_SCREENSHOT_JSON)

      if (PropertiesFile.is(jsonPath)) {
        const data = PropertiesFile.readFile<DesignScreenshotList>(jsonPath)

        if (isArray(data)) {
          data.forEach((item) => {
            if (isFilled(item?.name) && isFilled(item?.description)) {
              map.set(item.name, item.description)
            }
          })
        }
      }

      this.descriptionsMap = map
    }

    return this.descriptionsMap
  }

  /**
   * Constructs a full path for a file or directory within the item's directory.
   *
   * Создает полный путь к файлу или директории внутри директории элемента.
   * @param dirFile File or directory name / Имя файла или директории
   * @returns path segments / сегменты пути
   * @protected
   */
  protected getPath(dirFile: string): string[] {
    return [...this.dir, dirFile]
  }

  /**
   * Returns the directory path or file path within the directory as a string.
   *
   * Возвращает путь к директории или путь к файлу внутри директории в виде строки.
   * @param dirFile optional file name or subpath / опциональное имя файла или подпуть
   * @returns formatted path string / отформатированная строка пути
   * @protected
   */
  protected getPathString(dirFile?: string): string {
    const base = this.dir.join('/')

    if (dirFile) {
      return base ? `${base}/${dirFile}` : dirFile
    }

    return base
  }

  /**
   * Retrieves the list of files in the screenshot directory.
   *
   * Получает список файлов в директории скриншотов.
   * @returns list of screenshot file names or undefined / список имен файлов скриншотов или undefined
   * @protected
   */
  protected getScreenshotList(): string[] | undefined {
    if (this.isScreenshot()) {
      return PropertiesFile.readDir(this.getPath(UI_DIR_AI_PROMPT_SCREENSHOT))
    }

    return undefined
  }

  /**
   * Constructs a full path for a file inside the screenshot directory.
   *
   * Создает полный путь к файлу внутри директории скриншотов.
   * @param fileName File name / Имя файла
   * @returns path segments / сегменты пути
   * @protected
   */
  protected getScreenshotPath(fileName: string): string[] {
    return [...this.dir, UI_DIR_AI_PROMPT_SCREENSHOT, fileName]
  }

  /**
   * Returns the directory name for the copied files based on the project name.
   *
   * Возвращает имя директории для скопированных файлов на основе названия проекта.
   * @returns directory name / имя директории
   * @protected
   */
  protected getTypesDirName(): string {
    const baseName = this.projectName !== 'none'
      ? this.projectName
      : (this.dir[this.dir.length - 1] ?? 'types')

    return baseName
      .replace(/^@/, '')
      .replace(/[/\\:]+/g, '-')
  }

  /**
   * Returns path segments for a copied file in the root types directory.
   *
   * Возвращает сегменты пути для скопированного файла в корневой директории типов.
   * @param fileName File name / Имя файла
   * @returns target path segments / сегменты целевого пути
   * @protected
   */
  protected getTypesPath(fileName: string): string[] {
    return [
      UI_DIR_AI_TYPES,
      this.getTypesDirName(),
      fileName
    ]
  }

  /**
   * Copies a screenshot artifact file to the target destination in the root types directory.
   *
   * Копирует файл артефакта скриншота в целевое назначение в корневой директории типов.
   * @param fileName file name to copy / имя файла для копирования
   * @returns target path segments / сегменты целевого пути
   * @protected
   */
  protected copyScreenshotFile(fileName: string): string[] {
    const targetPath = this.getTypesPath(fileName)
    const sourcePath = this.getScreenshotPath(fileName)

    try {
      PropertiesFile.copy(targetPath, sourcePath)
    } catch (error) {
      console.warn(`LibraryAiPromptScreenshot: failed to copy ${fileName} to ${targetPath.join('/')}`, error)
    }

    return targetPath
  }
}
