import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/ru/functional-basic/Classes/Translate - Управление Переводами и Текстами`}),`
`,(0,c.jsx)(n.h1,{id:`класс-translate`,children:`Класс Translate`}),`
`,(0,c.jsxs)(n.p,{children:[`Статическая обертка для стандартного экземпляра класса `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),`. Он управляет переводами и локализованным текстом на глобальном уровне, предоставляя инструменты для получения, кэширования и отображения контента с поддержкой шаблонов и автоматическим определением локали.`]}),`
`,(0,c.jsx)(n.h2,{id:`связь-с-translateinstance`,children:`Связь с TranslateInstance`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс `,(0,c.jsx)(n.code,{children:`Translate`}),` выступает в роли глобального, предварительно настроенного интерфейса для `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),`. Все статические методы вызывают соответствующие методы внутреннего экземпляра (`,(0,c.jsx)(n.code,{children:`Translate.getItem()`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Хотя `,(0,c.jsx)(n.code,{children:`Translate`}),` подходит для большинства общесистемных нужд перевода, вы можете создавать независимые среды перевода, используя `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Пакетная загрузка`}),` — интеллектуально группирует запросы на перевод, отправляя их одним паком через 160 мс после постановки в очередь.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Гибкие шаблоны`}),` — поддерживает замену параметров в тексте как по индексам (`,(0,c.jsx)(n.code,{children:`[0]`}),`), так и по именованным ключам (`,(0,c.jsx)(n.code,{children:`{key}`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Синхронный и асинхронный доступ`}),` — методы для мгновенного получения текста из кэша (`,(0,c.jsx)(n.code,{children:`getSync`}),`) или гарантированной загрузки с сервера (`,(0,c.jsx)(n.code,{children:`get`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Умный кэш`}),` — хранит переводы с учетом текущей локали и поддерживает фоллбэки (Местоположение > Язык > Глобально).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsx)(n.p,{children:`Класс является статическим и не требует создания экземпляра. Конфигурация применяется к глобальному экземпляру перевода.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Translate } from '@dxtmisha/functional-basic'

// Настройка URL API для глобального экземпляра
Translate.setUrl('/api/v1/translate')

// Предварительная загрузка необходимых текстов
await Translate.add(['welcome', 'auth.login'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setConfig(config: TranslateConfig): Translate`}),` — Устанавливает полную конфигурацию для экземпляра перевода.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setUrl(url: string): Translate`}),` — Изменяет адрес API для получения переводов.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPropsName(name: string): Translate`}),` — Изменяет имя свойства, используемое в API-запросе/ответе.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setReadApi(value: boolean): Translate`}),` — Включает или отключает получение переводов из API.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`получение-переводов`,children:`Получение переводов`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async get(name: string, replacement?: any): Promise<string>`}),` — Асинхронно получает текст. Если его нет в кэше и мы не на localhost, пытается загрузить его с сервера.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getSync(name: string, first?: boolean, replacement?: any): string`}),` — Возвращает текст из кэша. Если `,(0,c.jsx)(n.code,{children:`first`}),` равен `,(0,c.jsx)(n.code,{children:`true`}),`, вернет пробел `,(0,c.jsx)(n.code,{children:` `}),`, если текст отсутствует.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async getList<T>(names: T): Promise<TranslateList<T>>`}),` — Получает группу переводов (асинхронно).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getListSync<T>(names: T, first?: boolean): TranslateList<T>`}),` — Получает группу переводов из кэша (синхронно).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`групповое-обновление`,children:`Групповое обновление`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async add(names: string | string[]): Promise<void>`}),` — Добавляет несколько кодов в очередь для пакетной загрузки.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSync(data: Record<string, string>): void`}),` — Напрямую добавляет переводы в кэш.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`async addNormalOrSync(data: Record<string, string>): Promise<void>`}),` — Добавляет переводы напрямую на localhost, иначе ставит их в очередь на загрузку.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByLocation(data: Record<string, Record<string, string>>): void`}),` — Добавляет переводы для определенных локаций/местоположений.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addSyncByFile(data: TranslateDataFile): void`}),` — Добавляет переводы из определения файла.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`статика-vs-экземпляр`,children:`Статика vs Экземпляр`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Использование`}),`: Глобальный доступ к `,(0,c.jsx)(n.code,{children:`Translate`}),` из любой точки приложения или локализованные, независимые экземпляры `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Состояние`}),`: Состояние `,(0,c.jsx)(n.code,{children:`Translate`}),` разделяется между всем приложением, тогда как `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),` обеспечивает изолированное состояние для конкретных компонентов или модулей.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Создание`}),`: `,(0,c.jsx)(n.code,{children:`Translate`}),` не требует создания экземпляра (статическая обертка), а `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),` создается через `,(0,c.jsx)(n.code,{children:`new TranslateInstance()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`отдельные-экземпляры`,children:`Отдельные экземпляры`}),`
`,(0,c.jsxs)(n.p,{children:[`Если вам нужно управлять отдельным набором переводов (например, для конкретного подприложения или специализированного виджета), используйте `,(0,c.jsx)(n.code,{children:`TranslateInstance`}),` вместо глобального класса `,(0,c.jsx)(n.code,{children:`Translate`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { TranslateInstance, TranslateFile } from '@dxtmisha/functional-basic'

// 1. Создаем специализированный набор файлов переводов
const widgetFiles = new TranslateFile({
  'ru-RU': () => import('./locales/widget.ru-RU.json')
})

// 2. Инициализируем отдельный экземпляр перевода
const widgetTranslate = new TranslateInstance(
  '/api/widget/translate', 
  'list', 
  widgetFiles
)

// 3. Используем независимо
const label = await widgetTranslate.get('widget.welcome')
`})}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`translatecode`,children:(0,c.jsx)(n.code,{children:`TranslateCode`})}),`
`,(0,c.jsx)(n.p,{children:`Строка (имя кода) или массив строк. Массивы используются для замены в шаблонах:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string`}),` — например, `,(0,c.jsx)(n.code,{children:`'welcome'`})]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`string[]`}),` — например, `,(0,c.jsx)(n.code,{children:`['welcome', 'Гость']`})]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`translatelist`,children:(0,c.jsx)(n.code,{children:`TranslateList`})}),`
`,(0,c.jsx)(n.p,{children:`Объект, в котором ключи — коды переводов, а значения — итоговые переведенные строки.`}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`работа-с-шаблонами`,children:`Работа с шаблонами`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// В базе: "Привет, [0]! У вас {count} уведомлений."
const text = await Translate.get('user.notifications', ['Иван', { count: 5 }])
// Результат: "Привет, Иван! У вас 5 уведомлений."
`})}),`
`,(0,c.jsx)(n.h3,{id:`групповое-получение-списка`,children:`Групповое получение списка`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const labels = await Translate.getList([
  'home.title',
  ['home.welcome', 'Гость'], 
  'home.footer'
])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};