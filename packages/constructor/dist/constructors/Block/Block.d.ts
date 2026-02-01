import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { CaptionInclude } from '../../classes/CaptionInclude';
import { IconInclude } from '../Icon';
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
     * Object for working with label/
     * Объект для работы с меткой
     */
    readonly label: LabelInclude;
    /**
     * Object for working with description/
     * Объект для работы с описанием
     */
    readonly description: DescriptionInclude;
    /**
     * Object for working with caption/
     * Объект для работы с подписью
     */
    readonly caption: CaptionInclude;
    /**
     * Object for working with icon/
     * Объект для работы с иконкой
     */
    readonly icon: IconInclude;
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
     * @param LabelIncludeConstructor class for working with the label/ класс для работы с меткой
     * @param DescriptionIncludeConstructor class for working with the description/ класс для работы с описанием
     * @param CaptionIncludeConstructor class for working with the caption/ класс для работы с подписью
     * @param IconIncludeConstructor class for working with the icon/ класс для работы с иконкой
     */
    constructor(props: BlockProps, refs: ToRefs<BlockProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<BlockComponents, BlockProps> | undefined, slots?: BlockSlots | undefined, emits?: ConstrEmit<BlockEmits> | undefined, LabelIncludeConstructor?: typeof LabelInclude, DescriptionIncludeConstructor?: typeof DescriptionInclude, CaptionIncludeConstructor?: typeof CaptionInclude, IconIncludeConstructor?: typeof IconInclude);
    /**
     * Checks if the headline exists/
     * Проверяет, существует ли заголовок
     */
    readonly isHeadline: ComputedRef<boolean>;
    /**
     * Checks if the header exists/
     * Проверяет, существует ли шапка
     */
    readonly isHeader: ComputedRef<boolean>;
    /**
     * Tag name/
     * Название тега
     */
    readonly tag: ComputedRef<string>;
}
