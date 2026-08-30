// md5:6caf5ace19c7b0cb7292ad5b1b383656 true
/** Localized unit formatting and automatic conversions based on locale. @keywords unit measurement locale conversion format */
export declare class GeoUnit {
    /** Gets an isolated or cached GeoUnit instance by country or language code. @keywords instance singleton cache factory */
    static getInstance(code?: string): GeoUnit;
    /** Creates a GeoUnit instance for a country or language code. @keywords constructor init */
    constructor(code?: string);
    /** Gets the standard location code. @keywords location locale country */
    getLocation(): string;
    /** Formats millimeter value, converting to inches for imperial locales. @keywords millimeter mm inch */
    millimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats centimeter value, converting to inches for imperial locales. @keywords centimeter cm inch */
    centimeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats meter value, converting to feet for imperial locales. @keywords meter m foot feet */
    meter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilometer value, converting to miles for imperial locales. @keywords kilometer km mile */
    kilometer(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats square meter value, converting to square feet for imperial locales. @keywords square meter m2 sqft */
    squareMeter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats hectare value, converting to acres for imperial locales. @keywords hectare ha acre */
    hectare(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats gram value, converting to ounces for imperial locales. @keywords gram g ounce oz */
    gram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats kilogram value, converting to pounds for imperial locales. @keywords kilogram kg pound lb */
    kilogram(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats metric tonne value, converting to short tons for imperial locales. @keywords tonne ton */
    tonne(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats milliliter value, converting to fluid ounces for imperial locales. @keywords milliliter ml floz */
    milliliter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats liter value, converting to gallons for imperial locales. @keywords liter l gallon gal */
    liter(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats Celsius value, converting to Fahrenheit for imperial locales. @keywords celsius fahrenheit temperature */
    celsius(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats speed in km/h, converting to mph for imperial locales. @keywords kmh mph speed */
    kilometerPerHour(value: NumberOrString, options?: Intl.NumberFormatOptions): string;
    /** Formats a numeric value for the specified unit according to locale settings. @keywords format unit locale convert */
    format(value: NumberOrString, unit: string, options?: Intl.NumberFormatOptions): string;
}