import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { TextInclude } from '../../classes/TextInclude';
import { TooltipInclude } from '../Tooltip';
import { AnchorHref } from './AnchorHref';
import { AnchorTo } from './AnchorTo';
import { AnchorEvent } from './AnchorEvent';
import { AnchorIcon } from './AnchorIcon';
import { AnchorComponents, AnchorEmits, AnchorSlots } from './types';
import { AnchorProps } from './props';
/**
 * Anchor
 */
export declare class Anchor {
    protected readonly props: AnchorProps;
    protected readonly refs: ToRefs<AnchorProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<AnchorComponents, AnchorProps> | undefined;
    protected readonly slots?: AnchorSlots | undefined;
    protected readonly emits?: ConstrEmit<AnchorEmits> | undefined;
    readonly label: LabelInclude;
    readonly text: TextInclude;
    readonly tooltip: TooltipInclude;
    readonly href: AnchorHref;
    readonly to: AnchorTo;
    readonly event: AnchorEvent;
    readonly icon: AnchorIcon;
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
     * @param constructors.AnchorEventConstructor class for working with events/ класс для работы с событиями
     * @param constructors.AnchorHrefConstructor class for working with href/ класс для работы с ссылкой
     * @param constructors.AnchorIconConstructor class for working with icons/ класс для работы с иконками
     * @param constructors.AnchorToConstructor class for working with scroll/ класс для работы с прокруткой
     * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
     * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
     * @param constructors.TooltipIncludeConstructor class for working with tooltip/ класс для работы с подсказкой
     */
    constructor(props: AnchorProps, refs: ToRefs<AnchorProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<AnchorComponents, AnchorProps> | undefined, slots?: AnchorSlots | undefined, emits?: ConstrEmit<AnchorEmits> | undefined, constructors?: {
        AnchorEventConstructor?: typeof AnchorEvent;
        AnchorHrefConstructor?: typeof AnchorHref;
        AnchorIconConstructor?: typeof AnchorIcon;
        AnchorToConstructor?: typeof AnchorTo;
        LabelIncludeConstructor?: typeof LabelInclude;
        TextIncludeConstructor?: typeof TextInclude;
        TooltipIncludeConstructor?: typeof TooltipInclude;
    });
    /** Is hide anchor/ Скрыть якорь */
    readonly isHide: ComputedRef<boolean>;
    /**
     * Go if focus on anchor
     *
     * Перейти, если фокус на якоре
     */
    protected readonly goIsFocus: () => void;
}
