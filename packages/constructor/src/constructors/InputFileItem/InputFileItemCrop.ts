import { ref, watch } from 'vue'
import { type ConstrBind, DesignLifecycleAbstract } from '@dxtmisha/functional'

import type { CropAreaCoordinator, CropAreaEventParameters } from '../CropArea'
import type { DialogProps } from '../Dialog'
import type { TextInclude } from '../../classes/TextInclude'

import type { InputFileItemPropsBasic } from './props'

/**
 * Helper class for managing image crop state, dialog controls, and crop area synchronization.
 *
 * Вспомогательный класс для управления состоянием кадрирования изображения, элементами управления диалогом и синхронизацией области кадрирования.
 */
export class InputFileItemCrop extends DesignLifecycleAbstract {
  /** Working/current crop coordinates in editor / Рабочие/текущие координаты кадрирования в редакторе */
  protected readonly current = ref<CropAreaCoordinator | undefined>()

  /** Saved crop coordinates / Сохраненные координаты кадрирования */
  protected readonly value = ref<CropAreaCoordinator | undefined>()

  /** Stop handle for crop prop watcher / Функция остановки наблюдателя за свойством crop */
  protected stopWatch?: () => void

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input data / входные данные
   * @param text text manager instance / экземпляр менеджера текста
   * @param onCrop callback triggered when crop is saved / коллбэк, вызываемый при сохранении кадрирования
   */
  constructor(
    protected readonly props: InputFileItemPropsBasic,
    protected readonly text: TextInclude,
    protected readonly onCrop?: () => void
  ) {
    super()
    this.updateCoordinator(props.value?.crop)
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
   * @returns true if crop is enabled / true, если кадрирование включено
   */
  is(): boolean {
    return Boolean(this.props.crop)
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
   * @returns true to confirm dialog opening / true для подтверждения открытия диалога
   */
  protected readonly reset = (): boolean => {
    this.current.value = this.value.value

    return true
  }

  /**
   * Registers reactive watcher for crop property changes on mount.
   *
   * Регистрирует реактивный наблюдатель за изменением свойства crop при монтировании.
   */
  override readonly onMounted = (): void => {
    this.updateCoordinator(this.props.value?.crop)

    this.stopWatch?.()
    this.stopWatch = watch(
      () => this.props.value?.crop,
      crop => this.updateCoordinator(crop)
    )
  }

  /**
   * Cleans up reactive watcher on unmount.
   *
   * Очищает реактивный наблюдатель при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.stopWatch?.()
    this.stopWatch = undefined
  }

  /**
   * Saves current working crop coordinates.
   *
   * Сохраняет текущие рабочие координаты кадрирования.
   */
  protected readonly onSave = (): void => {
    this.value.value = this.current.value
    this.onCrop?.()
  }
}
