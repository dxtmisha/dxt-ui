import { FigmaFrame } from './classes/FigmaFrame'

const frame = new FigmaFrame(figma.currentPage)
console.log('frame', figma.currentPage)

switch (figma.mode) {
  case 'inspect':
    figma.on('selectionchange', () => {
      console.log('selection changed', figma.currentPage.selection)
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
