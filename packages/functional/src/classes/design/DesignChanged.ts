import { isArray } from '@dxtmisha/functional-basic'

/**
 * The class checks the values that have been edited.
 *
 * Класс проверяет значения, которые были отредактированы.
 */
export class DesignChanged<T extends Record<string, any>> {
  private readonly cache: Record<string, any> = {}

  /**
   * Constructor
   * @param props base data/ базовые данные
   * @param watch data for tracking/ данные для слежения
   */

  constructor(
    protected readonly props: T,
    protected readonly watch: string[] = Object.keys(props)
  ) {
  }

  /**
   * Checks if the value has been updated.
   *
   * Проверяет, обновлено ли значение.
   * @param name property name/ название свойства
   */
  is(name: string | string[]): boolean {
    if (isArray(name)) {
      return Boolean(name.find(index => this.isDifferent(index)))
    }

    return this.isDifferent(name)
  }

  /**
   * Checks if there are changes in the data.
   *
   * Проверяет, есть ли изменения в данных.
   */
  isChanged(): boolean {
    const props = this.props

    return Boolean(
      this.watch.find((index) => {
        return index in props && this.isDifferent(index)
      })
    )
  }

  /**
   * Updates all values.
   *
   * Обновляет все значения.
   */
  update(): void {
    const props = this.props

    this.watch.forEach((index) => {
      if (
        index in props
        && this.isDifferent(index)
      ) {
        this.cache[index] = props[index]
      }
    })
  }

  /**
   * Checking additional data.
   *
   * Проверка дополнительных данных.
   * @param name property name/ название свойства
   */
  protected isDifferent(name: string): boolean {
    return this.cache?.[name] !== this.props?.[name]
  }
}
