import { FigmaFrame } from './classes/FigmaFrame'

switch (figma.mode) {
  case 'inspect':
    figma.on('selectionchange', () => {
      const frame = new FigmaFrame(figma.currentPage)
      console.log('selection changed', frame.getTexts())
    })

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
