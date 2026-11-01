// md5:7e548e99eb58d9365cd6f4f1779202c1
import { type Ref } from 'vue';
import { DesignLifecycleAbstract } from './DesignLifecycleAbstract';
import type { DesignComponents } from './DesignComponents';
import type { DesignName } from './DesignName';
import type { ConstrComponent, ConstrConstructor, ConstrConstructors, ConstrEmit, ConstrInstance, ConstrItem, ConstrItems } from '../../types/constructorTypes';
/**
 * Abstract orchestrator for component logic dependencies. It captures the current Vue effect scope, stores shared constructor inputs, and lazily creates and caches dependency instances by string key.
 *
 * Абстрактный координатор зависимостей логики компонента. Сохраняет текущую область эффектов Vue и общие входные данные, лениво создаёт и кэширует зависимости по строковому ключу.
 */
export declare abstract class DesignLogicAbstract<E extends Element, COMP extends ConstrComponent, EMITS extends ConstrItem, SLOTS extends ConstrItem, P extends ConstrItem, CONSTRUCTORS extends ConstrConstructors<CONSTRUCTORS> = object> {
    protected readonly props: Readonly<P>;
    protected readonly element: Ref<E | undefined>;
    protected readonly naming: DesignName;
    protected readonly components?: DesignComponents<COMP, P> | undefined;
    protected readonly slots?: SLOTS | undefined;
    protected readonly emits?: ConstrEmit<EMITS> | undefined;
    protected readonly constructors?: Partial<CONSTRUCTORS> | undefined;
    /** Item configurations and default constructors by dependency name / Конфигурации элементов и конструкторы по умолчанию по имени зависимости */
    protected abstract readonly constructorItems: ConstrItems<CONSTRUCTORS>;
    /** Cached dependency instances without inherited properties / Сохраненные экземпляры зависимостей без унаследованных свойств */
    protected readonly instances: {
        [K in keyof CONSTRUCTORS & string]?: ConstrInstance<CONSTRUCTORS, K>;
    };
    /** Callback after dependency mount callbacks / Обработчик после обработчиков монтирования зависимостей */
    protected readonly onMounted?: () => void;
    /** Callback after dependency cleanup callbacks / Обработчик после обработчиков очистки зависимостей */
    protected readonly onUnmounted?: () => void;
    /** Current effect scope / Текущая область реактивности */
    protected readonly scope: import("vue").EffectScope | undefined;
    /**
     * Initializes DesignLogicAbstract with the supplied configuration.
     *
     * Инициализирует DesignLogicAbstract с переданными настройками.
     * @param props Input properties. / Входные свойства.
     * @param element Root element ref. / Ссылка на корневой элемент.
     * @param naming Shared DesignName helper. / Общий помощник DesignName.
     * @param components Connected component registry. / Реестр подключённых компонентов.
     * @param slots Named slot registry. / Реестр именованных слотов.
     * @param emits Component event emitter. / Функция событий компонента.
     * @param constructors Dependency constructor overrides. / Переопределения конструкторов зависимостей.
     * @param hasLifecycle Whether to register component lifecycle hooks; defaults to true. / Регистрировать ли хуки компонента; по умолчанию true.
     */
    constructor(props: Readonly<P>, element: Ref<E | undefined>, naming: DesignName, components?: DesignComponents<COMP, P> | undefined, slots?: SLOTS | undefined, emits?: ConstrEmit<EMITS> | undefined, constructors?: Partial<CONSTRUCTORS> | undefined, hasLifecycle?: boolean);
    /** Whether the component mount hook has run / Выполнен ли обработчик монтирования компонента */
    readonly isMounted: Ref<boolean, boolean>;
    /**
     * Returns a cached dependency or creates it inside the captured active scope. Constructor arguments come from the optional `parameters()` factory. A failed constructor is not cached and can be retried.
     *
     * Возвращает кэшированную зависимость или создаёт её в сохранённой активной области. Аргументы берутся из необязательной фабрики `parameters()`. Ошибка конструктора не кэшируется и допускает повторную попытку.
     * @param name String key of a dependency constructor. / Строковый ключ конструктора зависимости.
     * @returns Cached or newly created dependency instance. / Кэшированный либо созданный экземпляр зависимости.
     */
    getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>;
    /**
     * Delegates to `getInstance()` with the same key and result.
     *
     * Вызывает `getInstance()` с тем же ключом и результатом.
     * @param name String key of a dependency constructor. / Строковый ключ конструктора зависимости.
     * @returns Cached or newly created dependency instance. / Кэшированный либо созданный экземпляр зависимости.
     */
    i<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K>;
    /**
     * Checks whether a dependency implements the lifecycle base class.
     *
     * Проверяет, является ли зависимость экземпляром базового класса жизненного цикла.
     * @param instance dependency instance / экземпляр зависимости
     * @returns whether the instance belongs to the lifecycle base class / принадлежит ли экземпляр базовому классу жизненного цикла
     */
    protected isLifecycle(instance: unknown): instance is DesignLifecycleAbstract;
    /**
     * Returns the constructor for the specified dependency name.
     *
     * Возвращает конструктор для указанного имени зависимости.
     * @param name dependency constructor name / имя конструктора зависимости
     * @returns dependency constructor / конструктор зависимости
     */
    protected getConstructor<K extends keyof CONSTRUCTORS & string>(name: K): ConstrConstructor<CONSTRUCTORS, K>;
    /**
     * Calls dependency lifecycle callbacks synchronously.
     *
     * Синхронно вызывает обработчики жизненного цикла зависимостей.
     * @param name lifecycle callback name / имя обработчика жизненного цикла
     * @param instances dependency instances / экземпляры зависимостей
     * @throws AggregateError collected callback errors after all callbacks run / собранные ошибки после выполнения всех обработчиков
     * @returns no return value / нет возвращаемого значения
     */
    protected callLifecycle(name: keyof DesignLifecycleAbstract, instances?: unknown[]): void;
    /**
     * Initializes condition watchers for dependencies with defined conditions.
     *
     * Инициализирует наблюдатели условий для зависимостей с заданными условиями.
     * @returns calculated result / вычисленный результат
     */
    protected initConditions(): void;
}
