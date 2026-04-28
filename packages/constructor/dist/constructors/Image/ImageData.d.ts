import { ComputedRef, Ref } from 'vue';
import { ConstrEmit, Undefined } from '@dxtmisha/functional';
import { ClientOnlyInclude } from '../../classes/ClientOnlyInclude';
import { ImageType } from './ImageType';
import { ImageEventItem, ImageItem } from './basicTypes';
import { ImageEmits } from './types';
import { ImageProps } from './props';
/**
 * A class for obtaining image or icon data.
 *
 * Класс для получения данных изображения или иконки.
 */
export declare class ImageData {
    protected readonly props: ImageProps;
    protected readonly clientOnly: ClientOnlyInclude;
    protected readonly type: ImageType;
    protected readonly emits?: ConstrEmit<ImageEmits> | undefined;
    /** Image data / Данные изображения */
    readonly image: ComputedRef<ImageEventItem>;
    /**
     * Constructor
     * @param props input data / входные данные
     * @param clientOnly class for working with ClientOnly / класс для работы с ClientOnly
     * @param type image type / тип изображения
     * @param emits the function is called when an event is triggered / функция вызывается, когда срабатывает событие
     */
    constructor(props: ImageProps, clientOnly: ClientOnlyInclude, type: ImageType, emits?: ConstrEmit<ImageEmits> | undefined);
    /**
     * Checks if there are values.
     *
     * Проверяет, есть ли значения.
     */
    is(): this is {
        image: Exclude<ImageEventItem, Undefined>;
    };
    /**
     * Checks if the value is a link, that is, a type of string.
     *
     * Проверяет, является ли значение ссылкой, то есть видом строки.
     */
    isLink(): this is {
        image: Ref<string>;
    };
    /**
     * Checks if the value is an image object.
     *
     * Проверяет, является ли значение объектом изображения.
     */
    isImage(): this is {
        image: Ref<ImageItem>;
    };
    /**
     * Data initialization.
     *
     * Инициализация данных.
     */
    protected init(): Promise<ImageEventItem>;
    /**
     * Data initialization for server-side rendering (SSR).
     *
     * Инициализация данных для серверного рендеринга (SSR).
     */
    protected initSsr(): ImageEventItem;
}
