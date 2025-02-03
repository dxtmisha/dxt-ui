import { PropertiesFile } from './PropertiesFile'

import {
  DESIGN_UI_FILE_CONFIG_NAME,
  DESIGN_UI_NAME_DEFAULT,
  type DesignUiConfig
} from '../../types/configTypes'

/**
 * A class for static methods of obtaining various data.
 *
 * Класс для статических методов получения различных данных.
 */
export class PropertiesTool {
  protected static config: DesignUiConfig

  /**
   * Returns the project name.
   *
   * Возвращает название проекта.
   */
  static getDesignName(): string {
    return this.config.name ?? DESIGN_UI_NAME_DEFAULT
  }

  static {
    const file = PropertiesFile.readFile<DesignUiConfig>(DESIGN_UI_FILE_CONFIG_NAME)

    if (file) {
      this.config = file
    } else {
      this.config = {} as DesignUiConfig
    }
  }
}
