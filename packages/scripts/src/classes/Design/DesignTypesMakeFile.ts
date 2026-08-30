import { forEach, isFilled } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'
import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { PropertiesFile } from '../Properties/PropertiesFile'
import type { DesignTypesAi } from './DesignTypesAi'

import type { DesignTypesItem, DesignTypesList } from '../../types/designTypes'

import { UI_DIR_AI_TYPES_LIST, UI_FILE_AI_TYPES } from '../../config'

/**
 * Handles file reading, directory scanning, caching, MD5 tracking, and file writing for DesignTypesMake.
 *
 * Обрабатывает чтение файлов, сканирование директорий, кэширование, отслеживание MD5 и запись файлов для DesignTypesMake.
 */
export class DesignTypesMakeFile {
  /** Cached list of filtered type definition files / Кэшированный список отфильтрованных файлов определений типов */
  protected listByFilter?: DesignTypesList

  /** Cached list of filtered JavaScript files / Кэшированный список отфильтрованных JavaScript файлов */
  protected listByFilterJs?: DesignTypesList

  /** Cached list of filtered type definition files from cache directory / Кэшированный список отфильтрованных файлов определений типов из директории кэша */
  protected listCache?: DesignTypesList

  /**
   * Constructor for DesignTypesMakeFile.
   *
   * Конструктор для DesignTypesMakeFile.
   * @param ai instance of DesignTypesAi for AI optimization and directory configuration / экземпляр DesignTypesAi для ИИ оптимизации и конфигурации директории
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param dirDist input directory path containing compiled JavaScript files / входной путь к директории, содержащей скомпилированные файлы JavaScript
   */
  constructor(
    protected readonly ai: DesignTypesAi,
    protected readonly dir: string = PropertiesConfig.getTypesTemporaryDirectory(),
    protected readonly dirDist: string = PropertiesConfig.getDistDir()
  ) {}

  /**
   * Gets a list of files filtered by criteria (.d.ts).
   *
   * Получает список файлов, отфильтрованный по критериям (.d.ts).
   * @returns list of filtered type definition files / список отфильтрованных файлов определений типов
   */
  getListByFilter(): DesignTypesList {
    if (this.listByFilter === undefined) {
      this.listByFilter = this.getListBy(
        file => this.ai.isFile(file),
        this.getTemporaryDirectory()
      )
    }

    return this.listByFilter
  }

  /**
   * Gets a list of JS files filtered by criteria (.js).
   *
   * Получает список JS файлов, отфильтрованный по критериям (.js).
   * @returns list of filtered JavaScript files / список отфильтрованных JavaScript файлов
   */
  getListByFilterJs(): DesignTypesList {
    if (this.listByFilterJs === undefined) {
      this.listByFilterJs = this.getListBy(
        file => this.ai.isFileJs(file),
        this.getDistDirectory()
      )
    }

    return this.listByFilterJs
  }

  /**
   * Gets a list of type definition files from the AI types list cache directory (.d.ts).
   *
   * Получает список файлов определений типов из директории кэша списка ИИ типов (.d.ts).
   * @returns list of filtered type definition files from cache / список отфильтрованных файлов определений типов из кэша
   */
  getListCache(): DesignTypesList {
    if (this.listCache === undefined) {
      this.listCache = this.getListBy(
        file => this.ai.isFile(file),
        UI_DIR_AI_TYPES_LIST
      )
    }

    return this.listCache
  }

  /**
   * Gets a list of type definition files with cleaned content read from the AI types list directory.
   *
   * Получает список файлов определений типов с очищенным содержимым, прочитанным из директории списка ИИ типов.
   * @param files list of type definition files / список файлов определений типов
   * @returns list of type definition files with cleaned AI content / список файлов определений типов с очищенным ИИ содержимым
   */
  getListAi(files: DesignTypesList): DesignTypesList {
    return forEach(files, (item) => {
      const raw = PropertiesFile.readFileOnly([UI_DIR_AI_TYPES_LIST, item.path])
      const content = raw ? raw.replace(/^\/\/ md5:[^\n]*\n?/, '') : item.content

      return {
        ...item,
        content: content.trim()
      }
    }) as DesignTypesList
  }

  /**
   * Combines a list of files into a single string.
   *
   * Объединяет список файлов в одну строку.
   * @param list list of files / список файлов
   * @returns combined content string / объединенная строка контента
   */
  toOneFile(list: DesignTypesList): string {
    return forEach(
      list,
      item => item.content
    )
      .join('\n\n')
  }

  /**
   * Reads the content of a file.
   *
   * Читает содержимое файла.
   * @param path file path / путь к файлу
   * @param directory directory containing the file / директория, содержащая файл
   * @returns file content or undefined / содержимое файла или undefined
   */
  readFile(path: string, directory: string = this.getTemporaryDirectory()): string | undefined {
    return PropertiesFile.readFileOnly(this.getPath(path, directory))
  }

