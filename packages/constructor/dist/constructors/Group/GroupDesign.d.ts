import { ConstrOptions } from '@dxtmisha/functional';
import { BlockDesign } from '../Block';
import { Group } from './Group';
import { GroupPropsBasic } from './props';
import { GroupClasses, GroupComponents, GroupEmits, GroupExpose } from './types';
/**
 * GroupDesign
 */
export declare class GroupDesign<COMP extends GroupComponents, EXPOSE extends GroupExpose, CLASSES extends GroupClasses, P extends GroupPropsBasic> extends BlockDesign<COMP, EXPOSE, CLASSES, P> {
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor block item class/ класс элемента блока
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, GroupEmits, P>, ItemConstructor?: typeof Group);
}
