import { blobToBase64, getElementImage, resizeImageByMax } from '@dxtmisha/functional-basic'
import { FIGMA_IMAGE_TYPE } from '../config'

/**
 * Ensures that an image does not exceed the maximum size by resizing it if needed.
 *
 * Гарантирует, что изображение не превышает максимальный размер, изменяя его размер при необходимости.
 * @param file image file as Uint8Array / файл изображения в виде Uint8Array
 * @param compress maximum size as a fraction of the original size (default is 0.7)/
 * максимальный размер в виде доли от оригинального размера (по умолчанию 0.7)
 */
export async function ensureMaxSize(
  file: Uint8Array,
  compress: number = 0.56
): Promise<string> {
  return new Promise((resolve) => {
    const blob = new Blob([file as any], { type: FIGMA_IMAGE_TYPE })
    const data = URL.createObjectURL(blob)
    const image = getElementImage(data)

    if (image) {
      image.onload = () => {
        const value = resizeImageByMax(
          image,
          compress * image.naturalWidth,
          'width',
          FIGMA_IMAGE_TYPE
        )

        resolve(value ?? '')
      }
    } else {
      blobToBase64(blob).then(file => resolve(String(file ?? '')))
    }
  })
}
