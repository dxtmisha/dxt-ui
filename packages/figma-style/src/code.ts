import { FigmaPostCode } from '@dxtmisha/figma'
import { makeFigmaFrameSelection, setupFrameStyles } from '@dxtmisha/figma-code'

import manifest from '../manifest.json'

FigmaPostCode.set(manifest.id)

switch (figma.mode) {
  case 'inspect':
    makeFigmaFrameSelection()
    setupFrameStyles()

    figma.showUI(__html__)
    break
}
