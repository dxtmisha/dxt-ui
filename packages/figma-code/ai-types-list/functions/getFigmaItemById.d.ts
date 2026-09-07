// md5:7a830f0df444066129c08ae2cf4dd574 true
/** Returns a Figma item by its ID. @keywords figma, item, node, get, id, find */
export declare function getFigmaItemById<T extends UiFigmaNode = UiFigmaNode>(id: string): Promise<FigmaItem<T> | undefined>;