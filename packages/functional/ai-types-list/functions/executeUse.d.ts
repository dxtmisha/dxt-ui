// md5:2a75c77eadc20b9c4087fb179e60eb4a
/** Singleton initialization strategies / Стратегии инициализации синглтона */
export declare enum ExecuteUseType {
    /** One instance per runtime, shared by all SSR requests / Один экземпляр на среду выполнения, общий для всех SSR-запросов */
    global = "global",
    /** Shared via provide/inject in the component tree / Разделяется через provide/inject в дереве компонентов */
    provide = "provide",
    /** A lazily created instance per storage context / Лениво создаваемый экземпляр на контекст хранилища */
    local = "local"
}
/** Management methods added by executeUse when not defined on the container / Методы управления, добавляемые executeUse при отсутствии одноимённых свойств в контейнере */
export interface ExecuteUseManagement<R extends object | void> {
    /**
     * Returns the original shallowly frozen factory result without the management shell.
     * Not created when the container already defines its own `init` property (use `_init()` instead).
     *
     * Возвращает исходный поверхностно замороженный результат фабрики без управляющей оболочки.
     * Не создаётся, если контейнер уже содержит собственное свойство `init` (используйте `_init()`).
     * @returns original factory result / исходный результат фабрики
     */
    init(): Readonly<R>;
    /**
     * Fallback management method returning the original shallowly frozen factory result (always available unless `_init` is occupied on the container).
     *
     * Резервный метод управления, возвращающий исходный поверхностно замороженный результат фабрики (доступен всегда, если имя `_init` не занято в контейнере).
     * @returns original factory result / исходный результат фабрики
     */
    _init(): Readonly<R>;
    /**
     * Removes the cached local instance or resets the process-wide global instance, stopping its effect scope.
     * Absent for provided instances or when the container defines its own `destroyExecute` property (use `_destroyExecute()` instead).
     *
     * Удаляет локальный экземпляр из кеша либо сбрасывает общий глобальный экземпляр процесса, останавливая его область эффектов.
     * Отсутствует у предоставляемых через provide экземпляров либо если контейнер определяет собственное свойство `destroyExecute` (используйте `_destroyExecute()`).
     */
    destroyExecute?(): void;
    /**
     * Fallback management method resetting the local or global instance (available unless `_destroyExecute` is occupied on the container).
     * This method is absent for provided instances.
     *
     * Резервный метод управления для сброса локального или глобального экземпляра (доступен, если имя `_destroyExecute` не занято в контейнере).
     * У предоставляемых через provide экземпляров этот метод отсутствует.
     */
    _destroyExecute?(): void;
}
/** Readonly container with singleton management methods / Контейнер только для чтения с методами управления синглтоном */
export type ExecuteUseReturn<R extends object | void> = Readonly<string extends keyof R ? Omit<R, keyof ExecuteUseManagement<R>> & ExecuteUseManagement<R> : R & Omit<ExecuteUseManagement<R>, keyof R>>;
/**
 * Creates a managed singleton that encapsulates initialization logic and access mode.
 *
 * It supports three initialization strategies:
 * - `global`: A single instance per runtime, shared by all SSR requests in the server process.
 * - `provide`: Shared via provide/inject in the component tree (standard for Vue 3).
 * - `local`: A lazily created instance per ServerStorage context.
 *
 * Создает управляемый синглтон, который инкапсулирует логику инициализации и режим доступа.
 *
 * Поддерживает три стратегии инициализации:
 * - `global`: Единственный экземпляр на среду выполнения, общий для всех SSR-запросов серверного процесса.
 * - `provide`: Разделяется через provide/inject в дереве компонентов (стандарт для Vue 3).
 * - `local`: Лениво создаваемый экземпляр на контекст ServerStorage.
 *
 * @template R plain object container (not a class instance or reactive proxy) or void returned by the factory / обычный объект-контейнер (не экземпляр класса и не реактивный прокси) или void, возвращаемый фабрикой
 * @template O argument types for the factory function / типы аргументов фабричной функции
 * @template RI instance type with management methods / тип экземпляра с методами управления
 *
 * @param callback initialization function / функция инициализации
 * @param type initialization strategy (defaults to provide) / стратегия инициализации (по умолчанию provide)
 *
 * @returns accessor that creates or reuses the readonly managed container / функция доступа, создающая или повторно использующая контейнер только для чтения с методами управления
 * @throws TypeError when an accessed factory returns a result other than a plain object or void / TypeError, если при обращении фабрика возвращает результат, отличный от обычного объекта или void
 *
 * @remarks
 * Use this function in the following cases:
 * - **API Services:** Always wrap API clients to ensure a single connection point and unified state.
 * - **Resource Optimization:** For functions where creating multiple instances is undesirable (e.g., heavy objects, event buses).
 * - **Shared State:** To share reactive state within a component tree using the `provide` strategy.
 * - **External SDKs:** Initializing third-party libraries (analytics, maps, charts) that should be singletons.
 *
 * Используйте эту функцию в следующих случаях:
 * - **API-сервисы:** Всегда оборачивайте API-клиенты для обеспечения единой точки подключения и унифицированного состояния.
 * - **Оптимизация ресурсов:** Для функций, где нежелательно создание множества экземпляров (например, тяжелые объекты, шины событий).
 * - **Общее состояние:** Для совместного использования реактивного состояния в дереве компонентов с помощью стратегии `provide`.
 * - **Внешние SDK:** Инициализация сторонних библиотек (аналитика, карты, графики), которые должны быть синглтонами.
 *
 * Global factories must not capture request-scoped services or store user-specific data during SSR.
 * Use the local strategy with an initialized ServerStorage request context for request-specific state.
 *
 * **Warning (`ExecuteUseType.global` arguments):** Factories registered with `ExecuteUseType.global`
 * are invoked with **zero arguments** during batch startup via {@link executeUseGlobalInit}.
 * Do not declare mandatory parameters in a `global` factory (prefer {@link executeUseGlobal} or provide default values).
 *
 * **Note (`ExecuteUseType.provide` context):** The `provide` strategy relies on an active Vue component `setup()` context
 * (and checks the internal `instance.provides` registry for repeated calls within the same owner component).
 * Inside `app.runWithContext()` (where `hasInjectionContext()` is `true` but `getCurrentInstance()` is `null`),
 * `inject` still resolves app-level values, while `provide` is skipped without warnings when unprovided.
 * When called outside an injection context (`hasInjectionContext() === false`), `provide`/`inject` are skipped
 * and a fresh non-cached instance is returned on every call.
 *
 * Глобальные фабрики не должны захватывать сервисы запроса или хранить пользовательские данные при SSR.
 * Для состояния конкретного запроса используйте local с инициализированным контекстом ServerStorage.
 *
 * **Предупреждение (аргументы `ExecuteUseType.global`):** Фабрики со стратегией `ExecuteUseType.global`
 * вызываются **без аргументов** при пакетной инициализации через {@link executeUseGlobalInit}.
 * Не объявляйте обязательные параметры в `global`-фабрике (используйте {@link executeUseGlobal} либо задавайте значения по умолчанию).
 *
 * **Особенность контекста `ExecuteUseType.provide`:** Стратегия `provide` рассчитана на вызов внутри `setup()` компонента Vue
 * (и проверяет внутренний реестр `instance.provides` при повторных обращениях в том же компоненте-владельце).
 * Внутри `app.runWithContext()` (где `hasInjectionContext()` равен `true`, но `getCurrentInstance()` равен `null`)
 * `inject` по-прежнему читает значения уровня приложения, а `provide` пропускается без предупреждений при отсутствии провайдера.
 * При вызове вне контекста внедрения (`hasInjectionContext() === false`) операции `provide`/`inject` пропускаются,
 * и каждый вызов возвращает новый некэшируемый экземпляр.
 *
 * Return a plain object container or void. Put class instances and reactive proxies (`reactive`, `shallowReactive`)
 * inside the container (e.g., `() => ({ service: new Service() })` or `() => ({ count: ref(0) })`).
 * Only the outer container is shallowly frozen.
 * Returning direct class instances or bare `reactive()` / `shallowReactive()` proxies is strictly forbidden:
 * the management shell shallow-copies own property descriptors and freezes the returned target, which strips
 * proxy reactivity and blocks direct property mutations.
 * If the returned container already defines own `init` or `destroyExecute` properties, they are preserved as-is,
 * and management methods remain accessible via fallback `_init()` and `_destroyExecute()`.
 *
 * Возвращайте обычный объект-контейнер или void. Размещайте экземпляры классов и реактивные прокси (`reactive`, `shallowReactive`)
 * внутри контейнера (например, `() => ({ service: new Service() })` или `() => ({ count: ref(0) })`).
 * Поверхностно замораживается только внешний контейнер.
 * Прямой возврат экземпляра класса или «голого» прокси `reactive()` / `shallowReactive()` строго запрещён:
 * управляющая оболочка поверхностно копирует собственные дескрипторы свойств и замораживает возвращённый объект,
 * что приводит к потере реактивности прокси и блокировке прямых мутаций его свойств.
 * Если возвращаемый контейнер уже содержит собственные свойства `init` или `destroyExecute`, они сохраняются без перезаписи,
 * а методы управления остаются доступны через резервные имена `_init()` и `_destroyExecute()`.
 *
 * @example
 * import { ref } from 'vue'
 *
 * const useCounter = executeUseLocal((initialCount: number) => {
 *   const count = ref(initialCount)
 *   const increment = (): void => { count.value++ }
 *   return { count, increment }
 * })
 * const counter = useCounter(0)
 * counter.increment()
 *
 * @example
 * class Resource {
 *   constructor(readonly name: string) {}
 *   read(): string { return this.name }
 * }
 * const useResource = executeUseLocal((name: string) => ({ resource: new Resource(name) }))
 * useResource('shared').resource.read()
 */
