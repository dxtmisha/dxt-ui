// md5:db627f8407738efc0f65f6848004d918 true
import { type ComputedRef, type Ref } from 'vue';
import { GeoUnit, type NumberOrString } from '@dxtmisha/functional-basic';

/** Reactive manager for localized unit formatting and automatic conversions @keywords geo unit, formatting, conversion, locale, reactive */
export declare class GeoUnitRef {
  /** Creates a GeoUnitRef instance @param code Country code or language-country tag @keywords constructor, geo unit, init */
  constructor(code?: RefOrNormal<string>);
  /** Returns computed standard location code @keywords get location, locale code */
  getLocation(): ComputedRef<string>;
  /** Formats millimeter value, converting to inches if configured by locale @keywords millimeter, mm, length, format */
  millimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats centimeter value, converting to inches if configured by locale @keywords centimeter, cm, length, format */
  centimeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats meter value, converting to feet if configured by locale @keywords meter, m, length, format */
  meter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats kilometer value, converting to miles if configured by locale @keywords kilometer, km, distance, format */
  kilometer(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats square meter value, converting to square feet if configured by locale @keywords square meter, area, format */
  squareMeter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats hectare value, converting to acres if configured by locale @keywords hectare, area, format */
  hectare(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats gram value, converting to ounces if configured by locale @keywords gram, g, mass, weight, format */
  gram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats kilogram value, converting to pounds if configured by locale @keywords kilogram, kg, mass, weight, format */
  kilogram(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats tonne value, converting to short tons if configured by locale @keywords tonne, metric ton, mass, format */
  tonne(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats milliliter value, converting to fluid ounces if configured by locale @keywords milliliter, ml, volume, format */
  milliliter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats liter value, converting to gallons if configured by locale @keywords liter, l, volume, format */
  liter(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats Celsius value, converting to Fahrenheit if configured by locale @keywords celsius, temperature, format */
  celsius(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats kilometer per hour value, converting to miles per hour if configured by locale @keywords kilometer per hour, km/h, speed, format */
  kilometerPerHour(value: RefOrNormal<NumberOrString>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
  /** Formats a value for a specified unit reactively based on locale @keywords format, unit, locale, conversion */
  format(value: RefOrNormal<NumberOrString>, unit: RefOrNormal<string>, options?: Intl.NumberFormatOptions): ComputedRef<string>;
}