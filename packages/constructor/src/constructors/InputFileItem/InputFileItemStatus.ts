
import type { TextInclude } from '../../classes/TextInclude'
import type { InputFileItemFile } from './InputFileItemFile'

import type { InputFileItemStatusType } from './basicTypes'
import type { InputFileItemProps } from './props'

/**
 * Helper class for calculating file item status and state messages.
 *
 * Вспомогательный класс для вычисления статуса элемента файла и статусных сообщений.
 */
export class InputFileItemStatus {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param file file manager instance / экземпляр менеджера файла
   * @param text text translations manager / менеджер переводов текста
   */
  constructor(
    protected readonly props: InputFileItemProps,
    protected readonly file: InputFileItemFile,
    protected readonly text: TextInclude
  ) {
  }

  /**
   * Resolves and returns the status message or secondary description text.
   *
   * Определяет и возвращает статусное сообщение или текст вторичного описания.
   * @returns message string or undefined / строка сообщения или undefined
   */
  get message(): string | undefined {
    if (this.isUploading()) {
      return this.text.loadingFile
    }

    if (this.isUploaded()) {
      return this.text.uploadSuccess
    }

    if (this.isError()) {
      return this.text.error
    }

    return this.file.sizeFormatted
  }

  /**
   * Resolves and returns the current file status.
   *
   * Определяет и возвращает текущий статус файла.
   * @returns file status type / тип статуса файла
   */
  get status(): InputFileItemStatusType {
    if (this.props.loading) {
      return 'uploading'
    }

    return this.props.status ?? 'idle'
  }

  /**
   * Checks whether the current status matches the specified status.
   *
   * Проверяет, соответствует ли текущий статус указанному статусу.
   * @param status status to check / статус для проверки
   * @returns true if status matches / true, если статус совпадает
   */
  is(status: InputFileItemStatusType): boolean {
    return this.status === status
  }

  /**
   * Checks whether the current status is error.
   *
   * Проверяет, является ли текущий статус ошибкой.
   * @returns check result / результат проверки
   */
  isError(): boolean {
    return this.is('error')
  }

  /**
   * Checks whether the current status is idle.
   *
   * Проверяет, является ли текущий статус режимом ожидания.
   * @returns check result / результат проверки
   */
  isIdle(): boolean {
    return this.is('idle')
  }

  /**
   * Checks whether the current status is uploaded.
   *
   * Проверяет, является ли текущий статус успешной загрузкой.
   * @returns check result / результат проверки
   */
  isUploaded(): boolean {
    return this.is('uploaded')
  }

  /**
   * Checks whether the current status is uploading.
   *
   * Проверяет, является ли текущий статус процессом загрузки.
   * @returns check result / результат проверки
   */
  isUploading(): boolean {
    return this.is('uploading')
  }
}
