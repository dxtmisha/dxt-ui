import type { RefObject } from 'react'

/**
 * Union type that can be either a React RefObject or a normal value /
 * Объединенный тип, который может быть либо React RefObject, либо обычным значением
 */
export type RefOrNormalReact<T> = RefObject<T | null | undefined> | T
