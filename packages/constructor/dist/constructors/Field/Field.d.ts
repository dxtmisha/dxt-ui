import { Ref, ToRefs, ComputedRef } from 'vue';
import { ConstrEmit, DesignComp } from '@dxtmisha/functional';
import { CaptionInclude } from '../../classes/CaptionInclude';
import { PrefixInclude } from '../../classes/PrefixInclude';
import { SuffixInclude } from '../../classes/SuffixInclude';
import { EnabledInclude } from '../../classes/EnabledInclude';
import { EventClickInclude } from '../../classes/EventClickInclude';
import { IconTrailingInclude } from '../Icon';
import { FieldLabelInclude } from '../FieldLabel';
import { FieldMessageInclude } from '../FieldMessage';
import { ProgressInclude } from '../Progress';
import { SkeletonInclude } from '../Skeleton';
import { FieldIcons } from './FieldIcons';
import { FieldSize } from './FieldSize';
import { FieldComponents, FieldEmits, FieldSlots } from './types';
import { FieldProps } from './props';
import { FieldControl } from './basicTypes';
/**
 * Field
 */
export declare class Field {
    protected readonly props: FieldProps;
    protected readonly refs: ToRefs<FieldProps>;
    protected readonly element: Ref<HTMLLabelElement | undefined>;
    protected readonly classDesign: string;
    protected readonly className: string;
    protected readonly components?: DesignComp<FieldComponents, FieldProps> | undefined;
    protected readonly slots?: FieldSlots | undefined;
    protected readonly emits?: ConstrEmit<FieldEmits> | undefined;
    readonly id: string;
    readonly labelId: string;
    readonly helperId: string;
    readonly validationId: string;
    readonly counterId: string;
    readonly icon: IconTrailingInclude;
    readonly caption: CaptionInclude;
    readonly prefix: PrefixInclude;
    readonly suffix: SuffixInclude;
    readonly fieldLabel: FieldLabelInclude;
    readonly fieldMessage: FieldMessageInclude;
    readonly progress: ProgressInclude;
    readonly enabled: EnabledInclude;
    readonly event: EventClickInclude;
    readonly skeleton: SkeletonInclude;
    readonly icons: FieldIcons;
    readonly size: FieldSize;
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
     */
    constructor(props: FieldProps, refs: ToRefs<FieldProps>, element: Ref<HTMLLabelElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldComponents, FieldProps> | undefined, slots?: FieldSlots | undefined, emits?: ConstrEmit<FieldEmits> | undefined);
    /** Checks if an error needs to be displayed/ Проверяет, надо ли выводить ошибку */
    readonly isValidation: ComputedRef<boolean>;
    /** Values for the class/ Значения для класса */
    readonly classes: ComputedRef<{
        [x: string]: string | number | boolean | undefined;
    }>;
    /**
     * Returns data for the slot/ Возвращает данные для слота
     */
    readonly control: ComputedRef<FieldControl>;
    /**
     * Get ARIA describedby attribute.
     *
     * Получить атрибут ARIA describedby.
     */
    protected getDescribedby(): string;
}
