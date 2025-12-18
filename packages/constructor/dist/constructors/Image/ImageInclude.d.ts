import { VNode, ComputedRef } from 'vue';
import { ConstrEmit, DesignComponents, RefOrNormal, ConstrBind } from '@dxtmisha/functional';
import { ImageEventData, ImageComponentsInclude, ImageEmitsInclude, ImagePropsInclude } from './basicTypes';
import { ItemList } from '@dxtmisha/functional-basic';
/**
 * Класс для подключения и работы с компонентом изображения.
 *
 * A class for connecting to and working with the image component.
 */
export declare class ImageInclude {
    protected readonly props: ImagePropsInclude;
    protected readonly components?: DesignComponents<ImageComponentsInclude, ImagePropsInclude> | undefined;
    protected readonly emits?: ConstrEmit<ImageEmitsInclude> | undefined;
    protected readonly extra?: RefOrNormal<Record<string, any>> | undefined;
    /**
     * Constructor for working with images.
     *
     * Конструктор для работы с изображениями.
     * @param props input parameter/ входной параметр
     * @param components object for working with components/ объект для работы с компонентами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param extra additional parameter/ дополнительный параметр
     */
    constructor(props: ImagePropsInclude, components?: DesignComponents<ImageComponentsInclude, ImagePropsInclude> | undefined, emits?: ConstrEmit<ImageEmitsInclude> | undefined, extra?: RefOrNormal<Record<string, any>> | undefined);
    /**
     * Проверяет, есть ли изображение/ Checks if an image exists
     */
    readonly isImage: ComputedRef<boolean>;
    /**
     * Возвращает данные для передачи компоненту/ Returns data to pass to the component
     */
    readonly bind: ComputedRef<ConstrBind<ItemList>>;
    render(): VNode[];
    onLoad(event: ImageEventData): void;
}
