import { AreaProps } from '../types/areaTypes';
/**
 * Class for managing the area value.
 *
 * Класс для управления значением области.
 */
export declare class AreaInclude {
    protected readonly props: AreaProps;
    /**
     * Constructor
     * @param props input data / входные данные
     */
    constructor(props: AreaProps);
    /**
     * Update value
     *
     * Обновить значение
     */
    protected readonly updateValue: () => void;
}
