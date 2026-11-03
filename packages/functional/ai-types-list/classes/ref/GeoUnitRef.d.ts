// md5:510d329cdcf0f8e0cf2589b69d92ea4b true
import { type ComputedRef, type Ref } from 'vue';
import { GeoUnit, type NumberOrString } from '@dxtmisha/functional-basic';

/** Reactive wrapper for GeoUnit regional unit formatting with reactive computed updates. @keywords geo unit, format, regional units, reactive */
export declare class GeoUnitRef {
    /** Initializes GeoUnitRef with an optional locale or country code. @keywords constructor, init, locale */
    constructor(code?: RefOrNormal<string>);
    /** Returns the resolved standard locale as a computed ref. @keywords get location, locale, computed */
    getLocation(): ComputedRef<string>;
    /** Formats millimeters; converts to inch where regional settings require it. @keywords millimeter, inch, length, format */
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats centimeters; converts to inch where regional settings require it. @keywords centimeter, inch, length, format */
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats meters; converts to foot where regional settings require it. @keywords meter, foot, length, format */
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometers; converts to mile where regional settings require it. @keywords kilometer, mile, distance, format */
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats square meters; converts to square-foot where regional settings require it. @keywords square meter, square foot, area, format */
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats hectares; converts to acre where regional settings require it. @keywords hectare, acre, area, format */
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats grams; converts to ounce where regional settings require it. @keywords gram, ounce, mass, format */
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilograms; converts to pound where regional settings require it. @keywords kilogram, pound, weight, format */
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats tonnes; converts to ton where regional settings require it. @keywords tonne, ton, weight, mass, format */
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats milliliters; converts to fluid-ounce where regional settings require it. @keywords milliliter, fluid ounce, volume, format */
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats liters; converts to gallon where regional settings require it. @keywords liter, gallon, volume, format */
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats degrees Celsius; converts to fahrenheit where regional settings require it. @keywords celsius, fahrenheit, temperature, format */
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometers per hour; converts to mile-per-hour where regional settings require it. @keywords kilometer per hour, speed, format */
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Selects the metric unit and delegates conversion and formatting to GeoUnit. @keywords format, unit conversion, regional units */
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}