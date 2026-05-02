import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/CookieStorage - Хранилище Cookie`}),`
`,(0,c.jsx)(n.h1,{id:`класс-cookiestorage`,children:`Класс CookieStorage`}),`
`,(0,c.jsx)(n.p,{children:`Класс для управления хранением cookie с поддержкой пользовательских слушателей. Предоставляет низкоуровневый интерфейс для работы с cookie в различных окружениях (DOM, SSR) с автоматическим парсингом типов и безопасной обработкой данных.`}),`
`,(0,c.jsxs)(n.p,{children:[`Включает тесную интеграцию с `,(0,c.jsx)(n.code,{children:`CookieBlock`}),` для контроля доступа и поддерживает декодирование URL-encoded значений.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкое хранение`}),` — поддержка памяти процесса и внешних механизмов хранения через слушатели`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Автоматическое преобразование`}),` — интеллектуальное преобразование строковых значений в соответствующие типы данных`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Интеграция с блокировкой`}),` — уважает глобальную блокировку записи через `,(0,c.jsx)(n.code,{children:`CookieBlock`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Безопасность окружения`}),` — автоматическое определение DOM окружения и адаптация поведения`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`URL-декодирование`}),` — автоматическое декодирование имен и значений при чтении из DOM`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`статические-методы`,children:`Статические методы`}),`
`,(0,c.jsx)(n.h3,{id:`действие`,children:`Действие`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Получает значение cookie по имени с автоматическим преобразованием типов. Если значение не существует и указано значение по умолчанию, оно будет установлено и сохранено.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя cookie`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — значение по умолчанию или функция, возвращающая значение`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — преобразованное значение cookie или значение по умолчанию`]}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Сохраняет значение cookie с указанными параметрами и автоматическим обновлением в памяти и DOM. Если активна блокировка через `,(0,c.jsx)(n.code,{children:`CookieBlock`}),`, значение сохраняется только в памяти.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя cookie`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | (() => T)`}),` — значение или функция, возвращающая значение`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options?: CookieOptions`}),` — дополнительные параметры cookie`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Возвращает:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — сохраненное значение`]}),`
`,(0,c.jsx)(n.h4,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Удаляет cookie, устанавливая пустое значение и отрицательный срок действия. Эквивалентно вызову `,(0,c.jsx)(n.code,{children:`set(name, '', { age: -1 })`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — имя cookie`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(getListener?, getListenerRaw?, setListener?)`}),` — Инициализирует хранилище с пользовательскими слушателями для чтения и записи данных. Слушатель записи `,(0,c.jsx)(n.code,{children:`setListener`}),` принимает 4 аргумента: `,(0,c.jsx)(n.code,{children:`(key, value, cookie, options)`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset()`}),` — Сбрасывает хранилище, очищая все элементы в памяти и удаляя слушатели`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`вспомогательные`,children:`Вспомогательные`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update()`}),` — Обновляет данные в памяти, парся значения из `,(0,c.jsx)(n.code,{children:`document.cookie`})]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`cookieoptions`,children:(0,c.jsx)(n.code,{children:`CookieOptions`})}),`
`,(0,c.jsx)(n.p,{children:`Объект конфигурации для параметров cookie:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`age?: number`}),` — время жизни в секундах (атрибут max-age)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`sameSite?: 'strict' | 'lax'`}),` — политика SameSite`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path?: string`}),` — путь для cookie (по умолчанию `,(0,c.jsx)(n.code,{children:`/`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`domain?: string`}),` — домен для cookie`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`secure?: boolean`}),` — если true, добавляет атрибут Secure`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`httpOnly?: boolean`}),` — если true, добавляет атрибут HttpOnly (только для серверных слушателей)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`partitioned?: boolean`}),` — если true, добавляет атрибут Partitioned (CHIPS)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`arguments?: string[] | Record<string, any>`}),` — дополнительные директивы для строки cookie`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`встроенное-преобразование-типов`,children:`Встроенное преобразование типов`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CookieStorage`}),` автоматически преобразует строковые значения при чтении:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'undefined'`}),` → `,(0,c.jsx)(n.code,{children:`undefined`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'null'`}),` → `,(0,c.jsx)(n.code,{children:`null`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'true'`}),` → `,(0,c.jsx)(n.code,{children:`true`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'false'`}),` → `,(0,c.jsx)(n.code,{children:`false`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'123'`}),` → `,(0,c.jsx)(n.code,{children:`123`}),` (число)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`'{"key":"value"}'`}),` → `,(0,c.jsx)(n.code,{children:`{key: 'value'}`}),` (объект JSON)`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Получение значения с дефолтным значением
const theme = CookieStorage.get<string>('theme', 'dark')

// Сохранение значения
CookieStorage.set('user', 'john', {
  age: 3600,
  sameSite: 'lax'
})

// Удаление
CookieStorage.remove('user')
`})}),`
`,(0,c.jsx)(n.h3,{id:`инициализация-с-внешним-хранилищем`,children:`Инициализация с внешним хранилищем`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

CookieStorage.init(
  (key) => myStorage.get(key),
  undefined,
  (key, value, cookie, options) => {
    // cookie - это уже отформатированная строка типа "key=value; max-age=..."
    myStorage.set(key, value, cookie, options)
  }
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`инициализация-для-ssr-raw`,children:`Инициализация для SSR (Raw)`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Для SSR получаем все куки в виде сырой строки
CookieStorage.init(
  undefined,
  () => request.headers.cookie
)
`})}),`
`,(0,c.jsx)(n.h3,{id:`обновление-и-сброс`,children:`Обновление и сброс`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Обновить данные в памяти из document.cookie
// Полезно, когда куки были установлены внешне
CookieStorage.update()

// Сбросить хранилище (очистить слушатели и данные в памяти)
// Полезно для тестирования или очистки
CookieStorage.reset()
`})}),`
`,(0,c.jsx)(n.h3,{id:`полный-рабочий-процесс`,children:`Полный рабочий процесс`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CookieStorage } from '@dxtmisha/functional-basic'

// Инициализация с пользовательским хранилищем
CookieStorage.init(
  (key) => redis.get(key),
  undefined,
  (key, value, cookie, options) => redis.set(key, value, cookie, options)
)

// Установка значения с параметрами
CookieStorage.set('user', 'john', {
  age: 3600,           // 1 час
  sameSite: 'lax',     // Политика SameSite
  path: '/',           // Путь
  secure: true,        // Только HTTPS
  httpOnly: true,      // Защита от XSS (для SSR)
  arguments: ['Priority=High'] // Дополнительные директивы
})

// Получение значения с преобразованием типа
const user = CookieStorage.get<string>('user')

// Обновление из внешнего источника
CookieStorage.update()

// Очистка
CookieStorage.remove('user')
CookieStorage.reset()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};