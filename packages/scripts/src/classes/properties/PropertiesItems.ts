import { type PropertyList } from '../../types/propertyTypes.ts'

/**
 * Class for working with a list of all properties.
 *
 * Класс для работы со списком всех свойств.
 */
export class PropertiesItems {
  /**
   * Constructor
   * @param properties array with all property records / массив со всеми записями свойств
   */
  constructor(
    private readonly properties: PropertyList
  ) {
  }
}
