import { ConstrOptions } from '@dxtmisha/functional';
import { BlockDesign } from '../Block';
import { Page } from './Page';
import { PagePropsBasic } from './props';
import { PageClasses, PageComponents, PageEmits, PageExpose } from './types';
/**
 * PageDesign
 */
export declare class PageDesign<COMP extends PageComponents, EXPOSE extends PageExpose, CLASSES extends PageClasses, P extends PagePropsBasic> extends BlockDesign<COMP, EXPOSE, CLASSES, P> {
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor block item class/ класс элемента блока
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, PageEmits, P>, ItemConstructor?: typeof Page);
}
