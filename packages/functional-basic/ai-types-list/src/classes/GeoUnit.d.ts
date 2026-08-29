// md5:6caf5ace19c7b0cb7292ad5b1b383656 true
/** Formats and automatically converts units based on locale and country settings. @keywords geo unit, localization, unit converter, measurement */
export declare class GeoUnit {
    /** Gets a cached or request-isolated GeoUnit instance. @keywords singleton, factory, geo unit */
    static getInstance(code?: string): GeoUnit;
    /** Creates a new GeoUnit instance for a given country or locale code. @keywords constructor, init */
    constructor(code?: string);
    /** Retrieves the standard location or locale code. @keywords location, locale code */
    getLocation(): string;
    /** Formats millimeters with locale conversion to inches if applicable. @keywords millimeter, length, distance */
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats centimeters with locale conversion to inches if applicable. @keywords centimeter, length, distance */
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats meters with locale conversion to feet if applicable. @keywords meter, length, distance */
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometers with locale conversion to miles if applicable. @keywords kilometer, length, distance */
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats square meters with locale conversion to square feet if applicable. @keywords square meter, area */
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats hectares with locale conversion to acres if applicable. @keywords hectare, area, land */
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats grams with locale conversion to ounces if applicable. @keywords gram, weight, mass */
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilograms with locale conversion to pounds if applicable. @keywords kilogram, weight, mass */
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats metric tonnes with locale conversion to short tons if applicable. @keywords tonne, weight, mass */
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats milliliters with locale conversion to fluid ounces if applicable. @keywords milliliter, volume, liquid */
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats liters with locale conversion to gallons if applicable. @keywords liter, volume, liquid */
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats Celsius temperature with locale conversion to Fahrenheit if applicable. @keywords celsius, temperature, fahrenheit */
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats speed in km/h with locale conversion to mph if applicable. @keywords speed, kilometer per hour, mph */
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a numeric value for a given unit with locale-based conversion. @keywords format, unit, conversion */
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
}