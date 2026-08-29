import { PropertiesConfig } from '../Properties/PropertiesConfig'

/**
 * Abstract class for compiling TypeScript declarations into a temporary directory.
 * Allows custom implementations of TypeScript declaration compilation for DesignTypes.
 *
 * Абстрактный класс для компиляции деклараций TypeScript во временную директорию.
 * Позволяет реализовывать собственную компиляцию деклараций TypeScript для DesignTypes.
 */
export abstract class DesignTypesBuildAbstract {
  /**
   * Constructor for DesignTypesBuildAbstract.
   *
   * Конструктор для DesignTypesBuildAbstract.
   * @param temporaryDirectory directory path for storing temporary declaration files / путь к директории для хранения временных файлов деклараций
   */
  constructor(
    protected readonly temporaryDirectory: string = PropertiesConfig.getTypesTemporaryDirectory()
  ) { }

  /**
   * Checks if the temporary compilation directory exists.
   *
   * Проверяет, существует ли временная директория компиляции.
   * @returns true if temporary directory exists / true, если временная директория существует
   */
  abstract is(): boolean

  /**
   * Cleans the temporary compilation directory.
   *
   * Очищает временную директорию компиляции.
   * @returns current instance / текущий экземпляр
   */
  abstract clean(): this

  /**
   * Compiles TypeScript declarations into the temporary directory.
   *
   * Компилирует декларации TypeScript во временную директорию.
   * @returns current instance / текущий экземпляр
   */
  abstract build(): this
}
