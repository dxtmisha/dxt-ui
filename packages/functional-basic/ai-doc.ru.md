Esto базовая функциональная библиотека (@dxtmisha/functional-basic). Здесь собраны алгоритмы, утилиты и классы, независимые от фреймворка.

ВНИМАНИЕ ДЛЯ СРЕДЫ VUE:
Если вы разрабатываете под Vue, СНАЧАЛА всегда ищите нужный функционал (composables, реактивные классы) в библиотеке `@dxtmisha/functional`.
И ТОЛЬКО если там нет нужного реактивного/специфичного для Vue аналога, используйте функционал напрямую из этой библиотеки (@dxtmisha/functional-basic).

=============================================================================
СТРУКТУРА КЛАССОВ И СТАНДАРТЫ КОДА (ПРАВИЛА ДЛЯ AI)
=============================================================================

Для обеспечения согласованности и высокого промышленного качества кодовой базы dxt-ui, все классы TypeScript внутри `@dxtmisha/functional-basic` должны строго следовать следующим правилам относительно структуры, порядка членов и стилей.

1. ПОРЯДОК ЧЛЕНОВ ВНУТРИ КЛАССА
Члены каждого класса ДОЛЖНЫ быть упорядочены в следующей последовательности:

   А. Свойства класса / Переменные-члены:
      - Располагаются в самом верху тела класса.
      - Сортируются по видимости: сначала Public, затем Protected и в конце Private.
      - Внутри каждого уровня видимости группируются по смыслу или по алфавиту.
      - Инициализируйте значения по умолчанию прямо при объявлении, если это возможно.

   Б. Конструктор:
      - Располагается сразу после объявлений всех свойств.
      - Разрешено объявление свойств через параметры конструктора (например, `protected url: string`) для упрощения кода.

   В. Публичные методы (Public Methods):
      - Располагаются после конструктора.
      - Группируются логически:
        1. Геттеры, методы проверки состояния и статуса (например, `is*`, `get*`).
        2. Сеттеры и методы конфигурации (например, `set*`).
        3. Основные методы выполнения и экшены (например, `request()`, `fetch()`, `show()`).

   Г. Защищенные методы (Protected Methods):
      - Располагаются после всех публичных методов.
      - Содержат внутреннюю вспомогательную логику, доступную для наследников класса.

   Д. Приватные методы (Private Methods):
      - Располагаются в самом конце класса.
      - Строгая инкапсуляция внутренней логики.

2. СТИЛЬ И СОГЛАШЕНИЯ ПО НАПИСАНИЮ КОДА
   - Именование:
     * Классы: PascalCase (например, `LoadingInstance`).
     * Методы и свойства: camelCase (например, `registrationEvent`, `registrationList`).
     * Константы внутри файлов: UPPER_SNAKE_CASE (например, `LOADING_EVENT_NAME`).
   - Безопасность TypeScript:
     * Никогда не используйте тип `any`. Используйте дженерики или `unknown`, если тип динамический/неопределенный.
     * Явно указывайте возвращаемые типы для ВСЕХ публичных, защищенных и приватных методов (включая `void`).
     * Используйте интерфейсы/типы для определения структурных контрактов сложных входящих и исходящих данных.
   - SSR Изоляция (Server-Side Rendering):
     * Библиотека должна быть полностью изоморфной и безопасной для SSR.
     * Избегайте прямого хранения специфичного для запроса состояния в глобальных/статических свойствах классов.
     * Используйте `ServerStorage.get('key', () => new Instance())` для синглтонов, изолированных в рамках запроса.
     * Используйте проверку `isDomRuntime()` перед обращением к браузерным API, таким как `window`, `document` или `location`.

3. ТИПЫ, ИНТЕРФЕЙСЫ И ENUM
   - Расположение: Все типы, интерфейсы и перечисления (enums) должны находиться в папке `src/types`, если эта папка существует в проекте. Если такой папки в проекте нет, они должны быть объявлены в том же файле, где используются.
   - Именование: Все файлы, содержащие типы, должны иметь суффикс `Types` в названии (например, `*Types.ts` или `*Types.d.ts`).
   - Экспорт: Обязательно экспортируйте все типы, интерфейсы и перечисления (используя ключевое слово `export`).
   - API типы/схемы: Все типы и интерфейсы для работы с API должны определяться/формироваться с использованием библиотеки `@effect/schema`, если эта библиотека есть в проекте (в случае монорепозитория также проверяйте наличие библиотеки в зависимостях корня).

=============================================================================
РУКОВОДСТВО ДЛЯ РАЗРАБОТЧИКА: ИСПОЛЬЗОВАНИЕ `@dxtmisha/functional-basic` В КАЧЕСТВЕ БИБЛИОТЕКИ
=============================================================================

