import { PropertiesFile } from '../Properties/PropertiesFile'

import { UI_DIR_PACKAGES } from '../../config'
import { PackageInitItem } from './PackageItem.ts'

export class PackageInit {
  constructor(
    protected readonly type: string,
    protected readonly templates?: string
  ) {
  }

  make() {
    console.log(`Initializing package of type: ${this.type} with templates: ${this.templates}`)

    this.getDirs()
      .forEach((dir) => {
        new PackageInitItem([UI_DIR_PACKAGES, dir], this.type, this.templates).make()
      })
  }

  protected getDirs(): string[] {
    return PropertiesFile.readDirOnlyRecursive(UI_DIR_PACKAGES)
      .filter(
        path => PropertiesFile.readDir([UI_DIR_PACKAGES, path]).length === 0
      )
  }
}
