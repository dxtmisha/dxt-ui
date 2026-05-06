import { UiFigmaNode } from '../types/figmaTypes';
/**
 * Returns the Figma node used for storage by ID or figma.root.
 *
 * Возвращает узел Figma, используемый для хранения, по идентификатору или figma.root.
 * @param id node ID/ идентификатор узла
 */
export declare function getFigmaItemByIdOrRoot<T extends UiFigmaNode = UiFigmaNode>(id?: string): Promise<T>;
