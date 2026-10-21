import { getElementImage } from './getElementImage'
import { isDomRuntime } from './isDomRuntime'

/**
 * Resize type for image scaling.
 *
 * Тип изменения размера для масштабирования изображения.
 */
export type ResizeImageByMaxType = 'auto' | 'width' | 'height'

/**
 * Determines if the image should be scaled by width.
 *
 * Определяет, должно ли изображение масштабироваться по ширине.
 * @param image image element / элемент изображения
 * @param type resize type / тип изменения размера
 * @returns boolean flag indicating if width is the scaling base / флаг, указывающий, масштабировать ли по ширине
 */
function isByWidth(
  image: HTMLImageElement,
  type: ResizeImageByMaxType = 'auto'
): boolean {
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
 * @param quality optional quality factor between 0 and 1 for lossy formats (JPEG/WebP) /
 * необязательный коэффициент качества от 0 до 1 для форматов с потерями (JPEG/WebP)
 * @returns base64 image data URL or undefined if resizing is not needed or impossible /
 * строка base64 data URL изображения или undefined, если изменение размера не требуется или невозможно
 *
 * @remarks
 * This function is synchronous and requires the image to be fully loaded with valid `naturalWidth` and `naturalHeight`.
 *
 * **Why it returns `undefined`:**
 * The function serves as a low-level transformation operation. It returns a newly generated Base64 Data URL only when the image actually exceeds `maxSize` and is scaled via canvas.
 * If the image dimensions are already within `maxSize`, or if the image is not loaded / DOM context is unavailable, it intentionally returns `undefined`.
 * This signals to the caller that no modification occurred, avoiding unnecessary Canvas re-encoding (which wastes CPU/memory, causes lossy compression, and increases payload size).
 *
 * For high-level use where you always need an image string with a fallback to the original source, use `resizeImage` instead.
 *
 * Функция работает синхронно и ожидает полностью загруженное изображение с известными `naturalWidth` и `naturalHeight`.
 *
 * **Почему возвращается `undefined`:**
 * Функция является низкоуровневой операцией трансформации. Она возвращает сгенерированный Base64 Data URL только тогда, когда изображение действительно превышает `maxSize` и масштабируется через canvas.
 * Если размеры изображения уже укладываются в `maxSize`, либо если изображение не загружено или отсутствует DOM-окружение, функция намеренно возвращает `undefined`.
 * Это сообщает вызывающему коду, что модификация не выполнялась, и предотвращает избыточную перекодировку через Canvas (которая расходует ресурсы CPU/памяти, приводит к потерям качества и увеличивает размер данных).
 *
 * Для прикладных сценариев, где всегда требуется готовая строка с фолбэком на исходное изображение, используйте функцию `resizeImage`.
 */
export function resizeImageByMax(
  image: HTMLImageElement | string,
  maxSize: number,
  type: ResizeImageByMaxType = 'auto',
  typeData?: string,
  quality?: number
): string | undefined {
  const element = getElementImage(image)

  if (
    isDomRuntime()
    && maxSize > 0
    && element
    && element.naturalWidth > 0
    && element.naturalHeight > 0
    && (
      (element.naturalWidth > maxSize && (type === 'auto' || type === 'width'))
      || (element.naturalHeight > maxSize && (type === 'auto' || type === 'height'))
    )
  ) {
    const isScaledByWidth = isByWidth(element, type)
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (context) {
      canvas.width = Math.max(
        1,
        Math.round(isScaledByWidth ? maxSize : (element.naturalWidth / element.naturalHeight) * maxSize)
      )
      canvas.height = Math.max(
        1,
        Math.round(isScaledByWidth ? (element.naturalHeight / element.naturalWidth) * maxSize : maxSize)
      )

      context.imageSmoothingEnabled = true
      context.imageSmoothingQuality = 'high'
      context.drawImage(element, 0, 0, canvas.width, canvas.height)

      try {
        return quality !== undefined
          ? canvas.toDataURL(typeData, quality)
          : canvas.toDataURL(typeData)
      } catch {
        return undefined
      }
    }
  }

  // Resizing was not needed (dimensions are within maxSize) or not possible (not loaded / no DOM context)
  // Изменение размера не требовалось (размеры в пределах maxSize) или невозможно (не загружено / нет DOM-контекста)
  return undefined
}
