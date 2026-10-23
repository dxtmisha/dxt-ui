// md5:f4d99d927cfe90883dcdb7cc2047d549 true
/** Formats a dataset or single item using configured options. @keywords formatters, list format, data formatting */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    /** Initializes formatter options and dataset. @keywords constructor, initialize */
    constructor(options: Options, list?: List | undefined);
    /** Checks whether the dataset is defined. @keywords is, has data, exists */
    is(): boolean;
    /** Type guard checking whether the dataset is an array. @keywords isArray, type guard, array */
    isArray(): this is this & {
        list: FormattersList<Item>;
    };
    /** Returns current dataset normalized as an array. @keywords getList, list, array */
    getList(): FormattersList<Item>;
    /** Returns current formatting options configuration. @keywords getOptions, options, config */
    getOptions(): Options;
    /** Sets or updates the dataset to format. @keywords setList, update, dataset */
    setList(list?: List): this;
    /** Returns the record count in the dataset. @keywords length, count, size */
    length(): number;
    /** Formats the dataset or single item and appends formatted values with 'Format' suffix. @keywords to, format, transform */
    to(): FormattersReturn<List, Options>;
}