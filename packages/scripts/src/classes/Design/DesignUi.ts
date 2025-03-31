import { PropertiesCache } from '../Properties/PropertiesCache'
import { Styles } from '../Styles/Styles'

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

    new Styles().make()
  }
}
