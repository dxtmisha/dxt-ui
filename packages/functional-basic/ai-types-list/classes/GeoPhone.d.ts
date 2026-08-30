// md5:8526100465b5d01cb89e6da88df4066a true
/** Class for storing and processing phone number masks and country dialing codes. @keywords phone, mask, country code, dialing */
export declare class GeoPhone {
    /** Retrieves phone code and country information by country code. @keywords phone info, country code */
    static get(code: string): GeoPhoneValue | undefined;
    /** Retrieves country and mask information from a phone number. @keywords parse phone, phone lookup */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /** Retrieves complete phone mask data by country code. @keywords mask by code, country mask */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /** Returns a list of all phone country codes and metadata. @keywords phone list, country codes */
    static getList(): GeoPhoneValue[];
    /** Returns a map tree of phone data indexed by country code. @keywords phone map, dial tree */
    static getMap(): Record<string, GeoPhoneMap>;
    /** Formats a phone number according to provided or matched masks. @keywords format phone, apply mask */
    static toMask(phone: string, masks?: string[]): string | undefined;
    /** Removes country prefixes or trunk zeroes from an input phone number. @keywords clean phone, strip prefix */
    static removeZero(phone: string): string;
}