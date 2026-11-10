// export:none

import { forEach, uint8ArrayToBase64 } from '@dxtmisha/functional-basic'
import { AiAbstract } from '@dxtmisha/scripts/ai'

import { FIGMA_IMAGE_TYPE } from '../config'
import text from '../media/prompt/text.ru'
import type { UiFigmaMessageTexts } from '../types/figmaTypes'

/**
 * Class for processing Figma text nodes with AI.
 *
 * Класс для обработки текстовых узлов Figma с помощью ИИ.
 */
export class FigmaAiText {
  /**
   * Constructor
   * @param ai AI abstract instance / экземпляр абстракции ИИ
   * @param data Figma message texts data / данные текстов сообщений Figma
   */
  constructor(
    protected readonly ai: AiAbstract,
    protected readonly data: UiFigmaMessageTexts
  ) {
  }

  /**
   * Processes texts and generates translations or enhancements via AI.
   *
   * Обрабатывает тексты и генерирует переводы или улучшения с помощью ИИ.
   * @returns current instance / текущий экземпляр
   */
  async make(): Promise<this> {
    this.ai.resetImages()
    this.makeImage()
    await this.ai.generate(text.replace('[texts]', this.initTexts()))

    return this
  }

  /**
   * Formats the list of texts into a multi-line string.
   *
   * Форматирует список текстов в многострочную строку.
   * @returns formatted texts / отформатированные тексты
   */
  protected initTexts(): string {
    return forEach(
      this.data.texts,
      (item) => {
        return item.text
      }
    )
      .join('\r\n')
  }

  /**
   * Adds screenshots to the AI instance.
   *
   * Добавляет скриншоты в экземпляр ИИ.
   * @returns current instance / текущий экземпляр
   */
  protected makeImage(): this {
    this.data.screenshot.forEach(
      (screenshot) => {
        this.ai.addImage({
          mime: FIGMA_IMAGE_TYPE,
          base64: uint8ArrayToBase64(screenshot)
        })
      }
    )

    return this
  }
}
