// md5:99b04db8aa796b1d986bb4ab527023da true
/** Returns the Figma node used for storage by ID or defaults to figma.root. @keywords figma node root storage */
export declare function getFigmaItemByIdOrRoot<T extends UiFigmaNode = UiFigmaNode>(id?: string): Promise<T>;