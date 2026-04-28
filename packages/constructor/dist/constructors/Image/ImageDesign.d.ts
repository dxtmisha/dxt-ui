import { VNode, ComputedRef } from 'vue';
import { ConstrOptions, ConstrStyles, DesignConstructorAbstract } from '@dxtmisha/functional';
import { Image } from './Image';
import { ImagePropsBasic } from './props';
import { ImageClasses, ImageComponents, ImageEmits, ImageExpose, ImageSlots } from './types';
/**
 * ImageDesign
 */
export declare class ImageDesign<COMP extends ImageComponents, EXPOSE extends ImageExpose, CLASSES extends ImageClasses, P extends ImagePropsBasic> extends DesignConstructorAbstract<HTMLDivElement, COMP, ImageEmits, EXPOSE, ImageSlots, CLASSES, P> {
    protected readonly item: Image;
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor image item class/ класс элемента изображения
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, ImageEmits, P>, ItemConstructor?: typeof Image);
    /**
     * Initialization of all the necessary properties for work
     *
     * Инициализация всех необходимых свойств для работы.
     */
    protected initExpose(): EXPOSE;
    /**
     * Improvement of the obtained list of classes.
     *
     * Доработка полученного списка классов.
     */
    protected initClasses(): Partial<CLASSES>;
    /**
     * Refinement of the received list of styles.
     *
     * Доработка полученного списка стилей.
     */
    protected initStyles(): ConstrStyles;
    /**
     * A method for rendering.
     *
     * Метод для рендеринга.
     */
    protected initRender(): VNode;
    /**
     * Properties for the image tag.
     *
     * Свойства для тега image.
     */
    readonly propsImage: ComputedRef<any>;
    /**
     * Main properties.
     *
     * Основные свойства.
     */
    readonly propsMain: ComputedRef<any>;
    /**
     * Rendering the picture tag.
     *
     * Рендеринг тега picture.
     */
    readonly renderPicture: () => VNode;
    /**
     * Rendering the img tag.
     *
     * Рендеринг тега img.
     */
    readonly renderImg: () => VNode;
    /**
     * Rendering the img item.
     *
     * Рендеринг элемента img.
     */
    readonly renderImgItem: () => VNode;
    /**
     * Rendering the value for the component.
     *
     * Рендеринг значения для компонента.
     */
    readonly renderValue: () => string | VNode | undefined;
}
