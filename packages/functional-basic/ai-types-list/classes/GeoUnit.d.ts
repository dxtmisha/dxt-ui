// md5:6c66fd107bf906d8d414bdc5f1875a06 true
/** Formats and converts measurement units based on locale conventions. @keywords unit formatter, localized measurement, metric imperial conversion */
export declare class GeoUnit {
    /** Initializes a GeoUnit instance for a locale or country code. @keywords constructor, locale unit init */
    constructor(code?: string);
    /** Returns a cached GeoUnit instance for the given locale. @keywords singleton, cached instance, locale */
    static getInstance(code?: string): GeoUnit;
    /** Gets the resolved standard location code. @keywords location code, locale identifier */
    getLocation(): string;
    /** Formats Celsius, converting to Fahrenheit if the locale uses imperial units. @keywords celsius, fahrenheit, temperature formatting */
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats centimeters, converting to inches if the locale uses imperial units. @keywords centimeter, inch, length conversion */
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a numeric value for a specified unit with locale-based conversion. @keywords unit format, localized conversion, measurement */
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
    /** Formats grams, converting to ounces if the locale uses imperial units. @keywords gram, ounce, mass conversion */
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats hectares, converting to acres if the locale uses imperial units. @keywords hectare, acre, area conversion */
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilograms, converting to pounds if the locale uses imperial units. @keywords kilogram, pound, weight conversion */
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometers, converting to miles if the locale uses imperial units. @keywords kilometer, mile, distance conversion */
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometers per hour, converting to miles per hour for imperial locales. @keywords kmh, mph, speed conversion */
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats liters, converting to gallons if the locale uses imperial units. @keywords liter, gallon, volume conversion */
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats meters, converting to feet if the locale uses imperial units. @keywords meter, feet, length conversion */
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats milliliters, converting to fluid ounces for imperial locales. @keywords milliliter, fluid ounce, volume conversion */
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats millimeters, converting to inches if the locale uses imperial units. @keywords millimeter, inch, length conversion */
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats square meters, converting to square feet for imperial locales. @keywords square meter, square feet, area conversion */
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats metric tonnes, converting to short tons for imperial locales. @keywords tonne, short ton, weight conversion */
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
}