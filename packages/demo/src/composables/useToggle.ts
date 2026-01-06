import { ref, type Ref } from 'vue'

/**
 * Interface for useToggle return value.
 *
 * Интерфейс для возвращаемого значения useToggle.
 */
export interface UseToggleReturn {
  /** Current state / Текущее состояние */
  value: Ref<boolean>
  /** Function to toggle state / Функция переключения состояния */
  toggle: (nextValue?: boolean) => void
  /** Function to set state to true / Функция установки состояния в true */
  setTrue: () => void
  /** Function to set state to false / Функция установки состояния в false */
  setFalse: () => void
}

/**
 * Composable for managing boolean state.
 *
 * Композабл для управления булевым состоянием.
 * @param initialValue Initial state value / Начальное значение состояния
 */
export function useToggle(initialValue: boolean = false): UseToggleReturn {
  const value = ref(initialValue)

  const toggle = (nextValue?: boolean) => {
    value.value = typeof nextValue === 'boolean' ? nextValue : !value.value
  }

  const setTrue = () => toggle(true)

  const setFalse = () => toggle(false)

  return {
    value,
    toggle,
    setTrue,
    setFalse
  }
}
