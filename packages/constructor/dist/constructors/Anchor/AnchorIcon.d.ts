import { ConstrBind } from '@dxtmisha/functional';
import { AnchorEvent } from './AnchorEvent';
import { IconProps, IconValue } from '../Icon';
import { AnchorProps } from './props';
import { ComputedRef } from 'vue';
/**
 * Class for working with the anchor icon
 *
 * Класс для работы с иконкой якоря
 */
export declare class AnchorIcon {
    protected readonly props: AnchorProps;
    protected readonly event: AnchorEvent;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param event event handler / обработчик событий
     */
    constructor(props: AnchorProps, event: AnchorEvent);
    /** Icon to display/ Иконка для отображения */
    readonly icon: ComputedRef<IconValue | undefined>;
    /** Binds for the icon/ Привязки для иконки */
    readonly binds: ComputedRef<ConstrBind<IconProps>>;
    /**
     * Check if the icon is set
     *
     * Проверяет, установлена ли иконка
     */
    is(): boolean;
}
