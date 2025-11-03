import { makeFigmaTexts } from './functions/makeFigmaTexts'
import { forEach } from '@dxtmisha/functional-basic'

switch (figma.mode) {
  case 'inspect':
    forEach([1, 2, 3], (node) => {
      const a = { a: 1, b: 2 }
      const b = { c: 1, f: 2 }
      console.log('node', node, Object.assign({}, a, b),
        Object(a), Object(a) === a
      )
    })

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
