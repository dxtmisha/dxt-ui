import type { DesignTypesAi } from './DesignTypesAi'
import { PropertiesConfig } from '../Properties/PropertiesConfig'

/**
 * Abstract class for declaration file processing, MD5 tracking, and generating AI-optimized TypeScript type definitions.
 * Allows custom implementations of type definition scanning, processing, and generation for DesignTypes.
 *
 * Абстрактный класс для обработки файлов деклараций, отслеживания изменений по MD5 и генерации оптимизированных ИИ определений типов TypeScript.
 * Позволяет реализовывать собственную логику сканирования, обработки и генерации определений типов для DesignTypes.
 */
export abstract class DesignTypesMakeAbstract {
  /**
   * Constructor for DesignTypesMakeAbstract.
   *
   * Конструктор для DesignTypesMakeAbstract.
   * @param ai instance of DesignTypesAi for AI optimization and directory configuration / экземпляр DesignTypesAi для ИИ оптимизации и конфигурации директории
   * @param dir input directory path containing declaration files / входной путь к директории, содержащей файлы деклараций
   * @param dirDist input directory path containing compiled JavaScript files / входной путь к директории, содержащей скомпилированные файлы JavaScript
   */
  constructor(
    protected readonly ai: DesignTypesAi,
    protected readonly dir: string = PropertiesConfig.getTypesTemporaryDirectory(),
    protected readonly dirDist: string = PropertiesConfig.getDistDir()
  ) { }

  /**
   * Reads processed type definition files, combines them into a single string, and cleans the content.
   *
   * Читает обработанные файлы определений типов, объединяет их в одну строку и очищает контент.
   * @returns combined and cleaned full type definitions content / объединенное и очищенное содержимое полных определений типов
   */
  abstract getFullContent(): string

  /**
   * Gets the combined JS content for all filtered JavaScript files.
   *
   * Получает объединенный JS контент для всех отфильтрованных JavaScript файлов.
   * @returns combined JS content string / строка объединенного JS контента
   */
  abstract getFullJsContent(): string

  /**
   * Main method to execute the type definition generation process and save ai-types.md.
   *
   * Основной метод для выполнения процесса генерации определений типов и сохранения ai-types.md.
   * @returns current instance / текущий экземпляр
   */
  abstract make(): Promise<this>

  /**
   * Generates full types content and saves it to ai-types.md.
   *
   * Генерирует полный контент типов и сохраняет его в ai-types.md.
   * @returns current instance / текущий экземпляр
   */
  abstract makeSave(): this
}
