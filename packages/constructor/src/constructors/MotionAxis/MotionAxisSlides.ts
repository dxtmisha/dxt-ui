import { onUpdated, ref } from 'vue'

import { MotionAxisStatus } from './MotionAxisStatus'

import type { MotionAxisSlots } from './types'
import type { MotionAxisSelectedValue } from './basicTypes'

/**
 * Class for managing the list of slides derived from component slots.
 * It provides tools to navigate and lookup slide keys sequentially.
 *
 * Класс для управления списком слайдов, полученным из слотов компонента.
 * Предоставляет инструменты для последовательной навигации и поиска ключей слайдов.
 */
export class MotionAxisSlides {
  /** Reactive list of slide keys / Реактивный список ключей слайдов */
  readonly item = ref<string[]>([])

  /**
   * Constructor for initializing slide list managers.
   *
   * Конструктор для инициализации менеджеров списка слайдов.
   * @param status status tracker object / объект отслеживания статуса
   * @param slots component slots / слоты компонента
   */
  constructor(
    protected readonly status: MotionAxisStatus,
    protected readonly slots?: MotionAxisSlots
  ) {
    onUpdated(this.update)
    this.update()
  }

  /**
   * Returns reactive slide keys list reference.
   *
   * Возвращает реактивный список ключей слайдов.
   * @returns reactive reference of keys array / реактивная ссылка на массив ключей
   */
  get() {
    return this.item
  }

  /**
   * Returns the slide key adjacent to current active slide by step offset.
   *
   * Возвращает выбранный слайд.
   * @param step change step number / номер шага изменения
   * @returns slide key or undefined / ключ слайда или undefined
   */
  getByIndex(step: number): string | undefined {
    const slides = this.item.value ?? []
    const selected = this.findIndex()

    if (selected === -1) {
      return slides?.[0]
    }

    const focus = selected + step

    if (focus >= slides.length) {
      return slides?.[0]
    }

    if (focus <= -1) {
      return slides?.[slides.length - 1]
    }

    return slides?.[focus]
  }

  /**
   * Finds index of a slide key in the slide key list.
   *
   * Находит индекс ключа слайда в списке ключей слайдов.
   * @param selected selected item key / ключ выбранного элемента
   * @returns slide index or -1 if not found / индекс слайда или -1, если не найден
   */
  findIndex(
    selected: MotionAxisSelectedValue = this.status.get()
  ) {
    return this.item.value.findIndex(item => item === selected)
  }

  /**
   * Manually adds a slide key to the list.
   *
   * Вручную добавляет ключ слайда в список.
   * @param key slide key / ключ слайда
   */
  add(key: string) {
    this.item.value.push(key)
  }

  /**
   * Resets and clears the slide list.
   *
   * Сбрасывает и очищает список слайдов.
   */
  reset() {
    this.item.value = []
  }

  /**
   * Updates slide list keys automatically based on current slots.
   *
   * Автоматически обновляет ключи списка слайдов на основе текущих слотов.
   */
  readonly update = () => {
    if (this.slots) {
      this.item.value = Object.keys(this.slots)
    } else {
      this.item.value = []
    }
  }
}
