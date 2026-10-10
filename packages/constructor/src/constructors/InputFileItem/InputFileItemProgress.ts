import { isObject, toNumber } from '@dxtmisha/functional'

import type { ProgressProps } from '../Progress'
import type { InputFileItemAppearance } from './InputFileItemAppearance'
import type { InputFileItemFile } from './InputFileItemFile'
import type { InputFileItemStatus } from './InputFileItemStatus'
import type { InputFileItemPropsBasic } from './props'

/**
 * Helper class for calculating file item upload progress value and limits.
 *
 * Вспомогательный класс для вычисления значения и пределов прогресса загрузки элемента файла.
 */
export class InputFileItemProgress {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param file file manager instance / экземпляр менеджера файла
   * @param appearance appearance manager instance / экземпляр менеджера внешнего вида
   * @param status status manager instance / экземпляр менеджера статуса
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic,
    protected readonly file: InputFileItemFile,
    protected readonly appearance: InputFileItemAppearance,
    protected readonly status: InputFileItemStatus
  ) {
  }

  /**
   * Returns current maximum progress value based on file size.
   *
   * Возвращает текущее максимальное значение прогресса на основе размера файла.
   * @returns maximum progress value in bytes / максимальное значение прогресса в байтах
   */
  get max(): number {
    return this.file.size
  }

  /**
   * Resolves properties and settings for the progress indicator.
   *
   * Определяет свойства и настройки для индикатора прогресса.
   * @returns progress configuration object / объект конфигурации прогресса
   */
  get progressProps(): ProgressProps {
    const item: ProgressProps = {
      visible: this.status.isUploading()
    }

    if (!this.appearance.isTile()) {
      item.position = 'static'
    }

    if (this.isDeterminate()) {
      item.value = this.value
      item.max = this.max
    }

    if (this.appearance.isCircular()) {
      return {
        ...item,
        circular: true
      }
    }

    return {
      ...item,
      linear: true
    }
  }

  /**
   * Returns current upload progress numeric value without artificial limits.
   *
   * Возвращает текущее числовое значение прогресса загрузки без искусственных ограничений.
   * @returns current progress value / текущее значение прогресса
   */
  get value(): number {
    if (
      isObject(this.props.loading)
      && 'value' in this.props.loading
    ) {
      return toNumber(this.props.loading.value ?? 0)
    }

    return 0
  }

  /**
   * Checks whether progress value is determinate.
   *
   * Проверяет, является ли значение прогресса определенным.
   * @returns true if determinate / true, если определено
   */
  isDeterminate(): boolean {
    return isObject(this.props.loading) && 'value' in this.props.loading
  }
}
