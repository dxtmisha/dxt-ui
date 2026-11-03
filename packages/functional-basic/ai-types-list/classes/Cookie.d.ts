// md5:f3aac2d3ca5e177f08f45a70b0b69575 true
/** Resolves the return type of Cookie.get based on generic type and default fallback. @keywords cookie, return type, fallback */
export type CookieGet<T, D = undefined> = [D] extends [undefined] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : (T | (D extends () => infer R ? R : D));
/** Cookie manager for reading, writing, and deleting browser cookies. @keywords cookie, storage, browser */
export declare class Cookie<T = unknown> {
  /** Initializes a Cookie instance for the specified cookie name. @keywords cookie, init, constructor */
  constructor(name: string);
  /** Retrieves a Cookie instance by the specified cookie name. @keywords cookie, getInstance, factory */
  static getInstance<T = unknown>(name: string): Cookie<T>;
  /** Retrieves the cookie value or sets and returns a default value if not set. @keywords cookie, get, read, fallback */
  get<D extends T | string | (() => (T | string)) | undefined = undefined>(defaultValue?: D, options?: CookieOptions): CookieGet<T, D>;
  /** Updates the cookie value with optional configuration parameters. @keywords cookie, set, write, update */
  set(value?: T | string | (() => (T | string)), options?: CookieOptions): void;
  /** Deletes the cookie. @keywords cookie, remove, delete, clear */
  remove(): void;
}