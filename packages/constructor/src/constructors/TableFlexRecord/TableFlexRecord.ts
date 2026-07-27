import type { Ref, ToRefs } from 'vue'
import type { ConstrEmit, DesignComp } from '@dxtmisha/functional'

import { AriaStaticInclude } from '../../classes/AriaStaticInclude'
import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude'

import { TableRecord } from '../TableRecord'
import { TableFlexRecordLazy } from './TableFlexRecordLazy'

import type { TableFlexRecordComponents, TableFlexRecordEmits, TableFlexRecordSlots } from './types'
import type { TableFlexRecordProps } from './props'

/**
 * Class representing a flex table record constructor (TableFlexRecord).
 * Coordinates rendering of flex table cells and header items within a flex row with lazy loading support.
 *
 * Класс, представляющий конструктор записи флекс-таблицы (TableFlexRecord).
 * Координирует рендеринг ячеек флекс-таблицы и элементов шапки в пределах флекс-строки с поддержкой ленивой загрузки.
 */
export class TableFlexRecord extends TableRecord {
  /** Client-only rendering include / Подключение рендеринга только на клиенте */
  readonly clientOnly: ClientOnlyInclude
  /** Table record lazy loading handler instance / Экземпляр обработчика ленивой загрузки записи таблицы */
  readonly lazy: TableFlexRecordLazy

  /**
   * Constructor for TableFlexRecord.
   *
   * Конструктор для TableFlexRecord.
   * @param props input properties / входные свойства
   * @param refs input properties in the form of reactive references / входные свойства в виде реактивных ссылок
   * @param element target HTML element / целевой HTML-элемент
   * @param classDesign design system prefix / префикс дизайн-системы
   * @param className base CSS class name / базовое имя CSS-класса
   * @param components object for working with components / объект для работы с компонентами
   * @param slots object for working with slots / объект для работы со слотами
   * @param emits callback function triggered on events / функция обратного вызова, запускаемая при событиях
   * @param constructors optional class constructor overrides / необязательные переопределения конструкторов классов
   * @param constructors.ClientOnlyIncludeConstructor class for client-only rendering handler / класс для обработчика рендеринга только на клиенте
   * @param constructors.TableFlexRecordLazyConstructor class for lazy loading handler / класс для обработчика ленивой загрузки
   */
  constructor(
    props: TableFlexRecordProps,
    refs: ToRefs<TableFlexRecordProps>,
    element: Ref<HTMLElement | undefined>,
    classDesign: string,
    className: string,
    components?: DesignComp<TableFlexRecordComponents, TableFlexRecordProps>,
    slots?: TableFlexRecordSlots,
    emits?: ConstrEmit<TableFlexRecordEmits>,
    constructors: {
      ClientOnlyIncludeConstructor?: typeof ClientOnlyInclude
      TableFlexRecordLazyConstructor?: typeof TableFlexRecordLazy
    } = {}
  ) {
    super(
      props,
      refs,
      element,
      classDesign,
      className,
      components,
      slots,
      emits
    )

    const {
      ClientOnlyIncludeConstructor = ClientOnlyInclude,
      TableFlexRecordLazyConstructor = TableFlexRecordLazy
    } = constructors

    this.clientOnly = new ClientOnlyIncludeConstructor()
    this.lazy = new TableFlexRecordLazyConstructor(
      props,
      element,
      className,
      this.clientOnly
    )
  }

  /**
   * Computed HTML attributes and bindings for the flex table record element.
   *
   * Вычисляемые HTML-атрибуты и привязки для элемента записи флекс-таблицы.
   * @returns HTML attributes and bindings object / объект HTML-атрибутов и привязок
   */
  override get binds(): Record<string, any> {
    return {
      ...super.binds,
      ...AriaStaticInclude.role('row')
    }
  }
}
