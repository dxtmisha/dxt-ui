import { makeFigmaTexts } from './functions/makeFigmaTexts'

switch (figma.mode) {
  case 'inspect':
    makeFigmaTexts()
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
