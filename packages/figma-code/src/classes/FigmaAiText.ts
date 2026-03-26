import { AiAbstract } from '@dxtmisha/scripts/ai'
import type { UiFigmaMessageTexts } from '../types/figmaTypes'
import { FIGMA_IMAGE_TYPE } from '../config'
import { forEach, uint8ArrayToBase64 } from '@dxtmisha/functional-basic'

import text from '../media/prompt/text.ru'

export class FigmaAiText {
  constructor(
    protected readonly ai: AiAbstract,
    protected readonly data: UiFigmaMessageTexts
  ) {
  }

  async make(): Promise<this> {
    this.ai.resetImages()
    this.makeImage()
    console.warn('texts', text.replace('[texts]', this.initTexts()))

    console.log(
      'getImages',
      this.ai.getImages(),
      await this.ai.generate(text.replace('[texts]', this.initTexts()))
    )

    return this
  }

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

  protected initTexts(): string {
    return forEach(
      this.data.texts,
      (text) => {
        return text.text
      }
    )
      .join('\r\n')
  }
}
