/**
 * Class for importing plugins.
 *
 * Класс для импорта плагинов.
 */
export class PluginImport {
  protected code: string

  /**
   * Constructor
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
   */
  get(): string {
    return this.code
  }

  /**
   * Returns the style connection code.
   *
   * Возвращает код подключения стиля.
   */
  importStyle(): void {
    this.makeImport('style.css')
  }

  /**
   * Creates an import line.
   *
   * Создает строку импорта.
   * @param name file name / имя файла
   */
  protected makeImport(name: string) {
    const path = `${this.packageName}/${name}`

    if (!this.code.includes(path)) {
      this.code = `import '${path}';`
    }
  }
}
