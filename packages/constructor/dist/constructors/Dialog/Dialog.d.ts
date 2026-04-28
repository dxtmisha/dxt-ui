import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { LabelInclude } from '../../classes/LabelInclude';
import { DescriptionInclude } from '../../classes/DescriptionInclude';
import { TextInclude } from '../../classes/TextInclude';
import { ActionsInclude } from '../Actions';
import { BarsInclude } from '../Bars';
import { IconInclude, IconValue, IconPropsBasic } from '../Icon';
import { ModalAbstract } from '../Modal/ModalAbstract';
import { WindowClassesInclude, WindowInclude } from '../Window';
import { DialogComponents, DialogEmits, DialogSlots } from './types';
import { DialogProps } from './props';
/**
 * Dialog
 *
 * The class for working with a dialog window.
 * Класс для работы с диалоговым окном.
 */
export declare class Dialog extends ModalAbstract {
    protected readonly props: DialogProps;
    protected readonly refs: ToRefs<DialogProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<DialogComponents, DialogProps> | undefined;
    protected readonly slots?: DialogSlots | undefined;
    protected readonly emits?: ConstrEmit<DialogEmits> | undefined;
    /** icon/ иконка */
    readonly icon: IconInclude;
    /** label/ метка */
    readonly label: LabelInclude;
    /** description/ описание */
    readonly description: DescriptionInclude;
    /** window classes/ классы окна */
    readonly windowClasses: WindowClassesInclude;
    /** text translations/ текстовые переводы */
    readonly text: TextInclude;
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
     * @param constructors.ActionsConstructor class for creating actions/ класс для создания действий
     * @param constructors.BarsConstructor class for creating bars/ класс для создания панелей
     * @param constructors.DescriptionIncludeConstructor class for working with description/ класс для работы с описанием
     * @param constructors.IconIncludeConstructor class for working with icon/ класс для работы с иконкой
     * @param constructors.LabelIncludeConstructor class for working with label/ класс для работы с меткой
     * @param constructors.TextIncludeConstructor class for working with text/ класс для работы с текстом
     * @param constructors.WindowClassesIncludeConstructor class for working with window classes/ класс для работы с классами окна
     * @param constructors.WindowConstructor class for creating a window/ класс для создания окна
     */
    constructor(props: DialogProps, refs: ToRefs<DialogProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<DialogComponents, DialogProps> | undefined, slots?: DialogSlots | undefined, emits?: ConstrEmit<DialogEmits> | undefined, constructors?: {
        ActionsConstructor?: typeof ActionsInclude;
        BarsConstructor?: typeof BarsInclude;
        DescriptionIncludeConstructor?: typeof DescriptionInclude;
        IconIncludeConstructor?: typeof IconInclude;
        LabelIncludeConstructor?: typeof LabelInclude;
        TextIncludeConstructor?: typeof TextInclude;
        WindowClassesIncludeConstructor?: typeof WindowClassesInclude;
        WindowConstructor?: typeof WindowInclude;
    });
    /**
     * Returns the icon for display.
     *
     * Возвращает иконку для отображения.
     */
    protected readonly iconValue: ComputedRef< IconValue<IconPropsBasic> | undefined>;
}