export declare function executeUse<R extends object | void, O extends unknown[], RI extends ExecuteUseReturn<R> = ExecuteUseReturn<R>>(callback: (...args: O) => R, type?: ExecuteUseType): (...args: O) => RI;
/**
 * Creates a runtime-wide singleton shared by all SSR requests in the server process.
 *
 * Создаёт синглтон среды выполнения, общий для всех SSR-запросов серверного процесса.
 *
 * @remarks
 * See {@link executeUse} for container requirements and initialization behavior.
 * Do not store user-specific state or capture request-scoped dependencies during SSR.
 *
 * Требования к контейнеру и порядок инициализации описаны в {@link executeUse}.
 * Не храните пользовательское состояние и не захватывайте зависимости конкретного запроса при SSR.
 *
 * @template R factory result type / тип результата фабрики
 * @param callback argument-free factory returning a plain object container or void / фабрика без аргументов, возвращающая обычный объект-контейнер или void
 * @returns accessor for the shared singleton / функция доступа к общему синглтону
 */
export declare function executeUseGlobal<R extends object | void>(callback: () => R): () => ExecuteUseReturn<R>;
/**
 * Creates a component-scoped singleton.
 *
 * Создает компонентный синглтон.
 *
 * @remarks
 * Best for sharing state within a component sub-tree.
 * Providing requires an active Vue component `setup()` context (`getCurrentInstance() !== null`);
 * outside `setup()` (including `app.runWithContext()` when unprovided), `provide` is skipped and a fresh non-cached instance is returned on each call.
 * See {@link executeUse} for more details.
 *
 * Лучше всего подходит для совместного использования состояния внутри поддерева компонентов.
 * Предоставление экземпляра требует активного `setup()` компонента Vue (`getCurrentInstance() !== null`);
 * вне `setup()` (включая `app.runWithContext()` при отсутствии провайдера) вызов `provide` пропускается, и каждое обращение возвращает новый некэшируемый экземпляр.
 * Подробнее см. {@link executeUse}.
 *
 * @template R factory result type / тип результата фабрики
 * @template O initializer argument types / типы аргументов инициализатора
 * @param callback factory executed by the first component that creates the provided instance / фабрика, выполняемая первым компонентом, создающим предоставляемый экземпляр
 * @returns accessor sharing the container with the owner component and its descendants / функция доступа к общему контейнеру компонента-владельца и его потомков
 */
