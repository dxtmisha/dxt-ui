// md5:cdbfe7b0cc93886e41b37a8157584e26 true
/**
 * Returns a reactive GeoIntl instance for data formatting.
 * @remarks Avoid using this reactive composable if reactive updates are not required. For non-reactive formatting, use standard `GeoIntl`.
 * @keywords geo intl internationalization localization i18n formatting reactive
 */
export declare function useGeoIntlRef(code?: RefOrNormal<string | undefined>): GeoIntlRef;