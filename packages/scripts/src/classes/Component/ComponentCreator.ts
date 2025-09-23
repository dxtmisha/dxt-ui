import { getComponentPaths } from '../../functions/getComponentPaths'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { ComponentItem } from './ComponentItem'

import { UI_DIRS_COMPONENTS } from '../../config'

export class ComponentCreator {
  constructor() {
  }

  make(): void {
    this
      .getDirs()
      .forEach(path => new ComponentItem(path).make())
  }

  protected getDirs(): string[] {
    return PropertiesFile.readDirOnlyRecursive(UI_DIRS_COMPONENTS)
      .filter(
        path => PropertiesFile.readDir(getComponentPaths(path)).length === 0
      )
  }
}
