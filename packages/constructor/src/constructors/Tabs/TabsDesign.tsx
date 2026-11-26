import { h, type VNode } from 'vue'
import {
  type ConstrOptions,
  type ConstrStyles,
  DesignConstructorAbstract,
  forOwn,
  isFunction
} from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { Tabs } from './Tabs'

import {
  type TabsPropsBasic
} from './props'
import {
  type TabsClasses,
  type TabsComponents,
  type TabsEmits,
  type TabsExpose,
  type TabsSlots
} from './types'

/**
 * TabsDesign handles the visual layout, VNode rendering, and ARIA tabpanel slot integration of Tabs.
 * It composes TabsNavigation and MotionAxis sub-components to display interactive tabbed content.
 *
 * TabsDesign управляет визуальной структурой, рендерингом VNode и интеграцией слотов ARIA tabpanel компонента Tabs.
 * Объединяет субкомпоненты TabsNavigation и MotionAxis для отображения интерактивного содержимого вкладок.
 *
 * @template COMP type describing component configuration / тип, описывающий конфигурацию компонентов
 * @template EXPOSE type describing exposed API structure / тип, описывающий структуру экспортируемого API
 * @template CLASSES type describing CSS classes map / тип, описывающий карту CSS-классов
 * @template P type describing properties interface / тип, описывающий интерфейс свойств
 */
export class TabsDesign<
  COMP extends TabsComponents,
  EXPOSE extends TabsExpose,
  CLASSES extends TabsClasses,
  P extends TabsPropsBasic
> extends DesignConstructorAbstract<
    HTMLDivElement,
    COMP,
    TabsEmits,
    EXPOSE,
    TabsSlots,
    CLASSES,
    P
  > {
  /** Tabs business logic orchestrator instance / Экземпляр оркестратора бизнес-логики Tabs */
  protected readonly item: Tabs

  /**
   * Constructor for initializing the Tabs design renderer.
   *
   * Конструктор для инициализации отрисовщика дизайна Tabs.
   * @param name component tag class name / имя класса тега компонента
   * @param props reactive input properties / реактивные входные свойства
   * @param options additional construction configuration options / дополнительные параметры конфигурации сборки
   * @param ItemConstructor business logic orchestrator constructor / конструктор оркестратора бизнес-логики
   */
  constructor(
    name: string,
    props: Readonly<P>,
    options?: ConstrOptions<COMP, TabsEmits, P>,
    ItemConstructor: typeof Tabs = Tabs
  ) {
    super(
      name,
      props,
      options
    )

    this.item = new ItemConstructor(
      this.props,
      this.element,
      this.naming,
      this.components,
      this.slots,
      this.emits
    )
  }

  /**
   * Initializes exposed API properties and methods.
   *
   * Инициализирует экспортируемые свойства и методы API.
   * @returns object containing exposed API methods / объект, содержащий экспортируемые методы API
   */
  protected initExpose(): EXPOSE {
    return this.item.expose as EXPOSE
  }

  /**
   * Generates and returns dynamic CSS classes map for rendering.
   *
   * Генерирует и возвращает карту динамических CSS-классов для рендеринга.
   * @returns object containing CSS class mappings / объект, содержащий сопоставления CSS-классов
   */
  protected initClasses(): Partial<CLASSES> {
    return {
      main: {},
      ...{
        // :classes [!] System label / Системная метка
        slide: this.naming.getSubClass('slide')
        // :classes [!] System label / Системная метка
      }
    } as Partial<CLASSES>
  }

  /**
   * Generates and returns custom inline CSS styles map.
   *
   * Генерирует и возвращает карту пользовательских встроенных стилей CSS.
   * @returns object containing inline CSS rules / объект, содержащий встроенные правила CSS
   */
  protected initStyles(): ConstrStyles {
    return {}
  }

  /**
   * Main entry point for rendering the Tabs component navigation and slide panels.
   *
   * Главная точка входа для рендеринга навигации и панелей слайдов компонента Tabs.
   * @returns array of VNodes representing navigation and motion axis panels / массив VNode, представляющих навигацию и панели оси движения
   */
  protected initRender(): VNode[] {
    return [
      ...this.item.callInstance('tabsNavigation', item => item.render(), []),
      ...this.item.i('motionAxis').render(this.renderSlides())
    ]
  }

  /**
   * Wraps component slots into accessible ARIA tabpanel VNode render functions for MotionAxis.
   *
   * Оборачивает слоты компонента в функции рендеринга доступных ARIA tabpanel VNode для MotionAxis.
   * @returns map of slot render functions or undefined / карта функций рендеринга слотов или undefined
   */
  readonly renderSlides = (): Record<string, () => VNode> | undefined => {
    if (this.slots) {
      const slots: Record<string, () => VNode> = {}

      forOwn(this.slots, (slot, key) => {
        if (isFunction(slot)) {
          slots[key] = () => {
            const tabId = this.item.callInstance('tabsNavigation', item => item.ids?.[key])

            return h(
              'div',
              {
                class: this.classes?.value.slide,
                ...AriaStaticInclude.role('tabpanel'),
                ...AriaStaticInclude.labelledby(tabId)
              },
              this.initSlot(key)
            )
          }
        }
      })

      return slots
    }

    return undefined
  }
}
