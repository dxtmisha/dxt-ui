// md5:e7be4b7059f4fb463e05e1d07594d993 true
/** Stores and processes phone number masks @keywords geophone phone mask country code */
export declare class GeoPhone {
    /** Retrieves phone info by country code @keywords get phone info country */
    static get(code: string): GeoPhoneValue | undefined;
    /** Retrieves phone info by phone number @keywords get by phone number */
    static getByPhone(phone: string): GeoPhoneMapInfo;
    /** Retrieves mask data by country code @keywords get by code country */
    static getByCode(code: string): GeoPhoneMap | undefined;
    /** Retrieves list of all phone values @keywords get list phone values */
    static getList(): GeoPhoneValue[];
    /** Retrieves tree map sorted by code @keywords get map tree */
    static getMap(): Record<string, GeoPhoneMap>;
    /** Converts number to phone mask @keywords to mask format */
    static toMask(phone: string, masks?: string[]): string | undefined;
    /** Removes country code from phone number @keywords remove zero prefix */
    static removeZero(phone: string): string;
}