Этот раздел содержит инструкции и примеры кода для AI-моделей о том, как импортировать и использовать независимые от фреймворка утилиты, классы и вспомогательные функции, предоставляемые этой библиотекой в клиентских пакетах или приложениях.

---

### 1. HTTP-клиент (`Api` и `ApiInstance`)

Библиотека предоставляет как статический глобальный класс `Api`, так и создаваемый через конструктор `ApiInstance`. Оба решения являются обертками над нативным `fetch` API и поддерживают отмену запросов, кэширование, перехватчики (interceptors), обработку ошибок и индикацию загрузки.

#### Настройка (Configuration)
```typescript
import { Api } from '@dxtmisha/functional-basic';

// Установка базового домена и пути к API
Api.setOrigin('https://api.example.com');
Api.setUrl('/api/v1');

// Установка параметров по умолчанию (будут добавляться к каждому запросу)
Api.setRequestDefault({ client: 'web' });

// Установка глобальных заголовков (можно передать функцию для динамического вычисления)
Api.setHeaders(() => ({
  Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
}));
```

#### Выполнение запросов (Making Requests)
```typescript
// Простой запрос (по умолчанию выполняется GET)
const users = await Api.request<User[]>('users');

// Явный вызов методов
const profile = await Api.get<User>({ path: 'profile' });
const updated = await Api.post<User>({
  path: 'profile',
  request: { name: 'New Name' }, // Тело запроса
});
```

#### Перехватчики (Preparation и End в жизненном цикле запроса)
```typescript
// Метод подготовки: выполняется перед запуском fetch
Api.setPreparation(async (apiFetch) => {
  // Позволяет изменить параметры apiFetch или добавить заголовки
  if (apiFetch.auth) {
    apiFetch.headers = { ...apiFetch.headers, 'X-Auth-Required': 'true' };
  }
});

// Метод завершения: выполняется после получения ответа
Api.setEnd(async (response, apiFetch) => {
  if (response.status === 401) {
    // Выполнение обновления токена или логаут
    return { reset: true }; // Сбрасывает запрос или сигнализирует об ошибке
  }
  return {};
});
```

#### Локальное кэширование с помощью `ApiCache`
```typescript
import { ApiCache } from '@dxtmisha/functional-basic';

// Кэширование ответов на стороне клиента
await ApiCache.set('custom-cache-key', data, 60000); // время жизни кэша в мс
const cached = await ApiCache.get<MyDataType>('custom-cache-key');
```

---

### 2. Управление состоянием и хранилищем (State & Storage)

Библиотека содержит безопасные для SSR (Server-Side Rendering) классы для работы с `localStorage`/`sessionStorage`, куками и контекстами сервера.

#### `DataStorage` (localStorage / sessionStorage)
Обертка над хранилищем браузера с поддержкой префиксов пространств имен, значений по умолчанию и ограничением времени кэширования.
```typescript
import { DataStorage } from '@dxtmisha/functional-basic';

// Установка глобального префикса для избежания коллизий ключей
DataStorage.setPrefix('my_app_');

// Создание хранилища (если 2-й аргумент равен true, используется sessionStorage)
const userStorage = new DataStorage<{ id: string }>('user_session', false);

// Сохранение значения
userStorage.set({ id: '123' });

// Получение значения (с дефолтным значением и необязательным ограничением кэша в мс)
const user = userStorage.get({ id: 'guest' });

// Удаление элемента
userStorage.remove();
```

#### `CookieStorage` & `Cookie`
Менеджер для удобной работы с куками.
```typescript
import { CookieStorage, Cookie } from '@dxtmisha/functional-basic';

// Глобальное использование CookieStorage
CookieStorage.set('theme', 'dark', { age: 31536000, secure: true, sameSite: 'lax' });
const theme = CookieStorage.get<string>('theme', 'light');
CookieStorage.remove('theme');

// Использование конкретного экземпляра Cookie
const tokenCookie = new Cookie<string>('auth_token');
tokenCookie.set('xyz123', { secure: true });
const token = tokenCookie.get();
```

#### `ServerStorage` (Изолированное хранилище запросов для SSR)
Позволяет безопасно хранить и изолировать глобальные состояния/синглтоны между параллельными асинхронными запросами на стороне сервера.
```typescript
import { ServerStorage } from '@dxtmisha/functional-basic';

// Получение или инициализация изолированного синглтона для текущего запроса
const myServiceInstance = ServerStorage.get('myService', () => new MyService());
```

---

### 3. Геологика и локализация (`GeoIntl`, `Geo`, `GeoFlag`, `GeoPhone`)

Унифицирует локализацию на основе нативного `Intl` API браузера и Node.js.

#### `Geo`
Используется для управления информацией о текущей стране, языке, стандартах и часовом поясе.
```typescript
import { Geo } from '@dxtmisha/functional-basic';

// Получение информации о локали
const currentCountry = Geo.getCountry(); // например, 'VN'
const currentLang = Geo.getLanguage();   // например, 'vi'

// Смена локали
Geo.set('en-US');
```

