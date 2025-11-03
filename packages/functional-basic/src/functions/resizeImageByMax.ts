import { getElementImage } from './getElementImage'

/**
 * Resize type for image scaling.
 *
 * Тип изменения размера для масштабирования изображения.
 */
type ResizeImageByMaxType = 'auto' | 'width' | 'height'

/**
 * Determines if the image should be scaled by width.
 *
 * Определяет, должно ли изображение масштабироваться по ширине.
 * @param image image element / элемент изображения
 * @param type resize type / тип изменения размера
 */
function isByWidth(
  image: HTMLImageElement,
  type: ResizeImageByMaxType = 'auto'
) {
  switch (type) {
    case 'auto':
      return image.naturalWidth >= image.naturalHeight
    case 'width':
      return true
    case 'height':
      return false
  }
}

/**
 * Resizes an image to fit within a maximum size constraint.
 *
 * Изменяет размер изображения в соответствии с ограничением максимального размера.
 * @param image image element or URL / элемент изображения или URL
 * @param maxSize maximum size for width or height / максимальный размер ширины или высоты
 * @param type resize type (auto, width, height) / тип изменения размера (auto, width, height)
 * @param typeData optional data type for the resulting image /
 * необязательный тип данных для результирующего изображения
 */
export function resizeImageByMax(
  image: HTMLImageElement | string,
  maxSize: number,
  type: ResizeImageByMaxType = 'auto',
  typeData?: string
): string | undefined {
  const element = getElementImage(image)

  if (
    element
    && (
      (element.naturalWidth > maxSize && (type === 'auto' || type === 'width'))
      || (element.naturalHeight > maxSize && (type === 'auto' || type === 'height'))
    )
  ) {
    const is = isByWidth(element, type)
    const canvas = document.createElement('canvas')?.getContext('2d')

    if (canvas) {
      canvas.canvas.width = is ? maxSize : (element.naturalWidth / element.naturalHeight * maxSize)
      canvas.canvas.height = is ? (element.naturalHeight / element.naturalWidth * maxSize) : maxSize
      canvas.drawImage(element, 0, 0, canvas.canvas.width, canvas.canvas.height)

      return canvas.canvas.toDataURL(typeData)
    }
  }

  return undefined
}
