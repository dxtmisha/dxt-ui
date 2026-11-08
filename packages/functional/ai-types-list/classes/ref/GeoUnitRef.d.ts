// md5:1b6a48f8ec64ad97736649deab213762 true
import { type ComputedRef, type Ref } from 'vue';
import { GeoUnit, type NumberOrString } from '@dxtmisha/functional-basic';
/** Reactive wrapper for GeoUnit that formats metric values using regional units. @keywords geo, unit, reactive, format, measurement */
export declare class GeoUnitRef {
    /** Initializes GeoUnitRef with a locale or country code ref. @keywords geo, unit, constructor, locale */
    constructor(code?: RefOrNormal<string | undefined>);
    /** Returns the resolved standard locale as a computed ref. @keywords get location, locale, computed */
    getLocation(): ComputedRef<string>;
    /** Formats degrees Celsius, converting to Fahrenheit where required. @keywords celsius, fahrenheit, temperature, format */
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats centimeters, converting to inches where required. @keywords centimeter, inch, length, format */
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Selects metric source unit reactively and formats with regional conversion. @keywords format, unit, conversion, geo */
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats grams, converting to ounces where required. @keywords gram, ounce, weight, mass, format */
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats hectares, converting to acres where required. @keywords hectare, acre, area, format */
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilograms, converting to pounds where required. @keywords kilogram, pound, weight, mass, format */
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometers, converting to miles where required. @keywords kilometer, mile, distance, length, format */
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometers per hour, converting to miles per hour where required. @keywords kilometer per hour, speed, velocity, mph, format */
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats liters, converting to gallons where required. @keywords liter, gallon, volume, format */
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats meters, converting to feet where required. @keywords meter, foot, length, distance, format */
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats milliliters, converting to fluid ounces where required. @keywords milliliter, fluid ounce, volume, format */
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats millimeters, converting to inches where required. @keywords millimeter, inch, length, format */
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats square meters, converting to square feet where required. @keywords square meter, square foot, area, format */
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats tonnes, converting to tons where required. @keywords tonne, ton, weight, mass, format */
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}