// md5:8526100465b5d01cb89e6da88df4066a true
/** Phone number mask processor and country code mapping utility. @keywords geo, phone, mask, country-code */
export declare class GeoPhone {
    /** Retrieves phone code and country information by country code. @keywords phone, country-info */
    static get(code: string): GeoPhoneValue | undefined;
    /** Retrieves phone metadata and matching mask by phone number. @keywords phone-lookup, country-phone */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /** Retrieves complete phone mask data by country code. @keywords phone-mask, country-code */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /** Returns a list of all phone values and masks. @keywords phone-list, country-codes */
    static getList(): GeoPhoneValue[];
    /** Returns a hierarchical map of phone codes. @keywords phone-map, tree */
    static getMap(): Record<string, GeoPhoneMap>;
    /** Formats a phone number according to mask patterns. @keywords format-phone, phone-mask */
    static toMask(phone: string, masks?: string[]): string | undefined;
    /** Removes country trunk prefix or leading zero from phone number. @keywords sanitize-phone, remove-zero */
    static removeZero(phone: string): string;
}