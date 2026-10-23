// md5:9d54a7833d3ed70f9c56a0aceeb9034f true
/** Manages phone number masks, country codes, and formatting. @keywords phone mask country code parser */
export declare class GeoPhone {
    /** Retrieves phone code and country mask data by country or language code. @keywords phone mask country code lookup */
    static get(code: string): GeoPhoneValue | undefined;
    /** Retrieves full phone mask map item by country code. @keywords phone mask map country */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /** Identifies country and mask metadata from a phone number string. @keywords phone metadata identify lookup */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /** Retrieves a list of all available phone mask items. @keywords phone masks list all */
    static getList(): GeoPhoneValue[];
    /** Retrieves a tree map of phone mask configurations indexed by code. @keywords phone mask tree map */
    static getMap(): Record<string, GeoPhoneMap>;
    /** Strips leading zeros or country dialing prefix from a phone number. @keywords sanitize phone clean zero prefix */
    static removeZero(phone: string): string;
    /** Formats a phone number according to matching or provided masks. @keywords format phone mask formatter */
    static toMask(phone: string, masks?: string[]): string | undefined;
}