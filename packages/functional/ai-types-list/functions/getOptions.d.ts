// md5:c00cef056862cde13285ce147bfaacc9 true
import { type ApiFetch, type ApiMethod } from '@dxtmisha/functional-basic';

/** Normalizes API request options into fetch options or a reactive reference. @keywords api, options, fetch, normalize, request */
export declare function getOptions(options?: ApiOptions | ApiMethod): RefOrNormal<ApiFetch>;