export declare function executeUseProvide<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>;
/**
 * Creates a lazy singleton in the current ServerStorage context.
 * Its effects run in a child scope of EffectScopeGlobal, survive disposal of the caller's scope, and stop on destroyExecute().
 *
 * Создаёт ленивый синглтон в текущем контексте ServerStorage.
 * Его эффекты работают в дочерней области EffectScopeGlobal, переживают уничтожение области вызывающего кода и останавливаются при вызове destroyExecute().
 *
 * @remarks
 * Browser calls reuse the cached instance. SSR isolation requires an initialized request context.
 * See {@link executeUse} for container requirements.
 *
 * В браузере вызовы используют закешированный экземпляр. Для изоляции SSR нужен инициализированный контекст запроса.
 * Требования к контейнеру описаны в {@link executeUse}.
 *
 * @template R factory result type / тип результата фабрики
 * @template O initializer argument types / типы аргументов инициализатора
 * @param callback factory returning a plain object container or void / фабрика, возвращающая обычный объект-контейнер или void
 * @returns accessor creating or reusing the container in the current storage context / функция доступа, создающая или повторно использующая контейнер в текущем контексте хранилища
 */
export declare function executeUseLocal<R extends object | void, O extends unknown[]>(callback: (...args: O) => R): (...args: O) => ExecuteUseReturn<R>;
/**
 * Initializes every registered global singleton without clearing the shared registry.
 * Repeated calls reuse existing instances and initialize factories registered later.
 *
 * Инициализирует все зарегистрированные глобальные синглтоны, сохраняя общий реестр.
 * Повторные вызовы используют готовые экземпляры и инициализируют фабрики, добавленные позднее.
 */
export declare function executeUseGlobalInit(): void;
