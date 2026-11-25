import { ref, watch } from 'vue'
import { DesignLifecycleAbstract, isObject } from '@dxtmisha/functional'

import { ImageFile } from '../Image'

import type { FieldCounterPropsInclude } from '../FieldCounter'
import type { InputImageFiles } from './InputImageFiles'
import type { InputImageProps } from './props'

/**
 * Class for managing image size calculation and state in InputImage.
 *
 * Класс для управления вычислением размера изображения и его состоянием в InputImage.
 */
export class InputImageSize extends DesignLifecycleAbstract {
  /** Reactive current image file size in bytes / Реактивный текущий размер файла изображения в байтах */
  readonly fileSize = ref<number | undefined>()

  /** Reactive current image size (max dimension) / Реактивный текущий размер изображения (максимальное измерение) */
  readonly item = ref<number | undefined>()

  /** Cleanup function for reactive watcher / Функция очистки реактивного наблюдателя */
  protected watchStop?: () => void

  /** Monotonic token to prevent stale async size updates / Монотонный токен для защиты от устаревших асинхронных обновлений размера */
  private updateToken = 0

  /**
   * Constructor.
   *
   * Конструктор.
   * @param props input properties / входные свойства
   * @param files file manager getter / геттер менеджера файлов
   */
  constructor(
    protected readonly props: Readonly<InputImageProps>,
    protected readonly files: () => InputImageFiles
  ) {
    super()
  }

  /**
   * Sets up reactive watchers and runs initial size calculation after mount.
   *
   * Настраивает реактивные наблюдатели и запускает начальное вычисление размера после монтирования.
   */
  override readonly onMounted = (): void => {
    this.watchStop?.()
    this.watchStop = watch(
      [
        () => this.files().src,
        () => this.files().file.value
      ],
      this.update
    )
    void this.update()
  }

  /**
   * Stops reactive watchers and invalidates pending async updates on unmount.
   *
   * Останавливает реактивные наблюдатели и отменяет ожидающие асинхронные обновления при размонтировании.
   */
  override readonly onUnmounted = (): void => {
    this.watchStop?.()
    this.watchStop = undefined
    this.updateToken += 1
  }

  /**
   * Checks whether the counter should be displayed.
   *
   * Проверяет, должен ли отображаться счетчик.
   * @returns true if counter should be displayed / true, если счетчик должен отображаться
   */
  isCounter(): boolean {
    switch (this.props.counterType) {
      case 'hide':
        return false
      case 'pixel':
        return Boolean(this.props.maxPixel || this.get())
      case 'size':
        return Boolean(this.props.maxFileSize || this.getFileSize())
      default:
        if (this.isFileSize()) {
          return Boolean(this.props.maxFileSize || this.getFileSize())
        }

        return Boolean(this.props.maxPixel || this.get() || this.getFileSize())
    }
  }

  /**
   * Checks whether the file size mode is active.
   *
   * Проверяет, активен ли режим размера файла.
   * @returns true if file size mode / true, если режим размера файла
   */
  isFileSize(): boolean {
    return Boolean(
      this.props.maxFileSize
      && !this.props.maxPixel
    )
  }

  /**
   * Returns current maximum image dimension size.
   *
   * Возвращает текущий максимальный размер измерения изображения.
   * @returns image size or undefined / размер изображения или undefined
   */
  get(): number | undefined {
    return this.item.value
  }

  /**
   * Returns current counter value based on counterType mode.
   *
   * Возвращает текущее значение счетчика в зависимости от режима counterType.
   * @returns counter value or undefined / значение счетчика или undefined
   */
  getCounter(): number | undefined {
    switch (this.props.counterType) {
      case 'hide':
        return undefined
      case 'pixel':
        return this.get()
      case 'size':
        return this.getFileSize()
      default:
        if (this.isFileSize()) {
          return this.getFileSize()
        }

        return this.get() ?? this.getFileSize()
    }
  }

  /**
   * Returns additional properties for the field label and counter.
   *
   * Возвращает дополнительные свойства для метки поля и счетчика.
   * @returns object with counter data / объект с данными счетчика
   */
  readonly getExtra = (): FieldCounterPropsInclude => ({
    counter: this.getCounter(),
    maxlength: this.getMaxlength(),
    counterShow: this.isCounter()
  })

  /**
   * Returns current image file size in bytes.
   *
   * Возвращает текущий размер файла изображения в байтах.
   * @returns file size in bytes or undefined / размер файла в байтах или undefined
   */
  getFileSize(): number | undefined {
    return this.fileSize.value
  }

  /**
   * Returns maximum allowed value for counter based on counterType mode.
   *
   * Возвращает максимально допустимое значение для счетчика в зависимости от режима counterType.
   * @returns maximum value or undefined / максимальное значение или undefined
   */
  getMaxlength(): number | undefined {
    switch (this.props.counterType) {
      case 'hide':
        return undefined
      case 'pixel':
        return this.props.maxPixel
      case 'size':
        return this.props.maxFileSize
      default:
        if (this.isFileSize()) {
          return this.props.maxFileSize
        }

        return this.props.maxPixel
    }
  }

  /**
   * Updates image size by loading image source and file.
   *
   * Обновляет размер изображения загрузкой источника изображения и файла.
   * @param data array of image source and file object / массив источника изображения и объекта файла
   */
  readonly update = async (
    data?: [string | undefined, File | undefined]
  ): Promise<void> => {
    const token = ++this.updateToken
    const files = this.files()
    const [src, file] = data ?? [files.src, files.file.value]

    this.setFileSize(src, file)
    await this.setSize(src, token)
  }

  /**
   * Calculates and sets image file size in bytes from source string or File object.
   *
   * Вычисляет и устанавливает размер файла изображения в байтах из строки источника или объекта File.
   * @param src image source string / строка источника изображения
   * @param file file object / объект файла
   */
  protected setFileSize(src?: string, file?: File): void {
    if (file) {
      this.fileSize.value = file.size
      return
    }

    if (src?.startsWith('data:')) {
      const base64 = src.split(',')[1]

      if (base64) {
        const padding = (base64.endsWith('==') ? 2 : (base64.endsWith('=') ? 1 : 0))
        this.fileSize.value = Math.max(0, Math.floor((base64.length * 3) / 4) - padding)
        return
      }
    }

    this.fileSize.value = undefined
  }

  /**
   * Calculates and sets image dimensions from source string.
   *
   * Вычисляет и устанавливает размеры изображения из строки источника.
   * @param src image source string / строка источника изображения
   * @param token update token / токен обновления
   */
  protected async setSize(src?: string, token: number = this.updateToken): Promise<void> {
    if (src) {
      const item = await ImageFile.createImage(src)

      if (token !== this.updateToken) {
        return
      }

      if (
        isObject(item)
        && 'width' in item
        && 'height' in item
      ) {
        this.item.value = Math.max(item.width, item.height)
        return
      }
    }

    if (token === this.updateToken) {
      this.item.value = undefined
    }
  }
}
