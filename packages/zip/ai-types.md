All these methods are in the @dxtmisha/zip library.

import { ZipOptions } from 'fflate';
/**
 * Class for creating and managing ZIP archives.
 */
export declare class Zip {
    constructor(name: string, options?: ZipOptions);
    /**
     * Checks if the archive contains files.
     */
    is(): boolean;
    /**
     * Returns the compiled ZIP buffer.
     */
    get(): Uint8Array | undefined;
    setName(name: string): this;
    setOptions(options: ZipOptions): this;
    addFile(pathName: string, data: any): this;
    removeFile(pathName: string): this;
    /**
     * Triggers a browser download of the ZIP archive.
     */
    save(): this;
}