#### `GeoIntl`
Форматирование чисел, валют, процентов, дат, относительного времени и размеров файлов с учетом локали.
```typescript
import { GeoIntl } from '@dxtmisha/functional-basic';

const intl = new GeoIntl('ru-RU');

// Числа
intl.number(123456.78); // '123 456,78'

// Валюты
intl.currency(99.99, 'USD'); // '99,99 $'

// Размеры файлов
intl.sizeFile(1024 * 1024 * 5); // '5,00 МБ'

// Даты и время
intl.date(new Date(), 'date'); // '18 июн. 2026 г.'
intl.date(new Date(), 'time'); // '22:48'

// Относительное время
intl.relative(new Date(Date.now() - 3600000)); // '1 час назад'

// Плюрализация (склонение слов)
// Формы слов передаются в виде строки через разделитель '|' (например, 'яблоко|яблока|яблок')
intl.plural(5, 'яблоко|яблока|яблок'); // '5 яблок'
```

#### Иконки флагов (`GeoFlag`) и маски телефонов (`GeoPhone`)
```typescript
import { GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';

// Флаги стран
const flagHelper = new GeoFlag();
const flagIcon = flagHelper.getFlag('RU'); // эмодзи или SVG код флага

// Телефоны
const phoneInfo = GeoPhone.getByPhone('+79991234567');
console.log(phoneInfo.phone); // Очищенная строка телефона
const mask = GeoPhone.toMask('79991234567'); // Возвращает соответствующую маску телефона
```

---

### 4. DOM и безопасное управление событиями (`EventItem`)

`EventItem` автоматизирует добавление и удаление слушателей событий, защищая приложение от утечек памяти.

```typescript
import { EventItem } from '@dxtmisha/functional-basic';

// Инициализация слушателя события (на элемент или Window)
const clickListener = new EventItem(
  window,
  'click',
  (event) => {
    console.log('Клик по экрану', event);
  },
  { passive: true }
);

// Старт прослушивания
clickListener.start();

// Остановка прослушивания (обязательно вызывайте при размонтировании/уничтожении компонентов!)
clickListener.stop();
```

#### Прокрутка страницы и буфер обмена
```typescript
import { goScrollSmooth, writeClipboardData, getClipboardData } from '@dxtmisha/functional-basic';

// Плавная прокрутка к элементу
goScrollSmooth(document.getElementById('target'));

// Копирование текста в буфер обмена
await writeClipboardData('Скопированный текст');

// Чтение из буфера обмена
const text = await getClipboardData();
```

---

### 5. Поиск и утилиты форматирования

#### `SearchList`
Высокопроизводительный поиск по спискам на клиенте с подсветкой совпадений.
```typescript
import { SearchList } from '@dxtmisha/functional-basic';

const users = [
  { name: 'Иван Иванов', email: 'ivan@example.com' },
  { name: 'Петр Петров', email: 'petr@example.com' },
];

// Аргументы: исходный массив, поля для поиска, строка запроса
const searcher = new SearchList(users, ['name', 'email'], 'иван');

// Выполнение поиска с разметкой совпадений
const results = searcher.to();
// Возвращает: Массив отфильтрованных элементов с подсветкой совпадений в соответствующих свойствах
```

#### `Formatters`
Автоматизирует шаблонное преобразование структур данных по заданной схеме.
```typescript
import { Formatters, FormattersType } from '@dxtmisha/functional-basic';

const rawData = { price: 12000, date: '2026-06-18' };

const formatter = new Formatters({
  price: { type: FormattersType.currency, options: 'USD' },
  date: { type: FormattersType.date, options: { month: 'long', year: 'numeric' } }
}, rawData);

const formatted = formatter.to();
// { price: '$12,000.00', date: 'June 2026' }
```

---

### 6. Базовые функции-хелперы

Легковесные вспомогательные функции для повседневного использования:
- `isFilled(value)`: Проверяет, заполнена ли переменная (строка, массив, объект, число или булево значение). Возвращает `false` для `[]`, `{}`, `''`, `null`, `undefined`.
- `isDomRuntime()`: Проверка среды исполнения. Возвращает `true`, если код выполняется в браузере.
- `copyObject(value)`: Выполняет быстрое глубокое копирование объекта.
- `anyToString(value)`: Приводит любое значение к строке.
- `sleep(ms)`: Обертка над setTimeout на базе Promise для асинхронной задержки.

```typescript
import { isFilled, isDomRuntime, copyObject, sleep } from '@dxtmisha/functional-basic';

if (isDomRuntime()) {
  console.log('Код запущен в браузере');
}

if (isFilled(myArray)) {
  const cloned = copyObject(myArray);
}

await sleep(500);
```
