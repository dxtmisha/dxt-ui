import { MotionTransformState } from './MotionTransformState'

/**
 * Class for managing control actions and open/close state transitions.
 *
 * Класс для управления действиями перехода состояний открытия/закрытия.
 */
export class MotionTransformGo {
  /**
   * Constructor for creating a MotionTransformGo instance.
   *
   * Конструктор для создания экземпляра MotionTransformGo.
   * @param state state manager / менеджер состояния
   */
  constructor(
    protected readonly state: MotionTransformState
  ) {}

  /**
   * Opens the transform container.
   *
   * Открывает контейнер трансформации.
   */
  readonly open = () => this.state.set(true)

  /**
   * Closes the transform container.
   *
   * Закрывает контейнер трансформации.
   */
  readonly close = () => {
    this.state.set(false)
  }

  /**
   * Toggles the open/closed state of the transform container.
   *
   * Переключает открытое/закрытое состояние контейнера трансформации.
   */
  readonly toggle = () => this.state.toggle()

  /**
   * Changes the state to the specified open/closed boolean.
   *
   * Изменяет состояние на указанное булево значение открытия/закрытия.
   * @param open target opening status / целевой статус открытия
   */
  readonly to = (open: boolean) => this.state.set(open)
}
