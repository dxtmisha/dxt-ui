import { ClientOnlyPropsInclude } from '../types/clientOnlyTypes';
import { Ref, ComputedRef } from 'vue';
/**
 * Class for managing component rendering only on the client side.
 *
 * Класс для управления рендерингом компонента только на стороне клиента.
 */
export declare class ClientOnlyInclude {
    protected readonly props: ClientOnlyPropsInclude;
    /** Check if the component is mounted / Проверка, смонтирован ли компонент */
    isMounted: Ref<boolean, boolean>;
    /**
     * Constructor
     * @param props input data / входные данные
     */
    constructor(props: ClientOnlyPropsInclude);
    /** Is the component ready for rendering / Готов ли компонент к рендерингу */
    readonly isRender: ComputedRef<boolean>;
}
