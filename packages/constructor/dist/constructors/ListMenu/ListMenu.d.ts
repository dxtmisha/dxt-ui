import { Ref, ToRefs } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { WindowInclude } from '../Window';
import { ListGroupOpen } from '../ListGroup/ListGroupOpen';
import { ListMenuComponents, ListMenuEmits, ListMenuSlots } from './types';
import { ListMenuProps } from './props';
/**
 * ListMenu
 */
export declare class ListMenu {
    protected readonly props: ListMenuProps;
    protected readonly refs: ToRefs<ListMenuProps>;
    protected readonly element: Ref<HTMLElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<ListMenuComponents, ListMenuProps> | undefined;
    protected readonly slots?: ListMenuSlots | undefined;
    protected readonly emits?: ConstrEmit<ListMenuEmits> | undefined;
    readonly open: ListGroupOpen<ListMenuProps>;
    readonly window: WindowInclude;
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
     * @param ListGroupOpenConstructor class for working with list group open/ класс для работы с открытием группы списка
     * @param WindowIncludeConstructor class for working with window/ класс для работы с окном
     */
    constructor(props: ListMenuProps, refs: ToRefs<ListMenuProps>, element: Ref<HTMLElement | undefined>, classDesign: string, className: string, components?: DesignComp<ListMenuComponents, ListMenuProps> | undefined, slots?: ListMenuSlots | undefined, emits?: ConstrEmit<ListMenuEmits> | undefined, ListGroupOpenConstructor?: typeof ListGroupOpen, WindowIncludeConstructor?: typeof WindowInclude);
}
