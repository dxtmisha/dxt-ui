// md5:b95c82982ddc5ead5d7444d1bcff7394 true
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
export type FormattersOptionsInformation<Type extends FormattersType> = Type extends FormattersType.currency ? FormattersOptionsCurrency : Type extends FormattersType.date ? FormattersOptionsDate : Type extends FormattersType.name ? FormattersOptionsName : Type extends FormattersType.number ? FormattersOptionsNumber : Type extends FormattersType.plural ? FormattersOptionsPlural : Type extends FormattersType.unit ? FormattersOptionsUnit : Record<string, any>;
export type FormattersOptionsItem<Type extends FormattersType = FormattersType, R = string> = {
	type?: Type;
	transformation?: (valueOriginal: any, item: any, options?: FormattersOptionsInformation<Type>) => R;
	options?: FormattersOptionsInformation<Type>;
};
export type FormattersOptionsList = Record<string, FormattersOptionsItem>;
export type FormattersListItem = Record<string, any>;
export type FormattersList<Item extends FormattersListItem> = Item[];
export type FormattersCapitalize<K extends string> = K extends `${infer First}.${infer Rest}` ? `${First}${Capitalize<FormattersCapitalize<Rest>>}` : K;
export type FormattersColumns<T extends FormattersOptionsList> = (keyof T & string)[];
export type FormattersKey<K, A extends string = 'Format'> = K extends string ? `${FormattersCapitalize<K>}${A}` : never;
export type FormattersDataItem<T extends FormattersListItem, KT extends string[]> = {
	[K in keyof T | FormattersKey<KT[number]>]: K extends keyof T ? T[K] : string;
};
export type FormattersListFormat<T extends FormattersListItem, K extends string[]> = FormattersDataItem<T, K>[];
export type FormattersListColumnItem<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersDataItem<T, FormattersColumns<O>>;
export type FormattersListColumns<T extends FormattersListItem, O extends FormattersOptionsList> = FormattersListFormat<T, FormattersColumns<O>>;
export type FormattersListProp = FormattersList<FormattersListItem> | FormattersListItem;
export type FormattersItemProp<List extends FormattersListProp> = ArrayToItem<List>;
export type FormattersReturn<List extends FormattersListProp, Options extends FormattersOptionsList = FormattersOptionsList, Item extends FormattersItemProp<List> = FormattersItemProp<List>> = List extends any[] ? FormattersListColumns<Item, Options> : (FormattersListColumnItem<Item, Options> | undefined);
/** Formatters utility class for transforming data lists and items. @keywords formatters transform data ui */
export declare class Formatters {
	/** @keywords constructor init */
	constructor(options: FormattersOptionsList, list: FormattersListProp);
	/** @keywords is list available */
	is(): boolean;
	/** @keywords check if list is array */
	isArray(): boolean;
	/** @keywords get list length */
	length(): number;
	/** @keywords get list array */
	getList(): FormattersListItem[];
	/** @keywords get options */
	getOptions(): FormattersOptionsList;
	/** @keywords set list data */
	setList(e: FormattersListProp): this;
	/** @keywords apply formatting */
	to(): any;
	/** @keywords get format data */
	getFormatData(e: any): Record<string, any>;
	/** @keywords transform value */
	transformation(e: any, t: any, n?: FormattersType, r?: any): any;
	/** @keywords format currency */
	formatCurrency(e: any, t: any, n?: FormattersOptionsCurrency): string;
	/** @keywords format date */
	formatDate(e: any, t?: FormattersOptionsDate): string;
	/** @keywords format name */
	formatName(e: any, t?: FormattersOptionsName): string;
	/** @keywords format number */
	formatNumber(e: any, t?: Intl.NumberFormatOptions): string;
	/** @keywords format plural */
	formatPlural(e: any, t?: FormattersOptionsPlural): string;
	/** @keywords format unit */
	formatUnit(e: any, t?: FormattersOptionsUnit): string;
}