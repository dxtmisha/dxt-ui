import { blobToBase64, getElementImage, resizeImageByMax } from '@dxtmisha/functional-basic'

/**
 * Ensures that an image does not exceed the maximum size by resizing it if needed.
 *
 * Гарантирует, что изображение не превышает максимальный размер, изменяя его размер при необходимости.
 * @param file image file as Uint8Array / файл изображения в виде Uint8Array
 * @param maxSize maximum width in pixels / максимальная ширина в пикселях
 */
export async function ensureMaxSize(
  file: Uint8Array,
  maxSize: number = 1024
): Promise<string> {
  return new Promise((resolve) => {
    const blob = new Blob([file as any], { type: 'image/jpg' })
    const data = URL.createObjectURL(blob)
    const image = getElementImage(data)

    if (image) {
      image.onload = () => {
        const value = resizeImageByMax(
          image,
          maxSize,
          'width',
          'image/jpg'
        )

        resolve(value ?? '')
      }
    } else {
      blobToBase64(blob).then(file => resolve(String(file ?? '')))
    }
  })
}
