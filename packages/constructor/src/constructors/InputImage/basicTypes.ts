import type { ConstrBind } from '@dxtmisha/functional'

import type { CropAreaCoordinator } from '../CropArea'

import type { InputImagePropsBasic } from './props'
import type { InputImageEmits } from './types'

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

/**
 * Event parameters passed with InputImage events.
 *
 * Параметры события, передаваемые при событиях InputImage.
 */
export type InputImageEventParameters = {
  /** Image source string / Строка источника изображения */
  value?: string

  /** Crop coordinates / Координаты кадрирования */
  crop?: CropAreaCoordinator

  /** Selected or dropped file list / Список выбранных или сброшенных файлов */
  files?: FileList
}

/**
 * InputImage component dependency registration.
 *
 * Регистрация зависимости компонента InputImage.
 */
export type InputImageComponentInclude = {
  /** InputImage component configuration / Конфигурация компонента InputImage */
  inputImage?: object
}

/**
 * Props for embedding InputImage inside another component.
 *
 * Свойства для встраивания InputImage внутри другого компонента.
 */
export type InputImagePropsInclude<
  InputImage extends InputImagePropsBasic = InputImagePropsBasic
> = {
  /** InputImage value or attributes / Значение или атрибуты InputImage */
  inputImage?: boolean | ConstrBind<InputImage>

  /** Bound attributes passed directly to InputImage / Атрибуты привязки, передаваемые напрямую в InputImage */
  inputImageAttrs?: ConstrBind<InputImage>
}

/**
 * Emits interface for InputImage inclusion.
 *
 * Интерфейс событий для включения InputImage.
 */
export type InputImageEmitsInclude = InputImageEmits
