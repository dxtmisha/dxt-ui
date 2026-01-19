import { ConstrOptions } from '@dxtmisha/functional';
import { BlockDesign } from '../Block';
import { Section } from './Section';
import { SectionPropsBasic } from './props';
import { SectionClasses, SectionComponents, SectionEmits, SectionExpose } from './types';
/**
 * SectionDesign
 */
export declare class SectionDesign<COMP extends SectionComponents, EXPOSE extends SectionExpose, CLASSES extends SectionClasses, P extends SectionPropsBasic> extends BlockDesign<COMP, EXPOSE, CLASSES, P> {
    /**
     * Constructor
     * @param name class name/ название класса
     * @param props properties/ свойства
     * @param options list of additional parameters/ список дополнительных параметров
     * @param ItemConstructor block item class/ класс элемента блока
     */
    constructor(name: string, props: Readonly<P>, options?: ConstrOptions<COMP, SectionEmits, P>, ItemConstructor?: typeof Section);
}
