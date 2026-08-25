import type { FieldValidationItem } from '../../types/fieldTypes'
import type { FieldEventInclude } from '../../classes/Field/FieldEventInclude'
import type { CropAreaEventParameters } from '../CropArea'
import type { DropzoneInclude } from '../Dropzone'
import type { InputImageFiles } from './InputImageFiles'

/**
 * Class for handling events of InputImage.
 *
 * Класс для обработки событий InputImage.
 */
export class InputImageEvent {
  /**
   * Constructor
   * @param files file manager instance / экземпляр менеджера файлов
   * @param dropzone dropzone instance / экземпляр дропзоны
   * @param event field event include instance / экземпляр событий поля
   */
  constructor(
    protected readonly files: InputImageFiles,
    protected readonly dropzone: DropzoneInclude,
    protected readonly event: FieldEventInclude
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
   * Handles crop area resize event.
   *
   * Обрабатывает событие изменения размера области кадрирования.
   * @param event crop area event parameters / параметры события области кадрирования
   */
  readonly onCropResize = (event: CropAreaEventParameters): void => {
    this.files.setCrop(event.coordinator)
    this.event.onValue()
  }

  /**
   * Handles Dropzone input event.
   *
   * Обрабатывает событие ввода Dropzone.
   * @param event DOM event / событие DOM
   * @param data validation item / элемент валидации
   */
  readonly onDropzoneInput = async (
    event: Event,
    data: FieldValidationItem<FileList | undefined>
  ): Promise<void> => {
    await this.files.setFiles(data.value)
    this.event.onAndChange(event)
  }
}
