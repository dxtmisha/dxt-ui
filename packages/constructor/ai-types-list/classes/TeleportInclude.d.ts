// md5:c2f5e4db66345e3bd25c925baf71a7c5
import { VNode } from 'vue';
import { RawChildren, RawSlots, RefOrNormal } from '@dxtmisha/functional';
/**
 * Class for handling teleportation of components, including SSR support.
 * It manages the target destination for the Teleport component, defaulting to a shared SSR-friendly body.
 *
 * Класс для обработки телепортации компонентов, включая поддержку SSR.
 * Он управляет целевым местом назначения для компонента Teleport, по умолчанию используя общее тело, дружественное к SSR.
 */
export declare class TeleportInclude {
    protected readonly toDefault: RefOrNormal<string>;
    /** SSR teleport target identifier / Идентификатор цели телепортации SSR */
    protected toSsr: RefOrNormal<string>;
    /**
     * Constructor
     *
     * Конструктор
     * @param toDefault default teleport target / цель телепортации по умолчанию
     */
    constructor(toDefault?: RefOrNormal<string>);
    /**
     * Teleport target.
     *
     * Цель телепортации.
     * @returns teleport target selector / селектор цели телепортации
     */
    get to(): string;
    /**
     * Checks if the element is a teleport item.
     *
     * Проверяет, является ли элемент элементом телепорта.
     * @param element element to check / элемент для проверки
     * @returns true if the element is a teleport item, false otherwise / true, если элемент является элементом телепорта, иначе false
     */
    isTeleportElement(element: HTMLElement): boolean;
    /**
     * Renders the Teleport component with the specified properties and children.
     *
     * Рендерит компонент Teleport с указанными свойствами и дочерними элементами.
     * @param children inner content of the Teleport / внутреннее содержимое Teleport
     * @param props additional properties for the Teleport / дополнительные свойства для Teleport
     * @returns array of virtual nodes / массив виртуальных узлов
     */
    render(children?: RawChildren | RawSlots, props?: Record<string, any>): VNode[];
}
