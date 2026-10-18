import { getCurrentInstance, getCurrentScope, onMounted, onUnmounted, ref, type Ref } from 'vue'
import { ErrorCenter, forEach } from '@dxtmisha/functional-basic'

import { DesignLifecycleAbstract } from './DesignLifecycleAbstract'
import type { DesignComponents } from './DesignComponents'
import type { DesignName } from './DesignName'

import type {
  ConstrComponent,
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

  /** Argument factories by constructor name / Фабрики аргументов по имени конструктора */
  protected abstract readonly constructorArguments: {
    [K in keyof CONSTRUCTORS & string]-?: () => ConstrParameters<CONSTRUCTORS, K>
  }

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
  protected constructor(
    protected readonly props: Readonly<P>,
    protected readonly element: Ref<E | undefined>,
    protected readonly naming: DesignName,
    protected readonly components?: DesignComponents<COMP, P>,
    protected readonly slots?: SLOTS,
    protected readonly emits?: ConstrEmit<EMITS>,
    protected readonly constructors: Partial<CONSTRUCTORS> = {}
  ) {
    this.make()

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
   * @returns dependency instance or undefined if the constructor or active scope is unavailable / экземпляр зависимости или undefined, если конструктор или активная область недоступны
   */
  getInstance<K extends keyof CONSTRUCTORS & string>(name: K): ConstrInstance<CONSTRUCTORS, K> | undefined {
    if (
      !this.instances[name]
      && Object.hasOwn(this.constructors, name)
    ) {
      const Constructor = this.constructors[name] as
        (new (...parameters: ConstrParameters<CONSTRUCTORS, K>) => ConstrInstance<CONSTRUCTORS, K>)
        | undefined

      if (Constructor && this.scope?.active) {
        this.scope.run(() => {
          const instance = new Constructor(...this.constructorArguments[name]())
          this.instances[name] = instance

          if (this.isMounted.value && this.isLifecycle(instance)) {
            this.callLifecycle('onMounted', [instance])
          }
        })
      }
    }

    return this.instances[name]
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

  /**
   * Initializes component logic before lifecycle hooks are registered.
   * Derived field initializers have not run at this point.
   *
   * Инициализирует логику компонента до регистрации обработчиков жизненного цикла.
   * Инициализаторы полей наследника в этот момент еще не выполнены.
   */
  protected abstract make(): void
}
