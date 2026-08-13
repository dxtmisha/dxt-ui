// md5:9220b10aea95e32401e7222c150ee1f6 true
/** @keywords formatters, format_data, formatting */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
	/** @keywords constructor, init */
	constructor(options: Options, list?: List | undefined);
	/** @keywords is, check, exists */
	is(): boolean;
	/** @keywords is_array, check */
	isArray(): this is this & {
		list: FormattersList<Item>;
	};
	/** @keywords length, count */
	length(): number;
	/** @keywords get_list, array */
	getList(): FormattersList<Item>;
	/** @keywords get_options, config */
	getOptions(): Options;
	/** @keywords set_list, update */
	setList(list?: List): this;
	/** @keywords to, format, transform */
	to(): FormattersReturn<List, Options>;
	/** @keywords get_format_data, record */
	protected getFormatData(item: Item): Record<string, string>;
	/** @keywords transformation, format */
	protected transformation<Type extends FormattersType>(valueOriginal: any, item: any, type?: Type, options?: FormattersOptionsInformation<Type>): string;
	/** @keywords format_currency, money */
	protected formatCurrency(value: any, item: Item, options?: FormattersOptionsCurrency): string;
	/** @keywords format_date, time */
	protected formatDate(value: any, options?: FormattersOptionsDate): string;
	/** @keywords format_name, person */
	protected formatName(item: Item, options?: FormattersOptionsName): string;
	/** @keywords format_number, digit */
	protected formatNumber(value: any, options?: FormattersOptionsNumber): string;
	/** @keywords format_plural, words */
	protected formatPlural(value: any, options?: FormattersOptionsPlural): string;
	/** @keywords format_unit, measurement */
	protected formatUnit(value: any, options?: FormattersOptionsUnit): string;
}