import { MotionTransformControlItem } from '../MotionTransform';
/** Interface for describing which components need to be connected for ListGroup work/ Интерфейс для описания, какие компоненты надо подключить для работы ListGroup */
export type ListGroupComponentInclude = {
    /** ListGroup component configuration/ Конфигурация компонента группы списка */
    listGroup?: object;
};
/** Interface for including ListGroup slot properties/ Интерфейс для включения свойств слота ListGroup */
export type ListGroupSlotsPropsInclude = MotionTransformControlItem & {
    /** Whether the group is open/ Открыта ли группа */
    open: boolean;
};
