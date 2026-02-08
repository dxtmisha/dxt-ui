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
    /** Icon trailing include/ Подключение иконки в конце */
    readonly icon: IconTrailingInclude;
    /** Caption include/ Подключение подписи */
    readonly caption: CaptionInclude;
    /** Prefix include/ Подключение префикса */
    readonly prefix: PrefixInclude;
    /** Suffix include/ Подключение суффикса */
    readonly suffix: SuffixInclude;
    /** Field label include/ Подключение метки поля */
    readonly fieldLabel: FieldLabelInclude;
    /** Field message include/ Подключение сообщения поля */
    readonly fieldMessage: FieldMessageInclude;
    /** Progress include/ Подключение прогресса */
    readonly progress: ProgressInclude;
    /** Enabled include/ Подключение активности */
    readonly enabled: EnabledInclude;
    /** Event click include/ Подключение события клика */
    readonly event: EventClickInclude;
    /** Skeleton include/ Подключение скелетона */
    readonly skeleton: SkeletonInclude;
    /** Field icons/ Иконки поля */
    readonly icons: FieldIcons;
    /** Field size/ Размер поля */
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
     * @param SkeletonIncludeConstructor class for working with skeleton/ класс для работы со скелетоном
     * @param IconTrailingIncludeConstructor class for working with icon/ класс для работы с иконкой
     * @param CaptionIncludeConstructor class for working with caption/ класс для работы с подписью
     * @param PrefixIncludeConstructor class for working with prefix/ класс для работы с префиксом
     * @param SuffixIncludeConstructor class for working with suffix/ класс для работы с суффиксом
     * @param FieldLabelIncludeConstructor class for working with field label/ класс для работы с меткой поля
     * @param FieldMessageIncludeConstructor class for working with field message/ класс для работы с сообщением поля
     * @param ProgressIncludeConstructor class for working with progress/ класс для работы с прогрессом
     * @param EnabledIncludeConstructor class for working with enabled/ класс для работы с активностью
     * @param EventClickIncludeConstructor class for working with event click/ класс для работы с событием клика
     * @param FieldIconsConstructor class for working with field icons/ класс для работы с иконками поля
     * @param FieldSizeConstructor class for working with field size/ класс для работы с размером поля
     */
    constructor(props: FieldProps, refs: ToRefs<FieldProps>, element: Ref<HTMLLabelElement | undefined>, classDesign: string, className: string, components?: DesignComp<FieldComponents, FieldProps> | undefined, slots?: FieldSlots | undefined, emits?: ConstrEmit<FieldEmits> | undefined, SkeletonIncludeConstructor?: typeof SkeletonInclude, IconTrailingIncludeConstructor?: typeof IconTrailingInclude, CaptionIncludeConstructor?: typeof CaptionInclude, PrefixIncludeConstructor?: typeof PrefixInclude, SuffixIncludeConstructor?: typeof SuffixInclude, FieldLabelIncludeConstructor?: typeof FieldLabelInclude, FieldMessageIncludeConstructor?: typeof FieldMessageInclude, ProgressIncludeConstructor?: typeof ProgressInclude, EnabledIncludeConstructor?: typeof EnabledInclude, EventClickIncludeConstructor?: typeof EventClickInclude, FieldIconsConstructor?: typeof FieldIcons, FieldSizeConstructor?: typeof FieldSize);
    /** Checks if the field is classic/ Проверяет, является ли поле классическим */
    readonly isClassic: ComputedRef<boolean>;
    /** Checks if an error needs to be displayed/ Проверяет, надо ли выводить ошибку */
    readonly isValidation: ComputedRef<boolean>;
    /** Field identifier/ Идентификатор поля */
    readonly id: ComputedRef<string>;
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
