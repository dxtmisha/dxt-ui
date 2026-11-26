import { type ConstrOptions } from '@dxtmisha/functional'

import { SegmentControl } from './SegmentControl'
import { TabsNavigationDesign } from '../TabsNavigation'

import {
  type SegmentControlPropsBasic
} from './props'
import {
  type SegmentControlClasses,
  type SegmentControlComponents,
  type SegmentControlEmits,
  type SegmentControlExpose
} from './types'

/**
 * SegmentControlDesign handles the visual layout, HTML rendering, and slot integration of SegmentControl.
 * Extends TabsNavigationDesign and renders each navigation item using the segmentControlItem sub-component.
 *
 * SegmentControlDesign управляет визуальной разметкой, HTML-рендерингом и интеграцией слотов SegmentControl.
 * Расширяет TabsNavigationDesign и отрисовывает каждый элемент навигации с помощью субкомпонента segmentControlItem.
 *
 * @template COMP type describing component configuration / тип, описывающий конфигурацию компонентов
 * @template EXPOSE type describing exposed API structure / тип, описывающий структуру экспортируемого API
 * @template CLASSES type describing CSS classes map / тип, описывающий карту CSS-классов
 * @template P type describing properties interface / тип, описывающий интерфейс свойств
 */
export class SegmentControlDesign<
  COMP extends SegmentControlComponents,
  EXPOSE extends SegmentControlExpose,
  CLASSES extends SegmentControlClasses,
  P extends SegmentControlPropsBasic
> extends TabsNavigationDesign<
    COMP,
    EXPOSE,
    CLASSES,
    P
  > {
  /** Sub-component key used for rendering individual segment items / Ключ субкомпонента для рендеринга отдельных элементов сегментов */
  protected override readonly itemComponent: string = 'segmentControlItem'

  /**
   * Constructor for initializing the segment control design renderer.
   *
   * Конструктор для инициализации отрисовщика дизайна сегментированного управления.
   * @param name component class name / название класса компонента
   * @param props reactive input properties / реактивные входные свойства
   * @param options list of additional parameters / список дополнительных параметров
   * @param ItemConstructor business logic orchestrator constructor / конструктор оркестратора бизнес-логики
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, SegmentControlEmits, P>,
    ItemConstructor: typeof SegmentControl = SegmentControl
  ) {
    super(
      name,
      props,
      options,
      ItemConstructor
    )
  }
}
