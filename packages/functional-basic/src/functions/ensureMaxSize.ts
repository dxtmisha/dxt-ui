import { blobToBase64 } from './blobToBase64'
import { getElementImage } from './getElementImage'
import { isDomRuntime } from './isDomRuntime'
import { resizeImageByMax } from './resizeImageByMax'

/**
 * Ensures that an image does not exceed the maximum size by resizing it if needed.
 * If resizing is not required or fails, returns the original image encoded in base64.
 *
 * Гарантирует, что изображение не превышает максимальный размер, изменяя его размер при необходимости.
 * Если изменение размера не требуется или завершилось сбоем, возвращает исходное изображение в формате base64.
 * @param file image file as Uint8Array / файл изображения в виде Uint8Array
 * @param compress maximum size as a fraction of the original size / максимальный размер в виде доли от оригинального размера
 * @param type image type / тип изображения
 * @returns promise with the resized image data as base64 / промис с данными измененного изображения в формате base64
 */
export async function ensureMaxSize(
  file: Uint8Array,
  compress: number = 0.56,
  type: string = 'image/jpeg'
): Promise<string> {
  return new Promise((resolve) => {
    if (!isDomRuntime()) {
      resolve('')
      return
    }

    const blob = new Blob([file as BlobPart], { type })
    const data = URL.createObjectURL(blob)
    const image = getElementImage(
      data,
      (element) => {
        try {
          const value = resizeImageByMax(
            element,
            compress * element.naturalWidth,
            'width',
            type
          )

          if (value) {
            resolve(value)
          } else {
            blobToBase64(blob).then(original => resolve(original ?? ''))
          }
        } finally {
          URL.revokeObjectURL(data)
        }
      },
      () => {
        URL.revokeObjectURL(data)
        resolve('')
      }
    )

    if (!image) {
      URL.revokeObjectURL(data)
      blobToBase64(blob).then(original => resolve(String(original ?? '')))
    }
  })
}
