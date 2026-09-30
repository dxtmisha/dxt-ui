import type { InputFileItemAppearanceType } from './basicTypes'
import type { InputFileItemProps } from './props'

/**
 * Helper class for managing appearance mode and state checks for InputFileItem.
 *
 * Вспомогательный класс для управления режимом отображения и проверками состояния в InputFileItem.
 */
export class InputFileItemAppearance {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   */
  constructor(
    protected readonly props: InputFileItemProps
  ) {
  }

  /**
   * Returns current appearance mode.
   *
   * Возвращает текущий режим отображения.
   * @returns appearance mode / режим отображения
   */
  get(): InputFileItemAppearanceType {
    return this.props.appearance ?? 'list'
  }

  /**
   * Checks whether the current appearance matches the specified mode.
   *
   * Проверяет, соответствует ли текущий режим отображения указанному режиму.
   * @param appearance appearance mode to check / режим отображения для проверки
   * @returns check result / результат проверки
   */
  is(appearance: InputFileItemAppearanceType): boolean {
    return this.get() === appearance
  }

  /**
   * Checks whether the appearance requires a circular progress bar.
   *
   * Проверяет, требуется ли для текущего режима отображения круговой индикатор прогресса.
   * @returns check result / результат проверки
   */
  isCircular(): boolean {
    return this.isCompact() || this.isTile()
  }

  /**
   * Checks whether the appearance is compact mode.
   *
   * Проверяет, является ли режим отображения компактным.
   * @returns check result / результат проверки
   */
  isCompact(): boolean {
    return this.is('compact')
  }

  /**
   * Checks whether the appearance is list mode.
   *
   * Проверяет, является ли режим отображения списочным.
   * @returns check result / результат проверки
   */
  isList(): boolean {
    return this.is('list')
  }

  /**
   * Checks whether the appearance is tile mode.
   *
   * Проверяет, является ли режим отображения плиточным.
   * @returns check result / результат проверки
   */
  isTile(): boolean {
    return this.is('tile')
  }
}
