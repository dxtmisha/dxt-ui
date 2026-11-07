// md5:1c342689c16a31dcf052fce367352964 true
/** Formats datasets or single items based on specified column formatting options. @keywords format, list, dataset, data */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    /** Initializes a new instance with formatting options and an optional dataset. @keywords constructor, init */
    constructor(options: Options, list?: List);
    /** Checks if a list of data is defined. @keywords is, check, exists */
    is(): boolean;
    /** Checks whether the dataset is an array and narrows its type. @keywords isArray, type-guard */
    isArray(): this is this & {
        list: FormattersList<Item>;
    };
    /** Returns the current dataset normalized as an array. @keywords getList, array, items */
    getList(): FormattersList<Item>;
    /** Returns the active formatting options. @keywords getOptions, options, config */
    getOptions(): Options;
    /** Sets the dataset to be formatted. @keywords setList, dataset, update */
    setList(list?: List): this;
    /** Returns the total record count in the list. @keywords length, count, size */
    length(): number;
    /** Formats the dataset or item, appending formatted values with a 'Format' suffix. @keywords to, format, transform */
    to(): FormattersReturn<List, Options>;
}