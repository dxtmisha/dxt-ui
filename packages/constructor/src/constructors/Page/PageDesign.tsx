import type { ConstrOptions } from '@dxtmisha/functional'

import { BlockDesign } from '../Block'
import { Page } from './Page'

import type { PagePropsBasic } from './props'
import type {
  PageClasses,
  PageComponents,
  PageEmits,
  PageExpose
} from './types'

/**
 * PageDesign component class for rendering the page component layout and slots.
 * Extends BlockDesign using the Page logic orchestrator and page semantic defaults.
 *
 * Класс компонента PageDesign для рендеринга разметки и слотов компонента страницы.
 * Расширяет BlockDesign с использованием оркестратора логики Page и семантических значений страницы по умолчанию.
 */
export class PageDesign<
  COMP extends PageComponents,
  EXPOSE extends PageExpose,
  CLASSES extends PageClasses,
  P extends PagePropsBasic
> extends BlockDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /**
   * Constructor for creating a PageDesign instance.
   *
   * Конструктор для создания экземпляра PageDesign.
   * @param name class name / название класса
   * @param props properties / свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor page item class / класс элемента страницы
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, PageEmits, P>,
    ItemConstructor: typeof Page = Page
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
