switch (figma.mode) {
  case 'inspect':
    figma.showUI(__html__)
    break
  case 'codegen':
    figma.codegen.on('generate', async () => {
      return [
        {
          title: 'Test generate',
          language: 'PLAINTEXT',
          code: 'code'
        }
      ]
    })
    break
}
