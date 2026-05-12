import { AreaPropsInclude } from '../types/areaTypes';
/**
 * Class for managing the area value.
 *
 * Класс для управления значением области.
 */
export declare class AreaInclude {
    protected readonly props: AreaPropsInclude;
    /**
     * Constructor
     * @param props input data / входные данные
     */
    constructor(props: AreaPropsInclude);
    /**
     * Update value
     *
     * Обновить значение
     */
    protected readonly updateValue: () => void;
}
