import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { HeaderInclude } from '../Header';
import { BlockComponents, BlockEmits, BlockSlots } from './types';
import { BlockProps } from './props';
/**
 * Block
 */
export declare class Block {
    protected readonly props: BlockProps;
    protected readonly refs: ToRefs<BlockProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<BlockComponents, BlockProps> | undefined;
    protected readonly slots?: BlockSlots | undefined;
    protected readonly emits?: ConstrEmit<BlockEmits> | undefined;
    /**
     * Object for working with description/
     * Объект для работы с описанием
     */
    readonly description: DescriptionInclude;
    /**
     * Object for working with header/
     * Объект для работы с шапкой
     */
    readonly header: HeaderInclude;
    /**
     * Identifier for the label/
     * Идентификатор для метки
     */
    readonly labelId: string;
    /**
     * Constructor
     * @param props input data/ входные данные
     * @param refs input data in the form of reactive elements/ входные данные в виде реактивных элементов
     * @param element input element/ элемент ввода
     * @param classDesign design name/ название дизайна
     * @param className class name/ название класса
     * @param components object for working with components/ объект для работы с компонентами
     * @param slots object for working with slots/ объект для работы со слотами
     * @param emits the function is called when an event is triggered/ функция вызывается, когда срабатывает событие
     * @param constructors object with classes/ объект с классами
     * @param constructors.DescriptionIncludeConstructor class for working with the description/ класс для работы с описанием
     */
    constructor(props: BlockProps, refs: ToRefs<BlockProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<BlockComponents, BlockProps> | undefined, slots?: BlockSlots | undefined, emits?: ConstrEmit<BlockEmits> | undefined, constructors?: {
        HeaderIncludeConstructor?: typeof HeaderInclude;
        DescriptionIncludeConstructor?: typeof DescriptionInclude;
    });
    /**
     * Checks if the headline exists/
     * Проверяет, существует ли заголовок
     */
    readonly isHeadline: ComputedRef<boolean>;
    /**
     * Tag name/
     * Название тега
     */
    readonly tag: ComputedRef<string>;
}
