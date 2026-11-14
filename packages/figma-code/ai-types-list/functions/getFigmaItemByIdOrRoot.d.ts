// md5:5e52fdbf79055e7144221f9ab7654721 true
import type { UiFigmaNode } from '../types/figmaTypes';
/** Returns the Figma node used for storage by ID or figma.root. @keywords figma, node, storage, root, lookup */
export declare function getFigmaItemByIdOrRoot<T extends UiFigmaNode = UiFigmaNode>(id?: string): Promise<T>;