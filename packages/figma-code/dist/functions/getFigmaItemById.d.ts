import { FigmaItem } from '../classes/FigmaItem';
import { UiFigmaNode } from '../types/figmaTypes';
/**
 * Returns the Figma item by ID.
 *
 * Возвращает узел Figma по идентификатору.
 * @param id node ID/ идентификатор узла
 */
export declare function getFigmaItemById<T extends UiFigmaNode = UiFigmaNode>(id: string): Promise<FigmaItem<T> | undefined>;
