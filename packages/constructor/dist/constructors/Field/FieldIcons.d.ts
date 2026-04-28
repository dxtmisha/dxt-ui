import { ConstrBind } from '@dxtmisha/functional';
import { TextInclude } from '../../classes/TextInclude';
import { IconProps } from '../Icon';
import { FieldProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for displaying an icon for arrow control.
 *
 * Класс для вывода иконки для управления стрелками.
 */
export declare class FieldIcons {
    protected readonly props: FieldProps;
    protected readonly className: string;
    protected readonly text: TextInclude;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param className class name/ название класса
     * @param text text include/ Подключение текста
     */
    constructor(props: FieldProps, className: string, text: TextInclude);
    /**
     * Determines whether to display arrows.
     *
     * Определяет, требуется ли отображение стрелок.
     */
    readonly isArrow: ComputedRef<boolean>;
    /**
     * Determines whether to display the "Delete" button.
     *
     * Определяет, требуется ли отображение кнопки "Удалить".
     */
    readonly isCancel: ComputedRef<boolean>;
    /**
     * Returns data for the data deletion button.
     *
     * Возвращает данные для кнопки удаления данных.
     */
    readonly cancelBind: ComputedRef<ConstrBind<IconProps>>;
    /**
     * Returns data for the left arrow.
     *
     * Возвращает данные для стрелки слева.
     */
    readonly previousBind: ComputedRef<ConstrBind<IconProps>>;
    /**
     * Returns data for the right arrow.
     *
     * Возвращает данные для стрелки справа.
     */
    readonly nextBind: ComputedRef<ConstrBind<IconProps>>;
}
