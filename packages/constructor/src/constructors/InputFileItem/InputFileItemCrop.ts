import { ref, watch } from 'vue'
import type { ConstrBind } from '@dxtmisha/functional'

import type { CropAreaCoordinator, CropAreaEventParameters } from '../CropArea'
import type { DialogProps } from '../Dialog'
import type { TextInclude } from '../../classes/TextInclude'

import type { InputFileItemEvent } from './InputFileItemEvent'
import type { InputFileItemFile } from './InputFileItemFile'
import type { InputFileItemPropsBasic } from './props'

/**
 * Helper class for managing image crop state, dialog controls, and crop area synchronization.
 *
 * Вспомогательный класс для управления состоянием кадрирования изображения, элементами управления диалогом и синхронизацией области кадрирования.
 */
export class InputFileItemCrop {
  /** Working/current crop coordinates in editor / Рабочие/текущие координаты кадрирования в редакторе */
  protected readonly current = ref<CropAreaCoordinator | undefined>()

  /** Saved crop coordinates / Сохраненные координаты кадрирования */
  protected readonly value = ref<CropAreaCoordinator | undefined>()

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param file file manager instance / экземпляр менеджера файла
   * @param event event manager instance / экземпляр менеджера событий
   * @param text text manager instance / экземпляр менеджера текста
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic,
    protected readonly file: InputFileItemFile,
    protected readonly event: InputFileItemEvent,
    protected readonly text: TextInclude
  ) {
    this.updateCoordinator()

    watch(
      () => this.props.value?.crop,
      crop => this.updateCoordinator(crop)
    )
  }

  /**
   * Returns current active crop coordinator.
   *
   * Возвращает текущие активные координаты кадрирования.
   * @returns crop coordinates or undefined / координаты кадрирования или undefined
   */
  get coordinator(): CropAreaCoordinator | undefined {
    return this.value.value ?? this.props.value?.crop
  }

  /**
   * Resolves properties and settings for the crop dialog.
   *
   * Определяет свойства и настройки для диалога кадрирования.
   * @returns dialog configuration object or undefined / объект конфигурации диалога или undefined
   */
  get dialog(): ConstrBind<DialogProps> | undefined {
    return {
      label: this.text.crop,
      closeButton: true,
      clickOkAndClose: true,
      beforeOpening: this.reset,
      onOk: this.onSave
    }
  }

  /**
   * Checks whether the crop feature is available and enabled.
   *
   * Проверяет, доступна ли и включена ли функция кадрирования.
   * @returns true if crop is enabled and file is an image / true, если кадрирование включено и файл является изображением
   */
  is(): boolean {
    return Boolean(this.props.crop && this.file.isImage())
  }

  /**
   * Handles crop area resize event from ImageCrop.
   *
   * Обрабатывает событие изменения области кадрирования от ImageCrop.
   * @param event crop area event parameters / параметры события области кадрирования
   */
  readonly onResize = (event: CropAreaEventParameters): void => {
    this.current.value = event.coordinator
  }

  /**
   * Updates crop coordinates for both saved and current state.
   *
   * Обновляет координаты кадрирования для сохраненного и текущего состояния.
   * @param crop crop coordinates / координаты кадрирования
   * @returns this instance / текущий экземпляр
   */
  protected updateCoordinator(crop: CropAreaCoordinator | undefined = this.props.value?.crop): this {
    this.value.value = crop
    this.current.value = crop

    return this
  }

  /**
   * Resets current working crop to the last saved value.
   *
   * Сбрасывает текущее рабочее кадрирование к последнему сохраненному значению.
   */
  protected readonly reset = (): void => {
    this.current.value = this.value.value
  }

  /**
   * Saves current working crop coordinates and emits crop event.
   *
   * Сохраняет текущие рабочие координаты кадрирования и отправляет событие кадрирования.
   */
  protected readonly onSave = (): void => {
    this.value.value = this.current.value
    this.event.onCrop(this.value.value)
  }
}
