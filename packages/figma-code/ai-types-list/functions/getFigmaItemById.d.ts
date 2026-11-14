// md5:3592a2a9ff549203edaecc1fd52193a6 true
import { FigmaItem } from '../classes/FigmaItem';
import type { UiFigmaNode } from '../types/figmaTypes';
/** Retrieves a Figma item by its node identifier. @keywords figma item, node id, get figma node, figma fetch */
export declare function getFigmaItemById<T extends UiFigmaNode = UiFigmaNode>(id?: string): Promise<FigmaItem<T> | undefined>;