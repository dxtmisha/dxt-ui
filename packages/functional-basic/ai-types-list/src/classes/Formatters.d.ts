// md5:45267e5c36855193a8504f2d380010cd true
/** Class for formatting data lists or single items based on column options. @keywords formatters, format, transform */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    /** Initializes formatter with options and optional list data. @keywords constructor, init */
    constructor(options: Options, list?: List | undefined);
    /** Checks whether list data is present. @keywords is, check, exists */
    is(): boolean;
    /** Type guard checking if list data is an array. @keywords isArray, type guard */
    isArray(): this is this & {
        list: FormattersList<Item>;
    };
    /** Returns the record count in the list. @keywords length, count, size */
    length(): number;
    /** Returns the data list as an array. @keywords getList, items, list */
    getList(): FormattersList<Item>;
    /** Returns current formatting configuration options. @keywords getOptions, options, config */
    getOptions(): Options;
    /** Sets the target list of data to format. @keywords setList, update, data */
    setList(list?: List): this;
    /** Formats data, adding formatted values with 'Format' property suffix. @keywords to, format, transform */
    to(): FormattersReturn<List, Options>;
}