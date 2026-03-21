import { FigmaPostCode } from '@dxtmisha/figma'
import { TranslateFramesPlugin } from './classes/TranslateFramesPlugin'

import manifest from '../manifest.json'

FigmaPostCode.set(manifest.id)

switch (figma.mode) {
  case 'inspect':
    TranslateFramesPlugin.make()

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
