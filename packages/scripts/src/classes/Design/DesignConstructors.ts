import { isFilled } from '@dxt-ui/functional'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { DesignConstructor } from './DesignConstructor'

import { UI_DIR_CONSTRUCTOR, UI_DIR_IN } from '../../config'
import { PropertiesCache } from '../Properties/PropertiesCache.ts'

export class DesignConstructors {
  constructor(
    protected readonly name?: string
  ) {
  }

  make(): void {
    if (isFilled(this.name)) {
      new DesignConstructor(this.name).make()
    } else {
      PropertiesCache.clear()

      this.getComponents()
        .forEach((component) => {
          console.log(`Constructor update: ${component}`)
          new DesignConstructor(component).make()
        })
    }
  }

  getComponents(): string[] {
    return PropertiesFile.readDir(this.getDir())
  }

  protected getDir(): string[] {
    return [
      PropertiesFile.getRoot(),
      UI_DIR_IN,
      UI_DIR_CONSTRUCTOR
    ]
  }
}
