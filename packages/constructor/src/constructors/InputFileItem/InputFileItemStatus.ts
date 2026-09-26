import { isFilled, isNumber, isString, toNumber } from '@dxtmisha/functional'

import type { TextInclude } from '../../classes/TextInclude'

import type { InputFileItemPropsBasic } from './props'
import type { InputFileItemStatusType } from './basicTypes'
import type { InputFileItemFile } from './InputFileItemFile'

/**
 * Helper class for calculating file item status, upload progress, and state messages.
 *
 * Вспомогательный класс для вычисления статуса элемента файла, прогресса загрузки и статусных сообщений.
 */
export class InputFileItemStatus {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param fileItem file manager instance / экземпляр менеджера файла
   * @param text text translations manager / менеджер переводов текста
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic,
    protected readonly fileItem: InputFileItemFile,
    protected readonly text: TextInclude
  ) {
  }

  /**
   * Resolves and returns the current file status.
   *
   * Определяет и возвращает текущий статус файла.
   * @returns file status type / тип статуса файла
   */
  get status(): InputFileItemStatusType {
    if (this.props.loading || this.props.status === 'uploading') {
      return 'uploading'
    }

    if (Boolean(this.props.error) || this.props.status === 'error') {
      return 'error'
    }

    if (Boolean(this.props.success) || this.props.status === 'uploaded') {
      return 'uploaded'
    }

    return this.props.status ?? 'idle'
  }

  /**
   * Checks whether the file is currently uploading.
   *
   * Проверяет, загружается ли файл в данный момент.
   * @returns true if uploading / true, если идет загрузка
   */
  get isUploading(): boolean {
    return this.status === 'uploading'
  }

  /**
   * Checks whether the file upload has succeeded.
   *
   * Проверяет, успешно ли загружен файл.
   * @returns true if uploaded / true, если загружен
   */
  get isUploaded(): boolean {
    return this.status === 'uploaded'
  }

  /**
   * Checks whether the file is in an error state.
   *
   * Проверяет, находится ли файл в состоянии ошибки.
   * @returns true if error / true, если ошибка
   */
  get isError(): boolean {
    return this.status === 'error'
  }

  /**
   * Checks whether the file is in idle state.
   *
   * Проверяет, находится ли файл в состоянии ожидания.
   * @returns true if idle / true, если ожидание
   */
  get isIdle(): boolean {
    return this.status === 'idle'
  }

  /**
   * Resolves and returns the status message or secondary description text.
   *
   * Определяет и возвращает статусное сообщение или текст вторичного описания.
   * @returns message string / строка сообщения
   */
  get message(): string {
    if (this.isUploading) {
      return this.props.messageLoading
        ?? this.text.loadingFile
        ?? this.text.loading
        ?? 'Loading file ...'
    }

    if (this.isUploaded) {
      if (isString(this.props.success)) {
        return this.props.success
      }

      return this.props.messageSuccess
        ?? this.text.uploadSuccess
        ?? 'Upload successful'
    }

    if (this.isError) {
      if (isString(this.props.error)) {
        return this.props.error
      }

      return this.props.messageError
        ?? this.text.error
        ?? 'Error'
    }

    if (isFilled(this.props.caption)) {
      return String(this.props.caption)
    }

    return this.fileItem.sizeFormatted
  }

  /**
   * Resolves and returns the current upload progress percentage (0-100).
   *
   * Определяет и возвращает текущий процент прогресса загрузки (0-100).
   * @returns progress percentage number / число процента прогресса
   */
  get progress(): number {
    if (isNumber(this.props.progress)) {
      return Math.min(100, Math.max(0, this.props.progress))
    }

    if (isString(this.props.progress)) {
      const parsedNumber = toNumber(this.props.progress)
      return Math.min(100, Math.max(0, parsedNumber))
    }

    return 0
  }

  /**
   * Checks whether progress value is determinate.
   *
   * Проверяет, является ли значение прогресса определенным.
   * @returns true if determinate / true, если определено
   */
  get isProgressDeterminate(): boolean {
    return this.props.progress !== undefined
  }
}
