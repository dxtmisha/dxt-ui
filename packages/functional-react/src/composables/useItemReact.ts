import {
  useRef,
  useState
} from 'react'
import { executeFunction } from '@dxtmisha/functional-basic'

import { getReact } from '../functions/ref/getReact'
import type { RefOrNormalReact } from '../types/refTypes'

/**
 * React hook that converts a static value or React ref into synchronized reactive state.
 * Automatically unwraps the incoming reference, optionally transforms it via a callback,
 * and synchronizes the local state whenever the incoming value or reference changes across renders.
 *
 * React-хук, преобразующий статическое значение или React ref в синхронизированное реактивное состояние.
 * Автоматически разворачивает входящую ссылку, при необходимости преобразует её через колбэк
 * и синхронизирует локальное состояние при изменении входящего значения или рефа между рендерами.
 * @param item input value or React ref / входное значение или React ref
 * @param callback optional transformation callback / опциональный колбэк преобразования
 * @returns tuple of current state and setter / кортеж из текущего состояния и сеттера
 */
export function useItemReact<T, R = T>(
  item?: RefOrNormalReact<T>,
  callback?: (value: T) => R
): [R, (value: R) => void] {
  /** Unwrapped value extracted from ref or plain input / Распакованное значение, извлечённое из рефа или обычного ввода */
  const raw = getReact(item)

  /**
   * Transforms the raw value via the callback or returns the value as is.
   *
   * Преобразует сырое значение через колбэк или возвращает значение без изменений.
   * @param value raw value for transformation / сырое значение для преобразования
   * @returns processed value / обработанное значение
   */
  const toValue = (value: unknown): R => {
    return executeFunction<R>(callback ?? (value as R), value as T)
  }

  /** Current reactive state and its setter / Текущее реактивное состояние и его сеттер */
  const [current, setCurrent] = useState<R>(() => toValue(raw))

  /** Reference for tracking previous value between renders / Ссылка для отслеживания предыдущего значения между рендерами */
  const lastRef = useRef(raw)

  if (lastRef.current !== raw) {
    lastRef.current = raw
    setCurrent(toValue(raw))
  }

  return [current, setCurrent]
}
