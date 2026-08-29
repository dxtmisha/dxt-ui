// md5:b2fe331169b3c497b1635ef0089acd64 true
export declare enum FormattersType {
  currency = "currency",
  date = "date",
  name = "name",
  number = "number",
  plural = "plural",
  unit = "unit"
}

export type FormattersOptionsCurrency = {
  currencyPropName?: string;
  options?: string | Intl.NumberFormatOptions;
  numberOnly?: boolean;
};

export type FormattersOptionsDate = {
  type?: GeoDate;
  options?: Intl.DateTimeFormatOptions['month'] | Intl.DateTimeFormatOptions;
  hour24?: boolean;
};

export type FormattersOptionsName = {
  lastPropName?: string;
  firstPropName?: string;
  surname?: string;
  short?: boolean;
};

export type FormattersOptionsNumber = {
  options?: Intl.NumberFormatOptions;
};

export type FormattersOptionsPlural = {
  words: string;
  options?: Intl.PluralRulesOptions;
  optionsNumber?: Intl.NumberFormatOptions;
};

export type FormattersOptionsUnit = {
  unit: string | Intl.NumberFormatOptions;
};

/** Formatter type to options mapping. @keywords formatter, options */
export type FormattersOptionsInformation<Type extends FormattersType> = Type extends FormattersType.currency ? FormattersOptionsCurrency : Type extends FormattersType.date ? FormattersOptionsDate : Type extends FormattersType.name ? FormattersOptionsName : Type extends FormattersType.number ? FormattersOptionsNumber : Type extends FormattersType.plural ? FormattersOptionsPlural : Type extends FormattersType.unit ? FormattersOptionsUnit : Record<string, any>;

/** Single property formatter configuration. @keywords formatter, item, configuration */
export type FormattersOptionsItem<Type extends FormattersType = FormattersType, R = string> = {
  type?: Type;
  transformation?: (valueOriginal: any, item: any, options?: FormattersOptionsInformation<Type>) => R;
  options?: FormattersOptionsInformation<Type>;
};

export type FormattersOptionsList = Record<string, FormattersOptionsItem>;

export type FormattersListItem = Record<string, any>;

export type FormattersList<Item extends FormattersListItem> = Item[];

/** Capitalizes dot-notated property paths. @keywords capitalize, string */
export type FormattersCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<FormattersCapitalize<Rest>>}` : K;

export type FormattersColumns<T extends FormattersOptionsList> = (keyof T & string)[];

/** Generates formatted property key with suffix. @keywords key, property */
export type FormattersKey<K, A extends string = 'Format'> = K extends string ? `${FormattersCapitalize<K>}${A}` : never;

/** Data item augmented with formatted property keys. @keywords data, item, formatted */
export type FormattersDataItem<T extends FormattersListItem, KT extends string[]> = {
  [K in keyof T | FormattersKey<KT[number]>]: K extends keyof T ? T[K] : string;
};

export type FormattersListFormat<T extends FormattersListItem, K extends string[]> = FormattersDataItem<T, K>[];

export type FormattersListColumnItem<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersDataItem<T, FormattersColumns<O>>;

export type FormattersListColumns<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersListFormat<T, FormattersColumns<O>>;

export type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem;

export type FormattersItemProp<List extends FormattersListProp> = ArrayToItem<List>;

/** Formatter return type matching input data structure. @keywords formatter, return */
export type FormattersReturn<List extends FormattersListProp, Options extends FormattersOptionsList = FormattersOptionsList, Item extends FormattersItemProp<List> = FormattersItemProp<List>> = List extends any[] ? FormattersListColumns<Item, Options> : (FormattersListColumnItem<Item, Options> | undefined);