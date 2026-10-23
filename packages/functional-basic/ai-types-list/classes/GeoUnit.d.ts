// md5:f4c46e1f682593b0830366abe8757d1d true
/** Localized unit formatting and automatic conversions for metric and regional units. @keywords unit, localization, conversion, measurement, geo */
export declare class GeoUnit {
    /** Creates a GeoUnit instance for a locale or country code. @keywords constructor, locale */
    constructor(code?: string);
    /** Gets a cached GeoUnit instance for the specified locale code. @keywords cache, instance, factory */
    static getInstance(code?: string): GeoUnit;
    /** Returns the resolved standard location code. @keywords location, country, locale */
    getLocation(): string;
    /** Formats millimeters, converting to inches if configured by locale. @keywords millimeter, length, distance, inch */
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats centimeters, converting to inches if configured by locale. @keywords centimeter, length, distance, inch */
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats meters, converting to feet if configured by locale. @keywords meter, length, distance, foot */
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometers, converting to miles if configured by locale. @keywords kilometer, distance, mile */
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats square meters, converting to square feet if configured by locale. @keywords square meter, area, square foot */
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats hectares, converting to acres if configured by locale. @keywords hectare, area, acre */
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats grams, converting to ounces if configured by locale. @keywords gram, weight, mass, ounce */
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilograms, converting to pounds if configured by locale. @keywords kilogram, weight, mass, pound */
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats tonnes, converting to short tons if configured by locale. @keywords tonne, metric ton, mass, ton */
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats milliliters, converting to fluid ounces if configured by locale. @keywords milliliter, volume, fluid ounce */
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats liters, converting to gallons if configured by locale. @keywords liter, volume, gallon */
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats celsius, converting to fahrenheit if configured by locale. @keywords celsius, temperature, fahrenheit */
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometers per hour, converting to miles per hour if configured by locale. @keywords speed, kilometer per hour, mph */
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a numeric value for the specified unit according to locale rules. @keywords format, unit, conversion */
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
}