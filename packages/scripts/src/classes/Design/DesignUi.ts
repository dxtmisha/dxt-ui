// export:none

import { toKebabCase } from '@dxtmisha/functional-basic'

import { DesignComponent } from './DesignComponent'
import { LibraryItems } from '../Library/LibraryItems'
import { PropertiesCache } from '../Properties/PropertiesCache'
import { Styles } from '../Styles/Styles'

import { DesignWiki } from './DesignWiki'

import { LibraryMedia } from '../Library/LibraryMedia'
import { LibraryList } from '../Library/LibraryList'

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
    new DesignWiki().make()

    this.makeConstructorComponent()

    new LibraryMedia(this.components).make()
    new LibraryList(this.components).make()
  }

  /**
   * Creates or updates the list of components.
   *
   * Создает или обновляет список компонентов.
   */
  protected makeConstructorComponent(): this {
    const componentDef = this.component

    if (componentDef !== '') {
      new DesignComponent(componentDef).make()
    } else {
      this.components.getComponentList()
        .forEach((component) => {
          console.log(`Component update: ${component.alias}`)

          new DesignComponent(component.name).make()
        })
    }

    return this
  }
}
