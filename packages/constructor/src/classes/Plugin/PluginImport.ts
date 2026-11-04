/**
 * Class for injecting package style imports into the entry file.
 *
 * Класс для внедрения импортов стилей пакета в главный входной файл.
 */
export class PluginImport {
  /** File content / Содержимое файла */
  protected code: string

  /**
   * Constructor.
   *
   * Конструктор.
   * @param packageName package name / название пакета
   * @param code file content / содержимое файла
   */
  constructor(
    protected readonly packageName: string,
    code: string
  ) {
    this.code = code
  }

  /**
   * Returns the file content.
   *
   * Возвращает содержимое файла.
   * @returns transformed file content / преобразованное содержимое файла
   */
  get(): string {
    return this.code
  }

  /**
   * Prepends the main style import (`style.css`) to the file content.
   *
   * Добавляет импорт основного файла стилей (`style.css`) в начало содержимого файла.
   * @returns current instance / текущий экземпляр
   */
  importStyle(): this {
    this.makeImport('style.css')
    return this
  }

  /**
   * Creates an import line if it is not already present in the code.
   *
   * Создает строку импорта, если она еще не присутствует в коде.
   * @param name file name / имя файла
   */
  protected makeImport(name: string): void {
    const path = `${this.packageName}/${name}`

    if (!this.code.includes(path)) {
      this.code = `import '${path}';${this.code}`
    }
  }
}
