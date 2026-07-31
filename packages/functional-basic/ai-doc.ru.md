# Справочник @dxtmisha/functional-basic

Базовая библиотека утилит без привязки к фреймворку. **Vue-разработчики ОБЯЗАНЫ сначала искать функционал в `@dxtmisha/functional`**; использовать это только при отсутствии реактивного аналога.

## 1. Стандарты кода и соглашения
- **Структура класса**: Свойства (`public`->`protected`->`private`) -> Конструктор -> Публичные методы (Геттеры -> Сеттеры -> Экшены) -> Защищенные -> Приватные.
- **Стили/Типы**: Классы = `PascalCase`, методы/свойства = `camelCase`, константы = `UPPER_SNAKE_CASE`. Никаких `any` (`unknown`/generics). Явный возвращаемый тип для ВСЕХ методов. Экспорт всех интерфейсов. Файлы типов: `*Types.ts`. Схемы через `@effect/schema`.
- **Безопасность SSR**: Изоморфный код. Не хранить состояние в глобальных переменных. Вызывать `isDomRuntime()` перед `window`/`document`. Использовать `ServerStorage.get('key', () => new Class())` для изолированных синглтонов.
- **Использование утилит и примитивных функций**: ОБЯЗАТЕЛЬНО используйте примитивные функции-хелперы из этой библиотеки (например, `isFunction`, `executeFunction`, `isFilled`, `isObject`, `isString`, `isArray` и т.д.) вместо написания кастомных инлайн-проверок условий или типов.

## 2. Справочник API и примеры

### HTTP-клиент и Кэш
```typescript
import { Api, ApiCache } from '@dxtmisha/functional-basic';
Api.setOrigin('https://api.example.com'); Api.setUrl('/api/v1'); Api.setRequestDefault({ client: 'web' });
Api.setHeaders(() => ({ Authorization: `Bearer ${localStorage.getItem('token') || ''}` }));
Api.setPreparation(async (opts) => { if (opts.auth) opts.headers['X-Auth'] = '1'; });
Api.setEnd(async (res) => res.status === 401 ? { reset: true } : {});
const users = await Api.request<User[]>('users'); // GET
const updated = await Api.post<User>({ path: 'profile', request: { name: 'New' } });
await ApiCache.set('k', { a: 1 }, 60000); const cache = await ApiCache.get<{a: number}>('k');
```

### Управление хранилищем (Storage)
```typescript
import { DataStorage, CookieStorage, Cookie, ServerStorage } from '@dxtmisha/functional-basic';
DataStorage.setPrefix('app_');
const ls = new DataStorage<{ id: string }>('user', false); ls.set({ id: '1' }); ls.get({ id: '0' }); ls.remove();
CookieStorage.set('t', 'dark', { age: 31536000, secure: true }); CookieStorage.get<string>('t', 'light');
const c = new Cookie<string>('auth'); c.set('xyz', { secure: true }); c.get();
const srv = ServerStorage.get('svc', () => new Svc()); // SSR изолированный синглтон
```

### Геологика, Форматирование и Локализация
```typescript
import { Geo, GeoIntl, GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';
const country = Geo.getCountry(); const lang = Geo.getLanguage(); Geo.set('ru-RU');
const intl = new GeoIntl('ru-RU');
intl.number(1234.5); intl.currency(99, 'USD'); intl.sizeFile(1024*1024); intl.date(new Date(), 'date');
intl.relative(new Date(Date.now() - 3600000)); intl.plural(5, 'яблоко|яблока|яблок');
const flag = new GeoFlag().getFlag('RU');
const phone = GeoPhone.getByPhone('+79991234567'); const mask = GeoPhone.toMask('79991234567');
```

### DOM, События, Поиск и Хелперы
```typescript
import { EventItem, goScrollSmooth, writeClipboardData, getClipboardData, SearchList, Formatters, FormattersType, isFilled, isFunction, executeFunction, isDomRuntime, copyObject, anyToString, sleep } from '@dxtmisha/functional-basic';

// Безопасные события (без утечек)
const listener = new EventItem(window, 'click', console.log, { passive: true }); listener.start(); listener.stop();

// DOM / Буфер обмена
goScrollSmooth(document.getElementById('t')); await writeClipboardData('txt'); await getClipboardData();

// Поиск и Форматирование
const res = new SearchList([{ n: 'Иван' }], ['n'], 'ив').to(); // Подсветка совпадений
const fmt = new Formatters({ p: { type: FormattersType.currency, options: 'USD' } }, { p: 12 }).to();

// Общие хелперы
isFilled([]); // false (для строк, массивов, объектов, чисел, boolean)
executeFunction(callbackOrValue, arg1); // Выполняет callback, если это функция, или возвращает значение
isFunction(val); // Проверка на функцию (Type-guard)
isDomRuntime(); const cloned = copyObject({ a: 1 }); const str = anyToString(123); await sleep(500);
```
