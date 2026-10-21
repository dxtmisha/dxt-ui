import { getImageSrc } from './getImageSrc'
import { isDomRuntime } from './isDomRuntime'
import { resizeImageByMax } from './resizeImageByMax'

/**
 * Asynchronously resizes an image to fit within maximum size constraints.
 *
 * Асинхронно изменяет размер изображения в соответствии с ограничением максимального размера.
 * @param image image source string (URL or base64) or HTMLImageElement / строка источника изображения (URL или base64) или HTMLImageElement
 * @param maxSize maximum width or height in pixels / максимальная ширина или высота в пикселях
 * @param typeData optional MIME type for the resulting image / необязательный MIME-тип для результирующего изображения
 * @returns promise with resized image data as base64 or original source / промис с данными измененного изображения в формате base64 или исходным источником
 */
export async function resizeImage(
  image: HTMLImageElement | string,
  maxSize: number = 1280,
  typeData?: string
): Promise<string> {
  const src = getImageSrc(image)

  if (
    !isDomRuntime()
    || !src
    || maxSize <= 0
  ) {
    return src
  }

  if (
    typeof image !== 'string'
    && image.complete
    && image.naturalWidth > 0
    && image.naturalHeight > 0
  ) {
    try {
      return resizeImageByMax(image, maxSize, 'auto', typeData) ?? src
    } catch {
      return src
    }
  }

  return new Promise<string>((resolve) => {
    const imageElement = new Image()

    if (!src.startsWith('data:')) {
      imageElement.crossOrigin = 'anonymous'
    }

    const cleanup = () => {
      imageElement.onload = null
      imageElement.onerror = null
    }

    imageElement.onerror = () => {
      cleanup()
      resolve(src)
    }

    imageElement.onload = () => {
      try {
        resolve(resizeImageByMax(imageElement, maxSize, 'auto', typeData) ?? src)
      } catch {
        resolve(src)
      } finally {
        cleanup()
      }
    }

    imageElement.src = src
  })
}
