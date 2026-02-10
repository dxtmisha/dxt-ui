import { Ref, ComputedRef } from 'vue';
import { ConstrClassObject, ConstrEmit, ConstrStyles } from '@dxtmisha/functional';
import { ImageType } from './ImageType';
import { ImageData } from './ImageData';
import { ImageCoordinator } from './ImageCoordinator';
import { ImagePosition } from './ImagePosition';
import { ImageAdaptiveItem } from './ImageAdaptiveItem';
import { ImageBackground } from './ImageBackground';
import { ImageImg } from './ImageImg';
import { ImageEmits } from './types';
import { ImageProps } from './props';
import { RoleType, AriaTrueOrFalse } from '../../library';
import { NumberOrString } from '@dxtmisha/functional-basic';
/**
 * Base class for working with images and icons.
 *
 * Базовый класс для работы с изображениями и иконками.
 */
export declare class Image {
    protected readonly props: ImageProps;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly className: string;
    protected readonly emits?: ConstrEmit<ImageEmits> | undefined;
    readonly type: ImageType;
    readonly data: ImageData;
    readonly coordinator: ImageCoordinator;
    readonly position: ImagePosition;
    readonly adaptiveItem: ImageAdaptiveItem;
    readonly background: ImageBackground;
    readonly img: ImageImg;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param element input element/ элемент ввода
     * @param className class name/ название класса
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param constructors object with classes/ объект с классами
     * @param constructors.ImageAdaptiveItemConstructor class for working with adaptive image item/ класс для работы с адаптивным элементом изображения
     * @param constructors.ImageBackgroundConstructor class for working with image background/ класс для работы с фоном изображения
     * @param constructors.ImageCoordinatorConstructor class for working with image coordinates/ класс для работы с координатами изображения
     * @param constructors.ImageDataConstructor class for working with image data/ класс для работы с данными изображения
     * @param constructors.ImageImgConstructor class for working with image tag/ класс для работы с тегом изображения
     * @param constructors.ImagePositionConstructor class for working with image position/ класс для работы с позицией изображения
     * @param constructors.ImageTypeConstructor class for working with image type/ класс для работы с типом изображения
     */
    constructor(props: ImageProps, element: Ref<HTMLElement | undefined>, className: string, emits?: ConstrEmit<ImageEmits> | undefined, constructors?: {
        ImageAdaptiveItemConstructor?: typeof ImageAdaptiveItem;
        ImageBackgroundConstructor?: typeof ImageBackground;
        ImageCoordinatorConstructor?: typeof ImageCoordinator;
        ImageDataConstructor?: typeof ImageData;
        ImageImgConstructor?: typeof ImageImg;
        ImagePositionConstructor?: typeof ImagePosition;
        ImageTypeConstructor?: typeof ImageType;
    });
    /**
     * Determines the tag to use/ Определяет используемый тег
     */
    readonly tag: ComputedRef<string>;
    /**
     * Values for the text. Text is used for the type of icon that works as a background.
     *
     * Значения для текста. Текст используется для типа иконки, который работает как фон.
     */
    readonly text: ComputedRef<string | undefined>;
    /**
     * Values for the class.
     *
     * Значения для класса.
     */
    readonly classes: ComputedRef<ConstrClassObject>;
    /**
     * Calculates all properties for the style of the element/
     * Вычисляет все свойства для стиля элемента
     */
    readonly styles: ComputedRef<ConstrStyles>;
    /**
     * Computed bindings for the image element.
     *
     * Вычисляемые привязки для элемента изображения.
     */
    readonly binds: ComputedRef<{
        id?: string;
        role?: RoleType;
        tabindex?: NumberOrString;
        'aria-activedescendant'?: string;
        'aria-atomic'?: AriaTrueOrFalse;
        'aria-autocomplete'?: "none" | "inline" | "list" | "both";
        'aria-busy'?: AriaTrueOrFalse;
        'aria-checked'?: AriaTrueOrFalse | "mixed";
        'aria-colcount'?: number;
        'aria-colindex'?: number;
        'aria-colspan'?: number;
        'aria-controls'?: string;
        'aria-current'?: AriaTrueOrFalse | "page" | "step" | "location" | "date" | "time";
        'aria-describedby'?: string;
        'aria-details'?: string;
        'aria-disabled'?: AriaTrueOrFalse;
        'aria-errormessage'?: string;
        'aria-expanded'?: AriaTrueOrFalse;
        'aria-flowto'?: string;
        'aria-grabbed'?: AriaTrueOrFalse;
        'aria-haspopup'?: AriaTrueOrFalse | "dialog" | "menu" | "listbox" | "tree" | "grid";
        'aria-hidden'?: AriaTrueOrFalse;
        'aria-invalid'?: AriaTrueOrFalse | "grammar" | "spelling";
        'aria-keyshortcuts'?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-level'?: number;
        'aria-live'?: "off" | "polite" | "assertive";
        'aria-modal'?: AriaTrueOrFalse;
        'aria-multiline'?: AriaTrueOrFalse;
        'aria-multiselectable'?: AriaTrueOrFalse;
        'aria-orientation'?: "horizontal" | "vertical" | "undefined";
        'aria-owns'?: string;
        'aria-placeholder'?: string;
        'aria-posinset'?: number;
        'aria-pressed'?: AriaTrueOrFalse | "mixed";
        'aria-readonly'?: AriaTrueOrFalse;
        'aria-relevant'?: "additions" | "removals" | "text" | "all" | string;
        'aria-required'?: AriaTrueOrFalse;
        'aria-roledescription'?: string;
        'aria-rowcount'?: number;
        'aria-rowindex'?: number;
        'aria-rowspan'?: number;
        'aria-selected'?: AriaTrueOrFalse;
        'aria-setsize'?: number;
        'aria-sort'?: "none" | "ascending" | "descending" | "other";
        'aria-valuemax'?: string | number;
        'aria-valuemin'?: string | number;
        'aria-valuenow'?: string | number;
        'aria-valuetext'?: string;
        translate: string;
    }>;
    /**
     * Bindings for the image value.
     *
     * Привязки для значения изображения.
     */
    readonly valueBinds: ComputedRef<any>;
}
