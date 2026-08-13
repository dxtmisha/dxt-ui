// md5:891e56c489aabfd1ec90825d51f476a3 true
/**
 * Class for localized unit formatting and automatic conversions.
 * @keywords geo unit format convert metric imperial
 */
export declare class GeoUnit {
    /** Returns a request-isolated instance of GeoUnit or cached instance. @keywords get instance geo unit */
    static getInstance(code?: string): GeoUnit;
    /** Constructor. @keywords constructor geo unit */
    constructor(code?: string);
    /** Returns the standard location code. @keywords get location standard */
    getLocation(): string;
    /** Formats millimeter value, converting to inches if overridden by locale unit settings. @keywords format millimeter inch */
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats centimeter value, converting to inches if overridden by locale unit settings. @keywords format centimeter inch */
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats meter value, converting to feet if overridden by locale unit settings. @keywords format meter foot */
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometer value, converting to miles if overridden by locale unit settings. @keywords format kilometer mile */
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats square meter value, converting to square feet if overridden by locale unit settings. @keywords format square meter foot */
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats hectare value, converting to acres if overridden by locale unit settings. @keywords format hectare acre */
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats gram value, converting to ounces if overridden by locale unit settings. @keywords format gram ounce */
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilogram value, converting to pounds if overridden by locale unit settings. @keywords format kilogram pound */
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats tonne value, converting to short tons if overridden by locale unit settings. @keywords format tonne ton */
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats milliliter value, converting to fluid ounces if overridden by locale unit settings. @keywords format milliliter fluid ounce */
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats liter value, converting to gallons if overridden by locale unit settings. @keywords format liter gallon */
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats celsius value, converting to fahrenheit if overridden by locale unit settings. @keywords format celsius fahrenheit temperature */
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometer per hour value, converting to miles per hour if overridden by locale unit settings. @keywords format speed kmh mph */
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats the value for the specified unit, converting and formatting it according to the locale. @keywords format unit value */
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
}