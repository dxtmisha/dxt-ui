import { forEach, ServerStorage } from '@dxtmisha/functional-basic'
import { getPackageJson } from '../../functions/getPackageJson'
import { useAi } from '../../composables/useAi'

import { PropertiesFile } from '../Properties/PropertiesFile'

import type { DesignTypesList } from '../../types/designTypes'

import { UI_DIR_CONSTRUCTOR, UI_FILE_AI_TYPES } from '../../config'

/**
 * Engine for generating compressed and AI-optimized TypeScript type definitions.
 * It scans the build output for declaration files, sanitizes them, and uses AI to produce a minimal, context-rich type library for use in automated coding assistants.
 *
 * Движок для генерации сжатых и оптимизированных для ИИ определений типов TypeScript.
 * Сканирует выходные данные сборки на наличие файлов деклараций, очищает их и использует ИИ для создания минимальной, насыщенной контекстом библиотеки типов для использования в автоматизированных помощниках по кодированию.
 */
export class DesignTypes {
  /**
   * Array of directory path segments.
   *
   * Массив сегментов пути директории.
   */
  protected readonly dirArray: string[]

  /**
   * Constructor for DesignTypes.
   *
   * Конструктор для DesignTypes.
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   */
  constructor(
    protected readonly dir: string = 'dist'
  ) {
    ServerStorage.setErrorStatus(true)
    this.dirArray = this.dir.split('/')
  }

  /**
   * Main method to execute the type generation process.
   *
   * Основной метод для выполнения процесса генерации типов.
   */
  make() {
    console.log('DesignTypes: making AI types...')

    const files = this.getListByFilter()
    const fullContent = this.toOneFile(files)

    this.toAiEdit(fullContent).then(
      (aiContent) => {
        this.save(aiContent)

        console.log('DesignTypes: AI types saved.')
      }
    )
  }

  /**
   * Checks if the file is a valid declaration file.
   *
   * Проверяет, является ли файл валидным файлом декларации.
   * @param file file name / имя файла
   */
  protected isFile(file: string): boolean {
    return file.endsWith('.d.ts')
      && !file.endsWith('.vue.d.ts')
      && !file.endsWith('wiki.d.ts')
      && !file.endsWith('wikiData.d.ts')
      && (
        !file.includes(`${UI_DIR_CONSTRUCTOR}/`)
        || file.endsWith('/basicTypes.d.ts')
        || file.endsWith('/types.d.ts')
        || file.endsWith('/props.d.ts')
      )
  }

  /**
   * Checks if the content contains type definitions.
   *
   * Проверяет, содержит ли контент определения типов.
   * @param content file content / содержимое файла
   */
  protected isContent(content?: string): content is string {
    return Boolean(
      content
      && content.includes('export')
    )
  }

  /**
   * Returns the full path segments for a file.
   *
   * Возвращает сегменты полного пути для файла.
   * @param file file name / имя файла
   */
  protected getPath(file: string): string[] {
    return [...this.dirArray, file]
  }

  /**
   * Reads the directory recursively.
   *
   * Читает директорию рекурсивно.
   */
  protected getList() {
    return PropertiesFile.readDirRecursive(this.dirArray)
  }

  /**
   * Gets a list of files filtered by criteria.
   *
   * Получает список файлов, отфильтрованный по критериям.
   */
  protected getListByFilter(): DesignTypesList {
    return forEach(
      this.getList(),
      (file) => {
        if (this.isFile(file)) {
          const content = this.readFile(file)

          if (this.isContent(content)) {
            return {
              path: file,
              content
            }
          }
        }

        return undefined
      }
    ) as DesignTypesList
  }

  /**
   * Reads the content of a file.
   *
   * Читает содержимое файла.
   * @param path file path / путь к файлу
   */
  protected readFile(path: string): string | undefined {
    return PropertiesFile.readFileOnly(this.getPath(path))
  }

  /**
   * Saves the generated content to a file.
   *
   * Сохраняет сгенерированный контент в файл.
   * @param content content to save / контент для сохранения
   */
  protected save(content: string) {
    const packageJson = getPackageJson()

    if (packageJson) {
      PropertiesFile.writeByPath(
        UI_FILE_AI_TYPES,
        [
          `1) All these methods are in the ${packageJson.name} library.`,
          '2) Everything that is exported can be used.',
          '3) Use what is in this library if it exists; do not use other libraries if there is an analogue here. Do not create new ones if an analogue already exists here.',
          '',
          'The following is the content of "exports" from package.json:',
          JSON.stringify(packageJson.exports, null, 2),
          '',
          content
        ].join('\n')
      )
    }
  }

  /**
   * Combines a list of files into a single string.
   *
   * Объединяет список файлов в одну строку.
   * @param list list of files / список файлов
   */
  protected toOneFile(list: DesignTypesList): string {
    return forEach(
      list,
      item => `// File: ${item.path}\n${item.content}`
    )
      .join('\n\n')
  }

  /**
   * Sends content to AI for optimization.
   *
   * Отправляет контент ИИ для оптимизации.
   * @param content content to optimize / контент для оптимизации
   */
  protected async toAiEdit(content: string): Promise<string> {
    const ai = useAi()

    if (ai) {
      ai.addPrompt(
        'Remove all Russian comments from this code. '
        + 'Simplify and shorten all English comments for AI readability while maintaining a clear balance between brevity and context. Do not delete them even if the code seems obvious. '
        + 'Always keep All JSDoc "@example", "@remarks", "@note", and any other notes or warnings. '
        + 'Remove all imports. '
        + 'Remove all non-public content: delete all private and protected class methods and properties, and any non-exported elements. The final output must contain only the members and entities that are accessible from outside. '
        + 'Remove any code segments or data that do not provide useful information for an AI assistant. '
        + 'You may remove abstract classes or other structures that provide no practical value for code generation, but do so with extreme caution. Maintain a strict balance: if there is even a 5% chance the item might be relevant for understanding the API or generating code, keep it. Think carefully before every deletion. '
        + 'Remove any large Enums that add excessive length without providing critical context. '
        + 'Your goal is to create a compact, context-rich file that enables any AI coding assistant to generate high-quality code for a developer. '
        + 'Ensure that no public API surface, essential data types, or required logic is lost. '
        + 'Do not delete any "type" definitions; they are strictly required. '
        + 'Do not delete file paths (labels starting with "// File:"). '
        + 'All instructions are mandatory and must be executed perfectly. '
        + 'Return ONLY the resulting code. No markdown code blocks, no tags, no explanations, and no additional comments from the AI. NOTHING but the pure code.'
      )
      ai.addPrompt(`File Content: ${content}`)

      const generate = await ai.generate('go!')

      if (generate) {
        return generate
      }
    }

    return content
  }
}
