import { FigmaPostCode } from '@dxtmisha/figma'
import { FigmaFramesSelected, FigmaTopLevelFrames, setupClientStorage, setupFrameSelectionByMessage, setupStorage } from '@dxtmisha/figma-code'

import manifest from '../manifest.json'

FigmaPostCode.set(manifest.id)

switch (figma.mode) {
  case 'inspect':
    FigmaTopLevelFrames.send()
    FigmaFramesSelected.send()

    setupStorage()
    setupClientStorage()
    setupFrameSelectionByMessage()

    figma.showUI(__html__)
    break
  case 'codegen':
    figma.codegen.on('generate', async () => {
      return [
        {
          title: 'Test generate',
          language: 'PLAINTEXT',
          code: 'code test'
        }
      ]
    })
    break
}
