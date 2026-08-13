// md5:1bdb2bfe09371e943062a4ab4e6f98bb
import { Ref, VNode } from 'vue';
import { ConstrClass, RefOrNormalOrFunction } from '@dxtmisha/functional';
import { SkeletonInclude } from '../constructors/Skeleton';
import { LabelAlternativeSlots, LabelProps, LabelSlots } from '../types/labelTypes';
/**
 * Utility class for connecting and rendering label elements.
 * It manages label states, slots, dynamic translations, and loading skeletons.
 *
 * Утилитарный класс для подключения и рендеринга элементов меток.
 * Управляет состояниями меток, слотами, динамическими переводами и скелетонами загрузки.
 */
export declare class LabelInclude {
    protected readonly props: RefOrNormalOrFunction<LabelProps>;
    protected readonly className: string;
    protected readonly classesExtra?: ConstrClass | undefined;
    protected readonly slots?: (LabelSlots | LabelAlternativeSlots) | undefined;
    protected readonly elementsExtra?: (() => VNode[]) | undefined;
    protected readonly labelReplacing?: Ref<string | number | undefined> | undefined;
    protected readonly alternativeSlots?: boolean | undefined;
    protected readonly skeleton?: SkeletonInclude | undefined;
    protected readonly tag?: RefOrNormalOrFunction<string | undefined>;
    protected readonly ignoreLabelIfSlot?: boolean | undefined;
    /** Default element identifier / Идентификатор элемента по умолчанию */
    protected readonly elementIdDefault: string;
    /**
     * Constructor for initializing LabelInclude properties.
     *
     * Конструктор для инициализации свойств LabelInclude.
     * @param props input properties / входные свойства
     * @param className base class name / название базового класса
     * @param classesExtra additional CSS classes / дополнительные CSS-классы
     * @param slots slots dictionary / объект слотов
     * @param elementsExtra callback for extra VNode elements / коллбэк для дополнительных VNode-элементов
     * @param labelReplacing reactive ref for replacing the label text / реактивная ссылка для замены текста метки
     * @param alternativeSlots flag to use alternative slot name / флаг использования альтернативного имени слота
     * @param skeleton optional loading skeleton include / необязательный скелетон загрузки
     * @param tag HTML tag for wrapping element / HTML-тег для оборачивающего элемента
     * @param ignoreLabelIfSlot flag to ignore props.label if slot is provided / флаг игнорирования props.label, если передан слот
     */
    constructor(props: RefOrNormalOrFunction<LabelProps>, className: string, classesExtra?: ConstrClass | undefined, slots?: (LabelSlots | LabelAlternativeSlots) | undefined, elementsExtra?: (() => VNode[]) | undefined, labelReplacing?: Ref<string | number | undefined> | undefined, alternativeSlots?: boolean | undefined, skeleton?: SkeletonInclude | undefined, tag?: RefOrNormalOrFunction<string | undefined>, ignoreLabelIfSlot?: boolean | undefined);
    /**
     * Label presence check.
     *
     * Проверка наличия метки.
     * @returns checking result / результат проверки
     */
    get is(): boolean;
    /**
     * Checks if the target slot is present.
     *
     * Проверяет наличие целевого слота.
     * @returns checking result / результат проверки
     */
    protected hasSlot(): boolean;
    /**
     * Identifier for the element.
     *
     * Идентификатор для элемента.
     * @returns unique identifier / уникальный идентификатор
     */
    get id(): string;
    /**
     * Renders the label element with children and properties.
     *
     * Рендерит элемент метки с дочерними элементами и свойствами.
     * @param childrenExtra additional children elements / дополнительные дочерние элементы
     * @param props additional HTML properties / дополнительные HTML-свойства
     * @returns array of rendered virtual nodes / массив отрендеренных виртуальных узлов
     */
    render(childrenExtra?: any[], props?: Record<string, any>): VNode[];
    /**
     * Returns properties resolving functions if needed.
     *
     * Возвращает свойства, разрешая функции при необходимости.
     * @returns resolved label properties / разрешенные свойства метки
     */
    protected getProps(): LabelProps;
    /**
     * Resolves the list of class names for the label element.
     *
     * Разрешает список имен классов для элемента метки.
     * @returns resolved CSS classes / разрешенные CSS-классы
     */
    protected getClassName(): ConstrClass;
    /**
     * Resolves the static label text content.
     *
     * Разрешает статический текст метки.
     * @returns array containing the text / массив, содержащий текст
     */
    protected initLabel(): any[];
    /**
     * Resolves the dynamic highlighted or replaced label text.
     *
     * Разрешает динамический подсвеченный или замененный текст метки.
     * @returns array with virtual span node / массив с виртуальным узлом span
     */
    protected initLabelReplacing(): any[];
    /**
     * Resolves the slot content for the label element.
     *
     * Разрешает содержимое слота для элемента метки.
     * @returns array with resolved slot content / массив с разрешенным содержимым слота
     */
    protected initSlot(): any[];
}
