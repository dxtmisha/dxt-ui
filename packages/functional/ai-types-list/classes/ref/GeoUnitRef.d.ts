// md5:db627f8407738efc0f65f6848004d918 true
import { type ComputedRef, type Ref } from 'vue';
import { GeoUnit, type NumberOrString } from '@dxtmisha/functional-basic';
/** Reactive manager for localized unit formatting and automatic conversions. @keywords geo, unit, format, localization, vue, reactive */
export declare class GeoUnitRef {
    /** Initializes GeoUnitRef with an optional country or locale code. @keywords constructor, locale */
    constructor(code?: RefOrNormal<string>);
    /** Returns the standard location code as a computed reference. @keywords location, locale, computed */
    getLocation(): ComputedRef<string>;
    /** Formats millimeter value, converting to inches if required by locale. @keywords millimeter, mm, length, format */
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats centimeter value, converting to inches if required by locale. @keywords centimeter, cm, length, format */
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats meter value, converting to feet if required by locale. @keywords meter, length, format */
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometer value, converting to miles if required by locale. @keywords kilometer, km, distance, format */
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats square meter value, converting to square feet if required by locale. @keywords square meter, area, format */
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats hectare value, converting to acres if required by locale. @keywords hectare, area, format */
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats gram value, converting to ounces if required by locale. @keywords gram, weight, mass, format */
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilogram value, converting to pounds if required by locale. @keywords kilogram, kg, weight, format */
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats tonne value, converting to short tons if required by locale. @keywords tonne, weight, mass, format */
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats milliliter value, converting to fluid ounces if required by locale. @keywords milliliter, ml, volume, format */
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats liter value, converting to gallons if required by locale. @keywords liter, volume, format */
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats celsius value, converting to fahrenheit if required by locale. @keywords celsius, temperature, format */
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Formats kilometer per hour value, converting to mph if required by locale. @keywords speed, kilometerPerHour, velocity, format */
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
    /** Reactively formats a value for a specified unit according to locale settings. @keywords format, unit, locale */
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}