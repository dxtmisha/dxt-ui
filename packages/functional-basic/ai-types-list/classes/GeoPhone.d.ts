// md5:48deed2d94f52b6bb096baec64b24e9b true
/** Stores and processes phone number masks. @keywords phone mask geo country code */
export declare class GeoPhone {
    /** Retrieves phone code and country mask data by country/language code. @keywords phone mask country code */
    static get(code: string): GeoPhoneValue | undefined;
    /** Retrieves complete mask data by country code. @keywords phone mask country code map */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /** Retrieves phone mask information by phone number. @keywords parse phone number mask info */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /** Retrieves complete phone information including formatted phone number. @keywords phone format parse info */
    static getByPhoneFull(phone: string): GeoPhoneMapInfoFull;
    /** Returns an array of all phone number masks. @keywords phone list masks */
    static getList(): GeoPhoneValue[];
    /** Returns a code-indexed map tree of phone codes. @keywords phone map tree */
    static getMap(): Record<string, GeoPhoneMap>;
    /** Removes non-digit characters from a phone number string. @keywords clean sanitize phone digits */
    static cleanPhone(value: string): string;
}