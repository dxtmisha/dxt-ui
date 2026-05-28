import { h, inject, Teleport, type VNode } from 'vue'
import {
  domQuerySelector,
  getRef,
  type RawChildren,
  type RawSlots,
  type RefOrNormal
} from '@dxtmisha/functional'

/** Default teleport target name / Имя цели телепортации по умолчанию */
const TELEPORT_BODY_NAME = 'body'
/** Key for injecting SSR teleport target / Ключ для внедрения цели телепортации SSR */
const TELEPORT_BODY_KEY = '__ui-teleport-ssr-body__'

/**
 * Class for handling teleportation of components, including SSR support.
 * It manages the target destination for the Teleport component, defaulting to a shared SSR-friendly body.
 *
 * Класс для обработки телепортации компонентов, включая поддержку SSR.
 * Он управляет целевым местом назначения для компонента Teleport, по умолчанию используя общее тело, дружественное к SSR.
 */
export class TeleportInclude {
  /** SSR teleport target identifier / Идентификатор цели телепортации SSR */
  protected toSsr = inject<RefOrNormal<string>>(TELEPORT_BODY_KEY, TELEPORT_BODY_NAME)

  /**
   * Constructor
   *
   * Конструктор
   * @param toDefault default teleport target / цель телепортации по умолчанию
   */
  constructor(
    protected readonly toDefault: RefOrNormal<string> = TELEPORT_BODY_NAME
  ) {
  }

  /**
   * Teleport target.
   *
   * Цель телепортации.
   * @returns teleport target selector / селектор цели телепортации
   */
  get to(): string {
    const to = getRef(this.toDefault)

    if (to === TELEPORT_BODY_NAME) {
      return getRef(this.toSsr)
    }

    return to
  }

  /**
   * Checks if the element is a teleport item.
   *
   * Проверяет, является ли элемент элементом телепорта.
   * @param element element to check / элемент для проверки
   * @returns true if the element is a teleport item, false otherwise / true, если элемент является элементом телепорта, иначе false
   */
  isTeleportElement(element: HTMLElement): boolean {
    return domQuerySelector(this.to) === element
  }

  /**
   * Renders the Teleport component with the specified properties and children.
   *
   * Рендерит компонент Teleport с указанными свойствами и дочерними элементами.
   * @param children inner content of the Teleport / внутреннее содержимое Teleport
   * @param props additional properties for the Teleport / дополнительные свойства для Teleport
   * @returns array of virtual nodes / массив виртуальных узлов
   */
  render(
    children?: RawChildren | RawSlots,
    props: Record<string, any> = {}
  ): VNode[] {
    if (children) {
      return [
        h(
          Teleport,
          {
            ...props,
            key: 'teleport',
            to: this.to
          },
          children
        )
      ]
    }

    return []
  }
}
