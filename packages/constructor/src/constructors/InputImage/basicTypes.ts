import type { CropAreaCoordinator } from '../CropArea'

/**
 * Image input value structure with image source and crop coordinates.
 *
 * Структура значения ввода изображения с источником изображения и координатами кадрирования.
 */
export type InputImageValue = {
  /** Image source string (URL, data URL, or base64) / Строка источника изображения (URL, data URL или base64) */
  value?: string

  /** Crop coordinates [top, right, bottom, left] / Координаты кадрирования [сверху, справа, снизу, слева] */
  crop?: CropAreaCoordinator
}

/**
 * Raw input item type, either structured value, plain string, or undefined.
 *
 * Тип необработанного элемента ввода: структурированное значение, простая строка или undefined.
 */
export type InputImageItem = InputImageValue | string | undefined
