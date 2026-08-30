// md5:45267e5c36855193a8504f2d380010cd true
/** Formats a list or single data item based on provided column formatting options. @keywords format, list, data, options */
export declare class Formatters<Options extends FormattersOptionsList = FormattersOptionsList, List extends FormattersListProp = FormattersListProp, Item extends FormattersItemProp<List> = FormattersItemProp<List>> {
    /** Initializes the formatters instance with options and optional list data. @keywords constructor, init, setup */
    constructor(options: Options, list?: List | undefined);
    /** Checks if the list data is set. @keywords check, is set, exists */
    is(): boolean;
    /** Type guard checking if the list data is an array. @keywords isArray, type guard */
    isArray(): this is this & {
        list: FormattersList<Item>;
    };
    /** Returns the number of records in the list. @keywords count, length, size */
    length(): number;
    /** Returns the current list of items as an array. @keywords getList, items, array */
    getList(): FormattersList<Item>;
    /** Returns the current formatting options configuration. @keywords getOptions, configuration, settings */
    getOptions(): Options;
    /** Sets the list of data to be formatted. @keywords setList, update, list */
    setList(list?: List): this;
    /** Formats the entire list or single item, appending formatted values with 'Format' suffixes. @keywords to, format, transform */
    to(): FormattersReturn<List, Options>;
}