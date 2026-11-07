// md5:fff7674e224db61a744dd36153f6cc51 true
/** Resolves return type for Cookie.get with default fallback. @keywords cookie, type, return */
export type CookieGet<T, D = undefined> = [D] extends [undefined] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : (T | (D extends () => infer R ? R : D));
/** Cookie manager for reading, writing, and deleting browser cookies. @keywords cookie, storage, browser */
export declare class Cookie<T = unknown> {
  /** Initializes a cookie manager for the specified cookie name. @keywords cookie, init */
  constructor(name: string);
  /** Returns a Cookie instance for the specified cookie name. @keywords cookie, instance, singleton */
  static getInstance<T = unknown>(name: string): Cookie<T>;
  /** Retrieves cookie value or sets and returns default value if absent. @keywords cookie, get, read */
  get<D extends T | string | (() => (T | string)) | undefined = undefined>(defaultValue?: D, options?: CookieOptions): CookieGet<T, D>;
  /** Updates cookie value with optional parameters. @keywords cookie, set, write */
  set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
  /** Deletes the cookie. @keywords cookie, remove, delete */
  remove(options?: CookieOptions): void;
}