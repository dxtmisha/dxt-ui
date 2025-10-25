// export:none

import { isFilled } from '@dxtmisha/functional'

import { PropertiesFile } from '../Properties/PropertiesFile'
import { PropertiesCache } from '../Properties/PropertiesCache'
import { DesignConstructor } from './DesignConstructor'

import { UI_DIR_CONSTRUCTOR, UI_DIR_IN } from '../../config'

export class DesignConstructors {
  constructor(
    protected readonly name?: string
  ) {
  }

  make(): void {
    PropertiesCache.clear()

    if (isFilled(this.name)) {
      new DesignConstructor(this.name).make()
    } else {
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
