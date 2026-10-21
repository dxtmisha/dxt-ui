import { getCurrentInstance, getCurrentScope, onMounted, onUnmounted, ref, type Ref } from 'vue'
import { ErrorCenter, forEach } from '@dxtmisha/functional-basic'

import { DesignLifecycleAbstract } from './DesignLifecycleAbstract'
import type { DesignComponents } from './DesignComponents'
import type { DesignName } from './DesignName'

import type {
  ConstrItems,
  ConstrComponent,
  ConstrConstructor,
  ConstrConstructors,
  ConstrEmit,
  ConstrInstance,
  ConstrItem,
  ConstrParameters
} from '../../types/constructorTypes'

/**
 * Base class for main component logic orchestrators.
 * Stores shared dependencies and lazily creates dependency instances within the captured effect scope.
 * Invokes lifecycle callbacks synchronously; subclasses manage their own asynchronous work.
 *
 * Базовый класс для основных классов логики компонентов.
 * Хранит общие зависимости и лениво создает их экземпляры в сохраненной области реактивности.
 * Вызывает обработчики жизненного цикла синхронно; подклассы самостоятельно управляют асинхронной работой.
 */
export abstract class DesignLogicAbstract<
  E extends Element,
  COMP extends ConstrComponent,
  EMITS extends ConstrItem,
  SLOTS extends ConstrItem,
  P extends ConstrItem,
  CONSTRUCTORS extends ConstrConstructors<CONSTRUCTORS> = object
> {
  /** Current effect scope / Текущая область реактивности */
  protected readonly scope = getCurrentScope()

  /** Item configurations and default constructors by dependency name / Конфигурации элементов и конструкторы по умолчанию по имени зависимости */
  protected abstract readonly constructorItems: ConstrItems<CONSTRUCTORS>

  /** Cached dependency instances without inherited properties / Сохраненные экземпляры зависимостей без унаследованных свойств */
  protected readonly instances: {
    [K in keyof CONSTRUCTORS & string]?: ConstrInstance<CONSTRUCTORS, K>
  } = Object.create(null)

  /** Callback after dependency mount callbacks / Обработчик после обработчиков монтирования зависимостей */
  protected readonly onMounted?: () => void
  /** Callback after dependency cleanup callbacks / Обработчик после обработчиков очистки зависимостей */
  protected readonly onUnmounted?: () => void

  /**
   * Initializes shared dependencies and registers component lifecycle callbacks.
   *
   * Инициализирует общие зависимости и регистрирует обработчики жизненного цикла компонента.
   * @param props component properties / свойства компонента
   * @param element root element reference / ссылка на корневой элемент
   * @param naming component naming helper / помощник именования компонента
   * @param components connected components / подключенные компоненты
   * @param slots component slots / слоты компонента
   * @param emits event emitter / функция отправки событий
   * @param constructors dependency constructor overrides / переопределения конструкторов зависимостей
   */
  constructor(
    protected readonly props: Readonly<P>,
    protected readonly element: Ref<E | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComponents<COMP, P>,
    protected readonly slots?: SLOTS,
    protected readonly emits?: ConstrEmit<EMITS>,
    protected readonly constructors?: Partial<CONSTRUCTORS>
  ) {
    if (getCurrentInstance()) {
      onMounted(() => {
        const instances = Object.values(this.instances)
        this.isMounted.value = true

        if (this.scope?.active) {
          this.scope.run(() => {
            this.callLifecycle('onMounted', instances)
            this.onMounted?.()
          })
        }
      })

      onUnmounted(() => {
        this.callLifecycle('onUnmounted')
        this.onUnmounted?.()
      })
    }
  }

  /** Whether the component mount hook has run / Выполнен ли обработчик монтирования компонента */
  protected readonly isMounted = ref(false)

  /**
   * Gets a dependency instance, creating it on first access within the captured active effect scope.
   *
   * Возвращает экземпляр зависимости, создавая его при первом обращении в сохраненной активной области реактивности.
   * @param name string constructor name / строковое имя конструктора
   * @returns dependency instance / экземпляр зависимости
   */
  getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K> {
    let instance = this.instances[name]

    if (!instance) {
      const Constructor = this.getConstructor(name)

      if (
        Constructor
        && this.scope?.active
      ) {
        this.scope.run(() => {
          const parameters = this.constructorItems[name]?.parameters?.() ?? []
          instance = new Constructor(...(parameters as ConstrParameters<CONSTRUCTORS, K>))
          this.instances[name] = instance

          if (
            this.isMounted.value
            && this.isLifecycle(instance)
          ) {
            this.callLifecycle('onMounted', [instance])
          }
        })
      }
    }

    return instance as ConstrInstance<CONSTRUCTORS, K>
  }

  /**
   * Short alias for {@link getInstance}.
   *
   * Короткий псевдоним для {@link getInstance}.
   * @param name string constructor name / строковое имя конструктора
   * @returns dependency instance / экземпляр зависимости
   */
  i<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K> {
    return this.getInstance(name)
  }

  /**
   * Checks whether a dependency implements the lifecycle base class.
   *
   * Проверяет, является ли зависимость экземпляром базового класса жизненного цикла.
   * @param instance dependency instance / экземпляр зависимости
   * @returns whether the instance belongs to the lifecycle base class / принадлежит ли экземпляр базовому классу жизненного цикла
   */
  protected isLifecycle(instance: unknown): instance is DesignLifecycleAbstract {
    return instance instanceof DesignLifecycleAbstract
  }

  /**
   * Returns the constructor for the specified dependency name.
   *
   * Возвращает конструктор для указанного имени зависимости.
   * @param name dependency constructor name / имя конструктора зависимости
   * @returns dependency constructor / конструктор зависимости
   */
  protected getConstructor<K extends keyof CONSTRUCTORS & string>(name: K): ConstrConstructor<CONSTRUCTORS, K> {
    if (this.constructors?.[name]) {
      return this.constructors[name] as ConstrConstructor<CONSTRUCTORS, K>
    }

    return this.constructorItems[name]?.item as ConstrConstructor<CONSTRUCTORS, K>
  }

  /**
   * Calls dependency lifecycle callbacks synchronously.
   *
   * Синхронно вызывает обработчики жизненного цикла зависимостей.
   * @param name lifecycle callback name / имя обработчика жизненного цикла
   * @param instances dependency instances / экземпляры зависимостей
   * @throws AggregateError collected callback errors after all callbacks run / собранные ошибки после выполнения всех обработчиков
   */
  protected callLifecycle(name: keyof DesignLifecycleAbstract, instances: unknown[] = Object.values(this.instances)): void {
    const failures: unknown[] = []

    forEach(instances, (instance) => {
      if (this.isLifecycle(instance)) {
        try {
          instance[name]?.()
        } catch (error) {
          failures.push(error)
        }
      }
    })

    if (failures.length > 0) {
      const error = new AggregateError(failures, `Lifecycle callback ${name} failed`)
      ErrorCenter.on({ group: 'design', code: name, details: error })
      throw error
    }
  }
}