  /**
   * Saves the generated content to a file.
   *
   * Сохраняет сгенерированный контент в файл.
   * @param content content to save / контент для сохранения
   */
  save(content: string): void {
    const packageJson = getPackageJson()

    if (packageJson) {
      const versionStr = packageJson.version ? ` (v${packageJson.version})` : ''
      PropertiesFile.writeByPath(
        UI_FILE_AI_TYPES,
        [
          `All these methods are in the ${packageJson.name}${versionStr} library.`,
          '',
          content
        ].join('\n')
      )
    }
  }

  /**
   * Saves a type definition file to the ai-types-list directory with an MD5 header.
   *
   * Сохраняет файл определений типов в директорию ai-types-list с заголовком MD5.
   * @param item type definition file item / элемент файла определений типов
   * @param isProcessed flag indicating if file is AI-processed / флаг, указывающий, обработан ли файл ИИ
   */
  saveFile(item: DesignTypesItem, isProcessed: boolean = false): void {
    PropertiesFile.writeByPath(
      [UI_DIR_AI_TYPES_LIST, item.path],
      `${this.getMd5Header(item.md5, isProcessed)}\n${item.content}`
    )
  }

  /**
   * Saves copies of type definition files to the ai-types-list directory with an MD5 header.
   * Returns files that are new, modified, or not yet marked as AI-processed.
   *
   * Сохраняет копии файлов определений типов в директорию ai-types-list с заголовком MD5.
   * Возвращает файлы, которые являются новыми, измененными или еще не отмеченными как обработанные ИИ.
   * @param files list of type definition files / список файлов определений типов
   * @returns list of updated or unprocessed files / список обновленных или необработанных файлов
   */
  saveList(files: DesignTypesList): DesignTypesList {
    return forEach(
      files,
      (item) => {
        const targetPath = [UI_DIR_AI_TYPES_LIST, item.path]
        const oldContent = PropertiesFile.readFileOnly(targetPath)

        if (
          !isFilled(oldContent)
          || !oldContent.startsWith(this.getMd5Header(item.md5))
        ) {
          this.saveFile(item)

          return item
        }

        if (
          !oldContent.startsWith(this.getMd5Header(item.md5, true))
        ) {
          return item
        }

        return undefined
      }
    ) as DesignTypesList
  }

  /**
   * Checks if the content contains type definitions.
   *
   * Проверяет, содержит ли контент определения типов.
   * @param content file content / содержимое файла
   * @returns true if content contains exports / true, если контент содержит экспорты
   */
  protected isContent(content?: string): content is string {
    return Boolean(
      content
      && content.includes('export')
    )
  }

  /**
   * Reads a directory recursively.
   *
   * Читает директорию рекурсивно.
   * @param directory directory path to read / путь к директории для чтения
   * @returns array of relative file paths / массив относительных путей к файлам
   */
  protected getList(directory: string = this.getTemporaryDirectory()): string[] {
    return PropertiesFile.is(directory) ? PropertiesFile.readDirRecursive(directory) : []
  }

  /**
   * Gets a list of files filtered by a provided checker function from a specific directory.
   *
   * Получает список файлов, отфильтрованный переданной функцией проверки из указанной директории.
   * @param checkFile function to check if the file matches criteria / функция проверки соответствия файла критериям
   * @param directory source directory path / путь к исходной директории
   * @returns filtered list of design type items / отфильтрованный список элементов типов
   */
  protected getListBy(
    checkFile: (file: string) => boolean,
    directory: string = this.getTemporaryDirectory()
  ): DesignTypesList {
    return forEach(
      this.getList(directory),
      (file) => {
        if (checkFile(file)) {
          const content = this.readFile(file, directory)

          if (this.isContent(content)) {
            return {
              path: file,
              content,
              md5: this.ai.getMd5(content)
            }
          }
        }

        return undefined
      }
    ) as DesignTypesList
  }

  /**
   * Generates the MD5 header string for a type definition file.
   *
   * Генерирует строку заголовка MD5 для файла определений типов.
   * @param md5 MD5 hash string / строка MD5 хэша
   * @param isProcessed flag indicating if file is AI-processed / флаг, указывающий, обработан ли файл ИИ
   * @returns formatted MD5 header string / отформатированная строка заголовка MD5
   */
  protected getMd5Header(md5?: string, isProcessed: boolean = false): string {
    const status = isProcessed ? ' true' : ''

    return `// md5:${md5 ?? 'none'}${status}`
  }

  /**
   * Returns the full path segments for a file.
   *
   * Возвращает сегменты полного пути для файла.
   * @param file file name / имя файла
   * @param directory directory containing the file / директория, содержащая файл
   * @returns array of path segments / массив сегментов пути
   */
  protected getPath(file: string, directory: string = this.getTemporaryDirectory()): string[] {
    return [directory, file]
  }

  /**
   * Returns the path to the temporary compilation directory.
   *
   * Возвращает путь к временной директории компиляции.
   * @returns temporary compilation directory path / путь к временной директории компиляции
   */
  protected getTemporaryDirectory(): string {
    return this.dir
  }

  /**
   * Returns the path to the compiled distribution directory.
   *
   * Возвращает путь к директории собранных файлов.
   * @returns compiled distribution directory path / путь к директории собранных файлов
   */
  protected getDistDirectory(): string {
    return this.dirDist
  }
}
