import { type ZipOptions, zipSync } from 'fflate'
import { createElement, isDomRuntime } from '@dxtmisha/functional-basic'

/**
 * Class for creating and managing ZIP archives.
 *
 * Класс для создания и управления ZIP-архивами.
 */
export class Zip {
  protected readonly data: Record<string, any> = {}
  protected buffer?: Uint8Array

  /**
   * Constructor
   * @param name Archive name / Название архива
   * @param options ZIP options / Настройки ZIP
   */
  constructor(
    protected name: string,
    protected options: ZipOptions = { level: 6 }
  ) {
  }

  /**
   * Checks if the archive has data.
   *
   * Проверяет, есть ли данные в архиве.
   * @returns boolean
   */
  is(): boolean {
    return Object.keys(this.data).length !== 0
  }

  /**
   * Returns the ZIP buffer.
   *
   * Возвращает буфер ZIP.
   * @returns Uint8Array | undefined
   */
  get(): Uint8Array | undefined {
    if (this.is()) {
      if (!this.buffer) {
        this.buffer = zipSync(this.data, this.options)
      }

      return this.buffer
    }

    return undefined
  }

  /**
   * Sets the archive name.
   *
   * Устанавливает название архива.
   * @param name Archive name / Название архива
   * @returns this
   */
  setName(name: string): this {
    this.name = name
    return this
  }

  /**
   * Sets the ZIP options.
   *
   * Устанавливает настройки ZIP.
   * @param options ZIP options / Настройки ZIP
   * @returns this
   */
  setOptions(options: ZipOptions): this {
    this.options = options || {}
    return this
  }

  /**
   * Adds a file to the archive.
   *
   * Добавляет файл в архив.
   * @param pathName File path or name / Путь или название файла
   * @param data File content / Содержимое файла
   * @returns this
   */
  addFile(
    pathName: string,
    data: any
  ): this {
    const reformed = this.reformedData(data)

    if (reformed) {
      this.data[pathName] = reformed
    }

    return this
  }

  /**
   * Deletes a file from the archive by name.
   *
   * Удаляет файл из архива по имени.
   * @param pathName File path or name / Путь или название файла
   * @returns this
   */
  removeFile(pathName: string): this {
    if (pathName in this.data) {
      delete this.data[pathName]
      this.buffer = undefined
    }

    return this
  }

  /**
   * Saves the archive by downloading it in the browser.
   *
   * Сохраняет архив, скачивая его в браузере.
   * @returns this
   */
  save(): this {
    if (isDomRuntime()) {
      const buffer = this.get()

      if (buffer) {
        const blob = new Blob([buffer as any], { type: 'application/zip' })
        const url = URL.createObjectURL(blob)
        const element = createElement<HTMLAnchorElement>(
          undefined,
          'a', {
            href: url,
            download: this.name
          }
        )

        if (element) {
          element.click()
        }

        URL.revokeObjectURL(url)
      }
    }

    return this
  }

  /**
   * Reforms data before adding it to the archive.
   *
   * Преобразует данные перед добавлением в архив.
   * @param data file data / данные файла
   * @returns any | undefined
   */
  protected reformedData(data: any): any | undefined {
    if (data) {
      if (typeof data === 'string') {
        return new TextEncoder().encode(data)
      }

      return data
    }

    return undefined
  }
}
