// ai-none

import type { FieldValidationItem } from '../../types/fieldTypes'
import type { DropzoneInclude } from '../Dropzone'
import type { InputFileDropzoneFiles } from './InputFileDropzoneFiles'

/**
 * Class for handling events of InputFileDropzone.
 *
 * Класс для обработки событий InputFileDropzone.
 */
export class InputFileDropzoneEvent {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param files file manager instance / экземпляр менеджера файлов
   * @param dropzone dropzone instance / экземпляр области сброса
   */
  constructor(
    protected readonly files: InputFileDropzoneFiles,
    protected readonly dropzone: DropzoneInclude
  ) { }

  /**
   * Triggers the file selection dialog.
   *
   * Открывает диалог выбора файла.
   */
  readonly open = (): void => {
    this.dropzone.expose.open?.()
  }

  /**
   * Handles Dropzone input event.
   *
   * Обрабатывает событие ввода Dropzone.
   * @param _event DOM event / событие DOM
   * @param validationData validation item / элемент валидации
   */
  readonly onDropzoneInput = (
    _event: Event,
    validationData: FieldValidationItem<FileList | undefined>
  ): void => {
    this.files.setFiles(validationData.value)
  }
}
