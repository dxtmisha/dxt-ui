import { FigmaFrame } from '../classes/FigmaFrame'

/**
 * Type for Figma nodes/
 * Тип для узлов Figma
 */
export type UiFigmaNode
  = ChildrenMixin
    | SceneNode
    | DefaultShapeMixin
    | DocumentNode
    | PageNode
    | FrameNode
    | SectionNode
    | TextNode
    | BaseNode

/**
 * Type for representing a text node and its IDs/
 * Тип для представления текстового узла и его идентификаторов
 */
export type UiFigmaItemText = {
  /** Node IDs/ Идентификаторы узлов */
  id: string[]
  /** Text content/ Текстовое содержимое */
  text: string
}

/**
 * Possible formats for exporting Figma nodes/
 * Возможные форматы для экспорта узлов Figma
 */
export type UiFigmaExportFormat = 'PNG'
  | 'JPG'
  | 'SVG'
  | 'PDF'
  | 'JSON_REST_V1'

/**
 * Type for message data containing frame information, text items, and screenshots/
 * Тип для данных сообщения, содержащих информацию о фрейме, текстовые элементы и скриншоты
 */
export type UiFigmaMessageTexts = {
  /** Figma frame item/ Элемент фрейма Figma */
  frame: FigmaFrame
  /** List of text items/ Список текстовых элементов */
  texts: UiFigmaItemText[]
  /** Screenshots in Uint8Array format/ Скриншоты в формате Uint8Array */
  screenshot: Uint8Array[]
}
