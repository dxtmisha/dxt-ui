/**
 * Callback function for requesting collage layout recalculation. /
 * Функция обратного вызова для запроса перерасчета макета коллажа.
 */
export type CollageUpdate = () => void

/**
 * Provide name for collage layout update callback. /
 * Название provide для функции обновления макета коллажа.
 */
export const COLLAGE_NAME_UPDATE = 'collage-update'
