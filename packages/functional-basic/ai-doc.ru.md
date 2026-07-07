# Справочник @dxtmisha/functional-basic

Базовая библиотека утилит без привязки к фреймворку. **Vue-разработчики ОБЯЗАНЫ сначала искать функционал в `@dxtmisha/functional`**; использовать эту библиотеку только при отсутствии реактивного аналога.

---

## Стандарты кода и структура классов

### 1. Порядок членов класса
1. **Свойства/Переменные**: В самом верху, сортировка по видимости (`public` -> `protected` -> `private`). Инициализировать при объявлении по возможности.
2. **Конструктор**: Сразу после свойств. Разрешено объявление свойств через параметры (например, `protected url: string`).
3. **Публичные методы**:
   1. Геттеры, проверки состояния и статуса (`is*`, `get*`).
   2. Сеттеры и конфигурация (`set*`).
   3. Выполнение и экшены (`request()`, `fetch()`, `show()`).
4. **Защищенные методы**: Внутренние хелперы для наследников.
5. **Приватные методы**: Закрытая логика в самом низу класса.

### 2. Стилистические соглашения
- **Именование**: Классы = `PascalCase`, Методы/Свойства = `camelCase`, Константы = `UPPER_SNAKE_CASE`.
- **TypeScript**: Запрещен `any` (использовать `unknown`/дженерики). Обязательно указывать возвращаемый тип для ВСЕХ методов (включая `void`). Экспортировать все типы/интерфейсы. Файлы типов называть с суффиксом `Types` (например, `*Types.ts`). Использовать `@effect/schema` для API-схем при наличии библиотеки.
- **Безопасность SSR**: Изоморфный код. Не хранить состояние запроса в статических/глобальных свойствах. Использовать `isDomRuntime()` перед вызовом `window`/`document`/`location`. Использовать `ServerStorage.get(key, () => new Instance())` для изолированных синглтонов запроса.

---

## Справочник API и примеры

### 1. HTTP-клиент (`Api`, `ApiInstance`, `ApiCache`)
```typescript
import { Api, ApiCache } from '@dxtmisha/functional-basic';

// Настройка
Api.setOrigin('https://api.example.com');
Api.setUrl('/api/v1');
Api.setRequestDefault({ client: 'web' });
Api.setHeaders(() => ({ Authorization: `Bearer ${localStorage.getItem('token') || ''}` }));

// Перехватчики
Api.setPreparation(async (fetchOpts) => { if (fetchOpts.auth) fetchOpts.headers['X-Auth'] = '1'; });
Api.setEnd(async (res, fetchOpts) => res.status === 401 ? { reset: true } : {});

// Запросы
const users = await Api.request<User[]>('users'); // по умолчанию GET
const profile = await Api.get<User>({ path: 'profile' });
const updated = await Api.post<User>({ path: 'profile', request: { name: 'New' } });

// Кэш
await ApiCache.set('key', { data: 1 }, 60000); // время жизни в мс
const cached = await ApiCache.get<{ data: number }>('key');
```

### 2. Управление состоянием и хранилищем
```typescript
import { DataStorage, CookieStorage, Cookie, ServerStorage } from '@dxtmisha/functional-basic';

// DataStorage (localStorage/sessionStorage)
DataStorage.setPrefix('my_app_');
const userStorage = new DataStorage<{ id: string }>('user_session', false); // true для sessionStorage
userStorage.set({ id: '123' });
const user = userStorage.get({ id: 'guest' }); // значение по умолчанию
userStorage.remove();

// Cookies
CookieStorage.set('theme', 'dark', { age: 31536000, secure: true, sameSite: 'lax' });
const theme = CookieStorage.get<string>('theme', 'light');
CookieStorage.remove('theme');

const tokenCookie = new Cookie<string>('auth_token');
tokenCookie.set('xyz123', { secure: true });
const token = tokenCookie.get();

// Изолированное хранилище запросов для SSR
const myService = ServerStorage.get('myService', () => new MyService());
```

### 3. Геологика и локализация
```typescript
import { Geo, GeoIntl, GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';

// Состояние Geo
const country = Geo.getCountry(); // например, 'VN'
const lang = Geo.getLanguage();   // например, 'vi'
Geo.set('en-US');

// Форматирование (Intl)
const intl = new GeoIntl('ru-RU');
intl.number(123456.78);          // '123 456,78'
intl.currency(99.99, 'USD');      // '99,99 $'
intl.sizeFile(1024 * 1024 * 5);  // '5,00 МБ'
intl.date(new Date(), 'date');    // '18 июн. 2026 г.'
intl.date(new Date(), 'time');    // '22:48'
intl.relative(new Date(Date.now() - 3600000)); // '1 час назад'
intl.plural(5, 'яблоко|яблока|яблок');   // '5 яблок' (формат: 'один|несколько|много' или 'один|другие')

// Флаги и телефоны
const flag = new GeoFlag().getFlag('RU');
const phoneInfo = GeoPhone.getByPhone('+79991234567'); // .phone = очищенная строка
const mask = GeoPhone.toMask('79991234567');
```

### 4. DOM, события и хелперы
```typescript
import { EventItem, goScrollSmooth, writeClipboardData, getClipboardData } from '@dxtmisha/functional-basic';

// Безопасное управление событиями (без утечек)
const clickListener = new EventItem(window, 'click', (e) => console.log(e), { passive: true });
clickListener.start();
clickListener.stop(); // Обязательно вызывать при уничтожении/очистке!

// DOM / Буфер обмена
goScrollSmooth(document.getElementById('target'));
await writeClipboardData('текст');
const text = await getClipboardData();
```

### 5. Поиск и форматирование данных
```typescript
import { SearchList, Formatters, FormattersType } from '@dxtmisha/functional-basic';

// Поиск по списку с подсветкой
const searcher = new SearchList([{ name: 'Иван Иванов' }], ['name'], 'иван');
const results = searcher.to(); // возвращает отфильтрованные элементы с html-подсветкой совпадений

// Шаблонный форматировщик объектов
const formatter = new Formatters({
  price: { type: FormattersType.currency, options: 'USD' },
  date: { type: FormattersType.date, options: { month: 'long', year: 'numeric' } }
}, { price: 12000, date: '2026-06-18' });
const formatted = formatter.to(); // { price: '$12,000.00', date: 'June 2026' }
```

### 6. Общие хелперы
```typescript
import { isFilled, isDomRuntime, copyObject, anyToString, sleep } from '@dxtmisha/functional-basic';

isFilled([]); // false (поддерживает строки, массивы, объекты, числа, булевы значения)
isDomRuntime(); // true, если код выполняется в браузере
const cloned = copyObject({ a: 1 });
const str = anyToString(123);
await sleep(500);
```
