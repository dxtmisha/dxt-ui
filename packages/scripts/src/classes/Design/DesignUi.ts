// export:none

import { toKebabCase } from '@dxt-ui/functional'

import { DesignComponent } from './DesignComponent'
import { LibraryItems } from '../Library/LibraryItems'
import { PropertiesCache } from '../Properties/PropertiesCache'
import { PropertiesConfig } from '../Properties/PropertiesConfig'
import { Styles } from '../Styles/Styles'

export class DesignUi {
  protected readonly components: LibraryItems

  /**
   * Constructor
   * @param name component name/ названия компонента
   */
  constructor(
    protected readonly name: string = ''
  ) {
    this.components = new LibraryItems()
  }

  /**
   * Returns the component name by its name.
   *
   * Возвращает название компонента по имени.
   */
  protected get component(): string {
    return toKebabCase(this.name).trim()
  }

  /**
   * Initialization of the component.
   *
   * Инициализация компоненты.
   */
  make(): void {
    PropertiesCache.clear()

    new Styles().make()

    this.makeConstructorComponent()
  }

  /**
   * Creates or updates the list of components.
   *
   * Создает или обновляет список компонентов.
   */
  protected makeConstructorComponent(): this {
    const design = PropertiesConfig.getDesignName()
    const componentDef = this.component

    if (componentDef !== '') {
      // new DesignConstructor(`d.${componentDef}`).make()
      new DesignComponent(componentDef).make()
    } else {
      /*
      designs.forEach((design) => {
        if (this.isDesign(design.name)) {
          new DesignIcons(design.name).make()

          design.components.forEach((component) => {
            if (this.isComponent(component.name)) {
              console.log(`Component update: ${component.alias}`)

              new DesignConstructor(`d.${component.name}`).make()
              new DesignComponent(component.alias).make()
            }
          })
        }
      })
      */
    }

    return this
  }
}
