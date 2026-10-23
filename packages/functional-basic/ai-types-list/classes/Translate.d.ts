// md5:3c331459e911051cdd18962fba4b24a4 true
/** Global translation manager for retrieving and configuring localized text. @keywords translate, i18n, localization, l10n */
export declare class Translate {
  /** Retrieves translated text asynchronously by code with optional replacements. @keywords get, translate, async, i18n */
  static get(name: string, replacement?: string[] | Record<string, string | number>): Promise<string>;
  /** Returns the global singleton instance of TranslateInstance. @keywords getItem, instance, singleton */
  static getItem(): TranslateInstance;
  /** Retrieves multiple translations asynchronously by an array of text codes. @keywords getList, batch, translate, async */
  static getList<T extends TranslateCode[]>(names: T): Promise<TranslateList<T>>;
  /** Retrieves multiple translations synchronously by an array of text codes. @keywords getListSync, batch, translate, sync */
  static getListSync<T extends TranslateCode[]>(names: T, first?: boolean): TranslateList<T>;
  /** Retrieves translated text synchronously by code with optional replacements. @keywords getSync, translate, sync */
  static getSync(name: string, first?: boolean, replacement?: string[] | Record<string, string | number>): string;
  /** Sets global configuration for the translation service. @keywords setConfig, config, setup */
  static setConfig(config: TranslateConfig): void;
  /** Changes the property name used to retrieve translations. @keywords setPropsName, property, configuration */
  static setPropsName(name: string): void;
  /** Changes the API read mode for translations. @keywords setReadApi, api, mode */
  static setReadApi(value: boolean): void;
  /** Changes the URL path to the script for fetching translations. @keywords setUrl, endpoint, api */
  static setUrl(url: string): void;
  /** Registers a list of translation codes to be loaded. @keywords add, load, translations */
  static add(names: string | string[]): Promise<void>;
  /** Adds translation key-value pairs via request or directly depending on environment. @keywords addNormalOrSync, register, translations */
  static addNormalOrSync(data: Record<string, string>): Promise<void>;
  /** Adds translation key-value pairs synchronously into memory. @keywords addSync, register, sync */
  static addSync(data: Record<string, string>): void;
  /** Adds translations synchronously from a file data object. @keywords addSyncByFile, file, import */
  static addSyncByFile(data: TranslateDataFile): void;
  /** Adds translations grouped by location synchronously. @keywords addSyncByLocation, location, locale */
  static addSyncByLocation(data: Record<string, Record<string, string>>): void;
}