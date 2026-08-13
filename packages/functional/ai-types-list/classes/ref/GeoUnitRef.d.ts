// md5:d24c0a0ec6f92618c423588b74dd8723 true
import { ComputedRef, Ref } from 'vue';
import { GeoUnit, NumberOrString } from '@dxtmisha/functional-basic';

/**
 * Reactive class for managing localized unit formatting and automatic conversions.
 * @keywords GeoUnitRef, geo, unit, formatting, conversion, localized
 */
export declare class GeoUnitRef {
    /**
     * Creates an instance of GeoUnitRef.
     * @keywords constructor, geo, unit
     */
    constructor(code?: RefOrNormal<string>);

    /**
     * Returns the standard location code.
     * @keywords getLocation, location, code, standard
     */
    getLocation(): ComputedRef<string>;

    /**
     * Formats millimeter value, converting to inches if overridden by locale unit settings.
     * @keywords millimeter, format, length, unit
     */
    millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats centimeter value, converting to inches if overridden by locale unit settings.
     * @keywords centimeter, format, length, unit
     */
    centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats meter value, converting to feet if overridden by locale unit settings.
     * @keywords meter, format, length, unit
     */
    meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats kilometer value, converting to miles if overridden by locale unit settings.
     * @keywords kilometer, format, length, unit
     */
    kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats square meter value, converting to square feet if overridden by locale unit settings.
     * @keywords squareMeter, format, area, unit
     */
    squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats hectare value, converting to acres if overridden by locale unit settings.
     * @keywords hectare, format, area, unit
     */
    hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats gram value, converting to ounces if overridden by locale unit settings.
     * @keywords gram, format, mass, weight, unit
     */
    gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats kilogram value, converting to pounds if overridden by locale unit settings.
     * @keywords kilogram, format, mass, weight, unit
     */
    kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats tonne value, converting to short tons if overridden by locale unit settings.
     * @keywords tonne, format, mass, weight, unit
     */
    tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats milliliter value, converting to fluid ounces if overridden by locale unit settings.
     * @keywords milliliter, format, volume, unit
     */
    milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats liter value, converting to gallons if overridden by locale unit settings.
     * @keywords liter, format, volume, unit
     */
    liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats celsius value, converting to fahrenheit if overridden by locale unit settings.
     * @keywords celsius, format, temperature, unit
     */
    celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats kilometer per hour value, converting to miles per hour if overridden by locale unit settings.
     * @keywords kilometerPerHour, format, speed, unit
     */
    kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;

    /**
     * Formats the value for the specified unit reactively, converting and formatting it according to the locale.
     * @keywords format, unit, conversion, localized
     */
    format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}