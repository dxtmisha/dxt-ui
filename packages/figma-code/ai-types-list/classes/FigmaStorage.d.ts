// md5:b2e637f26409c535604bee7e94c2381e true
import { FigmaStorageData, type FigmaStorageDataValue } from './FigmaStorageData';
import type { UiFigmaNode } from '../types/figmaTypes';

/** Manages Figma plugin data storage for nodes. @keywords figma storage pluginData persistence */
export declare class FigmaStorage<T> {
    /** Retrieves or creates a cached FigmaStorage instance for a node. @keywords figma getInstance storage cache */
    static getInstance<T>(name: string, item?: UiFigmaNode): FigmaStorage<T>;
    /** Asynchronously retrieves or creates a FigmaStorage instance by node ID. @keywords figma getInstanceById node id storage */
    static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>;
    /** Clears all cached FigmaStorage instances. @keywords reset cache clear */
    static reset(): void;
    /** Initializes a new FigmaStorage instance for a target item. @keywords constructor init pluginData */
    constructor(name: string, item?: PluginDataMixin, cache?: number | undefined);
    /** Reads a stored value from Figma plugin data or returns a default fallback. @keywords get read load pluginData */
    get<D extends T | (() => T) | undefined = undefined>(defaultValue?: D): [D] extends [undefined] ? T | undefined : T;
    /** Updates or sets a value in Figma plugin data. @keywords set write update save pluginData */
    set(value?: T | (() => T)): T | undefined;
    /** Deletes the stored value from Figma plugin data. @keywords remove delete clear pluginData */
    remove(): this;
}