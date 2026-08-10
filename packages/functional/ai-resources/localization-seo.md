# Localization, Geo & SEO Management

Locale-aware formatting, translation primitives, and reactive HTML document metadata handling.

## Available Utilities
- **`GeoRef`**: Access country information and geographic context (`GeoRef.getCountry()`).
- **`useGeoIntlRef()`**: Reactive internationalization helper for currency, numbers, and dates.
- **`useTranslateRef(keys)`**: Multi-key reactive translation resolver.
- **`useMeta()`**: Reactive manager for HTML document title, meta tags, and open graph social tags.
- **`ScrollbarWidthRef`**: Helper to measure dynamic scrollbar width for fixed overlay calculations.

### Example
```typescript
import {
  GeoRef,
  useGeoIntlRef,
  useTranslateRef,
  useMeta,
  ScrollbarWidthRef
} from '@dxtmisha/functional';

const country = GeoRef.getCountry();
const intl = useGeoIntlRef();
intl.currency(150, 'EUR');

const t = useTranslateRef(['global.save']);
useMeta().setTitle('User Dashboard');
const scrollW = new ScrollbarWidthRef().width;
```
