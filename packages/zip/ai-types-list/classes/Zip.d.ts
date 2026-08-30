// md5:6196612d27b3a5e1ffe4c524321c5d52 true
import { type ZipOptions } from 'fflate';

/** Creates and manages ZIP archives. @keywords zip, archive, compression, fflate */
export declare class Zip {
    /** Initializes a new ZIP archive instance. @keywords zip, archive, constructor */
    constructor(name: string, options?: ZipOptions);
    /** Checks whether the archive contains any data. @keywords has_data, check, zip */
    is(): boolean;
    /** Generates and returns the compiled ZIP buffer. @keywords buffer, export, binary, uint8array */
    get(): Uint8Array | undefined;
    /** Sets the archive filename. @keywords set_name, filename */
    setName(name: string): this;
    /** Sets compression and formatting options for the archive. @keywords options, compression, config */
    setOptions(options: ZipOptions): this;
    /** Adds a file to the archive. @keywords add_file, append, write */
    addFile(pathName: string, data: any): this;
    /** Removes a file from the archive by its path or name. @keywords remove_file, delete */
    removeFile(pathName: string): this;
    /** Saves and triggers download of the ZIP archive in the browser. @keywords save, download, export, browser */
    save(): this;
}