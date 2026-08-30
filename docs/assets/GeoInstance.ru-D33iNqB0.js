import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/ru/functional-basic/Classes/GeoInstance - Экземпляр Географических Данных`}),`
`,(0,c.jsx)(t.h1,{id:`класс-geoinstance`,children:`Класс GeoInstance`}),`
`,(0,c.jsxs)(t.p,{children:[`Класс для работы с географическими данными на уровне экземпляра. Он отвечает за обработку кодов языков (ISO 639-1), стран (ISO 3166-1 alpha-2), временных зон и локализации. В отличие от статического класса `,(0,c.jsx)(t.code,{children:`Geo`}),`, `,(0,c.jsx)(t.code,{children:`GeoInstance`}),` позволяет создавать независимые объекты со своим состоянием, что особенно важно для изоляции запросов в SSR или в приложениях с несколькими контекстами локализации.`]}),`
`,(0,c.jsx)(t.h2,{id:`ключевые-особенности`,children:`Ключевые особенности`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Объектно-ориентированность`}),` — позволяет создавать несколько экземпляров с разными конфигурациями.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Автоматическое определение`}),` — интеллектуально определяет локаль через хранилище или настройки окружения при инициализации.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Интеграция с медиа-базой`}),` — предоставляет доступ к полной базе данных стран и языков из библиотеки `,(0,c.jsx)(t.code,{children:`@dxtmisha/media`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Динамическое управление временем`}),` — установка и получение смещения часового пояса на уровне конкретного экземпляра.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`базовое-использование`,children:`Базовое использование`}),`
`,(0,c.jsx)(t.p,{children:`Вы можете создать новый экземпляр класса для управления специфическим географическим контекстом.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { GeoInstance } from '@dxtmisha/functional-basic'

const geo = new GeoInstance()

// Получаем текущий код языка
console.log(geo.getLanguage()) // например, 'ru'

// Устанавливаем новую локаль для этого экземпляра
geo.set('en-US')

// Получаем форматированную временную зону
console.log(geo.getTimezoneFormat()) // например, '+03:00'
`})}),`
`,(0,c.jsx)(t.h2,{id:`методы`,children:`Методы`}),`
`,(0,c.jsx)(t.h3,{id:`информация`,children:`Информация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): GeoItemFull`}),` — Возвращает полный объект данных о текущей стране и языке.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getItem(): GeoItemFull`}),` — Возвращает копию объекта текущих настроек с учетом динамически установленного языка.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCountry(): string`}),` — Возвращает 2-буквенный код текущей страны (в верхнем регистре).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLanguage(): string`}),` — Возвращает 2-буквенный код текущего языка (в нижнем регистре).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getStandard(): string`}),` — Возвращает комбинированную строку локали на основе текущих настроек (например, `,(0,c.jsx)(t.code,{children:`'en-VN'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getLocation(): string`}),` — Возвращает текущую установленную локаль в виде "сырой" строки.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getFirstDay(): string`}),` — Возвращает код первого дня недели для текущей локали (например, `,(0,c.jsx)(t.code,{children:`'Mo'`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimezone(): number`}),` — Возвращает смещение часового пояса в минутах.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTimezoneFormat(): string`}),` — Возвращает смещение часового пояса в строковом формате (например, `,(0,c.jsx)(t.code,{children:`'+03:00'`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`выбор`,children:`Выбор`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getList(): GeoItem[]`}),` — Возвращает полный список доступных стран и языков.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`find(code: string): GeoItemFull`}),` — Алиас для метода `,(0,c.jsx)(t.code,{children:`getByCode`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCode(code?: string): GeoItemFull`}),` — Ищет данные по коду. `,(0,c.jsx)(t.strong,{children:`Приоритет: сначала язык`}),`, затем страна. Если передан код `,(0,c.jsx)(t.code,{children:`en-VN`}),`, будет возвращена запись для английского языка (`,(0,c.jsx)(t.code,{children:`en-US`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCodeFull(code: string): GeoItem | undefined`}),` — Ищет точное совпадение по полному коду локали (например, `,(0,c.jsx)(t.code,{children:`ru-RU`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByCountry(country: string): GeoItem | undefined`}),` — Ищет данные конкретно по коду страны.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getByLanguage(language: string): GeoItem | undefined`}),` — Ищет данные конкретно по коду языка.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`конфигурация`,children:`Конфигурация`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(code: string, save?: boolean): void`}),` — Устанавливает локаль для текущего экземпляра.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setTimezone(timezone: number): void`}),` — Устанавливает кастомное смещение часового пояса в минутах.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`вспомогательные-методы`,children:`Вспомогательные методы`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toStandard(item: GeoItem): string`}),` — Метод для формирования стандартной строки `,(0,c.jsx)(t.code,{children:`'язык-страна'`}),` из объекта `,(0,c.jsx)(t.code,{children:`GeoItem`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`примеры`,children:`Примеры`}),`
`,(0,c.jsx)(t.h3,{id:`изолированные-контексты`,children:`Изолированные контексты`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { GeoInstance } from '@dxtmisha/functional-basic'

const geoRU = new GeoInstance()
geoRU.set('ru-RU')

const geoEN = new GeoInstance()
geoEN.set('en-US')

console.log(geoRU.getLanguage()) // 'ru'
console.log(geoEN.getLanguage()) // 'en'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};