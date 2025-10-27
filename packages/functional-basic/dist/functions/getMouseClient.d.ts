import { ImageCoordinator } from '../types/basicTypes';
/**
 * Returns the position of the mouse cursor or the location of the click.
 *
 * Возвращает позицию курсора мыши или место нажатия.
 * @param event event object/ объект события
 */
export declare function getMouseClient(event: MouseEvent & TouchEvent): ImageCoordinator;
