import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Translate - Управление Переводами и Текстами`}),`
`,(0,c.jsx)(n.h1,{id:`класс-translate`,children:`Класс Translate`}),`
`,(0,c.jsx)(n.p,{children:`Статический служебный класс для управления переводами и локализованным текстом. Предоставляет мощные инструменты для получения, кэширования и отображения контента с поддержкой шаблонов, автоматическим определением локали и пакетной загрузкой запросов для оптимизации производительности.`}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пакетная загрузка`}),` — интеллектуально группирует запросы на перевод, отправляя их одним паком через 160 мс после постановки в очередь.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие шаблоны`}),` — поддерживает замену параметров в тексте как по индексам (`,(0,c.jsx)(n.code,{children:`[0]`}),`), так и по именованным ключам (`,(0,c.jsx)(n.code,{children:`{key}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронный и асинхронный доступ`}),` — методы для мгновенного получения текста из кэша (`,(0,c.jsx)(n.code,{children:`getSync`}),`) или гарантированной загрузки с сервера (`,(0,c.jsx)(n.code,{children:`get`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умный кэш`}),` — хранит переводы с учетом текущей локали и поддерживает фоллбэки (язык-страна → язык → глобально).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие источники данных`}),` — поддержка загрузки переводов как с сервера (API), так и из локальных файлов (через `,(0,c.jsx)(n.code,{children:`TranslateFile`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Локальная разработка`}),` — режим `,(0,c.jsx)(n.code,{children:`addNormalOrSync`}),` автоматически переключается между моками и реальными запросами в зависимости от окружения.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Класс является статическим и не требует создания экземпляра. Основная настройка заключается в указании URL-адреса API.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// Настройка URL для запросов
Translate.setUrl('/api/v1/translate')

// Предварительная загрузка необходимых текстов
await Translate.add(['welcome', 'auth.login', 'errors.required'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`получение-переводов`,children:`Получение переводов`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async get(name: string, replacement?: any): Promise<string>`}),` — Асинхронно получает текст. Если его нет в кэше и мы не на localhost, пытается загрузить его.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSync(name: string, first?: boolean, replacement?: any): string`}),` — Возвращает текст из кэша. Если `,(0,c.jsx)(n.code,{children:`first`}),` равен `,(0,c.jsx)(n.code,{children:`true`}),`, вернет `,(0,c.jsx)(n.code,{children:` `}),` при отсутствии текста, иначе — сам код `,(0,c.jsx)(n.code,{children:`name`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList(names: TranslateCode[]): Promise<TranslateList>`}),` — Получает объект с группой переводов (асинхронно).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListSync(names: TranslateCode[], first?: boolean): TranslateList`}),` — Получает объект с группой переводов из кэша (синхронно).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`управление-данными`,children:`Управление данными`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async add(names: string | string[]): Promise<void>`}),` — Добавляет коды в очередь на загрузку. Запросы группируются для минимизации нагрузки на сеть.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSync(data: Record<string, string>): void`}),` — Напрямую добавляет переведенные строки в кэш.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async addNormalOrSync(data: Record<string, string>): Promise<void>`}),` — Интеллектуальное добавление: на localhost работает как `,(0,c.jsx)(n.code,{children:`addSync`}),`, иначе — как `,(0,c.jsx)(n.code,{children:`add`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByLocation(data: Record<string, Record<string, string>>): void`}),` — Массовое добавление текстов с привязкой к конкретным локалям.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByFile(data: TranslateDataFile): void`}),` — Регистрирует загрузчики файлов перевода для ленивой загрузки (см. `,(0,c.jsx)(n.code,{children:`TranslateFile`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): typeof Translate`}),` — Устанавливает путь к API для загрузки переводов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPropsName(name: string): typeof Translate`}),` — Устанавливает имя свойства в теле запроса (по умолчанию `,(0,c.jsx)(n.code,{children:`list`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setReadApi(read: boolean): typeof Translate`}),` — Включает или отключает запросы к API для получения переводов (по умолчанию `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`translatecode`,children:(0,c.jsx)(n.code,{children:`TranslateCode`})}),`
`,(0,c.jsx)(n.p,{children:`Строка (имя кода) или массив строк. Массивы используются для замены в шаблонах:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string`}),` — например, `,(0,c.jsx)(n.code,{children:`'welcome'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — например, `,(0,c.jsx)(n.code,{children:`['welcome', 'Гость']`})]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatelist`,children:(0,c.jsx)(n.code,{children:`TranslateList`})}),`
`,(0,c.jsx)(n.p,{children:`Объект, где ключи — коды переводов, а значения — итоговые переведенные строки.`}),`
`,(0,c.jsx)(n.h3,{id:`translatedatafile`,children:(0,c.jsx)(n.code,{children:`TranslateDataFile`})}),`
`,(0,c.jsxs)(n.p,{children:[`Сопоставление строк локали с соответствующими функциями-загрузчиками. Используется в `,(0,c.jsx)(n.code,{children:`addSyncByFile`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`работа-с-шаблонами`,children:`Работа с шаблонами`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// В базе: "Привет, [0]! У вас {count} уведомлений."
const text = await Translate.get('user.notifications', ['Иван', { count: 5 }])
// Результат: "Привет, Иван! У вас 5 уведомлений."
`})}),`
`,(0,c.jsx)(n.h3,{id:`синхронное-использование-в-компонентах`,children:`Синхронное использование в компонентах`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Сначала загружаем всё нужное (например, при инициализации приложения)
await Translate.add(['btn.save', 'btn.cancel'])

// Внутри компонента используем синхронно, чтобы не плодить await
const label = Translate.getSync('btn.save')
`})}),`
`,(0,c.jsx)(n.h3,{id:`групповое-получение-списка`,children:`Групповое получение списка`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Гость'], // с заменой шаблона сразу
  'home.footer'
])

console.log(labels['home.welcome']) // "Добро пожаловать, Гость!"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};