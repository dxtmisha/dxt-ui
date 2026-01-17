/**
 * Class for importing plugins.
 *
 * Класс для импорта плагинов.
 */
export class UiPluginImport {
  /**
   * Constructor
   * @param packageName package name / название пакета
   */
  constructor(
    protected readonly packageName: string
  ) {
  }

  /**
   * Returns the style connection code.
   *
   * Возвращает код подключения стиля.
   */
  importStyle(): string {
    return `import '${this.packageName}/style.css';`
  }
}
