/**
 * AI image item representing a base64 encoded image with MIME type.
 *
 * Элемент изображения AI, представляющий base64-кодированное изображение с MIME-типом.
 */
export type AiImageItem = {
  /** Image MIME type / MIME-тип изображения */
  mime: string

  /** Base64 encoded image string / Строка изображения в кодировке base64 */
  base64: string
}

/**
 * List of AI image items.
 *
 * Список элементов изображений AI.
 */
export type AiImageList = AiImageItem[]
