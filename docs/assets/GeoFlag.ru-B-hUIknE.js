import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/ru/functional-basic/Classes/GeoFlag - Флаги Стран`}),`
`,(0,c.jsx)(n.h1,{id:`класс-geoflag`,children:`Класс GeoFlag`}),`
`,(0,c.jsxs)(n.p,{children:[`Класс для работы с флагами стран и географической информацией. Он предоставляет удобный интерфейс для получения иконок флагов, локализованных названий стран и языков. Использует синглтоны `,(0,c.jsx)(n.code,{children:`Geo`}),` и `,(0,c.jsx)(n.code,{children:`GeoIntl`}),` для корректного разрешения данных в зависимости от текущей локали.`]}),`
`,(0,c.jsx)(n.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Словарь флагов`}),` — встроенный статический список `,(0,c.jsx)(n.code,{children:`flags`}),`, связывающий коды ISO 3166-1 alpha-2 с именами иконок.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Локализованные данные`}),` — автоматический перевод названий стран и языков на язык текущего интерфейса.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Национальная поддержка`}),` — возможность получения названий стран на их «родном» языке (например, «Япония» и «日本» одновременно).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Масштабируемость`}),` — поддержка фильтрации и получения полных списков для селекторов стран.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`инициализация`,children:`Инициализация`}),`
`,(0,c.jsxs)(n.p,{children:[`Для создания экземпляра используйте конструктор `,(0,c.jsx)(n.code,{children:`GeoFlag(code)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Параметры:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code?: string`}),` — код страны или локали (например, `,(0,c.jsx)(n.code,{children:`'RU'`}),`, `,(0,c.jsx)(n.code,{children:`'en-US'`}),`). Если не указан, используется текущая локаль из системы `,(0,c.jsx)(n.code,{children:`Geo`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { GeoFlag } from '@dxtmisha/functional-basic'

// С текущей локалью
const flag = new GeoFlag()

// Для конкретной страны
const ruFlag = new GeoFlag('ru-RU')
`})}),`
`,(0,c.jsx)(n.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(n.h3,{id:`получение-данных`,children:`Получение данных`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code?: string): GeoFlagItem | undefined`}),` — Возвращает полный объект данных о стране.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFlag(code?: string): string | undefined`}),` — Возвращает только идентификатор иконки флага (например, `,(0,c.jsx)(n.code,{children:`'f-ru'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`списки`,children:`Списки`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(codes?: string[]): GeoFlagItem[]`}),` — Возвращает массив данных о странах.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getNational(codes?: string[]): GeoFlagNational[]`}),` — Возвращает список стран с национальными названиями.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`настройка`,children:`Настройка`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCode(code: string): this`}),` — Изменяет базовую локаль для текущего экземпляра.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`методы-работы-со-списками`,children:`Методы работы со списками`}),`
`,(0,c.jsx)(n.p,{children:`Основное различие между методами заключается в языке, на котором возвращаются названия стран и языков:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getList`})}),` — возвращает названия только на том языке, который установлен в экземпляре класса (например, всё на русском).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:(0,c.jsx)(n.code,{children:`getNational`})}),` — возвращает названия на языке вашего интерфейса + добавляет оригинальные названия на языке самой страны (например, «Япония» и «日本»).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`пример-разницы-в-результате`,children:`Пример разницы в результате:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const geo = new GeoFlag('ru-RU') // Установлен русский язык

// 1. getList возвращает только перевод
const list = geo.getList(['JP']) 
/* 
[{ country: 'Япония', ... }] 
*/

// 2. getNational возвращает перевод + оригинальное название
const national = geo.getNational(['JP']) 
/* 
[{ 
  country: 'Япония', 
  nationalCountry: '日本', 
  ... 
}] 
*/
`})}),`
`,(0,c.jsx)(n.h2,{id:`типы`,children:`Типы`}),`
`,(0,c.jsx)(n.h3,{id:`geoflagitem`,children:(0,c.jsx)(n.code,{children:`GeoFlagItem`})}),`
`,(0,c.jsx)(n.p,{children:`Базовый объект информации о флаге.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`country`}),`: string — Локализованное название страны.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`language`}),`: string — Локализованное название языка.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`standard`}),`: string — Полный стандарт локали (например, `,(0,c.jsx)(n.code,{children:`ru-RU`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icon`}),`: string — Имя иконки флага (префикс `,(0,c.jsx)(n.code,{children:`f-`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label`}),`: string — Метка для отображения (по умолчанию совпадает с `,(0,c.jsx)(n.code,{children:`country`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value`}),`: string — Код страны (ISO alpha-2).`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`geoflagnational`,children:(0,c.jsx)(n.code,{children:`GeoFlagNational`})}),`
`,(0,c.jsxs)(n.p,{children:[`Расширяет `,(0,c.jsx)(n.code,{children:`GeoFlagItem`}),` дополнительными полями:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalCountry`}),`: string — Название страны на её родном языке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`nationalLanguage`}),`: string — Название языка на родном языке.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`description`}),`: string — Краткое описание (дублирует `,(0,c.jsx)(n.code,{children:`nationalCountry`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(n.h3,{id:`список-популярных-стран-с-национальными-именами`,children:`Список популярных стран с национальными именами`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const geo = new GeoFlag('ru-RU')
const list = geo.getNational(['RU', 'CN', 'JP'])

/* 
Результат:
[
  { 
    country: 'Россия', 
    nationalCountry: 'Россия', 
    icon: 'f-ru', 
    ... 
  },
  { 
    country: 'Китай', 
    nationalCountry: '中国', 
    icon: 'f-cn', 
    ... 
  },
  { 
    country: 'Япония', 
    nationalCountry: '日本', 
    icon: 'f-jp', 
    ... 
  }
]
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};