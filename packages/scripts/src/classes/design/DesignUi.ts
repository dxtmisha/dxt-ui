import { PropertiesCache } from '../properties/PropertiesCache.ts'

export class DesignUi {
  /**
   * Constructor
   * @param name component name /<br>названия компонента
   */
  constructor(
    protected readonly name: string = ''
  ) {
  }

  /**
   * Initialization of the component.
   *
   * Инициализация компоненты.
   */
  make(): void {
    PropertiesCache.clear()
    console.log('asd')
  }
}
