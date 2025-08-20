import { MotionTransformState } from './MotionTransformState'

/**
 * Class for managing control actions.
 *
 * Класс для управления действиями управления.
 */
export class MotionTransformGo {
  /**
   * Constructor.
   *
   * Конструктор.
   * @param state class object for status management/ объект класса для управления статусом
   */
  constructor(
    protected readonly state: MotionTransformState
  ) {}

  /**
   * Opens.
   *
   * Открывает.
   */
  readonly open = () => this.state.set(true)

  /**
   * Closes.
   *
   * Закрывает.
   */
  readonly close = () => this.state.set(false)

  /**
   * Switching.
   *
   * Переключение.
   */
  readonly toggle = () => this.state.toggle()

  /**
   * State changes.
   *
   * Изменение состояния.
   * @param open opening status/ статус открытия
   */
  readonly to = (open: boolean) => this.state.set(open)
}
