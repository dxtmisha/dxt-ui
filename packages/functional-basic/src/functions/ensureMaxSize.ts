import { blobToBase64 } from './blobToBase64'
import { getElementImage } from './getElementImage'
import { resizeImageByMax } from './resizeImageByMax'

/**
 * Ensures that an image does not exceed the maximum size by resizing it if needed.
 *
 * Гарантирует, что изображение не превышает максимальный размер, изменяя его размер при необходимости.
 * @param file image file as Uint8Array / файл изображения в виде Uint8Array
 * @param compress maximum size as a fraction of the original size (default is 0.7)/
 * максимальный размер в виде доли от оригинального размера (по умолчанию 0.7)
 * @param type image type (default is 'image/jpeg') / тип изображения (по умолчанию 'image/jpeg')
 */
export async function ensureMaxSize(
  file: Uint8Array,
  compress: number = 0.56,
  type: string = 'image/jpeg'
): Promise<string> {
  return new Promise((resolve) => {
    const blob = new Blob([file as any], { type })
    const data = URL.createObjectURL(blob)
    const image = getElementImage(data)

    if (image) {
      image.onload = () => {
        const value = resizeImageByMax(
          image,
          compress * image.naturalWidth,
          'width',
          type
        )

        resolve(value ?? '')
      }
    } else {
      blobToBase64(blob).then(file => resolve(String(file ?? '')))
    }
  })
}
