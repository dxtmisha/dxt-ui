import * as functional from '@dxtmisha/functional'

import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIRS_LIBRARY } from '../../config'

export class BuildFunctional {
  constructor() {
  }

  make(): void {
    console.log('Build functional...')

    const list = this.getList()
    const code: string[] = [
      'export type * from \'@dxtmisha/functional\'',
      ''
    ]

    list.sort()
    list.forEach((item) => {
      console.log(`-- ${item}`)

      code.push(`export { ${item} } from '@dxtmisha/functional'`)
    })

    code.push('')
    PropertiesFile.writeByPath(
      [...UI_DIRS_LIBRARY, 'functional.ts'],
      code.join('\n')
    )

    console.log('...end')
  }

  getList(): string[] {
    return Object.keys(functional)
  }
}
