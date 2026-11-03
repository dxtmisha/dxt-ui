// md5:04288c7917cffa0d03050da5592ddb3e true
/** Generates a safe HTML script tag containing serialized data for client hydration. @keywords safe script, hydration, state transfer, serialization, html */
export declare function getElementSafeScript<T = unknown>(id: string | number, data?: T): string;