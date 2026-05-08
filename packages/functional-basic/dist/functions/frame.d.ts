/**
 * Cyclically calls requestAnimationFrame until next returns true.
 *
 * Циклически вызывает requestAnimationFrame, пока next возвращает true.
 * @param callback the function to call when it's time to update your animation / функция, которая будет вызвана, когда придёт время обновить вашу анимацию
 * @param next function that determines repetition / функция, которая определяет повторность
 * @param end function that is executed if the animation stops / функция, которая выполняется, если останавливается анимация
 * @returns animation ID or undefined / ID анимации или undefined
 */
export declare function frame(callback: () => void, next?: () => boolean, end?: () => void): void;
