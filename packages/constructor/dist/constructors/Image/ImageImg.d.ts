import { Ref, WatchHandle, ComputedRef } from 'vue';
import { ConstrBind } from '@dxtmisha/functional';
import { ImageType } from './ImageType';
import { ImagePosition } from './ImagePosition';
import { ImageBackground } from './ImageBackground';
import { ImageAttrs, ImagePictureList } from './basicTypes';
import { ImageProps } from './props';
/**
 * A class for working with the img tag.
 *
 * Класс для работы с тегом img.
 */
export declare class ImageImg {
    protected readonly props: ImageProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly type: ImageType;
    protected readonly position: ImagePosition;
    protected readonly background: ImageBackground;
    protected lazyInit: Ref<boolean, boolean>;
    protected lazyStatus?: WatchHandle;
    constructor(props: ImageProps, element: Ref<HTMLElement | undefined>, type: ImageType, position: ImagePosition, background: ImageBackground);
    /**
     * Determines whether to use the img tag/ Определяет, использовать ли тег img
     */
    readonly is: ComputedRef<boolean>;
    /**
     * Determines whether lazy loading is enabled/ Определяет, включена ли ленивя загрузка
     */
    readonly isLazy: ComputedRef<boolean>;
    /**
     * Determines whether to use the picture tag/ Определяет, использовать ли тег picture
     */
    readonly isPicture: ComputedRef<boolean>;
    /**
     * Calculates all properties for binding to the element/
     * Вычисляет все свойства для привязки к элементу
     */
    readonly binds: ComputedRef<ConstrBind<ImageAttrs>>;
    /**
     * Calculates the picture sources for different resolutions/
     * Вычисляет источники picture для разных разрешений
     */
    readonly picture: ComputedRef<ImagePictureList | undefined>;
    /**
     * Calculates styles for binding to the element.
     *
     * Вычисляет стили для привязки к элементу.
     */
    readonly styles: ComputedRef<Record<string, any>>;
    /**
     * Checks if the type is file or image.
     *
     * Проверяет, является ли тип файлом или изображением.
     */
    protected isType(): boolean;
    /**
     * Checks if the size is contained or cover.
     *
     * Проверяет, является ли размер contain или cover.
     */
    protected isSize(): boolean;
    /**
     * Returns the value for the transform scale.
     *
     * Возвращает значение для свойства transform scale.
     */
    protected getSize(): string | undefined;
    /**
     * Returns the srcset attribute value.
     *
     * Возвращает значение атрибута srcset.
     */
    protected getSrcset(): string | undefined;
    /**
     * Converts the srcset key to a string.
     *
     * Преобразует ключ srcset в строку.
     * @param key key/ ключ
     */
    protected toSrcsetKey(key: string | number): string;
    /**
     * Initializes lazy loading.
     *
     * Инициализирует ленивую загрузку.
     */
    protected makeLazy(): void;
}
