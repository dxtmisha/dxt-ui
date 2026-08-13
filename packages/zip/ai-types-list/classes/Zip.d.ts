// md5:ccac1de946d3d97fefc92c1b78e55622 true
import { ZipOptions } from 'fflate';

/** Creates and manages ZIP archives. @keywords zip archive constructor */
export declare class Zip {
    /** Creates a new ZIP instance. @keywords zip constructor */
    constructor(name: string, options?: ZipOptions);
    /** Checks if archive has data. @keywords zip check has data */
    is(): boolean;
    /** Returns ZIP buffer. @keywords zip get buffer */
    get(): Uint8Array | undefined;
    /** Sets archive name. @keywords zip set name */
    setName(name: string): this;
    /** Sets ZIP options. @keywords zip set options */
    setOptions(options: ZipOptions): this;
    /** Adds file to archive. @keywords zip add file */
    addFile(pathName: string, data: any): this;
    /** Deletes file from archive by name. @keywords zip remove file */
    removeFile(pathName: string): this;
    /** Saves archive by downloading in browser. @keywords zip save download */
    save(): this;
}