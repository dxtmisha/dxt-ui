/**
 * Initializes the global unique identifier generator for elements.
 * Uses Vue's `useId` if called within a component instance, otherwise returns an incremental ID.
 *
 * Инициализирует глобальный генератор уникальных идентификаторов для элементов.
 * Использует Vue `useId`, если вызывается внутри экземпляра компонента, в противном случае возвращает инкрементный идентификатор.
 */
export declare function uiId(): void;
