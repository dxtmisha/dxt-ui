import { MotionTransformEmitOptions } from '../MotionTransform';
import { Ref, ComputedRef } from 'vue';
/**
 * Class for managing the open/close state of ListGroup component.
 * Handles the visibility state and provides computed properties and methods
 * for controlling group expansion and collapse.
 *
 * Класс для управления состоянием открытия/закрытия компонента ListGroup.
 * Управляет состоянием видимости и предоставляет вычисляемые свойства и методы
 * для контроля разворачивания и сворачивания группы.
 */
export declare class ListGroupOpen<T extends {
    open?: boolean;
}> {
    protected readonly props: T;
    /**
     * Internal reactive state for group open/close status.
     * This state is independent from props and can be controlled programmatically.
     *
     * Внутреннее реактивное состояние для статуса открытия/закрытия группы.
     * Это состояние независимо от пропсов и может контролироваться программно.
     */
    readonly open: Ref<boolean, boolean>;
    /**
     * Constructor initializes the ListGroupOpen with component props.
     *
     * Конструктор инициализирует ListGroupOpen с пропсами компонента.
     * @param props - ListGroup component properties / свойства компонента ListGroup
     */
    constructor(props: T);
    /**
     * Returns information about the opening status.
     *
     * Возвращает информацию о статусе открытия.
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Events for opening the element.
     *
     * События для открытия элемента.
     * @param options event parameters/ параметры события
     */
    readonly onOpen: ({ open }: MotionTransformEmitOptions) => void;
}
