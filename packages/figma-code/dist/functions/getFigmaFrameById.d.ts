import { FigmaFrame } from '../classes/FigmaFrame';
/**
 * Returns a FigmaFrame object by its ID.
 *
 * Возвращает объект FigmaFrame по его идентификатору.
 * @param id node ID / идентификатор узла
 * @returns promise with FigmaFrame object or undefined /
 * промис с объектом FigmaFrame или undefined
 */
export declare function getFigmaFrameById(id: string): Promise<FigmaFrame | undefined>;
