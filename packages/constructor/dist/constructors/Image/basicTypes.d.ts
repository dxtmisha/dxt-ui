import { ConstrBind } from '@dxtmisha/functional';
import { ImageEmits } from './types';
import { ImagePropsBasic } from './props';
/** Image element type / Тип элемента изображения */
export type ImageElement = HTMLElement | undefined;
/** Image attribute type / Тип атрибутов изображения */
export type ImageAttrs = Record<keyof HTMLImageElement, any>;
/** Image picture item type / Тип элемента изображения picture */
export type ImagePictureItem = Record<keyof HTMLSourceElement & 'key', any>;
/** List of image picture items / Список элементов изображения picture */
export type ImagePictureList = ImagePictureItem[];
/** Image picture type / Тип изображения picture */
export type ImagePicture = Record<string, string> | ImagePictureList;
/** Image value type / Тип значения изображения */
export type ImageValue<Image extends ImagePropsBasic = ImagePropsBasic> = string | ConstrBind<Image> | null;
/** Image component inclusion type / Тип включения компонента изображения */
export type ImageComponentInclude = {
    /** Image component configuration/ Конфигурация компонента изображения */
    image?: object;
};
/** Image emits inclusion type / Тип включения событий изображения */
export type ImageEmitsInclude = ImageEmits;
/** Image props inclusion type / Тип включения свойств изображения */
export type ImagePropsInclude<Image extends ImagePropsBasic = ImagePropsBasic> = {
    /** Image value or attributes/ Значение или атрибуты изображения */
    image?: string | ConstrBind<Image>;
};
